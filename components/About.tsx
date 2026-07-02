"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import IDCard from "./IDCard";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#060418]"
    >
      {/* Main container */}
      <motion.div
        style={{ opacity, y }}
        className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-12 xl:px-16"
      >
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <h2 className="text-[0.8rem] font-bold uppercase tracking-[0.25em] text-white">
            ABOUT ME
          </h2>
          <p className="mt-4 text-[1.05rem] text-gray-300/90">
            Get to know me better
          </p>
        </motion.div>

        {/* ID Card Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <IDCard />
        </motion.div>

        {/* Additional Info Section Below Card */}
        <motion.div
          className="mt-20 max-w-[900px] space-y-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <div className="space-y-4">
            <h3 className="text-[1.5rem] font-bold text-white">
              Passionate About Building Great Experiences
            </h3>
            <p className="text-[1rem] leading-[1.7] text-gray-300/90">
              With a strong foundation in modern web technologies and a focus on
              performance optimization, I create scalable solutions that make a
              real impact on user engagement and business metrics.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { name: "React.js", level: "Expert" },
              { name: "Next.js", level: "Expert" },
              { name: "TypeScript", level: "Advanced" },
              { name: "Tailwind CSS", level: "Expert" },
              { name: "JavaScript", level: "Advanced" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group rounded-xl p-6 backdrop-blur-md transition-all"
                style={{ background: "rgba(13,11,38,0.6)", border: "1px solid rgba(99,102,241,0.12)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[1rem] font-semibold text-white">
                  {skill.name}
                </p>
                <p className="mt-2 text-[0.85rem] text-gray-400">
                  {skill.level}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
