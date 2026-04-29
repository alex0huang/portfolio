import { ArrowRight, Github, Linkedin, FileDown } from "lucide-react";

import { site } from "@/content/site";
import { Button, Container } from "@/components/ui";

export function Hero() {
  return (
    <section id="top" className="pt-14 sm:pt-18">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-slate-500">
              {site.role} · {site.location}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-slate-800 sm:text-2xl">
              {site.hero.headline}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              {site.hero.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="primary" href="#projects" ariaLabel="View projects">
                <span className="inline-flex items-center gap-2">
                  View Projects <ArrowRight size={16} />
                </span>
              </Button>
              <Button href={site.links.resume} ariaLabel="Open resume">
                <span className="inline-flex items-center gap-2">
                  Resume <FileDown size={16} />
                </span>
              </Button>
              <Button
                variant="ghost"
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                ariaLabel="Open GitHub"
              >
                <span className="inline-flex items-center gap-2">
                  GitHub <Github size={16} />
                </span>
              </Button>
              <Button
                variant="ghost"
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                ariaLabel="Open LinkedIn"
              >
                <span className="inline-flex items-center gap-2">
                  LinkedIn <Linkedin size={16} />
                </span>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
            <p className="text-xs font-medium tracking-widest text-slate-500 uppercase">
              At a glance
            </p>
            <dl className="mt-4 grid gap-4">
              <div>
                <dt className="text-sm text-slate-500">School</dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">{site.school}</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Major</dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">{site.major}</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Focus</dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">
                  AI agents · RAG · Full-stack
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Open to</dt>
                <dd className="mt-1 text-sm font-medium text-brand-700">
                  Software Engineering / AI / ML Internships
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

