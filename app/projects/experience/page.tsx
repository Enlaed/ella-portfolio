import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site/SiteChrome";
import {
  education,
  experienceClose,
  experienceIntro,
  roles,
} from "@/content/experience";
import { site } from "@/content/site";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <p className={styles.label}>{experienceIntro.kicker}</p>
        <div className={styles.heroRow}>
          <h1>{experienceIntro.title}</h1>
          <div className={styles.heroAside}>
            <p>{experienceIntro.body}</p>
            <a className={styles.download} href={site.cvPdf} download>
              Download CV <span>↓</span>
            </a>
            <Link href="/cv" className={styles.textLink}>
              Or read it on the site <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {roles.map((role, index) => (
        <article
          key={`${role.role}-${role.period}`}
          className={index % 2 === 0 ? styles.chapter : styles.chapterAlt}
        >
          <div className={styles.meta}>
            <p className={styles.label}>{role.kicker}</p>
            <p className={styles.period}>{role.period}</p>
            <p className={styles.place}>{role.location}</p>
          </div>
          <div className={styles.story}>
            <h2>{role.role}</h2>
            <p className={styles.org}>{role.organization}</p>
            <p className={styles.lead}>{role.lead}</p>
            {role.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {role.details ? (
              <ul>
                {role.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {role.metrics ? (
              <div className={styles.metrics}>
                {role.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    <p>{metric.note}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {role.impact ? (
              <div className={styles.impact}>
                <strong>{role.impact.figure}</strong>
                <div>
                  <p className={styles.label}>{role.impact.label}</p>
                  <h3>{role.impact.headline}</h3>
                  <p>{role.impact.body}</p>
                </div>
              </div>
            ) : null}
            {role.tags ? (
              <ul className={styles.tags}>
                {role.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}

      <section className={styles.thread}>
        <p className={styles.label}>The thread</p>
        <h2>{experienceClose.title}</h2>
        <p>{experienceClose.body}</p>
      </section>

      <section className={styles.school}>
        <p className={styles.label}>Education</p>
        <p className={styles.period}>{education.period}</p>
        <h2>{education.credential}</h2>
        <p>
          {education.school} · {education.location}
        </p>
        <p className={styles.note}>{education.note}</p>
      </section>

      <p className={styles.confidential}>
        Some datasets, metrics, screenshots, operational details, and internal
        materials are omitted or generalized to respect confidentiality
        obligations.
      </p>

      <SiteFooter />
    </main>
  );
}
