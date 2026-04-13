import type { Metadata } from "next";
import { VantaHero } from "@/components/ui/VantaHero";
import { Container } from "@/components/ui/Container";
import { TeamGrid } from "./TeamGrid";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Leadership and Governance Structure of Rare Earth",
};

const executives = [
  {
    name: "Manish Kothary",
    role: "Chief Executive Officer",
    background: "Entrepreneur and technology founder developing scalable hydrogen and plasma-based energy systems for industrial decarbonisation. Brings 25+ years of experience building and scaling ventures across technology, financial platforms and industrial infrastructure. Previously senior roles at Barclays Global Investors, Wells Fargo and Pacific Gas & Electric. M.Sc Computer Science, University of South Carolina; BE Electrical Engineering, IIT Roorkee.",
  },
  {
    name: "Vandit Verma",
    role: "President – Infrastructure & Energy Platforms",
    background: "Leads global infrastructure development and commercialisation of advanced energy platforms. Cross-border project structuring, strategic capital partnerships. Experience in hydrogen and low-carbon fuel systems, rare earth extraction and waste-to-energy infrastructure across North America, Europe and emerging markets. B.Eng Mechanical Engineering, Ryerson University, Canada.",
  },
  {
    name: "Igor Kuntzevitsky",
    role: "Chief Technology Officer (Hydrogen & Reactor Systems)",
    background: "Leads reactor architecture, hydrogen systems engineering and IP development. Inventor of multiple granted U.S. patents covering hydrogen production pathways and critical mineral recovery systems (hydrocarbon gas pathways, red mud processing). Expertise spans matrix reactor systems, controlled partial oxidation and integrated hydrogen purification. Masters in Mechanical Engineering, Uzbekistan.",
  },
  {
    name: "Harsha Jayaram",
    role: "Systems Integration & Project Development Officer",
    background: "30+ year energy industry executive with leadership roles across hydrogen, industrial gases, carbon capture and renewable infrastructure. Former senior executive at Praxair/Linde, Ohmium, Tecnicas Reunidas and Waaree. Specialist in techno-commercial validation, hydrogen project structuring and large-scale energy infrastructure deployment.; BE Chemical Engineering, University of Mumbai.",
  },
  {
    name: "J. Gupta",
    role: "Head of R&D – India",
    background: "Leads hydrogen technology validation, reactor optimisation and scale-up for GigaCore’s advanced energy platforms. 14+ years at leading energy companies across hydrogen, CCUS, catalysts and refinery-scale systems. Specialist in electrochemical modeling, advanced materials and techno-economic evaluation of hydrogen systems. PhD, IIT, Delhi.",
  },
  {
    name: "Prashanth Shetty",
    role: "Business Development",
    background: "Leads business development across GigaCore’s hydrogen and energy infrastructure platform, driving institutional investor engagement, commercialisation strategy and strategic partnerships. Former executive leader at Verdigris, EMC and SAP with experience spanning global go-to-market strategy and enterprise technology platforms. MBA, The Wharton School; MS Engineering, Stanford University.",
  },
  {
    name: "Ajeet Saran",
    role: "Head of Projects & Operations",
    background: "30+ years of industrial leadership across manufacturing, operations, logistics and regulatory interface. Spent nearly 25 years at Tata Steel in senior roles spanning mining, power, sales and supply chain. Brings deep expertise in large-scale industrial project execution, operations management and government liaison; BE Electrical Engineering, IIT-BHU; PG Supply Chain, XLRI.",
  },
  {
    name: "Gautam Ghosh",
    role: "Director Finance",
    background: "Chartered Accountant with extensive experience in financial governance, accounting systems, taxation and corporate structuring. Former leadership roles at Motorola Solutions India, Coca-Cola India and Nestlé India. Earlier career at Price Waterhouse advising multinational companies on India market entry and financial structuring; B.Com (Hons), SRCC, Delhi University.",
  }
];

const advisors = [
  {
    name: "Upal Basu",
    role: "General Partner, NGP Capital",
    background: "Upal Basu is a General Partner and Member at NGP Capital, managing over $2 billion globally. Leads North America office and global software investments under a “Convergence” thesis focused on robotics, industrial systems, and dual-use technologies. 25+ years experience, led 20+ investments with 10 successful exits. Stanford M.S. in Engineering and Harvard MBA, bringing deep capital markets expertise to advanced industrial technology strategy.",
  },
  {
    name: "Neeraj Agarwal",
    role: "Infrastructure & Operations Expert",
    background: "Senior project and operations leader with over 25 years of experience across energy, oil & gas, and infrastructure in India and the Middle East. Former COO (UAE) and Chief General Manager at Engineers India Limited. Led large-scale projects ranging from $200M to over $1B and served as Lender’s Independent Engineer on $10B+ projects. B.Tech IIT Roorkee and Certified Independent Director (IICA).",
  },
  {
    name: "Pranay Kothari",
    role: "Global Industrial Operations",
    background: "Senior executive at Polyplex Corporation, bringing deep global industrial experience across large-scale manufacturing and supply chains spanning Europe, the United States, and Asia. Strong relationships across international industrial ecosystems. Offers guidance on international expansion, plant execution, and supply chain structuring to strengthen positioning with institutional stakeholders.",
  }
];

export default function TeamPage() {
  return (
    <div className="home-page team-page">
      <VantaHero
        kicker="OUR TEAM"
        title="Leadership Structure"
        id="team-hero-title"
      >
        <p>
          The leadership structure is organized across three functional pillars: technology development, 
          infrastructure deployment, and corporate finance. Technical leadership is anchored by the Chief 
          Technology Officer responsible for reactor design, hydrogen systems engineering and intellectual 
          property development. 
        </p>
        <p>
          Infrastructure development, project execution and commercialisation are led by senior 
          executives with experience delivering large-scale industrial and energy infrastructure projects. 
          Collectively the team brings 150+ years of combined experience across energy, infrastructure, 
          and advanced industrial systems.
        </p>
      </VantaHero>

      <section className="team-section">
        <Container>
          <div className="team-section-heading">
            <h2>Executive Leadership</h2>
            <p className="text-dim">Driving the commercialisation of advanced energy platforms.</p>
          </div>
          
          <TeamGrid executives={executives} advisors={advisors} />
        </Container>
      </section>
    </div>
  );
}
