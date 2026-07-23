import { LogoMark } from "./Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-arc-gradient-radial" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 bg-arc-glow blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-28 text-center sm:pt-36">
        <div className="animate-fade-in-up opacity-0 [animation-delay:0ms]">
          <LogoMark className="h-16 w-16 sm:h-20 sm:w-20" />
        </div>

        <h2 className="mt-6 animate-fade-in-up font-display text-sm font-semibold uppercase tracking-[0.2em] text-arc-violet-light opacity-0 [animation-delay:100ms]">
          Wager
        </h2>

        <h1 className="mt-4 max-w-3xl animate-fade-in-up text-balance font-display text-4xl font-bold leading-tight tracking-tight text-gradient opacity-0 [animation-delay:200ms] sm:text-6xl">
          Every wager tells the future.
        </h1>

        <p className="mt-6 max-w-xl animate-fade-in-up text-balance text-lg text-white/70 opacity-0 [animation-delay:300ms]">
          A decentralized prediction market on Arc — Circle&apos;s USDC-native
          testnet — where markets settle through open, oracle-free
          resolution instead of paid data feeds.
        </p>

        <div className="mt-10 flex animate-fade-in-up flex-col items-center gap-4 opacity-0 [animation-delay:400ms] sm:flex-row">
          <a
            href="https://wager-arc.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-arc-violet to-arc-violet-light px-8 py-3.5 font-semibold text-white shadow-lg shadow-arc-violet/30 transition-transform hover:scale-[1.03]"
          >
            <span className="absolute inset-0 rounded-full bg-arc-violet-light opacity-0 blur-xl transition-opacity group-hover:opacity-40" />
            <span className="relative">Launch App</span>
          </a>
          <a
            href="https://github.com/0xassou/wager"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            View on GitHub
          </a>
        </div>

        <p className="mt-8 animate-fade-in-up text-xs uppercase tracking-widest text-white/40 opacity-0 [animation-delay:500ms]">
          Built on Arc Testnet · Native USDC · No real funds at risk
        </p>
      </div>
    </section>
  );
}
