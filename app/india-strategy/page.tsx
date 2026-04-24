"use client";

import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { 
  AlertTriangle, Map, Layers, Lightbulb, 
  Target, Gem, ScrollText, ShieldCheck, 
  TrendingUp, Leaf, Settings, Factory, Scale
} from "lucide-react";

export default function IndiaStrategyPage() {
  return (
    <div className="home-page india-page">
      <Hero
        kicker="INDIA STRATEGY & POLICY"
        title="Turning India's Largest Industrial Liability into a Strategic Mineral Advantage"
        imageSrc="/INDIA STRATEGY & POLICY/HERO SECTION.jpg"
        imageAlt="India Strategy for Rare Earth Processing"
        id="india-hero-title"
      >
        <p>
          India is the fourth-largest generator of bauxite residue (rare earth) globally. What has
          historically been treated as a waste-management challenge is now emerging as a
          strategic lever for critical-minerals security, industrial remediation, and Atmanirbhar
          Bharat.
        </p>
        <p>
          Our approach positions rare earth not as an environmental burden, but as a domestically
          available, surface-stored polymetallic resource—capable of supplying scandium, rare
          earth elements, titanium, and iron oxides at industrial scale.
        </p>
      </Hero>

      {/* ── Section 1: India Reality / Scale ── */}
      <section className="tech-dashboard-section tech-advantage-section" id="reality-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-advantage-header">
              <p className="image-styled-kicker">INDIA&apos;S RARE EARTH REALITY</p>
              <h2 className="tech-card-title">Scale, Concentration, and Risk</h2>
              <p className="tech-card-desc" style={{ maxWidth: '60ch', margin: '1rem auto 0' }}>India’s rare-earth challenge is not future-tense. It is already accumulated, geographically concentrated in states like Odisha, and policy-relevant today.</p>
            </motion.div>

            <div className="tech-advantage-grid">
              <motion.div variants={fadeUp} className="tech-advantage-left" style={{ background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', padding: '0' }}>
                <div style={{ padding: '2rem', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <div style={{ padding: '0.5rem', background: '#eff6ff', borderRadius: '8px', color: '#1e40af' }}>
                      <Factory size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>9M t/year</h4>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Annual Generation</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#475569', margin: '0.5rem 0 0' }}>India&apos;s total rare earth production, with an ~8.7M t/year net accumulation into storage ponds.</p>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <div style={{ padding: '0.5rem', background: '#fef2f2', borderRadius: '8px', color: '#dc2626' }}>
                      <AlertTriangle size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>&lt;3%</h4>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Utilization Rate</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#475569', margin: '0.5rem 0 0' }}>Far below the 25% utilization target articulated by national regulators.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="tech-advantage-cards">
                {[
                  { icon: <Map size={20} />, label: "Odisha contributes ~75–80% of national output" },
                  { icon: <Target size={20} />, label: "Priority states: Odisha, Jharkhand, Uttar Pradesh" },
                  { icon: <Layers size={20} />, label: "Tens of millions of tonnes already in legacy pools" },
                  { icon: <AlertTriangle size={20} />, label: "Aging infrastructure elevates environmental risk" },
                  { icon: <Factory size={20} />, label: "Major clusters at NALCO, Vedanta, and Hindalco" },
                  { icon: <ShieldCheck size={20} />, label: "Limited public disclosure of closing stock metrics" },
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

      {/* ── Section 2: Strategic Potential ── */}
      <section className="tech-dashboard-section" style={{ background: '#f0f5f9' }} id="potential-title">
        <div className="container">
          <motion.div
            className="tech-split-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <div className="tech-split-content" style={{ paddingLeft: 'clamp(2rem, 4vw, 3.5rem)', paddingRight: 0 }}>
              <p className="image-styled-kicker">STRATEGIC MINERAL POTENTIAL</p>
              <h2 className="tech-card-title">Hiding in Plain Sight</h2>
              <p className="tech-card-desc">At national throughput levels, India&apos;s stockpiles translate into a strategic materials opportunity for critical security — entirely without new mining.</p>

              <div className="tech-chemistry-grid">
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-orange"><Gem size={20} /></div>
                  <div>
                    <h4>Recoverable Concentrations</h4>
                    <p>Iron oxides (~35–45%), Alumina (~15–20%), and Titanium dioxide (~10–15%).</p>
                  </div>
                </div>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-teal"><TrendingUp size={20} /></div>
                  <div>
                    <h4>High-Value Trace Metals</h4>
                    <p>Economically significant streams of Scandium and Rare Earth Elements.</p>
                  </div>
                </div>
              </div>

              <div className="tech-tag-row">
                {["EV Materials", "Aerospace Alloys", "Defense Base"].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="tech-split-image-col">
              <img src="/INDIA STRATEGY & POLICY/Strategic Mineral Potential.jpg" alt="Strategic Mineral Potential" className="tech-split-img" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Policy Alignment ── */}
      <section className="tech-dashboard-section tech-sustainability" id="policy-title">
        <div className="container">
          <motion.div
            className="tech-sustainability-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            style={{ gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)' }}
          >
            <motion.div variants={fadeUp} className="tech-sustain-content">
              <p className="image-styled-kicker">POLICY ALIGNMENT</p>
              <h2 className="tech-card-title">Built for India&apos;s National Missions</h2>
              <p className="tech-card-desc">This technology enables domestic recovery from domestic waste, reducing exposure to geopolitically concentrated supply chains.</p>

              <div className="tech-sustain-pillars">
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-purple"><ScrollText size={22} /></div>
                  <div>
                    <h4>1. Strategic Materials Independence</h4>
                    <p>Recognizing REEs, Scandium, and Titanium as essential for electric mobility and defense.</p>
                  </div>
                </div>
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-teal"><ShieldCheck size={22} /></div>
                  <div>
                    <h4>2. Environmental Remediation</h4>
                    <p>Meeting CPCB objectives by permanently shrinking legacy ponds and avoiding secondary waste.</p>
                  </div>
                </div>
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-orange"><TrendingUp size={22} /></div>
                  <div>
                    <h4>3. Atmanirbhar Bharat</h4>
                    <p>Substituting imports and driving indigenous value creation through circular secondary mining.</p>
                  </div>
                </div>
                <div className="tech-sustain-pillar">
                  <div className="tech-chem-icon badge-green"><Leaf size={22} /></div>
                  <div>
                    <h4>4. Land Use & Social License</h4>
                    <p>Releasing scarce industrial land and reducing intergenerational storage risks near communities.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="tech-sustain-image" style={{ display: 'flex', alignItems: 'stretch' }}>
              <div style={{
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '3 / 4',
                boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                background: '#f5f0e8',
              }}>
                <img
                  src="/INDIA STRATEGY & POLICY/POLICY ALIGNMENT.png"
                  alt="Policy Alignment"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Deployment Strategy ── */}
      <section className="tech-dashboard-section" style={{ background: '#f8fafc' }} id="deployment-title">
        <div className="container">
          <motion.div
            className="tech-split-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <div className="tech-split-image-col">
              <img src="/INDIA STRATEGY & POLICY/Deployment Strategy for India.jpg" alt="Deployment Strategy" className="tech-split-img" />
            </div>
            <div className="tech-split-content">
              <p className="image-styled-kicker">DEPLOYMENT STRATEGY FOR INDIA</p>
              <h2 className="tech-card-title">Target Integration Model</h2>
              <p className="tech-card-desc">Designed to deploy on-site or adjacent to existing alumina refineries, accepting live residue streams, dewatered rare earth, or legacy pond materials without disrupting core operations.</p>

              <div className="tech-chemistry-grid">
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-blue"><Scale size={20} /></div>
                  <div>
                    <h4>Modular Scale-Up</h4>
                    <p>Initial modules aligned to 350,000 t/year processing blocks, expanding to 1M+ t/year.</p>
                  </div>
                </div>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-orange"><Target size={20} /></div>
                  <div>
                    <h4>Priority Geographies</h4>
                    <p>Focused targeted expansion starting in Odisha, Jharkhand, and Uttar Pradesh.</p>
                  </div>
                </div>
              </div>

              <div className="tech-tag-row">
                {["Zero Site Disruption", "Plug-and-play Expansion", "Live or Legacy Feed"].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PositioningSection
        title="India already owns one of the world's largest critical-minerals resources."
        description="It is stored as rare earth. The question is no longer whether to remediate it—but whether to do so in a way that strengthens national capability."
        buttons={[
          { label: "Technology Details", href: "/technology" },
          { label: "Partnership Models", href: "/partnerships" }
        ]}
        id="india-close-title"
      />
    </div>
  );
}
