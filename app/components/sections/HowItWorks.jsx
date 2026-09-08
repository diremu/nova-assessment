const STEPS = [
  {
    title: "Connect your cameras",
    body: "Point your existing ONVIF-compatible fleet at NOVA, or install our hardware. Most sites are live within a day.",
  },
  {
    title: "Draw your detection zones",
    body: "Mark what matters on each feed \u2014 a loading dock, a restricted door, a perimeter fence \u2014 and set what should trigger an alert there.",
  },
  {
    title: "Get alerts worth acting on",
    body: "NOVA filters out the routine motion and sends your team a notification only when something in a zone actually matches a rule.",
  },
  {
    title: "Review and export evidence",
    body: "Pull the exact clip, tagged and timestamped, straight into a report or hand it to law enforcement with the chain of custody intact.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-line dark:border-line-dark py-16 md:py-24">
      <div className="container-xw">
        <div className="max-w-xl">
          <h2 className="font-display font-bold text-3xl tracking-tight text-ink dark:text-paper sm:text-4xl">
            Live in four steps
          </h2>
          <p className="mt-4 text-steel leading-relaxed">
            No professional services team required — most customers configure
            their first site themselves.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative pl-0">
              <span className="font-mono text-3xl text-line dark:text-line-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display font-semibold text-ink dark:text-paper">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
