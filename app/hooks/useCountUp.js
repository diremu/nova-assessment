"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(end, { start = false, duration = 1500 } = {}) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
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
