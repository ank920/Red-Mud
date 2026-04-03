"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

type Person = {
  name: string;
  role: string;
  background: string;
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
        viewport={{ once: true, margin: "-100px" }}
        className="team-grid"
      >
        {executives.map((person, idx) => (
          <motion.div variants={fadeUp} key={idx} className="profile-card">
            <div className="profile-monogram">{getMonogram(person.name)}</div>
            <div className="profile-header mt-4">
              <h3 className="profile-name">{person.name}</h3>
              <span className="profile-role-pill">{person.role}</span>
            </div>
            <div className="profile-body">
              <p>{person.background}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ marginTop: "8rem" }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-2"
        >
          Governance & Strategic Advisors
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-dim mb-10 max-w-3xl"
        >
          Strategic oversight provided by senior advisors with deep experience across energy infrastructure financing, venture capital, and global technology commercialization. We are actively expanding this board to include leaders from global industrial engineering and project finance institutions.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="advisors-grid"
        >
          {advisors.map((person, idx) => (
            <motion.div variants={fadeUp} key={idx} className="profile-card">
              <div className="profile-monogram">{getMonogram(person.name)}</div>
              <div className="profile-header mt-4">
                <h3 className="profile-name">{person.name}</h3>
                <span className="profile-role-pill">{person.role}</span>
              </div>
              <div className="profile-body">
                <p>{person.background}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
