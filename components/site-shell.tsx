"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/process", label: "Process" },
  { href: "/outputs", label: "Outputs" },
  { href: "/esg", label: "ESG" },
  { href: "/india-strategy", label: "India Strategy" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" }
];

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="site-shell">
        <header className="site-header" aria-label="Primary">
          <div className="container site-header-inner">
            <Link className="brand" href="/" aria-label="Red Mud home" onClick={() => setMobileNavOpen(false)}>
              Red Mud
            </Link>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={mobileNavOpen}
              aria-controls="primary-navigation"
              onClick={() => setMobileNavOpen((prev) => !prev)}
            >
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-label">Menu</span>
            </button>

            <nav aria-label="Main navigation" id="primary-navigation" className={mobileNavOpen ? "nav-open" : ""}>
              <ul className="nav-list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={() => setMobileNavOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main id="content" className="site-main container" tabIndex={-1}>
          {children}
        </main>

        <footer className="site-footer" aria-label="Site footer">
          <div className="container footer-grid">
            <section className="footer-positioning" aria-labelledby="footer-positioning-title">
              <h2 id="footer-positioning-title">Strategic Positioning</h2>
              <p>
                Red mud—bauxite residue from alumina refining—is one of the largest unmanaged
                industrial waste streams on earth. Our platform transforms this environmental
                liability into a domestic source of critical minerals with infrastructure-grade
                reliability.
              </p>
              <p className="credibility-note">
                Built for institutional partners focused on long-term supply security, operational
                rigor, and responsible industrial outcomes.
              </p>
            </section>

            <nav className="footer-nav" aria-label="Secondary navigation">
              <h2>Explore</h2>
              <ul>
                {navigation.map((item) => (
                  <li key={`footer-${item.href}`}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="container legal-row" role="contentinfo">
            <p>© {new Date().getFullYear()} Red Mud Critical Minerals Platform. All rights reserved.</p>
            <ul>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
