"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

type Person = {
  name: string;
  role: string;
  background: string;
  tags?: string[];
  quote?: string;
};

type TeamGridProps = {
  executives: Person[];
  advisors: Person[];
};

export function TeamGrid({ executives, advisors }: TeamGridProps) {
  const getMonogram = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="resume-grid"
      >
        {executives.map((person, idx) => (
          <motion.div variants={fadeUp} key={idx} className="resume-card">
            
            <div className="resume-header">
               <div className="resume-avatar resume-avatar-green">
                  {getMonogram(person.name)}
               </div>
               <div>
                 <h3 className="resume-name">{person.name}</h3>
                 <p className="resume-role">{person.role}</p>
               </div>
            </div>

            {person.tags && (
              <div className="resume-tags">
                {person.tags.map(tag => (
                  <span key={tag} className="resume-tag highlight">{tag}</span>
                ))}
              </div>
            )}

            <p className="resume-bio">
              {person.background}
            </p>

            {person.quote && (
              <div className="resume-quote-box">
                 <p className="resume-quote-text">"{person.quote}"</p>
              </div>
            )}

          </motion.div>
        ))}
      </motion.div>

      <div style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        <p className="image-styled-kicker" style={{ color: '#ea580c' }}>ADVISORY BOARD</p>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Board of Advisors</h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        {advisors.map((person, idx) => (
          <motion.div variants={fadeUp} key={idx} className="resume-card resume-card-horizontal">
            
            <div>
              <div className="resume-header">
                <div className="resume-avatar resume-avatar-green">
                    {getMonogram(person.name)}
                </div>
                <div>
                  <h3 className="resume-name">{person.name}</h3>
                  <p className="resume-role">{person.role}</p>
                </div>
              </div>
              <p className="resume-bio" style={{ marginBottom: 0 }}>
                {person.background}
              </p>
            </div>

            <div className="resume-data-col">
              {person.tags && (
                <div className="resume-tags" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '1.5rem', gap: '0.75rem' }}>
                  {person.tags.map(tag => (
                    <span key={tag} className="resume-tag highlight">{tag}</span>
                  ))}
                </div>
              )}
              {person.quote && (
                <div className="resume-quote-box green" style={{ margin: 0 }}>
                  <p className="resume-quote-text">"{person.quote}"</p>
                </div>
              )}
            </div>

          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
