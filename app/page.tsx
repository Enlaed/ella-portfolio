export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">ELLA<span>.</span></div>

        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stories">Data Stories</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

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

            <a href="#about" className="secondaryButton">
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

      <section id="work" className="work">
        <div className="sectionHeader">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Things I’ve built<br />with data.</h2>
        </div>

        <div className="projectGrid">
          <article className="projectCard featured">
            <div className="projectNumber">01</div>
            <div className="projectInfo">
              <p>IoT · POSTGRESQL · PYTHON · POWER BI</p>
              <h3>Smart City Lagos</h3>
              <span>Explore project →</span>
            </div>
          </article>

          <article className="projectCard">
            <div className="projectNumber">02</div>
            <div className="projectInfo">
              <p>TIME SERIES · SQL · POSTGRESQL</p>
              <h3>Nexus Ops</h3>
              <span>Explore project →</span>
            </div>
          </article>

          <article className="projectCard">
            <div className="projectNumber">03</div>
            <div className="projectInfo">
              <p>SQL · EXCEL · DATA VISUALIZATION</p>
              <h3>Sales Analysis</h3>
              <span>Explore project →</span>
            </div>
          </article>
        </div>
      </section>

      <section id="stories" className="storyBanner">
        <p className="eyebrow">COMING SOON</p>
        <h2>
          DATA STORIES
          <br />
          FROM <span>LAGOS.</span>
        </h2>
        <p>
          Original analysis. Real data. Big questions about the places,
          people, and systems around us.
        </p>
      </section>

      <section id="about" className="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>

        <h2>
          Numbers are useful.
          <br />
          <span>Stories make them matter.</span>
        </h2>

        <p className="aboutText">
          I’m a Data Analyst with a background in Mathematics and experience
          working with operational data, data quality, reporting, databases,
          and business analytics.
        </p>
      </section>

      <footer id="contact">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>Have a dataset<br />worth exploring?</h2>
        </div>

        <a href="mailto:okonkwoemmanuella2@gmail.com">
          Get in touch →
        </a>
      </footer>
    </main>
  );
}