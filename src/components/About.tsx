import { ABOUT_PILLARS } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Logo } from "./ui/Logo";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="dot-pattern pointer-events-none absolute inset-x-0 top-0 h-72" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-link">
              <span className="h-px w-6 bg-brand/50" aria-hidden="true" />
              About Us
            </p>
            <h2
              id="about-title"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-balance text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            >
              A technology partner that starts with your problem.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              <p>
                Solvanta Technologies is a software development company focused on practical,
                well-built digital solutions. Our name brings together two ideas: <em>solving</em>{" "}
                problems and creating <em>advantages</em> through technology.
              </p>
              <p>
                We work as a partner, not just a vendor. We take the time to understand how a
                business operates, then design and build software that supports it, from first
                workflow to final release.
              </p>
              <p>
                Whether a business is taking its first steps online or modernizing existing
                processes, we help it move through digital transformation with clarity and
                confidence.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(11,23,48,0.35)] sm:p-8">
              <Logo variant="full" className="mx-auto max-w-sm" />
            </div>
          </Reveal>
        </div>

        <ul className="grid content-start gap-5 sm:grid-cols-2">
          {ABOUT_PILLARS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-ice p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-[0_24px_50px_-24px_rgba(22,119,255,0.4)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-sky shadow-lg shadow-navy/20 transition group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal as="li" delay={400} className="sm:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-navy p-7 text-white">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/40 blur-3xl" aria-hidden="true" />
              <h3 className="relative font-display text-lg font-bold">Supporting digital transformation</h3>
              <p className="relative mt-2 max-w-xl text-[0.95rem] leading-relaxed text-slate-300">
                We help organizations replace manual, scattered processes with connected, reliable
                software that grows alongside them.
              </p>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
