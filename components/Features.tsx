import { Percent, ShieldCheck, LineChart, Globe, MoonStar } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Percent,
    title: "0.5% fees",
    body: "Flat, predictable protocol fee on settled markets — no hidden spreads, no oracle subscription costs.",
  },
  {
    icon: ShieldCheck,
    title: "Optimistic resolution",
    body: "Markets settle through a propose-and-dispute window instead of a paid oracle feed.",
  },
  {
    icon: LineChart,
    title: "Real-time odds",
    body: "Live-updating probability charts reflect every position as it's staked.",
  },
  {
    icon: Globe,
    title: "10 languages",
    body: "A fully localized interface, built for a global base of participants from day one.",
  },
  {
    icon: MoonStar,
    title: "Dark & light mode",
    body: "A polished interface that adapts to how you like to work, day or night.",
  },
];

export function Features() {
  return (
    <section className="relative border-t border-white/5 bg-arc-navy/20 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-arc-violet-light">
            Key features
          </h2>
          <p className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Built for serious markets, not memes.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 100}>
              <div className="glass h-full rounded-2xl p-6 transition-colors hover:bg-white/[0.06]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-arc-violet to-arc-navy">
                  <feature.icon
                    className="h-5 w-5 text-white"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
