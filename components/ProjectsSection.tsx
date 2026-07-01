"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectDetailModal from './ProjectDetailModal';
import './ProjectsSection.css';

interface ProjectDetails {
  overview: string;
  requirements: string[];
  techStack: { category: string; tech: string; }[];
  solution: string[];
}

interface Project {
  id: string;
  icon: string; // Circle icon letter
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  link?: string;
  size?: 'large' | 'small'; // For masonry layout
  details?: ProjectDetails;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [canScroll, setCanScroll] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateCanScroll = () => {
      setCanScroll(track.scrollWidth > track.clientWidth + 1);
    };

    updateCanScroll();

    const resizeObserver = new ResizeObserver(updateCanScroll);
    resizeObserver.observe(track);
    return () => resizeObserver.disconnect();
  }, [projects]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.project-card') as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  const handleDetailsClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Left Section - Header */}
        <motion.div
          className="projects-header-section"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <div className="header-label-box">
            <span className="header-label">MY PROJECTS</span>
          </div>

          <h2 className="header-title">
            Take a look at the latest projects I've done
          </h2>

          <p className="header-description" style={{
            fontSize: '0.95rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '450px',
            marginTop: '1rem',
            marginBottom: '1.5rem'
          }}>
            Each project showcases unique challenges and innovative solutions. Click the info button on any project card to explore detailed insights.
          </p>

          <motion.a
            href="#contact"
            className="browse-link"
            whileHover={{ x: 5 }}
          >
            <span>Let's work together</span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Right Section - Projects Carousel */}
        <div className="projects-grid-wrapper">
          <button
            type="button"
            className={`carousel-nav-btn carousel-nav-prev ${canScroll ? '' : 'is-hidden'}`}
            onClick={() => scrollByCard(-1)}
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="projects-grid-section" ref={trackRef}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Glow Effect on Hover */}
              {hoveredProject === project.id && (
                <motion.div
                  className="card-glow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              <div className="card-content">
                {/* Tags */}
                <div className="card-tags">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="card-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Icon Circle */}
                <motion.div
                  className="card-icon-circle"
                  animate={{
                    rotate: hoveredProject === project.id ? [0, -5, 5, 0] : 0,
                    scale: hoveredProject === project.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="icon-letter">{project.icon}</span>
                </motion.div>

                {/* Title with Details Button */}
                <div className="card-title-row">
                  <motion.h3
                    className="card-title"
                    animate={{
                      y: hoveredProject === project.id ? -3 : 0
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  {project.details && (
                    <motion.button
                      className="details-btn"
                      onClick={() => handleDetailsClick(project)}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                      </svg>
                    </motion.button>
                  )}
                </div>

                {/* Subtitle */}
                <motion.p
                  className="card-subtitle"
                  animate={{
                    y: hoveredProject === project.id ? -3 : 0
                  }}
                >
                  {project.subtitle}
                </motion.p>

                {/* Project Image */}
                <motion.div
                  className="card-image-wrapper"
                  animate={{
                    y: hoveredProject === project.id ? -8 : 0,
                    scale: hoveredProject === project.id ? 1.02 : 1
                  }}
                  transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
                >
                  <div className="image-container">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      animate={{
                        scale: hoveredProject === project.id ? 1.05 : 1
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Image Overlay */}
                    <div className="image-overlay" />

                    {/* Shine Effect */}
                    {hoveredProject === project.id && (
                      <motion.div
                        className="image-shine"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{
                          duration: 1.2,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </div>

                  {/* Floating Link Button */}
                  <motion.a
                    href={project.link || '#'}
                    className="floating-link-btn"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{
                      scale: hoveredProject === project.id ? 1 : 1,
                      rotate: 0,
                      opacity: hoveredProject === project.id ? 1 : 1
                    }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
          </div>

          <button
            type="button"
            className={`carousel-nav-btn carousel-nav-next ${canScroll ? '' : 'is-hidden'}`}
            onClick={() => scrollByCard(1)}
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projectTitle={selectedProject?.title || ''}
        projectDetails={selectedProject?.details}
      />
    </section>
  );
};

export default ProjectsSection;
