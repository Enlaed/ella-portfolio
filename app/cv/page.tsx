import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site/SiteChrome";
import { courses, education, roles, skills } from "@/content/experience";
import { site } from "@/content/site";
import styles from "./CV.module.css";

export default function CV() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <p className={styles.label}>Curriculum vitae</p>
        <div className={styles.heroRow}>
          <h1>Emmanuella Okonkwo</h1>
          <div>
            <p>
              Data analyst with a background in Mathematics, interested in
              analytics, data science, and data-driven systems.
            </p>
            <a className={styles.download} href={site.cvPdf} download>
              Download CV <span>↓</span>
            </a>
            <Link href="/projects/experience" className={styles.textLink}>
              Prefer the story? Read Experience <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.block}>
        <p className={styles.label}>Experience</p>
        {roles.map((role) => (
          <article key={`${role.role}-${role.period}`} className={styles.entry}>
            <div className={styles.meta}>
              <span>{role.period}</span>
              <span>{role.location}</span>
            </div>
            <h2>{role.role}</h2>
            <h3>{role.organization}</h3>
            <p>{role.lead}</p>
            {role.details ? (
              <ul>
                {role.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>

      <section className={styles.block}>
        <p className={styles.label}>Education</p>
        <article className={styles.entry}>
          <div className={styles.meta}>
            <span>{education.period}</span>
            <span>{education.location}</span>
          </div>
          <h2>{education.credential}</h2>
          <h3>{education.school}</h3>
          <p>{education.note}</p>
        </article>
      </section>

      <section className={styles.block}>
        <p className={styles.label}>Courses & trainings</p>
        <ul className={styles.chips}>
          {courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </section>

      <section className={styles.block}>
        <p className={styles.label}>Skills</p>
        <ul className={styles.chips}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}
