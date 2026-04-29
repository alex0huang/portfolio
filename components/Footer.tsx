import { Container } from "@/components/ui";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-slate-400">{site.location}</p>
        </div>
      </Container>
    </footer>
  );
}

