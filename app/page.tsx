import type { Metadata } from "next";
import { VantaHero } from "@/components/ui/VantaHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PositioningSection } from "@/components/ui/PositioningSection";
import { Globe, MapPin, CheckCircle2, Factory, Network, ShieldCheck, Building2, Coins, Target } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Home"
};

export default function HomePage() {
  return (
    <div className="home-page">
      <VantaHero
        title="From Bauxite Residue to Critical Minerals"
        lead="A patented platform extracting rare earths and strategic metals from alkaline residue at scale, with zero new mining."
        primaryCta={{ label: "Explore Technology", href: "/technology" }}
        secondaryCta={{ label: "Discuss Partnership", href: "/contact" }}
      />

      <section className="bg-surface">
        <Container>
          <div className="metric-strip">
            <div className="metric-strip-item">
              <span className="metric-strip-value"><AnimatedCounter finalValue="4B+" /></span>
              <span className="metric-strip-label">Tonnes accumulated worldwide</span>
            </div>
            <div className="metric-strip-item">
              <span className="metric-strip-value"><AnimatedCounter finalValue="150M" /></span>
              <span className="metric-strip-label">Tonnes generated annually</span>
            </div>
            <div className="metric-strip-item">
              <span className="metric-strip-value"><AnimatedCounter finalValue="25+" /></span>
              <span className="metric-strip-label">Elements extractable per feedstock</span>
            </div>
            <div className="metric-strip-item">
              <span className="metric-strip-value"><AnimatedCounter finalValue="0" /></span>
              <span className="metric-strip-label">New mining required</span>
            </div>
          </div>
        </Container>
      </section>

      <Section id="problem-title">
        <div className="home-split home-split-problem" style={{ alignItems: 'center' }}>
          <div className="image-styled-content">
            <p className="image-styled-kicker">CORE CONCEPT</p>
            <h2 className="image-styled-title">From Constant Force to<br />Targeted Energy</h2>
            <p className="image-styled-paragraph">
              The technology platform under development takes a fundamentally different path. Instead of steady voltage, it employs a proprietary next-gen electrochemical reactor architecture to interact with water in a more precise and energy-efficient way — validated at approximately 38 kWh/kg, well below the 50–55 kWh/kg range of conventional electrolysis.
            </p>
            <div className="image-styled-quote">
              This shift, from constant force to targeted energy delivery, is the foundation of the platform.
            </div>
          </div>
          <figure className="home-media-frame home-media-frame-problem" style={{ borderRadius: '20px', minHeight: 'unset', aspectRatio: '4/3' }}>
            <img className="home-media-image home-media-image-problem" src="/home/THE PROBLEM.png" alt="Rare Earth storage stockpile" />
          </figure>
        </div>
      </Section>

      <Section id="solution-title">
        <div className="home-split home-split-solution" style={{ alignItems: 'center' }}>
          <figure className="home-media-frame home-media-frame-wide" style={{ borderRadius: '20px', minHeight: 'unset', aspectRatio: '4/3' }}>
            <img className="home-media-image home-media-image-solution" src="/home/s1.png" alt="Processing technology infrastructure" />
          </figure>
          <div className="image-styled-content">
            <p className="image-styled-kicker">THE SOLUTION</p>
            <h2 className="image-styled-title">Patented Low-Temperature<br />Extraction at Commercial Scale</h2>
            <p className="image-styled-paragraph">
              Red mud is an independent deposit. Advantageously, it is on the surface and does not require the cost of mining. Our process is a protected extraction breakthrough built to strictly operate on highly alkaline bauxite residue.
            </p>
            <div className="image-styled-quote">
              A cold hydrometallurgical extraction (&lt;100°C) process driving zero harmful emissions — ready for direct refinery or pond integration.
            </div>
          </div>
        </div>
      </Section>

      <section className="home-cinematic-band">
        <div className="home-cinematic-band__texture"></div>
        <div className="home-cinematic-band__glow"></div>
        <div className="home-cinematic-band__content">
          <Container>
            <div className="editorial-statement editorial-statement-cinematic">
              <p className="kicker home-cinematic-kicker">STRATEGIC INDEPENDENCE</p>
              <h2 className="home-cinematic-title">Securing North American Critical Minerals</h2>
              <p className="home-cinematic-copy">
                In Canada and the US, there is no significant industrial capacity for mining REEs.
                Rare Earth provides the competitive edge to make these regions independent producers without launching new mining operations.
              </p>
              <div className="home-cinematic-actions">
                <a href="/technology" className="btn btn-slide">Discover the Platform</a>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section id="outputs-title" style={{ padding: 'clamp(4rem, 8vw, 7rem) 0', background: '#fff' }}>
        <div className="container">
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div>
              <p className="image-styled-kicker">OUTPUTS</p>
              <h2 className="image-styled-title" style={{ margin: 0 }}>Strategic Materials<br/>Recovered from Waste</h2>
            </div>
            <p style={{ maxWidth: '38ch', fontSize: '1rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
              Every tonne of bauxite residue processed yields multiple high-value product streams — with zero new mining required.
            </p>
          </div>

          {/* Hero image strip */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '2rem', width: '100%', display: 'flex' }}>
            <img
              src="/home/OUTPUTS.png"
              alt="Strategic output materials"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>

          {/* 3 output cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {/* Card 1 - Critical Materials */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ height: '6px', background: 'linear-gradient(90deg, #2563eb, #60a5fa)' }} />
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}>
                    <Target size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Stream 01</span>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>Critical Materials</h3>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    { label: 'Scandium', sub: 'aerospace, solid oxide' },
                    { label: 'Rare Earth Elements', sub: 'yttrium, dysprosium' },
                    { label: 'Titanium-bearing', sub: 'compounds' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.625rem 0.875rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#2563eb', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0f172a' }}>{item.label}</span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>({item.sub})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 - Industrial By-Products */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ height: '6px', background: 'linear-gradient(90deg, #059669, #34d399)' }} />
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', flexShrink: 0 }}>
                    <Factory size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Stream 02</span>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>Industrial By-Products</h3>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    { label: 'Iron Oxides', sub: 'industrial pigments' },
                    { label: 'Aluminosilicate', sub: 'materials' },
                    { label: 'Precipitated Calcium', sub: 'carbonate' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.625rem 0.875rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#059669', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#0f172a' }}>{item.label}</span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>({item.sub})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 - Key Advantage */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ height: '6px', background: 'linear-gradient(90deg, #9a1f1f, #dc2626)' }} />
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626', flexShrink: 0 }}>
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Why It Matters</span>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>Key Advantage</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                  Rare earth is already mined, crushed, and surface-stored. There is no drilling, no blasting, no beneficiation, and mathematically zero tailings creation.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Zero New Mining', 'No Tailings', 'Surface-Stored'].map((tag) => (
                    <span key={tag} style={{ fontSize: '0.75rem', fontWeight: 700, color: '#dc2626', background: '#fef2f2', padding: '0.3rem 0.75rem', borderRadius: '999px', border: '1px solid #fecaca' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="strategic-marquee-section" id="strategic-title">
        <div className="strategic-marquee-header">
          <p className="kicker">WHY THIS MATTERS</p>
          <h2 className="strategic-marquee-heading">Beyond Economics</h2>
        </div>
        <div className="strategic-marquee-track-wrap">
          <div className="strategic-marquee-track">
            {/* Original set */}
            <article className="strategic-marquee-card">
              <figure className="strategic-marquee-img">
                <img src="/home/Critical Minerals Security.jpg" alt="Critical minerals security" />
              </figure>
              <h3 className="strategic-marquee-title">Critical Minerals Security</h3>
              <p className="strategic-marquee-copy">Creates domestic feedstock independence and fundamentally severs reliance on geopolitically concentrated supply chains.</p>
            </article>
            <article className="strategic-marquee-card">
              <figure className="strategic-marquee-img">
                <img src="/home/Environmental Resolution.png" alt="Environmental resolution" />
              </figure>
              <h3 className="strategic-marquee-title">Environmental Resolution</h3>
              <p className="strategic-marquee-copy">Permanent reduction of alkaline residue inventories, converting liabilities into revenue-generating assets.</p>
            </article>
            <article className="strategic-marquee-card">
              <figure className="strategic-marquee-img">
                <img src="/home/Industrial Circularity.webp" alt="Industrial circularity" />
              </figure>
              <h3 className="strategic-marquee-title">Industrial Circularity</h3>
              <p className="strategic-marquee-copy">Aligns with circular-economy mandates, turning waste management centers into revenue hubs globally.</p>
            </article>
            <article className="strategic-marquee-card">
              <figure className="strategic-marquee-img">
                <img src="/home/Strategic Independence.png" alt="Strategic independence" />
              </figure>
              <h3 className="strategic-marquee-title">Strategic Independence</h3>
              <p className="strategic-marquee-copy">Decouples North American supply chains from geopolitically concentrated rare earth producers without new extraction.</p>
            </article>
            {/* Duplicate set for seamless loop */}
            <article className="strategic-marquee-card" aria-hidden="true">
              <figure className="strategic-marquee-img">
                <img src="/home/Critical Minerals Security.jpg" alt="" />
              </figure>
              <h3 className="strategic-marquee-title">Critical Minerals Security</h3>
              <p className="strategic-marquee-copy">Creates domestic feedstock independence and fundamentally severs reliance on geopolitically concentrated supply chains.</p>
            </article>
            <article className="strategic-marquee-card" aria-hidden="true">
              <figure className="strategic-marquee-img">
                <img src="/home/Environmental Resolution.png" alt="" />
              </figure>
              <h3 className="strategic-marquee-title">Environmental Resolution</h3>
              <p className="strategic-marquee-copy">Permanent reduction of alkaline residue inventories, converting liabilities into revenue-generating assets.</p>
            </article>
            <article className="strategic-marquee-card" aria-hidden="true">
              <figure className="strategic-marquee-img">
                <img src="/home/Industrial Circularity.webp" alt="" />
              </figure>
              <h3 className="strategic-marquee-title">Industrial Circularity</h3>
              <p className="strategic-marquee-copy">Aligns with circular-economy mandates, turning waste management centers into revenue hubs globally.</p>
            </article>
            <article className="strategic-marquee-card" aria-hidden="true">
              <figure className="strategic-marquee-img">
                <img src="/home/Strategic Independence.png" alt="" />
              </figure>
              <h3 className="strategic-marquee-title">Strategic Independence</h3>
              <p className="strategic-marquee-copy">Decouples North American supply chains from geopolitically concentrated rare earth producers without new extraction.</p>
            </article>
          </div>
        </div>
      </section>

      <Section
        id="deployment-title"
        kicker="DEPLOYMENT MODEL"
        title="Built for Scale, Not Experimentation"
      >
        <div className="deployment-showcase">
          <article className="deployment-card">
            <figure className="deployment-card-media deployment-card-media-landscape">
              <img src="/home/Modular Plant Architecture.png" alt="Modular plant architecture" />
            </figure>
            <div className="deployment-card-body">
              <p className="deployment-card-kicker">
                <Building2 size={16} />
                Modular Plant Architecture
              </p>
              <h3 className="deployment-card-title">Built for phased scale-up from modular units to full commercial deployment</h3>
              <p className="deployment-card-copy">Engineering completed for 350,000 t/year processing units with a phased scale-up architecture allowing immediate 1M t/year+ facility deployment.</p>
            </div>
          </article>

          <article className="deployment-card">
            <figure className="deployment-card-media deployment-card-media-tight">
              <img src="/home/THE PROBLEM2.jpg" alt="Deep integration options" />
            </figure>
            <div className="deployment-card-body">
              <p className="deployment-card-kicker">
                <Network size={16} />
                Integration Options
              </p>
              <h3 className="deployment-card-title">Flexible deployment paths for refineries, pond sites, and regional hubs</h3>
              <p className="deployment-card-copy">Designed for direct integration on-site at existing refineries, natively adjacent to legacy pond infrastructure, or entirely decoupled as independent regional processing hubs.</p>
            </div>
          </article>

          <article className="deployment-card">
            <figure className="deployment-card-media deployment-card-media-product">
              <img src="/home/OUTPUTS.jpg" alt="Commercial structures" />
            </figure>
            <div className="deployment-card-body">
              <p className="deployment-card-kicker">
                <Coins size={16} />
                Commercial Structures
              </p>
              <h3 className="deployment-card-title">Designed for strategic partnerships, BOO models, and joint ventures</h3>
              <p className="deployment-card-copy">Flexible enterprise deployment modeling via Build-Own-Operate frameworks or strategic joint ventures with top-tier alumina producers.</p>
            </div>
          </article>
        </div>
      </Section>

      <PositioningSection
        title="We do not mine critical minerals."
        description="We unlock them responsibly from the world's largest industrial waste stream."
        buttons={[
          { label: "Explore Technology", href: "/technology" },
          { label: "View Outputs", href: "/outputs" }
        ]}
      />
    </div>
  );
}
