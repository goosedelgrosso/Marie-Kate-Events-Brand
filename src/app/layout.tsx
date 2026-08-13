import type { Metadata } from "next";
import { cormorant, dmSans, italianno } from "@/lib/fonts";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Wedding Planning, Design + Coordination`,
    template: `%s | ${site.name}`,
  },
  description:
    "Thoughtful celebrations, beautifully brought to life. Wedding planning, design, and coordination for couples who want to be fully present at their own wedding.",
  openGraph: {
    title: `${site.name} | Wedding Planning, Design + Coordination`,
    description: site.tagline,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${italianno.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
