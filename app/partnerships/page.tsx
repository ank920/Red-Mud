"use client";

import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { 
  Handshake, FileBadge, Factory, TrendingUp, 
  ShieldCheck, Users, Activity, FileText, Settings, Lightbulb, Building2
} from "lucide-react";

export default function PartnershipsPage() {
  return (
    <div className="home-page partnerships-page">
      <Hero
        kicker="PARTNERSHIPS & BUSINESS MODELS"
        title="Scaling Critical Mineral Recovery Through Strategic Collaboration"
        imageSrc="/partnership/HERO SECTION.jpg"
        imageAlt="Strategic Partnership for Rare Earth Processing"
        id="partnerships-hero-title"
      >
        <p>
          Our platform is designed to deploy at scale by partnering directly with alumina
          producers, infrastructure investors, and strategic capital providers. We offer
          multiple commercial structures—each engineered to align incentives, accelerate
          remediation, and unlock long-term value from rare earth stockpiles.
        </p>
        <p>
          This flexibility allows partners to participate according to their balance-sheet
          strategy, risk appetite, and operational priorities, while preserving the integrity of
          the patented extraction technology.
        </p>
      </Hero>

      {/* ── Section 1: Partnership Philosophy ── */}
      <section className="tech-dashboard-section" id="philosophy-title">
        <div className="container">
          <motion.div
            className="tech-split-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <div className="tech-split-image-col">
              <img src="/partnership/Partnership Philosophy.jpg" alt="Partnership Philosophy" className="tech-split-img" />
            </div>
            <div className="tech-split-content">
              <p className="image-styled-kicker">PARTNERSHIP PHILOSOPHY</p>
              <h2 className="tech-card-title">Aligning Environmental Remediation With Industrial Economics</h2>
              <p className="tech-card-desc">Rare earth is not a speculative feedstock—it is a continuously generated, on-site industrial liability. Our partnership models convert this liability into a monetizable resource without disrupting alumina operations.</p>

              <div className="tech-chemistry-grid">
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-orange"><Lightbulb size={20} /></div>
                  <div>
                    <h4>Zero Interference</h4>
                    <p>Designed for modular, on-site or adjacent deployment without interrupting core alumina production.</p>
                  </div>
                </div>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-teal"><TrendingUp size={20} /></div>
                  <div>
                    <h4>Visible Outcomes</h4>
                    <p>Delivering long-term visibility on both mineral recovery revenues and ESG compliance outcomes.</p>
                  </div>
                </div>
              </div>

              <div className="tech-tag-row">
                {["Modular Integration", "Zero-Waste Processing", "Balance-Sheet Alignment"].map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Core Business Models ── */}
      <section className="tech-stages-section" style={{ background: '#f0f5f9' }} id="models-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-stages-header">
              <p className="image-styled-kicker">COMMERCIAL STRUCTURES</p>
              <h2 className="tech-stages-heading">Three Core Business Models</h2>
            </motion.div>

            <div className="tech-stages-grid">
              {/* JV Model */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/partnership/Joint Venture.jpg" alt="Joint Venture" loading="lazy" />
                  <div className="tech-stage-badge" style={{ background: '#2563eb' }}>MDL</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">MODEL 01</p>
                  <h3>Joint Venture (JV)</h3>
                  <p className="tech-stage-objective">Shared Ownership. Shared Upside. Immediate Remediation.</p>
                  <ul className="tech-stage-list">
                    <li>Dedicated JV entity on-site</li>
                    <li>De-risks producer liabilities</li>
                    <li>Direct critical mineral exposure</li>
                  </ul>
                  <div className="tech-stage-highlight">Best for: Large integrated producers with legacy stockpiles.</div>
                </div>
              </motion.div>

              {/* Licensing Model */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/partnership/Technology Licensing.webp" alt="Technology Licensing" loading="lazy" />
                  <div className="tech-stage-badge" style={{ background: '#7c3aed' }}>MDL</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">MODEL 02</p>
                  <h3>Technology Licensing</h3>
                  <p className="tech-stage-objective">Low Capital. Rapid Replication. Asset-Light Scaling.</p>
                  <ul className="tech-stage-list">
                    <li>Minimal balance-sheet exposure</li>
                    <li>Standardized rapid deployment</li>
                    <li>Predictable royalty structures</li>
                  </ul>
                  <div className="tech-stage-highlight">Best for: Producers with multiple continuous refineries.</div>
                </div>
              </motion.div>

              {/* BOO Model */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/partnership/BUILD-OWN-OPERATE.jpg" alt="Build-Own-Operate" loading="lazy" />
                  <div className="tech-stage-badge" style={{ background: '#059669' }}>MDL</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker">MODEL 03</p>
                  <h3>Build-Own-Operate (BOO)</h3>
                  <p className="tech-stage-objective">Turnkey Remediation With Zero Capital Burden.</p>
                  <ul className="tech-stage-list">
                    <li>No capex for the producer</li>
                    <li>Guaranteed remediation pathway</li>
                    <li>Infrastructure-style asset returns</li>
                  </ul>
                  <div className="tech-stage-highlight">Best for: Producers prioritizing rapid ESG compliance.</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Deployment Flow ── */}
      <section className="tech-dashboard-section" id="flow-title">
        <div className="container">
          <motion.div
            className="tech-split-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <div className="tech-split-content" style={{ paddingLeft: 'clamp(2rem, 4vw, 3.5rem)', paddingRight: 0 }}>
              <p className="image-styled-kicker">DEPLOYMENT FLOW</p>
              <h2 className="tech-card-title">Partnering With Proximity</h2>
              <p className="tech-card-desc">Every rare earth stockpile is unique. We structure our engagement from initial testing to long-term operations.</p>

              <div className="tech-chemistry-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-orange"><FileText size={20} /></div>
                  <div>
                    <h4>1. Assessment & Structuring</h4>
                    <p>Chemical profiling, flow integration review, and selecting the optimal commercial model (JV/License/BOO).</p>
                  </div>
                </div>
                <div className="tech-chem-card">
                  <div className="tech-chem-icon badge-teal"><Settings size={20} /></div>
                  <div>
                    <h4>2. Deployment & Scale</h4>
                    <p>Plug-and-play modular installation leading to continuous processing and phased capacity ramp up.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tech-split-image-col">
              <img src="/partnership/Partner with an Alumina Producer.png" alt="Partner Deployment Flow" className="tech-split-img" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Strategic Benefits Grid ── */}
      <section className="tech-dashboard-section tech-advantage-section" style={{ background: '#f8fafc' }} id="benefits-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-advantage-header">
              <p className="image-styled-kicker">SYNERGIES & BENEFITS</p>
              <h2 className="tech-card-title">A Solution For Every Stakeholder</h2>
              <p className="tech-card-desc" style={{ maxWidth: '60ch', margin: '1rem auto 0' }}>Rare earth remediation sits at the intersection of mining, materials science, infrastructure, and public policy. No single stakeholder solves this alone.</p>
            </motion.div>

            <div className="tech-advantage-grid">
              <motion.div variants={fadeUp} className="tech-advantage-left">
                <img src="/partnership/Strategic Benefits.jpg" alt="Strategic Benefits" className="tech-advantage-img" />
              </motion.div>
              <motion.div variants={fadeUp} className="tech-advantage-cards">
                <div className="tech-adv-item" style={{ gridColumn: '1 / -1', background: 'transparent', boxShadow: 'none', border: 'none', padding: '0 0 1rem 0' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, fontSize: '1.1rem', color: '#0f172a' }}>
                    <Building2 size={24} color="#f97316"/> For Alumina Producers
                  </h4>
                </div>
                <div className="tech-adv-item">
                  <div className="tech-adv-icon badge-orange"><ShieldCheck size={20} /></div>
                  <span>Permanent reduction of rare earth liabilities</span>
                </div>
                <div className="tech-adv-item">
                  <div className="tech-adv-icon badge-orange"><TrendingUp size={20} /></div>
                  <span>Conversion of waste into strategic revenue</span>
                </div>
                
                <div className="tech-adv-item" style={{ gridColumn: '1 / -1', background: 'transparent', boxShadow: 'none', border: 'none', padding: '1.5rem 0 1rem 0' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, fontSize: '1.1rem', color: '#0f172a' }}>
                    <Activity size={24} color="#0ea5e9"/> For Strategic Capital & Investors
                  </h4>
                </div>
                <div className="tech-adv-item">
                  <div className="tech-adv-icon badge-blue"><Factory size={20} /></div>
                  <span>Long-duration assets backed by industrial feedstock</span>
                </div>
                <div className="tech-adv-item">
                  <div className="tech-adv-icon badge-blue"><ShieldCheck size={20} /></div>
                  <span>Access to critical minerals without geological risk</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <PositioningSection
        title="We partner selectively. We deploy at scale."
        description="The opportunity is global, the feedstock is permanent, and the window for first-mover advantage is finite."
        buttons={[
          { label: "Start Project Intake", href: "/contact" }
        ]}
      />
    </div>
  );
}
