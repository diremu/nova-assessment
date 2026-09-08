"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    monthly: 89,
    annual: 71,
    tagline: "For a single site getting off passive recording.",
    features: ["Up to 8 cameras", "Real-time detection", "14-day cloud retention", "Email + app alerts"],
  },
  {
    name: "Team",
    monthly: 219,
    annual: 175,
    tagline: "For multi-site teams that need cross-camera tracking.",
    features: [
      "Up to 40 cameras",
      "Everything in Starter",
      "Cross-camera tracking",
      "90-day cloud retention",
      "Access control integration",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    tagline: "For campuses and infrastructure with compliance needs.",
    features: [
      "Unlimited cameras",
      "Everything in Team",
      "On-prem deployment option",
      "Custom retention & audit logs",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="border-b border-line dark:border-line-dark py-16 md:py-24 bg-paper-raised dark:bg-ink-raised">
      <div className="container-xw">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-3xl tracking-tight text-ink dark:text-paper sm:text-4xl">
              Straightforward, per-camera pricing
            </h2>
            <p className="mt-4 text-steel leading-relaxed">
              No setup fees. Cancel or change plans anytime as your site count changes.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 rounded-md border border-line dark:border-line-dark p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded px-3 py-1.5 text-sm transition-colors ${
                !annual ? "bg-ink text-paper dark:bg-paper dark:text-ink" : "text-steel"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded px-3 py-1.5 text-sm transition-colors ${
                annual ? "bg-ink text-paper dark:bg-paper dark:text-ink" : "text-steel"
              }`}
            >
              Annual
              <span className="ml-1.5 text-signal">{"\u201320%"}</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <div
                key={plan.name}
                className={`rounded-lg p-8 ${
                  plan.featured
                    ? "border-2 border-signal bg-paper dark:bg-ink"
                    : "border border-line dark:border-line-dark bg-paper dark:bg-ink"
                }`}
              >
                {plan.featured && (
                  <span className="inline-block rounded bg-signal px-2.5 py-1 text-xs font-medium text-paper">
                    Most popular
                  </span>
                )}
                <h3 className="mt-4 font-display font-semibold text-xl text-ink dark:text-paper">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-steel">{plan.tagline}</p>

                <p className="mt-6 flex items-baseline gap-1">
                  {price ? (
                    <>
                      <span className="font-display font-bold text-4xl text-ink dark:text-paper">
                        ${price}
                      </span>
                      <span className="text-sm text-steel">/ camera / mo</span>
                    </>
                  ) : (
                    <span className="font-display font-bold text-4xl text-ink dark:text-paper">
                      Custom
                    </span>
                  )}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-steel">
                      <Check size={16} className="mt-0.5 shrink-0 text-lens" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block rounded-md px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                    plan.featured
                      ? "bg-signal text-paper hover:bg-signal-strong"
                      : "border border-line dark:border-line-dark text-ink dark:text-paper hover:border-steel"
                  }`}
                >
                  {price ? "Start free trial" : "Talk to sales"}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
