import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
  id,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-sky" : "text-link"
        }`}
      >
        <span className={`h-px w-6 ${dark ? "bg-sky/60" : "bg-brand/50"}`} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${
            dark ? "text-slate-300" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
