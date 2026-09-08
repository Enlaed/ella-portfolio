import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          ELLA<span>.</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#work">Work</a>
          <Link href="/about">About</Link>
          <Link href="/cv">CV</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.opening} aria-labelledby="home-intro">
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.label}>Data analyst · Mathematics · Lagos</p>

            <h1 id="home-intro">
              Hi, I&apos;m <em>Ella.</em>
            </h1>

            <p className={styles.lead}>
              I work with data, systems, and the questions hiding underneath
              them.
            </p>

            <p className={styles.body}>
              Mathematics taught me to look for structure. Working with data
              taught me that the interesting part usually starts when that
              structure gets messy.
            </p>
          </div>

          <div className={styles.heroVisual}>
            <p className={styles.liveBadge}>
              <span className={styles.liveDot} />
              LIVE DATA
            </p>

            <Link
              href="/projects/smart-city-lagos"
              className={styles.heroShot}
            >
              <span className={styles.shotFrame}>
                <Image
                  src="/projects/smart-city-lagos/06_city_overview_dashboard_view.png"
                  alt="Smart City Lagos city overview dashboard"
                  width={2400}
                  height={1350}
                  priority
                  sizes="(max-width: 760px) 88vw, 42vw"
                />
              </span>
              <span className={styles.heroCaption}>
                Smart City Lagos <span>↗</span>
              </span>
            </Link>

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
                  <span>315.23</span>
                  <span>186.3</span>
                  <span>73.19</span>
                  <span>315.23</span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.personality}>
          <h2>
            I like figuring <em>things out.</em>
          </h2>

          <div className={styles.personalityCopy}>
            <p>
              I&apos;m not really interested in just making dashboards. I want
              to understand the problem behind the data, build useful systems
              around it, and communicate what I find so someone can actually
              use it.
            </p>

            <p className={styles.aside}>
              Between the datasets: writing, running, swimming, board games.
            </p>

            <Link href="/about" className={styles.textLink}>
              More about me <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className={styles.work}>
        <p className={styles.workLead}>
          The work is where the questions get specific — urban systems,
          database rules, and the difference between a number moving and a
          business making sense.
        </p>

        <article className={styles.city}>
          <div className={styles.projectCopy}>
            <p className={styles.label}>IoT · PostgreSQL · Python · Power BI</p>
            <p className={styles.question}>
              What happens when a city starts talking in data?
            </p>
            <h3>Smart City Lagos</h3>
            <p>
              A simulated urban intelligence system connecting sensor events,
              PostgreSQL, Python ingestion, analytical views, risk logic, and
              Power BI — a way of watching a city as a set of signals rather
              than a single snapshot.
            </p>
            <Link href="/projects/smart-city-lagos" className={styles.textLink}>
              Explore the project <span>↗</span>
            </Link>
          </div>

          <div className={styles.cityStage}>
            <Link
              href="/projects/smart-city-lagos"
              className={`${styles.shot} ${styles.cityMain}`}
            >
              <span className={styles.shotFrame}>
                <Image
                  src="/projects/smart-city-lagos/06_city_overview_dashboard_view.png"
                  alt="Smart City Lagos city overview dashboard"
                  width={2400}
                  height={1350}
                  sizes="(max-width: 760px) 92vw, 58vw"
                />
              </span>
            </Link>

            <Link
              href="/projects/smart-city-lagos"
              className={`${styles.shot} ${styles.cityDash}`}
            >
              <span className={styles.shotFrame}>
                <Image
                  src="/projects/smart-city-lagos/07_device intelligence_dashboard_view.png"
                  alt="Smart City Lagos device intelligence dashboard"
                  width={2400}
                  height={1350}
                  sizes="(max-width: 760px) 70vw, 42vw"
                />
              </span>
            </Link>
          </div>
        </article>

        <article className={styles.nexus}>
          <div className={styles.nexusStage}>
            <Link
              href="/projects/nexus-ops"
              className={`${styles.shot} ${styles.nexusAnalyst}`}
            >
              <span className={styles.shotFrame}>
                <Image
                  src="/projects/nexus-ops/analyst_select.png"
                  alt="Nexus Ops analyst read-only query"
                  width={1600}
                  height={1000}
                  sizes="(max-width: 760px) 86vw, 48vw"
                />
              </span>
            </Link>

            <Link
              href="/projects/nexus-ops"
              className={`${styles.shot} ${styles.nexusLogs}`}
            >
              <span className={styles.shotFrame}>
                <Image
                  src="/projects/nexus-ops/auditors_logs.png"
                  alt="Nexus Ops query audit logs"
                  width={1600}
                  height={1000}
                  sizes="(max-width: 760px) 68vw, 34vw"
                />
              </span>
            </Link>
          </div>

          <div className={styles.projectCopy}>
            <p className={styles.label}>
              PostgreSQL · SQL · Access control · Observability
            </p>
            <p className={styles.question}>
              What happens when the data itself needs rules?
            </p>
            <h3>Nexus Ops</h3>
            <p>
              A PostgreSQL system exploring role-based access, controlled
              writes, structured telemetry, and query observability — so the
              data can be used, but not carelessly.
            </p>
            <Link href="/projects/nexus-ops" className={styles.textLink}>
              Explore the project <span>↗</span>
            </Link>
          </div>
        </article>

        <article className={styles.sales}>
          <div className={styles.projectCopy}>
            <p className={styles.label}>SQL · Excel · Data visualization</p>
            <p className={styles.question}>
              What happens when thousands of rows are really trying to tell
              you why the business is moving?
            </p>
            <h3>Sales Analysis</h3>
            <p>
              An analysis of sales trends, customer value, product
              performance, discounts, and regional patterns — paying attention
              to the gap between revenue moving and the business actually
              being profitable.
            </p>
            <Link href="/projects/sales-analysis" className={styles.textLink}>
              Explore the project <span>↗</span>
            </Link>
          </div>

          <div className={styles.salesStage}>
            <Link
              href="/projects/sales-analysis"
              className={`${styles.shot} ${styles.salesMain}`}
            >
              <span className={styles.shotFrame}>
                <Image
                  src="/projects/sales-analysis/discount-impact-on-profit.png"
                  alt="Sales Analysis chart of discount impact on profit"
                  width={2400}
                  height={1350}
                  sizes="(max-width: 760px) 92vw, 48vw"
                />
              </span>
            </Link>

            <Link
              href="/projects/sales-analysis"
              className={`${styles.shot} ${styles.salesTrend}`}
            >
              <span className={styles.shotFrame}>
                <Image
                  src="/projects/sales-analysis/monthly-sales-trend.png"
                  alt="Sales Analysis monthly sales trend"
                  width={2400}
                  height={1350}
                  sizes="(max-width: 760px) 70vw, 38vw"
                />
              </span>
            </Link>
          </div>
        </article>
      </section>

      <section className={styles.curious} aria-labelledby="curious-heading">
        <p className={styles.label}>Currently curious about</p>
        <h2 id="curious-heading">Still looking around the next corner.</h2>
        <ul className={styles.curiousList}>
          <li>Data Science</li>
          <li>Machine Learning</li>
          <li>AI</li>
          <li>Analytics Engineering</li>
          <li>Data Systems</li>
        </ul>
        <p className={styles.body}>
          There&apos;s still a lot I want to learn. That&apos;s part of the
          fun.
        </p>
      </section>

      <section id="contact" className={styles.contact}>
        <p className={styles.label}>Say hello</p>
        <h2>
          Got a question?
          <br />
          <em>Let&apos;s talk.</em>
        </h2>
        <a
          href="mailto:okonkwoemmanuella2@gmail.com"
          className={styles.contactEmail}
        >
          okonkwoemmanuella2@gmail.com
          <span>↗</span>
        </a>
      </section>

      <footer className={styles.footer}>
        <span>
          ELLA<span>.</span>
        </span>
        <span>Data · analysis · systems</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
