"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/ui/Footer";
import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/technology", label: "Technology" },
  { href: "/outputs", label: "Outputs" },
  { href: "/esg", label: "ESG" },
  { href: "/india-strategy", label: "India Strategy" },
  { href: "/team", label: "Our Team" },
  { href: "/partnerships", label: "Partnerships" },
];

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll-aware header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Esc key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileNavOpen) {
        setMobileNavOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileNavOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileNavOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileNavOpen) return;
    const menu = menuRef.current;
    if (!menu) return;
    const focusableElements = menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) { e.preventDefault(); lastElement?.focus(); }
      } else {
        if (document.activeElement === lastElement) { e.preventDefault(); firstElement?.focus(); }
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [mobileNavOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="site-shell">
        <header className={`site-header${scrolled ? " scrolled" : ""}${mobileNavOpen ? " menu-open" : ""}`} aria-label="Primary">
          <div className="container site-header-inner">
            {/* Brand logotype: RARE in orange, EARTH in dark */}
            <Link className="brand" href="/" aria-label="Rare Earth home" onClick={() => setMobileNavOpen(false)}>
              <span className="brand-rare">Rare</span>
              <span className="brand-earth">&nbsp;Earth</span>
            </Link>

            <button
              ref={toggleButtonRef}
              type="button"
              className="menu-toggle"
              aria-expanded={mobileNavOpen}
              aria-controls="primary-navigation"
              onClick={() => setMobileNavOpen((prev) => !prev)}
            >
              {mobileNavOpen ? (
                <X size={24} color="var(--accent)" />
              ) : (
                <Menu size={24} color="currentColor" />
              )}
              <span className="menu-toggle-label">{mobileNavOpen ? "Close" : "Menu"}</span>
            </button>

            <nav
              ref={menuRef}
              aria-label="Main navigation"
              id="primary-navigation"
              className={mobileNavOpen ? "nav-open" : ""}
            >
              <ul className="nav-list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileNavOpen(false)}
                      className={isActive(item.href) ? "nav-link-active" : ""}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                {/* CTA contact button */}
                <li>
                  <Link
                    href="/contact"
                    className="nav-cta"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="content" className="site-main" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
