import { ScanEye, GitBranch, Search, BellOff, DoorClosed, FileCheck } from "lucide-react";

const FEATURES = [
  {
    icon: ScanEye,
    title: "Real-time detection",
    body: "Flags people, vehicles, and restricted items the moment they enter frame, across every camera on the site at once.",
  },
  {
    icon: GitBranch,
    title: "Cross-camera tracking",
    body: "Follows a subject as they move between camera zones, stitching separate clips into one continuous path.",
  },
  {
    icon: Search,
    title: "Natural-language search",
    body: 'Search archived footage the way you\u2019d describe it \u2014 "grey van, loading dock, after 6pm" \u2014 instead of scrubbing timelines by hand.',
  },
  {
    icon: BellOff,
    title: "Alert triage",
    body: "Learns your site's normal patterns and suppresses the routine ones, so an alert means something happened.",
  },
  {
    icon: DoorClosed,
    title: "Access control integration",
    body: "Connects to your existing badge and door systems so video and entry events show up on one timeline.",
  },
  {
    icon: FileCheck,
    title: "Exportable evidence trail",
    body: "Every clip pulled for a case keeps a signed chain-of-custody log, ready for legal or insurance review.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-b border-line dark:border-line-dark py-16 md:py-24">
      <div className="container-xw">
        <div className="max-w-xl">
          <h2 className="font-display font-bold text-3xl tracking-tight text-ink dark:text-paper sm:text-4xl">
            Everything a monitoring team needs, none of the noise
          </h2>
          <p className="mt-4 text-steel leading-relaxed">
            NOVA replaces the wall of passive monitors with a system that watches
            back, so your team spends time on incidents, not footage.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 border-t border-l border-line dark:border-line-dark sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="border-r border-b border-line dark:border-line-dark p-6 sm:p-8"
            >
              <Icon size={22} className="text-lens" strokeWidth={1.75} />
              <h3 className="mt-4 font-display font-semibold text-lg text-ink dark:text-paper">
                {title}
              </h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
