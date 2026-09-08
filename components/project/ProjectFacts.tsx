export type ProjectFact = { label: string; value: string };
export function ProjectFacts({ facts }: { facts: readonly ProjectFact[] }) { return <dl className="project-facts">{facts.map((fact) => <div className="project-facts__item" key={fact.label}><dt className="project-facts__label">{fact.label}</dt><dd className="project-facts__value">{fact.value}</dd></div>)}</dl>; }
