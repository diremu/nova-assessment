"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do I need to replace my existing cameras?",
    a: "No. NOVA works with any ONVIF-compatible camera, which covers most fleets installed in the last decade. You can also add NOVA hardware alongside them, or replace gradually as units age out.",
  },
  {
    q: "Where does the video actually get processed?",
    a: "Detection runs on-device at the edge, so raw footage doesn't need to leave your network to generate an alert. You choose what gets sent to the cloud for storage and how long it's retained.",
  },
  {
    q: "How accurate is the detection, really?",
    a: "Our published benchmark is 98.7% across the standard person/vehicle/restricted-item classes, measured on a held-out set from live customer sites, not a curated demo reel. Accuracy varies with camera placement and lighting, which our onboarding team checks during setup.",
  },
  {
    q: "Can footage be used as legal evidence?",
    a: "Yes. Every exported clip carries a signed chain-of-custody log: who accessed it, when, and what was exported, which is what most jurisdictions require for footage to be admissible.",
  },
  {
    q: "What happens if my internet connection drops?",
    a: "Cameras keep recording locally and detection keeps running at the edge. Alerts queue and sync once connectivity returns, so you don't lose a monitoring window during an outage.",
  },
  {
    q: "Is there a contract, or can I cancel anytime?",
    a: "Starter and Team plans are month-to-month by default, with a discount for committing annually. Enterprise plans are typically annual and negotiated with your account team.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-b border-line dark:border-line-dark py-16 md:py-24">
      <div className="container-xw grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-display font-bold text-3xl tracking-tight text-ink dark:text-paper sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-steel leading-relaxed max-w-sm">
            Can't find what you're looking for? Reach out and a real person on
            our team will get back to you.
          </p>
        </div>

        <div className="divide-y divide-line dark:divide-line-dark border-t border-b border-line dark:border-line-dark">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-ink dark:text-paper">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-steel transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm text-steel leading-relaxed pr-8">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
