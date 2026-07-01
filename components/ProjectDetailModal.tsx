"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectDetailModal.css';

interface ProjectDetails {
  overview: string;
  requirements: string[];
  techStack: { category: string; tech: string; }[];
  solution: string[];
}

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectDetails?: ProjectDetails;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  projectDetails
}) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!projectDetails) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="modal-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <div>
                  <div className="modal-label-box">
                    <span className="modal-label">PROJECT DETAILS</span>
                  </div>
                  <h2 className="modal-title">{projectTitle}</h2>
                </div>

                <motion.button
                  className="modal-close-btn"
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>

              {/* Body */}
              <div className="modal-body">
                {/* Overview Section */}
                <motion.div
                  className="modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="section-title">
                    <span className="title-icon">📋</span>
                    Project Overview
                  </h3>
                  <p className="section-text">{projectDetails.overview}</p>
                </motion.div>

                {/* Client Requirements Section */}
                <motion.div
                  className="modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="section-title">

                    Client Requirements
                  </h3>
                  <ul className="requirements-list">
                    {projectDetails.requirements.map((req, index) => (
                      <motion.li
                        key={index}
                        className="requirement-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        <span className="requirement-bullet">•</span>
                        <span>{req}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tech Stack Section */}
                <motion.div
                  className="modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="section-title">
                   
                    Tech Stack Used
                  </h3>
                  <div className="tech-stack-grid">
                    {projectDetails.techStack.map((item, index) => (
                      <motion.div
                        key={index}
                        className="tech-stack-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                      >
                        <span className="tech-category">{item.category}</span>
                        <span className="tech-name">{item.tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Delivered Solution Section */}
                <motion.div
                  className="modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="section-title">
                    
                    Delivered Solution
                  </h3>
                  <ul className="solution-list">
                    {projectDetails.solution.map((item, index) => (
                      <motion.li
                        key={index}
                        className="solution-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                      >
                        <span className="solution-bullet">✓</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
