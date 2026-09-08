import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CaseStudySection({ label, title, children }: { label: string; title?: string; children: ReactNode }) {
  return <section className="case-study-section u-container"><Eyebrow>{label}</Eyebrow><div className="case-study-section__content">{title ? <h2 className="case-study-section__title">{title}</h2> : null}<div className="case-study-section__body">{children}</div></div></section>;
}
