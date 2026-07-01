"use client";

import React from 'react';
import SkillsCarousel from './SkillsCarousel';

const SkillsSection = () => {
  const skills = [
    {
      name: 'HTML & CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      description: 'Building responsive and accessible web interfaces with semantic HTML and modern CSS techniques.',
      color: '#E34F26'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: 'Developing interactive web applications with modern ES6+ features and DOM manipulation.',
      color: '#F7DF1E'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      description: 'Building type-safe applications with enhanced developer experience and better code maintainability.',
      color: '#3178C6'
    },
    {
      name: 'React JS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Creating dynamic user interfaces with React hooks, components, and state management.',
      color: '#61DAFB'
    },
    {
      name: 'Next.js',
icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",

      description: 'Building full-stack applications with server-side rendering, API routes, and optimized performance.',
      color: '#FFFFFF'
    },
    {
      name: 'Tailwind CSS',
icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",

      description: 'Rapid UI development with utility-first CSS framework for custom designs.',
      color: '#06B6D4'
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      description: 'Developing responsive layouts with Bootstrap grid system and component library.',
      color: '#7952B3'
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      description: 'Designing and managing relational databases with efficient queries and data modeling.',
      color: '#4169E1'
    },
    {
      name: 'Prisma ORM',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
      description: 'Database management with type-safe queries, migrations, and schema definitions.',
      color: '#2D3748'
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      description: 'Version control and collaborative development with Git workflows and branching strategies.',
      color: '#F05032'
    },
    {
      name: 'Vercel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      description: 'Deploying and hosting web applications with seamless CI/CD integration.',
      color: '#000000'
    },
    {
      name: 'FastAPI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      description: 'Building high-performance REST APIs with Python FastAPI framework.',
      color: '#009688'
    },
    {
      name: 'API Integration',
      // Correct API icon — Devicon "api" icon
      icon:'/603197.png',
      description: 'Integrating third-party APIs and services with proper error handling and data validation.',
      color: '#FF6B6B'
    },
    {
      name: 'CMS Integration',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      description: 'Connecting applications with content management systems for dynamic content delivery.',
      color: '#21759B'
    }
  ];

  return <SkillsCarousel skills={skills} />;
};

export default SkillsSection;
