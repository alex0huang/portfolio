import * as React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">{children}</div>;
}

export function Section({
  id,
  title,
  eyebrow,
  children
}: {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-18">
      <Container>
        {(eyebrow || title) && (
          <header className="mb-7">
            {eyebrow && (
              <p className="text-xs font-medium tracking-widest text-slate-500 uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
      {children}
    </span>
  );
}

export type ButtonVariant = "primary" | "secondary" | "ghost";

export function Button({
  asChild,
  variant = "secondary",
  href,
  target,
  rel,
  children,
  ariaLabel
}: {
  asChild?: boolean;
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-slate-900/20 ring-1 ring-inset ring-slate-800 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
      : variant === "secondary"
        ? "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
        : "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50";

  if (asChild) return <>{children}</>;

  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

