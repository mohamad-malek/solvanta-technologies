import Image from "next/image";

type LogoProps = {
  /** "mark" = S monogram + HTML wordmark (for dark backgrounds). "full" = original artwork on white. */
  variant?: "mark" | "full";
  className?: string;
  priority?: boolean;
};

/**
 * The monogram (/solvanta-mark.png) is cut from the original public/solvanta-logo.png
 * with the white background removed, so it sits cleanly on the dark navy theme.
 * The wordmark is live text, which keeps it sharp and accessible at any size.
 */
export function Logo({ variant = "mark", className = "", priority = false }: LogoProps) {
  if (variant === "full") {
    return (
      <Image
        src="/solvanta-logo.png"
        alt="Solvanta Technologies — Turning Challenges into Solutions."
        width={1086}
        height={362}
        sizes="(min-width: 640px) 360px, 80vw"
        className={`h-auto w-full ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/solvanta-mark.png"
        alt=""
        width={169}
        height={208}
        priority={priority}
        className="h-10 w-auto drop-shadow-[0_4px_14px_rgba(22,119,255,0.45)]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-white">
          SOLVANTA
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-sky">
          Technologies
        </span>
      </span>
      <span className="sr-only">Solvanta Technologies</span>
    </span>
  );
}
