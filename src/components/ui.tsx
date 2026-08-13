import Link from "next/link";

/** Small caps eyebrow with a hairline to its left. */
export function SectionLabel({
  children,
  className = "",
  align = "left",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span className="bg-taupe h-px w-10" />
      <span className="label text-espresso-soft">{children}</span>
      {align === "center" && <span className="bg-taupe h-px w-10" />}
    </div>
  );
}

/** Bordered box link. The primary call to action treatment. */
export function ButtonLink({
  href,
  children,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "solid";
  className?: string;
}) {
  const styles = {
    dark: "border-espresso/40 text-espresso hover:bg-espresso hover:text-ivory",
    light: "border-ivory/60 text-ivory hover:bg-ivory hover:text-espresso",
    solid: "border-espresso bg-espresso text-ivory hover:bg-transparent hover:text-espresso",
  }[variant];

  return (
    <Link
      href={href}
      className={`label inline-block border px-9 py-4 transition-colors duration-500 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Understated text link with a rule that retracts on hover. */
export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`label link-rule ${className}`}>
      {children} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

/** Marks content that is a stand-in until the founders supply the real thing. */
export function PlaceholderNote({
  children,
  className = "",
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`text-[10px] tracking-[0.22em] uppercase ${
        tone === "dark" ? "text-espresso/45" : "text-ivory/50"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Full-width band with the closing call to action. */
export function ClosingCta({
  eyebrow = "Inquire",
  headline,
  body,
  href = "/inquire",
  cta = "Inquire",
}: {
  eyebrow?: string;
  headline: string;
  body?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="bg-espresso text-ivory px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-4">
          <span className="bg-ivory/40 h-px w-10" />
          <span className="label text-ivory/70">{eyebrow}</span>
          <span className="bg-ivory/40 h-px w-10" />
        </div>
        <h2 className="font-display text-4xl sm:text-6xl">{headline}</h2>
        {body && <p className="text-ivory/75 max-w-xl text-base">{body}</p>}
        <ButtonLink href={href} variant="light" className="mt-2">
          {cta} &rarr;
        </ButtonLink>
      </div>
    </section>
  );
}
