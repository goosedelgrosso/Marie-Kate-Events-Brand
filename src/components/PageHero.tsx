import { SectionLabel } from "./ui";

/** Shared masthead for the interior pages. */
export default function PageHero({
  eyebrow,
  title,
  intro,
  script,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  script?: string;
}) {
  return (
    <section className="px-6 pt-40 pb-16 sm:px-10 sm:pt-52 sm:pb-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
        <SectionLabel align="center">{eyebrow}</SectionLabel>
        {script && (
          <p className="script text-taupe -mb-6 text-5xl">{script}</p>
        )}
        <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="text-espresso-soft max-w-xl text-base sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
