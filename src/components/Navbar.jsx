import React, { useState, useEffect, useRef } from 'react';
import { LinkedInIcon, InstagramIcon, GitHubIcon, WhatsAppIcon } from './Icons';

export default function Navbar({ headerBrightness = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close mobile menu on Escape key press or click outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic header styles calculated from scroll position
  const baseBgOpacity = 0.2;
  const maxBgOpacity = 0.65;
  const bgOpacity = baseBgOpacity + headerBrightness * (maxBgOpacity - baseBgOpacity);
  const shadowSpread = 20 + headerBrightness * 30;
  const shadowAlpha = 0.3 + headerBrightness * 0.3;

  const headerStyle = {
    backgroundColor: `rgba(18, 22, 50, ${bgOpacity})`,
    boxShadow: `0 0 ${shadowSpread}px rgba(114, 161, 222, ${shadowAlpha})`,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  };

  const ulBaseOpacity = 0.3;
  const ulMaxOpacity = 0.65;
  const ulOpacity = ulBaseOpacity + headerBrightness * (ulMaxOpacity - ulBaseOpacity);
  const ulStyle = {
    backgroundColor: `rgba(0, 0, 69, ${ulOpacity})`,
  };

  return (
    <header style={headerStyle}>
      <div className="left" onClick={(e) => handleNavClick(e, 'hero')} style={{ cursor: 'pointer' }}>
        <div className="logo" aria-label="DevKing Logo">DK</div>
        <h1>
          <span style={{ color: 'rgba(0, 179, 255, 0.9)' }}>Dev</span>King
        </h1>
      </div>

      <div
        ref={hamburgerRef}
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        id="hamburger"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        role="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        tabIndex={0}
      >
        <span />
        <span />
        <span />
      </div>

      <nav
        ref={menuRef}
        className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
        id="mobileMenu"
      >
        <ul style={ulStyle}>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#skill" onClick={(e) => handleNavClick(e, 'skill')}>
              Skills
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

        <div className="box-icons">
          <a
            href="https://www.linkedin.com/in/kingsley-richards-4217ab326"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DevKing on LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DevKing on Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://github.com/Kingsley-Richard333"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DevKing on GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://wa.me/2349033879621"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DevKing on WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
