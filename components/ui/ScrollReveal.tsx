"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useRef, useEffect } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    animation?: "fade" | "slideUp" | "slideLeft" | "scale";
}

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    className = "",
    animation = "slideUp"
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants: Record<string, { hidden: Variant; visible: Variant }> = {
        fade: {
            hidden: {},
            visible: { transition: { duration: 0.6, delay } }
        },
        slideUp: {
            hidden: { y: 20 },
            visible: { y: 0, transition: { duration: 0.6, ease: "easeOut", delay } }
        },
        slideLeft: {
            hidden: { x: -20 },
            visible: { x: 0, transition: { duration: 0.6, ease: "easeOut", delay } }
        },
        scale: {
            hidden: { scale: 0.95 },
            visible: { scale: 1, transition: { duration: 0.5, ease: "easeOut", delay } }
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={variants[animation]}
                initial="hidden"
                animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
};
