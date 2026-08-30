export default function SmartCityLagos() {
  return (
    <main className="projectPage">
      <nav className="nav">
        <a href="/" className="logo">
          ELLA<span>.</span>
        </a>

        <a href="/" className="backLink">
          ← Back home
        </a>
      </nav>

      <section className="projectHero">
        <p className="eyebrow">PROJECT 01 · DATA & IOT</p>

        <h1>
          SMART CITY
          <br />
          <span>LAGOS.</span>
        </h1>

        <p className="projectIntro">
          Exploring how connected infrastructure and data can help us
          understand the systems that keep a city moving.
        </p>
      </section>

      <section className="projectVisual">
        <div className="visualGrid">
          <div className="visualBox large">
            <span>CONNECTED</span>
            <strong>CITY</strong>
          </div>

          <div className="visualBox">
            <span>DATA</span>
            <strong>∞</strong>
          </div>

          <div className="visualBox">
            <span>IOT</span>
            <strong>01</strong>
          </div>

          <div className="visualBox wide">
            <span>LAGOS · NIGERIA</span>
            <div className="signal">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </section>

      <section className="projectDetails">
        <div className="detailLabel">
          <p className="eyebrow">THE PROJECT</p>
        </div>

        <div className="detailContent">
          <h2>
            Turning urban systems into
            <span> usable data.</span>
          </h2>

          <p>
            Smart City Lagos explores the role of connected technology,
            IoT data, and analytics in understanding urban environments.
            The project brings together data collection, storage,
            analysis, and visualization to demonstrate how data can
            support smarter decisions.
          </p>

          <p>
            Rather than treating data as an end product, the project
            focuses on the journey from raw information to meaningful
            insight.
          </p>
        </div>
      </section>

      <section className="projectStack">
        <div>
          <p className="eyebrow">TOOLS & TECHNOLOGIES</p>
          <h2>The stack.</h2>
        </div>

        <div className="stackList">
          <span>Python</span>
          <span>PostgreSQL</span>
          <span>IoT</span>
          <span>Data Analysis</span>
          <span>Power BI</span>
          <span>Data Visualization</span>
        </div>
      </section>

      <section className="projectReflection">
        <p className="eyebrow">WHAT I LEARNED</p>

        <h2>
          Good analysis starts
          <br />
          <span>before the analysis.</span>
        </h2>

        <p>
          Working with data from connected systems highlights the
          importance of data quality, structure, context, and responsible
          interpretation. The technical workflow matters, but so does
          understanding what the data actually represents.
        </p>
      </section>

      <section className="projectFooter">
        <p className="eyebrow">NEXT PROJECT</p>

        <a href="/projects/nexus-ops">
          Nexus Ops →
        </a>
      </section>
    </main>
  );
}