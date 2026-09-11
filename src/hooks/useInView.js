import { useEffect, useRef, useState } from 'react';

export function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px', triggerOnce: true }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [ref, isInView];
}
