import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site/SiteChrome";
import { site } from "@/content/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <p className={styles.label}>About · Lagos</p>
        <h1>The long hello.</h1>
        <p className={styles.lead}>
          The homepage is a wave from the doorway. This page is what happens
          once you sit down.
        </p>
      </section>

      <section className={styles.pull} aria-labelledby="habit-heading">
        <h2 id="habit-heading">I stay with a question until it stops pretending to be simple.</h2>
        <p>
          When I do not know yet, I do not reach for a finish. I look for the
          seam: which source produced the number, who is allowed to change it,
          what would make a spike ordinary instead of interesting. Mathematics
          at the University of Benin trained the habit of looking for
          structure. Working with operational data taught me that the habit is
          most useful after the structure starts to slip.
        </p>
      </section>

      <section className={styles.split}>
        <div>
          <p className={styles.label}>Two kinds of attention</p>
          <h2>I like rules. I also like play.</h2>
        </div>
        <p>
          Away from work I write, run, swim, and play board games. None of
          that is a metaphor for analytics. It is just the other half of a
          week: sentences, miles, water, a game with actual rules. The through
          line is patience — staying with something until it yields, whether
          that is a page, a lap, or a stubborn table.
        </p>
      </section>

      <section className={styles.still}>
        <p className={styles.label}>Still collecting tools on purpose</p>
        <h2>I am not done looking under the hood.</h2>
        <ul>
          <li>Data science</li>
          <li>Machine learning</li>
          <li>AI</li>
          <li>Analytics engineering</li>
          <li>Data systems</li>
        </ul>
        <p className={styles.body}>
          Those are directions, not a claim that I already live there. The
          formal job story sits on Experience. The pieces of work sit in
          Projects. This page is only the person in between.
        </p>
      </section>

      <section className={styles.close}>
        <p className={styles.label}>If you want the rest</p>
        <div className={styles.links}>
          <Link href="/projects">
            Projects <span>→</span>
          </Link>
          <Link href="/projects/experience">
            Experience <span>→</span>
          </Link>
          <a href={`mailto:${site.email}`}>
            {site.email} <span>↗</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
