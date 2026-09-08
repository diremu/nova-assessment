"use client";

import { useInView } from "@/hooks/useInView";

// A single, restrained reveal treatment used consistently across sections
// on first scroll into view \u2014 deliberately not applied to every card or
// list item individually, to avoid the "fade-and-slide-up on everything"
// pattern.
export default function Reveal({ children, className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
