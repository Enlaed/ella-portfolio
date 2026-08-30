export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav className="nav">
        <a href="/" className="logo">
          ELLA<span>.</span>
        </a>

        <div className="navLinks">
          <a href="/#work">Work</a>
          <a href="/projects/experience">Experience</a>
          <a href="/about">About</a>
          <a href="/cv">CV</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">DATA ANALYST · DATA STORYTELLER</p>

          <h1>
            I FIND THE
            <br />
            STORIES <span>HIDDEN</span>
            <br />
            IN DATA.
          </h1>

          <p className="heroText">
            I turn complex data into clear insights, thoughtful
            visualizations, and stories people can actually understand.
          </p>

          <div className="heroActions">
            <a href="#work" className="primaryButton">
              Explore my work <span>↓</span>
            </a>

            <a href="/about" className="secondaryButton">
              About me
            </a>
          </div>
        </div>

        <div className="heroMark">
          <div className="circle">
            <span>DATA</span>
            <span>STORY</span>
            <span>∞</span>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="work">
        <div className="sectionHeader">
          <p className="eyebrow">SELECTED WORK</p>

          <h2>
            Things I’ve built
            <br />
            with data.
          </h2>
        </div>

        <div className="projectGrid">

          {/* SMART CITY */}
          <a
            href="/projects/smart-city-lagos"
            className="projectCard featured"
          >
            <div className="projectNumber">01</div>

            <div className="projectInfo">
              <p>IoT · POSTGRESQL · PYTHON · POWER BI</p>

              <h3>Smart City Lagos</h3>

              <span>
                Understanding urban systems through data →
              </span>
            </div>
          </a>

          {/* NEXUS OPS */}
          <a
            href="/projects/nexus-ops"
            className="projectCard"
          >
            <div className="projectNumber">02</div>

            <div className="projectInfo">
              <p>TIME SERIES · SQL · POSTGRESQL</p>

              <h3>Nexus Ops</h3>

              <span>
                Exploring operational performance over time →
              </span>
            </div>
          </a>

          {/* SALES ANALYSIS */}
          <a
            href="/projects/sales-analysis"
            className="projectCard"
          >
            <div className="projectNumber">03</div>

            <div className="projectInfo">
              <p>SQL · EXCEL · DATA VISUALIZATION</p>

              <h3>Sales Analysis</h3>

              <span>
                Turning sales data into business insight →
              </span>
            </div>
          </a>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experiencePreview">
        <div>
          <p className="eyebrow">EXPERIENCE</p>

          <h2>
            Data doesn't
            <br />
            exist in a vacuum.
          </h2>
        </div>

        <div className="experiencePreviewText">
          <p>
            My experience spans analytics, operations, logistics,
            telecommunications, and software — giving me a practical
            understanding of how data moves from messy reality to
            meaningful decisions.
          </p>

          <a
            href="/projects/experience"
            className="experienceLink"
          >
            Explore my experience <span>→</span>
          </a>
        </div>
      </section>

      {/* DATA STORIES */}
      <section id="stories" className="storyBanner">
        <p className="eyebrow">COMING SOON</p>

        <h2>
          DATA STORIES
          <br />
          FROM <span>EVERYWHERE.</span>
        </h2>

        <p>
          Original analysis. Real data. Big questions about the
          places, people, and systems around us.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>

        <h2>
          Numbers are useful.
          <br />
          <span>Stories make them matter.</span>
        </h2>

        <p className="aboutText">
          I’m a Data Analyst with a background in Mathematics and
          experience working with operational data, data quality,
          reporting, databases, and business analytics.
        </p>

        <a href="/about" className="aboutLink">
          More about me <span>→</span>
        </a>
      </section>

      {/* CONTACT */}
      <footer id="contact">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>

          <h2>
            Have a dataset
            <br />
            worth exploring?
          </h2>
        </div>

        <a href="mailto:okonkwoemmanuella2@gmail.com">
          Get in touch →
        </a>
      </footer>
    </main>
  );
}