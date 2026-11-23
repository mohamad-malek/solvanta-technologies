import { CheckCircle2, GitBranch, LayoutDashboard, Users, Boxes, Settings2, BarChart3 } from "lucide-react";

/** Decorative dashboard + code composition for the hero. Purely illustrative, no real data. */
export function HeroVisual() {
  const bars = [38, 62, 46, 78, 55, 92, 68];
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
      {/* Glow + geometric backdrop */}
      <div className="absolute -inset-10 rounded-full bg-brand/25 blur-[90px]" />
      <svg
        viewBox="0 0 600 600"
        className="absolute -right-10 -top-12 h-[110%] w-[110%] text-sky/25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <polygon points="300,30 540,165 540,435 300,570 60,435 60,165" />
        <polygon points="300,90 490,195 490,405 300,510 110,405 110,195" strokeOpacity="0.6" />
        <circle cx="300" cy="300" r="250" strokeDasharray="3 9" strokeOpacity="0.7" />
      </svg>

      {/* Main dashboard window */}
      <div className="animate-float relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-navy-700/95 to-navy-800/95 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-inset ring-white/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <div className="ml-4 h-5 w-40 rounded-md bg-white/[0.07]" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-14 flex-col items-center gap-4 border-r border-white/10 py-5 sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white shadow-lg shadow-brand/40">
              <LayoutDashboard className="h-4 w-4" />
            </span>
            <Users className="h-4 w-4 text-slate-500" />
            <Boxes className="h-4 w-4 text-slate-500" />
            <BarChart3 className="h-4 w-4 text-slate-500" />
            <Settings2 className="mt-auto h-4 w-4 text-slate-500" />
          </div>

          <div className="flex-1 space-y-4 p-4 sm:p-5">
            {/* Summary tiles */}
            <div className="grid grid-cols-3 gap-3">
              {[
                ["w-10", "from-sky to-brand"],
                ["w-14", "from-brand to-brand-600"],
                ["w-8", "from-sky to-sky"],
              ].map(([w, g], i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <div className="h-2 w-12 rounded bg-white/15" />
                  <div className={`mt-3 h-3 rounded-full bg-gradient-to-r ${g} ${w}`} />
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <div className="mb-2 h-2 w-16 rounded bg-white/15" />
                <svg viewBox="0 0 240 90" className="h-24 w-full" fill="none">
                  <defs>
                    <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#38A5FF" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#38A5FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[22, 45, 68].map((y) => (
                    <line key={y} x1="0" x2="240" y1={y} y2={y} stroke="white" strokeOpacity="0.07" />
                  ))}
                  <path
                    d="M0 70 C25 62 40 44 65 50 S105 70 130 42 S185 18 240 24 V90 H0 Z"
                    fill="url(#hero-area)"
                  />
                  <path
                    className="animate-draw"
                    style={{ "--len": 420 } as React.CSSProperties}
                    d="M0 70 C25 62 40 44 65 50 S105 70 130 42 S185 18 240 24"
                    stroke="#38A5FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="240" cy="24" r="4" fill="#fff" stroke="#1677FF" strokeWidth="2" />
                </svg>
              </div>
              <div className="col-span-2 flex items-end gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="animate-grow-y flex-1 rounded-t-md bg-gradient-to-t from-brand to-sky"
                    style={{ height: `${h}%`, minHeight: 8, maxHeight: 96, animationDelay: `${0.3 + i * 0.08}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Table rows */}
            <div className="space-y-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2.5"
                >
                  <span className="h-6 w-6 rounded-full bg-gradient-to-br from-sky/60 to-brand/60" />
                  <span className="h-2 flex-1 max-w-[9rem] rounded bg-white/15" />
                  <span className="ml-auto h-2 w-10 rounded bg-white/10" />
                  <span className="h-4 w-12 rounded-full bg-brand/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating code card */}
      <div className="animate-float-slow absolute -bottom-10 -left-2 w-[17.5rem] rounded-xl border border-white/15 bg-navy-900/95 p-4 font-mono text-[12px] leading-relaxed shadow-2xl shadow-black/50 sm:-left-10">
        <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-slate-500">
          <GitBranch className="h-3 w-3" /> solution.ts
        </div>
        <p>
          <span className="text-sky">const</span> <span className="text-white">solution</span>{" "}
          <span className="text-slate-500">=</span> <span className="text-sky">await</span>
        </p>
        <p className="pl-4 text-slate-300">
          solvanta<span className="text-slate-500">.</span>
          <span className="text-[#7cc4ff]">understand</span>(challenge)
        </p>
        <p className="pl-4 text-slate-300">
          <span className="text-slate-500">.</span>
          <span className="text-[#7cc4ff]">design</span>()
        </p>
        <p className="pl-4 text-slate-300">
          <span className="text-slate-500">.</span>
          <span className="text-[#7cc4ff]">build</span>()<span className="text-slate-500">;</span>
        </p>
      </div>

      {/* Floating status chip */}
      <div className="animate-float absolute -right-2 top-[42%] flex items-center gap-2.5 rounded-xl border border-white/15 bg-navy-900/95 px-3.5 py-2.5 shadow-2xl shadow-black/50 sm:-right-8">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs font-semibold text-white">Build passing</span>
        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
      </div>
    </div>
  );
}
