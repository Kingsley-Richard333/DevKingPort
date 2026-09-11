import React from 'react';

export default function BackgroundEffects({ blackholeOpacity = 1 }) {
  return (
    <>
      {/* Persistent ambient background galaxy video */}
      <video
        className="back-vid"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/compressed/galaxy.mp4" type="video/mp4" />
      </video>

      {/* Top Blackhole video with scroll-driven opacity fade */}
      <div
        className="blackhole-box"
        style={{
          opacity: blackholeOpacity,
          transition: 'opacity 0.15s ease-out',
        }}
        aria-hidden="true"
      >
        <video
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/compressed/blackhole.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated ambient gradient background layers */}
      <div className="background-effect" aria-hidden="true" />
      <div className="dynamic-background" aria-hidden="true" />
    </>
  );
}
