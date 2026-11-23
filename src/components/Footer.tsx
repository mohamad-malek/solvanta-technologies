import { GitBranch } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";
import { Logo } from "./ui/Logo";

async function getYear() {
  "use cache";
  // Computed once at build/prerender time; the site is fully static.
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();
  return (
    <footer data-surface="dark" className="border-t border-white/10 bg-navy-900 text-slate-300">
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
                  <a href={l.href} className="inline-block py-1.5 text-sm text-slate-300 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {COMPANY.name}. All rights reserved.
            </p>
            <a
              href={COMPANY.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <GitBranch className="h-4 w-4" aria-hidden="true" />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-xs leading-relaxed text-slate-500">
            Solvanta Technologies is a fictional company website created for an academic project. It is not
            affiliated with any existing business of the same name.
          </p>
        </div>
      </div>
    </footer>
  );
}
