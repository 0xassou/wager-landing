const points = [
  {
    title: "Paid oracles",
    body: "Most prediction markets rely on external oracle networks to settle outcomes — a recurring cost and a centralization point baked into every market.",
  },
  {
    title: "High fees",
    body: "Settlement and gas costs on general-purpose chains eat into small positions, pricing out casual participants and low-stakes questions.",
  },
  {
    title: "Slow, opaque resolution",
    body: "Waiting on a black-box oracle feed leaves markets unresolved for days, with no visibility into how or why an outcome was decided.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-arc-violet-light">
            Why Wager
          </h2>
          <p className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Prediction markets shouldn&apos;t need a middleman to know the truth.
          </p>
          <p className="mt-4 text-balance text-white/60">
            Existing platforms inherit the limits of the oracles and chains
            they&apos;re built on. Wager resolves markets optimistically —
            open to anyone, secured by economic incentives, not a subscription.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="glass rounded-2xl p-6 transition-colors hover:bg-white/[0.06]"
            >
              <h3 className="font-display text-lg font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
