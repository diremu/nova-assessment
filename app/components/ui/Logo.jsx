export default function Logo({ withWordmark = true, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 140 140"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="10" strokeLinecap="round">
          <path d="M40 36H56M40 36V52" />
          <path d="M100 36H84M100 36V52" />
          <path d="M40 96H56M40 80V96" />
          <path d="M100 96H84M100 80V96" />
        </g>
        <circle cx="70" cy="66" r="10" stroke="currentColor" strokeWidth="3" />
        <circle cx="70" cy="66" r="5" className="fill-signal" />
      </svg>
      {withWordmark && (
        <span className="font-display font-bold text-xl tracking-tight">
          NOVA
        </span>
      )}
    </span>
  );
}
