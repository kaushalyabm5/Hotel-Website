import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import firstImage from '../assets/about-img1.jpg'; 
import secondImage from '../assets/about-img2.jpg';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const Welcome = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    // Shared premium deceleration curve
    CustomEase.create('luxuryEase', 'M0,0 C0.1,0.85 0.15,1 1,1');

    // 1. Header Reveal (Fades and tracks open slightly)
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: 'luxuryEase',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 2. Main Content Blocks Jumbo Reveal (Scale, Lift, and Fade Cascaded)
    const contentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'bottom 80%',
        toggleActions: 'play none none none'
      }
    });

    contentTimeline
      .fromTo(leftColRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 2.2, ease: 'luxuryEase' }
      )
      .fromTo(rightColRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 2.4, ease: 'luxuryEase' },
        '-=1.8' // Smooth elegant overlap
      );

  }, []);

  return (
    <section 
      ref={sectionRef}
      id='about-us'
      className="w-full mt-scroll-24 bg-white text-neutral-900 pt-20 pb-2 px-6 md:px-12 lg:px-20 select-none overflow-hidden"
    >
      
      {/* Top Center Section Title */}
      <div ref={headerRef} className="w-full text-center mb-16 md:mb-20 opacity-0">
          
          <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
           Welcome
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
            Discover a destination designed for comfort, relaxation, and authentic experiences
          </p>

        </div>

      {/* Main Content Layout Block */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-start justify-between">
        
        {/* Left Column: Narrative & Action */}
        <div ref={leftColRef} className="w-full lg:w-[35%] flex flex-col items-start pt-2 opacity-0 origin-top">
          <span className="px-4 py-1.5 bg-[var(--primary-color)]/10 rounded-[1rem] text-[11px] font-medium uppercase tracking-wider text-neutral-600 mb-6">
            Explore
          </span>
          
          <h3 className="text-3xl md:text-[1.8rem] font-normal leading-[1.25] tracking-tight text-neutral-900 mb-5 max-w-md">
            Discover cozy stays and <span className="font-semibold">scenic spots</span> around our small tourism hotel.
          </h3>

          <p className='text-[1rem] font-light text-neutral-400 mb-5 ading-relaxed tracking-wide max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officiis nisi dolorum. Veniam tenetur voluptates blanditiis ipsa praesentium nemo fugit nulla eaque.</p>
          
          <div className="flex items-center gap-3">
            <button className="px-6 cursor-pointer rounded-[1rem] py-3.5 bg-[var(--primary-color)] text-white text-xs uppercase tracking-widest font-medium transition-colors duration-300 hover:bg-emerald-600">
              View Gallery
            </button>
            
          </div>
        </div>

        {/* Right Side: Media Layout */}
        <div ref={rightColRef} className="w-full lg:w-[60%] flex flex-col md:flex-row gap-6 items-stretch opacity-0 origin-top">
          
          {/* Card 1: Portrait/Square Dimension */}
          <div className="relative rounded-[1rem] w-full md:w-1/2 aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-neutral-100 overflow-hidden flex flex-col justify-end p-8">
            <img 
              src={firstImage} 
              alt="Moments from our trips" 
              className="absolute rounded-[1rem] inset-0 w-full h-full object-cover"
            />
            {/* Subtle Gradient protection for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-0" />
            
            
          </div>

          {/* Card 2: Landscape / Editorial Context */}
          <div className="w-full rounded-[1rem] md:w-1/2 flex flex-col justify-between gap-6">
            <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden p-6">
              <img 
                src={secondImage} 
                alt="Nature path routes" 
                className="absolute rounded-[1rem] inset-0 w-full h-full object-cover"
              />
              
              
            </div>

            {/* Explanatory Caption below image */}
            <p className="text-neutral-500 text-sm font-light leading-relaxed tracking-wide max-w-sm pt-2">
              Every stay reveals new experiences — from peaceful gardens to scenic views waiting to be enjoyed.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Welcome;