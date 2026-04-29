import { Badge, Section } from "@/components/ui";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical toolkit">
      <div className="grid gap-5">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-sm font-semibold tracking-tight text-slate-900">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

