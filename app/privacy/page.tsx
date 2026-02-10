import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy"
};

export default function PrivacyPage() {
  return (
    <section className="content-section" aria-labelledby="privacy-title">
      <div className="section-heading">
        <p className="kicker">Privacy</p>
        <h1 id="privacy-title">Privacy Notice</h1>
      </div>
      <article className="card">
        <p>
          This page provides the privacy and information-handling notice for structured engagement
          requests submitted through this website.
        </p>
        <p>
          Formal engagement workflows, controlled information release, and confidentiality terms
          are handled through project-specific agreements.
        </p>
      </article>
    </section>
  );
}
