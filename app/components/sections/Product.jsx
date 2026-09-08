import { Camera, Cpu } from "lucide-react";

export default function Product() {
  return (
    <section id="product" className="border-b border-line dark:border-line-dark py-16 md:py-24 bg-paper-raised dark:bg-ink-raised">
      <div className="container-xw grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display font-bold text-3xl tracking-tight text-ink dark:text-paper sm:text-4xl">
            One system, from the lens to the alert
          </h2>
          <p className="mt-4 text-steel leading-relaxed max-w-lg">
            Most security stacks stitch together a camera vendor, a separate
            recorder, and a monitoring team squinting at a wall of screens.
            NOVA collapses that into one pipeline: hardware that captures
            clean footage, and software that actually understands it.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <Camera size={20} className="mt-0.5 shrink-0 text-signal" strokeWidth={1.75} />
              <div>
                <h3 className="font-display font-semibold text-ink dark:text-paper">
                  NOVA cameras, or yours
                </h3>
                <p className="mt-1 text-sm text-steel leading-relaxed">
                  Our fixed and PTZ camera lines are built for the detection
                  models to run on-device. Already have an ONVIF-compatible
                  fleet? Point it at NOVA instead of replacing it.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Cpu size={20} className="mt-0.5 shrink-0 text-signal" strokeWidth={1.75} />
              <div>
                <h3 className="font-display font-semibold text-ink dark:text-paper">
                  Detection that runs at the edge
                </h3>
                <p className="mt-1 text-sm text-steel leading-relaxed">
                  Models process footage on-site before anything touches the
                  network, which keeps alerts fast and raw video off servers
                  it doesn't need to be on.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-line dark:border-line-dark overflow-hidden">
          <div className="border-b border-line dark:border-line-dark px-4 py-2.5 flex items-center justify-between">
            <span className="font-mono text-sm text-steel">Detection pipeline</span>
          </div>
          <div className="divide-y divide-line dark:divide-line-dark">
            {[
              ["Capture", "Camera sensor, 4K @ 30fps"],
              ["Infer", "On-device model, ~40ms per frame"],
              ["Classify", "Person, vehicle, restricted item, none"],
              ["Alert", "Pushed to app + integrations if matched"],
            ].map(([step, detail], i) => (
              <div key={step} className="flex items-center gap-4 px-4 py-3.5">
                <span className="font-mono text-xs text-steel-soft w-4">{i + 1}</span>
                <span className="text-sm font-medium text-ink dark:text-paper w-20 shrink-0">
                  {step}
                </span>
                <span className="text-xs text-steel">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
