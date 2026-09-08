"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // A sentinel-based IntersectionObserver avoids a scroll-event listener
    // firing on every pixel of scroll.
    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "600px";
    sentinel.style.height = "1px";
    sentinel.style.width = "1px";
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    });
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper dark:bg-paper dark:text-ink shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
