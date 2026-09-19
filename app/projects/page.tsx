import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site/SiteChrome";
import { projects } from "@/content/projects";
import styles from "./Projects.module.css";

export const metadata: Metadata = {
  title: "Work — Emmanuella Okonkwo",
  description:
    "Projects by Emmanuella Okonkwo: Smart City Lagos, Nexus Ops, Sales Analysis, and whatever comes next.",
};

export default function ProjectsIndex() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.intro}>
        <p className={styles.label}>Work</p>
        <h1>Things I have sat with long enough to write down.</h1>
        <p className={styles.lead}>
          Each piece is a question I followed into a dataset, a database, or a
          dashboard. The homepage keeps three of them. This page is the shelf
          they all live on — built so it can hold many more.
        </p>
      </section>

      <ol className={styles.list}>
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className={`${styles.item} ${index % 2 === 1 ? styles.itemAlt : ""}`}
          >
            <div className={styles.copy}>
              <p className={styles.label}>
                {project.number} · {project.eyebrow}
              </p>
              <h2>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h2>
              <p className={styles.hook}>{project.hook}</p>
              <p className={styles.summary}>{project.summary}</p>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link
                href={`/projects/${project.slug}`}
                className={styles.textLink}
              >
                Open the case study <span>↗</span>
              </Link>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className={styles.cover}
            >
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                width={project.cover.width}
                height={project.cover.height}
                sizes="(max-width: 760px) 92vw, 46vw"
              />
            </Link>
          </li>
        ))}
      </ol>

      <p className={styles.note}>
        New work will land here first. The homepage only ever shows a short
        selection.
      </p>

      <SiteFooter />
    </main>
  );
}
