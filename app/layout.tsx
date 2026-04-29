import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: site.hero.intro
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

