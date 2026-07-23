import { FilePlus2, Coins, ShieldCheck, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: FilePlus2,
    title: "Create",
    body: "Anyone can spin up a market around a future outcome — pick a question, a deadline, and let it go live.",
  },
  {
    icon: Coins,
    title: "Bet",
    body: "Participants stake native USDC on the outcome they believe in. Odds update in real time as positions shift.",
  },
  {
    icon: ShieldCheck,
    title: "Resolve",
    body: "Once the deadline passes, anyone can propose the outcome. If unchallenged, it settles — no paid oracle required.",
  },
  {
    icon: Wallet,
    title: "Claim",
    body: "Winning positions redeem their share of the pool directly, instantly, straight to their wallet.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-arc-violet-light">
            How it works
          </h2>
          <p className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From question to payout, in four steps.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="glass relative h-full rounded-2xl p-6">
                <span className="font-display text-xs font-semibold text-white/30">
                  0{i + 1}
                </span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-arc-violet to-arc-navy">
                  <step.icon className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
