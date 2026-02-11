import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/ui/List";
import { PositioningSection } from "@/components/ui/PositioningSection";

export const metadata: Metadata = {
  title: "Contact"
};

type ContactPageProps = {
  searchParams?: {
    submitted?: string;
    error?: string;
  };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const submitted = searchParams?.submitted === "1";
  const hasError = searchParams?.error === "1";

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

      <Section
        id="framing-title"
        kicker="ENGAGEMENT FRAMING"
        title="Institutional Intake Framework"
      >
        {submitted ? (
          <Card className="intake-status success mb-6" title="Submission received">
            <p>Your intake request has been recorded for structured review.</p>
          </Card>
        ) : null}
        {hasError ? (
          <Card className="intake-status error mb-6" title="Submission incomplete">
            <p>Please complete all required fields and submit again.</p>
          </Card>
        ) : null}
        <Card title="STEP 1 — IDENTIFY YOUR ORGANIZATION TYPE">
          <p>
            Please select the category that best describes your organization.
            This allows us to route your inquiry to the appropriate technical and commercial team.
          </p>
        </Card>

        <div className="grid-3 mt-6">
          <Card title="A. Alumina Producers & Refinery Operators">
            <p className="font-semibold text-sm mb-2">Primary focus: remediation, compliance, and asset-adjacent deployment</p>
            <p className="font-semibold text-sm mb-2">Typical objectives</p>
            <List
              items={[
                "Reduction of red-mud stockpiles",
                "Long-term residue liability management",
                "Evaluation of on-site or adjacent processing",
                "ESG and regulatory alignment"
              ]}
            />
            <p className="font-semibold text-sm mt-4 mb-2">Information requested</p>
            <List
              items={[
                "Refinery location(s)",
                "Approximate annual red-mud generation",
                "Legacy stockpile estimate (if available)",
                "Preferred engagement model (JV / Licensing / BOO)"
              ]}
            />
          </Card>
          <Card title="B. Government & Public-Sector Institutions">
            <p className="font-semibold text-sm mb-2">Primary focus: policy execution, remediation mandates, and national capability</p>
            <p className="font-semibold text-sm mb-2">Typical objectives</p>
            <List
              items={[
                "Critical-minerals security",
                "Industrial waste remediation programs",
                "Public-private partnership structuring",
                "Regional or national deployment frameworks"
              ]}
            />
            <p className="font-semibold text-sm mt-4 mb-2">Information requested</p>
            <List
              items={[
                "Jurisdiction / ministry / agency",
                "Policy or program context",
                "Geographic scope (site / state / national)",
                "Intended role (regulatory, facilitation, co-investment)"
              ]}
            />
          </Card>
          <Card title="C. Strategic & Institutional Investors">
            <p className="font-semibold text-sm mb-2">Primary focus: infrastructure, critical materials, and long-duration assets</p>
            <p className="font-semibold text-sm mb-2">Typical objectives</p>
            <List
              items={[
                "Equity or project-level investment",
                "Technology-backed infrastructure exposure",
                "ESG-aligned industrial assets",
                "Strategic mineral supply participation"
              ]}
            />
            <p className="font-semibold text-sm mt-4 mb-2">Information requested</p>
            <List
              items={[
                "Investor type (PE, infra fund, sovereign, family office, strategic)",
                "Target geography",
                "Preferred investment structure",
                "Ticket size range (optional)"
              ]}
            />
          </Card>
        </div>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/CONTACT/CONTACT2.webp"
            alt="Organization Types and Engagement Framework"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="intake-form-title"
        kicker="STEP 2 — PROJECT CONTEXT & ENGAGEMENT REQUEST"
        title="This step helps determine technical readiness and next actions."
      >
        <form className="card intake-form" method="post" action="/api/intake">
          <fieldset>
            <legend>Organization category (required)</legend>
            <div className="radio-grid">
              <label>
                <input type="radio" name="organizationType" value="Alumina Producers & Refinery Operators" required />
                Alumina Producers & Refinery Operators
              </label>
              <label>
                <input type="radio" name="organizationType" value="Government & Public-Sector Institutions" required />
                Government & Public-Sector Institutions
              </label>
              <label>
                <input type="radio" name="organizationType" value="Strategic & Institutional Investors" required />
                Strategic & Institutional Investors
              </label>
            </div>
          </fieldset>

          <div className="form-grid">
            <label>
              Project or site description
              <textarea name="projectDescription" required minLength={20} />
            </label>
            <label>
              Intended timeline
              <input name="intendedTimeline" type="text" required minLength={3} />
            </label>
            <label>
              Primary motivation (remediation / minerals / policy / investment)
              <input name="primaryMotivation" type="text" required minLength={3} />
            </label>
            <label>
              Confidentiality requirements
              <textarea name="confidentialityRequirements" required minLength={10} />
            </label>
            <label>
              Available chemical or mineralogical data
              <textarea name="chemicalData" />
            </label>
            <label>
              Prior studies or internal assessments
              <textarea name="priorStudies" />
            </label>
            <label>
              Regulatory constraints or milestones
              <textarea name="regulatoryConstraints" />
            </label>
            <label>
              Contact email
              <input name="contactEmail" type="email" required />
            </label>
            <label>
              Organization name
              <input name="organizationName" type="text" required minLength={2} />
            </label>
          </div>

          <p className="form-note">
            Note:
            Submission of this form does not constitute a commercial offer, investment solicitation,
            or technology license.
          </p>
          <button type="submit">Submit project intake</button>
        </form>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/CONTACT/CONTACT3.webp"
            alt="Project Intake Form"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="next-title"
        kicker="WHAT HAPPENS NEXT"
        title="A Structured Engagement Pathway"
      >
        <div className="grid-2">
          <Card title="1. Initial Review (7–10 days)">
            <p>
              Submissions are reviewed by technical and commercial leads to confirm relevance,
              feasibility, and alignment.
            </p>
          </Card>
          <Card title="2. Confidential Technical Briefing">
            <p>Qualified parties are invited to a structured technical session covering:</p>
            <List
              items={[
                "Process architecture",
                "Deployment models",
                "Site-specific considerations",
                "ESG and regulatory interface"
              ]}
            />
          </Card>
        </div>
        <div className="grid-2 mt-6">
          <Card title="3. Site & Data Assessment">
            <p>Where appropriate:</p>
            <List
              items={[
                "Feedstock sampling and characterization",
                "Stockpile and logistics evaluation",
                "Integration and footprint assessment"
              ]}
            />
          </Card>
          <Card title="4. Commercial Structuring Discussion">
            <p>Definition of:</p>
            <List
              items={[
                "JV, Licensing, or BOO framework",
                "Roles, responsibilities, and timelines",
                "Indicative economics and governance"
              ]}
            />
          </Card>
        </div>
        <Card title="5. Formal Engagement" className="mt-6">
          <p>
            Execution of NDAs, term sheets, and project-specific workplans leading toward
            deployment or investment.
          </p>
        </Card>
        <figure className="image-card image-card-large mt-6">
          <img
            src="/CONTACT/WHAT HAPPENS NEXT.jpg"
            alt="Structured Engagement Pathway"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="expectation-title"
        kicker="EXPECTATION SETTING"
        title="To ensure productive engagement:"
      >
        <Card>
          <List
            items={[
              "No unsolicited financial models or technical documentation",
              "Technology access follows structured diligence",
              "Priority given to projects with defined sites, mandates, or capital pathways"
            ]}
          />
        </Card>
      </Section>

      <Section
        id="governance-title"
        kicker="CONFIDENTIALITY & GOVERNANCE"
        title="All qualified engagements proceed under:"
      >
        <Card>
          <List
            items={[
              "Mutual non-disclosure agreements",
              "Controlled information release",
              "Clear separation between technical review and commercial negotiation"
            ]}
          />
        </Card>
      </Section>


      <Section
        id="clarification-title"
        kicker="CLARIFICATION"
        title="Purpose of Enquiry"
      >
        <Card>
          <p className="font-semibold mb-2">This is not a generic contact form.</p>
          <p>
            It is the first step in deploying industrial-scale remediation and critical-minerals
            infrastructure. If you are prepared for a structured, technically grounded
            engagement, begin the process.
          </p>
        </Card>
      </Section>
    </div>
  );
}
