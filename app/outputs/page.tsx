import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outputs"
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

export default function OutputsPage() {
  return (
    <div className="home-page outputs-page">
      <section className="hero-panel reveal" aria-labelledby="outputs-hero-title">
        <div className="hero-copy">
          <p className="kicker">CRITICAL MINERALS &amp; OUTPUTS</p>
          <h1 id="outputs-hero-title">Strategic Materials Recovered from Red Mud — At Industrial Scale</h1>
          <p>
            Red mud is not a single-metal resource. It is a complex, surface-available
            polymetallic deposit formed during alumina refining.
          </p>
          <p>
            The Enervoxa platform is engineered to selectively recover multiple critical and
            industrial minerals from this matrix—each as a separate, specification-controlled
            product stream.
          </p>
          <p>
            The outputs described below reflect demonstrated extraction capability and commercially
            realistic purity targets, aligned with downstream requirements in aerospace, electric
            mobility, clean energy, and advanced manufacturing.
          </p>
        </div>
        <figure className="hero-media">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Rare_earth_oxides.jpg"
            alt="Rare earth and industrial oxide materials"
            loading="eager"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="scandium-title">
        <div className="section-heading">
          <p className="kicker">SCANDIUM</p>
          <h2 id="scandium-title">Ultra-High-Value Enabler for Aerospace and Advanced Energy Systems</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Recovered Form</h3>
            <BulletList
              items={[
                "Scandium oxide (Sc₂O₃) intermediate",
                "Convertible to master alloys or high-purity oxide grades"
              ]}
            />
          </article>
          <article className="card">
            <h3>Indicative Purity Targets</h3>
            <BulletList
              items={[
                "≥99.0% Sc₂O₃ (industrial / alloy grade)",
                "Pathway to 99.9%+ for specialty aerospace and SOFC applications"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <h3>Why Scandium Matters</h3>
          <p>
            Scandium is one of the most supply-constrained strategic metals globally, yet it
            delivers disproportionate performance benefits:
          </p>
          <ul className="home-list">
            <li>
              Aluminum-scandium alloys:
              <ul className="nested-list">
                <li>20–40% weight reduction</li>
                <li>Higher strength-to-weight ratios</li>
                <li>Improved weldability and fatigue resistance</li>
              </ul>
            </li>
            <li>
              Solid Oxide Fuel Cells (SOFCs):
              <ul className="nested-list">
                <li>Scandia-stabilized zirconia electrolytes</li>
                <li>Higher conductivity and durability</li>
              </ul>
            </li>
          </ul>
        </article>
        <article className="card">
          <h3>Value Proposition</h3>
          <BulletList
            items={[
              "No primary scandium mines required",
              "Recovered from already-mined industrial residue",
              "Enables domestic scandium supply chains for aerospace, defense, and hydrogen infrastructure"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="ree-title">
        <div className="section-heading">
          <p className="kicker">RARE EARTH ELEMENTS (REEs)</p>
          <h2 id="ree-title">Magnet, Electronics, and Clean-Energy Criticals</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Recovered REE Spectrum</h3>
            <BulletList
              items={[
                "Yttrium (Y)",
                "Dysprosium (Dy)",
                "Gadolinium (Gd)",
                "Neodymium (Nd)*",
                "Praseodymium (Pr)*",
                "(*depending on feedstock composition)"
              ]}
            />
          </article>
          <article className="card">
            <h3>Recovered Form</h3>
            <BulletList
              items={[
                "Individual REE oxide fractions",
                "Mixed REE concentrates as intermediate products where appropriate"
              ]}
            />
            <h3>Indicative Purity Targets</h3>
            <BulletList
              items={[
                "95–99% REO (separated oxide streams)",
                "Mixed concentrates suitable for downstream cracking and separation"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <h3>Market Alignment</h3>
          <p>REEs recovered through this platform directly serve:</p>
          <BulletList
            items={[
              "Permanent magnets for EV motors and wind turbines",
              "Advanced electronics and telecommunications",
              "Defense systems and guidance technologies",
              "Medical imaging and specialty optics"
            ]}
          />
        </article>
        <article className="card">
          <h3>Value Proposition</h3>
          <BulletList
            items={[
              "Feedstock already on surface; no mining or beneficiation risk",
              "Multi-REE recovery improves project economics versus single-element plays",
              "Supports non-Chinese REE supply diversification"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="titanium-title">
        <div className="section-heading">
          <p className="kicker">TITANIUM-BEARING MATERIALS</p>
          <h2 id="titanium-title">Structural and Functional Materials for Energy &amp; Mobility</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Recovered Form</h3>
            <BulletList
              items={[
                "Titanium-rich intermediates",
                "Convertible to titanium dioxide (TiO₂) or downstream titanium compounds"
              ]}
            />
            <h3>Indicative Purity Targets</h3>
            <BulletList
              items={[
                "90–98% TiO₂ equivalent, depending on downstream specification",
                "Suitable for pigment, battery, and advanced materials processing"
              ]}
            />
          </article>
          <article className="card">
            <h3>Market Relevance</h3>
            <p>Titanium compounds are critical for:</p>
            <BulletList
              items={[
                "Battery technologies and energy storage systems",
                "Aerospace structural components",
                "Corrosion-resistant industrial equipment",
                "Clean-energy manufacturing (solar, hydrogen)"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <h3>Value Proposition</h3>
          <BulletList
            items={[
              "Extracted without high-temperature chlorination or sulfate routes",
              "Lower energy and environmental footprint",
              "Complements REE recovery within the same processing train"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="iron-title">
        <div className="section-heading">
          <p className="kicker">IRON OXIDES</p>
          <h2 id="iron-title">Industrial-Grade Products with Immediate Offtake Potential</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Recovered Form</h3>
            <BulletList
              items={[
                "Iron oxide pigments",
                "Iron-based coagulants and industrial intermediates"
              ]}
            />
            <h3>Indicative Purity Targets</h3>
            <BulletList
              items={[
                "≥95% Fe₂O₃ for pigment and industrial use",
                "Controlled particle size and phase composition"
              ]}
            />
          </article>
          <article className="card">
            <h3>Applications</h3>
            <BulletList
              items={[
                "Construction materials",
                "Pigments and coatings",
                "Water treatment coagulants",
                "Feedstock for metallurgical or chemical industries"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <h3>Value Proposition</h3>
          <BulletList
            items={[
              "Converts the largest mass fraction of red mud into revenue-generating products",
              "Eliminates long-term storage liability",
              "Enables zero-waste plant operation"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="advantage-title">
        <div className="section-heading">
          <p className="kicker">MULTI-OUTPUT ADVANTAGE</p>
          <h2 id="advantage-title">Why This Platform Is Economically and Strategically Different</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Single-Metal Projects</h3>
            <BulletList
              items={[
                "Dependent on one volatile commodity",
                "High market risk",
                "Often uneconomic at scale"
              ]}
            />
          </article>
          <article className="card">
            <h3>Enervoxa Multi-Output Model</h3>
            <BulletList
              items={[
                "25+ recoverable elements",
                "Diversified revenue streams",
                "Resilient economics across commodity cycles",
                "All outputs derived from the same feedstock, same plant"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <p>This architecture enables:</p>
          <BulletList
            items={[
              "Commercial scalability",
              "Long-term contractability",
              "Strategic relevance beyond price arbitrage"
            ]}
          />
        </article>
        <figure className="card diagram outputs-diagram" aria-label="Multi-output architecture comparison">
          <svg viewBox="0 0 960 280" role="img" aria-label="Single-metal versus multi-output model comparison">
            <rect x="20" y="30" width="420" height="220" rx="12" />
            <rect x="520" y="30" width="420" height="220" rx="12" />
            <text x="230" y="70" textAnchor="middle">Single-Metal Projects</text>
            <text x="730" y="70" textAnchor="middle">Enervoxa Multi-Output Model</text>
            <text x="230" y="120" textAnchor="middle">One Commodity</text>
            <text x="230" y="150" textAnchor="middle">High Volatility Exposure</text>
            <text x="230" y="180" textAnchor="middle">Scale Constraints</text>
            <text x="730" y="110" textAnchor="middle">25+ Recoverable Elements</text>
            <text x="730" y="140" textAnchor="middle">Diversified Revenue Streams</text>
            <text x="730" y="170" textAnchor="middle">Resilient Commodity-Cycle Economics</text>
            <text x="730" y="200" textAnchor="middle">Single Feedstock, Single Plant</text>
          </svg>
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="spec-title">
        <div className="section-heading">
          <p className="kicker">SPECIFICATION-DRIVEN PRODUCTION</p>
          <h2 id="spec-title">Designed for End-Use Markets, Not Just Recovery</h2>
        </div>
        <article className="card">
          <p>Each output stream is engineered with downstream qualification in mind:</p>
          <BulletList
            items={[
              "Aerospace and defense alloy standards",
              "EV and renewable-energy material specifications",
              "Industrial chemical and pigment requirements"
            ]}
          />
        </article>
        <article className="card">
          <p>Final purification and finishing steps can be:</p>
          <BulletList
            items={[
              "Integrated on-site",
              "Partnered with downstream processors",
              "Tailored to customer-specific offtake agreements"
            ]}
          />
        </article>
        <figure className="inline-media card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/35/Titanium_dioxide_powder.jpg"
            alt="Industrial mineral powder material"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="positioning-section reveal" aria-labelledby="outputs-close-title">
        <p className="kicker">STRATEGIC POSITIONING (Page Close)</p>
        <h2 id="outputs-close-title">These are not by-products.</h2>
        <p>
          They are specification-driven critical materials recovered from waste—at scale, with
          permanence.
        </p>
      </section>
    </div>
  );
}
