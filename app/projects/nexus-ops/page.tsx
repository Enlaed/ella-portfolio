import styles from "./NexusOps.module.css";

export default function NexusOps() {
  return (
    <main className={styles.page}>

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
          <span>PROJECT 02</span>
          <span>DATABASE ENGINEERING</span>
          <span>POSTGRESQL 18</span>
        </div>

        <div className={styles.heroTitle}>
          <p>NEXUS</p>
          <p>OPS<span>.</span></p>
        </div>

        <div className={styles.heroBottom}>

          <p className={styles.heroDescription}>
            A secure PostgreSQL monitoring system built to
            simulate infrastructure telemetry, access control,
            query observability, and time-series performance.
          </p>

          <div className={styles.heroTools}>
            <span>SQL</span>
            <span>POSTGRESQL</span>
            <span>RBAC</span>
            <span>TIME SERIES</span>
            <span>POWERSHELL</span>
          </div>

        </div>

      </section>


      {/* BIG NUMBERS */}

      <section className={styles.metrics}>

        <div className={styles.metric}>
          <span>TELEMETRY</span>
          <strong>1M</strong>
          <p>synthetic records generated</p>
        </div>

        <div className={styles.metric}>
          <span>DEVICES</span>
          <strong>10</strong>
          <p>simulated infrastructure nodes</p>
        </div>

        <div className={styles.metric}>
          <span>ACCESS ROLES</span>
          <strong>04</strong>
          <p>database permission levels</p>
        </div>

        <div className={styles.metric}>
          <span>INDEXES</span>
          <strong>02</strong>
          <p>performance-focused indexes</p>
        </div>

      </section>


      {/* INTRO */}

      <section className={styles.section}>

        <div className={styles.sectionLabel}>
          <span>01</span>
          <p>THE IDEA</p>
        </div>

        <div className={styles.sectionContent}>

          <h2>
            What happens when
            <br />
            <em>data never stops?</em>
          </h2>

          <p>
            Infrastructure systems continuously produce
            telemetry. CPU usage, memory consumption,
            timestamps, device identifiers and operational
            events quickly become a database problem.
          </p>

          <p>
            Nexus Ops explores what happens when that problem
            is treated as a systems-design challenge rather
            than simply a collection of SQL queries.
          </p>

        </div>

      </section>


      {/* ARCHITECTURE */}

      <section className={`${styles.section} ${styles.dark}`}>

        <div className={styles.sectionLabel}>
          <span>02</span>
          <p>ARCHITECTURE</p>
        </div>

        <div className={styles.sectionContent}>

          <h2>
            A small system
            <br />
            with a <em>big workload.</em>
          </h2>

          <div className={styles.architecture}>

            <div className={styles.architectureNode}>
              <small>01</small>
              <strong>DEVICES</strong>
              <p>
                Infrastructure nodes, identifiers,
                names and locations.
              </p>
            </div>

            <div className={styles.architectureLine} />

            <div className={styles.architectureNode}>
              <small>02</small>
              <strong>DEVICE_METRICS</strong>
              <p>
                Timestamped CPU and memory
                telemetry.
              </p>
            </div>

            <div className={styles.architectureLine} />

            <div className={styles.architectureNode}>
              <small>03</small>
              <strong>QUERY_LOGS</strong>
              <p>
                Query activity, execution time
                and audit metadata.
              </p>
            </div>

          </div>

          <div className={styles.databaseBar}>
            <span>DATABASE ENGINE</span>
            <strong>POSTGRESQL 18</strong>
          </div>

        </div>

      </section>


      {/* SECURITY */}

      <section className={styles.section}>

        <div className={styles.sectionLabel}>
          <span>03</span>
          <p>SECURITY</p>
        </div>

        <div className={styles.sectionContent}>

          <h2>
            Everyone gets access.
            <br />
            <em>Not everything.</em>
          </h2>

          <p>
            Nexus Ops uses Role-Based Access Control to
            separate administrative, analytical, ingestion,
            and auditing responsibilities.
          </p>

          <div className={styles.roles}>

            <div>
              <span>01</span>
              <small>ADMIN</small>
              <strong>nexus_admin</strong>
              <p>Full database control.</p>
            </div>

            <div>
              <span>02</span>
              <small>ANALYST</small>
              <strong>nexus_analyst</strong>
              <p>Read-only analytical access.</p>
            </div>

            <div>
              <span>03</span>
              <small>WRITER</small>
              <strong>nexus_writer</strong>
              <p>Controlled telemetry ingestion.</p>
            </div>

            <div>
              <span>04</span>
              <small>AUDITOR</small>
              <strong>nexus_auditor</strong>
              <p>Query log visibility.</p>
            </div>

          </div>

        </div>

      </section>


      {/* PROOF */}

      <section className={styles.proof}>

        <div className={styles.proofIntro}>

          <div>
            <span>04</span>
            <p>PROOF OF ACCESS</p>
          </div>

          <h2>
            The permissions
            <br />
            were <em>tested.</em>
          </h2>

          <p>
            Configuration is not proof. Each database role
            was tested against the operations it was designed
            to permit — and restrict.
          </p>

        </div>


        <div className={styles.screenshotGrid}>

          <article className={styles.screenshotCard}>

            <div className={styles.screenshotImage}>
              <img
                src="/nexusops/admin_login.png"
                alt="Nexus Ops administrator authentication"
              />
            </div>

            <div className={styles.screenshotCaption}>
              <span>01 / ADMIN</span>
              <h3>Administrative access</h3>
              <p>
                PostgreSQL authentication confirmed
                administrative access.
              </p>
            </div>

          </article>


          <article className={styles.screenshotCard}>

            <div className={styles.screenshotImage}>
              <img
                src="/nexusops/analyst_select.png"
                alt="Nexus Ops analyst SELECT query"
              />
            </div>

            <div className={styles.screenshotCaption}>
              <span>02 / ANALYST</span>
              <h3>Read-only access</h3>
              <p>
                Analytical queries were permitted while
                write operations remained restricted.
              </p>
            </div>

          </article>


          <article className={styles.screenshotCard}>

            <div className={styles.screenshotImage}>
              <img
                src="/nexusops/writer_insert.png"
                alt="Nexus Ops writer telemetry insertion"
              />
            </div>

            <div className={styles.screenshotCaption}>
              <span>03 / WRITER</span>
              <h3>Controlled ingestion</h3>
              <p>
                The writer role successfully inserted
                telemetry into the system.
              </p>
            </div>

          </article>


          <article className={styles.screenshotCard}>

            <div className={styles.screenshotImage}>
              <img
                src="/nexusops/auditor_logs.png"
                alt="Nexus Ops auditor query logs"
              />
            </div>

            <div className={styles.screenshotCaption}>
              <span>04 / AUDITOR</span>
              <h3>Query observability</h3>
              <p>
                Query activity and execution metadata
                were available to the audit role.
              </p>
            </div>

          </article>

        </div>

      </section>


      {/* PERFORMANCE */}

      <section className={styles.performance}>

        <div className={styles.sectionLabel}>
          <span>05</span>
          <p>PERFORMANCE</p>
        </div>

        <div className={styles.performanceContent}>

          <p className={styles.performanceKicker}>
            ONE MILLION ROWS.
          </p>

          <h2>
            Now make the
            <br />
            database <em>fast.</em>
          </h2>

          <p className={styles.performanceText}>
            Time-series workloads can become expensive when
            the database has to repeatedly scan large volumes
            of telemetry. Nexus Ops uses indexing and
            EXPLAIN ANALYZE to investigate query behaviour.
          </p>

          <div className={styles.indexes}>

            <div>
              <span>INDEX 01</span>
              <strong>
                idx_device_metrics_time
              </strong>
              <p>
                Supports time-range queries across
                telemetry records.
              </p>
            </div>

            <div>
              <span>INDEX 02</span>
              <strong>
                idx_device_metrics_device_id
              </strong>
              <p>
                Supports device-based lookups and joins.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* QUESTIONS */}

      <section className={styles.section}>

        <div className={styles.sectionLabel}>
          <span>06</span>
          <p>QUERY WORKLOADS</p>
        </div>

        <div className={styles.sectionContent}>

          <h2>
            The database was built
            <br />
            to answer <em>questions.</em>
          </h2>

          <div className={styles.questions}>

            <div>
              <span>01</span>
              <strong>When?</strong>
              <p>
                Filter telemetry across defined
                time windows.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>How much?</strong>
              <p>
                Aggregate CPU and memory usage
                across devices.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>What changed?</strong>
              <p>
                Identify devices exceeding
                defined thresholds.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* STACK */}

      <section className={styles.stack}>

        <div>
          <span className={styles.stackNumber}>07</span>
          <p>THE STACK</p>
        </div>

        <h2>
          Built around
          <br />
          <em>PostgreSQL.</em>
        </h2>

        <div className={styles.stackItems}>
          <span>PostgreSQL 18</span>
          <span>SQL</span>
          <span>pgAdmin 4</span>
          <span>pgcrypto</span>
          <span>generate_series()</span>
          <span>EXPLAIN ANALYZE</span>
          <span>PowerShell</span>
        </div>

      </section>


      {/* REFLECTION */}

      <section className={styles.section}>

        <div className={styles.sectionLabel}>
          <span>08</span>
          <p>REFLECTION</p>
        </div>

        <div className={styles.sectionContent}>

          <h2>
            SQL is the language.
            <br />
            <em>Systems are the story.</em>
          </h2>

          <p>
            Nexus Ops pushed the project beyond writing
            individual queries. The interesting part became
            understanding how database structure, security,
            observability, and performance interact.
          </p>

          <p>
            The result is a practical exploration of what it
            takes to design a database that is not only able
            to store data, but also control, monitor, and
            efficiently retrieve it.
          </p>

        </div>

      </section>


      {/* NEXT PROJECT */}

      <section className={styles.nextProject}>

        <p>NEXT PROJECT</p>

        <a href="/#work">
          <span>03</span>
          Sales Analysis
          <strong>→</strong>
        </a>

      </section>

    </main>
  );
}