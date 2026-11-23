import { TECH_GROUPS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Technologies() {
  return (
    <section
      id="technologies"
      aria-labelledby="tech-title"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="dot-pattern pointer-events-none absolute inset-x-0 top-0 h-72" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="tech-title"
          eyebrow="Technologies & Expertise"
          title="A modern, proven toolkit."
          description="We choose well-supported technologies that keep products fast, maintainable, and easy to extend."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TECH_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 110}>
              <section
                aria-label={group.title}
                className="h-full rounded-3xl border border-slate-200 bg-gradient-to-b from-ice to-white p-7 shadow-[0_1px_2px_rgba(11,23,48,0.04)]"
              >
                <h3 className="font-display text-xl font-bold text-navy">{group.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{group.blurb}</p>

                <ul className="mt-6 space-y-3">
                  {group.items.map(({ icon: Icon, name, note }) => (
                    <li
                      key={name}
                      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_14px_30px_-18px_rgba(22,119,255,0.55)]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-sky transition duration-300 group-hover:bg-gradient-to-br group-hover:from-sky group-hover:to-brand group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-navy">{name}</span>
                        <span className="block text-sm text-ink-soft">{note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
