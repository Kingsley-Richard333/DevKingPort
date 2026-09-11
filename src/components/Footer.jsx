import React from 'react';
import { MailIcon, PhoneIcon, LocationIcon } from './Icons';
import { useInView } from '../hooks/useInView';

export default function Footer() {
  const [footerRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className={`site-footer scroll-reveal ${isInView ? 'revealed' : ''}`}>
      <div className="first">
        <div className="left" onClick={(e) => handleNavClick(e, 'home')} style={{ cursor: 'pointer' }}>
          <div className="logo" aria-label="DevKing Logo">DK</div>
          <h1>
            <span style={{ color: 'rgba(0, 179, 255, 0.9)' }}>Dev</span>King
          </h1>
        </div>
        <p>
          Creating immersive digital experiences that bridge imagination and
          reality through cutting-edge technology and artistic vision.
        </p>
      </div>

      <div className="second">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="#hero" onClick={(e) => handleNavClick(e, 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="third">
        <h2>Get In Touch</h2>
        <div className="contact-icons">
          <a href="mailto:kingsleykings016@gmail.com">
            <MailIcon size={15} /> kingsleykings016@gmail.com
          </a>
          <a href="tel:+2349033879621">
            <PhoneIcon size={15} /> +2349033879621
          </a>
          <a
            href="https://www.google.com/maps/place/Ibadan,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocationIcon size={15} /> Ibadan, Nigeria
          </a>
        </div>
      </div>
    </footer>
  );
}
