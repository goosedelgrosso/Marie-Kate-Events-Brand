"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  /** Path under /public, e.g. "/video/hero-loop.mp4". */
  src: string;
  /** Still frame shown before the video plays, and instead of it when motion is off. */
  poster: string;
  alt: string;
  className?: string;
  /** CSS object-position, applied to both the poster and the video. */
  position?: string;
};

/**
 * Full-bleed silent background video. Mirrors the `fill` behaviour of Photo so
 * it drops into a hero frame one for one.
 *
 * The poster renders on the server and the video is only mounted after hydration,
 * which keeps the largest paint on an image rather than 5 MB of mp4, and lets us
 * skip the download entirely for anyone who asked for reduced motion. The video
 * fades in once it has enough frames to play, so there is no black flash between
 * the two layers.
 */
export default function HeroVideo({
  src,
  poster,
  alt,
  className = "",
  position = "center",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    setAllowed(true);
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    // A cached video can be ready before React attaches the canPlay handler.
    if (node.readyState >= 3) setReady(true);
  }, [allowed]);

  return (
    <div
      className={`isolate absolute inset-0 h-full w-full overflow-hidden ${className}`}
    >
      <Image
        src={poster}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />

      {allowed && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: position }}
        />
      )}
    </div>
  );
}
