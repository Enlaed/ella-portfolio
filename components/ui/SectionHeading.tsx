import { Eyebrow } from "./Eyebrow";
export function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) { return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2 className="section-heading__title">{children}</h2></div>; }
