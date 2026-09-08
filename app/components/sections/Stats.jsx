"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const STATS = [
  { end: 340, suffix: "+", label: "active sites" },
  { end: 42, suffix: "M+", label: "hours of footage analyzed" },
  { end: 987, decimals: 1, divisor: 10, suffix: "%", label: "detection accuracy" },
  { end: 31, decimals: 1, divisor: 10, suffix: "s", label: "average alert time" },
];

function Stat({ end, suffix, label, decimals = 0, divisor = 1, inView }) {
  const raw = useCountUp(end, { start: inView, duration: 1600 });
  const display = decimals ? (raw / divisor).toFixed(decimals) : raw;

  return (
    <div>
      <p className="font-display font-bold text-4xl text-paper sm:text-5xl">
        {display}
        <span className="text-signal">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-steel-soft">{label}</p>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <section ref={ref} className="border-b border-line-dark bg-ink py-16 md:py-20">
      <div className="container-xw grid grid-cols-2 gap-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <Stat key={stat.label} {...stat} inView={inView} />
        ))}
      </div>
    </section>
  );
}
