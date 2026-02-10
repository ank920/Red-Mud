import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships"
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="home-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PartnershipsPage() {
  return (
    <div className="home-page partnerships-page">
      <section className="hero-panel reveal" aria-labelledby="partnerships-hero-title">
        <div className="hero-copy">
          <p className="kicker">PARTNERSHIPS &amp; BUSINESS MODELS</p>
          <h1 id="partnerships-hero-title">Scaling Critical Mineral Recovery Through Strategic Collaboration</h1>
          <p>
            Our platform is designed to deploy at scale by partnering directly with alumina
            producers, infrastructure investors, and strategic capital providers. We offer
            multiple commercial structures—each engineered to align incentives, accelerate
            remediation, and unlock long-term value from red mud stockpiles.
          </p>
          <p>
            This flexibility allows partners to participate according to their balance-sheet
            strategy, risk appetite, and operational priorities, while preserving the integrity of
            the patented extraction technology.
          </p>
        </div>
        <figure className="hero-media">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Alumina_refinery_pinjarra.jpg"
            alt="Refinery-adjacent industrial infrastructure suitable for partnership deployment"
            loading="eager"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="philosophy-title">
        <div className="section-heading">
          <p className="kicker">PARTNERSHIP PHILOSOPHY</p>
          <h2 id="philosophy-title">Aligning Environmental Remediation With Industrial Economics</h2>
        </div>
        <article className="card">
          <p>
            Red mud is not a speculative feedstock—it is a continuously generated, on-site
            industrial liability. Our partnership models convert this liability into a monetizable
            resource without disrupting alumina operations.
          </p>
          <p>Across all structures, the principles remain consistent:</p>
          <BulletList
            items={[
              "No interference with core alumina production",
              "Modular, on-site or adjacent deployment",
              "Zero-waste processing and regulatory alignment",
              "Long-term visibility on mineral recovery and ESG outcomes"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="models-title">
        <div className="section-heading">
          <p className="kicker">CORE BUSINESS MODELS</p>
          <h2 id="models-title">1. JOINT VENTURE (JV) WITH ALUMINA PRODUCERS</h2>
        </div>
        <article className="card">
          <p>Shared Ownership. Shared Upside. Immediate Remediation.</p>
          <p>
            Under the JV model, a special-purpose vehicle is jointly owned with the alumina
            producer to process current and legacy red mud stockpiles.
          </p>
          <h3>Structure</h3>
          <BulletList
            items={[
              "Dedicated JV entity",
              "Equity participation by alumina producer and technology partner",
              "Processing plant located on or adjacent to refinery site"
            ]}
          />
        </article>
        <div className="grid-2">
          <article className="card">
            <h3>Value for Alumina Producers</h3>
            <BulletList
              items={[
                "Elimination of long-term residue storage costs",
                "Balance-sheet de-risking of environmental liabilities",
                "Participation in downstream critical mineral revenues",
                "ESG performance uplift without capex concentration risk"
              ]}
            />
          </article>
          <article className="card">
            <h3>Value for Investors</h3>
            <BulletList
              items={[
                "Direct exposure to cash-generating processing assets",
                "Feedstock security through captive red mud supply",
                "Long-term offtake visibility for critical minerals"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <p>
            Best suited for:
            Large integrated producers with substantial legacy stockpiles and long operating
            horizons.
          </p>
        </article>

        <article className="card">
          <h2>2. TECHNOLOGY LICENSING</h2>
          <p>Low Capital. Rapid Replication. Asset-Light Scaling.</p>
          <p>
            In licensing structures, partners deploy the patented extraction process under a
            long-term license while technology ownership and process governance are retained
            centrally.
          </p>
          <h3>Structure</h3>
          <BulletList
            items={[
              "Upfront license fee",
              "Ongoing royalty (percentage of gross processed material or recovered output)",
              "Centralized technical oversight and performance auditing"
            ]}
          />
        </article>
        <div className="grid-2">
          <article className="card">
            <h3>Value for Alumina Producers</h3>
            <BulletList
              items={[
                "Minimal balance-sheet exposure",
                "Rapid deployment across multiple sites",
                "Predictable cost structure tied to throughput"
              ]}
            />
          </article>
          <article className="card">
            <h3>Value for Technology Owner</h3>
            <BulletList
              items={[
                "Scalable global footprint",
                "Recurring, high-margin royalty streams",
                "Preservation of IP control and process integrity"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <p>
            Best suited for:
            Producers with multiple refineries or geographies seeking standardized deployment.
          </p>
        </article>

        <article className="card">
          <h2>3. BUILD-OWN-OPERATE (BOO)</h2>
          <p>Turnkey Remediation With Zero Capital Burden for the Producer</p>
          <p>
            In a BOO configuration, the processing plant is designed, financed, built, and operated
            independently while the alumina producer supplies feedstock under a long-term
            agreement.
          </p>
          <h3>Structure</h3>
          <BulletList
            items={[
              "Independent project SPV",
              "Long-term red mud supply agreement",
              "Revenue generated from mineral recovery"
            ]}
          />
        </article>
        <div className="grid-2">
          <article className="card">
            <h3>Value for Alumina Producers</h3>
            <BulletList
              items={[
                "No capital expenditure",
                "Immediate reduction of environmental risk",
                "Guaranteed remediation pathway for ongoing production",
                "Optional revenue-sharing upside"
              ]}
            />
          </article>
          <article className="card">
            <h3>Value for Investors</h3>
            <BulletList
              items={[
                "Infrastructure-style asset with contracted feedstock",
                "Strong downside protection",
                "Exposure to strategic minerals without mining risk"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <p>
            Best suited for:
            Producers prioritizing capital discipline and rapid ESG compliance.
          </p>
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="flow-title">
        <div className="section-heading">
          <p className="kicker">“PARTNER WITH AN ALUMINA PRODUCER” — DEPLOYMENT FLOW</p>
          <h2 id="flow-title">Step 1: Site &amp; Stockpile Assessment</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Step 1: Site &amp; Stockpile Assessment</h3>
            <BulletList
              items={[
                "Chemical and mineralogical characterization",
                "Volume, age, and alkalinity profiling",
                "Integration feasibility review"
              ]}
            />
          </article>
          <article className="card">
            <h3>Step 2: Commercial Structuring</h3>
            <BulletList
              items={[
                "JV, Licensing, or BOO selection",
                "Capex, opex, and revenue-share alignment",
                "ESG and regulatory mapping"
              ]}
            />
          </article>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Step 3: Modular Plant Deployment</h3>
            <BulletList
              items={[
                "Plug-and-play installation",
                "No disruption to refinery operations",
                "Phased capacity ramp-up"
              ]}
            />
          </article>
          <article className="card">
            <h3>Step 4: Long-Term Operations &amp; Expansion</h3>
            <BulletList
              items={[
                "Continuous processing of new residue",
                "Drawdown of legacy stockpiles",
                "Replication across additional sites"
              ]}
            />
          </article>
        </div>
        <figure className="card diagram partner-flow-diagram" aria-label="Partnership deployment flow diagram">
          <svg viewBox="0 0 1220 260" role="img" aria-label="Four-step deployment flow from assessment to expansion">
            <rect x="20" y="60" width="270" height="130" rx="12" />
            <rect x="320" y="60" width="270" height="130" rx="12" />
            <rect x="620" y="60" width="270" height="130" rx="12" />
            <rect x="920" y="60" width="270" height="130" rx="12" />
            <text x="155" y="110" textAnchor="middle">Step 1</text>
            <text x="155" y="140" textAnchor="middle">Site & Stockpile Assessment</text>
            <text x="455" y="110" textAnchor="middle">Step 2</text>
            <text x="455" y="140" textAnchor="middle">Commercial Structuring</text>
            <text x="755" y="110" textAnchor="middle">Step 3</text>
            <text x="755" y="140" textAnchor="middle">Modular Plant Deployment</text>
            <text x="1055" y="110" textAnchor="middle">Step 4</text>
            <text x="1055" y="140" textAnchor="middle">Long-Term Operations</text>
            <path d="M290 125H320" />
            <path d="M590 125H620" />
            <path d="M890 125H920" />
          </svg>
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="benefits-title">
        <div className="section-heading">
          <p className="kicker">STRATEGIC BENEFITS ACROSS ALL MODELS</p>
          <h2 id="benefits-title">For Alumina Producers</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>For Alumina Producers</h3>
            <BulletList
              items={[
                "Permanent reduction of red mud liabilities",
                "Conversion of waste into strategic revenue streams",
                "Improved land utilization and regulatory positioning",
                "Alignment with national critical mineral strategies"
              ]}
            />
          </article>
          <article className="card">
            <h3>For Investors &amp; Strategic Capital</h3>
            <BulletList
              items={[
                "Access to critical minerals without geological mining risk",
                "Long-duration assets backed by industrial feedstock",
                "Strong ESG credentials with measurable impact",
                "Protection through patent-backed technology and high barriers to entry"
              ]}
            />
          </article>
        </div>
      </section>

      <section className="content-section reveal" aria-labelledby="why-title">
        <div className="section-heading">
          <p className="kicker">WHY PARTNERSHIPS MATTER</p>
          <h2 id="why-title">No Single Stakeholder Solves This Alone</h2>
        </div>
        <article className="card">
          <p>
            Red mud remediation sits at the intersection of mining, materials science,
            infrastructure, and public policy. Scalable deployment requires collaboration—not
            one-off projects.
          </p>
          <p>This partnership framework is designed to:</p>
          <BulletList
            items={[
              "De-risk adoption for producers",
              "Provide clarity and durability for investors",
              "Enable national and regional critical-mineral security"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="next-steps-title">
        <div className="section-heading">
          <p className="kicker">NEXT STEPS</p>
          <h2 id="next-steps-title">From Discussion to Deployment</h2>
        </div>
        <article className="card">
          <BulletList
            items={[
              "Confidential technical briefing",
              "Site-specific feasibility assessment",
              "Commercial model shortlisting",
              "Transaction structuring and timeline alignment"
            ]}
          />
          <p>We partner selectively. We deploy at scale.</p>
          <p>
            The opportunity is global, the feedstock is permanent, and the window for first-mover
            advantage is finite.
          </p>
        </article>
      </section>
    </div>
  );
}
