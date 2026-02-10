import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact"
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="home-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

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
      <section className="hero-panel reveal" aria-labelledby="contact-hero-title">
        <div className="hero-copy">
          <p className="kicker">CONTACT &amp; PROJECT INTAKE</p>
          <h1 id="contact-hero-title">Initiating Technical &amp; Commercial Engagement</h1>
          <p>
            We engage selectively with alumina producers, government institutions, and strategic
            investors where there is a clear mandate for remediation, critical-mineral recovery,
            or long-term infrastructure deployment.
          </p>
          <p>
            This intake process is structured to ensure technical relevance, confidentiality, and
            efficient use of time for all parties.
          </p>
        </div>
        <figure className="hero-media">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Alumina_refinery_pinjarra.jpg"
            alt="Industrial refinery infrastructure for technical and commercial project intake"
            loading="eager"
          />
        </figure>
      </section>

      <section className="content-section reveal" aria-labelledby="framing-title">
        <div className="section-heading">
          <p className="kicker">ENGAGEMENT FRAMING</p>
          <h2 id="framing-title">Institutional Intake Framework</h2>
        </div>
        {submitted ? (
          <article className="card intake-status success" role="status" aria-live="polite">
            <h3>Submission received</h3>
            <p>Your intake request has been recorded for structured review.</p>
          </article>
        ) : null}
        {hasError ? (
          <article className="card intake-status error" role="alert">
            <h3>Submission incomplete</h3>
            <p>Please complete all required fields and submit again.</p>
          </article>
        ) : null}
        <article className="card">
          <h3>STEP 1 — IDENTIFY YOUR ORGANIZATION TYPE</h3>
          <p>
            Please select the category that best describes your organization.
            This allows us to route your inquiry to the appropriate technical and commercial team.
          </p>
        </article>

        <div className="grid-3">
          <article className="card">
            <h3>A. Alumina Producers &amp; Refinery Operators</h3>
            <p>Primary focus: remediation, compliance, and asset-adjacent deployment</p>
            <p>Typical objectives</p>
            <BulletList
              items={[
                "Reduction of red-mud stockpiles",
                "Long-term residue liability management",
                "Evaluation of on-site or adjacent processing",
                "ESG and regulatory alignment"
              ]}
            />
            <p>Information requested</p>
            <BulletList
              items={[
                "Refinery location(s)",
                "Approximate annual red-mud generation",
                "Legacy stockpile estimate (if available)",
                "Preferred engagement model (JV / Licensing / BOO)"
              ]}
            />
          </article>
          <article className="card">
            <h3>B. Government &amp; Public-Sector Institutions</h3>
            <p>Primary focus: policy execution, remediation mandates, and national capability</p>
            <p>Typical objectives</p>
            <BulletList
              items={[
                "Critical-minerals security",
                "Industrial waste remediation programs",
                "Public-private partnership structuring",
                "Regional or national deployment frameworks"
              ]}
            />
            <p>Information requested</p>
            <BulletList
              items={[
                "Jurisdiction / ministry / agency",
                "Policy or program context",
                "Geographic scope (site / state / national)",
                "Intended role (regulatory, facilitation, co-investment)"
              ]}
            />
          </article>
          <article className="card">
            <h3>C. Strategic &amp; Institutional Investors</h3>
            <p>Primary focus: infrastructure, critical materials, and long-duration assets</p>
            <p>Typical objectives</p>
            <BulletList
              items={[
                "Equity or project-level investment",
                "Technology-backed infrastructure exposure",
                "ESG-aligned industrial assets",
                "Strategic mineral supply participation"
              ]}
            />
            <p>Information requested</p>
            <BulletList
              items={[
                "Investor type (PE, infra fund, sovereign, family office, strategic)",
                "Target geography",
                "Preferred investment structure",
                "Ticket size range (optional)"
              ]}
            />
          </article>
        </div>
      </section>

      <section className="content-section reveal" aria-labelledby="intake-form-title">
        <div className="section-heading">
          <p className="kicker">STEP 2 — PROJECT CONTEXT &amp; ENGAGEMENT REQUEST</p>
          <h2 id="intake-form-title">This step helps determine technical readiness and next actions.</h2>
        </div>
        <form className="card intake-form" method="post" action="/api/intake">
          <fieldset>
            <legend>Organization category (required)</legend>
            <div className="radio-grid">
              <label>
                <input type="radio" name="organizationType" value="Alumina Producers & Refinery Operators" required />
                Alumina Producers &amp; Refinery Operators
              </label>
              <label>
                <input type="radio" name="organizationType" value="Government & Public-Sector Institutions" required />
                Government &amp; Public-Sector Institutions
              </label>
              <label>
                <input type="radio" name="organizationType" value="Strategic & Institutional Investors" required />
                Strategic &amp; Institutional Investors
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
      </section>

      <section className="content-section reveal" aria-labelledby="next-title">
        <div className="section-heading">
          <p className="kicker">WHAT HAPPENS NEXT</p>
          <h2 id="next-title">A Structured Engagement Pathway</h2>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>1. Initial Review (7–10 days)</h3>
            <p>
              Submissions are reviewed by technical and commercial leads to confirm relevance,
              feasibility, and alignment.
            </p>
          </article>
          <article className="card">
            <h3>2. Confidential Technical Briefing</h3>
            <p>Qualified parties are invited to a structured technical session covering:</p>
            <BulletList
              items={[
                "Process architecture",
                "Deployment models",
                "Site-specific considerations",
                "ESG and regulatory interface"
              ]}
            />
          </article>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>3. Site &amp; Data Assessment</h3>
            <p>Where appropriate:</p>
            <BulletList
              items={[
                "Feedstock sampling and characterization",
                "Stockpile and logistics evaluation",
                "Integration and footprint assessment"
              ]}
            />
          </article>
          <article className="card">
            <h3>4. Commercial Structuring Discussion</h3>
            <p>Definition of:</p>
            <BulletList
              items={[
                "JV, Licensing, or BOO framework",
                "Roles, responsibilities, and timelines",
                "Indicative economics and governance"
              ]}
            />
          </article>
        </div>
        <article className="card">
          <h3>5. Formal Engagement</h3>
          <p>
            Execution of NDAs, term sheets, and project-specific workplans leading toward
            deployment or investment.
          </p>
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="expectation-title">
        <div className="section-heading">
          <p className="kicker">EXPECTATION SETTING</p>
          <h2 id="expectation-title">To ensure productive engagement:</h2>
        </div>
        <article className="card">
          <BulletList
            items={[
              "No unsolicited financial models or technical documentation",
              "Technology access follows structured diligence",
              "Priority given to projects with defined sites, mandates, or capital pathways"
            ]}
          />
        </article>
      </section>

      <section className="content-section reveal" aria-labelledby="governance-title">
        <div className="section-heading">
          <p className="kicker">CONFIDENTIALITY &amp; GOVERNANCE</p>
          <h2 id="governance-title">All qualified engagements proceed under:</h2>
        </div>
        <article className="card">
          <BulletList
            items={[
              "Mutual non-disclosure agreements",
              "Controlled information release",
              "Clear separation between technical review and commercial negotiation"
            ]}
          />
        </article>
      </section>

      <section className="positioning-section reveal" aria-labelledby="contact-close-title">
        <p className="kicker">PAGE CLOSE (POSITIONING)</p>
        <h2 id="contact-close-title">This is not a contact form.</h2>
        <p>
          It is the first step in deploying industrial-scale remediation and critical-minerals
          infrastructure.
        </p>
        <p>
          If you are prepared for a structured, technically grounded engagement, begin the
          process.
        </p>
      </section>
    </div>
  );
}
