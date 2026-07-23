export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-arc-violet to-arc-navy shadow-lg shadow-arc-violet/20 ${className}`}
    >
      <svg viewBox="0 0 100 100" className="h-[60%] w-[60%]" fill="none">
        <polyline
          points="8,38 29,74 50,46 71,80 92,14"
          stroke="white"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9" />
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Wager
      </span>
    </div>
  );
}
