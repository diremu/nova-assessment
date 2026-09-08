export default function FinalCta() {
  return (
    <section id="contact" className="bg-ink py-20 md:py-28">
      <div className="container-xw text-center">
        <h2 className="font-display font-bold text-3xl tracking-tight text-paper sm:text-4xl md:text-5xl max-w-2xl mx-auto">
          Stop reviewing footage after the fact
        </h2>
        <p className="mt-4 text-steel-soft max-w-md mx-auto">
          Get a walkthrough on your own site's footage — no generic demo reel.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@nova-surveillance.example"
            className="inline-flex items-center rounded-md bg-signal px-6 py-3 text-sm font-medium text-paper hover:bg-signal-strong transition-colors"
          >
            Request a demo
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-md border border-line-dark px-6 py-3 text-sm font-medium text-paper hover:border-steel-soft transition-colors"
          >
            View pricing
          </a>
        </div>
      </div>
    </section>
  );
}
