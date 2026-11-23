import { Building2, Mail, MapPin, ArrowUpRight, Info } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

const DETAILS = [
  { icon: Building2, label: "Company", value: COMPANY.name, href: undefined },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: "Location", value: COMPANY.location, href: undefined },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      data-surface="dark"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-navy py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(22,119,255,0.4),transparent_65%),radial-gradient(ellipse_50%_50%_at_100%_100%,rgba(56,165,255,0.18),transparent_70%)]" />
        <div className="grid-pattern absolute inset-0" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-navy-700/70 to-navy-900/80 p-8 shadow-2xl shadow-black/30 sm:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky">
                <span className="h-px w-6 bg-sky/60" aria-hidden="true" />
                Contact
              </p>
              <h2
                id="contact-title"
                className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl"
              >
                Have a <span className="text-gradient">Project in Mind?</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-pretty text-slate-300">
                Let&apos;s discuss how technology can help turn your ideas into effective digital
                solutions.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${COMPANY.email}?subject=Project%20enquiry`}
                  className="btn-primary group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Send Us an Email
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:border-sky/60 hover:bg-white/10"
                >
                  Review Our Work
                </a>
              </div>

              <p className="mt-6 flex max-w-lg items-start gap-2 text-sm leading-relaxed text-slate-400">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                Demo notice: this email address is an illustrative placeholder for an academic
                project and is not a monitored inbox.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <ul className="space-y-4">
                {DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <li
                    key={label}
                    className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:border-sky/40 hover:bg-white/[0.08]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky to-brand text-white shadow-lg shadow-brand/30">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block break-words text-lg font-semibold text-white underline-offset-4 hover:text-sky hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-lg font-semibold text-white">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
