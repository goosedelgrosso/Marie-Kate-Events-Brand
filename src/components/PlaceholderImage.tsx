import Monogram from "./Monogram";

type Tone = "ivory" | "taupe" | "sage" | "espresso";

type Props = {
  /** Describes the photo that will replace this frame, e.g. "Champagne + hands". */
  label: string;
  /** CSS aspect-ratio value. Ignored when `fill` is set. */
  ratio?: string;
  tone?: Tone;
  /** Fill the parent element instead of using an aspect ratio. */
  fill?: boolean;
  className?: string;
  /** Hide the small "photo placeholder" caption (used on dense grids). */
  quiet?: boolean;
};

const tones: Record<Tone, string> = {
  ivory:
    "linear-gradient(150deg, #efe8dd 0%, #f7f3ec 45%, #e6ddd0 100%)",
  taupe:
    "linear-gradient(150deg, #cabfb2 0%, #b5a89a 55%, #a1927f 100%)",
  sage: "linear-gradient(150deg, #a3ab99 0%, #8c9582 55%, #757e6c 100%)",
  espresso:
    "linear-gradient(150deg, #5c5047 0%, #3a3029 60%, #2b231e 100%)",
};

const inkOn: Record<Tone, string> = {
  ivory: "#7d6f61",
  taupe: "#fdfbf7",
  sage: "#fdfbf7",
  espresso: "#e8ded1",
};

/**
 * Stand-in for photography that does not exist yet. Every frame on the site
 * uses this so real film photos can be dropped in one for one later.
 */
export default function PlaceholderImage({
  label,
  ratio = "4/5",
  tone = "ivory",
  fill = false,
  className = "",
  quiet = false,
}: Props) {
  const ink = inkOn[tone];

  return (
    <div
      className={`grain isolate overflow-hidden ${fill ? "absolute inset-0 h-full w-full" : "relative"} ${className}`}
      style={{
        background: tones[tone],
        ...(fill ? {} : { aspectRatio: ratio }),
      }}
      role="img"
      aria-label={`Photo placeholder: ${label}`}
    >
      <div
        className="pointer-events-none absolute inset-3 border sm:inset-5"
        style={{ borderColor: ink, opacity: 0.28 }}
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
        <Monogram className="h-11 w-11 opacity-45" color={ink} />
        <p
          className="label max-w-[22ch] leading-relaxed"
          style={{ color: ink }}
        >
          {label}
        </p>
        {!quiet && (
          <p
            className="text-[10px] tracking-[0.22em] uppercase"
            style={{ color: ink, opacity: 0.6 }}
          >
            Photo placeholder
          </p>
        )}
      </div>
    </div>
  );
}
