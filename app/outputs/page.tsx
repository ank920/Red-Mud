import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/ui/List";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { Droplet, Zap, Sparkles, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Outputs"
};

export default function OutputsPage() {
  return (
    <div className="home-page outputs-page">
      <Hero
        kicker="CRITICAL MINERALS & OUTPUTS"
        title="Strategic Materials Recovered from Red Mud — At Industrial Scale"
        imageSrc="/output/Strategic Materials Recovered from Red Mud.png"
        imageAlt="Strategic Materials Recovered from Red Mud"
        id="outputs-hero-title"
      >
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
      </Hero>

      <Section
        id="iron-title"
        kicker="IRON OXIDES"
        title="Industrial-Grade Products with Immediate Offtake Potential"
      >
        <div className="grid-2">
          <Card title="Recovered Form" icon={Droplet}>
            <List
              items={[
                "Iron oxide pigments",
                "Iron-based coagulants and industrial intermediates"
              ]}
            />
            <p className="font-semibold mt-4 mb-2">Indicative Purity Targets</p>
            <List
              items={[
                "≥95% Fe₂O₃ for pigment and industrial use",
                "Controlled particle size and phase composition"
              ]}
            />
          </Card>
          <Card title="Applications">
            <List
              items={[
                "Construction materials",
                "Pigments and coatings",
                "Water treatment coagulants",
                "Feedstock for metallurgical or chemical industries"
              ]}
            />
          </Card>
        </div>
        <Card title="Value Proposition" className="mt-6">
          <List
            items={[
              "Converts the largest mass fraction of red mud into revenue-generating products",
              "Eliminates long-term storage liability",
              "Enables zero-waste plant operation"
            ]}
          />
        </Card>
        <figure className="image-card image-card-tall mt-6">
          <img
            src="/output/IRON OXIDES.png"
            alt="Iron Oxides Recovery and Applications"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="titanium-title"
        kicker="TITANIUM-BEARING MATERIALS"
        title="Structural and Functional Materials for Energy & Mobility"
      >
        <div className="grid-2">
          <Card title="Recovered Form" icon={Zap}>
            <List
              items={[
                "Titanium-rich intermediates",
                "Convertible to titanium dioxide (TiO₂) or downstream titanium compounds"
              ]}
            />
            <p className="font-semibold mt-4 mb-2">Indicative Purity Targets</p>
            <List
              items={[
                "90–98% TiO₂ equivalent, depending on downstream specification",
                "Suitable for pigment, battery, and advanced materials processing"
              ]}
            />
          </Card>
          <Card title="Market Relevance">
            <p>Titanium compounds are critical for:</p>
            <List
              items={[
                "Battery technologies and energy storage systems",
                "Aerospace structural components",
                "Corrosion-resistant industrial equipment",
                "Clean-energy manufacturing (solar, hydrogen)"
              ]}
            />
          </Card>
        </div>
        <Card title="Value Proposition" className="mt-6">
          <List
            items={[
              "Extracted without high-temperature chlorination or sulfate routes",
              "Lower energy and environmental footprint",
              "Complements REE recovery within the same processing train"
            ]}
          />
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/output/TITANIUM-BEARING MATERIALS.jpg"
            alt="Titanium-Bearing Materials"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="ree-title"
        kicker="RARE EARTH ELEMENTS (REEs)"
        title="Magnet, Electronics, and Clean-Energy Criticals"
      >
        <div className="grid-2">
          <Card title="Recovered REE Spectrum" icon={Sparkles}>
            <List
              items={[
                "Yttrium (Y)",
                "Dysprosium (Dy)",
                "Gadolinium (Gd)",
                "Neodymium (Nd)*",
                "Praseodymium (Pr)*",
                "(*depending on feedstock composition)"
              ]}
            />
          </Card>
          <Card title="Recovered Form">
            <List
              items={[
                "Individual REE oxide fractions",
                "Mixed REE concentrates as intermediate products where appropriate"
              ]}
            />
            <p className="font-semibold mt-4 mb-2">Indicative Purity Targets</p>
            <List
              items={[
                "95–99% REO (separated oxide streams)",
                "Mixed concentrates suitable for downstream cracking and separation"
              ]}
            />
          </Card>
        </div>
        <Card title="Market Alignment" className="mt-6">
          <p>REEs recovered through this platform directly serve:</p>
          <List
            items={[
              "Permanent magnets for EV motors and wind turbines",
              "Advanced electronics and telecommunications",
              "Defense systems and guidance technologies",
              "Medical imaging and specialty optics"
            ]}
          />
        </Card>
        <Card title="Value Proposition" className="mt-6">
          <List
            items={[
              "Feedstock already on surface; no mining or beneficiation risk",
              "Multi-REE recovery improves project economics versus single-element plays",
              "Supports non-Chinese REE supply diversification"
            ]}
          />
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/output/RARE EARTH ELEMENTS (REEs).jpg"
            alt="Rare Earth Elements Recovery"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="scandium-title"
        kicker="SCANDIUM"
        title="Ultra-High-Value Enabler for Aerospace and Advanced Energy Systems"
      >
        <div className="grid-2">
          <Card title="Recovered Form" icon={Gem}>
            <List
              items={[
                "Scandium oxide (Sc₂O₃) intermediate",
                "Convertible to master alloys or high-purity oxide grades"
              ]}
            />
          </Card>
          <Card title="Indicative Purity Targets">
            <List
              items={[
                "≥99.0% Sc₂O₃ (industrial / alloy grade)",
                "Pathway to 99.9%+ for specialty aerospace and SOFC applications"
              ]}
            />
          </Card>
        </div>
        <Card title="Why Scandium Matters" className="mt-6">
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
        </Card>
        <Card title="Value Proposition" className="mt-6">
          <List
            items={[
              "No primary scandium mines required",
              "Recovered from already-mined industrial residue",
              "Enables domestic scandium supply chains for aerospace, defense, and hydrogen infrastructure"
            ]}
          />
        </Card>
        <figure className="image-card image-card-tall mt-6">
          <img
            src="/output/SCANDIUM SECTION.png"
            alt="Scandium Recovery Process and Applications"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="advantage-title"
        kicker="MULTI-OUTPUT ADVANTAGE"
        title="Why This Platform Is Economically and Strategically Different"
      >
        <div className="grid-2">
          <Card title="Single-Metal Projects">
            <List
              items={[
                "Dependent on one volatile commodity",
                "High market risk",
                "Often uneconomic at scale"
              ]}
            />
          </Card>
          <Card title="Enervoxa Multi-Output Model">
            <List
              items={[
                "25+ recoverable elements",
                "Diversified revenue streams",
                "Resilient economics across commodity cycles",
                "All outputs derived from the same feedstock, same plant"
              ]}
            />
          </Card>
        </div>
        <Card className="mt-6">
          <p>This architecture enables:</p>
          <List
            items={[
              "Commercial scalability",
              "Long-term contractability",
              "Strategic relevance beyond price arbitrage"
            ]}
          />
        </Card>
        <figure className="image-card image-card-full mt-6">
          <img
            src="/output/MULTI-OUTPUT ADVANTAGE.jpg"
            alt="Multi-Output Advantage Comparison"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="spec-title"
        kicker="SPECIFICATION-DRIVEN PRODUCTION"
        title="Designed for End-Use Markets, Not Just Recovery"
      >
        <Card>
          <p>Each output stream is engineered with downstream qualification in mind:</p>
          <List
            items={[
              "Aerospace and defense alloy standards",
              "EV and renewable-energy material specifications",
              "Industrial chemical and pigment requirements"
            ]}
          />
        </Card>
        <Card className="mt-6">
          <p>Final purification and finishing steps can be:</p>
          <List
            items={[
              "Integrated on-site",
              "Partnered with downstream processors",
              "Tailored to customer-specific offtake agreements"
            ]}
          />
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/output/last.jpg"
            alt="Specification-Driven Production"
            loading="lazy"
          />
        </figure>
      </Section>


      <PositioningSection
        title="These are not by-products."
        description="They are specification-driven critical materials recovered from waste—at scale, with permanence."
        buttons={[
          { label: "Technology Details", href: "/technology" },
          { label: "Partnership Models", href: "/partnerships" }
        ]}
        id="outputs-close-title"
      />
    </div>
  );
}
