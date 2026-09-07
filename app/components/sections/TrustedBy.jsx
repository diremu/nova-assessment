const CLIENTS = ["Harrow Logistics", "Meridian Retail Group", "Coastline Ports", "Ashford Campus Safety", "Delgado Manufacturing", "Vantage Facilities"];

export default function TrustedBy() {
  return (
    <section className="border-b border-line dark:border-line-dark py-10">
      <div className="container-xw">
        <p className="text-center text-sm text-steel-soft">
          Relied on by security teams at
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {CLIENTS.map((name) => (
            <li
              key={name}
              className="font-display text-sm text-steel-soft grayscale opacity-70 hover:opacity-100 hover:text-steel transition-all"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
