import Link from "next/link";
import { EllaScene } from "@/components/home/EllaScene";
import { SiteFooter, SiteHeader } from "@/components/site/SiteChrome";
import { site } from "@/content/site";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <div className={styles.board}>
      <section className={styles.hero} aria-labelledby="home-intro">
        <p className={styles.label}>
          <span className={styles.liveDot} />
          Ella · Lagos · currently online
        </p>

        <h1 id="home-intro">
          Hi, I&apos;m <em>Ella</em>
          <span className={styles.caret} aria-hidden="true" />
        </h1>

        <p className={styles.lead}>
          I work with data, systems, and the questions hiding underneath them.
        </p>

        <p className={styles.note} aria-hidden="true">
          psst — I like figuring things out.
        </p>

        <div className={styles.dataStream} aria-hidden="true">
          <span className={`${styles.roll} ${styles.rollA}`}>
            <span className={styles.rollTrack}>
              <span>08.42</span>
              <span>73.19</span>
              <span>60.95</span>
              <span>82.41</span>
              <span>08.42</span>
            </span>
          </span>
          <span className={`${styles.roll} ${styles.rollB}`}>
            <span className={styles.rollTrack}>
              <span>4,293</span>
              <span>138</span>
              <span>186.3</span>
              <span>4,293</span>
            </span>
          </span>
          <span className={`${styles.roll} ${styles.rollC}`}>
            <span className={styles.rollTrack}>
              <span>95.7%</span>
              <span>315.23</span>
              <span>507.18</span>
              <span>95.7%</span>
            </span>
          </span>
          <span className={`${styles.roll} ${styles.rollD}`}>
            <span className={styles.rollTrack}>
              <span>ask better</span>
              <span>look twice</span>
              <span>stay curious</span>
              <span>ask better</span>
            </span>
          </span>
        </div>
      </section>

      <ul className={styles.touches}>
        <li>Writing</li>
        <li>Running</li>
        <li>Swimming</li>
        <li>Board games</li>
        <li>Better questions</li>
      </ul>

        <section id="work" className={styles.door} aria-labelledby="work-door">
          <p className={styles.label}>The work lives next door</p>
          <h2 id="work-door">Come look at what I have been sitting with.</h2>
          <p className={styles.marquee} aria-hidden="true">
            <span>
              Smart City Lagos · Nexus Ops · Sales Analysis · Smart City Lagos ·
              Nexus Ops · Sales Analysis ·
            </span>
          </p>
          <Link href="/projects" className={styles.doorLink}>
            Explore the projects <span>→</span>
          </Link>
        </section>

        <section className={styles.scene} aria-label="Illustrated portrait of Ella">
          <EllaScene />
        </section>

        <section id="contact" className={styles.contact}>
          <p className={styles.label}>Say hello</p>
          <h2>
            Got a question?
            <br />
            <em>Let&apos;s talk.</em>
          </h2>
          <div className={styles.contactRow}>
            <a href={`mailto:${site.email}`} className={styles.contactBtn}>
              {site.email}
              <span>↗</span>
            </a>
            <a
              href={site.github}
              className={styles.contactBtn}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
