"use client";

import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import {
  Droplet, Zap, Sparkles, Gem,
  FlaskConical, TrendingUp, ShieldCheck,
  CheckCircle2, BarChart3, Layers
} from "lucide-react";

export default function OutputsPage() {
  return (
    <div className="home-page outputs-page">
      <Hero
        kicker="CRITICAL MINERALS & OUTPUTS"
        title="Strategic Materials Recovered from Rare Earth — At Industrial Scale"
        imageSrc="/output/Strategic Materials Recovered from Red Mud.png"
        imageAlt="Strategic Materials Recovered from Rare Earth"
        id="outputs-hero-title"
      >
        <p>
          Rare earth is not a single-metal resource. It is a complex, surface-available
          polymetallic deposit formed during alumina refining.
        </p>
        <p>
          The Enervoxa platform is engineered to selectively recover multiple critical and
          industrial minerals from this matrix—each as a separate, specification-controlled product stream.
        </p>
      </Hero>

      {/* â”€â”€ Section 1: Iron Oxides â”€â”€ */}
      <section className="tech-dashboard-section" id="iron-title">
        <div className="container">
          <motion.div
            className="tech-split-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <div className="tech-split-image-col">
              <img src={"/output/IRON OXIDES.jpg"} alt="Iron Oxides" className="tech-split-img" />
            </div>
            <div className="tech-split-content">
              <p className="image-styled-kicker">IRON OXIDES</p>
              <h2 className="tech-card-title">Industrial-Grade Products with Immediate Offtake Potential</h2>
              <p className="tech-card-desc">Iron oxide pigments and iron-based coagulants, targeting ≥95% Fe₂O₃ purity with controlled particle size and phase composition — converting the largest mass fraction of rare earth into revenue-generating products.</p>

              <div className="tech-chemistry-grid">
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-blue"><Droplet size={20} /></div>
                  <div>
                    <h4>Applications</h4>
                    <p>Construction materials, pigments & coatings, water treatment coagulants, metallurgical feedstock</p>
                  </div>
                </div>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-orange"><ShieldCheck size={20} /></div>
                  <div>
                    <h4>Value Proposition</h4>
                    <p>Eliminates long-term storage liability. Enables zero-waste plant operation with immediate revenue.</p>
                  </div>
                </div>
              </div>

              <div className="tech-tag-row">
                {["≥95% Fe₂O₃", "Iron Pigments", "Water Treatment", "Smelting Feedstock"].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Section 2: Titanium â”€â”€ */}
      <section className="tech-dashboard-section" style={{ background: '#f0f5f9' }} id="titanium-title">
        <div className="container">
          <motion.div
            className="tech-split-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <div className="tech-split-content" style={{ paddingLeft: 'clamp(2rem, 4vw, 3.5rem)', paddingRight: 0 }}>
              <p className="image-styled-kicker">TITANIUM-BEARING MATERIALS</p>
              <h2 className="tech-card-title">Structural and Functional Materials for Energy & Mobility</h2>
              <p className="tech-card-desc">Titanium-rich intermediates convertible to TiO₂ or downstream titanium compounds, achieving 90–98% TiO₂ equivalent — extracted without high-temperature chlorination or sulfate routes.</p>

              <div className="tech-chemistry-grid">
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-blue"><Zap size={20} /></div>
                  <div>
                    <h4>Market Relevance</h4>
                    <p>Battery technologies, aerospace structural components, corrosion-resistant equipment, clean-energy (solar, hydrogen).</p>
                  </div>
                </div>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-green"><TrendingUp size={20} /></div>
                  <div>
                    <h4>Process Advantage</h4>
                    <p>Lower energy and environmental footprint. Complements REE recovery within the same processing train.</p>
                  </div>
                </div>
              </div>

              <div className="tech-tag-row">
                {["90–98% TiO₂", "Aerospace", "Battery Tech", "Clean Energy"].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="tech-split-image-col">
              <img src={"/output/TITANIUM-BEARING MATERIALS.jpg"} alt="Titanium Materials" className="tech-split-img" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Section 3: REEs — 3-Column Cards â”€â”€ */}
      <section className="tech-stages-section" id="ree-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-stages-header">
              <p className="image-styled-kicker">RARE EARTH ELEMENTS (REEs)</p>
              <h2 className="tech-stages-heading">Magnet, Electronics & Clean-Energy Criticals</h2>
            </motion.div>

            <div className="tech-stages-grid">
              {/* REE Spectrum Card */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src={"/output/RARE EARTH ELEMENTS (REEs).jpg"} alt="Rare Earth Elements" loading="lazy" />
                  <div className="tech-stage-badge">REE</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">RECOVERED SPECTRUM</p>
                  <h3>Multi-REE Oxide Fractions</h3>
                  <p className="tech-stage-objective">Individual REE oxide fractions and mixed concentrates achieving 95–99% REO purity.</p>
                  <ul className="tech-stage-list">
                    <li>Yttrium (Y)</li>
                    <li>Dysprosium (Dy)</li>
                    <li>Gadolinium (Gd)</li>
                    <li>Neodymium (Nd)*</li>
                    <li>Praseodymium (Pr)*</li>
                  </ul>
                  <div className="tech-stage-highlight">*Depending on feedstock composition</div>
                </div>
              </motion.div>

              {/* Market Alignment */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/output/MARKET ALIGNMENT.jpg" alt="Market Alignment" loading="lazy" />
                  <div className="tech-stage-badge">USE</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">MARKET ALIGNMENT</p>
                  <h3>Critical Downstream Applications</h3>
                  <p className="tech-stage-objective">REEs recovered through this platform directly serve the highest-demand technology sectors.</p>
                  <ul className="tech-stage-list">
                    <li>Permanent magnets for EV motors & wind turbines</li>
                    <li>Advanced electronics & telecommunications</li>
                    <li>Defense systems & guidance technologies</li>
                    <li>Medical imaging & specialty optics</li>
                  </ul>
                  <div className="tech-stage-highlight">Supports non-Chinese REE supply diversification.</div>
                </div>
              </motion.div>

              {/* Value Proposition */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/output/VALUE PROPOSITION.jpg" alt="Value Proposition" loading="lazy" />
                  <div className="tech-stage-badge">VAL</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">VALUE PROPOSITION</p>
                  <h3>Zero Mining Risk REE Supply</h3>
                  <p className="tech-stage-objective">Feedstock is already on the surface — no mining or beneficiation risk whatsoever.</p>
                  <ul className="tech-stage-list">
                    <li>Multi-REE recovery improves project economics</li>
                    <li>Versus single-element plays</li>
                    <li>Domestic supply chain resilience</li>
                  </ul>
                  <div className="tech-stage-highlight">No new mines. No tailings. No exploration risk.</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Section 4: Scandium Highlight â”€â”€ */}
      <section className="tech-dashboard-section tech-sustainability" id="scandium-title">
        <div className="container">
          <motion.div
            className="tech-sustainability-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-sustain-content">
              <p className="image-styled-kicker">SCANDIUM</p>
              <h2 className="tech-card-title">Ultra-High-Value Enabler for Aerospace & Advanced Energy</h2>
              <p className="tech-card-desc">Scandium oxide (Sc₂O₃) recovered as intermediate, convertible to master alloys or ≥99.0% high-purity oxide grades — one of the most supply-constrained strategic metals globally.</p>

              <div className="tech-sustain-pillars">
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-purple"><Gem size={22} /></div>
                  <div>
                    <h4>Aerospace Alloys</h4>
                    <p>Al-Sc alloys deliver 20–40% weight reduction, higher strength-to-weight, improved weldability and fatigue resistance.</p>
                  </div>
                </div>
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-teal"><Zap size={22} /></div>
                  <div>
                    <h4>Solid Oxide Fuel Cells (SOFCs)</h4>
                    <p>Scandia-stabilized zirconia electrolytes deliver higher conductivity and long-term durability at operating temperature.</p>
                  </div>
                </div>
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-orange"><ShieldCheck size={22} /></div>
                  <div>
                    <h4>Domestic Supply Chain</h4>
                    <p>Enables domestic Sc supply chains for aerospace, defense, and hydrogen infrastructure — without primary mines.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="tech-sustain-image">
              <img src={"/output/SCANDIUM SECTION.jpg"} alt="Scandium Recovery" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Section 5: Multi-Output Advantage â”€â”€ */}
      <section className="tech-dashboard-section tech-advantage-section" id="advantage-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-advantage-header">
              <p className="image-styled-kicker">MULTI-OUTPUT ADVANTAGE</p>
              <h2 className="tech-card-title">Why This Platform Is Economically & Strategically Different</h2>
              <p className="tech-card-desc" style={{ maxWidth: '60ch', margin: '1rem auto 0' }}>Unlike single-metal projects dependent on one volatile commodity, our platform generates diversified revenue streams resilient across commodity cycles.</p>
            </motion.div>

            <div className="tech-advantage-grid">
              <motion.div variants={fadeUp} className="tech-advantage-left">
                <img src={"/output/MULTI-OUTPUT ADVANTAGE.jpg"} alt="Multi-Output Advantage" className="tech-advantage-img" />
              </motion.div>
              <motion.div variants={fadeUp} className="tech-advantage-cards">
                {[
                  { icon: <BarChart3 size={20} />, label: "25+ recoverable elements" },
                  { icon: <Layers size={20} />, label: "Diversified revenue streams" },
                  { icon: <TrendingUp size={20} />, label: "Resilient economics across commodity cycles" },
                  { icon: <FlaskConical size={20} />, label: "All outputs from same feedstock & plant" },
                  { icon: <CheckCircle2 size={20} />, label: "Commercial scalability built-in" },
                  { icon: <ShieldCheck size={20} />, label: "Long-term contractability" },
                  { icon: <Sparkles size={20} />, label: "Strategic relevance beyond price arbitrage" },
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

      {/* â”€â”€ Section 6: Specification-Driven Production â”€â”€ */}
      <section className="tech-dashboard-section" style={{ background: '#f0f5f9' }} id="spec-title">
        <div className="container">
          <motion.div
            className="tech-split-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <div className="tech-split-image-col">
              <img src={"/output/last.jpg"} alt="Specification-Driven Production" className="tech-split-img" />
            </div>
            <div className="tech-split-content">
              <p className="image-styled-kicker">SPECIFICATION-DRIVEN PRODUCTION</p>
              <h2 className="tech-card-title">Designed for End-Use Markets, Not Just Recovery</h2>
              <p className="tech-card-desc">Each output stream is engineered with downstream qualification in mind — built to meet aerospace and defense alloy standards, EV and renewable-energy material specifications, and industrial chemical and pigment requirements.</p>

              <div className="tech-chemistry-grid">
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-blue"><FlaskConical size={20} /></div>
                  <div>
                    <h4>Integrated On-Site Finishing</h4>
                    <p>Final purification and finishing steps can be integrated directly on-site for maximum margin capture.</p>
                  </div>
                </div>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-teal"><ShieldCheck size={20} /></div>
                  <div>
                    <h4>Flexible Offtake Models</h4>
                    <p>Partnered with downstream processors or tailored to customer-specific offtake agreements.</p>
                  </div>
                </div>
              </div>

              <div className="tech-tag-row">
                {["Aerospace Grade", "EV Specifications", "Defense Qualified", "Industrial Pigments"].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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

