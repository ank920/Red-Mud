"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface VantaHeroProps {
    kicker?: string;
    title: string;
    lead?: string;
    children?: ReactNode;
    id?: string;
}

// Framer Motion variants
const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: EASE_PREMIUM,
        },
    },
};

export function VantaHero({
    kicker,
    title,
    lead,
    children,
    id = "hero-title",
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
                    color1: 0xff6b2b, // Brighter glowing orange
                    color2: 0x0f0b09, // Deeper almost-black background
                    size: typeof window !== "undefined" && window.innerWidth < 768 ? 1.0 : 1.8,
                    speed: 1.5,
                    distro: -1.0,
                });
            } catch (e) {
                console.warn("Vanta.js cells effect failed to load:", e);
            }
        }

        initVanta();

        return () => {
            destroyed = true;
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <section
            className="vanta-hero-panel reveal"
            aria-labelledby={id}
        >
            {/* Vanta animated media section (Top) */}
            <div className="vanta-media-container">
                <div ref={vantaRef} className="vanta-bg" aria-hidden="true" />

                <motion.div
                    className="vanta-media-content"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {kicker && (
                        <motion.p className="vanta-kicker" variants={fadeUp}>
                            {kicker}
                        </motion.p>
                    )}
                    <motion.h1 id={id} className="vanta-title" variants={fadeUp}>
                        {title}
                    </motion.h1>
                </motion.div>
            </div>

            {/* Standard text section (Bottom) */}
            <div className="hero-copy">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {lead && (
                        <motion.p className="lead" style={{ color: 'var(--accent)' }} variants={fadeUp}>
                            {lead}
                        </motion.p>
                    )}

                    {children && (
                        <motion.div variants={fadeUp}>
                            {children}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
