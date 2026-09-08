import { ShoppingBag, Factory, GraduationCap, Landmark } from "lucide-react";

const SOLUTIONS = [
  {
    icon: ShoppingBag,
    title: "Retail",
    body: "Catch shrink at the point it happens \u2014 self-checkout sweetheart scans, organized retail theft patterns, and after-hours entry \u2014 without adding staff to watch monitors.",
  },
  {
    icon: Factory,
    title: "Warehousing & industrial",
    body: "Flag PPE violations, forklift-pedestrian near-misses, and unauthorized dock access as they happen, not in next week's incident review.",
  },
  {
    icon: GraduationCap,
    title: "Campus & facilities",
    body: "Cover a large perimeter with a small team \u2014 tailgating at access points, loitering after hours, and unattended packages all route to one dashboard.",
  },
  {
    icon: Landmark,
    title: "Critical infrastructure",
    body: "Perimeter breach detection and access logging built to hold up under compliance review, with an evidence trail regulators can audit.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="border-b border-line dark:border-line-dark py-16 md:py-24 bg-paper-raised dark:bg-ink-raised">
      <div className="container-xw">
        <div className="max-w-xl">
          <h2 className="font-display font-bold text-3xl tracking-tight text-ink dark:text-paper sm:text-4xl">
            Built for how your site actually runs
          </h2>
        </div>

        <div className="mt-12 grid gap-px sm:grid-cols-2 bg-line dark:bg-line-dark border border-line dark:border-line-dark">
          {SOLUTIONS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-paper-raised dark:bg-ink-raised p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Icon size={20} className="text-signal" strokeWidth={1.75} />
                <h3 className="font-display font-semibold text-lg text-ink dark:text-paper">
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-steel leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
