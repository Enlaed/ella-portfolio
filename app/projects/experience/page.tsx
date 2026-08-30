import styles from "./Experience.module.css";

export default function Experience() {
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

        <div className={styles.heroMeta}>
          <span>EXPERIENCE</span>
          <span>DATA · OPERATIONS · TECHNOLOGY</span>
        </div>

        <div className={styles.heroTitle}>
          <p>DATA,</p>
          <p>IN THE <span>REAL</span></p>
          <p>WORLD.</p>
        </div>

        <div className={styles.heroBottom}>
          <p className={styles.heroStatement}>
            I didn't start in data.
            <br />
            I started by solving
            <br />
            <em>operational problems.</em>
          </p>

          <p className={styles.heroDescription}>
            My experience sits at the intersection of mathematics,
            operations, analytics, and technology — turning messy
            information into clearer decisions and better workflows.
          </p>
        </div>

      </section>


      {/* CAREER PATH */}
      <section className={styles.path}>

        <div className={styles.pathLabel}>
          <span>01</span>
          <p>THE PATH</p>
        </div>

        <div className={styles.pathContent}>

          <div className={styles.pathLine} />

          <div className={styles.pathItem}>
            <span>2018</span>
            <strong>DATA & ADMIN</strong>
            <p>Records · Validation · Reporting</p>
          </div>

          <div className={styles.pathItem}>
            <span>2022</span>
            <strong>LOGISTICS & OPERATIONS</strong>
            <p>Shipments · Scheduling · Data Operations</p>
          </div>

          <div className={styles.pathItem}>
            <span>2024</span>
            <strong>FLEET MANAGEMENT</strong>
            <p>25-truck fleet · Operational analytics</p>
          </div>

          <div className={styles.pathItem}>
            <span>2025</span>
            <strong>TELECOM ANALYTICS</strong>
            <p>Network operations · Reporting · Data quality</p>
          </div>

          <div className={styles.pathItem}>
            <span>2026</span>
            <strong>DATA ANALYST</strong>
            <p>Analytics · Governance · Automation</p>
          </div>

        </div>

      </section>


      {/* HUAWEI */}
      <section className={styles.experienceDark}>

        <div className={styles.sectionLabel}>
          <span>02</span>
          <p>CURRENT ROLE</p>
        </div>

        <div className={styles.experienceContent}>

          <div className={styles.roleHeader}>
            <div>
              <p className={styles.roleType}>
                DATA ANALYST · TELECOMMUNICATIONS
              </p>

              <h2>
                Huawei
                <span>.</span>
              </h2>

              <p className={styles.roleSub}>
                via RGS Worldwide · Lagos, Nigeria
              </p>
            </div>

            <p className={styles.date}>
              APR 2026 — PRESENT
            </p>
          </div>


          <div className={styles.roleIntro}>
            <p>
              Working with operational data in a live Network
              Operations environment, where accuracy, consistency,
              and timely reporting directly support business-critical
              decision-making.
            </p>
          </div>


          <div className={styles.capabilityGrid}>

            <article>
              <span>01</span>
              <h3>Data Quality</h3>
              <p>
                Validate, clean, reconcile, and audit operational
                datasets to improve reporting accuracy,
                consistency, and completeness.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Analytics</h3>
              <p>
                Analyze operational datasets, investigate
                performance patterns, and identify discrepancies
                that require attention.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Reporting</h3>
              <p>
                Prepare national operational governance reports
                and translate multiple data sources into
                executive-ready insights.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Automation</h3>
              <p>
                Use analytical and AI-assisted workflows to
                reduce repetitive work while independently
                validating outputs for accuracy.
              </p>
            </article>

          </div>


          {/* IMPACT */}
          <div className={styles.impact}>

            <div className={styles.impactNumber}>
              83<span>%</span>
            </div>

            <div>
              <p className={styles.impactLabel}>
                REPORT GENERATION IMPROVEMENT
              </p>

              <h3>
                30 minutes
                <span> → </span>
                5 minutes
              </h3>

              <p>
                Redesigned the end-to-end reporting logic and
                partnered with the development team to implement
                the improved workflow, reducing report generation
                time from approximately 30 minutes to 5 minutes.
              </p>
            </div>

          </div>


          {/* CONFIDENTIALITY */}
          <div className={styles.confidentiality}>
            <span>CONFIDENTIALITY</span>

            <p>
              Some datasets, metrics, screenshots, operational
              details, and internal materials are intentionally
              omitted or generalized to respect confidentiality
              obligations.
            </p>
          </div>

        </div>

      </section>


      {/* HUAWEI INTERNSHIP */}
      <section className={styles.section}>

        <div className={styles.sectionLabel}>
          <span>03</span>
          <p>THE BEGINNING</p>
        </div>

        <div className={styles.experienceContent}>

          <p className={styles.roleType}>
            DATA ANALYST INTERN · NYSC
          </p>

          <h2 className={styles.lightHeading}>
            Learning to read
            <br />
            <em>operations through data.</em>
          </h2>

          <div className={styles.twoColumn}>

            <p>
              My first role within the Network Operations
              environment introduced me to the realities of
              working with live operational datasets.
            </p>

            <p>
              I supported daily reporting, monitored performance
              indicators, performed data cleaning and reconciliation,
              and worked with senior analysts to investigate
              service incidents and support operational reviews.
            </p>

          </div>

          <div className={styles.tags}>
            <span>DATA CLEANING</span>
            <span>DATA VALIDATION</span>
            <span>SLA MONITORING</span>
            <span>OPERATIONAL REPORTING</span>
            <span>DATA ANALYSIS</span>
          </div>

          <p className={styles.dateLarge}>
            JUL 2025 — MAR 2026
          </p>

        </div>

      </section>


      {/* SMARTLINK */}
      <section className={styles.smartlink}>

        <div className={styles.sectionLabel}>
          <span>04</span>
          <p>TECHNOLOGY</p>
        </div>

        <div className={styles.experienceContent}>

          <p className={styles.roleType}>
            SOFTWARE ENGINEERING INTERN
          </p>

          <h2>
            Getting closer
            <br />
            to the <em>database.</em>
          </h2>

          <p className={styles.largeParagraph}>
            At Smartlink, I moved closer to the technical side of
            data — working with PostgreSQL databases, SQL queries,
            backend integration, testing, and collaborative software
            development workflows.
          </p>

          <div className={styles.techGrid}>

            <div>
              <strong>POSTGRESQL</strong>
              <span>Database structures</span>
            </div>

            <div>
              <strong>SQL</strong>
              <span>Queries & validation</span>
            </div>

            <div>
              <strong>GIT</strong>
              <span>Version control</span>
            </div>

            <div>
              <strong>DOCKER</strong>
              <span>Working knowledge</span>
            </div>

          </div>

          <p className={styles.dateLarge}>
            FEB 2026 — MAY 2026
          </p>

        </div>

      </section>


      {/* KACHICARES */}
      <section className={styles.section}>

        <div className={styles.sectionLabel}>
          <span>05</span>
          <p>OPERATIONS</p>
        </div>

        <div className={styles.experienceContent}>

          <p className={styles.roleType}>
            ASSISTANT FLEET MANAGER
          </p>

          <h2 className={styles.lightHeading}>
            Before dashboards,
            <br />
            there were <em>trucks.</em>
          </h2>

          <div className={styles.scaleBlock}>

            <div>
              <strong>25</strong>
              <span>TRUCKS</span>
              <p>Daily fleet operations</p>
            </div>

            <div>
              <strong>700+</strong>
              <span>SHIPMENTS</span>
              <p>Monthly container operations</p>
            </div>

          </div>

          <div className={styles.twoColumn}>

            <p>
              I coordinated fleet scheduling, resource allocation,
              logistics planning, stakeholder communication, and
              operational continuity across a 25-truck fleet.
            </p>

            <p>
              I also designed an Excel operational monitoring
              dashboard that gave management a centralized view
              of fleet performance and key metrics.
            </p>

          </div>

          <div className={styles.tags}>
            <span>EXCEL</span>
            <span>OPERATIONS</span>
            <span>REPORTING</span>
            <span>FLEET MANAGEMENT</span>
            <span>DATA</span>
          </div>

          <p className={styles.dateLarge}>
            NOV 2024 — APR 2025
          </p>

        </div>

      </section>


      {/* PHILOSOPHY */}
      <section className={styles.philosophy}>

        <p>THE THREAD</p>

        <h2>
          Operations taught me
          <br />
          the <em>problem.</em>
          <br />
          Data taught me
          <br />
          how to <em>see it.</em>
        </h2>

        <p className={styles.philosophyText}>
          Every role has moved me a little closer to the same
          question: how can better information lead to better
          decisions?
        </p>

      </section>


      {/* SKILLS */}
      <section className={styles.skills}>

        <div className={styles.sectionLabel}>
          <span>06</span>
          <p>WHAT I BRING</p>
        </div>

        <div className={styles.skillsContent}>

          <h2>
            The toolkit
            <br />
            keeps <em>growing.</em>
          </h2>

          <div className={styles.skillRows}>

            <div>
              <span>01</span>
              <strong>ANALYTICS</strong>
              <p>SQL · Excel · Power BI · Python</p>
            </div>

            <div>
              <span>02</span>
              <strong>DATA</strong>
              <p>Cleaning · Validation · Transformation · Quality</p>
            </div>

            <div>
              <span>03</span>
              <strong>DATABASES</strong>
              <p>PostgreSQL · Relational modelling · SQL</p>
            </div>

            <div>
              <span>04</span>
              <strong>PROBLEM SOLVING</strong>
              <p>Root cause analysis · Critical thinking · Research</p>
            </div>

            <div>
              <span>05</span>
              <strong>COMMUNICATION</strong>
              <p>Executive reporting · Documentation · Collaboration</p>
            </div>

          </div>

        </div>

      </section>


      {/* NEXT */}
      <section className={styles.next}>

        <p>KEEP EXPLORING</p>

        <div className={styles.nextLinks}>
          <a href="/#work">
            WORK <span>→</span>
          </a>

          <a href="/about">
            ABOUT <span>→</span>
          </a>

          <a href="/cv">
            CV <span>→</span>
          </a>
        </div>

      </section>

    </main>
  );
}

