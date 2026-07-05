import { Section } from "@/components/ui";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work experience">
      <div className="space-y-5">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
          >
            <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {job.role} · {job.company}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{job.companyDetail}</p>
              </div>
              <div className="text-sm text-slate-500">
                <span>{job.location}</span>
                <span className="mx-2">·</span>
                <span>{job.period}</span>
              </div>
            </header>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-400/80" />
                  <span className="text-slate-700">{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
