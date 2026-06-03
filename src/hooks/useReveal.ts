import { useEffect, useRef, useState } from "react";

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

type RevealCallback = (delayMs: number) => void;

const callbacks = new WeakMap<Element, RevealCallback>();
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      // Elements that crossed the threshold in the same callback form a batch.
      // Stagger their reveals by 80ms, capped at 3 (DESIGN.md motion rules).
      const intersecting = entries.filter((e) => e.isIntersecting);
      intersecting.forEach((entry, i) => {
        const cb = callbacks.get(entry.target);
        if (!cb) return;
        cb(Math.min(i, 2) * 80);
        observer!.unobserve(entry.target);
        callbacks.delete(entry.target);
      });
    },
    // threshold 0 + a bottom margin so a section reveals as its top enters
    // view. (A fixed ratio fails for sections taller than the viewport.)
    { threshold: 0, rootMargin: "0px 0px -10% 0px" },
  );
  return observer;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    const obs = getObserver();
    callbacks.set(el, (d) => {
      setDelay(d);
      setVisible(true);
    });
    obs.observe(el);

    return () => {
      obs.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return { ref, visible, delay };
}
