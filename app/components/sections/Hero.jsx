import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line dark:border-line-dark">
      <div className="container-xw grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line dark:border-line-dark px-3 py-1 text-xs text-steel font-mono">
            <ShieldCheck size={13} className="text-lens" />
            SOC 2 Type II certified, live at 340+ sites
          </span>

          <h1 className="mt-6 font-display font-bold text-4xl leading-[1.1] tracking-tight text-ink dark:text-paper sm:text-5xl lg:text-[3.25rem]">
            See what matters most.
            <br />
            Miss nothing, Ever.
          </h1>

          <p className="mt-6 max-w-md text-lg text-steel leading-relaxed">
            NOVA pairs your existing cameras — or ours — with detection models that flag
            what a person watching twelve feeds at once would miss. Built for security
            teams who need evidence, not just footage.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-signal px-5 py-3 text-sm font-medium text-paper hover:bg-signal-strong transition-colors"
            >
              Request a demo
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-md border border-line dark:border-line-dark px-5 py-3 text-sm font-medium text-ink dark:text-paper hover:border-steel transition-colors"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-xs text-steel-soft">
            No credit card required · Deploys alongside your current NVR setup
          </p>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-line dark:border-line-dark bg-paper-raised dark:bg-ink-raised overflow-hidden">
            <div className="flex items-center justify-between border-b border-line dark:border-line-dark px-4 py-2.5">
              <span className="font-mono text-xs text-steel">Site: Warehouse 4</span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                LIVE
              </span>
            </div>

            <div className="relative aspect-600/290 overflow-hidden bg-ink">
              <Image
                src="/images/hero-cam.png"
                alt="Warehouse aisle camera feed"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
                className="object-cover"
              />
              <div className="absolute left-[48%] top-[19%] h-[17%] w-[5%] min-w-[26px]">
                <div className="absolute -top-px -left-px h-4 w-4 border-l-2 border-t-2 border-signal" />
                <div className="absolute -top-px -right-px h-4 w-4 border-r-2 border-t-2 border-signal" />
                <div className="absolute -bottom-px -left-px h-4 w-4 border-l-2 border-b-2 border-signal" />
                <div className="absolute -bottom-px -right-px h-4 w-4 border-r-2 border-b-2 border-signal" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-signal px-1.5 py-0.5 font-mono text-[11px] text-paper">
                  Person · 98%
                </span>
              </div>
            </div>

            <div className="border-t border-line dark:border-line-dark px-4 py-3">
              <p className="font-mono text-[11px] text-steel">
                15:37:36 — unrecognized entry, BV Rear aisle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}