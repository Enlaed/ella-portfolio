import type { Project } from "@/content/projects";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TagList } from "@/components/ui/TagList";

export function CaseStudyHero({ project }: { project: Project }) {
  return <section className="case-study-hero u-container"><div className="case-study-hero__grid"><div><Eyebrow>{project.number} · {project.eyebrow}</Eyebrow><h1 className="case-study-hero__title">{project.title}</h1></div><div><p className="case-study-hero__summary">{project.summary}</p><div style={{ marginTop: "1.5rem" }}><TagList tags={project.tags} /></div></div></div></section>;
}
