import Image from "next/image";

type Props = {
  /** Path under /public, e.g. "/photos/about-hero.jpg". */
  src: string;
  alt: string;
  /** CSS aspect-ratio value. Ignored when `fill` is set. */
  ratio?: string;
  /** Fill the parent element instead of using an aspect ratio. */
  fill?: boolean;
  className?: string;
  /**
   * CSS object-position. The studio photos are full length shots with a lot
   * of empty wall above everyone, so the tighter crops need to sit low or
   * they frame the ceiling.
   */
  position?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Real photography. Mirrors the PlaceholderImage API so a frame can be
 * swapped over one for one as each photo arrives.
 */
export default function Photo({
  src,
  alt,
  ratio = "4/5",
  fill = false,
  className = "",
  position = "center",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: Props) {
  return (
    <div
      className={`isolate overflow-hidden ${
        fill ? "absolute inset-0 h-full w-full" : "relative"
      } ${className}`}
      style={fill ? undefined : { aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
