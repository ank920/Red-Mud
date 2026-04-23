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
                <div className="feature-split-grid" style={{ alignItems: 'center' }}>
                    <motion.div 
                        className="feature-split-content image-styled-content"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        {kicker && <motion.p variants={fadeUp} className="image-styled-kicker">{kicker}</motion.p>}
                        <motion.h2 variants={fadeUp} className="image-styled-title">{title}</motion.h2>
                        <motion.div variants={fadeUp} className="image-styled-body">
                            {children}
                        </motion.div>
                    </motion.div>
                    <div className="feature-split-image-col">
                        <motion.figure 
                            className="home-media-frame"
                            style={{ borderRadius: '20px', minHeight: 'unset', aspectRatio: '4/3', margin: 0 }}
                            variants={imageReveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-10%" }}
                        >
                            <img src={encodeURI(imageSrc)} alt={imageAlt} loading="lazy" />
                        </motion.figure>
                    </div>
                </div>
            </Container>
        </section>
    );
}
