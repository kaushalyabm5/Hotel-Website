import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

// Import luxury images from src/assets/hero-img
import bg1 from '../assets/hero-img/4.png';
import bg2 from '../assets/hero-img/1.png';
import bg3 from '../assets/hero-img/3.png';
import bg4 from '../assets/hero-img/5.png';
import bg5 from '../assets/hero-img/2.png';

gsap.registerPlugin(CustomEase);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Array of background images
  const backgroundImages = [bg1, bg2, bg3, bg4, bg5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Store references to each background slide dynamically
  const bgRefs = useRef([]);
  bgRefs.current = [];

  const addToBgRefs = (el) => {
    if (el && !bgRefs.current.includes(el)) {
      bgRefs.current.push(el);
    }
  };

  const titleText = "NILWADULA";

  // --- 1. INITIAL PAGE LOAD TEXT ANIMATION (Runs ONLY once on mount) ---
  useEffect(() => {
    CustomEase.create('luxuryEase', 'M0,0 C0.05,0.7 0.1,1 1,1');
    const tl = gsap.timeline();

    // High-End Typographic Sequence
    const letters = titleRef.current?.querySelectorAll('.title-letter');
    if (letters && letters.length > 0) {
      tl.fromTo(letters,
        { opacity: 0, y: 40, rotateX: -30 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.6, stagger: 0.04, ease: 'luxuryEase' },
        0.2
      );
    }

    tl.fromTo(descRef.current, 
      { opacity: 0, y: 15 }, 
      { opacity: 1, y: 0, duration: 1.4, ease: 'luxuryEase' }, 
      '-=1.0'
    )
    .fromTo(buttonGroupRef.current, 
      { opacity: 0, y: 15 }, 
      { opacity: 1, y: 0, duration: 1.4, ease: 'luxuryEase' }, 
      '-=1.1'
    )
    .fromTo(scrollIndicatorRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1.4, ease: 'luxuryEase' }, 
      '-=1.2'
    );
  }, []);

  // --- 2. AUTOMATIC 5-SECOND TICKER ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // --- 3. PREMIUM SLOW CINEMATIC ZOOM EFFECT ---
  useEffect(() => {
    const activeSlide = bgRefs.current[currentIndex];

    if (activeSlide) {
      // Clear any running animations so they don't fight
      gsap.killTweensOf(activeSlide);

      // Reset the scale to base and execute a continuous, ultra-slow luxury zoom-in
      gsap.fromTo(activeSlide,
        { scale: 1.0 },
        { 
          scale: 1.08, 
          duration: 7, 
          ease: 'linear' 
        }
      );
    }
  }, [currentIndex]);

  // --- 4. MANUAL ARROW CONTROLS ---
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={heroRef} 
      id='home'
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-neutral-950 flex items-center justify-center text-white select-none perspective-1000"
    >
      {/* Background Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImages.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <img
              key={src}
              ref={addToBgRefs}
              src={src} 
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out pointer-events-none ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                zIndex: isActive ? 1 : 0
              }}
            />
          );
        })}
        
        {/* Luxury Overlays for Maximum Text Readability */}
        {/* Overall subtle dark overlay */}
        <div className="absolute inset-0 z-10 bg-neutral-950/35" />
        
        {/* Radial Vignette */}
        <div className="absolute inset-0 z-10 bg-radial-gradient from-transparent via-neutral-950/50 to-neutral-950/95" />
        
        {/* Vertical Shadow Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-950/70 via-transparent to-neutral-950/98" />
      </div>

      {/* Manual Navigation Controls */}
      {/* 
        Modified class below: 
        Moves the arrows to bottom-24 on mobile so they clear the central buttons.
        Maintains absolute centering on 'sm' sizes and above.
      */}
      <div className="absolute inset-x-0 bottom-24 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-20 flex justify-between px-6 sm:px-8 pointer-events-none">
        <button 
          onClick={handlePrev}
          className="group p-3 rounded-full border border-white/10 bg-neutral-950/20 backdrop-blur-sm text-white hover:border-white/50 hover:bg-neutral-950/40 transition-all duration-300 pointer-events-auto cursor-pointer flex items-center justify-center"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={handleNext}
          className="group p-3 rounded-full border border-white/10 bg-neutral-950/20 backdrop-blur-sm text-white hover:border-white/50 hover:bg-neutral-950/40 transition-all duration-300 pointer-events-auto cursor-pointer flex items-center justify-center"
          aria-label="Next image"
        >
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Main Content Overlay Container */}
      <div className="relative z-10 max-w-5xl w-full px-4 sm:px-8 md:px-12 text-center flex flex-col items-center justify-center">
        
        {/* Dynamic Typography Header */}
        <h1 
          ref={titleRef} 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-extralight tracking-[0.12em] sm:tracking-[0.15em] text-white uppercase font-serif flex overflow-hidden py-2"
          style={{ fontFamily: "'Cinzel', 'Didot', serif" }}
        >
          {titleText.split("").map((letter, idx) => (
            <span key={idx} className="title-letter inline-block transform-gpu origin-bottom opacity-0">
              {letter}
            </span>
          ))}
        </h1>

        {/* Minimal Context Area */}
        <p 
          ref={descRef} 
          className="text-neutral-300 text-xs sm:text-sm font-light tracking-[0.1em] sm:tracking-[0.15em] max-w-xl leading-relaxed mt-4 mb-8 sm:mb-12 opacity-0 px-2 sm:px-6"
        >
          Immerse your senses in pristine architectural design seamlessly integrated into the natural wild contours of the island.
        </p>

        {/* Action Controls */}
        <div 
          ref={buttonGroupRef} 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto opacity-0 px-4 sm:px-0"
        >
          <button className="group relative w-full sm:w-auto px-8 py-3.5 overflow-hidden text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-500 bg-white text-neutral-950 rounded-full border border-white hover:text-white">
            <span className="absolute inset-0 bg-neutral-900 transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
            <span className="relative flex items-center justify-center gap-2">
              Explore Reserve
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </button>
          
          <button className="group relative w-full sm:w-auto px-8 py-3.5 overflow-hidden text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-500 border border-white/20 text-white rounded-full hover:border-white/60">
            <span className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span>Book Stay</span>
          </button>
        </div>

        {/* Premium Architectural Custom Scroll Button */}
        <div ref={scrollIndicatorRef} className="mt-10 md:mt-16 opacity-0">
          <button 
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-2.5 sm:gap-3 group focus:outline-none cursor-pointer"
          >
            <span className="text-[9px] uppercase tracking-[0.45em] text-neutral-400 font-bold group-hover:text-white transition-colors duration-300">
              Discover
            </span>

            <div className="w-[20px] h-[34px] sm:h-[36px] rounded-full border border-white/20 flex justify-center pt-2 relative overflow-hidden transition-colors duration-300 group-hover:border-white/50">
              <div 
                className="w-[3px] h-[3px] rounded-full bg-white transition-all duration-300 group-hover:h-[8px] group-hover:rounded-sm animate-scroll-drop" 
              />
            </div>
          </button>
        </div>

      </div>

      <style>{`
        @keyframes scroll-drop {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; transform: translateY(10px); }
          100% { transform: translateY(14px); opacity: 0; }
        }
        .animate-scroll-drop {
          animation: scroll-drop 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;