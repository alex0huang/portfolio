"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { site } from "@/content/site";
import { Container } from "@/components/ui";

const nav = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
] as const;

function useLockBodyScroll(locked: boolean) {
  React.useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  useLockBodyScroll(open);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-semibold tracking-tight text-slate-900 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-md px-1 py-0.5"
          >
            {site.name}
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-md px-1 py-0.5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.links.resume}
              className="text-sm font-medium text-brand-700 hover:text-brand-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-md px-1 py-0.5"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-slate-200">
          <Container>
            <nav className="flex flex-col py-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.links.resume}
                onClick={() => setOpen(false)}
                className="mt-1 rounded-lg px-3 py-2 text-sm font-medium text-brand-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                Download Resume
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

