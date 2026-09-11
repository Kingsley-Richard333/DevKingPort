import React from 'react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    id: 'sicklecare',
    cardClass: 'card-a',
    title: 'SickleCare',
    subtitle: 'Comprehensive Health Management Platform',
    description:
      'Engineered a Next.js-based healthcare platform designed to empower sickle cell patients. The system includes a Symptom Tracker, a Geolocated Provider Locator, and an Intuitive Data Dashboard to facilitate proactive health management, ensuring a smooth, reliable user experience.',
    link: 'https://sicklecare.netlify.app/',
    webp: '/img/sicklecare.webp',
    png: '/img/sicklecare.png',
    alt: 'SickleCare Health Platform',
  },
  {
    id: 'loopstudio',
    cardClass: 'card-b',
    title: 'LoopStudio Landing Page',
    subtitle: null,
    description:
      'Developed a high-fidelity, visually compelling landing page emphasizing modern brand identity and user engagement. The project features pixel-perfect responsiveness, JavaScript-driven smooth scroll, and interactive hover effects, ensuring optimal performance through efficient, lightweight code.',
    link: 'https://loopstudiopag.netlify.app/',
    webp: '/img/loopstudio.webp',
    png: '/img/loopstudio.png',
    alt: 'LoopStudio Landing Page Project',
  },
  {
    id: 'fylo',
    cardClass: 'card-c',
    title: 'Fylo Landing Page',
    subtitle: 'Fylo Secure File Storage & Management Platform',
    description:
      'Built a modern, security-focused web platform providing seamless, cross-device access to digital files. Features a clean, minimalist UI designed for intuitive navigation, secure storage simulation, and guaranteed fast, reliable file access on any device.',
    link: 'https://fylod.netlify.app/',
    webp: '/img/fylo.webp',
    png: '/img/fylo.png',
    alt: 'Fylo File Storage Platform',
  },
  {
    id: 'cliniq',
    cardClass: 'card-d',
    title: 'ClinIQ',
    subtitle: null,
    description:
      'An intelligent medical education platform built with React and Vite, integrating Supabase for data management and Anthropic API for adaptive learning. Features include interactive MCQ practice, real-time progress tracking, community collaboration, and personalized learning pathways for preclinical medical students.',
    link: 'https://cliiniq.netlify.app/',
    webp: '/img/ClinIQ.webp',
    png: '/img/ClinIQ.png',
    alt: 'ClinIQ Medical Education Platform',
  },
  {
    id: 'rotaracts',
    cardClass: 'card-e',
    title: 'Rotaracts Club IU',
    subtitle: null,
    description:
      'An interactive frontend web application built with React, TypeScript, and Vite, designed to support the Rotaract Club Ring Road with a clean, responsive, and modern user interface. The project focuses on delivering a smooth user experience through component-based architecture, fast performance optimization, and scalable UI structure for future expansion of club activities and digital engagement.',
    link: 'https://rotaractrr.netlify.app/',
    webp: '/img/Rotaracts.webp',
    png: '/img/Rotaracts.png',
    alt: 'Rotaracts Club Web Application',
  },
];

export default function FeaturedProjects() {
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [gridRef, isGridInView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div className="main-content" id="projects">
      {/* Anchor alias for backwards-compatibility with #project and #tech1 */}
      <div id="project" style={{ position: 'relative', top: '-80px', visibility: 'hidden' }} />
      <div id="tech1" style={{ position: 'relative', top: '-80px', visibility: 'hidden' }} />

      <div
        ref={headerRef}
        className={`showcase-header scroll-reveal ${isHeaderInView ? 'revealed' : ''}`}
      >
        <h2>Featured Projects</h2>
        <p>
          A collection of diverse case studies demonstrating proficiency in
          front-end development and creative problem-solving.
        </p>
      </div>

      <section
        ref={gridRef}
        className={`layered-grid-wrapper scroll-reveal ${isGridInView ? 'revealed' : ''}`}
        id="layeredGridContainer"
      >
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project-card ${project.cardClass}`}
          >
            <div className="project-image-slot">
              <picture>
                <source srcSet={project.webp} type="image/webp" />
                <img
                  loading="lazy"
                  decoding="async"
                  src={project.png}
                  alt={project.alt}
                  width="550"
                  height="280"
                />
              </picture>
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              {project.subtitle && (
                <>
                  <br />
                  <h4>{project.subtitle}</h4>
                </>
              )}
              <p>{project.description}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
                className="view-project-btn"
              >
                View Project &rarr;
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
