import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Staggered page-load animation trigger
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className={`hero-info hero-animate ${loaded ? 'visible' : ''}`}>
        <div className="hero-info-title">
          Front-end Developer Portfolio
        </div>
        <h1 className="gradient hero-title-item" style={{ animationDelay: '0.1s' }}>Focus</h1>
        <h1 className="hero-title-item hero-passion" style={{ animationDelay: '0.2s' }}>Passion</h1>
        <h1 className="gradient hero-title-item" style={{ animationDelay: '0.3s' }}>Creativity</h1>
        <p className="hero-desc">
          Transforming ideas into immersive digital experiences through
          cutting-edge technology, innovative design, and seamless user
          interactions. Specializing in React, 3D web development, and creating
          the future of digital interfaces.
        </p>
        <button
          id="about-cta"
          className="mebtn hero-cta-btn"
          onClick={handleContactClick}
        >
          Contact Me &rarr;
        </button>
      </div>

      <div className={`hero-vid-box hero-video-animate ${loaded ? 'visible' : ''}`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="3D digital sphere interactive animation"
        >
          <source src="/videos/compressed/hero-video.mp4" type="video/mp4" />
          <source src="/videos/compressed/hero-video.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
}
