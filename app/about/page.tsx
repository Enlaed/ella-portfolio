import Link from "next/link";
import styles from "./About.module.css";

const pillars = [
  {
    number: "01",
    title: "MATHEMATICS",
    description: "Quantitative foundation",
  },
  {
    number: "02",
    title: "ANALYTICS",
    description: "Data → insight → decisions",
  },
  {
    number: "03",
    title: "TECHNOLOGY",
    description: "Systems, data & infrastructure",
  },
  {
    number: "04",
    title: "STORYTELLING",
    description: "Making data understandable",
  },
];

const directions = [
  "DATA SCIENCE",
  "MACHINE LEARNING",
  "ANALYTICS ENGINEERING",
  "DATA-DRIVEN SYSTEMS",
];

export default function About() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          ELLA<span>.</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/cv">CV</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <p className={styles.kicker}>ABOUT ME</p>
          <span>01 / 06</span>
        </div>

        <div className={styles.heroMain}>
          <h1>
            Mathematics.
            <br />
            <span>Data.</span>
            <br />
            Stories.
          </h1>

          <div className={styles.heroAside}>
            <p>
              I&apos;m a Data Analyst with a background in Mathematics,
              interested in the space where analytical thinking, technology,
              and human questions meet.
            </p>

            <Link href="/#work" className={styles.textLink}>
              Explore my work <span>↓</span>
            </Link>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>LAGOS, NIGERIA</span>
          <span>DATA · ANALYSIS · SYSTEMS</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* SHORT VERSION */}

      <section className={styles.statement}>
        <div className={styles.statementLabel}>
          <p className={styles.kicker}>THE SHORT VERSION</p>
          <span>02</span>
        </div>

        <div className={styles.statementMain}>
          <h2>
            I like turning
            <br />
            <em>messy information</em>
            <br />
            into something
            <br />
            people can understand.
          </h2>

          <div className={styles.statementNote}>
            <span>01</span>

            <p>
              The interesting part of data isn&apos;t always the number.
              Sometimes it&apos;s the question behind it.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY */}

      <section className={styles.journey}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>THE JOURNEY</p>

          <h2>
            From numbers
            <br />
            to <em>systems.</em>
          </h2>
        </div>

        <div className={styles.journeyText}>
          <p>
            My academic background is in Mathematics, which gave me a strong
            foundation in quantitative reasoning, problem solving, and
            analytical thinking.
          </p>

          <p>
            My professional experience has taken that foundation into
            real-world operations and technology. I&apos;ve worked with
            operational data, reporting, data quality, dashboards, business
            analysis, and systems that support day-to-day decision making.
          </p>

          <p>
            Today, I work with data in a technology environment, where the
            challenge is rarely just finding a number. It is understanding what
            the number means, whether it can be trusted, and how to communicate
            it clearly.
          </p>
        </div>
      </section>

      {/* THREAD */}

      <section className={styles.thread}>
        <div className={styles.threadHeader}>
          <p className={styles.kicker}>THE THREAD</p>

          <p>Four ideas that keep showing up in my work.</p>
        </div>

        <div className={styles.pillarGrid}>
          {pillars.map((pillar) => (
            <article className={styles.pillar} key={pillar.number}>
              <span>{pillar.number}</span>

              <strong>{pillar.title}</strong>

              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className={styles.philosophy}>
        <div className={styles.philosophyTop}>
          <p className={styles.kicker}>HOW I THINK</p>
          <span>03</span>
        </div>

        <h2>
          A good analysis
          <br />
          should leave you
          <br />
          with a better
          <br />
          <em>question.</em>
        </h2>

        <div className={styles.philosophyBottom}>
          <p>
            I&apos;m interested in more than producing charts or calculating
            metrics. I want to understand the system behind the data, question
            assumptions, and communicate findings in a way that makes them
            useful.
          </p>
        </div>
      </section>

      {/* DIRECTION */}

      <section className={styles.direction}>
        <div className={styles.directionTop}>
          <p className={styles.kicker}>WHERE I&apos;M GOING</p>
          <span>04</span>
        </div>

        <div className={styles.directionHeading}>
          <h2>
            Building deeper
            <br />
            <em>data &amp; AI expertise.</em>
          </h2>

          <p>
            I&apos;m continuing to build toward more advanced work across data
            science, machine learning, analytics engineering, and data-driven
            systems.
          </p>
        </div>

        <div className={styles.directionList}>
          {directions.map((direction, index) => (
            <div key={direction}>
              <span>0{index + 1}</span>
              <strong>{direction}</strong>
              <span>↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <p className={styles.kicker}>KEEP EXPLORING</p>

        <h2>
          There&apos;s more
          <br />
          <em>to explore.</em>
        </h2>

        <div className={styles.ctaLinks}>
          <Link href="/#work">
            View my work <span>→</span>
          </Link>

          <Link href="/cv">
            View my CV <span>→</span>
          </Link>

          <Link href="/#contact">
            Get in touch <span>→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}

      <footer className={styles.footer}>
        <div>
          <p className={styles.kicker}>LET&apos;S CONNECT</p>

          <h2>
            Have a dataset
            <br />
            worth exploring?
          </h2>
        </div>

        <a href="mailto:okonkwoemmanuella2@gmail.com">
          Get in touch <span>↗</span>
        </a>
      </footer>
    </main>
  );
}