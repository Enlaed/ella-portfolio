import Image from "next/image";
import styles from "./ProjectMotion.module.css";

const frames = [
  {
    project: "01",
    label: "SMART CITY LAGOS",
    image:
      "/projects/smart-city-lagos/06_city_overview_dashboard_view.png",
    alt: "Smart City Lagos city overview dashboard",
  },
  {
    project: "02",
    label: "NEXUS OPS",
    image: "/projects/nexus-ops/analyst_select.png",
    alt: "Nexus Ops analyst access control test",
  },
  {
    project: "03",
    label: "SALES ANALYSIS",
    image:
      "/projects/sales-analysis/discount-impact-on-profit.png",
    alt: "Sales Analysis discount impact on profit chart",
  },
];

export default function ProjectMotion() {
  return (
    <section className={styles.motionSection} aria-labelledby="motion-title">
      <div className={styles.motionHeader}>
        <div>
          <p className={styles.kicker}>PROJECT MOTION</p>

          <h2 id="motion-title">
            The work,
            <br />
            in motion.
          </h2>
        </div>

        <p className={styles.intro}>
          A closer look at the visual evidence behind each project.
        </p>
      </div>

      <div className={styles.reel}>
        <div className={styles.reelTrack}>
          {frames.map((frame, index) => (
            <article className={styles.frame} key={frame.project}>
              <div className={styles.frameMeta}>
                <span>{frame.project}</span>
                <span>{frame.label}</span>
              </div>

              <div className={styles.frameWindow}>
                <Image
                  src={frame.image}
                  alt={frame.alt}
                  width={2400}
                  height={1350}
                  sizes="(max-width: 800px) 90vw, 62vw"
                  priority={index === 0}
                />
              </div>

              <div className={styles.frameCaption}>
                <span>SELECTED PROJECT EVIDENCE</span>
                <span>↗</span>
              </div>
            </article>
          ))}

          {frames.map((frame) => (
            <article
              className={styles.frame}
              key={`${frame.project}-duplicate`}
              aria-hidden="true"
            >
              <div className={styles.frameMeta}>
                <span>{frame.project}</span>
                <span>{frame.label}</span>
              </div>

              <div className={styles.frameWindow}>
                <Image
                  src={frame.image}
                  alt=""
                  width={2400}
                  height={1350}
                  sizes="(max-width: 800px) 90vw, 62vw"
                />
              </div>

              <div className={styles.frameCaption}>
                <span>SELECTED PROJECT EVIDENCE</span>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}