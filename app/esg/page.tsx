import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG"
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

export default function EsgPage() {
  return (
    <div className="home-page esg-page">
      <section className="hero-panel reveal" aria-labelledby="esg-hero-title">
        <div className="hero-copy">
          <p className="kicker">ESG &amp; CIRCULAR ECONOMY</p>
          <h1 id="esg-hero-title">
            Converting a Permanent Environmental Liability into Measurable Environmental Value
          </h1>
          <p>
            Red mud storage is not a temporary challenge—it is a multi-decade environmental
            obligation.
          </p>
          <p>
            Our platform addresses this at the root by eliminating the waste stream entirely,
            converting bauxite residue into marketable materials while restoring land, water
            balance, and long-term environmental stability.
          </p>
          <p>This is not offset-based sustainability.</p>
          <p>It is physical remediation with quantifiable outcomes.</p>
        </div>
        <figure className="hero-media">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Red_mud_spill_cleanup_2010.jpg"
            alt="Industrial red mud remediation infrastructure and containment work"
            loading="eager"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="waste-to-value-title">
        <div className="section-heading">
          <p className="kicker">WASTE-TO-VALUE: THE CORE ESG PRINCIPLE</p>
          <h2 id="waste-to-value-title">From Stockpile Risk to Productive Infrastructure</h2>
        </div>
        <article className="card">
          <p>
            Globally, more than 4 billion tonnes of red mud sit in engineered ponds, with
            ~150 million tonnes added annually. Each tonne represents:
          </p>
          <BulletList
            items={[
              "Long-term containment risk",
              "Ongoing monitoring and maintenance cost",
              "Lost land utility",
              "Potential environmental and social exposure"
            ]}
          />
          <p>Our technology permanently removes red mud from storage by:</p>
          <BulletList
            items={[
              "Recovering critical minerals",
              "Converting the remaining matrix into stable industrial materials",
              "Returning no material to ponds"
            ]}
          />
          <p>Result:</p>
          <p>Zero tailings. Zero net accumulation.</p>
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="pillars-title">
        <div className="section-heading">
          <p className="kicker">ENVIRONMENTAL IMPACT PILLARS</p>
          <h2 id="pillars-title">1. LAND RECLAMATION &amp; RISK ELIMINATION</h2>
        </div>
        <article className="card">
          <h3>Impact Mechanism</h3>
          <BulletList
            items={[
              "Each tonne processed permanently reduces stored residue volume",
              "Legacy ponds are progressively emptied and stabilized",
              "No requirement for new pond construction or expansion"
            ]}
          />
          <h3>Measured KPIs</h3>
          <BulletList
            items={[
              "1 million tonnes/year processed = 1 million tonnes/year liability eliminated",
              "Progressive reduction of long-term pond management horizons",
              "Release of land previously locked for waste storage"
            ]}
          />
          <p>This materially lowers:</p>
          <BulletList
            items={[
              "Tailings dam failure risk",
              "Long-term groundwater contamination exposure",
              "Intergenerational environmental liability"
            ]}
          />
        </article>

        <article className="card">
          <h2>2. WATER RECOVERY &amp; CLOSED-LOOP OPERATION</h2>
          <p>Red mud contains significant entrained process water and alkalinity.</p>
          <h3>Our Approach</h3>
          <BulletList
            items={[
              "Integrated water recovery at multiple process stages",
              "Closed-loop reuse within the plant",
              "No continuous liquid discharge to the environment"
            ]}
          />
          <h3>Measured KPIs</h3>
          <BulletList
            items={[
              ">90% process water recycled internally",
              "Reduced freshwater draw for adjacent refineries",
              "Lower hydraulic pressure on residue ponds"
            ]}
          />
          <p>This directly supports:</p>
          <BulletList
            items={[
              "Water-stressed industrial regions",
              "Zero-liquid-discharge (ZLD) compliance pathways",
              "Long-term water security for alumina operations"
            ]}
          />
        </article>

        <article className="card">
          <h2>3. CARBON &amp; ENERGY FOOTPRINT AVOIDANCE</h2>
          <h3>Process Advantage</h3>
          <BulletList
            items={[
              "Operates below 100 °C",
              "No combustion",
              "No roasting or smelting",
              "No mining, hauling, or beneficiation"
            ]}
          />
          <h3>Avoided Emissions (Relative Basis)</h3>
          <p>Avoids emissions associated with:</p>
          <ul className="home-list">
            <li>New REE mining</li>
            <li>High-temperature processing (600–1000 °C)</li>
            <li>Long-distance concentrate transport</li>
          </ul>
          <p>
            Eliminates ongoing emissions tied to red-mud pond maintenance and expansion
          </p>
          <h3>Indicative KPI (Conservative)</h3>
          <BulletList
            items={[
              "Significant CO₂-equivalent avoidance per tonne compared to conventional mining-to-refining routes",
              "Enables low-carbon supply chains for EVs, aerospace, and clean energy"
            ]}
          />
          <p>Final carbon accounting structured per site-specific LCA during deployment.</p>
        </article>
        <figure className="inline-media card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Wastewater_treatment_plant.jpg"
            alt="Industrial wastewater and closed-loop treatment infrastructure"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="circular-title">
        <div className="section-heading">
          <p className="kicker">CIRCULAR ECONOMY IN PRACTICE — NOT IN THEORY</p>
          <h2 id="circular-title">Full Material Utilization</h2>
        </div>
        <article className="card">
          <p>
            Unlike partial-use pathways (cement blending, bricks, road fill), this platform:
          </p>
          <BulletList
            items={[
              "Utilizes 100% of incoming material",
              "Generates multiple product streams",
              "Produces no residual waste"
            ]}
          />
          <h3>Recovered Outputs</h3>
          <BulletList
            items={[
              "Scandium",
              "Rare earth elements",
              "Titanium-bearing materials",
              "Iron oxides",
              "Aluminosilicates and stable mineral products"
            ]}
          />
          <p>This aligns directly with:</p>
          <BulletList
            items={[
              "Circular economy mandates",
              "Extended producer responsibility logic",
              "Industrial symbiosis models"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="social-title">
        <div className="section-heading">
          <p className="kicker">SOCIAL &amp; GOVERNANCE DIMENSIONS</p>
          <h2 id="social-title">Community &amp; Regulatory Confidence</h2>
        </div>
        <article className="card">
          <BulletList
            items={[
              "Reduced long-term environmental risk near communities",
              "Shrinking footprint of hazardous alkaline material",
              "Improved transparency through measurable remediation rates"
            ]}
          />
          <h3>Governance &amp; Reporting</h3>
          <p>Physical KPIs, not estimates:</p>
          <BulletList
            items={[
              "Tonnes processed",
              "Tonnes remediated",
              "Water recycled",
              "Land area released"
            ]}
          />
          <p>Suitable for integration into:</p>
          <BulletList
            items={[
              "ESG disclosures",
              "Sustainability reports",
              "Lender and DFI monitoring frameworks"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="kpi-title">
        <div className="section-heading">
          <p className="kicker">ESG PERFORMANCE — SAMPLE KPI FRAMEWORK</p>
          <h2 id="kpi-title">Audit-Ready KPI Matrix</h2>
        </div>
        <article className="card">
          <div className="kpi-table-wrap" role="region" aria-label="ESG KPI framework table" tabIndex={0}>
            <table className="kpi-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Unit</th>
                  <th>Annual Impact (1 Mt/y Plant)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Red mud remediated</td>
                  <td>tonnes</td>
                  <td>1,000,000</td>
                </tr>
                <tr>
                  <td>New tailings created</td>
                  <td>tonnes</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Process water recycled</td>
                  <td>%</td>
                  <td>&gt;90%</td>
                </tr>
                <tr>
                  <td>Land under waste storage</td>
                  <td>hectares</td>
                  <td>Net reduction</td>
                </tr>
                <tr>
                  <td>High-temp processing avoided</td>
                  <td>°C</td>
                  <td>&gt;500–900 °C equivalent</td>
                </tr>
                <tr>
                  <td>Critical minerals recovered</td>
                  <td>multi-element</td>
                  <td>Sc, REEs, Ti, Fe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        <figure className="card diagram esg-diagram" aria-label="ESG conversion flow diagram">
          <svg viewBox="0 0 1000 240" role="img" aria-label="Waste-to-value ESG material flow">
            <rect x="20" y="50" width="260" height="130" rx="12" />
            <rect x="370" y="50" width="260" height="130" rx="12" />
            <rect x="720" y="50" width="260" height="130" rx="12" />
            <text x="150" y="105" textAnchor="middle">Stored Red Mud</text>
            <text x="150" y="135" textAnchor="middle">Long-term Liability</text>
            <text x="500" y="105" textAnchor="middle">Integrated Recovery</text>
            <text x="500" y="135" textAnchor="middle">+ Closed-loop Water</text>
            <text x="850" y="105" textAnchor="middle">Material Outputs</text>
            <text x="850" y="135" textAnchor="middle">+ ESG KPIs</text>
            <path d="M280 115H370" />
            <path d="M630 115H720" />
          </svg>
        </figure>
      </section>

      <section className="positioning-section reveal" aria-labelledby="esg-close-title">
        <p className="kicker">STRATEGIC ESG POSITIONING (Page Close)</p>
        <h2 id="esg-close-title">This is not waste management.</h2>
        <p>
          It is permanent environmental risk removal—monetized through critical materials.
        </p>
        <p>Every tonne processed delivers:</p>
        <BulletList
          items={[
            "Environmental remediation",
            "Strategic mineral supply",
            "Verifiable ESG performance"
          ]}
        />
      </section>
    </div>
  );
}
