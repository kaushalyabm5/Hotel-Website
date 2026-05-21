import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      // Button reveals gracefully once user scrolls past 400px
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Luxury scale up & slide animation on reveal
      gsap.fromTo(buttonRef.current,
        { scale: 0.8, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: 'power4.out', overwrite: 'auto' }
      );
    } else {
      // Clean slide down out of view
      gsap.to(buttonRef.current, {
        scale: 0.8,
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
        overwrite: 'auto'
      });
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Native smooth-scrolling profile
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll to top of page"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-2xl transition-all duration-500 hover:-translate-y-1.5 focus:outline-none ring-1 ring-white/10 backdrop-blur-md group ${
        isVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {/* Premium minimal geometric arrow with subtle hover translation lifting effect */}
      <svg
        className="h-4 w-4 transition-transform duration-500 ease-out group-hover:-translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
};

export default ScrollToTop;