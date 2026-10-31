import { useState, useEffect } from 'react';

/**
 * Custom hook for counting animation
 * @param {number} endValue - The final number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {number} startValue - Starting value (default: 0)
 * @param {boolean} shouldStart - Whether to start the animation
 * @returns {number} Current count value
 */
export const useCountAnimation = (endValue, duration = 2000, startValue = 0, shouldStart = true) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation (easeOutCubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (endValue - startValue) * easeOutCubic;
      setCount(Math.floor(currentValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue); // Ensure we end exactly at the target value
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration, startValue, shouldStart]);

  return count;
};

/**
 * Custom hook for counting animation with intersection observer
 * Starts counting when element comes into view
 * @param {number} endValue - The final number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {number} startValue - Starting value (default: 0)
 * @returns {object} { count, ref } - Current count value and ref for the element
 */
export const useCountAnimationOnView = (endValue, duration = 2000, startValue = 0) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.3, // Start animation when 30% of element is visible
        rootMargin: '0px 0px -100px 0px' // Start slightly before element is fully visible
      }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, isInView]);

  const count = useCountAnimation(endValue, duration, startValue, isInView);

  return { count, ref: setRef };
};

