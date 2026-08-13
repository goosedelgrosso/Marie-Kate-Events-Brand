"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/site";

const menu = nav.filter((item) => item.href !== "/");

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // The home hero is a full-bleed dark frame, so the bar starts transparent
  // with light type and settles into ivory once you scroll past it.
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = overHero && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-700 ${
        light
          ? "bg-transparent text-ivory"
          : "bg-ivory/95 text-espresso backdrop-blur-sm"
      } ${scrolled && !light ? "shadow-[0_1px_0_0_rgba(58,48,41,0.1)]" : ""}`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10 sm:py-6">
        <Logo size="sm" />

        <nav className="hidden items-center gap-9 lg:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`label transition-opacity duration-500 hover:opacity-60 ${
                pathname.startsWith(item.href) ? "opacity-100" : "opacity-80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/inquire"
            className={`label hidden border px-6 py-3 transition-colors duration-500 sm:inline-block ${
              light
                ? "border-ivory/60 hover:bg-ivory hover:text-espresso"
                : "border-espresso/40 hover:bg-espresso hover:text-ivory"
            }`}
          >
            Let&rsquo;s Chat
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="label flex items-center gap-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`bg-ivory text-espresso overflow-hidden transition-[max-height] duration-700 ease-out lg:hidden ${
          open ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 pt-4 pb-12 sm:px-10">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
