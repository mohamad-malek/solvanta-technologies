import { CalendarRange, Cpu, FlaskConical, Info } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { MediBookVisual, OpsGuardVisual, SmartBizVisual } from "./visuals/ProjectVisuals";

const VISUALS = {
  medibook: MediBookVisual,
  smartbiz: SmartBizVisual,
  opsguard: OpsGuardVisual,
} as const;

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative isolate overflow-hidden bg-navy py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(22,119,255,0.22),transparent_70%)]" />
        <div className="grid-pattern absolute inset-0 opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="projects-title"
          tone="dark"
          eyebrow="Our Work · Concept Projects"
          title="Product concepts that show how we think and build."
          description="Three academic demonstrations that illustrate our approach to design, architecture, and delivery."
        />

        <Reveal delay={100} className="mx-auto mt-8 flex max-w-2xl justify-center">
          <p className="inline-flex items-start gap-2.5 rounded-xl border border-sky/25 bg-sky/10 px-4 py-3 text-left text-sm leading-relaxed text-slate-200">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
            <span>
              These are <strong className="font-semibold text-white">simulated academic portfolio projects</strong>,
              not commercial client engagements. They have no live demos, testimonials, or performance claims.
            </span>
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-7 lg:grid-cols-3">
          {PROJECTS.map((p, i) => {
            const Visual = VISUALS[p.id];
            return (
              <Reveal as="li" key={p.id} delay={i * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1.5 hover:border-sky/40 hover:bg-white/[0.06] hover:shadow-[0_30px_70px_-30px_rgba(22,119,255,0.55)]">
                  {/* Visual */}
                  <div className="relative aspect-[5/3] overflow-hidden border-b border-white/10">
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
                      <Visual />
                    </div>
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-sky backdrop-blur">
                      <FlaskConical className="h-3 w-3" aria-hidden="true" />
                      Concept Project
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky">{p.category}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">{p.name}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-300">{p.description}</p>

                    <dl className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                      <div className="flex items-start gap-2.5">
                        <CalendarRange className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                        <div>
                          <dt className="sr-only">Timeline</dt>
                          <dd className="text-slate-200">{p.timeline}</dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Technology focus
                          </dt>
                          <dd className="mt-0.5 text-slate-200">{p.focus}</dd>
                        </div>
                      </div>
                    </dl>

                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.name} focus areas`}>
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-brand/40 bg-brand/15 px-3 py-1 text-xs font-medium text-[#9fd1ff]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
