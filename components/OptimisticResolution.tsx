import { FileCheck2, Swords, Gavel, LifeBuoy, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const stages = [
  {
    icon: FileCheck2,
    title: "Propose",
    body: "After the market closes, anyone can propose the outcome by posting a bond.",
  },
  {
    icon: Swords,
    title: "Dispute",
    body: "A challenge window lets anyone contest the proposal by matching the bond.",
  },
  {
    icon: Gavel,
    title: "Arbitrate",
    body: "Disputed outcomes escalate to arbitration for a final, binding ruling.",
  },
  {
    icon: LifeBuoy,
    title: "Safety net",
    body: "A backstop mechanism guarantees every market resolves, even at the edges.",
  },
];

export function OptimisticResolution() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-arc-violet-light">
            Optimistic resolution
          </h2>
          <p className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            No oracle. Just an honest window to be proven wrong.
          </p>
          <p className="mt-4 text-balance text-white/60">
            Every market resolves through a bonded, adversarial process —
            anyone can propose an outcome, and anyone can challenge it.
            Bad-faith actors lose their bond; the truth wins.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-16">
          <div className="glass rounded-3xl p-6 sm:p-10">
            <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              {stages.map((stage, i) => (
                <div key={stage.title} className="flex flex-1 items-center gap-4">
                  <div className="flex flex-1 flex-col items-center rounded-2xl bg-white/[0.03] p-5 text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-arc-violet to-arc-navy">
                      <stage.icon
                        className="h-5 w-5 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="mt-3 font-display text-base font-semibold text-white">
                      {stage.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                      {stage.body}
                    </p>
                  </div>
                  {i < stages.length - 1 && (
                    <ArrowRight
                      className="hidden h-5 w-5 shrink-0 text-arc-violet-light/60 lg:block"
                      strokeWidth={2}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/5 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <p className="text-sm text-white/60">
                  <span className="font-semibold text-white/85">
                    Undisputed
                  </span>{" "}
                  proposals settle automatically once the challenge window
                  closes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-arc-violet-light" />
                <p className="text-sm text-white/60">
                  <span className="font-semibold text-white/85">
                    Disputed
                  </span>{" "}
                  proposals escalate to arbitration, with the safety net as
                  final fallback.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
