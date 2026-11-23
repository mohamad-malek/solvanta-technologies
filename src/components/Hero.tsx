import { ArrowRight, Layers } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { HeroVisual } from "./visuals/HeroVisual";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy pb-28 pt-32 sm:pt-36 lg:pb-36 lg:pt-40"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(22,119,255,0.35),transparent_60%),radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(56,165,255,0.16),transparent_60%)]" />
        <div className="grid-pattern absolute inset-0" />
        <div className="animate-drift absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand/20 blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky">
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              Software Development &amp; Technology Solutions
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl lg:text-[4.1rem]"
            >
              We Build Digital Solutions That{" "}
              <span className="text-gradient">Move Businesses Forward.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-300">
              We design and develop modern web applications, business management systems, and
              scalable digital solutions that turn complex challenges into practical results.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="btn-primary group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white"
              >
                Explore Our Services
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-sky/60 hover:bg-white/10"
              >
                View Our Work
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-10 border-l-2 border-brand pl-4 font-display text-lg font-semibold italic text-slate-200">
              Turning Challenges into Solutions.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="pb-12 lg:pb-0">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
