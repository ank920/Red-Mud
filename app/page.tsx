import type { Metadata } from "next";
import { VantaHero } from "@/components/ui/VantaHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/ui/List";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { FeatureSplit } from "@/components/ui/FeatureSplit";
import { Container } from "@/components/ui/Container";
import { Globe, MapPin, AlertTriangle, Settings, FlaskConical, Target, Layers, Coins, ShieldCheck, Leaf, Recycle, Factory, Network, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Home"
};


const globalProblem = [
  "4+ billion tonnes of rare earth accumulated worldwide",
  "~150 million tonnes generated annually",
  "Stored in engineered ponds with perpetual monitoring, remediation, and land-use risk",
  "No scalable utilization pathway historically available"
];

const indiaProblem = [
  "~9 million tonnes generated every year",
  "<3% utilization nationally, despite CPCB targets of 25%",
  "~75% of India’s rare earth concentrated in Odisha alone",
  "Legacy stockpiles near population centers, rivers, and industrial corridors"
];

const implications = [
  "Rare earth contains iron oxides, titanium dioxide, alumina, and trace-to-recoverable rare earths",
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
      <VantaHero
        title="From Bauxite Residue to Critical Minerals"
        lead="A patented, commercially proven platform for extracting rare earths and strategic metals from rare earth—at industrial scale, with no mining."
        primaryCta={{ label: "Explore Technology", href: "/technology" }}
        secondaryCta={{ label: "Discuss Partnership", href: "/contact" }}
      >
        <p>
          Rare earth—bauxite residue from alumina refining—is one of the largest unmanaged
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
      </VantaHero>

      {/* Stats Band */}
      <div className="stats-band">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-item-value">4B+</span>
              <span className="stat-item-label">Tonnes accumulated worldwide</span>
            </div>
            <div className="stat-item">
              <span className="stat-item-value">150M</span>
              <span className="stat-item-label">Tonnes generated annually</span>
            </div>
            <div className="stat-item">
              <span className="stat-item-value">25+</span>
              <span className="stat-item-label">Elements extractable per feedstock</span>
            </div>
            <div className="stat-item">
              <span className="stat-item-value">0</span>
              <span className="stat-item-label">New mining required</span>
            </div>
          </div>
        </div>
      </div>

      <FeatureSplit
        id="problem-title"
        kicker="THE PROBLEM"
        title="A Global Stockpile with Strategic Consequences"
        imageSrc="/home/THE PROBLEM.jpg"
        imageAlt="The Problem - Rare Earth Storage"
      >
        <p className="text-dim">
          Global aluminum production reaches 50 million tons per year. The feedstock for this—bauxite, 
          during metallurgical processing (Bayer and sintering) into alumina, and then by electrolysis 
          into aluminum, generates massive waste. On every 1 ton of alumina produced, 0.8 to 1.2 tons of 
          red sludge is formed.
        </p>
        <div className="grid-2 mt-4">
          <Card title="Globally" icon={Globe}>
            <List items={globalProblem} />
          </Card>
          <Card title="India" icon={MapPin}>
            <List items={indiaProblem} />
          </Card>
        </div>
        <Card title="Strategic Implications" className="mt-4" icon={AlertTriangle}>
          <List items={implications} />
          <p>This is not a waste problem.</p>
          <p>It is a missed critical-minerals opportunity at national scale.</p>
        </Card>
      </FeatureSplit>

      <FeatureSplit
        id="solution-title"
        kicker="THE SOLUTION"
        title="Patented Low-Temperature Extraction at Commercial Scale"
        imageSrc="/home/THE SOLUTION2.jpg"
        imageAlt="The Solution - Processing Technology"
        reverse
      >
        <p className="text-dim">
          In terms of material composition, red mud can be considered an independent complex deposit of 
          non-metallic and ore metals. One main advantage over conventional mineral deposits is that it is 
          on the surface and does not require the cost of mining and milling of rock. Reserves of red mud 
          are significant, and they are constantly increasing globally.
        </p>
        <p className="text-dim mt-2">
          Our process is protected under a granted U.S. patent for rare earth processing and
          rare-earth extraction, developed specifically to operate on highly alkaline bauxite
          residue.
        </p>
        <div className="grid-2 mt-4">
          <Card title="Core Characteristics" icon={Settings}>
            <List items={coreCharacteristics} />
          </Card>
          <Card title="Commercial Proof" icon={Target}>
            <List items={commercialProof} />
          </Card>
        </div>
      </FeatureSplit>

      <FeatureSplit
        id="strategic-independence"
        kicker="STRATEGIC INDEPENDENCE"
        title="Securing North American Critical Minerals"
        imageSrc="/home/Critical Minerals Security.jpg"
        imageAlt="Strategic Independence"
      >
        <p className="text-dim">
          In Canada and the US, there is currently no significant industrial capacity for mining REEs, 
          which is the main factor hindering the restoration of the rare earth industry in North America. 
          Rare Earth provides the competitive edge to make these regions independent producers of REEs.
        </p>
        <p className="text-dim mt-2">
          We offer the first and only clean, environmentally friendly technology for processing red mud, 
          making the whole spectra of rare earth elements available without new mining operations.
        </p>
      </FeatureSplit>

      <FeatureSplit
        id="outputs-title"
        kicker="OUTPUTS"
        title="Strategic Materials Recovered from Waste"
        imageSrc="/home/OUTPUTS.jpg"
        imageAlt="Strategic Outputs"
      >
        <div className="grid-2">
          <Card title="Critical & Strategic Materials" icon={Layers}>
            <List items={criticalOutputs} />
          </Card>
          <Card title="Industrial By-Products" icon={Factory}>
            <List items={byProducts} />
          </Card>
        </div>
        <Card title="Key Advantage" className="mt-6" icon={ShieldCheck}>
          <p>Rare earth is already mined, crushed, and surface-stored.</p>
          <p>
            There is no drilling, no blasting, no beneficiation, and no tailings creation.
          </p>
        </Card>
      </FeatureSplit>

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
