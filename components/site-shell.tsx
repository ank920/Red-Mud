"use client";

import Link from "next/link";
import { Footer } from "@/components/ui/Footer";
import { useState } from "react";
import type { ReactNode } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
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
              <div className="menu-toggle-icon">
                <span className="menu-toggle-bar" />
                <span className="menu-toggle-bar" />
                <span className="menu-toggle-bar" />
              </div>
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

        <Footer />
      </div>
    </>
  );
}
