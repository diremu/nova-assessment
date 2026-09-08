import Image from "next/image";
import Logo from "../ui/Logo";

function SocialBadge({ image, href, ariaLabel }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line-dark font-mono text-[11px] text-steel-soft hover:border-steel-soft hover:text-paper transition-colors"
    >
      <Image src={image.src} alt={image.alt} width={16} height={16} />
    </a>
  );
}

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Solutions", href: "#solutions" },
      { label: "Pricing", href: "#pricing" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#product" },
      { label: "Careers", href: "#" },
      { label: "Trust & security", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "FAQ", href: "#faq" },
      { label: "Status", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-xw py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-steel-soft leading-relaxed">
              Detection software and hardware for security teams who need
              evidence, not just footage.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialBadge image={ {src: '/linkedin.svg', alt: 'NOVA on LinkedIn'}} href="#" ariaLabel="NOVA on LinkedIn" />
              <SocialBadge image={ {src: '/twitter.svg', alt: 'NOVA on X'}} href="#" ariaLabel="NOVA on X" />
              <SocialBadge image={ {src: '/github.svg', alt: 'NOVA on GitHub'}} href="#" ariaLabel="NOVA on GitHub" />
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium text-paper">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-steel-soft hover:text-paper transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-steel-soft">
            © {new Date().getFullYear()} NOVA Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-steel-soft hover:text-paper transition-colors">
              Privacy policy
            </a>
            <a href="#" className="text-xs text-steel-soft hover:text-paper transition-colors">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
