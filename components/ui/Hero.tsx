import { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface HeroProps {
    kicker?: string;
    title: string;
    lead?: string;
    children?: ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    videoSrc?: string;
    id?: string;
}

export function Hero({
    kicker,
    title,
    lead,
    children,
    imageSrc,
    imageAlt,
    videoSrc,
    id = "hero-title"
}: HeroProps) {
    return (
        <section className="hero-panel reveal" aria-labelledby={id}>
            {videoSrc ? (
                <figure className="hero-media">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={imageSrc}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </figure>
            ) : imageSrc && (
                <figure className="hero-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imageSrc} alt={imageAlt || ""} loading="eager" />
                </figure>
            )}
            <div className="hero-copy">
                <ScrollReveal animation="fade" delay={0.2}>
                    {kicker && <p className="kicker">{kicker}</p>}
                    <h1 id={id}>{title}</h1>
                </ScrollReveal>
                <ScrollReveal animation="slideUp" delay={0.4}>
                    {lead && <p className="lead">{lead}</p>}
                    {children}
                </ScrollReveal>
            </div>
        </section>
    );
}
