import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <Container className="footer-inner">
                <div className="footer-top">
                    {/* Column 1: Brand & Mission */}
                    <div className="footer-col brand-col">
                        <Link href="/" className="footer-logo">
                            <span style={{ color: "var(--accent)" }}>Rare</span>
                            <span style={{ color: "#ffffff" }}>&nbsp;Earth</span>
                        </Link>
                        <p className="footer-mission">
                            Transforming industrial liability into a strategic mineral asset.
                            Zero waste. Infinite value.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                                <Linkedin size={18} strokeWidth={2} />
                            </a>
                            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="X (Twitter)">
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="mailto:info@rareearth.com" className="footer-social-link" aria-label="Email">
                                <Mail size={18} strokeWidth={2} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Platform Links */}
                    <div className="footer-col links-col">
                        <h4>Platform</h4>
                        <ul>
                            <li><Link href="/technology">Technology &amp; Process</Link></li>
                            <li><Link href="/economics">Economics</Link></li>
                            <li><Link href="/outputs">Recovered Outputs</Link></li>
                            <li><Link href="/esg">ESG &amp; Impact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Strategy Links */}
                    <div className="footer-col links-col">
                        <h4>Strategy</h4>
                        <ul>
                            <li><Link href="/india-strategy">India Strategy</Link></li>
                            <li><Link href="/partnerships">Partnerships</Link></li>
                            <li><Link href="/contact">Project Intake</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: CTA */}
                    <div className="footer-col cta-col">
                        <h4>Engagement</h4>
                        <p>Partner for industrial-scale remediation and critical mineral supply.</p>
                        <Link href="/contact" className="btn btn-slide">
                            Start Conversation
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Rare Earth Critical Minerals Platform</p>
                    <ul className="footer-legal-links">
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
}
