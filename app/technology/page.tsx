"use client";

import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { AdvancedRecoveryDashboard } from "@/components/ui/AdvancedRecoveryDashboard";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import {
  Beaker,
  Layers,
  Zap,
  Gem,
  CheckCircle2,
  Recycle,
  TrendingUp,
  ChevronRight,
  Flame,
  FlaskConical,
  Magnet,
  Boxes,
} from "lucide-react";

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

      {/* â”€â”€ Section 1: Advanced Recovery Dashboard â”€â”€ */}
      <AdvancedRecoveryDashboard />

      {/* â”€â”€ Section 2: Integrated Process Architecture â”€â”€ */}
      <section className="tech-dashboard-section" id="process-architecture">
        <div className="container">
          <motion.div
            className="tech-dash-inner"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            {/* Top split: image left, text right */}
            <motion.div variants={fadeUp} className="tech-split-card">
              <div className="tech-split-image-col">
                <img
                  src={"/TECHNOLOGY/108233019-1764243888072-gettyimages-2235868370-ESTONIA-NARVA-RARE-EARTH-PLANT-OPEN.jpeg"}
                  alt="Integrated Process Architecture"
                  className="tech-split-img"
                />
              </div>
              <div className="tech-split-content">
                <p className="image-styled-kicker">PROCESS ARCHITECTURE</p>
                <h2 className="tech-card-title">Integrated Process Architecture</h2>
                <p className="tech-card-desc">
                  Our technology, based on patented soda–alkali processing architecture, transforms this residue into a structured multi-stage mineral recovery system operating at atmospheric pressure, moderate temperatures (70–100°C), continuous-flow configuration, and with closed-loop reagent recovery.
                </p>
                <div className="tech-chemistry-grid">
                  <div className="tech-chem-card">
                    <div className="tech-chem-icon badge-blue"><Beaker size={20} /></div>
                    <div>
                      <h4>Alkaline Aluminum Extraction</h4>
                      <p>NaOH-Based: Two-stage caustic leaching under controlled thermal conditions.</p>
                    </div>
                  </div>
                  <div className="tech-chem-card">
                    <div className="tech-chem-icon badge-teal"><FlaskConical size={20} /></div>
                    <div>
                      <h4>Carbonate Leaching of Strategic Metals</h4>
                      <p>Na₂CO₃ / NaHCO₃ System: Selective mobilization of Ti, Zr, Sc, and REEs.</p>
                    </div>
                  </div>
                </div>
                <div className="tech-tag-row">
                  {["CO₂-assisted precipitation", "Cold plasma activation", "Sequential fractionation", "Iron enrichment", "Reagent regeneration"].map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Section 3: Extraction Stages 1–4 â”€â”€ */}
      <section className="tech-stages-section" id="extraction-stages">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-stages-header">
              <p className="image-styled-kicker">EXTRACTION PROCESS</p>
              <h2 className="tech-stages-heading">Stage-by-Stage Mineral Recovery</h2>
            </motion.div>

            <div className="tech-stages-grid">
              {/* Stage 1 */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src={"/TECHNOLOGY/STAGE 1.jpg"} alt="Stage 1" loading="lazy" />
                  <div className="tech-stage-badge">01</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">STAGE 1</p>
                  <h3>Pulp Extraction & Feedstock Conditioning</h3>
                  <p className="tech-stage-objective"><strong>Objective:</strong> Convert stored rare earth into a stable, process-controlled pulp suitable for selective extraction.</p>
                  <ul className="tech-stage-list">
                    <li>Pulp extracted via dredging from wet storage</li>
                    <li>Mechanical homogenization</li>
                    <li>Filtration using centrifuge or filter press</li>
                    <li>Liquid-to-solid ratio ~5:1</li>
                  </ul>
                  <div className="tech-stage-highlight">Ensures process uniformity across Indian, Australian, Middle Eastern, and North American residues.</div>
                </div>
              </motion.div>

              {/* Stage 2 */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src={"/TECHNOLOGY/TWO-STAGE ALUMINUM RECOVERY.jpg"} alt="Stage 2" loading="lazy" />
                  <div className="tech-stage-badge">02</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">STAGE 2</p>
                  <h3>Two-Stage Aluminum Recovery</h3>
                  <p className="tech-stage-objective"><strong>Objective:</strong> Extract residual aluminum while enriching the solid phase in iron and critical metals.</p>
                  <ul className="tech-stage-list">
                    <li>NaOH concentration ~4M at ~100°C</li>
                    <li>First-Stage NaOH Leaching â†’ Filtration</li>
                    <li>CO₂-Assisted Precipitation (~75°C)</li>
                    <li>Second-Stage NaOH Leaching</li>
                  </ul>
                  <div className="tech-stage-highlight">Extracts up to ~40% aluminum. Uses industrial exhaust CO₂ streams.</div>
                </div>
              </motion.div>

              {/* Stage 3 */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src={"/TECHNOLOGY/CARBONATE LEACHING OF TITANIUM.jpg"} alt="Stage 3" loading="lazy" />
                  <div className="tech-stage-badge">03</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">STAGE 3</p>
                  <h3>Carbonate Leaching of Ti, Zr, Sc & REEs</h3>
                  <p className="tech-stage-objective"><strong>Objective:</strong> Selective mobilization of strategic and high-value metals.</p>
                  <ul className="tech-stage-list">
                    <li>Na₂CO₃ + NaHCO₃ solution (~2M) at ~70°C</li>
                    <li>Cold plasma & electromagnetic activation</li>
                    <li>Electric pulse action (EPA)</li>
                    <li>CO₂ pre-saturation at atmospheric pressure</li>
                  </ul>
                  <div className="tech-stage-highlight">Up to ~60% Scandium, ~50% Zirconium, and ~50% REEs extracted.</div>
                </div>
              </motion.div>

              {/* Stage 4A */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src={"/TECHNOLOGY/TITANIUM RECOVERY.jpg"} alt="Stage 4A" loading="lazy" />
                  <div className="tech-stage-badge">04A</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">STAGE 4A</p>
                  <h3>Fractionated Metal Recovery: Titanium</h3>
                  <p className="tech-stage-objective">Dissolved metals are separated sequentially through controlled precipitation — not recovered as a mixed concentrate.</p>
                  <ul className="tech-stage-list">
                    <li>Precipitation at ~75°C</li>
                    <li>NaOH-assisted precipitation</li>
                    <li>Coagulant addition</li>
                    <li>Ultrasound enhancement</li>
                  </ul>
                  <div className="tech-stage-highlight">Output: TiO₂ concentrate suitable for pigment, alloy, and industrial use.</div>
                </div>
              </motion.div>

              {/* Stage 4B */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src={"/TECHNOLOGY/Fractionated Separation & Metal Recovery.jpg"} alt="Stage 4B" loading="lazy" />
                  <div className="tech-stage-badge">04B</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">STAGE 4B</p>
                  <h3>Zirconium, Scandium & REE Recovery</h3>
                  <p className="tech-stage-objective"><strong>Conditions:</strong> Heated to ~100°C, NaOH ~4M, pH ~14, Aluminum-based coagulant.</p>
                  <ul className="tech-stage-list">
                    <li>Zirconium oxide (ZrO₂)</li>
                    <li>Scandium oxide (Sc₂O₃)</li>
                    <li>Yttrium oxide, Dysprosium & Gadolinium compounds</li>
                  </ul>
                  <div className="tech-stage-highlight">Suitable for aerospace ceramics, permanent magnets, defense, and energy transition technologies.</div>
                </div>
              </motion.div>

              {/* Iron Enrichment */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src={"/TECHNOLOGY/IRON ENRICHMENT & FINAL SOLID MANAGEMENT.jpg"} alt="Iron Enrichment" loading="lazy" />
                  <div className="tech-stage-badge">FIN</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">FINAL SOLID MANAGEMENT</p>
                  <h3>Iron Enrichment</h3>
                  <p className="tech-stage-objective">After sequential extraction, the solid phase is enriched to ~60% Fe, then neutralized to pH 7–9.</p>
                  <ul className="tech-stage-list">
                    <li>Iron pigments</li>
                    <li>Pellets & Coagulants</li>
                    <li>Smelting feedstock</li>
                  </ul>
                  <div className="tech-stage-highlight">The remaining aluminosilicate matrix is mineralogically stabilized.</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Section 4: Sustainability & Reagent Recovery â”€â”€ */}
      <section className="tech-dashboard-section tech-sustainability" id="sustainability">
        <div className="container">
          <motion.div
            className="tech-sustainability-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-sustain-content">
              <p className="image-styled-kicker">SUSTAINABILITY</p>
              <h2 className="tech-card-title">Reagent Recovery & CO₂ Integration</h2>
              <p className="tech-card-desc">The system incorporates a fully closed-loop design that significantly reduces fresh chemical input, waste generation, carbon intensity, and operating expenditure.</p>
              <div className="tech-sustain-pillars">
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-blue"><Recycle size={22} /></div>
                  <div>
                    <h4>NaOH & Na₂CO₃ Regeneration</h4>
                    <p>Reagent loops recover and reuse leaching chemicals at industrial scale.</p>
                  </div>
                </div>
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-green"><Zap size={22} /></div>
                  <div>
                    <h4>CO₂ Capture & Reinjection</h4>
                    <p>Industrial exhaust CO₂ is stored and reinjected directly into the precipitation stages.</p>
                  </div>
                </div>
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-teal"><TrendingUp size={22} /></div>
                  <div>
                    <h4>Zero Net Waste Target</h4>
                    <p>Every output stream is a saleable product — from iron pigments to aluminosilicate materials.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="tech-sustain-image">
              <img src={"/TECHNOLOGY/REAGENT RECOVERY & CO2 INTEGRATION.jpg"} alt="Reagent Recovery" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Section 5: Strategic Rare Earths Marquee â”€â”€ */}
      <section className="strategic-marquee-section" id="strategic-rare-earths" style={{ padding: '5rem 0', background: 'var(--bg-surface)' }}>
        <div className="strategic-marquee-header">
          <p className="kicker">STRATEGIC RARE EARTHS</p>
          <h2 className="strategic-marquee-heading">Targeted Critical Metals</h2>
        </div>
        <div className="strategic-marquee-track-wrap">
          <div className="strategic-marquee-track">
            <article className="strategic-marquee-card">
              <figure className="strategic-marquee-img">
                <img src={"/TECHNOLOGY/SCANDIUM.jpg"} alt="Scandium" loading="lazy" />
              </figure>
              <h3 className="strategic-marquee-title">Scandium (Sc)</h3>
              <p className="strategic-marquee-copy">Successfully mobilized within our continuous flow process. High-purity scandium oxide finds fundamental applications in advanced aerospace alloys, defense electronics, solid oxide fuel cells, and high-intensity lighting.</p>
            </article>
            <article className="strategic-marquee-card">
              <figure className="strategic-marquee-img">
                <img src={"/TECHNOLOGY/Yttrium.png"} alt="Yttrium" loading="lazy" />
              </figure>
              <h3 className="strategic-marquee-title">Yttrium (Y)</h3>
              <p className="strategic-marquee-copy">Plays a critical position in high-technology manufacturing. Our fractionated recovery isolates Yttrium oxide which is heavily used in laser systems, aerospace alloys, and advanced ceramics.</p>
            </article>
            <article className="strategic-marquee-card">
              <figure className="strategic-marquee-img">
                <img src={"/TECHNOLOGY/Dysprosium.jpg"} alt="Dysprosium" loading="lazy" />
              </figure>
              <h3 className="strategic-marquee-title">Dysprosium (Dy)</h3>
              <p className="strategic-marquee-copy">Crucial for enabling clean energy technologies. Dysprosium compounds operate as critical inputs for high-temperature permanent magnets, EV motors, and advanced wind turbines.</p>
            </article>
            <article className="strategic-marquee-card">
              <figure className="strategic-marquee-img">
                <img src={"/TECHNOLOGY/Gadolinium.jpg"} alt="Gadolinium" loading="lazy" />
              </figure>
              <h3 className="strategic-marquee-title">Gadolinium (Gd)</h3>
              <p className="strategic-marquee-copy">Serving highly specific tech roles across industries. The isolated Gadolinium is a vital component used deeply in MRI contrast agents, nuclear neutron absorption, and medical electronic systems.</p>
            </article>
            {/* Duplicate set for seamless loop */}
            <article className="strategic-marquee-card" aria-hidden="true">
              <figure className="strategic-marquee-img">
                <img src={"/TECHNOLOGY/SCANDIUM.jpg"} alt="" loading="lazy" />
              </figure>
              <h3 className="strategic-marquee-title">Scandium (Sc)</h3>
              <p className="strategic-marquee-copy">Successfully mobilized within our continuous flow process. High-purity scandium oxide finds fundamental applications in advanced aerospace alloys, defense electronics, solid oxide fuel cells, and high-intensity lighting.</p>
            </article>
            <article className="strategic-marquee-card" aria-hidden="true">
              <figure className="strategic-marquee-img">
                <img src={"/TECHNOLOGY/Yttrium.png"} alt="" loading="lazy" />
              </figure>
              <h3 className="strategic-marquee-title">Yttrium (Y)</h3>
              <p className="strategic-marquee-copy">Plays a critical position in high-technology manufacturing. Our fractionated recovery isolates Yttrium oxide which is heavily used in laser systems, aerospace alloys, and advanced ceramics.</p>
            </article>
            <article className="strategic-marquee-card" aria-hidden="true">
              <figure className="strategic-marquee-img">
                <img src={"/TECHNOLOGY/Dysprosium.jpg"} alt="" loading="lazy" />
              </figure>
              <h3 className="strategic-marquee-title">Dysprosium (Dy)</h3>
              <p className="strategic-marquee-copy">Crucial for enabling clean energy technologies. Dysprosium compounds operate as critical inputs for high-temperature permanent magnets, EV motors, and advanced wind turbines.</p>
            </article>
            <article className="strategic-marquee-card" aria-hidden="true">
              <figure className="strategic-marquee-img">
                <img src={"/TECHNOLOGY/Gadolinium.jpg"} alt="" loading="lazy" />
              </figure>
              <h3 className="strategic-marquee-title">Gadolinium (Gd)</h3>
              <p className="strategic-marquee-copy">Serving highly specific tech roles across industries. The isolated Gadolinium is a vital component used deeply in MRI contrast agents, nuclear neutron absorption, and medical electronic systems.</p>
            </article>
          </div>
        </div>
      </section>

      {/* â”€â”€ Section 6: Industrial Deployment Advantages â”€â”€ */}
      <section className="tech-dashboard-section tech-advantage-section" id="deployment-advantages">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-advantage-header">
              <p className="image-styled-kicker">THE ADVANTAGE</p>
              <h2 className="tech-card-title">Industrial Deployment Advantages</h2>
              <p className="tech-card-desc" style={{ maxWidth: '60ch', margin: '1rem auto 0' }}>A commercially proven, scalable solution built around existing infrastructure — no greenfield risk, no new mining, no speculative chemistry.</p>
            </motion.div>

            <div className="tech-advantage-grid">
              <motion.div variants={fadeUp} className="tech-advantage-left">
                <img src={"/TECHNOLOGY/Modular-construction-on-chemical-process-system.jpg"} alt="Modular Deployment" className="tech-advantage-img" />
              </motion.div>
              <motion.div variants={fadeUp} className="tech-advantage-cards">
                {[
                  { icon: <Layers size={20} />, label: "Atmospheric-pressure chemistry" },
                  { icon: <Flame size={20} />, label: "Moderate temperature (70–100°C)" },
                  { icon: <Zap size={20} />, label: "Continuous-flow design" },
                  { icon: <Boxes size={20} />, label: "Brownfield refinery integration" },
                  { icon: <TrendingUp size={20} />, label: "Multi-element economics" },
                  { icon: <CheckCircle2 size={20} />, label: "No exploration risk" },
                  { icon: <Magnet size={20} />, label: "Feedstock already mined & surface-stored" },
                ].map((item, i) => (
                  <div key={i} className="tech-adv-item">
                    <div className="tech-adv-icon">{item.icon}</div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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

