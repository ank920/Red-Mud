import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/ui/List";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { Globe, MapPin, AlertTriangle, Settings, FlaskConical, Target, Layers, Coins, ShieldCheck, Leaf, Recycle, Factory, Network, Building2 } from "lucide-react";

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

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero
        title="From Bauxite Residue to Critical Minerals"
        lead="A patented, commercially proven platform for extracting rare earths and strategic metals from red mud—at industrial scale, with no mining."
        imageSrc="/home/From Bauxite Residue to Critical Minerals.jpg"
        imageAlt="From Bauxite Residue to Critical Minerals"
      >
        <p>
          Red mud—bauxite residue from alumina refining—is one of the largest unmanaged
          industrial waste streams on earth. Our technology converts this long-term
          environmental liability into a domestic source of critical minerals, including
          Scandium and Rare Earth Elements (REEs), while permanently reducing legacy stockpiles.
        </p>
        <div>
          <p className="list-title">Outcome:</p>
          <List
            items={[
              "Strategic minerals recovered",
              "Storage liabilities eliminated",
              "No new mining, no tailings expansion",
              "Immediate pathway to commercial deployment"
            ]}
          />
        </div>
      </Hero>

      {/* Primary CTAs */}
      <div className="positioning-buttons" style={{ marginTop: '2rem' }}>
        <a href="/technology" className="btn btn-primary">
          Explore Technology
        </a>
        <a href="/contact" className="btn btn-primary">
          Discuss Partnership Opportunities
        </a>
      </div>

      <Section
        id="problem-title"
        kicker="THE PROBLEM"
        title="A Global Stockpile with Strategic Consequences"
      >
        <div className="grid-2">
          <Card title="Globally" icon={Globe}>
            <List items={globalProblem} />
          </Card>
          <Card title="India" icon={MapPin}>
            <List items={indiaProblem} />
          </Card>
        </div>
        <div className="grid-2 mt-6">
          <figure className="image-card">
            <img
              src="/home/THE PROBLEM.jpg"
              alt="The Problem - Red Mud Storage"
              loading="lazy"
            />
          </figure>
          <figure className="image-card">
            <img
              src="/home/THE PROBLEM2.jpg"
              alt="The Problem - Environmental Impact"
              loading="lazy"
            />
          </figure>
        </div>
        <Card title="Strategic Implications" className="mt-6" icon={AlertTriangle}>
          <List items={implications} />
          <p>This is not a waste problem.</p>
          <p>It is a missed critical-minerals opportunity at national scale.</p>
        </Card>
      </Section>

      <Section
        id="solution-title"
        kicker="THE SOLUTION"
        title="Patented Low-Temperature Extraction at Commercial Scale"
      >
        <p className="mb-6 text-dim">
          Our process is protected under a granted U.S. patent for red mud processing and
          rare-earth extraction, developed specifically to operate on highly alkaline bauxite
          residue.
        </p>
        <div className="grid-2">
          <Card title="Core Characteristics" icon={Settings}>
            <List items={coreCharacteristics} />
          </Card>
          <Card title="Commercial Proof" icon={Target}>
            <List items={commercialProof} />
          </Card>
        </div>
        <figure className="image-card mt-6">
          <img
            src="/home/THE SOLUTION2.jpg"
            alt="The Solution - Processing Technology"
            loading="lazy"
          />
        </figure>
        <div className="grid-2 mt-6">
          <figure className="image-card">
            <img
              src="/home/From Bauxite Residue to Critical Minerals2.jpg"
              alt="Bauxite Residue Processing"
              loading="lazy"
            />
          </figure>
          <figure className="image-card">
            <img
              src="/home/From Bauxite Residue to Critical Minerals3.jpg"
              alt="Critical Minerals Extraction"
              loading="lazy"
            />
          </figure>
        </div>
      </Section>

      <Section
        id="outputs-title"
        kicker="OUTPUTS"
        title="Strategic Materials Recovered from Waste"
      >
        <div className="grid-2">
          <Card title="Critical & Strategic Materials" icon={Layers}>
            <List items={criticalOutputs} />
          </Card>
          <Card title="Industrial By-Products" icon={Factory}>
            <List items={byProducts} />
          </Card>
        </div>
        <div className="grid-2 mt-6">
          <figure className="image-card" style={{ height: '250px' }}>
            <img
              src="/home/OUTPUTS.jpg"
              alt="Strategic Outputs"
              loading="lazy"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </figure>
          <figure className="image-card" style={{ height: '250px' }}>
            <img
              src="/home/OUTPUTS2.avif"
              alt="Critical Materials Output"
              loading="lazy"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </figure>
        </div>
        <Card title="Key Advantage" className="mt-6" icon={ShieldCheck}>
          <p>Red mud is already mined, crushed, and surface-stored.</p>
          <p>
            There is no drilling, no blasting, no beneficiation, and no tailings creation.
          </p>
        </Card>
      </Section>

      <Section
        id="strategic-title"
        kicker="WHY THIS MATTERS"
        title="Beyond Economics"
      >
        <div className="grid-3">
          <Card
            title="Critical Minerals Security"
            icon={ShieldCheck}
            imageSrc="/home/Critical Minerals Security.jpg"
            imageAlt="Strategic mineral stockpile"
          >
            <List items={strategicAlignment.security} />
          </Card>
          <Card
            title="Environmental Resolution"
            icon={Leaf}
            imageSrc="/home/Environmental Resolution.png"
            imageAlt="Environmental restoration"
          >
            <List items={strategicAlignment.environment} />
          </Card>
          <Card
            title="Industrial Circularity"
            icon={Recycle}
            imageSrc="/home/Industrial Circularity.webp"
            imageAlt="Circular economy loop"
          >
            <List items={strategicAlignment.circularity} />
          </Card>
        </div>
      </Section>

      <Section
        id="deployment-title"
        kicker="DEPLOYMENT MODEL"
        title="Built for Scale, Not Experimentation"
      >
        <div className="grid-3">
          <Card title="Modular Plant Architecture" icon={Building2}>
            <List items={deployment.architecture} />
          </Card>
          <Card title="Integration Options" icon={Network}>
            <List items={deployment.integration} />
          </Card>
          <Card title="Commercial Structures" icon={Coins}>
            <List items={deployment.commercial} />
          </Card>
        </div>
        <div className="deployment-flow mt-6">
          <div className="flow-step start">
            <span className="step-label">Feedstock</span>
          </div>
          <div className="flow-arrow"></div>
          <div className="flow-group">
            <div className="flow-step">350,000 t/year Units</div>
            <div className="flow-conn"></div>
            <div className="flow-step">1M t/year+ Scale</div>
          </div>
          <div className="flow-arrow"></div>
          <div className="flow-step end">
            <span className="step-label">Commercial Structures</span>
          </div>
        </div>
      </Section>


      <PositioningSection
        title="We do not mine critical minerals."
        description="We unlock them—responsibly—from the world's largest industrial waste stream."
        buttons={[
          { label: "Explore Technology", href: "/technology" },
          { label: "View Outputs", href: "/outputs" },
          { label: "Discuss Partnership Opportunities", href: "/contact" }
        ]}
      />
    </div>
  );
}
