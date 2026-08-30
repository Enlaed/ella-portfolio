export default function CV() {
  return (
    <main className="cvPage">
      <nav className="nav">
        <a href="/" className="logo">
          ELLA<span>.</span>
        </a>

        <a href="/" className="backLink">
          ← Back home
        </a>
      </nav>

      <section className="cvHeader">
        <div>
          <p className="eyebrow">CURRICULUM VITAE</p>

          <h1>
            EMMANUELLA
            <br />
            <span>OKONKWO.</span>
          </h1>
        </div>

        <div className="cvHeaderInfo">
          <p>
            Data Analyst with a background in Mathematics,
            interested in analytics, data science, and
            data-driven systems.
          </p>

          <a href="/cv.pdf" className="primaryButton">
            Download CV <span>↓</span>
          </a>
        </div>
      </section>

      <section className="cvSection">
        <div className="cvLabel">
          <p className="eyebrow">EXPERIENCE</p>
        </div>

        <div className="cvContent">
          <article className="cvEntry">
            <div className="cvMeta">
              <span>2025 — PRESENT</span>
              <span>LAGOS, NIGERIA</span>
            </div>

            <h2>Report Analyst</h2>

            <h3>Huawei Technologies Nigeria · RGS Worldwide</h3>

            <p>
              Business analytics and reporting within a regional
              network analysis environment, working with operational
              data, KPI reporting, service performance, and data
              quality.
            </p>

            <ul>
              <li>
                Compile, clean, validate, and analyze operational
                datasets for recurring performance reports.
              </li>

              <li>
                Develop reporting workflows, dashboards, and
                presentations used to communicate operational
                performance.
              </li>

              <li>
                Analyze SLA compliance, site performance, incident
                trends, and service delivery metrics.
              </li>

              <li>
                Collaborate with operational and field teams to
                validate data and communicate findings.
              </li>
            </ul>
          </article>

          <article className="cvEntry">
            <div className="cvMeta">
              <span>2024 — 2025</span>
              <span>LAGOS, NIGERIA</span>
            </div>

            <h2>Fleet Manager</h2>

            <h3>Kachicares Resources Limited</h3>

            <p>
              Managed fleet and logistics operations within a
              maritime logistics environment while supporting
              executive and operational functions.
            </p>

            <ul>
              <li>
                Managed operational activities across a fleet of
                25 trucks.
              </li>

              <li>
                Supported logistics planning, reporting, and
                operational decision-making.
              </li>

              <li>
                Built an Excel dashboard that introduced a more
                structured approach to operational reporting.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="cvSection">
        <div className="cvLabel">
          <p className="eyebrow">EDUCATION</p>
        </div>

        <div className="cvContent">
          <article className="cvEntry compact">
            <div className="cvMeta">
              <span>2020 — 2024</span>
              <span>EDO STATE, NIGERIA</span>
            </div>

            <h2>B.Sc. Mathematics</h2>

            <h3>University of Benin (UNIBEN)</h3>

            <p>Second Class Upper Honours (2:1)</p>
          </article>
        </div>
      </section>

      <section className="cvSection">
        <div className="cvLabel">
          <p className="eyebrow">COURSES & TRAININGS</p>
        </div>

        <div className="cvContent">
          <div className="cvTags">
            <span>Google Data Analytics Professional Certificate</span>
            <span>Google IT Support Professional Certificate</span>
            <span>IoT Wireless & Cloud Computing — Yonsei University</span>
            <span>Jobberman Soft Skills Training</span>
          </div>
        </div>
      </section>

      <section className="cvSection">
        <div className="cvLabel">
          <p className="eyebrow">PROJECTS</p>
        </div>

        <div className="cvContent">
          <article className="cvProject">
            <div>
              <span>01</span>
              <h2>Smart City Lagos</h2>
            </div>

            <p>
              Exploring data, IoT, and connected urban systems
              through a Lagos-focused smart city concept.
            </p>
          </article>

          <article className="cvProject">
            <div>
              <span>02</span>
              <h2>Nexus Ops</h2>
            </div>

            <p>
              Operational analytics project focused on structured
              data, databases, and analytical insights.
            </p>
          </article>

          <article className="cvProject">
            <div>
              <span>03</span>
              <h2>Sales Analysis</h2>
            </div>

            <p>
              Business analytics project examining sales
              performance, trends, and key commercial insights.
            </p>
          </article>
        </div>
      </section>

      <section className="cvSection">
        <div className="cvLabel">
          <p className="eyebrow">SKILLS</p>
        </div>

        <div className="cvContent">
          <div className="cvTags">
            <span>SQL</span>
            <span>Python</span>
            <span>Excel</span>
            <span>Power BI</span>
            <span>Power Query</span>
            <span>PostgreSQL</span>
            <span>Data Analysis</span>
            <span>Data Visualization</span>
            <span>Reporting</span>
          </div>
        </div>
      </section>

      <footer className="cvFooter">
        <div>
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>
            Data worth
            <br />
            exploring?
          </h2>
        </div>

        <div className="cvContact">
          <a href="mailto:okonkwoemmanuella2@gmail.com">
            Email me →
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Enlaed"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </main>
  );
}