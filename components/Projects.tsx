import { ArrowUpRight, Github, Youtube, Globe } from "lucide-react";

import { featuredProjects } from "@/content/projects";
import { Badge, Button, Section } from "@/components/ui";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured" title="Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 transition will-change-transform hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
          >
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
              </div>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition group-hover:text-brand-700">
                <ArrowUpRight size={16} />
              </span>
            </header>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <div className="mt-5">
              <p className="text-xs font-medium tracking-widest text-slate-500 uppercase">
                Highlights
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-400/80" />
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(p.links?.github || p.links?.youtube || p.links?.live) && (
              <div className="mt-6 flex flex-wrap gap-2">
                {p.links?.github && p.links.github.trim().length > 0 && (
                  <Button
                    variant="secondary"
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    ariaLabel={`Open ${p.title} GitHub repository`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github size={16} />
                      GitHub
                    </span>
                  </Button>
                )}
                {p.links?.youtube && p.links.youtube.trim().length > 0 && (
                  <Button
                    variant="secondary"
                    href={p.links.youtube}
                    target="_blank"
                    rel="noreferrer"
                    ariaLabel={`Watch ${p.title} demo on YouTube`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Youtube size={16} />
                      Demo
                    </span>
                  </Button>
                )}
                {p.links?.live && p.links.live.trim().length > 0 && (
                  <Button
                    variant="secondary"
                    href={p.links.live}
                    target="_blank"
                    rel="noreferrer"
                    ariaLabel={`Open ${p.title} live product`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Globe size={16} />
                      Live
                    </span>
                  </Button>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Button
          variant="ghost"
          href="#contact"
          ariaLabel="Contact me about these projects"
        >
          Interested? Let’s connect →
        </Button>
      </div>
    </Section>
  );
}

