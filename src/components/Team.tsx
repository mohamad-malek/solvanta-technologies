import { Code2, Crown, Palette } from "lucide-react";
import { TEAM } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const BADGE_ICONS = [Crown, Code2, Palette];

function Avatar({ initials, index, lead }: { initials: string; index: number; lead: boolean }) {
  const Badge = BADGE_ICONS[index];
  const id = `av-${index}`;
  return (
    <div className="relative mx-auto h-28 w-28" aria-hidden="true">
      <div
        className={`absolute -inset-1.5 rounded-full ${
          lead ? "bg-gradient-to-br from-sky to-brand" : "bg-gradient-to-br from-slate-200 to-slate-100"
        }`}
      />
      <svg viewBox="0 0 112 112" className="relative h-full w-full rounded-full ring-4 ring-white">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#162a52" />
            <stop offset="1" stopColor="#0B1730" />
          </linearGradient>
          <radialGradient id={`${id}-glow`} cx="0.3" cy="0.2" r="0.9">
            <stop offset="0" stopColor="#38A5FF" stopOpacity="0.55" />
            <stop offset="1" stopColor="#38A5FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="112" height="112" fill={`url(#${id})`} />
        <rect width="112" height="112" fill={`url(#${id}-glow)`} />
        {/* abstract person silhouette */}
        <circle cx="56" cy="44" r="16" fill="#fff" fillOpacity="0.13" />
        <path d="M22 112c2-26 18-38 34-38s32 12 34 38z" fill="#fff" fillOpacity="0.1" />
        <text
          x="56"
          y="63"
          textAnchor="middle"
          fontSize="30"
          fontWeight="800"
          fill="#fff"
          letterSpacing="1"
          style={{ fontFamily: "var(--font-jakarta), ui-sans-serif, system-ui, sans-serif" }}
        >
          {initials}
        </text>
      </svg>
      <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky to-brand text-white shadow-lg shadow-brand/40 ring-4 ring-white">
        <Badge className="h-4 w-4" />
      </span>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="relative bg-gradient-to-b from-white to-ice py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="team-title"
          eyebrow="Our Team"
          title="A focused team covering the full delivery cycle."
          description="Management, engineering, design, and quality, working together as one small, collaborative unit."
        />

        <ul className="mt-16 grid gap-7 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 120}>
              <article
                className={`group relative flex h-full flex-col rounded-2xl border bg-white p-8 text-center transition duration-300 hover:-translate-y-1.5 ${
                  m.lead
                    ? "border-brand/30 shadow-[0_30px_60px_-30px_rgba(22,119,255,0.45)]"
                    : "border-slate-200 shadow-[0_1px_2px_rgba(11,23,48,0.04)] hover:border-brand/40 hover:shadow-[0_30px_60px_-30px_rgba(22,119,255,0.4)]"
                }`}
              >
                <Avatar initials={m.initials} index={i} lead={m.lead} />
                <h3 className="mt-8 font-display text-xl font-bold text-navy">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold text-link">{m.role}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{m.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
