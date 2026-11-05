"use client";

import React from 'react';
import ProjectsSection from './ProjectsSection';

const Projects = () => {
  const projects = [
    {
      id: 'aura-dental',
      icon: 'A',
      title: 'Aura Dental',
      subtitle: 'Dental Clinic Website for Hyderabad',
      image: '/projects/aura-dental.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Clinic Website'],
      link: 'https://www.auradental.ai/',
      size: 'small' as const,
      details: {
        overview: 'A multi-section website for Aura Dental, a general and cosmetic dental clinic with locations in Madinaguda and Kondapur, Hyderabad.',
        requirements: [
          'Present the full range of services, including implants, Invisalign and aligners, root canal, and pediatric dentistry.',
          'Build trust with Google reviews, doctor information, and testimonials.',
          'Highlight launch offers and make booking an appointment easy from anywhere on the page.',
          'Work smoothly on mobile, tablet, and desktop.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Media', tech: 'Next.js image optimization, YouTube embeds' }
        ],
        solution: [
          'Built a service-led page structure that takes visitors from treatments to reviews to booking.',
          'Added a contact form and repeated booking calls to action, including an offer banner.',
          'Used optimized images and a fully responsive layout for fast loading on every device.'
        ]
      }
    },
    {
      id: 'ndn-fertility',
      icon: 'F',
      title: 'Next Door Nutritionist: Fertility',
      subtitle: 'Fertility Nutrition Program Landing Page',
      image: '/projects/ndn-fertility.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Razorpay'],
      link: 'https://www.nextdoornutritionist.com/fertility',
      size: 'small' as const,
      details: {
        overview: 'A dedicated landing page for the fertility program from Hormone Nutrition Clinic (Next Door Nutritionist), aimed at women dealing with PCOS, low AMH, or irregular periods, or preparing for conception.',
        requirements: [
          'Speak directly to women with fertility concerns, with a clear headline and explainer video.',
          'Let visitors pay for a discovery call online.',
          'Explain the program packages and answer common questions.',
          'Track campaign performance for paid traffic.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Payments', tech: 'Razorpay' },
          { category: 'Media', tech: 'Cloudinary, YouTube embeds' },
          { category: 'Tracking', tech: 'Google Tag Manager, Meta Pixel' }
        ],
        solution: [
          'Built a focused single-program page with one main action: booking the paid discovery call.',
          'Integrated Razorpay so visitors can pay for the call directly from the page.',
          'Added package details and an FAQ section to answer questions before booking.',
          'Set up tracking so ad campaigns can be measured.'
        ]
      }
    },
    {
      id: 'ndn-home',
      icon: 'N',
      title: 'Next Door Nutritionist',
      subtitle: 'Hormone Nutrition Clinic Website',
      image: '/projects/ndn-home.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Lead Generation'],
      link: 'https://www.nextdoornutritionist.com',
      size: 'small' as const,
      details: {
        overview: 'The main lead-generation page for Hormone Nutrition Clinic (Next Door Nutritionist), covering personalized nutrition for PCOS, fertility, diabetes, and weight management.',
        requirements: [
          'Explain the programs and how the process works.',
          'Capture consultation requests from the first screen.',
          'Introduce the founder and build trust with an about section and FAQ.',
          'Support ad campaign tracking.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Media', tech: 'Cloudinary' },
          { category: 'Tracking', tech: 'Google Tag Manager, Meta Pixel' }
        ],
        solution: [
          'Placed a consultation form in the hero so visitors can enquire straight away.',
          'Organized the page into programs, process, about, doctor bio, and FAQ sections.',
          'Built a responsive layout with optimized media for fast loading.'
        ]
      }
    },
    {
      id: 'avn-hip',
      icon: 'H',
      title: 'AVN Arogya: Hip Care',
      subtitle: 'Avascular Necrosis Treatment Landing Page',
      image: '/projects/avn-hip.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Zoho Bookings'],
      link: 'https://treatment.avnarogya.in/',
      size: 'small' as const,
      details: {
        overview: 'A condition-specific landing page for AVN Arogya Ayurvedic Hospital, focused on Ayurvedic and physiotherapy care for avascular necrosis of the hip.',
        requirements: [
          'Explain the condition and the treatment program in plain language.',
          'Promote a paid tele-consultation offer and make it easy to book.',
          'Show the hospital\'s credentials, patient videos, and doctor information.',
          'Support campaign tracking.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Booking', tech: 'Zoho Bookings' },
          { category: 'Media', tech: 'ImageKit, YouTube embeds' },
          { category: 'Tracking', tech: 'Google Tag Manager' }
        ],
        solution: [
          'Built a hero with a strong message, key credentials, and a tele-consultation call to action.',
          'Connected Zoho Bookings so patients can schedule their consultation online.',
          'Added video and doctor sections to build trust before booking.'
        ]
      }
    },
    {
      id: 'avn-knee',
      icon: 'K',
      title: 'AVN Arogya: Knee Care',
      subtitle: 'Knee Treatment Landing Page',
      image: '/projects/avn-knee.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Landing Page'],
      link: 'https://treatment.avnarogya.in/knee-treatments',
      size: 'small' as const,
      details: {
        overview: 'A landing page for AVN Arogya Ayurvedic Hospital aimed at people with knee osteoarthritis, arthritis, and related joint conditions who are looking for non-surgical care.',
        requirements: [
          'Cover the knee and joint conditions the hospital treats.',
          'Offer a tele-consultation with clear booking and call options.',
          'Keep the design consistent with the other AVN Arogya treatment pages.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Media', tech: 'ImageKit, YouTube embeds' },
          { category: 'Tracking', tech: 'Google Tag Manager' }
        ],
        solution: [
          'Created a knee-specific hero and message within the shared AVN Arogya page structure.',
          'Added "Book Now" and "Call Now" actions in the hero for quick enquiries.',
          'Included a "Why Choose AVN Arogya" section and patient videos.'
        ]
      }
    },
    {
      id: 'avn-spine',
      icon: 'B',
      title: 'AVN Arogya: Back & Spine',
      subtitle: 'Back & Spine Treatment Landing Page',
      image: '/projects/avn-spine.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Landing Page'],
      link: 'https://treatment.avnarogya.in/Back&Spine-Treatment',
      size: 'small' as const,
      details: {
        overview: 'A landing page for AVN Arogya Ayurvedic Hospital covering back and spine conditions such as sciatica, disc problems, lumbar spondylosis, and spinal stenosis.',
        requirements: [
          'Speak to patients with back and spine conditions specifically.',
          'Promote a back and spine tele-consultation offer.',
          'Keep the design consistent with the other AVN Arogya treatment pages.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Media', tech: 'ImageKit, YouTube embeds' },
          { category: 'Tracking', tech: 'Google Tag Manager' }
        ],
        solution: [
          'Created a condition-specific hero and content on the shared AVN Arogya page structure.',
          'Added booking and call actions that are easy to reach on mobile.',
          'Included hospital credentials and patient videos to build trust.'
        ]
      }
    },
    {
      id: 'avn-neck',
      icon: 'S',
      title: 'AVN Arogya: Neck & Shoulder',
      subtitle: 'Neck & Shoulder Treatment Landing Page',
      image: '/projects/avn-neck.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Landing Page'],
      link: 'https://treatment.avnarogya.in/neck&shoulder',
      size: 'small' as const,
      details: {
        overview: 'A landing page for AVN Arogya Ayurvedic Hospital covering neck and shoulder conditions such as cervical spondylosis, cervical radiculopathy, and frozen shoulder.',
        requirements: [
          'Speak to patients with neck and shoulder conditions specifically.',
          'Offer a tele-consultation with clear booking and call options.',
          'Keep the design consistent with the other AVN Arogya treatment pages.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Media', tech: 'ImageKit, YouTube embeds' },
          { category: 'Tracking', tech: 'Google Tag Manager' }
        ],
        solution: [
          'Created a condition-specific hero and content on the shared AVN Arogya page structure.',
          'Added "Book Now" and "Call Now" actions in the hero for quick enquiries.',
          'Included a "Why Choose AVN Arogya" section and patient videos.'
        ]
      }
    },
    {
      id: 'the-physiora',
      icon: 'P',
      title: 'The Physiora',
      subtitle: 'Physiotherapy Clinic Landing Page in Chennai',
      image: '/projects/physiora.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Lead Generation'],
      link: 'https://treatment.thephysiora.com/',
      size: 'small' as const,
      details: {
        overview: 'A lead-generation landing page for The Physiora, a personalized physiotherapy clinic in Egattur, Chennai, offering in-person and online sessions.',
        requirements: [
          'Capture free consultation requests from the first screen.',
          'Explain the conditions treated, from back and neck pain to sports injuries and neurological rehab.',
          'Introduce the chief physiotherapist and share patient reviews.',
          'Give visitors quick ways to call or message the clinic.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Contact', tech: 'WhatsApp click-to-chat' },
          { category: 'Tracking', tech: 'Google Tag Manager' }
        ],
        solution: [
          'Placed a short consultation form beside the headline in the hero.',
          'Added a stats band and a "What We Treat" grid so visitors can quickly find their condition.',
          'Added call, booking, and WhatsApp actions throughout the page.'
        ]
      }
    },
    {
      id: 'grow-medico-ayurveda',
      icon: 'G',
      title: 'Grow Medico',
      subtitle: 'Ayurveda Marketing Agency Lead-Gen Page',
      image: '/projects/growmedico.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Lead Generation'],
      link: 'https://audit.growmedico.in/ayurveda',
      size: 'small' as const,
      details: {
        overview: 'A lead-generation page for Grow Medico, a healthcare marketing agency, aimed at Ayurveda brands and clinic owners and offering a free one-on-one strategy session.',
        requirements: [
          'Position the agency as an Ayurveda specialist with a direct, confident message.',
          'Qualify visitors before they apply for a strategy session.',
          'Show proof through case studies and testimonials.',
          'Capture leads through a short form and WhatsApp.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Contact', tech: 'WhatsApp click-to-chat' },
          { category: 'Tracking', tech: 'Google Tag Manager, Meta Pixel' }
        ],
        solution: [
          'Designed a dark, high-contrast page built around one action: reserving a strategy session.',
          'Structured the page around the problem, the session, and the proof.',
          'Added a short form and WhatsApp actions, along with tracking for ad campaigns.'
        ]
      }
    },
    {
      id: 'eclora-aesthetics',
      icon: 'E',
      title: 'Eclora Aesthetics',
      subtitle: 'Skin, Hair & Body Clinic Landing Page',
      image: '/projects/eclora.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Landing Page'],
      link: 'https://treatment.ecloraaesthetics.com/',
      size: 'small' as const,
      details: {
        overview: 'A treatment landing page for Eclora Aesthetics, a skin, hair, and body aesthetics clinic in Gurugram.',
        requirements: [
          'Showcase real before-and-after results by treatment.',
          'Present services such as laser hair reduction, pigmentation care, and hair regrowth.',
          'Explain the patient journey and share testimonials.',
          'Capture consultation requests through a form.'
        ],
        techStack: [
          { category: 'Framework', tech: 'Next.js' },
          { category: 'Styling', tech: 'Tailwind CSS' },
          { category: 'Media', tech: 'Cloudinary' },
          { category: 'Tracking', tech: 'Google Tag Manager' }
        ],
        solution: [
          'Built a promotional banner hero that shows the clinic\'s offer and contact details up front.',
          'Created a before-and-after gallery and treatment cards as the core of the page.',
          'Delivered images through Cloudinary to keep a media-heavy page loading quickly.',
          'Added journey, testimonial, and consultation form sections to guide visitors to enquire.'
        ]
      }
    },
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
