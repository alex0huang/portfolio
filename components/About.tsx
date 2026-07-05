import { Section } from "@/components/ui";
import { site } from "@/content/site";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-700">
        <p>
          I’m a Computer Science and Engineering junior at <span className="text-slate-900">{site.school}</span>.
          I enjoy building AI agents, retrieval-augmented generation (RAG) systems, and full-stack software that’s
          reliable, scalable, and easy to use.
        </p>
        <p>
          I’m currently a <span className="text-brand-700">Software Engineering Intern at Vigiles Robotics</span>,
          working on semantic mapping for an LLM-driven inspection robot, and I’m always open to new
          Software Engineering / AI / ML opportunities.
        </p>
      </div>
    </Section>
  );
}

