"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!contentRef.current) return;
    const rect = contentRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleDownloadCV = () => {
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Path to your CV file in the public directory
    link.download = 'Siva_S_CV.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", color: "#FFFFFF" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", color: "#FFFFFF" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#F05032" },
  ];

  const stats = [
    { value: "50+", label: "Projects" },
    { value: "2+", label: "Years Exp." },
    { value: "8+", label: "Technologies" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <section
      id="about-detailed"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#060418]"
    >
      {/* Main container */}
      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-9 md:px-8 md:py-10 lg:px-12 lg:py-10 xl:px-16"
      >
        {/* Section Header */}
        <motion.div
          className="mb-6 text-center sm:mb-7 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white sm:text-[0.75rem] sm:tracking-[0.22em] md:text-[0.8rem] md:tracking-[0.25em]">
            PROFESSIONAL PROFILE
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Left - Profile Card */}
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="flex w-full items-center justify-center lg:w-[450px] xl:w-[500px]"
          >
            <ProfileCard
              name="Siva S"
              title="Web Developer"
              handle="sivadev"
              status="S.Siva Subramaniam"
              contactText="Hire Me"
              avatarUrl="/cartoon3.png"
              miniAvatarUrl="/image1.jpeg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
              techIcons={[
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg", alt: "Next.js" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "javascript" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" }
              ]}
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            ref={contentRef}
            style={{ y: contentY }}
            className="relative flex w-full flex-1 flex-col justify-center space-y-3 overflow-hidden sm:space-y-4 md:space-y-4 lg:space-y-4"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >

            {/* Hidden "WEB DEVELOPMENT" Text that appears with spotlight */}
            <div
              className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
              style={{
                opacity: isHovering ? 0.15 : 0.03,
                transition: 'opacity 0.3s ease'
              }}
            >
              <span className="whitespace-nowrap text-[1.2rem] font-black uppercase tracking-wider text-white sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] xl:text-[2.8rem]">
                Web Development
              </span>
            </div>

            {/* Reveal text on hover with mask effect */}
            {isHovering && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-5 flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute"
                  style={{
                    width: '500px',
                    height: '500px',
                    left: `${mousePosition.x - 250}px`,
                    top: `${mousePosition.y - 250}px`,
                    background: `radial-gradient(circle 250px at 250px 250px, rgba(255, 255, 255, 0.2), transparent 70%)`,
                    mixBlendMode: 'lighten',
                  }}
                />
              </motion.div>
            )}

            {/* Description */}
            <motion.div
              className="relative z-20 space-y-3 sm:space-y-4"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <h3 className="text-[1.5rem] font-bold leading-[1.2] text-white sm:text-[1.625rem] md:text-[1.75rem] lg:text-[2rem]">
                Crafting Digital Experiences
              </h3>
              <p className="max-w-[600px] text-[0.875rem] leading-[1.6] text-gray-300/90 sm:text-[0.9rem] md:text-[0.95rem]">
                I'm a passionate Web Developer specializing in creating stunning,
                high-performance web applications. With expertise in modern frameworks and
                a keen eye for design, I transform ideas into seamless digital experiences.
              </p>
              <p className="max-w-[600px] text-[0.875rem] leading-[1.6] text-gray-300/90 sm:text-[0.9rem] md:text-[0.95rem]">
                Currently working at <span className="font-semibold text-white">Pyramidions Solutions</span>,
                I've helped numerous clients bring their visions to life through clean code
                and innovative solutions.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="relative z-20 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group space-y-1 rounded-xl p-2.5 backdrop-blur-md transition-all sm:p-3 lg:p-3.5"
                  style={{ background: "rgba(13,11,38,0.6)", border: "1px solid rgba(99,102,241,0.12)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    ease: [0.6, 0.05, 0.01, 0.9],
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-[1.5rem] font-bold text-white sm:text-[1.625rem] md:text-[1.75rem] lg:text-[2rem]">
                    {stat.value}
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gray-400 sm:text-[0.675rem] sm:tracking-[0.14em] md:text-[0.7rem] md:tracking-[0.15em]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              className="relative z-20 space-y-4 sm:space-y-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white sm:text-[0.725rem] sm:tracking-[0.22em] md:text-[0.75rem] md:tracking-[0.25em]">
                TECH STACK
              </h4>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-3.5 lg:grid-cols-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative overflow-hidden rounded-xl p-2.5 backdrop-blur-md transition-all sm:p-3 md:p-3"
                    style={{ background: "rgba(13,11,38,0.6)", border: "1px solid rgba(99,102,241,0.1)" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.08,
                      ease: [0.6, 0.05, 0.01, 0.9],
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: `0 10px 30px ${skill.color}20`
                    }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`
                      }}
                    />

                    <div className="relative flex flex-col items-center gap-2 sm:gap-2.5">
                      {/* Icon */}
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-lg sm:h-11 sm:w-11 md:h-12 md:w-12"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9"
                          style={{
                            filter: skill.name === 'Next.js' || skill.name === 'Prisma'
                              ? 'brightness(0) invert(1)'
                              : 'none'
                          }}
                        />
                      </motion.div>

                      {/* Skill Name */}
                      <span className="text-center text-[0.65rem] font-semibold leading-tight text-gray-200 sm:text-[0.7rem] md:text-[0.75rem]">
                        {skill.name}
                      </span>
                    </div>

                    {/* Animated border on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                      style={{
                        border: `1px solid ${skill.color}40`
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="relative z-20 flex flex-wrap gap-2.5 pt-1 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <motion.button
                onClick={handleDownloadCV}
                className="group relative flex h-[44px] items-center justify-center overflow-hidden rounded-full bg-[#f72585] px-6 sm:h-12 sm:px-7"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(247,37,133,0.3), rgba(194,23,105,0.2))" }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-white sm:text-[0.775rem] sm:tracking-[0.14em] md:text-[0.8rem] md:tracking-[0.15em]">
                  Download CV
                </span>
              </motion.button>

              <motion.button
                className="group relative flex h-[44px] items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-6 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/5 sm:h-[48px] sm:px-7"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#projects" className="relative z-10 flex items-center gap-2">
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-white sm:text-[0.775rem] sm:tracking-[0.14em] md:text-[0.8rem] md:tracking-[0.15em]">
                  View Projects
                </span>
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
