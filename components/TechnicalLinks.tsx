import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

const repos = [
  {
    name: "wager",
    href: "https://github.com/0xassou/wager",
    description:
      "The full application — frontend, market logic, and the Arc Testnet integration behind wager-arc.vercel.app.",
    tags: ["Next.js", "Solidity", "Arc Testnet"],
  },
  {
    name: "arc-optimistic-prediction-market",
    href: "https://github.com/0xassou/arc-optimistic-prediction-market",
    description:
      "The standalone, reusable smart contract implementing oracle-free optimistic resolution — usable in any prediction market built on Arc.",
    tags: ["Solidity", "Standalone contract"],
  },
];

export function TechnicalLinks() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-arc-violet-light">
            Open source
          </h2>
          <p className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Read the code. Fork the contract.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {repos.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 100}>
              <a
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex h-full flex-col rounded-2xl p-6 transition-colors hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-arc-violet to-arc-navy">
                    <GithubIcon className="h-5 w-5 text-white" />
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-white/30 transition-colors group-hover:text-white/70"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {repo.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {repo.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
