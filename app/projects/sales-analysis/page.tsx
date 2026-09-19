import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CaseMotion } from "@/components/project/CaseMotion";
import { EvidenceFigure } from "@/components/project/EvidenceFigure";
import { SiteHeader } from "@/components/site/SiteChrome";
import styles from "./SalesAnalysis.module.css";

export const metadata: Metadata = {
  title: "Sales Analysis — Emmanuella Okonkwo",
  description:
    "Retail Superstore analysis: SQL cleaning, Excel exploration, and the gap between revenue and profit.",
};

function Question({ children }: { children: ReactNode }) {
  return (
    <CaseMotion tone="sales">
      <h2 className={styles.q}>{children}</h2>
    </CaseMotion>
  );
}

function Exhibit(
  props: Omit<Parameters<typeof EvidenceFigure>[0], "className" | "frameClassName">,
) {
  return (
    <CaseMotion tone="salesExhibit">
      <EvidenceFigure className={styles.exhibit} frameClassName={styles.frame} {...props} />
    </CaseMotion>
  );
}

export default function SalesAnalysis() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.issue}>
          <span>Project 03 · Business intelligence</span>
          <span>SQL · Excel · Superstore 2014–2017</span>
        </div>
        <h1>
          SALES
          <br />
          <em>ANALYSIS.</em>
        </h1>
        <p className={styles.deck}>
          A retail order file can look healthy as long as you only total
          sales. This investigation asks what still holds when profit,
          discounts, customers, and regions enter the same frame.
        </p>
        <nav className={styles.toc} aria-label="Questions in this case study">
          <a href="#raw">
            <span>01</span>
            Raw data → a typed table
          </a>
          <a href="#trend">
            <span>02</span>
            What was actually driving sales?
          </a>
          <a href="#products">
            <span>03</span>
            What looked successful until profit?
          </a>
          <a href="#discount">
            <span>04</span>
            Where did discounts help or hurt?
          </a>
          <a href="#customers">
            <span>05</span>
            Which customers and segments mattered?
          </a>
          <a href="#regions">
            <span>06</span>
            Did regions tell the same story?
          </a>
        </nav>
      </section>

      <section className={styles.chapter} id="raw">
        <Question>
          First, stop treating every column as <em>text.</em>
        </Question>
        <dl className={styles.method}>
          <dt>Question</dt>
          <dd>
            <p>
              The source is a US Superstore-style order file: order and ship
              dates, customer, segment, geography, product hierarchy, sales,
              quantity, discount, profit. Loaded as <code>superstore_raw</code>,
              every field was TEXT — including dates and money.
            </p>
          </dd>
          <dt>Method</dt>
          <dd>
            <p>
              SQL built <code>superstore_clean</code> with typed columns, then
              inserted with <code>STR_TO_DATE(..., &apos;%m/%d/%Y&apos;)</code>{" "}
              and numeric casts on sales, quantity, discount, and profit. A
              count check and a null scan on order date, ship date, sales, and
              profit followed. The cleaned extract used on the site is{" "}
              <code>sales_data_cleaned.csv</code>.
            </p>
            <p>
              Excel then held the workbook views: overall performance, yearly
              and monthly trends, a cumulative monthly sales window, customer
              ranking, customer-versus-average benchmarking, product
              performance, loss-makers, discount bands, and regions.
              PowerPoint carried the annotated charts below.
            </p>
          </dd>
        </dl>
      </section>

      <section className={styles.chapter} id="trend">
        <Question>
          What was actually <em>driving</em> sales?
        </Question>
        <dl className={styles.method}>
          <dt>Question</dt>
          <dd>
            <p>
              Calendar totals can hide a weak year inside a growth story, or
              hide seasonality inside an annual bar.
            </p>
          </dd>
          <dt>Method</dt>
          <dd>
            <p>
              SQL aggregated <code>SUM(sales)</code>, <code>SUM(profit)</code>,
              and profit margin by <code>YEAR(order_date)</code>, then by
              year-month. A window sum over months produced cumulative sales.
              Excel plotted the annual bars with profit and margin overlays,
              and a monthly line for demand behaviour.
            </p>
          </dd>
        </dl>
        <Exhibit
          kicker="Exhibit A · Trend"
          src="/projects/sales-analysis/monthly-sales-trend.png"
          alt="Annual revenue 2014–2017 and monthly sales trend with Q4 peaks"
          caption="Annual sales: $484,247.56 (2014), $470,532.46 (2015), $609,205.86 (2016), $733,215.19 (2017). The chart notes revenue growth over time, improving profitability, and a more stable margin after 2015. The monthly series shows seasonality with consistent Q4 peaks."
        />
      </section>

      <section className={styles.chapter} id="products">
        <Question>
          What looked successful until <em>profit</em> entered the picture?
        </Question>
        <dl className={styles.method}>
          <dt>Question</dt>
          <dd>
            <p>
              Ranking by revenue answers “what sold.” Ranking by profit and by
              margin answers “what paid.” Those lists are not the same.
            </p>
          </dd>
          <dt>Method</dt>
          <dd>
            <p>
              Per product: <code>SUM(sales)</code>, <code>SUM(profit)</code>,
              margin with a zero-sales guard, plus{" "}
              <code>RANK() OVER (ORDER BY SUM(profit) DESC)</code> and a second
              rank on margin. Loss-makers are the same grain with{" "}
              <code>HAVING SUM(profit) &lt; 0</code>.
            </p>
          </dd>
        </dl>
        <Exhibit
          kicker="Exhibit B · Products"
          src="/projects/sales-analysis/product-performance-analysis.png"
          alt="Top ten revenue products versus most profitable products"
          caption="Canon imageCLASS 2200 Advanced Copier leads both lists: about $61.6K sales, $25.2K profit, 40.9% margin. The note on the slide: several lower-volume products reached 50% margins, but Canon is the strongest commercial combination of size and profit."
        />
        <CaseMotion tone="sales">
          <div className={styles.callout}>
            <strong>Revenue leaders can still lose money.</strong>
            <p>
              Cisco TelePresence System EX90 sits on the top-ten revenue list
              (~$22.6K) and on the loss list (−$1,811). GBC DocuBind P400 is
              similar (~$18.0K sales, −$1,878 profit). Volume was not a proxy for
              contribution.
            </p>
          </div>
        </CaseMotion>
        <Exhibit
          kicker="Exhibit C · Losses"
          src="/projects/sales-analysis/loss-making-products.png"
          alt="Products with the largest negative total profit"
          caption="Largest losses: Cubify CubeX 3D Printer Double Head Print (−$8,880), Lexmark MX611dhe (−$4,590), Cubify CubeX Triple Head (−$3,840), then conference tables and binding/conferencing hardware. The slide frames this as concentrated in enterprise hardware and office infrastructure, not one isolated SKU."
        />
      </section>

      <section className={styles.band}>
        <section className={styles.chapter} id="discount">
          <Question>
            Where were discounts helping, and where were they{" "}
            <em>reducing profit?</em>
          </Question>
          <dl className={styles.method}>
            <dt>Question</dt>
            <dd>
              <p>
                Discount is a lever. The SQL question is whether each rate is
                still converting sales into profit.
              </p>
            </dd>
            <dt>Method</dt>
            <dd>
              <p>
                Group by <code>discount</code>: order count, sales, profit,
                margin, average profit per order, and a CASE label — LOSS
                MAKING if total profit &lt; 0, LOW MARGIN if margin &lt; 5%,
                otherwise HEALTHY. Ordered from 0 upward so the erosion is
                visible as the rate climbs.
              </p>
            </dd>
          </dl>
          <Exhibit
            kicker="Exhibit D · Discount"
            src="/projects/sales-analysis/discount-impact-on-profit.png"
            alt="Profit by discount rate, peaking at 15% and turning negative at higher rates"
            caption="Profit is still positive at 0, 0.10, and especially 0.15 ($90,337.31). From about 0.20 the bars turn negative; 0.60 shows −$40,075.36. The slide: profitability is stable at low discounts and breaks down beyond ~30%."
          />
        </section>
      </section>

      <section className={styles.chapter} id="customers">
        <Question>
          Which customers and segments mattered <em>most?</em>
        </Question>
        <dl className={styles.method}>
          <dt>Question</dt>
          <dd>
            <p>
              Three segments — Consumer, Corporate, Home Office — do not
              contribute equally. Inside them, some customers sit above the
              average buyer.
            </p>
          </dd>
          <dt>Method</dt>
          <dd>
            <p>
              Segment value is <code>SUM(sales)</code> and{" "}
              <code>SUM(profit)</code> (also crossed with category in SQL).
              Customers are ranked with <code>RANK() OVER (ORDER BY SUM(profit)
              DESC)</code>. A CTE compares each customer’s total sales to the
              average customer, keeping those above the benchmark.
            </p>
            <p>
              The chart export is the segment contribution. Named top-customer
              profit ranks live in the workbook queries; they are not invented
              here without that exhibit.
            </p>
          </dd>
        </dl>
        <Exhibit
          kicker="Exhibit E · Segments"
          src="/projects/sales-analysis/customer-segment-value-contribution.png"
          alt="Consumer, Corporate, and Home Office sales and profit contribution"
          caption="Consumer: $1,161,401.34 sales / $134,119.21 profit. Corporate: $706,146.44 / $91,979.13. Home Office: $429,653.29 / $60,298.68. Consumer is the largest share of both; Home Office is the smallest."
        />
        <div className={styles.sheet}>
          <table>
            <thead>
              <tr>
                <th>Segment</th>
                <th>Sales</th>
                <th>Profit</th>
                <th>Approx. margin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consumer</td>
                <td>$1,161,401</td>
                <td>$134,119</td>
                <td>11.5%</td>
              </tr>
              <tr>
                <td>Corporate</td>
                <td>$706,146</td>
                <td>$91,979</td>
                <td>13.0%</td>
              </tr>
              <tr>
                <td>Home Office</td>
                <td>$429,653</td>
                <td>$60,299</td>
                <td>14.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.chapter} id="regions">
        <Question>
          Did performance look the same across <em>regions?</em>
        </Question>
        <dl className={styles.method}>
          <dt>Question</dt>
          <dd>
            <p>
              National totals flatten West, East, South, and Central into one
              mood. Regional sales and regional profit can disagree.
            </p>
          </dd>
          <dt>Method</dt>
          <dd>
            <p>
              <code>GROUP BY region</code> with sales, profit, and margin,
              <code>HAVING SUM(profit) &lt;&gt; 0</code>, ordered by margin.
              Excel compared the four regions as clustered bars.
            </p>
          </dd>
        </dl>
        <Exhibit
          kicker="Exhibit F · Regions"
          src="/projects/sales-analysis/regional-performance.png"
          alt="West, East, South, and Central sales versus profit"
          caption="West leads sales and profit ($725,458 / $108,418). East is close on sales with less profit ($678,781 / $91,523). South is smaller on both. Central sells more than South ($501,240 vs $391,722) but posts the lowest profit ($39,706) — the weakest conversion of sales into profit in this view."
        />
      </section>

      <section className={styles.chapter}>
        <Question>
          What I would not claim, and what I would do <em>next.</em>
        </Question>
        <dl className={styles.method}>
          <dt>Limits</dt>
          <dd>
            <p>
              This is historical Superstore data (2014–2017), cleaned in SQL
              that uses MySQL-style functions, then charted in Excel. It does
              not forecast demand, and it does not prove that cutting a SKU or
              a discount rate would raise next year’s profit. Dates in the CSV
              still appear in mixed day/month display; analysis used the typed
              clean table, not a second undocumented transform.
            </p>
          </dd>
          <dt>Next</dt>
          <dd>
            <p>
              I would keep the dual ranking (profit vs margin) as a standing
              product review, window discount impact by category rather than
              only by rate, and put the customer benchmark next to segment so
              “above average” is not mistaken for “most profitable.”
            </p>
          </dd>
        </dl>
      </section>

      <section className={styles.takeaway}>
        <p>Takeaway</p>
        <h2>
          Selling more is not the same as <em>earning more.</em>
        </h2>
      </section>

      <section className={styles.next}>
        <p>Selected work</p>
        <Link href="/#work">
          Back to work <span>→</span>
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
