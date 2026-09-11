import React, { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export default function CoreValues() {
  const containerRef = useRef(null);
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (window.innerWidth <= 768) return;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const offsetX = e.clientX - centerX;
        const offsetY = e.clientY - centerY;

        const rotateY = (offsetX / rect.width) * -5;
        const rotateX = (offsetY / rect.height) * 5;

        container.style.transform = `perspective(1000px) rotateX(${5 + rotateX}deg) rotateY(${-5 + rotateY}deg)`;
      });
    };

    const handleMouseLeave = () => {
      if (window.innerWidth <= 768) return;
      if (rafId) cancelAnimationFrame(rafId);
      container.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-5deg)';
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="core-values" ref={sectionRef} className="core-values-wrapper">
      <div
        ref={containerRef}
        className={`grid-container scroll-reveal ${isInView ? 'revealed' : ''}`}
      >
        {/* Box 1: Technical Expertise */}
        <div className="grid-item anchor-box" id="box1">
          <div className="content">
            <h2>01. Technical Expertise</h2>
            <p>
              Engineered for Excellence: I leverage a diverse, modern
              stack—including frameworks like React/Next.js and Node.js—to
              architect and deploy robust, scalable, and high-performance web
              solutions. My development methodology mandates clean, maintainable
              code, responsive design principles, and rigorous testing to
              guarantee project quality and long-term reliability.
            </p>
            <a href="#contact" onClick={handleLinkClick}>
              Let's Explore &rarr;
            </a>
          </div>
        </div>

        {/* Box 2: Global Collaboration */}
        <div className="grid-item connector-box" id="box2">
          <div className="content">
            <h2>02. Global Collaboration</h2>
            <p>
              Distributed Team Leadership: Proficient in working across global
              time zones and collaborating with diverse, distributed teams. I
              prioritize proactive, clear communication and utilize modern
              collaboration tools to maintain consistent velocity, transparency,
              and timely delivery for clients worldwide. Distance is converted
              into an asset for round-the-clock progress.
            </p>
            <a href="#contact" id="pro" onClick={handleLinkClick}>
              Let's collaborate &rarr;
            </a>
          </div>
        </div>

        {/* Box 3: Passion for Innovation */}
        <div className="grid-item foundation-box" id="box3">
          <div className="content">
            <h2>03. Passion for Innovation</h2>
            <p>
              Driven by Impact & Innovation: My passion lies in translating
              real-world challenges into meaningful digital experiences. I treat
              programming as a core creative discipline, constantly exploring
              emerging technologies to build smarter, more impactful, and
              user-centered solutions. This drive fuels a commitment to delivering
              clean, optimized, and future-proof code that genuinely moves the
              needle.
            </p>
            <a href="#contact" onClick={handleLinkClick}>
              Let's Create Wonders &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
