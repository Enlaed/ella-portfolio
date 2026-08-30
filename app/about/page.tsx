export default function About() {
  return (
    <main className="aboutPage">

      {/* NAV */}
      <nav className="nav">
        <a href="/" className="logo">
          ELLA<span>.</span>
        </a>

        <div className="navLinks">
          <a href="/#work">Work</a>
          <a href="/projects/experience">Experience</a>
          <a href="/cv">CV</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="aboutHero">

        <div className="aboutHeroTop">
          <p className="eyebrow">ABOUT ME</p>

          <span className="aboutHeroNumber">
            01 / 06
          </span>
        </div>

        <h1>
          MATHEMATICS.
          <br />
          <span>DATA.</span>
          <br />
          STORIES.
        </h1>

        <div className="aboutHeroBottom">

          <p className="aboutLead">
            I’m a Data Analyst with a background in Mathematics,
            interested in the space where analytical thinking,
            technology, and human stories meet.
          </p>

          <div className="aboutOrb">
            <span>THINK</span>
            <span>ANALYZE</span>
            <span>EXPLAIN</span>
          </div>

        </div>

      </section>


      {/* STATEMENT */}
      <section className="aboutStatement">

        <p className="eyebrow">
          THE SHORT VERSION
        </p>

        <h2>
          I like turning
          <br />
          <span>messy information</span>
          <br />
          into something
          <br />
          people can understand.
        </h2>

        <div className="statementNote">
          <span>01</span>

          <p>
            The interesting part of data isn't always the number.
            Sometimes it's the question behind it.
          </p>
        </div>

      </section>


      {/* JOURNEY */}
      <section className="aboutJourney">

        <div className="journeyIntro">

          <p className="eyebrow">
            THE JOURNEY
          </p>

          <h2>
            From numbers
            <br />
            to <span>systems.</span>
          </h2>

        </div>

        <div className="journeyText">

          <p>
            My academic background is in Mathematics, which gave me
            a strong foundation in quantitative reasoning, problem
            solving, and analytical thinking.
          </p>

          <p>
            My professional experience has taken that foundation
            into real-world operations and technology. I’ve worked
            with operational data, reporting, data quality,
            dashboards, business analysis, and systems that support
            day-to-day decision making.
          </p>

          <p>
            Today, I work with data in a technology environment,
            where the challenge is rarely just finding a number.
            It is understanding what the number means, whether it
            can be trusted, and how to communicate it clearly.
          </p>

        </div>

      </section>


      {/* FOUR PILLARS */}
      <section className="experienceStrip">

        <div className="experienceStripHeader">
          <p className="eyebrow">
            THE THREAD
          </p>

          <p>
            Four ideas that keep showing up in my work.
          </p>
        </div>

        <div className="experienceGrid">

          <div className="experienceItem">
            <span>01</span>

            <strong>
              MATHEMATICS
            </strong>

            <p>
              Quantitative foundation
            </p>
          </div>


          <div className="experienceItem">
            <span>02</span>

            <strong>
              ANALYTICS
            </strong>

            <p>
              Data → insight → decisions
            </p>
          </div>


          <div className="experienceItem">
            <span>03</span>

            <strong>
              TECHNOLOGY
            </strong>

            <p>
              Systems, data & infrastructure
            </p>
          </div>


          <div className="experienceItem">
            <span>04</span>

            <strong>
              STORYTELLING
            </strong>

            <p>
              Making data understandable
            </p>
          </div>

        </div>

      </section>


      {/* PERSONAL PHILOSOPHY */}
      <section className="aboutPhilosophy">

        <p className="eyebrow">
          HOW I THINK
        </p>

        <h2>
          A good analysis
          <br />
          should leave you
          <br />
          with a better
          <span> question.</span>
        </h2>

        <div className="philosophyBottom">

          <p>
            I’m interested in more than producing charts or
            calculating metrics. I want to understand the system
            behind the data, question assumptions, and communicate
            findings in a way that makes them useful.
          </p>

        </div>

      </section>


      {/* NOW */}
      <section className="aboutNow">

        <div className="aboutNowHeader">

          <p className="eyebrow">
            WHERE I’M GOING
          </p>

          <span>
            05
          </span>

        </div>

        <h2>
          Building deeper
          <br />
          <span>data & AI expertise.</span>
        </h2>

        <div className="aboutNowContent">

          <p>
            I’m continuing to build toward more advanced work
            across data science, machine learning, analytics
            engineering, and data-driven systems.
          </p>

          <div className="directionList">

            <div>
              <span>01</span>
              <strong>DATA SCIENCE</strong>
            </div>

            <div>
              <span>02</span>
              <strong>MACHINE LEARNING</strong>
            </div>

            <div>
              <span>03</span>
              <strong>ANALYTICS ENGINEERING</strong>
            </div>

            <div>
              <span>04</span>
              <strong>DATA-DRIVEN SYSTEMS</strong>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="aboutCTA">

        <p className="eyebrow">
          KEEP EXPLORING
        </p>

        <h2>
          There’s more
          <br />
          <span>to explore.</span>
        </h2>

        <div className="aboutLinks">

          <a href="/#work">
            View my work
            <span>→</span>
          </a>

          <a href="/projects/experience">
            My experience
            <span>→</span>
          </a>

          <a href="/cv">
            View my CV
            <span>→</span>
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer id="contact">

        <div>

          <p className="eyebrow">
            LET’S CONNECT
          </p>

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