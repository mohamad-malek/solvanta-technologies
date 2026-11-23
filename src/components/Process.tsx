import { PROCESS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Process() {
  return (
    <section
      id="process"
      data-surface="dark"
      aria-labelledby="process-title"
      className="relative isolate overflow-hidden bg-navy-900 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_100%,rgba(22,119,255,0.2),transparent_70%),radial-gradient(ellipse_40%_40%_at_0%_0%,rgba(56,165,255,0.12),transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="process-title"
          tone="dark"
          eyebrow="Our Development Process"
          title="A clear path from idea to launch."
          description="A simple, transparent process that keeps you informed and in control at every stage."
        />

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* Connector: vertical on mobile, horizontal on desktop */}
          <span
            className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-sky/60 via-brand/40 to-transparent lg:hidden"
            aria-hidden="true"
          />
          <span
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-sky/70 via-brand/60 to-sky/70 lg:block"
            aria-hidden="true"
          />

          {PROCESS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 130} className="relative pl-20 lg:pl-0 lg:text-center">
              <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-sky/40 bg-navy-800 text-sky shadow-[0_0_0_6px_#08112a,0_0_30px_-4px_rgba(22,119,255,0.7)] lg:static lg:mx-auto">
                <Icon className="h-6 w-6" aria-hidden="true" />
                <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky to-brand text-[0.7rem] font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white lg:mt-7">{title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-300 lg:mx-auto lg:max-w-[16rem]">
                {text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
