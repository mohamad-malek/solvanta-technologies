import { NAV_LINKS, COMPANY } from "@/lib/data";
import { Logo } from "./ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <a href="#home" aria-label="Solvanta Technologies, back to top" className="inline-block">
              <Logo />
            </a>
            <p className="mt-5 max-w-sm font-display text-lg font-semibold italic text-slate-100">
              {COMPANY.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Software development and technology solutions, built around your business.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky">Quick links</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-300 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
            Academic project demonstration
          </p>
        </div>
      </div>
    </footer>
  );
}
