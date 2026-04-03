import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { FeatureSplit } from "@/components/ui/FeatureSplit";
import { PositioningSection } from "@/components/ui/PositioningSection";

export const metadata: Metadata = {
  title: "Technology"
};

export default function TechnologyPage() {
  return (
    <div className="home-page technology-page">
      <Hero
        kicker="TECHNOLOGY"
        title="Turning an Industrial Liability into a Strategic Mineral Asset"
        imageSrc="/TECHNOLOGY/hero.jpg"
        imageAlt="Rare Earth Processing Technology"
        id="technology-hero-title"
      >
        <p>
          Rare earth—bauxite residue from alumina refining—is one of the largest unmanaged
          industrial waste streams globally. Our platform converts this long-term environmental
          liability into a domestic source of critical minerals, including Scandium and Rare Earth
          Elements (REEs), while permanently reducing legacy stockpiles.
        </p>
        <p>
          This is not theoretical extraction. It is a commercially proven, modular platform
          engineered for deployment at existing refineries and legacy pond sites.
        </p>
      </Hero>

      <FeatureSplit
        kicker="ADVANCED RECOVERY"
        title="Advanced Soda–Alkali Multi-Metal Recovery from Rare Earth"
        imageSrc="/TECHNOLOGY/Turning India’s Largest Industrial Liability into a Strategic Mineral Advantage.jpg"
        imageAlt="Multi-Metal Recovery from Rare Earth"
        reverse={false}
      >
        <p>
          Rare earth is one of the largest-volume industrial residues generated globally. For every 1 ton of alumina produced through the Bayer process, approximately 1.2–1.5 tons of rare earth are generated.
        </p>
        <p>
          Rare Earth has developed a clean, environmentally friendly technology for the integrated processing of this red mud with the production of target valuable products—iron-containing pigments and coagulants, aluminosilicate materials, amorphous silicon dioxide, precipitated calcium carbonate, titanium, zirconium, scandium, and other rare-earth elements.
        </p>
        <p>Despite being previously treated as waste, red mud contains significant concentrations of:</p>
        <ul>
          <li>Residual Aluminum (Al)</li>
          <li>Iron (Fe) (which can be enriched up to ~60%)</li>
          <li>Titanium (Ti)</li>
          <li>Zirconium (Zr)</li>
          <li>Scandium (Sc)</li>
          <li>Rare Earth Elements (REEs) including: Yttrium (Y), Dysprosium (Dy), Gadolinium (Gd)</li>
          <li>Silicon, calcium, and alkaline compounds</li>
        </ul>
      </FeatureSplit>

      <FeatureSplit
        kicker="PROCESS ARCHITECTURE"
        title="Integrated Process Architecture"
        imageSrc="/TECHNOLOGY/108233019-1764243888072-gettyimages-2235868370-ESTONIA-NARVA-RARE-EARTH-PLANT-OPEN.jpeg"
        imageAlt="Integrated Process Architecture"
        reverse={true}
      >
        <p>
          Our technology, based on patented soda–alkali processing architecture, transforms this residue into a structured multi-stage mineral recovery system operating at:
        </p>
        <ul>
          <li>Atmospheric pressure</li>
          <li>Moderate temperatures (70–100°C)</li>
          <li>Continuous-flow configuration</li>
          <li>Closed-loop reagent recovery</li>
        </ul>
        <p>The system combines two principal chemistries:</p>
        <ol className="pl-6">
          <li><strong>Alkaline Aluminum Extraction (NaOH-Based):</strong> Two-stage caustic leaching under controlled thermal conditions.</li>
          <li><strong>Carbonate Leaching of Strategic Metals (Na₂CO₃ / NaHCO₃ System):</strong> Selective mobilization of titanium, zirconium, scandium, and rare earth elements.</li>
        </ol>
        <p>These are integrated with:</p>
        <ul>
          <li>CO₂-assisted precipitation</li>
          <li>Cold plasma and electromagnetic activation</li>
          <li>Sequential fractionation</li>
          <li>Iron enrichment</li>
          <li>Reagent regeneration loops</li>
        </ul>
      </FeatureSplit>

      <FeatureSplit
        kicker="STAGE 1"
        title="Pulp Extraction & Feedstock Conditioning"
        imageSrc="/TECHNOLOGY/STAGE 1.webp"
        imageAlt="Stage 1 Conditioning"
        reverse={false}
      >
        <p>
          <strong>Objective:</strong> Convert stored rare earth into a stable, process-controlled pulp suitable for selective extraction.
        </p>
        <div className="highlight-text">
          This stage ensures process uniformity across Indian, Australian, Middle Eastern, and North American residues.
        </div>
        <p><strong>Process Details:</strong></p>
        <ul>
          <li>Pulp extracted via dredging from wet storage</li>
          <li>Mechanical homogenization</li>
          <li>Filtration using centrifuge or filter press</li>
          <li>Liquid-to-solid ratio ~5:1</li>
          <li>Filtrate returned to mud storage</li>
        </ul>
        <p>No change to refinery digestion or alumina precipitation systems is required.</p>
      </FeatureSplit>

      <FeatureSplit
        kicker="STAGE 2"
        title="Two-Stage Aluminum Recovery"
        imageSrc="/TECHNOLOGY/TWO-STAGE ALUMINUM RECOVERY.jpg"
        imageAlt="Two-Stage Aluminum Recovery"
        reverse={true}
      >
        <p>
          <strong>Objective:</strong> Extract residual aluminum while enriching the solid phase in iron and critical metals.
        </p>
        <p><strong>Operating Conditions:</strong></p>
        <ul>
          <li>NaOH concentration ~4M</li>
          <li>Temperature ~100°C</li>
          <li>Atmospheric pressure</li>
          <li>Continuous flow operation</li>
        </ul>
        <p><strong>Step Sequence:</strong></p>
        <ol className="pl-6">
          <li><strong>First-Stage NaOH Leaching:</strong> Aluminum dissolves into alkaline solution.</li>
          <li><strong>Filtration:</strong> Separation of slurry into filtrate and solid residue.</li>
          <li><strong>CO₂-Assisted Precipitation (~75°C):</strong> Formation of Sodium hydroaluminocarbonate and Aluminum hydroxide.</li>
          <li><strong>Second-Stage NaOH Leaching:</strong> Remaining aluminum recovered from solid matrix.</li>
          <li><strong>Second CO₂ Precipitation</strong></li>
        </ol>
        <div className="highlight-text">
          Extracts up to ~40% aluminum from rare earth and enhances iron concentration in residual solid. Uses industrial exhaust CO₂ streams.
        </div>
      </FeatureSplit>

      <FeatureSplit
        kicker="STAGE 3"
        title="Carbonate Leaching of Titanium, Zirconium, Scandium & REEs"
        imageSrc="/TECHNOLOGY/CARBONATE LEACHING OF TITANIUM.jpg"
        imageAlt="Carbonate Leaching"
        reverse={false}
      >
        <p>
          <strong>Objective:</strong> Selective mobilization of strategic and high-value metals.
        </p>
        <p><strong>Core Chemistry:</strong></p>
        <ul>
          <li>Na₂CO₃ + NaHCO₃ solution (~2M)</li>
          <li>Temperature ~70°C</li>
          <li>CO₂ pre-saturation</li>
          <li>Liquid-solid ratio ~5:1</li>
          <li>Atmospheric pressure</li>
        </ul>
        <p>
          <strong>Activation Methods:</strong> Cold plasma water activation, Electric pulse action (EPA), and Electromagnetic activation. These significantly accelerate leaching kinetics and improve extraction.
        </p>
        <div className="highlight-text">
          Developed Extraction Potential: Up to ~60% Scandium, ~50% Zirconium, and ~50% Rare Earth Elements (including Y, Dy, Gd).
        </div>
      </FeatureSplit>

      <FeatureSplit
        kicker="STAGE 4A"
        title="Fractionated Metal Recovery: Titanium (TiO₂)"
        imageSrc="/TECHNOLOGY/TITANIUM RECOVERY.jpg"
        imageAlt="Titanium Recovery"
        reverse={true}
      >
        <p>
          The dissolved metals are not recovered as a mixed concentrate. They are separated sequentially through controlled precipitation.
        </p>
        <ul>
          <li>Precipitation at ~75°C</li>
          <li>NaOH-assisted precipitation</li>
          <li>Coagulant addition</li>
          <li>Ultrasound enhancement</li>
        </ul>
        <div className="highlight-text">
          Output: Titanium dioxide (TiO₂) concentrate suitable for pigment, alloy, and industrial use.
        </div>
      </FeatureSplit>

      <FeatureSplit
        kicker="STAGE 4B"
        title="Zirconium, Scandium & REE Recovery"
        imageSrc="/TECHNOLOGY/Fractionated Separation & Metal Recovery.jpg"
        imageAlt="Zirconium, Scandium and REE Recovery"
        reverse={false}
      >
        <p><strong>Conditions:</strong></p>
        <ul>
          <li>Heated to ~100°C</li>
          <li>NaOH ~4M</li>
          <li>pH ~14</li>
          <li>Aluminum-based coagulant</li>
          <li>Zr:Al ratio ~1:10</li>
        </ul>
        <p><strong>Outputs include:</strong></p>
        <ul>
          <li>Zirconium oxide (ZrO₂)</li>
          <li>Scandium oxide (Sc₂O₃)</li>
          <li>Rare earth oxide fractions (Yttrium oxide, Dysprosium compounds, Gadolinium compounds)</li>
        </ul>
        <div className="highlight-text">
          These oxides are suitable for aerospace ceramics, permanent magnet systems, defense applications, advanced electronics, and energy transition technologies.
        </div>
      </FeatureSplit>

      <FeatureSplit
        kicker="FINAL SOLID MANAGEMENT"
        title="Iron Enrichment"
        imageSrc="/TECHNOLOGY/IRON ENRICHMENT & FINAL SOLID MANAGEMENT.jpg"
        imageAlt="Iron Enrichment"
        reverse={true}
      >
        <p>
          After sequential extraction, the solid phase is enriched to ~60% Fe. It is then neutralized to pH 7–9.
        </p>
        <p>This makes it suitable for:</p>
        <ul>
          <li>Iron pigments</li>
          <li>Pellets</li>
          <li>Coagulants</li>
          <li>Smelting feedstock</li>
        </ul>
        <div className="highlight-text">
          The remaining aluminosilicate matrix is mineralogically stabilized.
        </div>
      </FeatureSplit>

      <FeatureSplit
        kicker="SUSTAINABILITY"
        title="Reagent Recovery & CO₂ Integration"
        imageSrc="/TECHNOLOGY/REAGENT RECOVERY & CO₂ INTEGRATION.jpg"
        imageAlt="Reagent Recovery & CO₂ Integration"
        reverse={false}
      >
        <p>The system incorporates:</p>
        <ul>
          <li>NaOH regeneration loop</li>
          <li>Na₂CO₃ regeneration</li>
          <li>CO₂ storage and reinjection system</li>
          <li>Exhaust gas utilization</li>
        </ul>
        <div className="highlight-text">
          This significantly reduces fresh chemical input, waste generation, carbon intensity, and operating expenditure.
        </div>
      </FeatureSplit>

      <FeatureSplit
        kicker="STRATEGIC RARE EARTHS"
        title="Scandium (Sc)"
        imageSrc="/TECHNOLOGY/SCANDIUM.jpg"
        imageAlt="Scandium"
        reverse={true}
      >
        <p>
          Scandium is a critical metal successfully mobilized and recovered within our continuous flow process. High-purity scandium oxide finds fundamental applications in:
        </p>
        <ul>
          <li>Advanced aerospace alloys</li>
          <li>Defense and military electronics</li>
          <li>Solid oxide fuel cells</li>
          <li>High-intensity lighting</li>
        </ul>
      </FeatureSplit>

      <FeatureSplit
        kicker="STRATEGIC RARE EARTHS"
        title="Yttrium (Y)"
        imageSrc="/TECHNOLOGY/Yttrium.png"
        imageAlt="Yttrium"
        reverse={false}
      >
        <p>Yttrium plays a critical position in high-technology manufacturing. Our fractionated recovery isolates Yttrium oxide which is heavily used in:</p>
        <ul>
          <li>Laser systems</li>
          <li>Aerospace alloys</li>
          <li>Advanced ceramics</li>
        </ul>
      </FeatureSplit>

      <FeatureSplit
        kicker="STRATEGIC RARE EARTHS"
        title="Dysprosium (Dy)"
        imageSrc="/TECHNOLOGY/Dysprosium.jpg"
        imageAlt="Dysprosium"
        reverse={true}
      >
        <p>Crucial for enabling clean energy technologies, Dysprosium compounds derived from rare earth processing operate as critical inputs for:</p>
        <ul>
          <li>High-temperature permanent magnets</li>
          <li>EV (Electric Vehicle) motors</li>
          <li>Wind turbines</li>
        </ul>
      </FeatureSplit>

      <FeatureSplit
        kicker="STRATEGIC RARE EARTHS"
        title="Gadolinium (Gd)"
        imageSrc="/TECHNOLOGY/Gadolinium.jpg"
        imageAlt="Gadolinium"
        reverse={false}
      >
        <p>Serving specific, highly technological roles across industries, the isolated Gadolinium is a vital component used in:</p>
        <ul>
          <li>MRI contrast agents</li>
          <li>Nuclear neutron absorption</li>
          <li>Medical and advanced electronic systems</li>
        </ul>
      </FeatureSplit>

      <FeatureSplit
        kicker="THE ADVANTAGE"
        title="Industrial Deployment Advantages"
        imageSrc="/TECHNOLOGY/Modular-construction-on-chemical-process-system.jpg"
        imageAlt="Industrial Deployment"
        reverse={true}
      >
        <ul>
          <li>Atmospheric-pressure chemistry</li>
          <li>Moderate temperature (70–100°C)</li>
          <li>Continuous-flow design</li>
          <li>Brownfield refinery integration</li>
          <li>Multi-element economics</li>
          <li>No exploration risk</li>
          <li>Feedstock already mined and surface-stored</li>
        </ul>
        <div className="highlight-text">
          A commercially proven, scalable solution that converts existing liabilities into strategic resources.
        </div>
      </FeatureSplit>

      <PositioningSection
        title="This is not a waste-treatment system."
        description="It is a critical-minerals recovery platform engineered for scale, security, and permanence."
        buttons={[
          { label: "View Outputs", href: "/outputs" },
          { label: "Partnership Models", href: "/partnerships" }
        ]}
        id="technical-close-title"
      />
    </div>
  );
}
