import { useEffect, useRef, useState } from "react";

export interface ScrollSpyState {
  activeId: string;
  progress: number;
}

export function useScrollSpy(ids: string[]): ScrollSpyState {
  const [state, setState] = useState<ScrollSpyState>({
    activeId: ids[0] ?? "",
    progress: 0,
  });
  const key = ids.join("|");
  const idsRef = useRef(ids);
  useEffect(() => {
    idsRef.current = ids;
  });

  useEffect(() => {
    if (ids.length === 0) return;

    function update() {
      const triggerY = window.innerHeight * 0.28;
      let activeIdx = 0;

      for (let i = 0; i < idsRef.current.length; i++) {
        const el = document.getElementById(idsRef.current[i]);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= triggerY) {
          activeIdx = i;
        }
      }

      const activeEl = document.getElementById(idsRef.current[activeIdx]);
      let progress = 0;
      if (activeEl) {
        const rect = activeEl.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrolled = triggerY - rect.top;
        progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
      }

      setState((prev) => {
        const activeId = idsRef.current[activeIdx];
        if (prev.activeId === activeId && Math.abs(prev.progress - progress) < 0.005) {
          return prev;
        }
        return { activeId, progress };
      });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return state;
}
