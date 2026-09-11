import React from 'react';
import { useInView } from '../hooks/useInView';

const techItems = [
  { className: 'google', src: '/img/html.png', alt: 'HTML5' },
  { className: 'ibm', src: '/img/text.png', alt: 'CSS3' },
  { className: 'vector', src: '/img/js.png', alt: 'JavaScript' },
  { className: 'micro', src: '/img/13.png', alt: 'Node.js / Tech' },
  { className: 'harw', src: '/img/7.png', alt: 'Git / Tech' },
  { className: 'vector1', src: '/img/11.png', alt: 'TypeScript / Tech' },
  { className: 'vector2', src: '/img/bootstrap-5-1.svg', alt: 'Bootstrap' },
  { className: 'vector3', src: '/img/react-2.svg', alt: 'React' },
  { className: 'vector4', src: '/img/wordpress.png', alt: 'WordPress' },
];

export default function TechMarquee() {
  const [marqueeRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      id="tech"
      ref={marqueeRef}
      className={`end scroll-reveal ${isInView ? 'revealed' : ''}`}
      aria-label="Technologies and frameworks marquee"
    >
      {techItems.map((item, index) => (
        <div key={index} className={`item ${item.className}`}>
          <img
            height="70"
            loading="lazy"
            decoding="async"
            src={item.src}
            alt={item.alt}
          />
        </div>
      ))}
    </div>
  );
}
