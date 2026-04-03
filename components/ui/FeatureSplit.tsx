"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, imageReveal, staggerContainer } from '@/lib/motion';
import { Container } from './Container';

interface FeatureSplitProps {
    id?: string;
    kicker?: React.ReactNode;
    title: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    children: React.ReactNode;
}

export function FeatureSplit({
    id,
    kicker,
    title,
    imageSrc,
    imageAlt,
    reverse = false,
    children
}: FeatureSplitProps) {
    return (
        <section className={`feature-split-section ${reverse ? 'reverse' : ''}`} id={id}>
            <Container>
                <div className="feature-split-grid">
                    <motion.div 
                        className="feature-split-content"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        {kicker && <motion.p variants={fadeUp} className="kicker">{kicker}</motion.p>}
                        <motion.h2 variants={fadeUp}>{title}</motion.h2>
                        <motion.div variants={fadeUp} className="feature-split-body">
                            {children}
                        </motion.div>
                    </motion.div>
                    <div className="feature-split-image-col">
                        <motion.figure 
                            className="feature-split-image"
                            variants={imageReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                        >
                            <img src={imageSrc} alt={imageAlt} loading="lazy" />
                        </motion.figure>
                    </div>
                </div>
            </Container>
        </section>
    );
}
