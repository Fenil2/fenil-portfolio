"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import './PillNav.css';

export type NavItem = {
  label: string;
  href: string;
};

export interface PillNavProps {
  items: NavItem[];
  activeHref?: string;
  logo?: React.ReactNode;
  logoHref?: string;
}

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  logo,
  logoHref = '#'
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const defaultLogo = (
    <Image src="/logo.png" alt="Logo" width={40} height={40} className="logo-img" priority />
  );

  return (
    <motion.header
      className={`pill-nav-header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <div className="pill-nav-container">
        <nav
          ref={navRef}
          className="pill-nav"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <motion.a
            href={logoHref}
            className="pill-logo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {logo || defaultLogo}
          </motion.a>

          {/* Desktop Navigation Pills */}
          <motion.div
            className="pill-nav-items"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <ul className="pill-list">
              {items.map((item, index) => {
                const isActive = activeHref === item.href;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.li
                    key={item.href}
                    className="pill-item"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      className={`pill-link ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Hover Circle Background */}
                      <motion.span
                        className="pill-hover-circle"
                        initial={{ scale: 0 }}
                        animate={{
                          scale: isHovered ? 1.2 : 0,
                          transformOrigin: 'center bottom'
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.6, 0.05, 0.01, 0.9]
                        }}
                      />

                      {/* Label Container */}
                      <span className="pill-label-container">
                        {/* Base Label */}
                        <motion.span
                          className="pill-label"
                          animate={{
                            y: isHovered ? -40 : 0,
                            opacity: isHovered ? 0 : 1
                          }}
                          transition={{ duration: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
                        >
                          {item.label}
                        </motion.span>

                        {/* Hover Label */}
                        <motion.span
                          className="pill-label-hover"
                          animate={{
                            y: isHovered ? 0 : 40,
                            opacity: isHovered ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
                        >
                          {item.label}
                        </motion.span>
                      </span>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.span
                          className="pill-active-dot"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30
                          }}
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="pill-mobile-menu-btn"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="hamburger-line"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 3 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="hamburger-line"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -3 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="pill-mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <ul className="mobile-menu-list">
                {items.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      href={item.href}
                      className="mobile-menu-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default PillNav;
