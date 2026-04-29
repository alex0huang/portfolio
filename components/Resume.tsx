import { FileDown } from "lucide-react";

import { Button, Section } from "@/components/ui";
import { site } from "@/content/site";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Download my resume">
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:flex-row sm:items-center">
        <p className="text-sm leading-relaxed text-slate-700">
          Want the one-page version? Download the PDF resume for the full details.
        </p>
        <Button variant="primary" href={site.links.resume} ariaLabel="Download resume PDF">
          <span className="inline-flex items-center gap-2">
            Download Resume <FileDown size={16} />
          </span>
        </Button>
      </div>
    </Section>
  );
}

