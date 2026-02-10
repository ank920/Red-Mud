import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms"
};

export default function TermsPage() {
  return (
    <section className="content-section" aria-labelledby="terms-title">
      <div className="section-heading">
        <p className="kicker">Terms</p>
        <h1 id="terms-title">Terms of Use</h1>
      </div>
      <article className="card">
        <p>
          Access to this website and any follow-on engagement process is governed by applicable
          legal terms, diligence protocols, and project-specific agreements.
        </p>
        <p>
          Submission of intake information does not constitute a commercial offer, investment
          solicitation, or technology license.
        </p>
      </article>
    </section>
  );
}
