import { Mail, Github, Linkedin } from "lucide-react";

import { Button, Section } from "@/components/ui";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s connect">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
        <p className="text-sm leading-relaxed text-slate-700">
          Fastest way to reach me is email. You can also find me on GitHub and LinkedIn.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            variant="secondary"
            href={`mailto:${site.links.email}`}
            ariaLabel="Send email"
          >
            <span className="inline-flex items-center gap-2">
              <Mail size={16} />
              {site.links.email}
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
              <Github size={16} />
              GitHub
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
              <Linkedin size={16} />
              LinkedIn
            </span>
          </Button>
        </div>
      </div>
    </Section>
  );
}

