import { CircleDollarSign, Gauge, Building2 } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: CircleDollarSign,
    title: "Native USDC",
    body: "USDC is a first-class asset on Arc, not a bridged token — every wager settles in the same unit of account it's staked in.",
  },
  {
    icon: Building2,
    title: "Built by Circle",
    body: "Arc is purpose-built for stablecoin-native finance, backed by the team behind USDC itself.",
  },
  {
    icon: Gauge,
    title: "Predictable fees",
    body: "Transaction costs stay flat and low, so small positions and frequent settlement stay economically viable.",
  },
];

export function WhyArc() {
  return (
    <section className="relative border-t border-white/5 bg-arc-navy/20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-arc-violet-light">
            Why Arc
          </h2>
          <p className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A settlement layer built for stable value.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 100}>
              <div className="glass h-full rounded-2xl p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-arc-violet to-arc-navy">
                  <reason.icon
                    className="h-5 w-5 text-white"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
