const QUOTES = [
  {
    quote:
      "We went from reviewing footage after something happened to getting a push notification while it was still happening. Our loss-prevention response time is a fraction of what it was.",
    name: "Priya Anand",
    role: "Director of Loss Prevention, Meridian Retail Group",
  },
  {
    quote:
      "The cross-camera tracking is the feature that sold us. Following someone across six zones used to take an analyst twenty minutes of scrubbing. Now it's one click.",
    name: "Marcus Delgado",
    role: "Head of Security, Delgado Manufacturing",
  },
  {
    quote:
      "Rollout across three warehouses took under a week because it sat on top of the cameras we already owned. That alone paid for the switch.",
    name: "Grace Okonkwo",
    role: "VP Operations, Coastline Ports",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-line dark:border-line-dark py-16 md:py-24">
      <div className="container-xw">
        <h2 className="font-display font-bold text-3xl tracking-tight text-ink dark:text-paper sm:text-4xl max-w-xl">
          What security teams say after switching
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {QUOTES.map((t) => (
            <figure
              key={t.name}
              className="border-t-2 border-signal pt-6"
            >
              <blockquote className="text-ink dark:text-paper leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-medium text-ink dark:text-paper">{t.name}</p>
                <p className="text-sm text-steel">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
