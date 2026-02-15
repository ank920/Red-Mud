import Link from "next/link";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="footer-top">
                    {/* Column 1: Brand & Mission */}
                    <div className="footer-col brand-col">
                        <Link href="/" className="footer-logo">
                            Red Mud
                        </Link>
                        <p className="footer-mission">
                            Transforming industrial liability into a strategic mineral asset.
                            <br />
                            Zero waste. Infinite value.
                        </p>
                        <div className="footer-socials">
                            <a
                                href="#"
                                className="footer-social-link"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} strokeWidth={2} />
                            </a>
                            <a
                                href="#"
                                className="footer-social-link"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} strokeWidth={2} />
                            </a>
                            <a
                                href="mailto:info@redmud.com"
                                className="footer-social-link"
                                aria-label="Email"
                            >
                                <Mail size={20} strokeWidth={2} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Platform Links */}
                    <div className="footer-col links-col">
                        <h4>Platform</h4>
                        <ul>
                            <li>
                                <Link href="/technology">Technology & Process</Link>
                            </li>
                            <li>
                                <Link href="/outputs">Recovered Outputs</Link>
                            </li>
                            <li>
                                <Link href="/esg">ESG & Impact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Company/Strategy Links */}
                    <div className="footer-col links-col">
                        <h4>Strategy</h4>
                        <ul>
                            <li>
                                <Link href="/india-strategy">India Strategy</Link>
                            </li>
                            <li>
                                <Link href="/partnerships">Partnerships</Link>
                            </li>
                            <li>
                                <Link href="/contact">Project Intake</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: CTA */}
                    <div className="footer-col cta-col">
                        <h4>Engagement</h4>
                        <p>
                            Partner for industrial-scale remediation and critical mineral supply.
                        </p>
                        <Link href="/contact" className="footer-cta-btn inline-flex items-center gap-2">
                            Start Conversation
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-legal">
                        <p>&copy; {currentYear} Red Mud Critical Minerals Platform</p>
                    </div>
                    <ul className="footer-legal-links">
                        <li>
                            <Link href="/privacy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms">Terms of Service</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
