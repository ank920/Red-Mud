import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology"
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

export default function TechnologyPage() {
  return (
    <div className="home-page technology-page">
      <section className="hero-panel reveal" aria-labelledby="technology-hero-title">
        <div className="hero-copy">
          <p className="kicker">TECHNOLOGY &amp; PROCESS</p>
          <h1 id="technology-hero-title">
            A Modular, Zero-Waste Platform for Critical Minerals Recovery from Red Mud
          </h1>
          <p className="lead">
            Our technology is a patented, low-temperature hydrometallurgical platform engineered
            specifically for bauxite residue. Unlike laboratory-scale or single-element
            approaches, the system is designed for continuous industrial operation, capable of
            processing both legacy stockpiles and live refinery residue streams.
          </p>
          <p>
            At its core is a four-stage proprietary extraction architecture that enables selective
            recovery of high-value elements while converting the remaining matrix into stable,
            reusable industrial materials.
          </p>
        </div>
        <figure className="hero-media">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Alumina_refinery_pinjarra.jpg"
            alt="Alumina refinery process infrastructure"
            loading="eager"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="process-overview-title">
        <div className="section-heading">
          <p className="kicker">PROCESS OVERVIEW</p>
          <h2 id="process-overview-title">Four Stages. One Integrated System. No Residual Waste.</h2>
        </div>
        <figure className="card diagram technology-diagram" aria-label="Four-stage process overview">
          <svg viewBox="0 0 1200 220" role="img" aria-label="Stage 1 to Stage 4 integrated process flow">
            <rect x="20" y="50" width="260" height="120" rx="12" />
            <rect x="320" y="50" width="260" height="120" rx="12" />
            <rect x="620" y="50" width="260" height="120" rx="12" />
            <rect x="920" y="50" width="260" height="120" rx="12" />
            <text x="150" y="105" textAnchor="middle">Stage 1</text>
            <text x="150" y="130" textAnchor="middle">Conditioning</text>
            <text x="450" y="105" textAnchor="middle">Stage 2</text>
            <text x="450" y="130" textAnchor="middle">Selective Leaching</text>
            <text x="750" y="105" textAnchor="middle">Stage 3</text>
            <text x="750" y="130" textAnchor="middle">Fractionated Recovery</text>
            <text x="1050" y="105" textAnchor="middle">Stage 4</text>
            <text x="1050" y="130" textAnchor="middle">Zero-Waste Finishing</text>
            <path d="M280 110H320" />
            <path d="M580 110H620" />
            <path d="M880 110H920" />
          </svg>
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="stage-1-title">
        <div className="section-heading">
          <p className="kicker">STAGE 1 — FEEDSTOCK CONDITIONING &amp; MATRIX STABILIZATION</p>
          <h2 id="stage-1-title">Objective:</h2>
        </div>
        <p>Prepare highly alkaline, mineral-complex red mud for controlled, selective extraction.</p>
        <article className="card">
          <h3>What Happens</h3>
          <BulletList
            items={[
              "Red mud is mechanically homogenized and conditioned",
              "Particle dispersion and surface activation improve downstream selectivity",
              "Residual alkalinity is stabilized to enable controlled chemical interaction"
            ]}
          />
        </article>
        <article className="card">
          <h3>Why This Matters</h3>
          <p>Red mud is not a uniform material. Its composition varies by:</p>
          <BulletList
            items={[
              "Bauxite source",
              "Bayer process parameters",
              "Age and storage method"
            ]}
          />
          <p>
            This conditioning stage ensures process consistency across geographies, allowing the
            same plant design to operate on Indian, Australian, Middle Eastern, or North American
            residues without fundamental redesign.
          </p>
        </article>
        <article className="card">
          <h3>Key Characteristics</h3>
          <BulletList
            items={[
              "No thermal treatment",
              "No sintering or roasting",
              "Operates at ambient to low temperature",
              "Closed-loop reagent management"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="stage-2-title">
        <div className="section-heading">
          <p className="kicker">STAGE 2 — SELECTIVE DISSOLUTION &amp; TARGETED LEACHING</p>
          <h2 id="stage-2-title">Objective:</h2>
        </div>
        <p>Mobilize critical and strategic elements without dissolving the full bulk matrix.</p>
        <div className="grid-2">
          <article className="card">
            <h3>What Happens</h3>
            <BulletList
              items={[
                "Proprietary leaching chemistry selectively dissolves target metals",
                "Rare earth elements, scandium, titanium-bearing phases, and iron compounds are mobilized in controlled fractions",
                "Non-target silicate and aluminosilicate phases remain largely inert"
              ]}
            />
          </article>
          <article className="card">
            <h3>Why This Matters</h3>
            <p>Conventional approaches attempt bulk dissolution, driving:</p>
            <BulletList
              items={[
                "High reagent consumption",
                "Complex downstream separation",
                "Poor economics at scale"
              ]}
            />
            <p>This stage is element-selective by design, enabling:</p>
            <BulletList
              items={[
                "Multi-element recovery from a single feed",
                "Lower operating costs",
                "Reduced secondary waste streams"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <h3>Operating Profile</h3>
          <BulletList
            items={[
              "<100 °C",
              "Atmospheric pressure",
              "No hazardous gaseous emissions",
              "Continuous-flow reactors (not batch tanks)"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="stage-3-title">
        <div className="section-heading">
          <p className="kicker">STAGE 3 — FRACTIONATED SEPARATION &amp; METAL RECOVERY</p>
          <h2 id="stage-3-title">Objective:</h2>
        </div>
        <p>
          Individually recover high-purity mineral streams suitable for downstream refining or
          direct industrial use.
        </p>
        <div className="grid-2">
          <article className="card">
            <h3>What Happens</h3>
            <BulletList
              items={[
                "Dissolved metals are separated via staged precipitation, ion-exchange, and controlled crystallization",
                "Each element group is recovered as a distinct product stream, not a mixed concentrate",
                "Recovery sequencing is optimized based on feed chemistry and market priorities"
              ]}
            />
          </article>
          <article className="card">
            <h3>Recovered Outputs Include</h3>
            <BulletList
              items={[
                "Scandium compounds",
                "Rare Earth Element fractions (yttrium, dysprosium, gadolinium, others)",
                "Iron oxides",
                "Titanium-bearing intermediates"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <h3>Why This Matters</h3>
          <p>
            Producing separate, specification-grade outputs avoids the need for third-party
            cracking or offshore refining—critical for supply-chain security and value capture.
          </p>
        </article>
        <figure className="inline-media card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Laboratory_reactors.jpg"
            alt="Industrial reactor and separation equipment"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="stage-4-title">
        <div className="section-heading">
          <p className="kicker">STAGE 4 — RESIDUAL MATRIX CONVERSION &amp; ZERO-WASTE FINISHING</p>
          <h2 id="stage-4-title">Objective:</h2>
        </div>
        <p>Eliminate tailings and convert all remaining solids into stable, usable materials.</p>
        <article className="card">
          <h3>What Happens</h3>
          <BulletList
            items={[
              "Remaining solids are neutralized and mineralogically stabilized",
              "Converted into aluminosilicate materials, calcium carbonate derivatives, and inert construction-grade products",
              "Process water and reagents are recovered and recycled internally"
            ]}
          />
        </article>
        <article className="card">
          <h3>Result</h3>
          <BulletList
            items={[
              "No new waste stream",
              "No material returned to ponds",
              "No requirement for new residue storage capacity"
            ]}
          />
          <p>This is not waste minimization.</p>
          <p>It is full material conversion.</p>
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="zero-waste-title">
        <div className="section-heading">
          <p className="kicker">ZERO-WASTE MODULAR PLANT DESIGN</p>
          <h2 id="zero-waste-title">Engineered for Deployment, Not Experimentation</h2>
        </div>
        <div className="grid-3">
          <article className="card">
            <h3>Modular Architecture</h3>
            <BulletList
              items={[
                "Standardized processing blocks",
                "Typical module: ~350,000 tonnes per year",
                "Linear scale-up to 1+ million tonnes per year"
              ]}
            />
          </article>
          <article className="card">
            <h3>Environmental Profile</h3>
            <BulletList
              items={[
                "Low-temperature operation",
                "No combustion steps",
                "No stack emissions",
                "Closed-loop water system",
                "Minimal incremental power demand"
              ]}
            />
          </article>
          <article className="card">
            <h3>Operational Advantages</h3>
            <BulletList
              items={[
                "Faster permitting versus mining or smelting",
                "Predictable capex per module",
                "High availability with industrial uptime design",
                "Compatible with existing refinery utilities"
              ]}
            />
          </article>
        </div>
      </section>

      <section className="content-section reveal" aria-labelledby="integration-title">
        <div className="section-heading">
          <p className="kicker">PLUG-AND-PLAY INTEGRATION FOR ALUMINA PRODUCERS</p>
          <h2 id="integration-title">Designed to Sit Beside Refineries — Not Disrupt Them</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Integration Model</h3>
            <ul className="home-list">
              <li>Installed adjacent to existing residue handling or storage areas</li>
              <li>
                Accepts:
                <ul className="nested-list">
                  <li>Fresh red mud streams</li>
                  <li>Dewatered residue</li>
                  <li>Legacy dry or wet pond material</li>
                </ul>
              </li>
            </ul>
          </article>
          <article className="card">
            <h3>What the Refinery Does Not Need to Change</h3>
            <BulletList
              items={[
                "Bayer digestion process",
                "Alumina precipitation",
                "Smelting operations",
                "Existing residue generation systems"
              ]}
            />
          </article>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>What the Refinery Gains</h3>
            <BulletList
              items={[
                "Permanent reduction of red-mud inventory",
                "Monetization of a legacy liability",
                "Compliance headroom as environmental norms tighten",
                "Participation in critical-minerals value chains"
              ]}
            />
          </article>
          <article className="card">
            <h3>Typical Integration Footprint</h3>
            <BulletList
              items={[
                "Modular, brownfield-compatible",
                "No interference with core refinery operations",
                "EPC-friendly layouts with phased commissioning"
              ]}
            />
          </article>
        </div>
      </section>

      <section className="content-section reveal" aria-labelledby="scales-title">
        <div className="section-heading">
          <p className="kicker">WHY THIS TECHNOLOGY SCALES</p>
          <h2 id="scales-title">Key Differentiators</h2>
        </div>
        <article className="card">
          <BulletList
            items={[
              "Granted patent protection covering process architecture",
              "Proven continuous operation at calibration scale",
              "Multi-element economics (not single-metal dependency)",
              "Feedstock already mined, crushed, and surface-stored",
              "No geological risk, no exploration risk"
            ]}
          />
          <p>
            This platform was built for industrial deployment under real-world constraints—not
            laboratory optimization.
          </p>
        </article>
      </section>

      <section className="positioning-section reveal" aria-labelledby="technical-close-title">
        <p className="kicker">POSITIONING STATEMENT (Technical Close)</p>
        <h2 id="technical-close-title">This is not a waste-treatment system.</h2>
        <p>
          It is a critical-minerals recovery platform engineered for scale, security, and
          permanence.
        </p>
      </section>
    </div>
  );
}
