"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Hero } from "@/components/ui/Hero";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import {
  Building2, Landmark, Briefcase,
  ClipboardList, MessageSquare, Scale,
  ArrowRightCircle, ShieldCheck, CheckCircle2, FileSearch, Handshake
} from "lucide-react";

function ContactPageInner() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "1";
  const hasError = searchParams.get("error") === "1";

  return (
    <div className="home-page contact-page">
      <Hero
        kicker="CONTACT & PROJECT INTAKE"
        title="Initiating Technical & Commercial Engagement"
        imageSrc="/CONTACT/CONTACT.webp"
        imageAlt="Contact and Project Intake"
        id="contact-hero-title"
      >
        <p>
          We engage selectively with alumina producers, government institutions, and strategic
          investors where there is a clear mandate for remediation, critical-mineral recovery,
          or long-term infrastructure deployment.
        </p>
        <p>
          This intake process is structured to ensure technical relevance, confidentiality, and
          efficient use of time for all parties.
        </p>
      </Hero>

      {/* ── Section 1: Who We Work With ── */}
      <section className="tech-stages-section" id="framing-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-stages-header">
              <p className="image-styled-kicker">ENGAGEMENT FRAMING</p>
              <h2 className="tech-stages-heading">Who We Work With</h2>
            </motion.div>

            <div className="tech-stages-grid">
              {/* A: Alumina Producers */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/CONTACT/ORGANIZATION TYPE A.jpg" alt="Alumina Producers" loading="lazy" />
                  <div className="tech-stage-badge" style={{ background: '#2563eb' }}>A</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker" style={{ color: '#9a1f1f' }}>ORGANIZATION TYPE A</p>
                  <h3>Alumina Producers & Refinery Operators</h3>
                  <p className="tech-stage-objective">Primary focus: remediation, compliance, and asset-adjacent deployment.</p>
                  <ul className="tech-stage-list">
                    <li>Reduction of rare-earth stockpiles</li>
                    <li>Long-term residue liability management</li>
                    <li>Evaluation of on-site or adjacent processing</li>
                    <li>ESG and regulatory alignment</li>
                  </ul>
                  <div className="tech-stage-highlight">Typical models: JV, BOO, or Licensing</div>
                </div>
              </motion.div>

              {/* B: Government */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/CONTACT/ORGANIZATION TYPE B.jpg" alt="Government Institutions" loading="lazy" />
                  <div className="tech-stage-badge" style={{ background: '#16a34a' }}>B</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker" style={{ color: '#9a1f1f' }}>ORGANIZATION TYPE B</p>
                  <h3>Government & Public-Sector Institutions</h3>
                  <p className="tech-stage-objective">Primary focus: policy execution, remediation mandates, and national capability.</p>
                  <ul className="tech-stage-list">
                    <li>Critical-minerals security</li>
                    <li>Industrial waste remediation programs</li>
                    <li>Public-private partnership structuring</li>
                    <li>Regional or national deployment frameworks</li>
                  </ul>
                  <div className="tech-stage-highlight">Jurisdiction / ministry / agency engagement</div>
                </div>
              </motion.div>

              {/* C: Investors */}
              <motion.div variants={fadeUp} className="tech-stage-card">
                <div className="tech-stage-img-wrap">
                  <img src="/CONTACT/ORGANIZATION TYPE C.jpg" alt="Strategic Investors" loading="lazy" />
                  <div className="tech-stage-badge" style={{ background: '#7c3aed' }}>C</div>
                </div>
                <div className="tech-stage-body">
                  <p className="tech-stage-kicker" style={{ color: '#9a1f1f' }}>ORGANIZATION TYPE C</p>
                  <h3>Strategic & Institutional Investors</h3>
                  <p className="tech-stage-objective">Primary focus: infrastructure, critical materials, and long-duration assets.</p>
                  <ul className="tech-stage-list">
                    <li>Equity or project-level investment</li>
                    <li>Technology-backed infrastructure exposure</li>
                    <li>ESG-aligned industrial assets</li>
                    <li>Strategic mineral supply participation</li>
                  </ul>
                  <div className="tech-stage-highlight">PE, infra fund, sovereign, or strategic</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Contact Form ── */}
      <section className="tech-dashboard-section" style={{ background: '#f8fafc' }} id="intake-form-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="image-styled-kicker">STEP 2 — PROJECT CONTEXT & ENGAGEMENT REQUEST</p>
              <h2 className="tech-card-title">Submit Your Inquiry</h2>
              <p className="tech-card-desc" style={{ maxWidth: '60ch', margin: '1rem auto 0' }}>
                This step helps determine technical readiness and next actions. All submissions are treated as confidential.
              </p>
            </motion.div>

            {submitted && (
              <motion.div variants={fadeUp} style={{
                background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                border: '1px solid #6ee7b7',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#065f46',
                fontWeight: 600,
              }}>
                <CheckCircle2 size={20} />
                Submission received — your intake request has been recorded for structured review.
              </motion.div>
            )}
            {hasError && (
              <motion.div variants={fadeUp} style={{
                background: '#fef2f2',
                border: '1px solid #fca5a5',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#991b1b',
                fontWeight: 600,
              }}>
                Please complete all required fields and submit again.
              </motion.div>
            )}

            <motion.div variants={fadeUp}>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: What Happens Next ── */}
      <section className="tech-dashboard-section tech-advantage-section" id="next-title">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-advantage-header">
              <p className="image-styled-kicker">WHAT HAPPENS NEXT</p>
              <h2 className="tech-card-title">A Structured Engagement Pathway</h2>
              <p className="tech-card-desc" style={{ maxWidth: '60ch', margin: '1rem auto 0' }}>
                Every qualified submission follows a defined process — no speculative outreach, no undefined timelines.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
                marginTop: '2.5rem',
              }}
            >
              {[
                {
                  step: '01',
                  icon: <ClipboardList size={24} />,
                  title: 'Initial Review',
                  sub: '7–10 days',
                  desc: 'Submissions are reviewed by technical and commercial leads to confirm relevance, feasibility, and alignment.',
                  color: '#2563eb',
                  bg: '#eff6ff',
                },
                {
                  step: '02',
                  icon: <MessageSquare size={24} />,
                  title: 'Confidential Technical Briefing',
                  sub: 'Qualified parties only',
                  desc: 'A structured session covering process architecture, deployment models, site-specific considerations, and ESG interface.',
                  color: '#059669',
                  bg: '#ecfdf5',
                },
                {
                  step: '03',
                  icon: <FileSearch size={24} />,
                  title: 'Site & Data Assessment',
                  sub: 'Where appropriate',
                  desc: 'Feedstock sampling, stockpile and logistics evaluation, and integration and footprint assessment.',
                  color: '#d97706',
                  bg: '#fffbeb',
                },
                {
                  step: '04',
                  icon: <Scale size={24} />,
                  title: 'Commercial Structuring',
                  sub: 'JV / Licensing / BOO',
                  desc: 'Definition of roles, responsibilities, timelines, indicative economics, and governance frameworks.',
                  color: '#7c3aed',
                  bg: '#f5f3ff',
                },
                {
                  step: '05',
                  icon: <Handshake size={24} />,
                  title: 'Formal Engagement',
                  sub: 'NDAs, term sheets',
                  desc: 'Execution of NDAs, term sheets, and project-specific workplans leading toward deployment or investment.',
                  color: '#9a1f1f',
                  bg: '#fff5f5',
                },
              ].map((item) => (
                <div key={item.step} style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  position: 'relative',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: item.bg, color: item.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>{item.icon}</div>
                    <div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Step {item.step}</span>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: '#0f172a', lineHeight: 1.3 }}>{item.title}</p>
                    </div>
                  </div>
                  <span style={{
                    display: 'inline-block', fontSize: '0.75rem', fontWeight: 600,
                    color: item.color, background: item.bg,
                    padding: '0.2rem 0.65rem', borderRadius: '999px', width: 'fit-content',
                  }}>{item.sub}</span>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Governance ── */}
      <section className="tech-dashboard-section" style={{ background: '#f0f5f9' }} id="governance-title">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
          >
            <img
              src="/CONTACT/CONFIDENTIALITY.png"
              alt="Confidentiality and Governance"
              style={{ width: '100%', display: 'block' }}
            />
          </motion.div>
        </div>
      </section>

      <PositioningSection
        title="This is not a generic contact form."
        description="It is the first step in deploying industrial-scale remediation and critical-minerals infrastructure. If you are prepared for a structured, technically grounded engagement — begin the process."
        buttons={[
          { label: "Submit Inquiry", href: "#intake-form-title" },
          { label: "Explore Technology", href: "/technology" }
        ]}
        id="contact-close-title"
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div />}>
      <ContactPageInner />
    </Suspense>
  );
}
