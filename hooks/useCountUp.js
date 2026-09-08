"use client";

import { useEffect, useRef, useState } from "react";

// Animates from 0 to `end` over `duration` ms once `start` becomes true.
// Uses requestAnimationFrame directly rather than a library so there's
// no added bundle weight for what's ~20 lines of math.
export function useCountUp(end, { start = false, duration = 1500 } = {}) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Reduced-motion accessibility fallback: skip the animation and jump
      // straight to the final value, not a derived-state anti-pattern.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(end);
      return;
    }

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out cubic — quick start, gentle settle
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => frame.current && cancelAnimationFrame(frame.current);
  }, [start, end, duration]);

  return value;
}
