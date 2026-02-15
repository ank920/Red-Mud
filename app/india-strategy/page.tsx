import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/ui/List";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { StatCard } from "@/components/ui/StatCard";
import { AlertTriangle, Map, Layers, Lightbulb, Target, Gem, ScrollText, ShieldCheck, TrendingUp, Leaf, Settings, Landmark, Scale, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "India Strategy"
};

export default function IndiaStrategyPage() {
  return (
    <div className="home-page india-page">
      <Hero
        kicker="INDIA STRATEGY & POLICY"
        title="Turning India's Largest Industrial Liability into a Strategic Mineral Advantage"
        imageSrc="/INDIA STRATEGY & POLICY/HERO SECTION.jpg"
        imageAlt="India Strategy for Red Mud Processing"
        id="india-hero-title"
      >
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
      </Hero>

      <Section
        id="reality-title"
        kicker="INDIA'S RED MUD REALITY"
        title="Scale, Concentration, and Risk"
      >
        <Card icon={AlertTriangle}>
          <List
            items={[
              "~9 million tonnes/year of red mud generated nationally",
              "<3% utilization rate, far below the 25% target articulated by regulators",
              "~8.7 million tonnes/year net accumulation into engineered storage ponds"
            ]}
          />
        </Card>

        {/* Key Statistics */}
        <div className="grid-2 mt-6">
          <StatCard
            value="9M t/year"
            label="Annual Red Mud Generation"
            description="India's total red mud production"
            icon={Factory}
          />
          <StatCard
            value="<3%"
            label="Current Utilization Rate"
            description="Far below 25% regulatory target"
            icon={TrendingUp}
          />
        </div>
        <div className="grid-2 mt-6">
          <Card title="Geographic Concentration" icon={Map}>
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
          </Card>
          <Card title="Legacy Stockpiles" icon={Layers}>
            <List
              items={[
                "Tens of millions of tonnes already stored",
                "Limited public disclosure of closing stock and pond life",
                "Aging containment infrastructure elevates environmental, social, and compliance risk"
              ]}
            />
          </Card>
        </div>
        <Card title="Key Insight:" className="mt-6" icon={Lightbulb}>
          <p>India’s red-mud challenge is not future-tense.</p>
          <p>It is already accumulated, geographically concentrated, and policy-relevant today.</p>
        </Card>
        <div className="grid-2 mt-6">
          <Card title="Priority States" icon={Target}>
            <List items={["Odisha", "Jharkhand", "Uttar Pradesh"]} />
          </Card>
          <Card title="Major Clusters" icon={Factory}>
            <List
              items={[
                "NALCO Damanjodi",
                "Vedanta Lanjigarh",
                "Hindalco Utkal",
                "Hindalco Muri",
                "Hindalco Renukoot"
              ]}
            />
          </Card>
        </div>
      </Section>

      <Section
        id="potential-title"
        kicker="STRATEGIC MINERAL POTENTIAL"
        title="Hiding in Plain Sight"
      >
        <Card icon={Gem}>
          <List
            items={[
              "Iron oxides: ~35–45%",
              "Alumina: ~15–20%",
              "Titanium dioxide: ~10–15%",
              "Rare earth elements: trace-to-recoverable concentrations",
              "Scandium: low ppm, but economically significant at scale"
            ]}
          />
        </Card>
        <Card className="mt-6">
          <p>At national throughput levels, this translates into:</p>
          <List
            items={[
              "Meaningful scandium recovery potential for aerospace alloys and SOFCs",
              "REE streams relevant to EVs, wind turbines, electronics, and defense",
              "Titanium-bearing materials for energy and advanced manufacturing"
            ]}
          />
          <p>This is a strategic materials opportunity without new mining.</p>
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/INDIA STRATEGY & POLICY/Strategic Mineral Potential.jpg"
            alt="Strategic Mineral Potential in Red Mud"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="policy-title"
        kicker="POLICY ALIGNMENT"
        title="Built for India's National Missions"
      >
        <Card icon={ScrollText}>
          <p>
            India has formally recognized rare earths, scandium, and titanium as strategic
            materials essential for:
          </p>
          <List
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
        </Card>
        <Card title="2. Environmental Remediation & CPCB Objectives" className="mt-6" icon={ShieldCheck}>
          <p>The Central Pollution Control Board (CPCB) has highlighted:</p>
          <List
            items={[
              "Low utilization rates",
              "Rising cumulative stockpiles",
              "Long-term containment risk"
            ]}
          />
          <p>Alignment:</p>
          <List
            items={[
              "Permanent reduction of legacy ponds",
              "No creation of secondary waste",
              "Conversion of regulatory liability into managed industrial output"
            ]}
          />
        </Card>
        <Card title="3. Circular Economy & Atmanirbhar Bharat" className="mt-6" icon={TrendingUp}>
          <p>India’s industrial policy emphasizes:</p>
          <List
            items={[
              "Circular use of materials",
              "Import substitution",
              "Domestic value addition"
            ]}
          />
          <p>Alignment:</p>
          <List
            items={[
              "Red mud becomes a secondary mineral resource",
              "Multi-output recovery improves economic resilience",
              "Supports indigenous alloy, battery, and clean-energy supply chains"
            ]}
          />
        </Card>
        <Card title="4. ESG, Land Use & Social License" className="mt-6" icon={Leaf}>
          <List
            items={[
              "Red mud ponds occupy scarce industrial land",
              "Long-term storage imposes intergenerational risk"
            ]}
          />
          <p>Alignment:</p>
          <List
            items={[
              "Shrinks waste-storage footprint",
              "Reduces long-term environmental liabilities",
              "Strengthens community and regulatory confidence"
            ]}
          />
        </Card>
        <figure className="image-card image-card-tall mt-6">
          <img
            src="/INDIA STRATEGY & POLICY/Policy Alignment.webp"
            alt="Policy Alignment Framework"
            loading="lazy"
          />
        </figure>
        <figure className="image-card image-card-tall mt-6">
          <img
            src="/INDIA STRATEGY & POLICY/Circular Economy.png"
            alt="Circular Economy Model"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="deployment-title"
        kicker="DEPLOYMENT STRATEGY FOR INDIA"
        title="Target Integration Model"
      >
        <Card icon={Settings}>
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
        </Card>
        <div className="grid-2 mt-6">
          <Card title="Modular Scale-Up" icon={Scale}>
            <List
              items={[
                "Initial modules aligned to 350,000 t/year processing blocks",
                "Phased expansion to 1+ million t/year facilities"
              ]}
            />
          </Card>
          <Card title="Priority States" icon={Target}>
            <List items={["Odisha", "Jharkhand", "Uttar Pradesh"]} />
          </Card>
        </div>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/INDIA STRATEGY & POLICY/Deployment Strategy for India.jpg"
            alt="Deployment Strategy for India"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="institutions-title"
        kicker="ROLE OF GOVERNMENT & INSTITUTIONS"
        title="This platform is designed to work with public policy."
      >
        <Card title="Potential Engagement Pathways" icon={Landmark}>
          <List
            items={[
              "Public-Private Partnerships with PSUs",
              "Viability-gap or remediation-linked incentives",
              "Inclusion under national critical-minerals programs",
              "Multilateral climate and circular-economy financing"
            ]}
          />
        </Card>
        <Card title="Why This Matters" className="mt-6">
          <p>India does not need to choose between:</p>
          <p>Environmental remediation</p>
          <p>or</p>
          <p>Strategic mineral independence</p>
          <p>This technology delivers both simultaneously.</p>
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/INDIA STRATEGY & POLICY/Role of Government & Institutions.jpg"
            alt="Role of Government and Institutions"
            loading="lazy"
          />
        </figure>
      </Section>


      <PositioningSection
        title="India already owns one of the world's largest critical-minerals resources."
        description="It is stored as red mud. The question is no longer whether to remediate it—but whether to do so in a way that strengthens national capability."
        buttons={[
          { label: "Technology Details", href: "/technology" },
          { label: "Partnership Models", href: "/partnerships" }
        ]}
        id="india-close-title"
      />
    </div>
  );
}
