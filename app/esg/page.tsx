import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/ui/List";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { Leaf, Droplet, CloudOff, Recycle, Users, BarChart3, Target, ShieldCheck, TrendingUp, MapPin, Building2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "ESG"
};

export default function EsgPage() {
  return (
    <div className="home-page esg-page">
      <Hero
        kicker="ESG & CIRCULAR ECONOMY"
        title="Converting a Permanent Environmental Liability into Measurable Environmental Value"
        imageSrc="/ESG & CIRCULAR ECONOMY/Converting a Permanent Environmental Liability into Measurable Environmental Value.jpg"
        imageAlt="Converting Environmental Liability into Value"
        id="esg-hero-title"
      >
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
      </Hero>

      <Section
        id="core-title"
        kicker="WASTE-TO-VALUE"
        title="The Core ESG Principle"
      >
        <Card icon={Leaf}>
          <p>
            Globally, more than 4 billion tonnes of red mud sit in engineered ponds, with
            ~150 million tonnes added annually. Each tonne represents:
          </p>
          <List
            items={[
              "Long-term containment risk",
              "Ongoing monitoring and maintenance cost",
              "Lost land utility",
              "Potential environmental and social exposure"
            ]}
          />
          <p>Our technology permanently removes red mud from storage by:</p>
          <List
            items={[
              "Recovering critical minerals",
              "Converting the remaining matrix into stable industrial materials",
              "Returning no material to ponds"
            ]}
          />
          <p>Result:</p>
          <p>Zero tailings. Zero net accumulation.</p>
        </Card>
      </Section>

      <Section
        id="pillars-title"
        kicker="ENVIRONMENTAL IMPACT PILLARS"
        title="1. LAND RECLAMATION & RISK ELIMINATION"
      >
        <Card title="Impact Mechanism" icon={MapPin}>
          <List
            items={[
              "Each tonne processed permanently reduces stored residue volume",
              "Legacy ponds are progressively emptied and stabilized",
              "No requirement for new pond construction or expansion"
            ]}
          />
          <p className="font-semibold mt-4 mb-2">Measured KPIs</p>
          <List
            items={[
              "1 million tonnes/year processed = 1 million tonnes/year liability eliminated",
              "Progressive reduction of long-term pond management horizons",
              "Release of land previously locked for waste storage"
            ]}
          />
          <p>This materially lowers:</p>
          <List
            items={[
              "Tailings dam failure risk",
              "Long-term groundwater contamination exposure",
              "Intergenerational environmental liability"
            ]}
          />
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/ESG & CIRCULAR ECONOMY/LAND RECLAMATION & RISK ELIMINATION.webp"
            alt="Land Reclamation and Risk Elimination"
            loading="lazy"
          />
        </figure>

        <Card title="2. WATER RECOVERY & CLOSED-LOOP OPERATION" className="mt-6" icon={Droplet}>
          <p>Red mud contains significant entrained process water and alkalinity.</p>
          <p className="font-semibold mt-4 mb-2">Our Approach</p>
          <List
            items={[
              "Integrated water recovery at multiple process stages",
              "Closed-loop reuse within the plant",
              "No continuous liquid discharge to the environment"
            ]}
          />
          <p className="font-semibold mt-4 mb-2">Measured KPIs</p>
          <List
            items={[
              ">90% process water recycled internally",
              "Reduced freshwater draw for adjacent refineries",
              "Lower hydraulic pressure on residue ponds"
            ]}
          />
          <p>This directly supports:</p>
          <List
            items={[
              "Water-stressed industrial regions",
              "Zero-liquid-discharge (ZLD) compliance pathways",
              "Long-term water security for alumina operations"
            ]}
          />
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/ESG & CIRCULAR ECONOMY/WATER RECOVERY.jpg"
            alt="Water Recovery and Closed-Loop Operation"
            loading="lazy"
          />
        </figure>

        <Card title="3. CARBON & ENERGY FOOTPRINT AVOIDANCE" className="mt-6" icon={CloudOff}>
          <p className="font-semibold mb-2">Process Advantage</p>
          <List
            items={[
              "Operates below 100 °C",
              "No combustion",
              "No roasting or smelting",
              "No mining, hauling, or beneficiation"
            ]}
          />
          <p className="font-semibold mt-4 mb-2">Avoided Emissions (Relative Basis)</p>
          <p>Avoids emissions associated with:</p>
          <ul className="home-list">
            <li>New REE mining</li>
            <li>High-temperature processing (600–1000 °C)</li>
            <li>Long-distance concentrate transport</li>
          </ul>
          <p>
            Eliminates ongoing emissions tied to red-mud pond maintenance and expansion
          </p>
          <p className="font-semibold mt-4 mb-2">Indicative KPI (Conservative)</p>
          <List
            items={[
              "Significant CO₂-equivalent avoidance per tonne compared to conventional mining-to-refining routes",
              "Enables low-carbon supply chains for EVs, aerospace, and clean energy"
            ]}
          />
          <p>Final carbon accounting structured per site-specific LCA during deployment.</p>
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/ESG & CIRCULAR ECONOMY/CARBON & ENERGY FOOTPRINT AVOIDANCE.jpg"
            alt="Carbon and Energy Footprint Avoidance"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="circular-title"
        kicker="CIRCULAR ECONOMY IN PRACTICE"
        title="Not in Theory"
      >
        <Card icon={Recycle}>
          <p>
            Unlike partial-use pathways (cement blending, bricks, road fill), this platform:
          </p>
          <List
            items={[
              "Utilizes 100% of incoming material",
              "Generates multiple product streams",
              "Produces no residual waste"
            ]}
          />
          <p className="font-semibold mt-4 mb-2">Recovered Outputs</p>
          <List
            items={[
              "Scandium",
              "Rare earth elements",
              "Titanium-bearing materials",
              "Iron oxides",
              "Aluminosilicates and stable mineral products"
            ]}
          />
          <p>This aligns directly with:</p>
          <List
            items={[
              "Circular economy mandates",
              "Extended producer responsibility logic",
              "Industrial symbiosis models"
            ]}
          />
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/ESG & CIRCULAR ECONOMY/CIRCULAR ECONOMY IN PRACTICE.jpg"
            alt="Circular Economy in Practice"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="social-title"
        kicker="SOCIAL & GOVERNANCE DIMENSIONS"
        title="Community & Regulatory Confidence"
      >
        <Card icon={Users}>
          <List
            items={[
              "Reduced long-term environmental risk near communities",
              "Shrinking footprint of hazardous alkaline material",
              "Improved transparency through measurable remediation rates"
            ]}
          />
          <p className="font-semibold mt-4 mb-2">Governance & Reporting</p>
          <p>Physical KPIs, not estimates:</p>
          <List
            items={[
              "Tonnes processed",
              "Tonnes remediated",
              "Water recycled",
              "Land area released"
            ]}
          />
          <p>Suitable for integration into:</p>
          <List
            items={[
              "ESG disclosures",
              "Sustainability reports",
              "Lender and DFI monitoring frameworks"
            ]}
          />
        </Card>
        <figure className="image-card image-card-tall mt-6">
          <img
            src="/ESG & CIRCULAR ECONOMY/SOCIAL & GOVERNANCE DIMENSIONS.png"
            alt="Social and Governance Dimensions"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="kpi-title"
        kicker="ESG PERFORMANCE"
        title="Sample KPI Framework"
      >
        <Card icon={BarChart3}>
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
        </Card>
        <div className="deployment-flow esg-diagram mt-6">
          <div className="flow-step start">
            <div className="flow-content">
              <span className="step-label">Stored Red Mud</span>
              <span className="step-detail">Long-term Liability</span>
            </div>
          </div>
          <div className="flow-arrow"></div>
          <div className="flow-step">
            <div className="flow-content">
              <span className="step-label">Integrated Recovery</span>
              <span className="step-detail">+ Closed-loop Water</span>
            </div>
          </div>
          <div className="flow-arrow"></div>
          <div className="flow-step end">
            <div className="flow-content">
              <span className="step-label">Material Outputs</span>
              <span className="step-detail">+ ESG KPIs</span>
            </div>
          </div>
        </div>
      </Section>


      <PositioningSection
        title="This is not waste management."
        description="It is permanent environmental risk removal—monetized through critical materials."
        buttons={[
          { label: "India Strategy", href: "/india-strategy" },
          { label: "Partnership Models", href: "/partnerships" }
        ]}
        id="esg-close-title"
      />
    </div>
  );
}
