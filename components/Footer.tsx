import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo />

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          <a
            href="https://wager-arc.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Launch App
          </a>
          <a
            href="https://github.com/0xassou/wager"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub — wager
          </a>
          <a
            href="https://github.com/0xassou/arc-optimistic-prediction-market"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub — contract
          </a>
        </nav>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-white/35">
        Wager runs on Arc Testnet only. Markets use testnet USDC with no
        real-world value — nothing on this site is financial advice, and no
        real funds are ever at risk.
      </p>
    </footer>
  );
}
