"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface VantaHeroProps {
    kicker?: string;
    title: string;
    lead?: string;
    children?: ReactNode;
    id?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
}

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE_PREMIUM } },
};

export function VantaHero({
    kicker,
    title,
    lead,
    children,
    id = "hero-title",
    primaryCta,
    secondaryCta,
}: VantaHeroProps) {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        let destroyed = false;
        async function initVanta() {
            try {
                const THREE = await import("three");
                const VANTA = await import("vanta/dist/vanta.cells.min");
                const VantaCells = VANTA.default ?? VANTA;
                if (destroyed || !vantaRef.current) return;
                vantaEffect.current = VantaCells({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200,
                    minWidth: 200,
                    scale: 1.0,
                    color1: 0xff5a1f, // Brighter earthy red for contrast
                    color2: 0x110603, // Dark organic red-black background instead of pure black
                    size: typeof window !== "undefined" && window.innerWidth < 768 ? 1.2 : 1.6, // Slightly denser cells
                    speed: 1.2, // Balanced smooth speed
                    distro: -1.0,
                });
            } catch (e) {
                console.warn("Vanta.js cells effect failed to load:", e);
            }
        }
        initVanta();
        return () => {
            destroyed = true;
            if (vantaEffect.current) { vantaEffect.current.destroy(); vantaEffect.current = null; }
        };
    }, []);

    return (
        <section className="vanta-hero-panel reveal" aria-labelledby={id}>
            {/* Full-screen dark animation canvas */}
            <div className="vanta-media-container">
                <div ref={vantaRef} className="vanta-bg" aria-hidden="true" />
                {/* Gradient overlay for depth */}
                <div className="vanta-gradient-overlay" aria-hidden="true" />

                {/* Hero content centred over animation */}
                <motion.div
                    className="vanta-media-content"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {kicker && (
                        <motion.p className="vanta-kicker" variants={fadeUp}>
                            <span className="vanta-kicker-dot">●</span>&nbsp;{kicker}
                        </motion.p>
                    )}
                    <motion.h1 id={id} className="vanta-title" variants={fadeUp}>
                        {title}
                    </motion.h1>
                    {lead && (
                        <motion.p className="vanta-lead" variants={fadeUp}>
                            {lead}
                        </motion.p>
                    )}
                    {(primaryCta || secondaryCta) && (
                        <motion.div className="vanta-cta-row" variants={fadeUp}>
                            {primaryCta && (
                                <Link href={primaryCta.href} className="btn btn-primary">
                                    {primaryCta.label}
                                </Link>
                            )}
                            {secondaryCta && (
                                <Link href={secondaryCta.href} className="btn btn-ghost-white">
                                    {secondaryCta.label}
                                </Link>
                            )}
                        </motion.div>
                    )}
                </motion.div>

                {/* Scroll indicator */}
                <div className="vanta-scroll-indicator" aria-hidden="true">
                    <div className="scroll-arrow" />
                </div>
            </div>

            {/* Text content below animation (for children/extra copy) */}
            {children && (
                <div className="vanta-below-fold">
                    <div className="container">
                        <motion.div
                            className="hero-copy"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeUp}>{children}</motion.div>
                        </motion.div>
                    </div>
                </div>
            )}
        </section>
    );
}
