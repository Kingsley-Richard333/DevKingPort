import { useState, useEffect } from 'react';

export function useScrollEffects() {
  const [scrollState, setScrollState] = useState({
    blackholeOpacity: 1,
    headerBrightness: 0,
    scrollY: 0,
  });

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const fadeStart = 100;
          const fadeDistance = 450;

          // Blackhole opacity: 1 -> 0.2
          let bOpacity = 1 - (currentScroll - fadeStart) / fadeDistance;
          bOpacity = Math.max(0.2, Math.min(1, bOpacity));

          // Header brightness: 0 -> 1
          let hBrightness = (currentScroll - fadeStart) / fadeDistance;
          hBrightness = Math.max(0, Math.min(1, hBrightness));

          setScrollState({
            blackholeOpacity: bOpacity,
            headerBrightness: hBrightness,
            scrollY: currentScroll,
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollState;
}
