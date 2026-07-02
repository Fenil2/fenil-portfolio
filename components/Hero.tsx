// "use client";

// import Image from "next/image";
// import { motion, useScroll, useTransform, Variants } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// export default function Hero() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMobile, setIsMobile] = useState(true);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   // Check if mobile on mount and resize
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Parallax effects - only apply on desktop
//   const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

//   // Animation variants
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const leftVariants: Variants = {
//     hidden: { opacity: 0, x: -60, y: 20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.6, 0.05, 0.01, 0.9],
//       },
//     },
//   };

//   const imageVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.8, y: 30 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         ease: [0.6, 0.05, 0.01, 0.9],
//       },
//     },
//   };

//   const rightVariants: Variants = {
//     hidden: { opacity: 0, x: 60, y: 20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.6, 0.05, 0.01, 0.9],
//         delay: 0.2,
//       },
//     },
//   };

//   const lineVariants: Variants = {
//     hidden: { width: 0 },
//     visible: {
//       width: "112px",
//       transition: {
//         duration: 1,
//         ease: [0.6, 0.05, 0.01, 0.9],
//       },
//     },
//   };

//   return (
//     <section
//       id="hero"
//       ref={containerRef}
//       className="relative min-h-screen w-full overflow-hidden bg-black"
//     >
//       {/* Polished black gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a]" />

//       {/* Subtle radial gradient overlay for polish effect */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,20,20,0.8)_0%,_rgba(0,0,0,1)_100%)]" />

//       {/* Subtle shine overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

//       {/* Main container - overlapping layout like reference */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col items-center px-4 py-16 pt-24 sm:px-6 md:px-8 lg:flex-row lg:px-12 xl:px-16"
//       >
//         {/* Left Section - Introduction */}
//         <motion.div
//           variants={leftVariants}
//           style={!isMobile ? { y: textY } : {}}
//           className="relative z-20 flex w-full max-w-[450px] flex-col justify-center space-y-4 text-center sm:space-y-6 md:space-y-8 lg:max-w-[480px] lg:text-left"
//         >
//           {/* Decorative Line with animation */}
//           <div className="relative mx-auto h-[3px] w-20 overflow-hidden bg-white/20 sm:w-24 md:w-28 lg:mx-0">
//             <motion.div
//               variants={lineVariants}
//               className="absolute inset-0 h-full bg-white"
//             />
//           </div>

//           {/* Main Heading */}
//           <motion.h1
//             className="text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             I'm Siva,{" "}
//             <motion.span
//               className="inline-block text-[1.9rem] sm:text-[2.4rem] md:text-[2.9rem] lg:text-[2.9rem] xl:text-[2.9rem]"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             >
//               a Web Developer
//             </motion.span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             className="mx-auto max-w-[420px] text-[0.9rem] leading-[1.6] text-gray-300/90 sm:text-[0.95rem] sm:leading-[1.65] md:text-[1rem] md:leading-[1.7] lg:mx-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Crafting modern web experiences with React.js, Next.js, and TypeScript.
//             Specialized in responsive design, API integration, and database management.
//           </motion.p>

//           {/* Skills Icons */}
//  <motion.div
//   className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:gap-4 sm:pt-3 md:pt-4 lg:justify-start"
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, delay: 0.8 }}
// >

//   {/* React */}
//   <motion.div
//     className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm sm:h-12 sm:w-12"
//     whileHover={{ scale: 1.1, backgroundColor: 'rgba(97, 218, 251, 0.1)' }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
//       alt="React"
//       className="h-6 w-6 sm:h-7 sm:w-7"
//     />
//   </motion.div>

//   {/* Next.js */}
//   <motion.div
//     className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm sm:h-12 sm:w-12"
//     whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
//       alt="Next.js"
//       className="h-6 w-6 sm:h-7 sm:w-7 invert"
//     />
//   </motion.div>

//   {/* JavaScript */}
//   <motion.div
//     className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm sm:h-12 sm:w-12"
//     whileHover={{ scale: 1.1, backgroundColor: 'rgba(247, 223, 30, 0.15)' }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
//       alt="JavaScript"
//       className="h-6 w-6 sm:h-7 sm:w-7"
//     />
//   </motion.div>

//   {/* TypeScript */}
//   <motion.div
//     className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm sm:h-12 sm:w-12"
//     whileHover={{ scale: 1.1, backgroundColor: 'rgba(49,120,198,0.15)' }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <img
//       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
//       alt="TypeScript"
//       className="h-6 w-6 sm:h-7 sm:w-7"
//     />
//   </motion.div>

//   {/* Tailwind CSS */}
//   <motion.div
//     className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm sm:h-12 sm:w-12"
//     whileHover={{ scale: 1.1, backgroundColor: 'rgba(56, 189, 248, 0.15)' }}
//     whileTap={{ scale: 0.95 }}
//   >
//     <img
//       src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg"

//       alt="Tailwind CSS"
//       className="h-6 w-6 sm:h-7 sm:w-7"
//     />
//   </motion.div>

// </motion.div>


//         </motion.div>

//         {/* Center/Right - Cartoon Character (Overlapping layout) */}
//         <motion.div
//           variants={imageVariants}
//           style={!isMobile ? { y: imageY } : {}}
//           className="relative z-10 my-6 sm:my-8 md:my-10 lg:absolute lg:left-1/2 lg:top-1/2 lg:my-0 lg:-translate-x-1/2 lg:-translate-y-1/2"
//         >
//           {/* Image Container - Positioned in center overlapping both sides */}
//           <div className="relative h-[380px] w-[320px] sm:h-[350px] sm:w-[280px] md:h-[420px] md:w-[340px] lg:h-[600px] lg:w-[480px] xl:h-[750px] xl:w-[620px]">
//             {/* Animated glow effect */}
//             <motion.div
//               className="absolute -bottom-4 left-1/2 h-[80px] w-[160px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl sm:h-[100px] sm:w-[200px] md:h-[120px] md:w-[240px] lg:h-[150px] lg:w-[300px]"
//               animate={{
//                 scale: [1, 1.1, 1],
//                 opacity: [0.15, 0.25, 0.15],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />

//             {/* High-Quality Image with floating animation */}
//             <motion.div
//               className="relative h-full w-full"
//               animate={{
//                 y: [0, -10, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <Image
//                 src="/cartoon1.png"
//                 alt="John - Web Developer"
//                 fill
//                 priority
//                 quality={100}
//                 className="object-contain object-bottom"
//                 sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 340px, (max-width: 1280px) 480px, 620px"
//                 style={{
//                   imageRendering: "-webkit-optimize-contrast",
//                 }}
//               />
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Right Section - About & Work */}
//         <motion.div
//           variants={rightVariants}
//           style={!isMobile ? { y: textY } : {}}
//           className="relative z-20 flex w-full max-w-[420px] flex-col justify-center space-y-8 text-center sm:space-y-10 md:space-y-12 lg:ml-[450px] lg:max-w-[450px] lg:text-left"
//         >
//           {/* About Me Section */}
//           <motion.div
//             className="group space-y-3 sm:space-y-4 md:space-y-5"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white sm:text-[0.75rem] sm:tracking-[0.22em] md:text-[0.8rem] md:tracking-[0.25em]">
//               ABOUT ME
//             </h2>
//             <p className="mx-auto max-w-[420px] text-[0.95rem] leading-[1.6] text-gray-300/90 sm:text-[1rem] sm:leading-[1.65] md:text-[1.05rem] md:leading-[1.7] lg:mx-0">
//               2+ years of experience delivering client-focused web solutions.
//               Expert in modern frameworks, database integration, and creating pixel-perfect responsive designs.
//             </p>
//             <div className="pt-1">
//               <motion.a
//                 href="#about"
//                 className="group/link inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white sm:gap-2.5 sm:text-[0.75rem] sm:tracking-[0.13em] md:gap-3 md:text-[0.8rem] md:tracking-[0.15em]"
//                 whileHover={{ gap: "1rem" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 LEARN MORE
//                 <motion.svg
//                   className="h-[12px] w-[12px] sm:h-[13px] sm:w-[13px] md:h-[14px] md:w-[14px]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2.5"
//                   whileHover={{ x: 4 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </motion.svg>
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* My Work Section */}
//           <motion.div
//             className="group space-y-3 sm:space-y-4 md:space-y-5"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white sm:text-[0.75rem] sm:tracking-[0.22em] md:text-[0.8rem] md:tracking-[0.25em]">
//               MY WORK
//             </h2>
//             <p className="mx-auto max-w-[420px] text-[0.95rem] leading-[1.6] text-gray-300/90 sm:text-[1rem] sm:leading-[1.65] md:text-[1.05rem] md:leading-[1.7] lg:mx-0">
//               Delivered projects for Ruba Agencies, Scholar MattEngg, and Adharsh D.
//               Building fast, SEO-optimized websites with seamless user experiences.
//             </p>
//             <div className="pt-1">
//               <motion.a
//                 href="#projects"
//                 className="group/link inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white sm:gap-2.5 sm:text-[0.75rem] sm:tracking-[0.13em] md:gap-3 md:text-[0.8rem] md:tracking-[0.15em]"
//                 whileHover={{ gap: "1rem" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 BROWSE PROJECTS
//                 <motion.svg
//                   className="h-[12px] w-[12px] sm:h-[13px] sm:w-[13px] md:h-[14px] md:w-[14px]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2.5"
//                   whileHover={{ x: 4 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </motion.svg>
//               </motion.a>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>

  
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiVercel } from "react-icons/si";
import type { IconType } from "react-icons";

interface Tool {
  id: string;
  Icon: IconType;
  color: string;
  glow: string;
  delay: number;
}

const TOOLS: Tool[] = [
  { id: "react",  Icon: FaReact,     color: "#61dafb", glow: "rgba(97,218,251,0.4)",   delay: 0.5  },
  { id: "next",   Icon: SiNextdotjs, color: "#ffffff", glow: "rgba(255,255,255,0.3)",  delay: 0.65 },
  { id: "vercel", Icon: SiVercel,    color: "#ffffff", glow: "rgba(255,255,255,0.25)", delay: 0.8  },
  { id: "html",   Icon: FaHtml5,     color: "#e34f26", glow: "rgba(227,79,38,0.45)",   delay: 0.95 },
  { id: "css",    Icon: FaCss3Alt,   color: "#2965f1", glow: "rgba(41,101,241,0.45)",  delay: 1.1  },
  { id: "js",     Icon: FaJs,        color: "#f7df1e", glow: "rgba(247,223,30,0.4)",   delay: 1.25 },
  { id: "github", Icon: FaGithub,    color: "#ffffff", glow: "rgba(255,255,255,0.25)", delay: 1.4  },
];

const STATS = [
  { value: "2+", label: "Years of\nExperience" },
  { value: "10+", label: "Client\nServices" },
  { value: "5+", label: "Complete\nProjects" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-6"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 55% 50%, #1a0f42 0%, #0d0b26 55%, #060418 100%)",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full max-w-screen-xl mx-auto px-6 lg:px-12 flex items-center min-h-screen py-28 max-[470px]:py-12 lg:py-0">

        {/* 3-column content area */}
        <div className="flex flex-col items-center gap-10 w-full sm:gap-12 lg:flex-row lg:items-center lg:gap-8">

          {/* ── Col 1: Text ── */}
          <div className="flex-1 min-w-0 z-10 w-full text-center lg:text-left lg:py-0">
            {/* Label */}
            <motion.div
              className="flex items-center justify-center gap-3 mb-6 lg:justify-start"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <span className="block h-px w-10" style={{ background: "#f72585" }} />
              <span
                className="text-xs font-semibold tracking-[0.28em] uppercase"
                style={{ color: "#f72585" }}
              >
                Frontend Developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display font-bold text-white mb-5"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", lineHeight: 1.12 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              I will give you Best{" "}
              <span style={{ color: "#f72585" }}>Web</span> Apps in the
              <br />
              Shortest Time
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm leading-relaxed mb-8 max-w-xs mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.55)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              I&apos;m a Frontend Developer focused on crafting fast, clean &amp;
              user-friendly web experiences.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#about"
              className="inline-block px-8 py-3 rounded-full font-semibold text-white text-sm"
              style={{
                background: "#f72585",
                boxShadow: "0 0 28px rgba(247,37,133,0.5)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 42px rgba(247,37,133,0.72)" }}
              whileTap={{ scale: 0.97 }}
            >
              More About Me
            </motion.a>
          </div>

          {/* ── Col 2: Circular image with orbiting icons ── */}
          <div
            className="relative flex-shrink-0 flex items-center justify-center w-60 h-60 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]"
          >
            <div
              className="absolute top-0 left-0 origin-top-left scale-[0.5] sm:scale-[0.6667] md:scale-[0.8333] lg:scale-100"
              style={{ width: 480, height: 480 }}
            >
              {/* Outer decorative ring */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 458,
                  height: 458,
                  top: 11,
                  left: 11,
                  border: "1px solid rgba(247,37,133,0.22)",
                  boxShadow: "0 0 36px rgba(247,37,133,0.07)",
                }}
              />

              {/* Inner dashed ring */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 335,
                  height: 335,
                  top: 72.5,
                  left: 72.5,
                  border: "1px dashed rgba(99,102,241,0.3)",
                }}
              />

              {/* Background glow */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 285,
                  height: 285,
                  top: 97.5,
                  left: 97.5,
                  background:
                    "radial-gradient(circle, rgba(247,37,133,0.16) 0%, rgba(99,102,241,0.08) 55%, transparent 80%)",
                  filter: "blur(26px)",
                }}
              />

              {/* Circular photo */}
              <div
                className="absolute z-10 rounded-full overflow-hidden select-none"
                style={{
                  width: 268,
                  height: 268,
                  top: 106,
                  left: 106,
                  border: "2.5px solid rgba(247,37,133,0.5)",
                  boxShadow:
                    "0 0 50px rgba(247,37,133,0.26), 0 0 100px rgba(99,102,241,0.13)",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Fenil RR"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 8%" }}
                  priority
                />
              </div>

              {/* Orbit wrapper — rotates clockwise continuously */}
              <motion.div
                className="absolute"
                style={{ width: 480, height: 480, top: 0, left: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                {TOOLS.map((tool, i) => {
                  const angle = (i / TOOLS.length) * 2 * Math.PI - Math.PI / 2;
                  const r = 205, cx = 240, cy = 240, s = 48;
                  const left = cx + r * Math.cos(angle) - s / 2;
                  const top  = cy + r * Math.sin(angle) - s / 2;
                  return (
                    <motion.div
                      key={tool.id}
                      className="absolute z-20 flex items-center justify-center rounded-full font-bold"
                      style={{
                        left,
                        top,
                        width: s,
                        height: s,
                        background: "#12102e",
                        border: `1.5px solid ${tool.color}55`,
                        boxShadow: `0 0 18px ${tool.glow}, inset 0 0 8px ${tool.glow}`,
                        color: tool.color,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, rotate: -360 }}
                      transition={{
                        opacity: { duration: 0.4, delay: tool.delay },
                        scale:   { duration: 0.4, delay: tool.delay, ease: [0.34, 1.56, 0.64, 1] },
                        rotate:  { duration: 22, repeat: Infinity, ease: "linear" },
                      }}
                    >
                      <tool.Icon size={22} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* ── Col 3: Stats ── */}
          <div
            className="flex-shrink-0 flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 lg:flex-col lg:flex-nowrap lg:gap-0 lg:pl-8 lg:pt-0 lg:border-l lg:border-white/10"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.15 }}
              >
                <div className="py-2 text-center w-24 lg:py-6 lg:w-28">
                  <div
                    className="font-display font-bold leading-none mb-1"
                    style={{ fontSize: "1.8rem", color: "#ffffff" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs leading-snug whitespace-pre-line"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {stat.label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div className="hidden lg:block" style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
