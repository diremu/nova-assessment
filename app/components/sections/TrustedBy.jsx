const CLIENTS = ["JP Morgan Chase", "Bank of America", "TSMC", "Amazon", "United Parcel Service", "Hewlett Packard"];
const CLIENT_IMAGES = ['/images/JPM.png', '/images/BAC.png', '/images/TSM.png', '/images/AMZN.png', '/images/UPS.png', '/images/HPQ.png' ]

export default function TrustedBy() {
  return (
    <section className="border-b border-line dark:border-line-dark py-10">
      <div className="container-xw">
        <p className="text-center text-sm text-steel-soft">
          Relied on by security teams at
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {CLIENTS.map((name, index) => (
            <li
              key={name}
              className="font-display text-sm text-steel-soft grayscale opacity-70 hover:opacity-100 hover:text-steel transition-all flex flex-col items-center gap-3"
            >
              <img src={CLIENT_IMAGES[index]} alt={name} className="h-12" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
