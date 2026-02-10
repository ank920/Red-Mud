import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Strategy"
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

export default function IndiaStrategyPage() {
  return (
    <div className="home-page india-page">
      <section className="hero-panel reveal" aria-labelledby="india-hero-title">
        <div className="hero-copy">
          <p className="kicker">INDIA STRATEGY &amp; POLICY</p>
          <h1 id="india-hero-title">
            Turning India’s Largest Industrial Liability into a Strategic Mineral Advantage
          </h1>
          <p>
            India is the fourth-largest generator of bauxite residue (red mud) globally. What has
            historically been treated as a waste-management challenge is now emerging as a
            strategic lever for critical-minerals security, industrial remediation, and Atmanirbhar
            Bharat.
          </p>
          <p>
            Our approach positions red mud not as an environmental burden, but as a domestically
            available, surface-stored polymetallic resource—capable of supplying scandium, rare
            earth elements, titanium, and iron oxides at industrial scale.
          </p>
        </div>
        <figure className="hero-media">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Vedanta_aluminium_smelter%2C_Jharsuguda.jpg"
            alt="Large-scale Indian industrial metals and minerals infrastructure"
            loading="eager"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="reality-title">
        <div className="section-heading">
          <p className="kicker">INDIA’S RED MUD REALITY — SCALE, CONCENTRATION, AND RISK</p>
          <h2 id="reality-title">Annual Generation &amp; Utilization</h2>
        </div>
        <article className="card">
          <BulletList
            items={[
              "~9 million tonnes/year of red mud generated nationally",
              "<3% utilization rate, far below the 25% target articulated by regulators",
              "~8.7 million tonnes/year net accumulation into engineered storage ponds"
            ]}
          />
        </article>
        <div className="grid-2">
          <article className="card">
            <h3>Geographic Concentration</h3>
            <ul className="home-list">
              <li>Odisha contributes ~75–80% of India’s annual red-mud output</li>
              <li>
                Major clusters around:
                <ul className="nested-list">
                  <li>NALCO Damanjodi (Odisha)</li>
                  <li>Vedanta Lanjigarh (Odisha)</li>
                  <li>Hindalco Utkal (Odisha)</li>
                  <li>Hindalco Muri (Jharkhand)</li>
                  <li>Hindalco Renukoot (Uttar Pradesh)</li>
                </ul>
              </li>
            </ul>
          </article>
          <article className="card">
            <h3>Legacy Stockpiles</h3>
            <BulletList
              items={[
                "Tens of millions of tonnes already stored",
                "Limited public disclosure of closing stock and pond life",
                "Aging containment infrastructure elevates environmental, social, and compliance risk"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <h3>Key Insight:</h3>
          <p>India’s red-mud challenge is not future-tense.</p>
          <p>It is already accumulated, geographically concentrated, and policy-relevant today.</p>
        </article>
        <figure className="card diagram india-map-diagram" aria-label="India priority states and cluster map">
          <svg viewBox="0 0 920 320" role="img" aria-label="India strategy cluster focus on Odisha, Jharkhand, and Uttar Pradesh">
            <rect x="20" y="20" width="360" height="280" rx="12" />
            <text x="200" y="60" textAnchor="middle">Priority States</text>
            <text x="200" y="110" textAnchor="middle">Odisha</text>
            <text x="200" y="145" textAnchor="middle">Jharkhand</text>
            <text x="200" y="180" textAnchor="middle">Uttar Pradesh</text>
            <rect x="420" y="20" width="480" height="280" rx="12" />
            <text x="660" y="60" textAnchor="middle">Major Clusters</text>
            <text x="660" y="105" textAnchor="middle">NALCO Damanjodi</text>
            <text x="660" y="135" textAnchor="middle">Vedanta Lanjigarh</text>
            <text x="660" y="165" textAnchor="middle">Hindalco Utkal</text>
            <text x="660" y="195" textAnchor="middle">Hindalco Muri</text>
            <text x="660" y="225" textAnchor="middle">Hindalco Renukoot</text>
          </svg>
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="potential-title">
        <div className="section-heading">
          <p className="kicker">STRATEGIC MINERAL POTENTIAL — HIDING IN PLAIN SIGHT</p>
          <h2 id="potential-title">Red mud generated from Indian bauxites typically contains:</h2>
        </div>
        <article className="card">
          <BulletList
            items={[
              "Iron oxides: ~35–45%",
              "Alumina: ~15–20%",
              "Titanium dioxide: ~10–15%",
              "Rare earth elements: trace-to-recoverable concentrations",
              "Scandium: low ppm, but economically significant at scale"
            ]}
          />
        </article>
        <article className="card">
          <p>At national throughput levels, this translates into:</p>
          <BulletList
            items={[
              "Meaningful scandium recovery potential for aerospace alloys and SOFCs",
              "REE streams relevant to EVs, wind turbines, electronics, and defense",
              "Titanium-bearing materials for energy and advanced manufacturing"
            ]}
          />
          <p>This is a strategic materials opportunity without new mining.</p>
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="policy-title">
        <div className="section-heading">
          <p className="kicker">POLICY ALIGNMENT — BUILT FOR INDIA’S NATIONAL MISSIONS</p>
          <h2 id="policy-title">1. Critical Minerals Security</h2>
        </div>
        <article className="card">
          <p>
            India has formally recognized rare earths, scandium, and titanium as strategic
            materials essential for:
          </p>
          <BulletList
            items={[
              "Electric mobility",
              "Renewable energy systems",
              "Aerospace and defense manufacturing"
            ]}
          />
          <p>Alignment:</p>
          <p>
            This technology enables domestic recovery from domestic waste, reducing exposure to
            geopolitically concentrated supply chains.
          </p>
        </article>
        <article className="card">
          <h3>2. Environmental Remediation &amp; CPCB Objectives</h3>
          <p>The Central Pollution Control Board (CPCB) has highlighted:</p>
          <BulletList
            items={[
              "Low utilization rates",
              "Rising cumulative stockpiles",
              "Long-term containment risk"
            ]}
          />
          <p>Alignment:</p>
          <BulletList
            items={[
              "Permanent reduction of legacy ponds",
              "No creation of secondary waste",
              "Conversion of regulatory liability into managed industrial output"
            ]}
          />
        </article>
        <article className="card">
          <h3>3. Circular Economy &amp; Atmanirbhar Bharat</h3>
          <p>India’s industrial policy emphasizes:</p>
          <BulletList
            items={[
              "Circular use of materials",
              "Import substitution",
              "Domestic value addition"
            ]}
          />
          <p>Alignment:</p>
          <BulletList
            items={[
              "Red mud becomes a secondary mineral resource",
              "Multi-output recovery improves economic resilience",
              "Supports indigenous alloy, battery, and clean-energy supply chains"
            ]}
          />
        </article>
        <article className="card">
          <h3>4. ESG, Land Use &amp; Social License</h3>
          <BulletList
            items={[
              "Red mud ponds occupy scarce industrial land",
              "Long-term storage imposes intergenerational risk"
            ]}
          />
          <p>Alignment:</p>
          <BulletList
            items={[
              "Shrinks waste-storage footprint",
              "Reduces long-term environmental liabilities",
              "Strengthens community and regulatory confidence"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="deployment-title">
        <div className="section-heading">
          <p className="kicker">DEPLOYMENT STRATEGY FOR INDIA</p>
          <h2 id="deployment-title">Target Integration Model</h2>
        </div>
        <article className="card">
          <ul className="home-list">
            <li>On-site or adjacent to existing alumina refineries</li>
            <li>
              Accepts:
              <ul className="nested-list">
                <li>Live residue streams</li>
                <li>Dewatered red mud</li>
                <li>Legacy pond material</li>
              </ul>
            </li>
          </ul>
        </article>
        <div className="grid-2">
          <article className="card">
            <h3>Modular Scale-Up</h3>
            <BulletList
              items={[
                "Initial modules aligned to 350,000 t/year processing blocks",
                "Phased expansion to 1+ million t/year facilities"
              ]}
            />
          </article>
          <article className="card">
            <h3>Priority States</h3>
            <BulletList items={["Odisha", "Jharkhand", "Uttar Pradesh"]} />
          </article>
        </div>
      </section>

      <section className="content-section reveal" aria-labelledby="institutions-title">
        <div className="section-heading">
          <p className="kicker">ROLE OF GOVERNMENT &amp; INSTITUTIONS</p>
          <h2 id="institutions-title">This platform is designed to work with public policy.</h2>
        </div>
        <article className="card">
          <h3>Potential Engagement Pathways</h3>
          <BulletList
            items={[
              "Public-Private Partnerships with PSUs",
              "Viability-gap or remediation-linked incentives",
              "Inclusion under national critical-minerals programs",
              "Multilateral climate and circular-economy financing"
            ]}
          />
        </article>
        <article className="card">
          <h3>Why This Matters</h3>
          <p>India does not need to choose between:</p>
          <p>Environmental remediation</p>
          <p>or</p>
          <p>Strategic mineral independence</p>
          <p>This technology delivers both simultaneously.</p>
        </article>
      </section>

      <section className="positioning-section reveal" aria-labelledby="india-close-title">
        <p className="kicker">STRATEGIC POSITIONING (Page Close)</p>
        <h2 id="india-close-title">India already owns one of the world’s largest critical-minerals resources.</h2>
        <p>It is stored as red mud.</p>
        <p>The question is no longer whether to remediate it—</p>
        <p>but whether to do so in a way that strengthens national capability.</p>
      </section>
    </div>
  );
}
