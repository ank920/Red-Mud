"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroProps {
    kicker?: string;
    title: string;
    lead?: string;
    children?: ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    videoSrc?: string;
    id?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
}

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_PREMIUM } },
};

export function Hero({
    kicker,
    title,
    lead,
    children,
    imageSrc,
    imageAlt,
    videoSrc,
    id = "hero-title",
    primaryCta,
    secondaryCta,
}: HeroProps) {
    return (
        <section className="page-hero-panel" aria-labelledby={id}>
            {/* Full-bleed media background */}
            <div className="page-hero-media">
                {videoSrc ? (
                    <video autoPlay loop muted playsInline poster={imageSrc ? encodeURI(imageSrc) : undefined} aria-hidden="true">
                        <source src={encodeURI(videoSrc)} type="video/mp4" />
                    </video>
                ) : imageSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={encodeURI(imageSrc)} alt={imageAlt || ""} loading="eager" aria-hidden="true" />
                ) : null}
                {/* Dark gradient overlay – same style as VantaHero */}
                <div className="page-hero-overlay" aria-hidden="true" />
            </div>

            {/* Content overlaid over the image */}
            <motion.div
                className="page-hero-content"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="container">
                    <div className="page-hero-inner">
                        {kicker && (
                            <motion.p className="vanta-kicker" variants={fadeUp}>
                                <span className="vanta-kicker-dot">●</span>&nbsp;{kicker}
                            </motion.p>
                        )}
                        <motion.h1 id={id} className="page-hero-title" variants={fadeUp}>
                            {title}
                        </motion.h1>
                        {lead && (
                            <motion.p className="page-hero-lead" variants={fadeUp}>
                                {lead}
                            </motion.p>
                        )}
                        {(primaryCta || secondaryCta) && (
                            <motion.div className="vanta-cta-row" variants={fadeUp}>
                                {primaryCta && (
                                    <a href={primaryCta.href} className="btn btn-slide">
                                        {primaryCta.label}
                                    </a>
                                )}
                                {secondaryCta && (
                                    <a href={secondaryCta.href} className="btn btn-slide">
                                        {secondaryCta.label}
                                    </a>
                                )}
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <div className="vanta-scroll-indicator" aria-hidden="true">
                <div className="scroll-arrow" />
            </div>
        </section>
    );
}
