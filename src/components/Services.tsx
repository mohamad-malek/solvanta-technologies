import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative bg-gradient-to-b from-ice to-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="services-title"
          eyebrow="Our Services"
          title="End-to-end software services, built around your business."
          description="From the first wireframe to the final deployment, we cover the full lifecycle of modern software."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text, tag }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 100}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(11,23,48,0.04)] transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_60px_-28px_rgba(22,119,255,0.45)]">
                {/* hover wash */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-700 text-sky shadow-lg shadow-navy/20 transition duration-300 group-hover:from-sky group-hover:to-brand group-hover:text-white group-hover:shadow-brand/40">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-slate-200 bg-ice px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-ink-soft">
                    {tag}
                  </span>
                </div>
                <h3 className="relative mt-7 font-display text-xl font-bold leading-snug text-navy">
                  {title}
                </h3>
                <p className="relative mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{text}</p>
                <a
                  href="#contact"
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5"
                >
                  Discuss this service
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only"> — {title}</span>
                </a>
                <span
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sky to-brand transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
