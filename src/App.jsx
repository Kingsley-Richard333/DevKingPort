import React from 'react';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import AboutBento from './components/AboutBento';
import CoreValues from './components/CoreValues';
import FeaturedProjects from './components/FeaturedProjects';
import TechMarquee from './components/TechMarquee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollEffects } from './hooks/useScrollEffects';

export default function App() {
  const { blackholeOpacity, headerBrightness } = useScrollEffects();

  return (
    <div className="container1">
      {/* Background Videos & Ambient Glow Layers */}
      <BackgroundEffects blackholeOpacity={blackholeOpacity} />

      {/* Navigation Header */}
      <Navbar headerBrightness={headerBrightness} />

      {/* Hero Section */}
      <Hero />

      {/* About & Core Stack Bento Grid */}
      <AboutBento />

      {/* Core Values & Pillars */}
      <CoreValues />

      {/* Featured Projects Showcase */}
      <FeaturedProjects />

      {/* Tech Stack Infinite Marquee */}
      <TechMarquee />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
