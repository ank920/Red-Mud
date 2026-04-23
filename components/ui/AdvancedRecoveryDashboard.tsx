"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { Container } from './Container';
import {
    FlaskConical,
    Database,
    Sparkles,
    Filter,
    PackageOpen,
    BarChart3,
    ChevronRight,
    Leaf,
    Recycle,
    TrendingUp,
    CheckCircle2
} from 'lucide-react';

export function AdvancedRecoveryDashboard() {
    return (
        <section className="adv-dash-section" id="advanced-recovery">
            <Container>
                <motion.div
                    className="adv-dash-wrapper"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-5%" }}
                >
                    {/* Top Row: Hero Data Block */}
                    <motion.div variants={fadeUp} className="adv-card adv-top-card">
                        <div className="adv-top-content">
                            <p className="kicker" style={{ color: "var(--accent)" }}>ADVANCED RECOVERY</p>
                            <h2 className="adv-title">Advanced Soda–Alkali Multi-Metal Recovery from Rare Earth</h2>
                            <p className="adv-desc">
                                We transform rare earth red mud—once an industrial byproduct—into high-value resources through our clean, integrated soda–alkali process. Our technology recovers critical metals and produces a range of valuable co-products with efficiency and environmental responsibility.
                            </p>
                        </div>
                        <div className="adv-top-image-col">
                            <img
                                src={encodeURI("/TECHNOLOGY/Turning India’s Largest Industrial Liability into a Strategic Mineral Advantage.jpg")}
                                alt="Rare Earth Concentrate Plant"
                                className="adv-hero-img"
                            />
                        </div>
                    </motion.div>

                    {/* Middle Row: Process Flow */}
                    <motion.div variants={fadeUp} className="adv-card adv-process-card">
                        <h3 className="adv-subtitle text-center">OUR INTEGRATED RECOVERY PROCESS</h3>
                        <div className="adv-process-flow">
                            <div className="adv-process-step">
                                <div className="adv-icon-badge badge-blue"><FlaskConical size={26} /></div>
                                <h4>1. LEACHING</h4>
                                <p>Soda-alkali leaching unlocks metals from red mud.</p>
                            </div>
                            <ChevronRight className="adv-process-arrow" size={24} />

                            <div className="adv-process-step">
                                <div className="adv-icon-badge badge-teal"><Database size={26} /></div>
                                <h4>2. SOLVENT EXTRACTION</h4>
                                <p>Selective separation of target metals.</p>
                            </div>
                            <ChevronRight className="adv-process-arrow" size={24} />

                            <div className="adv-process-step">
                                <div className="adv-icon-badge badge-green"><Sparkles size={26} /></div>
                                <h4>3. PRECIPITATION</h4>
                                <p>Metals are precipitated with high purity.</p>
                            </div>
                            <ChevronRight className="adv-process-arrow" size={24} />

                            <div className="adv-process-step">
                                <div className="adv-icon-badge badge-purple"><Filter size={26} /></div>
                                <h4>4. PURIFICATION</h4>
                                <p>Advanced purification ensures product quality.</p>
                            </div>
                            <ChevronRight className="adv-process-arrow" size={24} />

                            <div className="adv-process-step">
                                <div className="adv-icon-badge badge-blue"><PackageOpen size={26} /></div>
                                <h4>5. PRODUCT FINISHING</h4>
                                <p>Final processing for market-ready products.</p>
                            </div>
                            <ChevronRight className="adv-process-arrow" size={24} />

                            <div className="adv-process-step">
                                <div className="adv-icon-badge badge-orange"><BarChart3 size={26} /></div>
                                <h4>6. MULTI-METAL RECOVERY</h4>
                                <p>Maximizing value from every ton of red mud.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Row: 2-Column Grid */}
                    <div className="adv-bottom-grid">

                        {/* Valuable Outputs */}
                        <motion.div variants={fadeUp} className="adv-card adv-outputs-card">
                            <div className="adv-divider-header">
                                <div className="line"></div>
                                <h3>VALUABLE OUTPUTS</h3>
                                <div className="line"></div>
                            </div>

                            <div className="adv-outputs-list">
                                {[
                                    { num: 26,  sym: 'Fe',  name: 'Iron',           sub: 'Oxides & Pigments',   color: '#374151', bg: '#f3f4f6' },
                                    { num: 22,  sym: 'Ti',  name: 'Titanium',       sub: 'TiO₂ Concentrate',    color: '#1e40af', bg: '#eff6ff' },
                                    { num: 40,  sym: 'Zr',  name: 'Zirconium',      sub: 'ZrO₂ Grade',          color: '#065f46', bg: '#ecfdf5' },
                                    { num: 21,  sym: 'Sc',  name: 'Scandium',       sub: 'Sc₂O₃ Oxide',         color: '#7c3aed', bg: '#f5f3ff' },
                                    { num: 13,  sym: 'Al',  name: 'Aluminosilicate', sub: 'Materials',           color: '#92400e', bg: '#fff7ed' },
                                    { num: 20,  sym: 'Ca',  name: 'Calcium',        sub: 'Carbonate',           color: '#0e7490', bg: '#ecfeff' },
                                    { num: 14,  sym: 'Si',  name: 'Silicon',        sub: 'SiO₂ Dioxide',        color: '#4338ca', bg: '#eef2ff' },
                                ].map(el => (
                                    <div key={el.sym} className="elem-card" style={{ '--elem-color': el.color, '--elem-bg': el.bg } as React.CSSProperties}>
                                        <span className="elem-num">{el.num}</span>
                                        <span className="elem-sym">{el.sym}</span>
                                        <span className="elem-name">{el.name}</span>
                                        <span className="elem-sub">{el.sub}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Designed For Impact */}
                        <motion.div variants={fadeUp} className="adv-card adv-impact-card">
                            <h3 className="adv-subtitle text-center" style={{ margin: "1rem 0 2rem" }}>BUILT FOR VALUE. DESIGNED FOR IMPACT.</h3>

                            <div className="adv-impact-list">
                                <div className="adv-impact-item pt-green">
                                    <div className="impact-icon"><Leaf size={32} /></div>
                                    <h4>CLEAN & EFFICIENT</h4>
                                    <p>Environmentally friendly process with minimal waste.</p>
                                </div>
                                <div className="adv-impact-item pt-teal">
                                    <div className="impact-icon"><Recycle size={32} /></div>
                                    <h4>RESOURCE POSITIVE</h4>
                                    <p>Converts industrial waste into high-value, marketable products.</p>
                                </div>
                                <div className="adv-impact-item pt-orange">
                                    <div className="impact-icon"><TrendingUp size={32} /></div>
                                    <h4>SUSTAINABLE VALUE</h4>
                                    <p>Strengthening supply chains with critical materials for the future.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </Container>
        </section>
    );
}
