import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

const globalProblem = [
  "4+ billion tonnes of red mud accumulated worldwide",
  "~150 million tonnes generated annually",
  "Stored in engineered ponds with perpetual monitoring, remediation, and land-use risk",
  "No scalable utilization pathway historically available"
];

const indiaProblem = [
  "~9 million tonnes generated every year",
  "<3% utilization nationally, despite CPCB targets of 25%",
  "~75% of India’s red mud concentrated in Odisha alone",
  "Legacy stockpiles near population centers, rivers, and industrial corridors"
];

const implications = [
  "Red mud contains iron oxides, titanium dioxide, alumina, and trace-to-recoverable rare earths",
  "India and allied economies remain dependent on external REE supply chains",
  "Existing ponds represent both environmental risk and lost strategic value"
];

const coreCharacteristics = [
  "Cold hydrometallurgical process (<100 °C)",
  "Zero harmful emissions",
  "Designed for direct integration at refinery or pond sites",
  "Capable of extracting 25+ elements from a single feedstock",
  "Operates on legacy stockpiles and ongoing production"
];

const commercialProof = [
  "Operational calibration facility",
  "Demonstrated continuous extraction performance",
  "Engineering completed for 350,000 t/year modular units",
  "Scalable to 1 million t/year plants"
];

const criticalOutputs = [
  "Scandium (aerospace alloys, solid oxide fuel cells, advanced aluminum)",
  "Rare Earth Elements (REEs) including yttrium, dysprosium, gadolinium",
  "Titanium-bearing compounds",
  "Iron oxides (industrial pigments, coagulants)"
];

const byProducts = [
  "Aluminosilicate materials",
  "Precipitated calcium carbonate",
  "Amorphous silica"
];

const strategicAlignment = {
  security: [
    "Reduces reliance on geopolitically concentrated REE supply chains",
    "Creates domestic and allied-nation feedstock independence"
  ],
  environment: [
    "Permanent reduction of alkaline residue inventories",
    "Converts perpetual liabilities into finite assets",
    "Enables alumina producers to move toward zero-residue operations"
  ],
  circularity: [
    "Aligns with circular-economy mandates",
    "Turns waste management cost centers into revenue-generating infrastructure"
  ]
};

const deployment = {
  architecture: ["350,000 t/year processing units", "Phased scale-up to 1M t/year+ facilities"],
  integration: [
    "On-site at existing refineries",
    "Adjacent to legacy pond infrastructure",
    "Independent regional processing hubs"
  ],
  commercial: [
    "Build-Own-Operate",
    "Joint ventures with alumina producers",
    "Technology licensing with revenue participation"
  ]
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

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-panel reveal" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">HERO — Turning an Industrial Liability into a Strategic Mineral Asset</p>
          <h1 id="hero-title">From Bauxite Residue to Critical Minerals</h1>
          <p className="lead">
            A patented, commercially proven platform for extracting rare earths and strategic
            metals from red mud—at industrial scale, with no mining.
          </p>
          <p>
            Red mud—bauxite residue from alumina refining—is one of the largest unmanaged
            industrial waste streams on earth. Our technology converts this long-term
            environmental liability into a domestic source of critical minerals, including
            Scandium and Rare Earth Elements (REEs), while permanently reducing legacy stockpiles.
          </p>
          <div>
            <p className="list-title">Outcome:</p>
            <BulletList
              items={[
                "Strategic minerals recovered",
                "Storage liabilities eliminated",
                "No new mining, no tailings expansion",
                "Immediate pathway to commercial deployment"
              ]}
            />
          </div>
        </div>
        <figure className="hero-media">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Ajka_alumina_plant_red_mud_2010.jpg"
            alt="Industrial red mud reservoir and alumina infrastructure"
            loading="eager"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="problem-title">
        <div className="section-heading">
          <p className="kicker">THE PROBLEM — A Global Stockpile with Strategic Consequences</p>
          <h2 id="problem-title">The World’s Largest Untapped Critical Minerals Resource — Stored as Waste</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Globally</h3>
            <BulletList items={globalProblem} />
          </article>
          <article className="card">
            <h3>India</h3>
            <BulletList items={indiaProblem} />
          </article>
        </div>
        <article className="card">
          <h3>Strategic Implications</h3>
          <BulletList items={implications} />
          <p>This is not a waste problem.</p>
          <p>It is a missed critical-minerals opportunity at national scale.</p>
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="solution-title">
        <div className="section-heading">
          <p className="kicker">THE SOLUTION — Patented Low-Temperature Extraction at Commercial Scale</p>
          <h2 id="solution-title">A Granted, Defensible Technology — Not a Pilot Concept</h2>
        </div>
        <p>
          Our process is protected under a granted U.S. patent for red mud processing and
          rare-earth extraction, developed specifically to operate on highly alkaline bauxite
          residue.
        </p>
        <div className="grid-2">
          <article className="card">
            <h3>Core Characteristics</h3>
            <BulletList items={coreCharacteristics} />
          </article>
          <article className="card">
            <h3>Commercial Proof</h3>
            <BulletList items={commercialProof} />
          </article>
        </div>
        <figure className="inline-media card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/60/Aluminium_oxide_refinery.jpg"
            alt="Industrial processing infrastructure"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="outputs-title">
        <div className="section-heading">
          <p className="kicker">OUTPUTS — Strategic Materials Recovered from Waste</p>
          <h2 id="outputs-title">A Portfolio of High-Value, Strategic Outputs</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Critical &amp; Strategic Materials</h3>
            <BulletList items={criticalOutputs} />
          </article>
          <article className="card">
            <h3>Industrial By-Products</h3>
            <BulletList items={byProducts} />
          </article>
        </div>
        <article className="card">
          <h3>Key Advantage</h3>
          <p>Red mud is already mined, crushed, and surface-stored.</p>
          <p>
            There is no drilling, no blasting, no beneficiation, and no tailings creation.
          </p>
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="strategic-title">
        <div className="section-heading">
          <p className="kicker">WHY THIS MATTERS — Beyond Economics</p>
          <h2 id="strategic-title">Strategic Alignment at National Scale</h2>
        </div>
        <div className="grid-3">
          <article className="card">
            <h3>Critical Minerals Security</h3>
            <BulletList items={strategicAlignment.security} />
          </article>
          <article className="card">
            <h3>Environmental Resolution</h3>
            <BulletList items={strategicAlignment.environment} />
          </article>
          <article className="card">
            <h3>Industrial Circularity</h3>
            <BulletList items={strategicAlignment.circularity} />
          </article>
        </div>
      </section>

      <section className="content-section reveal" aria-labelledby="deployment-title">
        <div className="section-heading">
          <p className="kicker">DEPLOYMENT MODEL — Built for Scale, Not Experimentation</p>
          <h2 id="deployment-title">Modular Plant Architecture</h2>
        </div>
        <div className="grid-3">
          <article className="card">
            <h3>Modular Plant Architecture</h3>
            <BulletList items={deployment.architecture} />
          </article>
          <article className="card">
            <h3>Integration Options</h3>
            <BulletList items={deployment.integration} />
          </article>
          <article className="card">
            <h3>Commercial Structures</h3>
            <BulletList items={deployment.commercial} />
          </article>
        </div>
        <figure className="card diagram" aria-label="Deployment model diagram">
          <svg viewBox="0 0 920 220" role="img" aria-label="Flow of modular deployment options">
            <rect x="20" y="60" width="220" height="100" rx="10" />
            <rect x="350" y="20" width="220" height="80" rx="10" />
            <rect x="350" y="120" width="220" height="80" rx="10" />
            <rect x="680" y="60" width="220" height="100" rx="10" />
            <text x="130" y="115" textAnchor="middle">Feedstock</text>
            <text x="460" y="70" textAnchor="middle">350,000 t/year Units</text>
            <text x="460" y="170" textAnchor="middle">1M t/year+ Scale</text>
            <text x="790" y="115" textAnchor="middle">Commercial Structures</text>
            <path d="M240 110H350" />
            <path d="M570 60H680" />
            <path d="M570 160H680" />
          </svg>
        </figure>
      </section>

      <section className="positioning-section reveal" aria-labelledby="positioning-title">
        <p className="kicker">POSITIONING STATEMENT (Footer-Ready)</p>
        <h2 id="positioning-title">We do not mine critical minerals.</h2>
        <p>We unlock them—responsibly—from the world’s largest industrial waste stream.</p>
      </section>
    </div>
  );
}
