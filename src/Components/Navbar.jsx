import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuOverlayRef = useRef(null);
  const menuLinksRef = useRef([]);
  const desktopNavRef = useRef(null);

  // Nav Links Configuration
  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About Us', href: '#about-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'News & Offers', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Custom luxury deceleration curve matching the Hero component
    CustomEase.create('luxuryEase', 'M0,0 C0.05,0.7 0.1,1 1,1');

    // Initial entry animation for Desktop Navbar on page load
    gsap.fromTo(desktopNavRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'luxuryEase', delay: 0.2 }
    );

    // Track scroll positioning to adjust background drop-shadow depth
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Mobile Menu Full-Screen Overlay Animations
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when menu is active
      document.body.style.overflow = 'hidden';

      // 1. Slide down the full screen luxury curtain overlay
      gsap.fromTo(menuOverlayRef.current,
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.8, ease: 'luxuryEase' }
      );

      // 2. Elegant staggered fade-in + text tracking expand for navigation elements
      gsap.fromTo(menuLinksRef.current,
        { opacity: 0, y: 30, letterSpacing: '0.1em' },
        { opacity: 1, y: 0, letterSpacing: '0.25em', duration: 1, stagger: 0.08, ease: 'luxuryEase', delay: 0.3 }
      );
    } else {
      document.body.style.overflow = 'unset';
      
      // Close timeline sequence
      const tl = gsap.timeline();
      tl.to(menuLinksRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.4,
        stagger: 0.03,
        ease: 'power2.in'
      }).to(menuOverlayRef.current, {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        duration: 0.6,
        ease: 'power3.inOut'
      }, '-=0.2');
    }
  }, [isOpen]);

  return (
    <>
      {/* Primary Global Header Wrapper — Dynamic Shadow Activation on Scroll */}
      <header 
        ref={desktopNavRef}
        className={`fixed top-2 rounded-[3rem] left-2 right-2 mx-auto max-w-[calc(100%-16px)] lg:max-w-7xl w-full z-40 transition-all duration-500 opacity-1000
          ${scrolled 
            ? 'bg-neutral-900/70 backdrop-blur-2xl  shadow-4xl' 
            : ''
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-18 flex items-center justify-between">
          
          {/* Brand Identity / Structural Text Logo */}
          <a href="#home" className="flex items-center gap-3 group select-none">
            {/* Geometric Vector Brandmark Icon */}
            <svg className="w-6 h-6 text-[var(--primary-color)]/90 transition-transform duration-700 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2L2 12h3v10h14V12h3L12 2zM12 6l6 6H6l6-6z" />
              <path d="M9 22V14h6v8" />
            </svg>
            <span 
              className="title-font text-lg md:text-xl font-light tracking-[0.25em] uppercase text-[var(--primary-color)]/90 font-serif pl-1"
              style={{ fontFamily: "'Cinzel', 'Didot', serif" }}
            >
              Nilwadula
            </span>
          </a>

          {/* Desktop Modular Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link, idx) => (
           <a
  key={idx}
  href={link.href}
  className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 block
    ${link.active 
      ? 'text-[var(--primary-color)]/90' 
      : scrolled 
        ? 'text-neutral-200 hover:text-white' 
        : 'text-neutral-300 hover:text-white'
    }`}
>
                {link.name}
                {/* Minimalist interactive underline indicator */}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-[var(--primary-color)]/80 transition-all duration-300 
                  ${link.active ? 'w-full' : 'w-0 hover:w-full'}`} 
                />
              </a>
            ))}
          </nav>

          {/* Desktop Premium Call to Action Area */}
          <div className="hidden lg:block">
            <button className="bg-[var(--primary-color)] rounded-[1rem] cursor-pointer border border-[var(--primary-color)]/40 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] text-white font-medium text-[10px] uppercase tracking-[0.25em] px-7 py-3.5 transition-all duration-500 flex items-center gap-2">
              {/* Clean Reservation Calendar Vector Icon */}
              <svg className="w-3.5 h-3.5 text-[var(--primary-color)] mix-blend-difference" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reservation
            </button>
          </div>

          {/* Mobile / Compact Device Menu Controller Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col justify-center items-end gap-2 w-8 h-8 group focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <span className="w-8 h-[1px] bg-white transition-all duration-300 group-hover:w-6" />
            <span className="w-5 h-[1px] bg-white transition-all duration-300 group-hover:w-8" />
          </button>
        </div>
      </header>

      {/* Full Screen High-End Architectural Menu Overlay */}
      <div 
        ref={menuOverlayRef}
        className="fixed inset-0 z-50 bg-neutral-950 flex flex-col justify-between pointer-events-auto lg:hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
      >
        {/* Mobile Overlay Header Section */}
        <div className="w-full h-24 px-6 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[var(--primary-color)]/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2L2 12h3v10h14V12h3L12 2zM12 6l6 6H6l6-6z" />
            </svg>
            <span 
              className="text-lg font-light tracking-[0.2em] uppercase text-[var(--primary-color)] font-serif"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Nilwadula
            </span>
          </div>

          {/* Sharp Architectural Close Mechanism Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center relative focus:outline-none"
            aria-label="Close Menu"
          >
            <span className="w-6 h-[1px] bg-white transform rotate-45 absolute" />
            <span className="w-6 h-[1px] bg-white transform -rotate-45 absolute" />
          </button>
        </div>

        {/* Central Navigational Menu Intercept */}
        <nav className="flex flex-col items-center justify-center gap-8 px-6 text-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              ref={el => menuLinksRef.current[idx] = el}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl md:text-2xl uppercase font-light tracking-[0.2em] transition-colors duration-300 block opacity-0
                ${link.active ? 'text-[var(--primary-color)]/90 font-medium' : 'text-neutral-400 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Lower Footer Overlay Bracket */}
        <div 
          ref={el => menuLinksRef.current[navLinks.length] = el}
          className="w-full p-6 text-center border-t border-white/5 opacity-0 mb-4"
        >
          <button className="w-full max-w-sm bg-white text-neutral-950 font-medium text-xs uppercase tracking-[0.25em] py-4 shadow-xl transition-all duration-300 active:bg-neutral-200">
            Make A Reservation
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;