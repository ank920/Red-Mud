import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Container } from "./Container";

interface SectionProps {
    id?: string;
    kicker?: string;
    title?: string;
    children: ReactNode;
    className?: string;
    markedAs?: "section" | "div";
    icon?: LucideIcon;
    dark?: boolean;
}

export function Section({
    id,
    kicker,
    title,
    children,
    className = "",
    markedAs = "section",
    icon: Icon,
    dark = false,
}: SectionProps) {
    const Tag = markedAs;

    return (
        <Tag
            className={`content-section reveal ${dark ? "section-dark" : ""} ${className}`}
            aria-labelledby={id}
            style={dark ? { background: "#0d1117", color: "#fff" } : undefined}
        >
            <Container>
                <ScrollReveal animation="slideUp">
                    {(kicker || title || Icon) && (
                        <div className="section-heading">
                            {(kicker || Icon) && (
                                <div className="section-kicker-row">
                                    {Icon && (
                                        <span className="section-icon-badge">
                                            <Icon strokeWidth={2} size={16} />
                                        </span>
                                    )}
                                    {kicker && (
                                        <p className="kicker" style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.6rem",
                                            margin: 0,
                                        }}>
                                            {kicker}
                                        </p>
                                    )}
                                </div>
                            )}
                            {title && (
                                <h2 id={id} style={{ marginTop: "0.6rem" }}>
                                    {title}
                                </h2>
                            )}
                        </div>
                    )}
                    {children}
                </ScrollReveal>
            </Container>
        </Tag>
    );
}
