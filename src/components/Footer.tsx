import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

const menu = nav.filter((item) => item.href !== "/");

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-28">
        <div className="flex flex-col items-center gap-14 text-center">
          <Logo size="lg" href={null} />

          <p className="script text-ivory/70 text-4xl">
            thoughtfully yours
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label text-ivory/75 transition-opacity duration-500 hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="bg-ivory/20 h-px w-full max-w-md" />

          <div className="flex flex-col items-center gap-3">
            <a
              href={site.instagramUrl}
              className="label text-ivory/75 transition-opacity duration-500 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              Instagram {site.instagram}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="label text-ivory/75 transition-opacity duration-500 hover:opacity-100"
            >
              {site.email}
            </a>
            <p className="label text-ivory/50">{site.location}</p>
          </div>

          <p className="text-ivory/40 text-[10px] tracking-[0.22em] uppercase">
            Placeholder contact details, to be confirmed with the founders
          </p>

          <p className="text-ivory/45 text-[11px] tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
