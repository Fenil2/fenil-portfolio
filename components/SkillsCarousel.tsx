"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SkillsCarousel.css';

interface Skill {
  name: string;
  icon: string;
  description: string;
  color: string;
}

interface SkillsCarouselProps {
  skills: Skill[];
}

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [itemsPerView, setItemsPerView] = useState(4);
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(skills.length / itemsPerView);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 900) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Get visible skills for current page
  const getVisibleSkills = () => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    return skills.slice(start, end);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Track mouse position for blob effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const visibleSkills = getVisibleSkills();

  return (
    <section id="skills" className="skills-carousel-section">
      <div className="skills-container">
        {/* Section Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <h2 className="skills-header-label">MY SKILLS</h2>
          <h3 className="skills-header-title">My extensive list of skills</h3>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="skills-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Morphing Blob Background */}
          <motion.div
            className="morphing-blob"
            animate={{
              x: mousePos.x - 200,
              y: mousePos.y - 200,
              scale: hoveredSkill !== null ? 1.5 : 1,
              opacity: hoveredSkill !== null ? 0.15 : 0.08
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
          />

          {/* Navigation Buttons */}
          <motion.button
            className="skills-nav-btn skills-nav-prev"
            onClick={handlePrev}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(37, 99, 235, 1)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous skills"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>

          <motion.button
            className="skills-nav-btn skills-nav-next"
            onClick={handleNext}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(37, 99, 235, 1)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next skills"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>

          {/* Skills Grid */}
          <div
            ref={gridRef}
            className="skills-grid"
            onMouseMove={handleMouseMove}
          >
            {/* Constellation Lines */}
            <svg className="constellation-svg">
              <AnimatePresence>
                {hoveredSkill !== null && visibleSkills.map((_, index) => {
                  if (index === hoveredSkill) return null;
                  return (
                    <motion.line
                      key={`line-${hoveredSkill}-${index}`}
                      className="constellation-line"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={{ opacity: 0.3, pathLength: 1 }}
                      exit={{ opacity: 0, pathLength: 0 }}
                      transition={{ duration: 0.5 }}
                      stroke={visibleSkills[hoveredSkill].color}
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  );
                })}
              </AnimatePresence>
            </svg>

            {visibleSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${currentIndex}-${index}`}
                className="skill-card"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.6, 0.05, 0.01, 0.9]
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                {/* Floating Particles */}
                {hoveredSkill === index && (
                  <div className="particles-container">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="particle"
                        style={{
                          background: skill.color,
                          left: '50%',
                          top: '50%'
                        }}
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          x: Math.cos((i / 12) * Math.PI * 2) * 100,
                          y: Math.sin((i / 12) * Math.PI * 2) * 100,
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Ripple Effect */}
                {hoveredSkill === index && (
                  <motion.div
                    className="ripple-effect"
                    style={{
                      borderColor: skill.color
                    }}
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                )}

                <div className="skill-card-inner">
                  {/* Icon */}
                  <motion.div
                    className="skill-icon-wrapper"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}55, ${skill.color}22)`
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                      scale: 1,
                      rotate: hoveredSkill === index ? 360 : 0
                    }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: hoveredSkill === index ? 1 : 0.6,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                  >
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                      style={{
                        filter: skill.name.toLowerCase().includes('next')
                          ? 'brightness(0) invert(1)'
                          : 'none'
                      }}
                      animate={{
                        scale: hoveredSkill === index ? 1.15 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Name */}
                  <motion.h4
                    className="skill-name"
                    animate={{
                      scale: hoveredSkill === index ? 1.05 : 1
                    }}
                  >
                    {skill.name}
                  </motion.h4>

                  {/* Description */}
                  <p className="skill-description">{skill.description}</p>

                  {/* Accent Line */}
                  <motion.div
                    className="skill-accent-line"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: hoveredSkill === index ? '100%' : '60px' }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.8,
                      ease: [0.6, 0.05, 0.01, 0.9]
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="skills-indicators">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                className={`skills-indicator ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
