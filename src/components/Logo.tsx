import Link from "next/link";

/**
 * Primary lockup: MARIE KATE in an elegant serif, EVENTS small and
 * wide-tracked beneath it.
 */
export default function Logo({
  className = "",
  size = "md",
  href = "/",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string | null;
}) {
  const scale = {
    sm: { top: "text-lg sm:text-xl", bottom: "text-[8px]" },
    md: { top: "text-2xl sm:text-[1.75rem]", bottom: "text-[9px]" },
    lg: { top: "text-4xl sm:text-5xl", bottom: "text-[11px]" },
  }[size];

  const mark = (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span
        className={`font-display font-normal tracking-[0.14em] ${scale.top}`}
      >
        MARIE KATE
      </span>
      <span
        className={`mt-1.5 font-sans tracking-[0.55em] uppercase ${scale.bottom} pl-[0.55em]`}
      >
        Events
      </span>
    </span>
  );

  if (!href) return mark;

  return (
    <Link href={href} aria-label="Marie Kate Events, home">
      {mark}
    </Link>
  );
}
