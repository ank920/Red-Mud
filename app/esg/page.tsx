"use client";

import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { 
  Leaf, Droplet, CloudOff, Recycle, 
  ShieldCheck, CheckCircle2, TrendingUp 
} from "lucide-react";

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
          Rare earth storage is not a temporary challenge—it is a multi-decade environmental
          obligation.
        </p>
        <p>
          Our platform addresses this at the root by eliminating the waste stream entirely,
          converting bauxite residue into marketable materials while restoring land, water
          balance, and long-term environmental stability.
        </p>
        <p>This is not offset-based sustainability. It is physical remediation with quantifiable outcomes.</p>
      </Hero>

      {/* ── Section 1: The Core Principle ── */}
      <section className="tech-dashboard-section" id="core-title">
        <div className="container">
          <motion.div
            className="tech-split-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <div className="tech-split-image-col">
              <img src="/ESG & CIRCULAR ECONOMY/WASTE-TO-VALUE.png" alt="Waste-To-Value" className="tech-split-img" />
            </div>
            <div className="tech-split-content">
              <p className="image-styled-kicker">WASTE-TO-VALUE</p>
              <h2 className="tech-card-title">Zero Tailings. Zero Net Accumulation.</h2>
              <p className="tech-card-desc">Globally, more than 4 billion tonnes of rare earth sit in engineered ponds, representing long-term containment risk and lost land utility. We permanently remove rare earth from storage.</p>

              <div className="tech-chemistry-grid">
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-green"><Leaf size={20} /></div>
                  <div>
                    <h4>Complete Conversion</h4>
                    <p>Recovering critical minerals and converting the remaining matrix into stable industrial materials.</p>
                  </div>
                </div>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-blue"><ShieldCheck size={20} /></div>
                  <div>
                    <h4>Impact Reduction</h4>
                    <p>Eliminating ongoing monitoring costs, mitigating long-term containment risks, and returning zero material to ponds.</p>
                  </div>
                </div>
              </div>

              <div className="tech-tag-row">
                {["Zero New Tailings", "100% Waste Utilization", "Land Reclaimed"].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Environment Pillars ── */}
      <section className="tech-stages-section" id="pillars-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-stages-header">
              <p className="image-styled-kicker">ENVIRONMENTAL IMPACT PILLARS</p>
              <h2 className="tech-stages-heading">Physical Remediation In Action</h2>
            </motion.div>

            <div className="tech-stages-grid">
              {/* Pillar 1 */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/ESG & CIRCULAR ECONOMY/PILLAR 01.jpg" alt="Land Reclamation" loading="lazy" />
                  <div className="tech-stage-badge" style={{ background: '#059669' }}>LND</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker" style={{ color: '#9a1f1f' }}>PILLAR 01</p>
                  <h3>Land Reclamation</h3>
                  <p className="tech-stage-objective">Each tonne processed permanently reduces stored residue volume, emptying legacy ponds.</p>
                  <ul className="tech-stage-list">
                    <li>Releases locked industrial land</li>
                    <li>Reduces tailings dam failure risk</li>
                    <li>Eliminates groundwater exposure</li>
                  </ul>
                  <div className="tech-stage-highlight">1 Mt/yr processed = 1 Mt/yr liability eliminated</div>
                </div>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/ESG & CIRCULAR ECONOMY/PILLAR 02.jpg" alt="Closed-Loop Water" loading="lazy" />
                  <div className="tech-stage-badge" style={{ background: '#2563eb' }}>H₂O</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker" style={{ color: '#9a1f1f' }}>PILLAR 02</p>
                  <h3>Closed-Loop Water</h3>
                  <p className="tech-stage-objective">Integrated water recovery with zero continuous liquid discharge to the environment.</p>
                  <ul className="tech-stage-list">
                    <li>Internal closed-loop reuse</li>
                    <li>Reduced freshwater draw</li>
                    <li>Lower hydraulic pressure on ponds</li>
                  </ul>
                  <div className="tech-stage-highlight">&gt;90% process water recycled internally</div>
                </div>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap" style={{ background: '#f5f0e8', overflow: 'hidden' }}>
                  <img src="/ESG & CIRCULAR ECONOMY/PILLAR 03.jpg" alt="Carbon Avoidance" loading="lazy" style={{ objectFit: 'contain', objectPosition: 'center', transform: 'scale(0.85)', width: '100%', height: '100%' }} />
                  <div className="tech-stage-badge" style={{ background: '#7c3aed' }}>CO₂</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker" style={{ color: '#9a1f1f' }}>PILLAR 03</p>
                  <h3>Carbon Avoidance</h3>
                  <p className="tech-stage-objective">Operating below 100°C disables emissions tied to roasting, smelting, and new mining.</p>
                  <ul className="tech-stage-list">
                    <li>No high-temp combustion needed</li>
                    <li>Avoids intensive 1000°C refining</li>
                    <li>Bypasses primary mining footprint</li>
                  </ul>
                  <div className="tech-stage-highlight">Low-carbon supply chains for EVs & Clean Energy</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Circular Economy ── */}
      <section className="tech-dashboard-section" style={{ background: '#f0f5f9' }} id="circular-title">
        <div className="container">
          <motion.div
            className="tech-split-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <div className="tech-split-content" style={{ paddingLeft: 'clamp(2rem, 4vw, 3.5rem)', paddingRight: 0 }}>
              <p className="image-styled-kicker">CIRCULAR ECONOMY IN PRACTICE</p>
              <h2 className="tech-card-title">Not Just Theory, But A Profitable Reality</h2>
              <p className="tech-card-desc">Unlike partial-use pathways (cement blending, road fill), this platform utilizes 100% of incoming material—generating multiple product streams including Scandium, REEs, Titanium, and Iron Oxides.</p>

              <div className="tech-chemistry-grid">
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-teal"><Recycle size={20} /></div>
                  <div>
                    <h4>Industrial Symbiosis</h4>
                    <p>Aligning directly with circular economy mandates and extended producer responsibility logic.</p>
                  </div>
                </div>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-orange"><TrendingUp size={20} /></div>
                  <div>
                    <h4>Economics of Zero-Waste</h4>
                    <p>Creating a highly profitable project that is significantly more cost-effective than continuous storage and escalating environmental fines.</p>
                  </div>
                </div>
              </div>

              <div className="tech-tag-row">
                {["100% Feedstock Used", "Multiple Products", "Zero Residual Waste"].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="tech-split-image-col" style={{ background: '#f5f0e8', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '1rem' }}>
              <img src="/ESG & CIRCULAR ECONOMY/CIRCULAR ECONOMY IN PRACTICE.png" alt="Circular Economy" className="tech-split-img" style={{ objectFit: 'contain', width: '100%', height: '100%', transform: 'scale(0.9)' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: KPI Dashboard / Advantage ── */}
      <section className="tech-dashboard-section tech-advantage-section" id="social-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-advantage-header">
              <p className="image-styled-kicker">GOVERNANCE & REPORTING</p>
              <h2 className="tech-card-title">Community & Regulatory Confidence</h2>
              <p className="tech-card-desc" style={{ maxWidth: '60ch', margin: '1rem auto 0' }}>Delivering physical, measurable KPIs—not estimates—suitable for direct integration into ESG disclosures, sustainability reports, and lender monitoring frameworks.</p>
            </motion.div>


            <motion.div
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
                marginTop: '2.5rem',
              }}
            >
              {[
                { icon: <CheckCircle2 size={28} />, label: "Measurable remediation rates" },
                { icon: <ShieldCheck size={28} />, label: "Shrinking hazardous footprint" },
                { icon: <CheckCircle2 size={28} />, label: "Long-term risk reduction near communities" },
                { icon: <ShieldCheck size={28} />, label: "Releasing locked industrial land" },
                { icon: <CheckCircle2 size={28} />, label: "Transparent ESG disclosures" },
                { icon: <ShieldCheck size={28} />, label: "Supports lender financing models" },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.875rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}>
                  <div style={{
                    width: '52px', height: '52px',
                    borderRadius: '12px',
                    background: 'rgba(154,31,31,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#9a1f1f',
                    flexShrink: 0,
                  }}>{item.icon}</div>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#0f172a', lineHeight: 1.4 }}>{item.label}</span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

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
