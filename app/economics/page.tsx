"use client";

import { Hero } from "@/components/ui/Hero";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { DollarSign, Leaf, Shield } from "lucide-react";

const eco = (name: string) => encodeURI(`/eco/${name}`);

export default function EconomicsPage() {
  return (
    <div className="home-page economics-page">

      {/* ── Hero ── */}
      <Hero
        kicker="ECONOMICS"
        title="Economics of Strategic Materials Recovery"
        lead="Converting bauxite residue from a waste liability into a portfolio of high-value materials — without new mining."
        imageSrc="/eco/Hero.jpg"
        imageAlt="Economics of Strategic Materials Recovery"
        id="economics-hero-title"
        primaryCta={{ label: "Explore the Recovery Model", href: "#recovery-model" }}
      />

      {/* ── KPI Cards ── */}
      <section className="eco-kpi-section">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="eco-kpi-intro">
              <p className="image-styled-kicker">OVERVIEW</p>
              <p className="eco-kpi-intro-text">
                Bauxite residue is often treated as a long-term waste liability. Our model converts
                it into a revenue-generating resource by recovering multiple valuable material streams
                from every tonne processed. The opportunity is simple: turn an existing industrial
                waste stockpile into critical minerals, industrial inputs, and measurable
                environmental value.
              </p>
            </motion.div>
            <div className="eco-kpi-grid">
              {[
                { value: "~$257/t", label: "Indicative gross revenue per tonne processed" },
                { value: "~$143/t", label: "Indicative gross margin per tonne" },
                { value: "~56%", label: "Modelled gross margin" },
                { value: "1M t/yr", label: "Target commercial-scale processing capacity" },
              ].map((kpi, i) => (
                <motion.div key={i} variants={fadeUp} className="eco-kpi-card">
                  <span className="eco-kpi-value">{kpi.value}</span>
                  <p className="eco-kpi-label">{kpi.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Economic Logic ── */}
      <section
        className="tech-dashboard-section tech-sustainability eco-core-section"
        id="recovery-model"
      >
        <div className="container">
          <motion.div
            className="tech-sustainability-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-sustain-content">
              <p className="image-styled-kicker">THE CORE ECONOMIC LOGIC</p>
              <h2 className="tech-card-title">Multi-Product Recovery Model</h2>
              <p className="tech-card-desc">
                Every tonne of bauxite residue contains a mix of recoverable materials, including
                rare earth oxides, scandium, titanium dioxide, iron oxide, alumina, silica-rich
                materials, and other mineral fractions. Instead of relying on a single product
                stream, the economics are supported by a multi-product recovery model — where
                several outputs contribute to total value.
              </p>
              <div className="eco-table-wrap">
                <p className="eco-table-label">Indicative modelled value per tonne processed</p>
                <table className="eco-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Indicative Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Gross product revenue</td><td>~$257 / tonne</td></tr>
                    <tr><td>Operating cost</td><td>~$114 / tonne</td></tr>
                    <tr><td>Gross margin</td><td>~$143 / tonne</td></tr>
                    <tr><td>Gross margin percentage</td><td>~56%</td></tr>
                    <tr><td>Net platform margin after refinery share</td><td>~$105 / tonne</td></tr>
                  </tbody>
                </table>
                <p className="eco-table-footnote">
                  Figures are indicative model estimates and depend on feedstock composition,
                  recovery rates, reagent costs, energy costs, and market prices.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="tech-sustain-image eco-model-image-wrap">
              <img
                src={eco("Multi-Product Recovery Model.png")}
                alt="Multi-Product Recovery Model diagram"
                className="eco-model-image"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Value Stack ── */}
      <section className="tech-stages-section eco-value-section" id="value-stack">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-stages-header">
              <p className="image-styled-kicker">VALUE STACK</p>
              <h2 className="tech-stages-heading">Recovered Material Streams</h2>
              <p className="eco-stages-lead">
                Four primary output streams contribute to the multi-product economics of each tonne
                processed.
              </p>
            </motion.div>
            <div className="tech-stages-grid eco-value-grid">
              {[
                {
                  img: "Rare Earth Oxides.jpg",
                  alt: "Rare Earth Oxides",
                  kicker: "HIGH VALUE",
                  title: "Rare Earth Oxides",
                  desc: "Critical inputs for magnets, electronics, energy systems, and defence applications.",
                },
                {
                  img: "Scandium Oxide.jpg",
                  alt: "Scandium Oxide",
                  kicker: "HIGH VALUE",
                  title: "Scandium Oxide",
                  desc: "High-value material used in advanced alloys, aerospace, and next-generation industrial applications.",
                },
                {
                  img: "Titanium & Iron-Rich Materials.jpg",
                  alt: "Titanium and Iron-Rich Materials",
                  kicker: "VOLUME REVENUE",
                  title: "Titanium & Iron-Rich Materials",
                  desc: "Industrial product streams that add volume-based revenue and improve total recovery economics.",
                },
                {
                  img: "Alumina & Mineral Fractions.jpg",
                  alt: "Alumina and Mineral Fractions",
                  kicker: "BY-PRODUCT",
                  title: "Alumina & Mineral Fractions",
                  desc: "Additional by-products that support broader waste-to-resource conversion.",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="tech-stage-card">
                  <div className="tech-stage-img-wrap">
                    <img src={eco(item.img)} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="tech-stage-body">
                    <p className="tech-stage-kicker">{item.kicker}</p>
                    <h3>{item.title}</h3>
                    <p className="eco-value-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Economics Are Attractive ── */}
      <section className="tech-dashboard-section eco-why-section" id="why-economics">
        <div className="container">
          <motion.div
            className="tech-sustainability-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-sustain-content">
              <p className="image-styled-kicker">WHY THE ECONOMICS ARE ATTRACTIVE</p>
              <h2 className="tech-card-title">Four Structural Advantages</h2>
              <div className="eco-why-list">
                {[
                  {
                    num: "01",
                    title: "No new mining cost",
                    desc: "The feedstock already exists as bauxite residue. This removes many of the major cost, permitting, and environmental challenges associated with primary mining.",
                  },
                  {
                    num: "02",
                    title: "Multiple revenue streams",
                    desc: "The project is not dependent on only one commodity. Revenue can come from rare earth oxides, scandium oxide, titanium dioxide, iron-rich materials, alumina, and other recovered mineral outputs.",
                  },
                  {
                    num: "03",
                    title: "Waste liability becomes an asset",
                    desc: "For alumina refineries, bauxite residue storage is a long-term environmental and land-use challenge. Processing this residue can reduce liability while creating new economic value.",
                  },
                  {
                    num: "04",
                    title: "Scalable plant economics",
                    desc: "The model is designed to begin with a demonstration-scale facility and then scale toward commercial processing capacity. As throughput increases, fixed costs are spread across a larger material base.",
                  },
                ].map((item, i) => (
                  <div key={i} className="eco-why-item">
                    <span className="eco-why-num">{item.num}</span>
                    <div>
                      <h4 className="eco-why-heading">{item.title}</h4>
                      <p className="eco-why-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="tech-sustain-image">
              <img
                src={eco(
                  "YpUIsBOyNtnSmRbn8QDXjCV22mpOR-AdhRAba0-47A3RMb8CH1MByz_NRJy3KgXtN4ycAwkM2--ONPwdmKZuuV52XLoCRC3jfRGdBKw17M86GaPvyRQYttMc4liZb8Hp1LoNbKa_k19L2U6cwokzu08o52xpqZv-QC-2w-A1_nJo9Jlcl1D_XJzRua00Pvlr.jpg"
                )}
                alt="Commercial bauxite residue processing facility"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Commercial Scale Scenarios ── */}
      <section className="eco-scenarios-section" id="commercial-scale">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="eco-scenarios-header">
              <p className="image-styled-kicker eco-dark-kicker">COMMERCIAL SCALE SNAPSHOT</p>
              <h2 className="eco-scenarios-title">Processing up to 1 Million Tonnes per Year</h2>
              <p className="eco-scenarios-lead">
                As utilisation rises, fixed operating costs are absorbed over a larger production
                base — creating powerful operating leverage.
              </p>
            </motion.div>

            {/* Scenario rows */}
            <div className="eco-scenarios-cards">
              {[
                { label: "Conservative", util: "30%", tonnes: "300,000", revenue: "~$77M",  ebitda: "~$32M",  highlight: false },
                { label: "Base Case",    util: "60%", tonnes: "600,000", revenue: "~$154M", ebitda: "~$109M", highlight: true  },
                { label: "Upside",       util: "80%", tonnes: "800,000", revenue: "~$206M", ebitda: "~$161M", highlight: false },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`eco-scenario-card${s.highlight ? " eco-scenario-highlight" : ""}`}
                >
                  <div className="eco-scenario-row-label">
                    <span className="eco-scenario-label">{s.label}</span>
                    {s.highlight && <span className="eco-scenario-base-badge">Base</span>}
                    <span className="eco-scenario-util">{s.util}</span>
                  </div>
                  <div className="eco-scenario-metrics">
                    <div className="eco-scenario-metric">
                      <span className="eco-scenario-metric-val">{s.tonnes}</span>
                      <span className="eco-scenario-metric-lbl">t / yr</span>
                    </div>
                    <div className="eco-scenario-metric">
                      <span className="eco-scenario-metric-val">{s.revenue}</span>
                      <span className="eco-scenario-metric-lbl">Revenue</span>
                    </div>
                    <div className="eco-scenario-metric">
                      <span className="eco-scenario-metric-val">{s.ebitda}</span>
                      <span className="eco-scenario-metric-lbl">EBITDA</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image — bottom of section */}
            <motion.div variants={fadeUp} className="eco-scenarios-img-bottom">
              <img
                src={eco(
                  "2UQtEU5E-kNhgVdMoqJ2WJprCdijVhaIqD6WGaPlzI_MlmEknX-8_eaNO_E_z01AW_7TVVldnEn-xuwYdmV4VNjdInXqpRU5xwCxoQF0GJAOL7yyr5kLT7kT1-7r_dMJ90ioL2ejTw7J0XWNimCY9pXg_eu9tS10rSNyvNq7U8vdmS_X61OcKI6RaUAI_fps.jpg"
                )}
                alt="Commercial scale operations"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What Drives Value ── */}
      <section className="tech-dashboard-section eco-drivers-section" id="value-drivers">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="tech-advantage-header">
              <p className="image-styled-kicker">WHAT DRIVES VALUE</p>
              <h2 className="tech-card-title">Key Economic Drivers</h2>
              <p className="tech-card-desc" style={{ maxWidth: "58ch", margin: "1rem auto 0" }}>
                The most important variables shaping platform performance and margin at scale.
              </p>
            </motion.div>
            <div className="eco-drivers-grid">
              {[
                {
                  title: "Recovery Rate",
                  desc: "Higher recovery of rare earths, scandium, titanium, and iron-rich fractions improves revenue per tonne.",
                },
                {
                  title: "Product Pricing",
                  desc: "Rare earth and scandium pricing can materially affect upside economics.",
                },
                {
                  title: "Reagent & Energy Cost",
                  desc: "Chemical inputs and utilities are key cost components that directly impact operating margin.",
                },
                {
                  title: "Plant Utilisation",
                  desc: "Higher utilisation has a direct impact on EBITDA because fixed costs are spread across more processed tonnes.",
                },
                {
                  title: "Refinery Partnership Structure",
                  desc: "Revenue-sharing with the feedstock owner can align incentives while still leaving meaningful margin for the recovery platform.",
                },
              ].map((driver, i) => (
                <motion.div key={i} variants={fadeUp} className="eco-driver-card">
                  <span className="eco-driver-num">0{i + 1}</span>
                  <h3 className="eco-driver-title">{driver.title}</h3>
                  <p className="eco-driver-desc">{driver.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Economic Impact Beyond Revenue ── */}
      <section
        className="tech-dashboard-section tech-sustainability eco-impact-section"
        id="economic-impact"
      >
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.div variants={fadeUp} className="eco-impact-header">
              <p className="image-styled-kicker">ECONOMIC IMPACT BEYOND REVENUE</p>
              <h2 className="tech-card-title">Three Dimensions of Value</h2>
              <p className="tech-card-desc" style={{ maxWidth: "58ch", margin: "1rem auto 0" }}>
                The project creates value in three interconnected ways — financial, environmental,
                and strategic.
              </p>
            </motion.div>
            <div className="eco-impact-grid">
              {[
                {
                  icon: <DollarSign size={26} />,
                  title: "Financial Value",
                  desc: "Recovered materials generate revenue from an existing waste stream, creating direct economic returns from what was previously a cost centre.",
                  accent: false,
                },
                {
                  icon: <Leaf size={26} />,
                  title: "Environmental Value",
                  desc: "Processing bauxite residue can reduce long-term storage burden and support waste remediation across existing refinery sites.",
                  accent: true,
                },
                {
                  icon: <Shield size={26} />,
                  title: "Strategic Value",
                  desc: "Recovered rare earths, scandium, titanium, and iron-rich materials can support domestic supply chains for advanced manufacturing, clean energy, defence, aerospace, and industrial applications.",
                  accent: false,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`eco-impact-card${item.accent ? " eco-impact-card--accent" : ""}`}
                >
                  <div className="eco-impact-icon">{item.icon}</div>
                  <h3 className="eco-impact-title">{item.title}</h3>
                  <p className="eco-impact-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Closing Visual ── */}
      <section className="eco-closing-visual">
        <div className="eco-closing-bg" aria-hidden="true">
          <img src={eco("Short Closing Statement.jpg")} alt="" />
          <div className="eco-closing-overlay" />
        </div>
        <div className="container eco-closing-content">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
          >
            <motion.p variants={fadeUp} className="image-styled-kicker eco-dark-kicker">
              CIRCULAR ECONOMY MODEL
            </motion.p>
            <motion.h2 variants={fadeUp} className="eco-closing-heading">
              Less waste. No new mining.
              <br />
              Higher-value domestic supply chains.
            </motion.h2>
            <motion.div variants={fadeUp} className="eco-closing-cta-row">
              <a href="/technology" className="btn btn-slide">
                View Technology
              </a>
              <a href="/partnerships" className="btn btn-ghost-white">
                Explore Partnerships
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
