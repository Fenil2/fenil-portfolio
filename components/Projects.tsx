"use client";

import React from 'react';
import ProjectsSection from './ProjectsSection';

const Projects = () => {
  const projects = [
    {
      id: 'dev-x',
      icon: 'R',
      title: 'Ruba Agencies',
      subtitle: 'Agency Website Development for Ruba Agencies',
      image: '/thumbnail2.jpg', // Replace with your actual image path
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://www.rubaagencies.com/',
      size: 'small' as const,
      details: {
        overview: 'Ruba Agencies approached me to build a clean, modern, and high-performance website for their business.',
        requirements: [
          'A professional landing page with hero banner, services overview, about section, client logos, and a contact form.',
          'A smooth and fully responsive design for mobile, tablet, and desktop.',
          'A fast website built using a modern framework (Next.js + TypeScript).',
          'SEO-friendly structure with proper metadata, heading hierarchy and image alt tags.',
          'A secure contact form that sends enquiries directly to their email.',
          'Full control over the visual identity — all colours, UI style, spacing, layout direction, and overall design theme were chosen and approved by the client.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js (App Router)' },
          { category: 'Language', tech: 'TypeScript' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Animations / UI', tech: 'Tailwind transitions + custom components' },
          { category: 'Deployment', tech: 'Vercel / Cloud hosting' },
          { category: 'Performance', tech: 'Next.js image optimization, lazy loading, minified assets' },
          { category: 'SEO', tech: 'Structured metadata, sitemap, robots.txt' }
        ],
        solution: [
          'Built a custom landing page and inner pages with clean layouts structured using Next.js and Tailwind CSS.',
          'Ensured full responsiveness so the design looks perfect on mobile, tablet, and desktop.',
          'Developed smooth UI interactions and fast-loading pages using Next.js performance features.',
          'Implemented the exact colour palette, icons, typography choices, button styles, and visual theme provided by the client — the entire design direction followed the client\'s selected style.',
          'Delivered an SEO-ready structure with optimized code and improved accessibility.',
          'Integrated a secure contact form with email notifications for quick enquiry handling.',
          'Provided the client with post-delivery support and instructions for updates.'
        ]
      }
    },
    {
      id: 'scholar-mattengg',
      icon: 'S',
      title: 'Scholar MattEngg',
      subtitle: 'Academic and Project-Based Services Website',
      image: '/thumbnail3.jpg', // Replace with your actual image path
      tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://scholar.mattengg.com/',
      size: 'small' as const,
      details: {
        overview: 'The client approached me to build a clean, content-focused website for their academic and project-based services. Their primary goal was to highlight information clearly and professionally without an overly decorative UI.',
        requirements: [
          'A website where content is the main priority, not heavy design elements.',
          'A structured layout to showcase services, topics, and student-focused information.',
          'Fast performance, smooth scrolling, and a distraction-free reading experience.',
          'SEO-friendly setup with a sitemap for better indexing.',
          'Full mobile responsiveness across all devices.',
          'All website colours, written content, and textual material were provided directly by the client.',
          'Freedom for me to implement creative animations, layouts, and user interactions within their content guidelines.'
        ],
        techStack: [
          { category: 'Frontend', tech: 'React.js' },
          { category: 'Language', tech: 'TypeScript' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Animations', tech: 'Custom Animations (Tailwind + CSS/JS)' },
          { category: 'SEO', tech: 'Sitemap Integration' },
          { category: 'Performance', tech: 'Optimized Build for fast performance' }
        ],
        solution: [
          'Built a clean and professional layout focused on clarity, readability, and structured content presentation.',
          'Developed custom animations and transitions that enhanced the experience without distracting from the text — all animations and creative interactions were entirely my own ideas.',
          'Implemented the exact colour palette and all textual content provided by the client.',
          'Ensured fully responsive design on mobile, tablet, and desktop using Tailwind CSS.',
          'Created an SEO-optimized structure with sitemap, descriptive meta tags, and clean URLs.',
          'Delivered a fast, smooth, and user-friendly experience powered by React and TypeScript.',
          'Provided post-launch support for updates, content changes, and minor improvements.'
        ]
      }
    },
    {
      id: 'adharsh-d',
      icon: 'A',
      title: 'Adharsh D',
      subtitle: 'Actor & Director Portfolio Website',
      image: '/thumbnail4.jpg', // Replace with your actual image path
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://adharshd-portfolio.vercel.app/',
      size: 'small' as const,
      details: {
        overview: 'The client wanted a personalised portfolio website to showcase his work as an aspiring actor and director. His main requirement was to create a website that carries a vintage cinema aesthetic, reflecting old-film colour tones, retro textures, and a cinematic mood throughout the layout.',
        requirements: [
          'A vintage cinema theme with classic film-inspired visuals.',
          'A layout that highlights acting portfolio, film stills, biography, and featured work.',
          'A personal, artistic website — not SEO-focused, as the goal was brand identity, not ranking.',
          'High-quality video hosting integrated seamlessly into the site.',
          'Fully responsive design for mobile and desktop.',
          'All colours, design style, layout direction, and visual theme were chosen by the client.',
          'Freedom for me to add smooth and subtle animations to enhance the cinematic feel.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Language', tech: 'TypeScript' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Media Hosting', tech: 'Cloudinary Integration' },
          { category: 'Animations', tech: 'Custom Animations' }
        ],
        solution: [
          'Designed a layout around the vintage film theme, using the colour palette and styling fully provided by the client.',
          'Added smooth fade-ins, scroll animations, and cinematic motion effects — all animations were done by me to match the actor\'s brand.',
          'Integrated Cloudinary to ensure high-quality, fast-loading video playback across devices.',
          'Built the platform using Next.js and TypeScript for a stable, high-performance experience.',
          'Tailwind CSS was used to create a responsive design that adapts cleanly for mobile, tablet, and desktop screens.',
          'Focused the entire site on personal branding rather than SEO — keeping the design artistic, clean, and expressive.',
          'Delivered a visually rich, film-inspired portfolio that reflects the personality and vision of the client.'
        ]
      }
    }
  ];

  return <ProjectsSection projects={projects} />;
};

export default Projects;
