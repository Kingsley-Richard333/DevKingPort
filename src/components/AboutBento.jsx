import React, { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export default function AboutBento() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const bentoContainerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const container = bentoContainerRef.current;
    if (!container) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (window.innerWidth <= 1024) return;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = (e.clientX - centerX) / (rect.width / 2);
        const mouseY = (e.clientY - centerY) / (rect.height / 2);

        const containerRotateX = mouseY * -3;
        const containerRotateY = mouseX * 3;

        container.style.transform = `perspective(1500px) rotateX(${containerRotateX}deg) rotateY(${containerRotateY}deg)`;

        itemsRef.current.forEach((item, index) => {
          if (!item) return;
          const factor = (index + 1) * 2;
          const itemX = mouseX * factor;
          const itemY = mouseY * factor;
          item.style.setProperty('--move-x', `${itemX}px`);
          item.style.setProperty('--move-y', `${itemY}px`);
        });
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      container.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg)';
      itemsRef.current.forEach((item) => {
        if (!item) return;
        item.style.setProperty('--move-x', '0px');
        item.style.setProperty('--move-y', '0px');
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleTechScroll = () => {
    const target = document.getElementById('core-values');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="info-cards" id="about" ref={sectionRef}>
      <div
        ref={bentoContainerRef}
        className={`orbital-bento scroll-reveal ${isInView ? 'revealed' : ''}`}
      >
        {/* Card 1: Intro */}
        <div
          ref={(el) => (itemsRef.current[0] = el)}
          className="bento-item box-hero"
        >
          <div className="word">
            <h1>
              Hi, I'm <br />
              <span className="gradient">DevKing</span>
            </h1>
            <p>
              A dedicated frontend developer specializing in creating{' '}
              <em>
                responsive, visually appealing and performance-driven websites
              </em>{' '}
              that deliver exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Card 2: 3D Glowing Avatar Portrait */}
        <div
          ref={(el) => (itemsRef.current[1] = el)}
          className="bento-item box-portrait"
        >
          <div className="container">
            <div className="glow-circle" aria-hidden="true" />
            <div className="glow-ring" aria-hidden="true" />
            <div className="portrait-container">
              <div className="edge-glow" aria-hidden="true" />
              <picture>
                <source srcSet="/img/DevKing.webp" type="image/webp" />
                <img
                  src="/img/DevKing.png"
                  alt="DevKing Portrait"
                  className="portrait"
                  id="portraitImage"
                  /* width="320"
                  height="320" */
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Card 3: Experience Stat */}
        <div
          ref={(el) => (itemsRef.current[2] = el)}
          className="bento-item box-stat"
        >
          <div className="stat-content">
            <h3>Years of Experience</h3>
            <p className="stat-number">5+</p>
            <p>Focused on Real-world Collaborations.</p>
          </div>
        </div>

        {/* Card 4: Core Tech Stack */}
        <div
          id="skill"
          ref={(el) => (itemsRef.current[3] = el)}
          className="bento-item box-tech"
        >
          <h3>Core Stack</h3>
          <div className="mini-tech-icons">
            <span>React</span>
            <span>Next.js</span>
            <span>CSS3</span>
            <span>JS</span>
          </div>
          <button
            type="button"
            className="bento-btn"
            onClick={handleTechScroll}
          >
            Technical Expertise &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
