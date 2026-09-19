import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseMotion } from "@/components/project/CaseMotion";
import { SiteHeader } from "@/components/site/SiteChrome";
import styles from "./NexusOps.module.css";

export const metadata: Metadata = {
  title: "Nexus Ops — Emmanuella Okonkwo",
  description:
    "PostgreSQL time-series telemetry with role-based access, query logs, indexes, and EXPLAIN ANALYZE workloads.",
};

function TerminalShot({
  src,
  alt,
  prompt,
  caption,
}: {
  src: string;
  alt: string;
  prompt: string;
  caption: string;
}) {
  return (
    <figure className={styles.shot}>
      <p>{prompt}</p>
      <CaseMotion tone="nexusShot">
      <div className={styles.term}>
        <div className={styles.termBar}>psql · nexus_timeseries_db</div>
        <Image src={src} alt={alt} width={1600} height={1000} sizes="(max-width: 760px) 92vw, 70vw" />
      </div>
      </CaseMotion>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function NexusOps() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <p className={styles.prompt}>ella@portfolio:~$ inspect nexus_timeseries_db --roles --workload</p>
        <h1 className={styles.heroTitle}>
          NEXUS
          <br />
          OPS<span>.</span>
        </h1>
        <div className={styles.heroGrid}>
          <p className={styles.heroLead}>
            A million synthetic CPU and memory rows is only interesting if you
            can say who may read them, who may write them, and whether you can
            still see what the database just did.
          </p>
          <div className={styles.sys}>
            <div>
              <span>engine</span> PostgreSQL 18
            </div>
            <div>
              <span>database</span> nexus_timeseries_db
            </div>
            <div>
              <span>devices</span> 10
            </div>
            <div>
              <span>metrics</span> 10 devices × 100,000 ticks = 1,000,000 rows
            </div>
            <div>
              <span>roles</span> nexus_admin · analyst · writer · auditor
            </div>
            <div>
              <span>not built</span> triggers · partitions · backups · dashboard · FastAPI
            </div>
          </div>
        </div>
      </section>

      <div className={styles.rail} aria-label="Investigation path">
        <article>
          <span>01</span>
          <strong>WORKLOAD</strong>
        </article>
        <article>
          <span>02</span>
          <strong>SCHEMA</strong>
        </article>
        <article>
          <span>03</span>
          <strong>ROLES</strong>
        </article>
        <article>
          <span>04</span>
          <strong>PERMISSIONS</strong>
        </article>
        <article>
          <span>05</span>
          <strong>QUERY EXEC</strong>
        </article>
        <article>
          <span>06</span>
          <strong>AUDIT</strong>
        </article>
        <article>
          <span>07</span>
          <strong>PERFORMANCE</strong>
        </article>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>01</span>
          <p>Workload</p>
        </div>
        <CaseMotion tone="nexus">
          <h2>
            The problem: telemetry never arrives as a polite spreadsheet.
          </h2>
          <div className={styles.prose}>
            <p>
              Infrastructure nodes emit timestamps, CPU, and memory whether or
              not anyone is watching. The operational question is not “can SQL
              store a number?” It is whether a database can take a continuous
              synthetic load, keep writers from rewriting the device catalogue,
              keep analysts from inserting fiction, and still leave a query log
              an auditor can read.
            </p>
            <p>
              Nexus Ops is that investigation, run entirely inside PostgreSQL.
              The metrics are generated with <code>generate_series</code> and
              <code>random()</code>. They are not production telemetry.
            </p>
          </div>
        </CaseMotion>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>02</span>
          <p>Schema</p>
        </div>
        <div>
          <h2>
            Three tables. One foreign key. <em>devices → device_metrics</em>
          </h2>
          <div className={styles.prose}>
            <p>
              <code>devices</code> holds UUID primary keys (via pgcrypto), a
              name, and a location string. The seed is ten nodes: edge routers,
              core servers, an API gateway, auth service, analytics node, cache,
              backup, and an IoT aggregator — placed in Lagos, Abuja, Lagos DC,
              Cloud, or Remote Site.
            </p>
            <p>
              <code>device_metrics</code> is the time-series fact:
              <code>time</code>, <code>device_id</code> (FK),
              <code>cpu_usage</code>, <code>mem_usage</code>. CPU is drawn as
              <code>random() * 80 + 10</code> (about 10–90). Memory is
              <code>random() * 70 + 15</code> (about 15–85). Each of the ten
              devices is crossed with 100,000 minute-offset ticks:
            </p>
          </div>
          <pre className={styles.code}>{`INSERT INTO device_metrics (time, device_id, cpu_usage, mem_usage)
SELECT
    NOW() - (interval '1 minute' * gs),
    d.id,
    (random() * 80 + 10),
    (random() * 70 + 15)
FROM generate_series(1, 100000) gs
CROSS JOIN devices d;`}</pre>
          <div className={styles.prose} style={{ marginTop: "1.2rem" }}>
            <p>
              <code>query_logs</code> is a separate table: UUID
              <code>log_id</code>, query text, <code>executed_at</code>,
              <code>execution_time_ms</code>, and a free-text note. It is not
              filled by triggers. Rows are written as part of the observability
              exercise.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>03</span>
          <p>Roles</p>
        </div>
        <div>
          <h2>Least privilege is a GRANT list, not a slogan.</h2>
          <div className={styles.prose}>
            <p>
              Four roles exist: <code>nexus_admin</code>,{" "}
              <code>nexus_analyst</code>, <code>nexus_writer</code>,{" "}
              <code>nexus_auditor</code>. Login users
              <code>admin_user</code>, <code>analyst_user</code>,{" "}
              <code>writer_user</code>, and <code>auditor_user</code> inherit
              those roles. Passwords stay in the SQL script; they are not shown
              here.
            </p>
          </div>
          <div className={styles.roles}>
            <article className={styles.role}>
              <small>nexus_admin → admin_user</small>
              <strong>ALL PRIVILEGES on public tables</strong>
              <p>Full control of the schema. Not evidenced by a login screenshot in this set.</p>
              <span className={`${styles.perm} ${styles.allow}`}>GRANT ALL</span>
            </article>
            <article className={styles.role}>
              <small>nexus_analyst → analyst_user</small>
              <strong>SELECT on devices and device_metrics</strong>
              <p>Read the catalogue and the time series. No INSERT on devices.</p>
              <span className={`${styles.perm} ${styles.allow}`}>SELECT</span>
            </article>
            <article className={styles.role}>
              <small>nexus_writer → writer_user</small>
              <strong>INSERT on device_metrics only</strong>
              <p>May append telemetry. Has no GRANT on devices — including SELECT.</p>
              <span className={`${styles.perm} ${styles.deny}`}>NO devices access</span>
            </article>
            <article className={styles.role}>
              <small>nexus_auditor → auditor_user</small>
              <strong>SELECT / INSERT / UPDATE on query_logs</strong>
              <p>Sees the log table. This is application-style observability, not PostgreSQL log shipping.</p>
              <span className={`${styles.perm} ${styles.allow}`}>query_logs</span>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>04</span>
          <p>Analyst proof</p>
        </div>
        <div>
          <h2>Read the fleet. Do not rewrite it.</h2>
          <div className={styles.prose}>
            <p>
              From PowerShell, <code>psql -U analyst_user -d nexus_timeseries_db</code>.
              <code>SELECT * FROM devices</code> returns the ten seeded nodes.
              <code>INSERT INTO devices VALUES (gen_random_uuid(), &apos;test&apos;, &apos;Lagos&apos;)</code>
              fails with <code>permission denied for table devices</code>.
            </p>
          </div>
          <TerminalShot
            src="/projects/nexus-ops/analyst_select.png"
            alt="analyst_user selecting devices then denied on INSERT"
            prompt="session: analyst_user"
            caption="Evidence of analyst SELECT on devices and denied INSERT on devices."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>05</span>
          <p>Writer proof</p>
        </div>
        <div>
          <h2>Ingest metrics. Stay off the device table.</h2>
          <div className={styles.prose}>
            <p>
              <code>writer_user</code> is granted INSERT on
              <code>device_metrics</code> and nothing on <code>devices</code>.
              An insert that tries to <code>SELECT … FROM devices</code> is
              denied. A successful insert into <code>device_metrics</code> still
              completes (<code>INSERT 0 1</code> in the session). That is
              controlled telemetry ingestion: the writer can add readings, not
              manage the node list. The trade-off is real — without a SELECT on
              <code>devices</code>, the writer cannot look up an existing
              device id inside the database in order to insert against it.
            </p>
          </div>
          <TerminalShot
            src="/projects/nexus-ops/writer_insert.png"
            alt="writer_user denied on devices then inserting into device_metrics"
            prompt="session: writer_user"
            caption="Writer denied on devices; writer inserts into device_metrics."
          />
          <pre className={styles.code}>{`GRANT SELECT ON devices TO nexus_analyst;
GRANT SELECT ON device_metrics TO nexus_analyst;
GRANT INSERT ON device_metrics TO nexus_writer;
GRANT SELECT, INSERT, UPDATE ON query_logs TO nexus_auditor;`}</pre>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>06</span>
          <p>Audit / observability</p>
        </div>
        <div>
          <h2>
            The log table is the observation window.
          </h2>
          <div className={styles.prose}>
            <p>
              <code>auditor_user</code> queries <code>query_logs</code>. Each
              row stores time, duration in milliseconds, the query text, and a
              note describing the workload. Four rows were recorded:
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className={styles.log}>
              <thead>
                <tr>
                  <th>note</th>
                  <th>ms</th>
                  <th>query (as logged)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>baseline time filter test</td>
                  <td>120.5</td>
                  <td>SELECT * FROM device_metrics WHERE time &gt; NOW() - INTERVAL &apos;1 hour&apos;</td>
                </tr>
                <tr>
                  <td>aggregation workload test</td>
                  <td>340.2</td>
                  <td>SELECT device_id, AVG(cpu_usage) FROM device_metrics GROUP BY device_id</td>
                </tr>
                <tr>
                  <td>anomaly detection test</td>
                  <td>210.8</td>
                  <td>SELECT * FROM device_metrics WHERE cpu_usage &gt; 80</td>
                </tr>
                <tr>
                  <td>dashboard join test</td>
                  <td>500</td>
                  <td>JOIN devices + metrics query</td>
                </tr>
              </tbody>
            </table>
          </div>
          <TerminalShot
            src="/projects/nexus-ops/auditors_logs.png"
            alt="auditor_user selecting query_logs with timestamps and durations"
            prompt="session: auditor_user"
            caption="Query observability: auditor reads time, duration, query text, and notes from query_logs."
          />
          <div className={styles.prose} style={{ marginTop: "1.4rem" }}>
            <p>
              A fourth screenshot is sometimes labelled as an admin login. It
              is not. The prompt is the same <code>auditor_user</code> session
              selecting <code>query_logs</code>. It is a second copy of the
              observability evidence, not proof of <code>admin_user</code>.
            </p>
          </div>
          <TerminalShot
            src="/projects/nexus-ops/admin_login.png"
            alt="auditor_user querying query_logs, sometimes mislabelled as admin login"
            prompt="filename: admin_login.png — actual session: auditor_user"
            caption="Not an admin login. Same query_logs select under auditor_user."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>07</span>
          <p>Performance considerations</p>
        </div>
        <div>
          <h2>Indexes exist. Improvement is not claimed.</h2>
          <div className={styles.prose}>
            <p>
              Two btree indexes sit on the fact table:
              <code>idx_device_metrics_time</code> on <code>(time)</code> and
              <code>idx_device_metrics_device_id</code> on{" "}
              <code>(device_id)</code>. They are there for time-range filters
              and device lookups / joins.
            </p>
            <p>
              The script then runs <code>EXPLAIN ANALYZE</code> on a one-hour
              time filter and on a six-hour per-device average. Those plans
              were inspected in the database. This case study does not invent a
              before/after speedup. The millisecond values in
              <code>query_logs</code> are recorded durations for named tests,
              not a controlled benchmark of indexed versus sequential scans.
            </p>
            <p>
              Other statements in the SQL file look at min/max time, latest ten
              rows, CPU above 80 in 24 hours, and memory above 70 — the kinds
              of questions a monitoring workload would ask.
            </p>
          </div>
          <pre className={styles.code}>{`CREATE INDEX idx_device_metrics_time
ON device_metrics (time);

CREATE INDEX idx_device_metrics_device_id
ON device_metrics (device_id);

EXPLAIN ANALYZE
SELECT * FROM device_metrics
WHERE time > NOW() - INTERVAL '1 hour';

EXPLAIN ANALYZE
SELECT device_id, AVG(cpu_usage)
FROM device_metrics
WHERE time > NOW() - INTERVAL '6 hours'
GROUP BY device_id;`}</pre>
        </div>
      </section>

      <section className={styles.next}>
        <p>Next project</p>
        <Link href="/projects/sales-analysis">
          Sales Analysis <span>→</span>
        </Link>
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
