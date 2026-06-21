import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

/**
 * Living-halftone pond hero. The whole image is a single fixed grid of
 * identical dots painted in the page's own ink/parchment; shading, depth and
 * motion are all expressed by which dots are ON. See ref/POND.md for the spec.
 */
export function Hero({ ctaHref }: { ctaHref: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const context = canvasEl.getContext("2d");
    if (!context) return;
    // Non-null aliases so narrowing survives inside the nested closures below.
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = context;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cssVar = (n: string, fb: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(n).trim() || fb;

    // ---- Uniform dot grid ------------------------------------------------
    const S = 8; // grid spacing (px)
    const SHAPE: "circle" | "square" = "circle";
    const DOT_R = 2.7; // every mark is EXACTLY this size
    const SQ = S * 0.72;
    const SQUASH = 0.82; // top-down perspective foreshortening
    const TAU = Math.PI * 2;
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const INK = cssVar("--color-pond-water", "#1a1816");
    // element identity → ink hue (water=0, lily=1, fish=2). Marks stay identical
    // in size/opacity; only the hue changes.
    const PALETTE = [INK, cssVar("--color-pond-lily", "#5e8c3f"), cssVar("--color-pond-koi", "#e2682f")];

    // 8x8 Bayer threshold matrix (0..63)
    const BAYER = [
      0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4, 36, 14, 46, 6, 38, 60,
      28, 52, 20, 62, 30, 54, 22, 3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25, 15, 47,
      7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21,
    ];

    let W = 0, H = 0, DPR = 1, cols = 0, rows = 0, t = 0;
    let buf = new Float32Array(0);
    let colBuf = new Uint8Array(0);
    let occ = new Uint8Array(0); // 1 where a lily pad sits → occludes fish/ripples
    let noiseMap = new Float32Array(0);
    let lilies: Lily[] = [];
    let ripples: Ripple[] = [];
    let fishes: Fish[] = [];
    let nextRippleAt = 0, nextFishAt = 0;
    let rafId = 0;
    let resizeTimer: number | undefined;

    const threshold = (col: number, row: number) =>
      0.55 * ((BAYER[(row & 7) * 8 + (col & 7)] + 0.5) / 64) + 0.45 * noiseMap[row * cols + col];

    const cellX = (c: number) => c * S + S * 0.5;
    const cellY = (r: number) => r * S + S * 0.5;
    const toCol = (px: number) => Math.round(px / S - 0.5);
    const toRow = (py: number) => Math.round(py / S - 0.5);
    function mark(col: number, row: number, v: number, c: number) {
      if (col < 0 || row < 0 || col >= cols || row >= rows) return;
      const i = row * cols + col;
      if (c === 1) occ[i] = 1;        // lily pad is an opaque occluder
      else if (occ[i]) return;        // fish/ripples never show through a pad
      if (v > buf[i]) { buf[i] = v; colBuf[i] = c; }
    }
    const angDiff = (a: number, b: number) =>
      Math.abs((((a - b + Math.PI) % TAU) + TAU) % TAU - Math.PI);

    // ---- Lily pad --------------------------------------------------------
    interface LilyCell { gx: number; gy: number; i: number; }
    interface Lily {
      baseCol: number; baseRow: number; cells: LilyCell[];
      bobAmp: number; swayAmp: number; spd: number; phase: number; _r: number;
    }
    function makeLily(x: number, y: number, radiusPx: number): Lily {
      const cells: LilyCell[] = [];
      const cellsR = Math.ceil(radiusPx / S);
      const notch = rand(0, TAU);
      const notchW = rand(0.3, 0.46);
      for (let gy = -cellsR; gy <= cellsR; gy++) {
        for (let gx = -cellsR; gx <= cellsR; gx++) {
          const dx = gx * S, dy = (gy * S) / SQUASH;
          const r = Math.hypot(dx, dy);
          if (r > radiusPx) continue;
          const ang = Math.atan2(dy, dx);
          if (angDiff(ang, notch) < notchW && r > radiusPx * 0.16) continue;
          let inten = 0.6;
          if (r > radiusPx * 0.8) inten = 1.0;
          cells.push({ gx, gy, i: inten });
        }
      }
      const veins = Math.floor(rand(5, 8));
      for (let v = 0; v < veins; v++) {
        const ang = notch + Math.PI + (v - veins / 2) * rand(0.45, 0.75);
        for (let s = S; s < radiusPx * 0.92; s += S) {
          const gx = Math.round((Math.cos(ang) * s) / S);
          const gy = Math.round((Math.sin(ang) * s * SQUASH) / S);
          cells.push({ gx, gy, i: 1.0 });
        }
      }
      return {
        baseCol: toCol(x), baseRow: toRow(y), cells,
        bobAmp: Math.round(rand(1, 2)), swayAmp: Math.round(rand(0, 1)),
        spd: rand(0.35, 0.7), phase: rand(0, TAU), _r: radiusPx,
      };
    }
    function stampLily(L: Lily) {
      const bob = Math.round(Math.sin(t * L.spd + L.phase) * L.bobAmp);
      const sway = Math.round(Math.cos(t * L.spd * 0.7 + L.phase) * L.swayAmp);
      for (let k = 0; k < L.cells.length; k++) {
        const c = L.cells[k];
        mark(L.baseCol + c.gx + sway, L.baseRow + c.gy + bob, c.i, 1);
      }
    }

    // ---- Ripples ---------------------------------------------------------
    interface Ripple { x: number; y: number; r: number; maxR: number; speed: number; rings: number; }
    function spawnRipple(x?: number, y?: number, maxR?: number) {
      ripples.push({
        x: x ?? rand(W * 0.12, W * 0.88),
        y: y ?? rand(H * 0.18, H * 0.85),
        r: S, maxR: maxR ?? rand(70, 150),
        speed: rand(22, 38), rings: Math.floor(rand(2, 4)),
      });
    }
    function stampRipples(dt: number) {
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += rp.speed * dt;
        const life = 1 - rp.r / rp.maxR;
        if (life <= 0) { ripples.splice(i, 1); continue; }
        for (let k = 0; k < rp.rings; k++) {
          const ringR = rp.r - k * (S * 1.6);
          if (ringR < S) continue;
          const step = Math.max(10, Math.floor((TAU * ringR) / (S * 0.8)));
          const inten = life * (1 - k / (rp.rings + 1));
          for (let s = 0; s < step; s++) {
            const a = (s / step) * TAU;
            mark(toCol(rp.x + Math.cos(a) * ringR), toRow(rp.y + Math.sin(a) * ringR * SQUASH), inten, 0);
          }
        }
      }
    }

    // ---- Fish: follow-the-leader spine + traveling tail wave -------------
    interface Pt { x: number; y: number; }
    interface Fish {
      pts: Pt[]; N: number; seg: number; heading: number; speed: number;
      wigFreq: number; wigPhase: number; ampCells: number; seed: number; seed2: number; scale: number;
    }
    function makeFish(): Fish {
      const fromLeft = Math.random() < 0.5;
      const N = 20;
      const seg = S * rand(1.25, 1.55);
      const y = rand(H * 0.3, H * 0.74);
      const heading = (fromLeft ? 0 : Math.PI) + rand(-0.35, 0.35);
      const hx = fromLeft ? -seg * N : W + seg * N;
      const pts: Pt[] = [];
      for (let i = 0; i < N; i++)
        pts.push({ x: hx - Math.cos(heading) * seg * i, y: y - Math.sin(heading) * seg * i });
      return {
        pts, N, seg, heading, speed: rand(46, 74),
        wigFreq: rand(4.5, 7), wigPhase: rand(0, TAU), ampCells: rand(2.2, 3.4),
        seed: rand(0, 99), seed2: rand(0, 99), scale: rand(0.85, 1.2),
      };
    }
    function widthCells(u: number, scale: number) {
      let w: number;
      if (u < 0.18) w = 1.7 + (2.7 - 1.7) * (u / 0.18);
      else w = 2.7 * Math.pow(1 - (u - 0.18) / 0.82, 0.95);
      return Math.max(0, Math.round(w * scale));
    }
    function updateFish(f: Fish, dt: number) {
      f.heading += (Math.sin(t * 0.6 + f.seed) * 0.45 + Math.sin(t * 0.21 + f.seed2) * 0.28) * dt;
      const head = f.pts[0];
      head.x += Math.cos(f.heading) * f.speed * dt;
      head.y += Math.sin(f.heading) * f.speed * dt;
      for (let i = 1; i < f.N; i++) {
        const a = f.pts[i], lead = f.pts[i - 1];
        const dx = a.x - lead.x, dy = a.y - lead.y;
        const d = Math.hypot(dx, dy) || 1e-4;
        a.x = lead.x + (dx / d) * f.seg;
        a.y = lead.y + (dy / d) * f.seg;
      }
      const m = f.seg * f.N + 60;
      return !(head.x < -m || head.x > W + m || head.y < -m || head.y > H + m);
    }
    function stampFish(f: Fish) {
      for (let i = 0; i < f.N; i++) {
        const u = i / (f.N - 1);
        const p = f.pts[i];
        const prev = f.pts[Math.max(0, i - 1)], next = f.pts[Math.min(f.N - 1, i + 1)];
        let tx = next.x - prev.x, ty = next.y - prev.y;
        const tl = Math.hypot(tx, ty) || 1e-4; tx /= tl; ty /= tl;
        const perpx = -ty, perpy = tx;
        const amp = f.ampCells * S * Math.pow(u, 1.3);
        const off = Math.sin(t * f.wigFreq - u * 5.2 + f.wigPhase) * amp;
        const cx = p.x + perpx * off, cy = p.y + perpy * off;
        const half = widthCells(u, f.scale);
        for (let j = -half; j <= half; j++)
          mark(toCol(cx + perpx * j * S), toRow(cy + perpy * j * S), 1.0, 2);
      }
    }

    // ---- Scene -----------------------------------------------------------
    function buildLilies() {
      lilies = [];
      const target = 3;
      const m = Math.min(W, H);
      let tries = 0, spread = 1.35;
      while (lilies.length < target && tries < 4000) {
        tries++;
        if (tries % 800 === 0) spread *= 0.85;
        const radius = rand(m * 0.13, m * 0.3);
        const rx = radius, ry = radius * SQUASH;
        const x = rand(rx, W - rx);
        const y = rand(ry + H * 0.04, H - ry - H * 0.04);
        let ok = true;
        for (const L of lilies) {
          if (Math.hypot(cellX(L.baseCol) - x, cellY(L.baseRow) - y) < (L._r + radius) * spread) { ok = false; break; }
        }
        if (ok) lilies.push(makeLily(x, y, radius));
      }
    }

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.floor(W * DPR); canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cols = Math.ceil(W / S) + 1; rows = Math.ceil(H / S) + 1;
      buf = new Float32Array(cols * rows);
      colBuf = new Uint8Array(cols * rows);
      occ = new Uint8Array(cols * rows);
      noiseMap = new Float32Array(cols * rows);
      for (let i = 0; i < noiseMap.length; i++) noiseMap[i] = Math.random();
      buildLilies();
    }

    // ---- Loop ------------------------------------------------------------
    let last = performance.now();
    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05); last = now;
      if (!reduceMotion) t += dt;

      for (let row = 0; row < rows; row++) {
        const py = cellY(row);
        for (let col = 0; col < cols; col++) {
          const px = cellX(col);
          const I =
            0.05 + 0.055 * Math.sin(px * 0.018 + py * 0.01 - t * 0.9) +
            0.045 * Math.sin(py * 0.026 + px * 0.006 + t * 0.6);
          const idx = row * cols + col;
          buf[idx] = I > 0 ? I : 0;
          colBuf[idx] = 0;
          occ[idx] = 0;
        }
      }
      for (let i = 0; i < lilies.length; i++) stampLily(lilies[i]);
      stampRipples(reduceMotion ? 0 : dt);
      if (!reduceMotion) {
        for (let i = fishes.length - 1; i >= 0; i--) {
          if (!updateFish(fishes[i], dt)) { fishes.splice(i, 1); nextFishAt = t + rand(3, 7); }
        }
        if (fishes.length === 0 && t > nextFishAt) {
          fishes.push(makeFish());
          if (Math.random() < 0.25) fishes.push(makeFish());
        }
        if (t > nextRippleAt) { spawnRipple(); nextRippleAt = t + rand(1.6, 3.6); }
      }
      for (let i = 0; i < fishes.length; i++) stampFish(fishes[i]);

      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = 1;
      const sq = SHAPE === "square";
      for (let p = 0; p < PALETTE.length; p++) {
        ctx.fillStyle = PALETTE[p];
        ctx.beginPath();
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const idx = row * cols + col;
            if (colBuf[idx] === p && buf[idx] > threshold(col, row)) {
              const px = cellX(col), py = cellY(row);
              if (sq) ctx.rect(px - SQ * 0.5, py - SQ * 0.5, SQ, SQ);
              else { ctx.moveTo(px + DOT_R, py); ctx.arc(px, py, DOT_R, 0, TAU); }
            }
          }
        }
        ctx.fill();
      }
      rafId = requestAnimationFrame(frame);
    }

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      spawnRipple(e.clientX - rect.left, e.clientY - rect.top, rand(60, 110));
    };
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    };
    canvas.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);

    resize();
    nextFishAt = 1.2;
    if (reduceMotion) spawnRipple(W * 0.4, H * 0.5, 120);
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(resizeTimer);
      canvas.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className={styles.hero} aria-label="Animated pond illustration">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.ctaWrap}>
        <a className={styles.cta} href={ctaHref}>
          Explore my work
        </a>
      </div>
    </section>
  );
}
