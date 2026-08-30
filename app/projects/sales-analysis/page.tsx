import styles from "./SalesAnalysis.module.css";

export default function SalesAnalysis() {
  return (
    <main className={styles.page}>

      {/* NAV */}

      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          ELLA<span>.</span>
        </a>

        <div className={styles.navLinks}>
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href="/cv">CV</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}

      <section className={styles.hero}>

        <div className={styles.heroTop}>
          <span>PROJECT 03</span>
          <span>BUSINESS ANALYTICS</span>
          <span>SQL · EXCEL</span>
        </div>

        <div className={styles.heroTitle}>
          <p>SALES</p>
          <p>ANALYSIS<span>.</span></p>
        </div>

        <div className={styles.heroBottom}>

          <p className={styles.heroStatement}>
            What happens when you stop looking
            at sales as a number — and start
            asking <em>why?</em>
          </p>

          <p className={styles.heroDescription}>
            A business analytics project combining SQL
            data cleaning, exploratory analysis in Excel,
            and structured data storytelling to uncover
            patterns in sales, profit, products, and regions.
          </p>

        </div>

      </section>


      {/* PROJECT SNAPSHOT */}

      <section className={styles.snapshot}>

        <div>
          <span>01</span>
          <strong>SQL</strong>
          <p>Data cleaning & transformation</p>
        </div>

        <div>
          <span>02</span>
          <strong>EXCEL</strong>
          <p>Exploration & visualization</p>
        </div>

        <div>
          <span>03</span>
          <strong>INSIGHTS</strong>
          <p>Business interpretation</p>
        </div>

        <div>
          <span>04</span>
          <strong>STORY</strong>
          <p>Presentation & communication</p>
        </div>

      </section>


      {/* THE QUESTION */}

      <section className={styles.section}>

        <div className={styles.label}>
          <span>02</span>
          <p>THE QUESTION</p>
        </div>

        <div className={styles.content}>

          <h2>
            More sales
            <br />
            doesn't always mean
            <br />
            <em>more money.</em>
          </h2>

          <p>
            Sales reports can make a business look healthy
            at first glance. But revenue alone doesn't explain
            what is actually driving performance.
          </p>

          <p>
            This analysis looks beneath the surface to
            understand how products, regions, sales volume,
            and profitability interact.
          </p>

        </div>

      </section>


      {/* WORKFLOW */}

      <section className={`${styles.section} ${styles.dark}`}>

        <div className={styles.label}>
          <span>03</span>
          <p>THE WORKFLOW</p>
        </div>

        <div className={styles.content}>

          <h2>
            From raw rows
            <br />
            to <em>business insight.</em>
          </h2>

          <div className={styles.workflow}>

            <div className={styles.workflowStep}>
              <span>01</span>
              <h3>Clean</h3>
              <p>
                Raw sales data was cleaned and
                transformed using SQL.
              </p>
              <small>SQL</small>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.workflowStep}>
              <span>02</span>
              <h3>Explore</h3>
              <p>
                The cleaned dataset was exported
                for exploratory analysis.
              </p>
              <small>EXCEL</small>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.workflowStep}>
              <span>03</span>
              <h3>Visualize</h3>
              <p>
                Charts were created to expose
                trends and differences.
              </p>
              <small>EXCEL</small>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.workflowStep}>
              <span>04</span>
              <h3>Explain</h3>
              <p>
                Findings were translated into
                structured business insights.
              </p>
              <small>POWERPOINT</small>
            </div>

          </div>

        </div>

      </section>


      {/* INSIGHTS */}

      <section className={styles.insights}>

        <div className={styles.label}>
          <span>04</span>
          <p>WHAT THE DATA REVEALED</p>
        </div>

        <div className={styles.insightContent}>

          <div className={styles.insightIntro}>
            <h2>
              Three things
              <br />
              stood <em>out.</em>
            </h2>

            <p>
              The analysis moved beyond simply identifying
              what sold the most. The goal was to understand
              what those sales actually meant for the business.
            </p>
          </div>


          <div className={styles.insightGrid}>

            <article>

              <span>01</span>

              <div className={styles.insightNumber}>
                01
              </div>

              <h3>
                Profitability
                <br />
                varies by product.
              </h3>

              <p>
                Some products generated significantly
                stronger profit margins than others.
              </p>

            </article>


            <article>

              <span>02</span>

              <div className={styles.insightNumber}>
                02
              </div>

              <h3>
                Geography
                <br />
                changes performance.
              </h3>

              <p>
                Regional performance varied across
                locations, revealing differences that
                aggregate sales could hide.
              </p>

            </article>


            <article>

              <span>03</span>

              <div className={styles.insightNumber}>
                ≠
              </div>

              <h3>
                Volume isn't
                <br />
                profitability.
              </h3>

              <p>
                Products with higher sales volume were
                not necessarily the products generating
                the strongest profits.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* CORE INSIGHT */}

      <section className={styles.bigInsight}>

        <p>THE TAKEAWAY</p>

        <h2>
          SELLING MORE
          <br />
          IS NOT THE
          <br />
          <em>SAME AS</em>
          <br />
          EARNING MORE.
        </h2>

        <p className={styles.takeaway}>
          A useful sales analysis has to connect
          volume with profitability — otherwise
          the business is only seeing half the picture.
        </p>

      </section>


      {/* ANALYTICAL LENS */}

      <section className={styles.section}>

        <div className={styles.label}>
          <span>05</span>
          <p>ANALYTICAL LENS</p>
        </div>

        <div className={styles.content}>

          <h2>
            Four questions
            <br />
            shaped the <em>analysis.</em>
          </h2>

          <div className={styles.questions}>

            <div>
              <span>01</span>
              <strong>What sells?</strong>
              <p>
                Identify the products and categories
                contributing to sales volume.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>What pays?</strong>
              <p>
                Compare sales performance against
                profitability.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>Where?</strong>
              <p>
                Examine differences in performance
                across regions.
              </p>
            </div>

            <div>
              <span>04</span>
              <strong>Why?</strong>
              <p>
                Translate patterns into useful
                business interpretation.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TOOLS */}

      <section className={styles.tools}>

        <div>
          <span>06</span>
          <p>TOOLS & METHODS</p>
        </div>

        <h2>
          Simple tools.
          <br />
          <em>Clear thinking.</em>
        </h2>

        <div className={styles.toolList}>

          <div>
            <strong>SQL</strong>
            <span>Cleaning · Transformation</span>
          </div>

          <div>
            <strong>EXCEL</strong>
            <span>EDA · Charts · Analysis</span>
          </div>

          <div>
            <strong>POWERPOINT</strong>
            <span>Insight communication</span>
          </div>

          <div>
            <strong>GITHUB</strong>
            <span>Version control</span>
          </div>

        </div>

      </section>


      {/* REFLECTION */}

      <section className={styles.section}>

        <div className={styles.label}>
          <span>07</span>
          <p>REFLECTION</p>
        </div>

        <div className={styles.content}>

          <h2>
            The goal wasn't
            <br />
            another <em>dashboard.</em>
          </h2>

          <p>
            The real value of the project was learning to
            move from a cleaned dataset to a defensible
            business conclusion.
          </p>

          <p>
            SQL handled the messy beginning. Excel made
            the patterns visible. The final step was turning
            those patterns into a story that someone could
            actually use to make a decision.
          </p>

        </div>

      </section>


      {/* NEXT */}

      <section className={styles.next}>

        <p>NEXT</p>

        <a href="/#work">
          <span>BACK TO</span>
          SELECTED WORK
          <strong>→</strong>
        </a>

      </section>

    </main>
  );
}