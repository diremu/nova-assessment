"use client";

import { useEffect, useRef, useState } from "react";

// Fires once when the element enters the viewport, then disconnects.
// Used to trigger scroll-reveal animations and stat count-ups without
// re-triggering on every scroll pass.
export function useInView({ threshold = 0.25, rootMargin = "0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Environment fallback when IntersectionObserver isn't supported,
      // not derived state.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
