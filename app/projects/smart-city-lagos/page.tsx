import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceFigure } from "@/components/project/EvidenceFigure";
import { SiteHeader } from "@/components/site/SiteChrome";
import { CaseMotion } from "@/components/project/CaseMotion";
import styles from "./SmartCity.module.css";

export const metadata: Metadata = {
  title: "Smart City Lagos — Emmanuella Okonkwo",
  description:
    "A simulated Lagos urban intelligence system: IoT-style sensors, PostgreSQL, Python ingestion, SQL views, and Power BI.",
};

const locations = [
  { code: "ETI_LEK_P1", name: "Lekki Phase 1", lga: "Eti-Osa", lat: "6.447800", lng: "3.472900", x: "82%", y: "62%", active: true },
  { code: "ETI_VI", name: "Victoria Island", lga: "Eti-Osa", lat: "6.428100", lng: "3.421900", x: "68%", y: "78%", active: false },
  { code: "IKE_ALLEN", name: "Allen Avenue", lga: "Ikeja", lat: "6.601500", lng: "3.351400", x: "38%", y: "18%", active: true },
  { code: "LMD_YABA", name: "Yaba", lga: "Lagos Mainland", lat: "6.509500", lng: "3.371300", x: "48%", y: "42%", active: true },
  { code: "SUR_AGUDA", name: "Aguda", lga: "Surulere", lat: "6.505000", lng: "3.348000", x: "32%", y: "48%", active: false },
  { code: "APA_WHARF", name: "Apapa Wharf", lga: "Apapa", lat: "6.448800", lng: "3.359000", x: "28%", y: "68%", active: true },
  { code: "KOS_OWORO", name: "Oworonshoki", lga: "Kosofe", lat: "6.538000", lng: "3.390000", x: "58%", y: "32%", active: false },
  { code: "ETI_IKOYI", name: "Ikoyi", lga: "Eti-Osa", lat: "6.454900", lng: "3.433800", x: "74%", y: "54%", active: false },
];

export default function SmartCityLagos() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroMeta}>
            <span>Project 01</span>
            <span>Urban intelligence · IoT · Data systems</span>
            <span>Simulation — not live municipal data</span>
          </div>
          <h1 className={styles.heroTitle}>
            SMART CITY
            <br />
            <em>LAGOS</em>
            <span>.</span>
          </h1>
          <p className={styles.heroLead}>
            If a city could report on itself — air, traffic, power, device
            health — what would the signal path look like from a street
            sensor to a dashboard operator?
          </p>
          <div className={styles.statusRow}>
            <article>
              <span><i className={styles.pulse} /> System</span>
              <strong>SIMULATED</strong>
              <p>Python loop, 2-second cycle</p>
            </article>
            <article>
              <span><i className={styles.pulse} /> Locations</span>
              <strong>08 SITES</strong>
              <p>Seeded Lagos coordinates</p>
            </article>
            <article>
              <span><i className={styles.pulse} /> Devices</span>
              <strong>04 NODES</strong>
              <p>AIR · TRF · PWR · WTH</p>
            </article>
            <article>
              <span><i className={styles.pulse} /> Stream</span>
              <strong>~40K READINGS</strong>
              <p>As shown on the city dashboard</p>
            </article>
          </div>
          <div className={styles.stream} aria-hidden="true">
            <div className={styles.streamTrack}>
              <span>AQI 60.95</span>
              <span>Traffic 50.72</span>
              <span>Power 315.23</span>
              <span>AIR_ETI_LEK_P1_001</span>
              <span>TRF_IKE_ALLEN_001</span>
              <span>APA_WHARF</span>
              <span>AQI 60.95</span>
              <span>Traffic 50.72</span>
              <span>Power 315.23</span>
              <span>AIR_ETI_LEK_P1_001</span>
              <span>TRF_IKE_ALLEN_001</span>
              <span>APA_WHARF</span>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.pipeline} aria-label="System narrative">
        <article>
          <span>01</span>
          <strong>CITY</strong>
          <p>Eight mapped Lagos sites with coordinates.</p>
        </article>
        <article>
          <span>02</span>
          <strong>SENSORS</strong>
          <p>Four device types attached to four of those sites.</p>
        </article>
        <article>
          <span>03</span>
          <strong>DATA</strong>
          <p>Stochastic readings every two seconds.</p>
        </article>
        <article>
          <span>04</span>
          <strong>DATABASE</strong>
          <p>PostgreSQL locations, devices, sensor_data.</p>
        </article>
        <article>
          <span>05</span>
          <strong>INTELLIGENCE</strong>
          <p>SQL views, indexes, rule-based risk flags.</p>
        </article>
        <article>
          <span>06</span>
          <strong>DASHBOARD</strong>
          <p>Power BI city and device canvases.</p>
        </article>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>01</span>
          <p>The opening question</p>
        </div>
        <CaseMotion tone="city">
          <h2>
            How do you watch a city <em>without pretending you own its sensors?</em>
          </h2>
          <div className={styles.prose}>
            <p>
              Lagos is dense, coastal, and operationally uneven. Air quality,
              congestion, and power load are the kinds of signals a municipal
              operations room would want on one screen. I did not have access
              to live city feeds, and I did not scrape municipal systems.
            </p>
            <p>
              The honest option was a simulation: a small, inspectable model of
              how those signals could be generated, stored, aggregated, and
              displayed. The point was the pipeline — city → sensors → data →
              database → intelligence → dashboard — not a claim about live
              Lagos operations.
            </p>
          </div>
        </CaseMotion>
      </section>

      <div className={styles.navyBand}>
          <section className={styles.section}>
            <div className={styles.sectionLabel}>
              <span>02</span>
              <p>City</p>
            </div>
            <div>
              <h2>Eight coordinates, not a cartoon map.</h2>
              <div className={styles.prose}>
                <p>
                  The <code>locations</code> table is the spatial layer:
                  <code>location_key</code>, <code>location_code</code>,
                  area name, LGA, latitude, longitude. The seed list is eight
                  real Lagos places — Lekki Phase 1, Victoria Island, Allen
                  Avenue, Yaba, Aguda, Apapa Wharf, Oworonshoki, Ikoyi — with
                  decimal coordinates stored to six places.
                </p>
                <p>
                  Only four of those sites have devices attached. The other
                  four exist as geography that could take sensors later. That
                  is why the Power BI city view shows four location codes, not
                  eight.
                </p>
              </div>
              <div className={styles.map}>
                <div className={styles.mapPlot} aria-hidden="true">
                  {locations.map((loc) => (
                    <span
                      key={loc.code}
                      className={styles.dot}
                      data-active={String(loc.active)}
                      style={{ left: loc.x, top: loc.y }}
                    >
                      <span className={styles.dotLabel}>{loc.code}</span>
                    </span>
                  ))}
                </div>
                <ul className={styles.coordList}>
                  {locations.map((loc) => (
                    <li key={loc.code}>
                      <span>{loc.code}</span>
                      <span>
                        {loc.name} · {loc.lga}
                      </span>
                      <span>
                        {loc.lat}, {loc.lng}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>03</span>
          <p>Sensors</p>
        </div>
        <div>
          <h2>
            Four devices, four jobs.
          </h2>
          <div className={styles.prose}>
            <p>
              <code>devices</code> is the identity layer: surrogate
              <code>device_key</code>, business <code>device_id</code>, type,
              foreign key to <code>locations</code>, installation date, status,
              firmware, last maintenance. Types in the seed are AIR, TRF, PWR,
              and WTH — air, traffic, power, weather.
            </p>
          </div>
          <div className={styles.devices}>
            <article className={styles.device}>
              <small>AIR · ACTIVE · v1.2.0</small>
              <strong>AIR_ETI_LEK_P1_001</strong>
              <p>Lekki Phase 1. Installed 2025-01-15.</p>
            </article>
            <article className={styles.device}>
              <small>TRF · ACTIVE · v2.0.1</small>
              <strong>TRF_IKE_ALLEN_001</strong>
              <p>Allen Avenue, Ikeja. Installed 2025-03-01.</p>
            </article>
            <article className={styles.device}>
              <small>PWR · MAINTENANCE · v1.0.5</small>
              <strong>PWR_APA_WHARF_001</strong>
              <p>Apapa Wharf. Device row marked MAINTENANCE; the generator still samples it.</p>
            </article>
            <article className={styles.device}>
              <small>WTH · ACTIVE · v1.3.2</small>
              <strong>WTH_LMD_YABA_001</strong>
              <p>Yaba, Lagos Mainland. Installed 2025-02-10.</p>
            </article>
          </div>
          <CaseMotion tone="cityExhibit">
          <EvidenceFigure
            className={styles.shot}
            frameClassName={styles.frame}
            kicker="Schema evidence"
            src="/projects/smart-city-lagos/01_schema_table.png"
            alt="pgAdmin object explorer showing locations, devices, and sensor_data tables"
            caption="Three public tables in the smart_city_lagos database: locations, devices, sensor_data. The instance also shows Timescale-related schemas installed; this project’s SQL does not create hypertables."
          />
          </CaseMotion>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>04</span>
          <p>Database</p>
        </div>
        <div>
          <h2>
            A fact stream hanging off two dimensions.
          </h2>
          <div className={styles.prose}>
            <p>
              <code>sensor_data</code> is the event table: serial
              <code>sensor_id</code>, <code>device_id</code>,
              <code>location_code</code>, temperature, humidity, air quality
              index, traffic density, power usage, battery level, status, and
              a timestamptz defaulting to <code>NOW()</code>.
            </p>
            <p>
              Devices reference locations by <code>location_key</code>. Sensor
              rows store <code>device_id</code> and <code>location_code</code>
              as values copied in at insert time, which keeps the stream
              readable without a join on every dashboard query. The ERD makes
              that relationship visible.
            </p>
          </div>
          <CaseMotion tone="cityExhibit">
          <EvidenceFigure
            className={styles.shot}
            frameClassName={styles.frame}
            kicker="ERD"
            src="/projects/smart-city-lagos/02_erd_relationships.png"
            alt="DBeaver ER diagram of sensor_data, devices, and locations"
            caption="sensor_data.device_id links to devices; devices.location_key links to locations. Connection shown against localhost:5433 / smart_city_lagos."
          />
          </CaseMotion>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>05</span>
          <p>Data generation</p>
        </div>
        <div>
          <h2>
            A loop, not a live city.
          </h2>
          <div className={styles.prose}>
            <p>
              <code>db.py</code> opens a psycopg2 connection from a local
              config module. Credentials stay in that file; they are not
              repeated here. <code>test_connection.py</code> checks
              <code>SELECT version()</code>, the current database name, and
              public table names before the generator is trusted.
            </p>
            <p>
              <code>iot_generator.py</code> loads device/location pairs, then
              enters <code>while True</code>: pick a device at random, build a
              reading, insert it, append a JSON log line, sleep two seconds.
              Status is sampled as ACTIVE (weight 0.85) or DEGRADED (0.15).
              Power usage is <code>uniform(120, 520)</code>; battery is an
              integer from 20 to 100.
            </p>
            <p>
              The generator also contains location-specific baselines keyed to
              short codes (<code>IKJ</code>, <code>VI</code>, <code>APP</code>,
              <code>YBA</code>, <code>SUR</code>). The seeded
              <code>location_code</code> values are longer identifiers such as
              <code>IKE_ALLEN</code> and <code>APA_WHARF</code>, so those
              branches did not match during the recorded run. Inserts used the
              default baseline (temperature around 27, traffic around 50, AQI
              around 60) plus noise — which lines up with the city dashboard
              averages (AQI 60.95, traffic 50.72).
            </p>
          </div>
          <CaseMotion tone="cityExhibit">
          <EvidenceFigure
            className={styles.shot}
            frameClassName={styles.frame}
            kicker="Connection test"
            src="/projects/smart-city-lagos/03_python_db_connection.png"
            alt="test_connection.py succeeding against the smart_city_lagos database"
            caption="Successful connection printout: database smart_city_lagos, public tables locations, devices, sensor_data. Engine reported here is PostgreSQL 16 in a Linux container; pgAdmin for the same project also shows a PostgreSQL 18 object tree."
          />
          </CaseMotion>
          <CaseMotion tone="cityExhibit">
          <EvidenceFigure
            className={styles.shot}
            frameClassName={styles.frame}
            kicker="Ingestion"
            src="/projects/smart-city-lagos/04_iot_data_insertion.png"
            alt="Terminal printing INSERTED device_id at location_code on a two-second cadence"
            caption="Continuous inserts from iot_generator.py: each line is one chosen device at its mapped location_code."
          />
          </CaseMotion>
          <pre className={styles.code}>{`while True:
    device_id, location_code = random.choice(devices)
    data = generate_sensor_data(device_id, location_code)
    insert_data(conn, data)
    write_log("DATA_INSERTED", data)
    time.sleep(2)`}</pre>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>06</span>
          <p>Observability</p>
        </div>
        <div>
          <h2>Every insert leaves a paper trail.</h2>
          <div className={styles.prose}>
            <p>
              Failed inserts roll back and write <code>INSERT_ERROR</code>.
              Successful ones append <code>DATA_INSERTED</code> with UTC
              timestamp, device id, location code, and status. The log file is
              JSON lines — readable as a pipeline tape, not as the analytical
              store.
            </p>
          </div>
          <CaseMotion tone="cityExhibit">
          <EvidenceFigure
            className={styles.shot}
            frameClassName={styles.frame}
            kicker="Pipeline log"
            src="/projects/smart-city-lagos/05_pipeline_logs.png"
            alt="JSON log lines of DATA_INSERTED events with timestamps and device status"
            caption="logs/smart_city_lagos_logs.txt: one JSON object per insert, including ACTIVE and DEGRADED statuses."
          />
          </CaseMotion>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>07</span>
          <p>Intelligence</p>
        </div>
        <div>
          <h2>
            Views first, then rules — not a model.
          </h2>
          <div className={styles.prose}>
            <p>
              Raw rows are useful for debugging and useless as an operator
              screen. Four views sit on <code>sensor_data</code>:
            </p>
          </div>
          <div className={styles.views}>
            <article>
              <strong>vw_city_health</strong>
              <p>
                Per location_code: counts, averages, standard deviations, min
                and max for temperature, humidity, AQI, traffic, power.
              </p>
            </article>
            <article>
              <strong>vw_device_performance</strong>
              <p>
                The same idea per device_id, plus battery min / max / average.
              </p>
            </article>
            <article>
              <strong>vw_hourly_city_trends</strong>
              <p>
                <code>DATE_TRUNC(&apos;hour&apos;, timestamp)</code> buckets
                for temperature, traffic, and AQI.
              </p>
            </article>
            <article>
              <strong>vw_operational_risk_signals</strong>
              <p>
                Peak and average AQI, traffic, and power, plus a CASE flag.
              </p>
            </article>
          </div>
          <CaseMotion tone="cityExhibit">
          <EvidenceFigure
            className={styles.shot}
            frameClassName={styles.frame}
            kicker="SQL views"
            src="/projects/smart-city-lagos/08_sql_views_creation.png"
            alt="SQL editor creating vw_city_health, vw_device_performance, and vw_hourly_city_trends"
            caption="View definitions grouping sensor_data by location_code, device_id, and hour."
          />
          </CaseMotion>
          <div className={styles.prose} style={{ marginTop: "1.8rem" }}>
            <p>
              The risk view is threshold logic on historical maxima, not
              predictive machine learning:
            </p>
          </div>
          <ul className={styles.risk}>
            <li>MAX(air_quality_index) &gt; 100 → HIGH_AIR_POLLUTION_EVENT</li>
            <li>MAX(traffic_density) &gt; 90 → TRAFFIC_SPIKE</li>
            <li>MAX(power_usage) &gt; 450 → ENERGY_SPIKE</li>
            <li>else → NORMAL</li>
          </ul>
          <div className={styles.prose} style={{ marginTop: "1.2rem" }}>
            <p>
              Because the flag uses <code>MAX()</code> over all stored rows for
              a location, a single spike stays on the flag for as long as that
              row remains. The device dashboard shows Max Peak AQI of 120 and
              HIGH_AIR_POLLUTION_EVENT on all four instrumented sites. That is
              a classification of peaks in the simulated series, not a live
              air-quality alert and not a trained model.
            </p>
          </div>
          <div className={styles.indexes}>
            <p className={styles.kicker}>Indexes and EXPLAIN</p>
            <p>
              <code>idx_sensor_timestamp</code> on <code>(timestamp)</code>
            </p>
            <p>
              <code>idx_sensor_device_time</code> on{" "}
              <code>(device_id, timestamp)</code>
            </p>
            <p>
              <code>idx_sensor_location_time</code> on{" "}
              <code>(location_code, timestamp)</code>
            </p>
            <p className={styles.prose}>
              The SQL script also runs <code>EXPLAIN ANALYZE</code> on
              location aggregates, device aggregates, and hourly traffic
              buckets. Those statements are in the project file; this page
              does not invent runtimes from them.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>08</span>
          <p>Dashboard</p>
        </div>
        <div>
          <h2>Two canvases on the same stream.</h2>
          <div className={styles.prose}>
            <p>
              Power BI reads the PostgreSQL model: raw <code>sensor_data</code>,
              the dimension tables, and the analytical views. There are two
              report pages in the evidence set.
            </p>
          </div>
          <div className={styles.dashPair}>
            <CaseMotion tone="cityExhibit">
          <EvidenceFigure
              className={styles.shot}
              frameClassName={styles.frame}
              kicker="City overview"
              src="/projects/smart-city-lagos/06_city_overview_dashboard_view.png"
              alt="Power BI city overview with AQI, traffic, power, and 40K readings"
              caption="Cards: AQI 60.95, traffic 50.72, power 315.23, 40K total readings. Bars compare those averages by location_code."
            />
            </CaseMotion>
            <CaseMotion tone="cityExhibit">
          <EvidenceFigure
              className={styles.shot}
              frameClassName={styles.frame}
              kicker="Device intelligence"
              src="/projects/smart-city-lagos/07_device intelligence_dashboard_view.png"
              alt="Power BI device intelligence dashboard with battery, AQI, and risk table"
              caption="About 39.57K device events, average battery 60.09, average AQI 60.94, four device ids. Diagnostic table lists HIGH_AIR_POLLUTION_EVENT against the four instrumented location codes."
            />
            </CaseMotion>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>09</span>
          <p>What the run actually shows</p>
        </div>
        <div>
          <h2>Findings that stay inside the files.</h2>
          <div className={styles.prose}>
            <p>
              The simulation produced a large, even-looking city average: AQI
              near 61, traffic near 51, power near 315, battery near 60. Those
              numbers sit on the default generator band, not on differentiated
              Ikeja-versus-Apapa profiles.
            </p>
            <p>
              Device-level and location-level averages move together because
              each device is bound to one site. Peak AQI in the dashboard is
              120, which is enough to trip the &gt; 100 pollution rule on every
              instrumented location. Power bars cluster tightly around 314–316
              on the device page.
            </p>
            <p>
              None of that is municipal impact. It is what this generator,
              these four devices, and these views produced.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span>10</span>
          <p>Limits and next</p>
        </div>
        <div>
          <h2>What this is not, and what I would build next.</h2>
          <div className={styles.prose}>
            <p>
              It is a laptop pipeline: local PostgreSQL (non-default port in
              the ERD), a Python process that must stay running, a log file on
              disk, and a Power BI file. There is no live Lagos telemetry, no
              authentication story for operators, no alerting service, and no
              machine-learning forecast.
            </p>
            <p>
              Trade-offs I accepted: denormalised location codes on the fact
              table for simpler dashboard queries; a 2-second sleep instead of
              a message bus; rule-based peaks instead of models I could not
              honestly train.
            </p>
            <p>
              For a production deployment I would need real device contracts,
              secrets that are not sitting in a config file, matching the
              generator’s location keys to the seeded codes, streaming ingest
              (queue + batcher), retention and partitioning on
              <code>sensor_data</code>, monitored PostgreSQL, and a dashboard
              that distinguishes current state from lifetime maxima. The risk
              flags would have to be windowed in time, or they will remember
              every spike forever.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.next}>
        <p>Next project</p>
        <Link href="/projects/nexus-ops">
          Nexus Ops <span>→</span>
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
