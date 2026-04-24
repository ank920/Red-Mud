import { Container } from "@/components/ui/Container";
import { TeamGrid } from "./TeamGrid";
import { Hero } from "@/components/ui/Hero";
import Link from 'next/link';

const executives = [
  {
    name: "Manish Kothary",
    role: "Chief Executive Officer",
    tags: ["Hydrogen Systems", "Scaling Ventures", "Industrial Infrastructure"],
    quote: "Developing scalable hydrogen and plasma-based energy systems for industrial decarbonisation.",
    background: "Entrepreneur and technology founder developing scalable hydrogen and plasma-based energy systems for industrial decarbonisation. Brings 25+ years of experience building and scaling ventures across technology, financial platforms and industrial infrastructure. Previously senior roles at Barclays Global Investors, Wells Fargo and Pacific Gas & Electric. M.Sc Computer Science, University of South Carolina; BE Electrical Engineering, IIT Roorkee.",
  },
  {
    name: "Vandit Verma",
    role: "President – Infrastructure & Energy Platforms",
    tags: ["Cross-Border Structuring", "Strategic Capital", "Waste-to-Energy"],
    quote: "Leads global infrastructure development and commercialisation of advanced energy platforms.",
    background: "Leads global infrastructure development and commercialisation of advanced energy platforms. Cross-border project structuring, strategic capital partnerships. Experience in hydrogen and low-carbon fuel systems, rare earth extraction and waste-to-energy infrastructure across North America, Europe and emerging markets. B.Eng Mechanical Engineering, Ryerson University, Canada.",
  },
  {
    name: "Igor Kuntzevitsky",
    role: "Chief Technology Officer",
    tags: ["Reactor Design", "IP Development", "Patented Pathways"],
    quote: "Inventor of multiple granted U.S. patents covering hydrogen production pathways and critical mineral recovery systems.",
    background: "Leads reactor architecture, hydrogen systems engineering and IP development. Inventor of multiple granted U.S. patents covering hydrogen production pathways and critical mineral recovery systems (hydrocarbon gas pathways, red mud processing). Expertise spans matrix reactor systems, controlled partial oxidation and integrated hydrogen purification. Masters in Mechanical Engineering, Uzbekistan.",
  },
  {
    name: "Harsha Jayaram",
    role: "Systems Integration Officer",
    tags: ["Project Development", "Carbon Capture", "Techno-Commercial"],
    quote: "30+ year energy industry executive with leadership roles across hydrogen, industrial gases, and renewable infrastructure.",
    background: "30+ year energy industry executive with leadership roles across hydrogen, industrial gases, carbon capture and renewable infrastructure. Former senior executive at Praxair/Linde, Ohmium, Tecnicas Reunidas and Waaree. Specialist in techno-commercial validation, hydrogen project structuring and large-scale energy infrastructure deployment.; BE Chemical Engineering, University of Mumbai.",
  },
  {
    name: "J. Gupta",
    role: "Head of R&D – India",
    tags: ["Electrochemical Modeling", "Reactor Optimisation", "Catalysts"],
    quote: "Leads hydrogen technology validation, reactor optimisation and scale-up for advanced energy platforms.",
    background: "Leads hydrogen technology validation, reactor optimisation and scale-up for GigaCore’s advanced energy platforms. 14+ years at leading energy companies across hydrogen, CCUS, catalysts and refinery-scale systems. Specialist in electrochemical modeling, advanced materials and techno-economic evaluation of hydrogen systems. PhD, IIT, Delhi.",
  },
  {
    name: "Prashanth Shetty",
    role: "Business Development",
    tags: ["Institutional Engagement", "Go-To-Market", "Enterprise Platforms"],
    quote: "Driving institutional investor engagement, commercialisation strategy and strategic partnerships.",
    background: "Leads business development across GigaCore’s hydrogen and energy infrastructure platform, driving institutional investor engagement, commercialisation strategy and strategic partnerships. Former executive leader at Verdigris, EMC and SAP with experience spanning global go-to-market strategy and enterprise technology platforms. MBA, The Wharton School; MS Engineering, Stanford University.",
  },
  {
    name: "Ajeet Saran",
    role: "Head of Projects & Operations",
    tags: ["Logistics & Mining", "Government Liaison", "Scale Execution"],
    quote: "Brings deep expertise in large-scale industrial project execution, operations management and government liaison.",
    background: "30+ years of industrial leadership across manufacturing, operations, logistics and regulatory interface. Spent nearly 25 years at Tata Steel in senior roles spanning mining, power, sales and supply chain. Brings deep expertise in large-scale industrial project execution, operations management and government liaison; BE Electrical Engineering, IIT-BHU; PG Supply Chain, XLRI.",
  },
  {
    name: "Gautam Ghosh",
    role: "Director Finance",
    tags: ["Financial Governance", "Taxation & Structuring", "Market Entry"],
    quote: "Extensive experience in financial governance, accounting systems, taxation and corporate structuring.",
    background: "Chartered Accountant with extensive experience in financial governance, accounting systems, taxation and corporate structuring. Former leadership roles at Motorola Solutions India, Coca-Cola India and Nestlé India. Earlier career at Price Waterhouse advising multinational companies on India market entry and financial structuring; B.Com (Hons), SRCC, Delhi University.",
  }
];

const advisors = [
  {
    name: "Upal Basu",
    role: "General Partner, NGP Capital",
    tags: ["Global Software", "Robotics", "Dual-Use Tech"],
    quote: "Managing over $2 billion globally... led 20+ investments with 10 successful exits.",
    background: "Upal Basu is a General Partner and Member at NGP Capital, managing over $2 billion globally. Leads North America office and global software investments under a “Convergence” thesis focused on robotics, industrial systems, and dual-use technologies. 25+ years experience, led 20+ investments with 10 successful exits. Stanford M.S. in Engineering and Harvard MBA, bringing deep capital markets expertise to advanced industrial technology strategy.",
  },
  {
    name: "Neeraj Agarwal",
    role: "Infrastructure & Operations Expert",
    tags: ["Energy & Oil", "Lender’s Engineer", "Independent Director"],
    quote: "Led large-scale projects ranging from $200M to over $1B.",
    background: "Senior project and operations leader with over 25 years of experience across energy, oil & gas, and infrastructure in India and the Middle East. Former COO (UAE) and Chief General Manager at Engineers India Limited. Led large-scale projects ranging from $200M to over $1B and served as Lender’s Independent Engineer on $10B+ projects. B.Tech IIT Roorkee and Certified Independent Director (IICA).",
  },
  {
    name: "Pranay Kothari",
    role: "Global Industrial Operations",
    tags: ["Supply Chain Structuring", "Plant Execution", "International Expansion"],
    quote: "Deep global industrial experience across large-scale manufacturing and supply chains spanning Europe, the United States, and Asia.",
    background: "Senior executive at Polyplex Corporation, bringing deep global industrial experience across large-scale manufacturing and supply chains spanning Europe, the United States, and Asia. Strong relationships across international industrial ecosystems. Offers guidance on international expansion, plant execution, and supply chain structuring to strengthen positioning with institutional stakeholders.",
  },
  {
    name: "Ranju Mehta",
    role: "Governance & Entrepreneurship Advisor",
    tags: ["NGO Leadership", "Business Incubation", "Economic Empowerment"],
    quote: "Awarded internationally as Best Entrepreneurship Educator by NFTE USA. Over 35 years of teaching experience.",
    background: "Director North of I Create India, an NGO promoting entrepreneurship among youth, marginalized sections of society, and Indian Army Veterans. Spearheaded eight Business Incubation Centres at different locations of the Army and mentored veterans to start businesses. Awarded internationally as Best Entrepreneurship Educator by NFTE USA. Over 35 years of teaching experience, superannuated as Vice-Principal of Kanoria Girls College. Strong believer in economic empowerment through entrepreneurship.",
  }
];

export default function TeamPage() {
  return (
    <div className="home-page team-page" style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
      
      {/* ── 1. Hero Section (Split Layout) ── */}
      <section className="tech-dashboard-section" style={{ background: '#ffffff', paddingTop: '8rem', paddingBottom: '2.5rem' }}>
        <Container>
          <div className="structural-grid" style={{ gap: '2rem' }}>
            <div>
              <p className="image-styled-kicker" style={{ color: '#ea580c', marginBottom: '1rem' }}>CORE GOVERNANCE</p>
              <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: '#0f172a', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                Leadership <br /> <span style={{ color: '#94a3b8' }}>& Team</span>
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
                A leadership structure organized across three functional pillars: technology development, infrastructure deployment, and corporate finance.
              </p>
              <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #ea580c', background: '#fff7ed', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic', color: '#c2410c', fontWeight: 500 }}>
                  &ldquo;Technical leadership anchored by the Chief Technology Officer responsible for reactor design and hydrogen systems engineering.&rdquo;
                </p>
              </div>
            </div>
            <div>
              <img src="/team/hero.jpg" alt="Team Guidance" style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Dark Stats Bar ── */}
      <section className="team-stats-bar">
        <Container>
          <div className="team-stats-grid">
            <div className="team-stat-item">
              <span className="team-stat-value">150+</span>
              <span className="team-stat-label">Years Experience</span>
            </div>
            <div className="team-stat-item">
              <span className="team-stat-value">3</span>
              <span className="team-stat-label">Functional Pillars</span>
            </div>
            <div className="team-stat-item">
              <span className="team-stat-value">10+</span>
              <span className="team-stat-label">Patents Granted</span>
            </div>
            <div className="team-stat-item">
              <span className="team-stat-value">Global</span>
              <span className="team-stat-label">Scale Deployments</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Intro Philosophy Block ── */}
      <section className="team-structural-block" style={{ background: '#f8fafc' }}>
        <Container>
          <div className="structural-grid">
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Our leadership brings decades of precise execution across <span style={{ color: '#ea580c' }}>energy, heavy engineering, and governance</span>.
              </h2>
            </div>
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <img src="/team/1.jpg" alt="Leadership Collaboration" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1.5rem' }} />
              <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Combined with deep technical expertise in advanced reactor design and electrochemical systems. We are building the infrastructure for the next industrial era.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. Executive Grid ── */}
      <section className="team-structural-block" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <Container>
          <div style={{ marginBottom: '2rem' }}>
            <p className="image-styled-kicker" style={{ color: '#ea580c' }}>LEADERSHIP</p>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Executive Team</h2>
          </div>
          
          <TeamGrid executives={executives} advisors={advisors} />
        </Container>
      </section>

      {/* ── 5. Core Technical Structural Block (Footer) ── */}
      <section className="team-structural-block" style={{ background: '#f8fafc' }}>
        <Container>
          <div className="structural-grid">
            <div>
              <p className="image-styled-kicker" style={{ color: '#ea580c' }}>CORE FOUNDATION</p>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', margin: '1rem 0', letterSpacing: '-0.02em' }}>
                Core Technical Team
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
                Anchoring our breakthrough reactor designs and engineering execution pathways.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span className="resume-tag highlight">Advanced Systems</span>
                <span className="resume-tag highlight">Scalable Economics</span>
              </div>
              <div className="resume-quote-box">
                <p className="resume-quote-text">
                  &ldquo;Pushing boundaries across critical minerals extraction and deep industrial decarbonization.&rdquo;
                </p>
              </div>
            </div>
            <div>
              <img src="/team/2.jpg" alt="Technical Team Hands" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. Final Call to Action ── */}
      <section style={{ backgroundColor: '#0f172a', padding: 'clamp(3rem, 8vw, 6rem) 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden', borderBottom: '4px solid #ea580c' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at center, rgba(234,88,12,0.1) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '100% 100%, 20px 20px, 20px 20px', opacity: 0.5 }}></div>
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Drive the next generation of industrial energy solutions.
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Explore how our advanced technology platforms and strategic partnerships are solving the most complex challenges in critical minerals and decarbonisation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/technology" className="btn btn-slide">
              Technology Details
            </Link>
            <Link href="/partnerships" className="btn btn-slide">
              Partnership Models
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
