import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import heroBg from '../assets/hero-img.png';

gsap.registerPlugin(CustomEase);

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const metaTopRef = useRef(null);
  const titleRef = useRef(null);
  const metaBottomRef = useRef(null);
  const descRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Ultra-premium custom cubic-bezier ease (Slightly slower start with a long, buttery-smooth deceleration)
    CustomEase.create('luxuryEase', 'M0,0 C0.1,0.85 0.15,1 1,1');

    const tl = gsap.timeline();

    // 1. Cinematic Wide Lens Background Reveal
    gsap.fromTo(bgRef.current, 
      { scale: 1.08, opacity: 0, filter: 'blur(8px)' }, 
      { scale: 1.03, opacity: 1, filter: 'blur(0px)', duration: 3.5, ease: 'power2.out' }
    );
    
    // Infinite slow breathing background sequence
    gsap.to(bgRef.current, {
      scale: 1,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 3.5
    });

    // 2. High-End Typographic Cascade
    tl.fromTo(metaTopRef.current,
      { opacity: 0, letterSpacing: '0.2em', y: 10 },
      { opacity: 1, letterSpacing: '0.4em', y: 0, duration: 2.0, ease: 'luxuryEase' },
      0.6
    )
    // Reveal the main title with an intentional slow-motion lift
    .fromTo(titleRef.current, 
      { opacity: 0, y: 25, scaleX: 0.99 }, 
      { opacity: 1, y: 0, scaleX: 1, duration: 2.4, ease: 'luxuryEase' }, 
      '-=1.5'
    )
    .fromTo(metaBottomRef.current,
      { opacity: 0, letterSpacing: '0.15em', y: 8 },
      { opacity: 1, letterSpacing: '0.3em', y: 0, duration: 1.8, ease: 'luxuryEase' },
      '-=1.6'
    )
    .fromTo(descRef.current, 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 1.8, ease: 'luxuryEase' }, 
      '-=1.3'
    )
    // Buttons elegant tracking expand and reveal
    .fromTo(buttonGroupRef.current, 
      { opacity: 0, y: 12 }, 
      { opacity: 1, y: 0, duration: 1.8, ease: 'luxuryEase' }, 
      '-=1.4'
    )
    .fromTo(scrollIndicatorRef.current, 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, duration: 2.0, ease: 'power2.out' }, 
      '-=1.2'
    );

    // Architectural Line Animation Loop (Smooth pass-through)
    gsap.fromTo('.scroll-line', 
      { y: -24 },
      {
        y: 24,
        duration: 2.5,
        repeat: -1,
        ease: 'power1.inOut'
      }
    );
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-screen overflow-hidden bg-neutral-950 flex items-center justify-center text-white select-none"
    >
      {/* Background Image Layer with Luxury Dark Mask */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgRef}
          src={heroBg} 
          alt="Nilwadula Luxury Suite"
          className="w-full h-full object-cover opacity-0 pointer-events-none"
        />
        {/* Deep Multi-stage Lighting Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/90" />
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[0.5px]" />
      </div>

      {/* Main Narrative Content Area */}
      <div className="relative z-10 max-w-5xl px-6 text-center flex flex-col items-center">
        
        {/* Upper Brand Meta */}
        <span 
          ref={metaTopRef}
          className="text-[10px] md:text-xs uppercase font-light text-neutral-400 tracking-[0.4em] mb-4 block opacity-0"
        >
          Sri Lanka &bull; Est 2019
        </span>

        {/* Core Brand Identity Statement */}
        <h1 
          ref={titleRef} 
          className="title-font mt-5 text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.2em] uppercase text-white mb-5 opacity-0 leading-none"
          
        >
          Nilwadula
        </h1>

        {/* Lower Brand Meta */}
        <span
          ref={metaBottomRef}
          className="text-xs md:text-sm uppercase font-bold text-[var(--primary-color)]/90 tracking-[0.3em] mb-10 block opacity-0"
          style={{ fontFamily: "'Cinzel', sans-serif" }}
        >
          Luxury Hotel and Reserve
        </span>

        {/* Minimal Editorial Context */}
        <p 
          ref={descRef} 
          className="text-neutral-300 text-xs md:text-sm font-light tracking-widest max-w-xl leading-relaxed mb-12 opacity-0 px-4"
        >
          Located in the heart of the city, this luxurious, modern hotel offers top-notch amenities for a perfect stay.
        </p>

        {/* Symmetrical Action Layer */}
        <div ref={buttonGroupRef} className="flex flex-row items-center justify-center gap-6 opacity-0">
          <button className="group relative px-9 py-4 cursor-pointer text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500 bg-[var(--primary-color)] rounded-[1rem] text-neutral-950 hover:bg-emerald-600">
            Explore
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2 ml-2">→</span>
          </button>
          
          <button className="group rounded-[1rem] px-9 py-4 cursor-pointer text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-500 border border-white/20 text-white hover:border-white hover:bg-white/5">
            Book Stay
          </button>
        </div>
      </div>

      {/* Subtle Right Side Navigation/Scroll Line */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute right-8 bottom-12 z-10 hidden md:flex flex-col items-center gap-6 opacity-0"
      >
        <span 
          className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-light mix-blend-difference" 
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-neutral-800 relative overflow-hidden">
          <div className="scroll-line absolute top-0 left-0 w-full h-6 bg-[var(--primary-color)]/80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;