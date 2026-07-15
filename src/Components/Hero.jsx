import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import heroBg from '../assets/hero-img.png';

gsap.registerPlugin(CustomEase);

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const titleText = "NILWADULA";

  useEffect(() => {
    // Premium ultra-slow luxury deceleration curve
    CustomEase.create('luxuryEase', 'M0,0 C0.05,0.7 0.1,1 1,1');

    const tl = gsap.timeline();

    // 1. Cinematic Background Zoom & Reveal
    gsap.fromTo(bgRef.current, 
      { scale: 1.1, opacity: 0 }, 
      { scale: 1.04, opacity: 1, duration: 2.5, ease: 'power3.out' }
    );
    
    // Smooth infinite macro breathing loop
    gsap.to(bgRef.current, {
      scale: 1,
      duration: 24,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2.5
    });

    // 2. High-End Typographic Sequence
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
        <img
          ref={bgRef}
          src={heroBg} 
          alt="Nilwadula Sanctuary"
          className="w-full h-full object-cover opacity-0 pointer-events-none"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950/40 to-neutral-950/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950/95" />
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
            {/* Subtle, Clean Text Accent */}
            <span className="text-[9px] uppercase tracking-[0.45em] text-neutral-400 font-bold group-hover:text-white transition-colors duration-300">
              Discover
            </span>

            {/* Contemporary Kinetic Capsule Device */}
            <div className="w-[20px] h-[34px] sm:h-[36px] rounded-full border border-white/20 flex justify-center pt-2 relative overflow-hidden transition-colors duration-300 group-hover:border-white/50">
              {/* Dynamic looping scroll indicator node */}
              <div 
                className="w-[3px] h-[3px] rounded-full bg-white transition-all duration-300 group-hover:h-[8px] group-hover:rounded-sm animate-scroll-drop" 
              />
            </div>
          </button>
        </div>

      </div>

      {/* Embedded CSS Style Tag for Premium Loop Performance */}
      <style>{`
        @keyframes scroll-drop {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
            transform: translateY(10px);
          }
          100% {
            transform: translateY(14px);
            opacity: 0;
          }
        }
        .animate-scroll-drop {
          animation: scroll-drop 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;