import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Calendar } from 'lucide-react';

gsap.registerPlugin(CustomEase);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const menuOverlayRef = useRef(null);
  const desktopNavRef = useRef(null);
  // NEW: Keep track if the user just clicked a navbar item
  const isClickScrolling = useRef(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about-us', id: 'about-us' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const spyTargets = [...navLinks, { id: 'accommodation' }];

  useEffect(() => {
    CustomEase.create('luxuryEase', 'M0,0 C0.05,0.7 0.1,1 1,1');

    gsap.fromTo(desktopNavRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'luxuryEase', delay: 0.2 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer layout tracker
  useEffect(() => {
    // FIX: Optimized rootMargin and threshold to prevent skipping short sections
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: [0, 0.1, 0.2], 
    };

    const observerCallback = (entries) => {
      // FIX: If we are currently animating a programmatic click-scroll, ignore observer updates
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    spyTargets.forEach((target) => {
      const element = document.getElementById(target.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Fixed GSAP Mobile Target Selectors
  useEffect(() => {
    const mobileLinks = menuOverlayRef.current?.querySelectorAll('.mobile-anim-link');

    if (isOpen) {
      document.body.style.overflow = 'hidden';

      gsap.fromTo(menuOverlayRef.current,
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.8, ease: 'luxuryEase' }
      );

      if (mobileLinks && mobileLinks.length > 0) {
        gsap.fromTo(mobileLinks,
          { opacity: 0, y: 30, letterSpacing: '0.1em' },
          { opacity: 1, y: 0, letterSpacing: '0.25em', duration: 1, stagger: 0.08, ease: 'luxuryEase', delay: 0.3 }
        );
      }
    } else {
      document.body.style.overflow = 'unset';
      
      const tl = gsap.timeline();
      if (mobileLinks && mobileLinks.length > 0) {
        tl.to(mobileLinks, {
          opacity: 0,
          y: -15,
          duration: 0.4,
          stagger: 0.03,
          ease: 'power2.in'
        });
      }
      tl.to(menuOverlayRef.current, {
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        duration: 0.6,
        ease: 'power3.inOut'
      }, '-=0.2');
    }
  }, [isOpen]);

  // FIX: Handled programmatic scrolling logic locks
  const handleNavLinkClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    
    // Set lock flag to true so scrolling past sections won't override our choice
    isClickScrolling.current = true;

    // Release the lock flag after the browser has finished smooth-scrolling (approx 800ms)
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <>
      <header 
        ref={desktopNavRef}
        className={`fixed top-2 rounded-[3rem] left-2 right-2 mx-auto max-w-[calc(100%-16px)] lg:max-w-7xl w-full z-40 transition-all duration-500 opacity-1000
          ${scrolled 
            ? 'bg-neutral-900/70 backdrop-blur-2xl shadow-4xl' 
            : ''
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-18 flex items-center justify-between">
          
          <a href="#home" onClick={() => handleNavLinkClick('home')} className="flex items-center gap-3 group select-none">
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

          {/* Desktop Links Container */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link, idx) => {
              // FIX: If activeSection is 'services' OR 'accommodation', highlight the Services item
              const isCurrent = activeSection === link.id || (link.id === 'services' && activeSection === 'accommodation');
              
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => handleNavLinkClick(link.id)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 block
                    ${isCurrent 
                      ? 'text-[var(--primary-color)]/90 font-semibold' 
                      : scrolled 
                        ? 'text-neutral-200 hover:text-white' 
                        : 'text-neutral-300 hover:text-white'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-[var(--primary-color)]/80 transition-all duration-300 
                    ${isCurrent ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a href='#accommodation' onClick={() => handleNavLinkClick('accommodation')}>
               <button className="bg-[var(--primary-color)] rounded-[1rem] cursor-pointer border border-[var(--primary-color)]/40 hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] text-white font-medium text-[10px] uppercase tracking-[0.25em] px-7 py-3.5 transition-all duration-500 flex items-center gap-2">
                <Calendar color="#ffffff" className="w-3.5 h-3.5" strokeWidth={2} />
                Accommodation
              </button>
            </a>
          </div>

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

      {/* Full Screen Menu Overlay */}
      <div 
        ref={menuOverlayRef}
        className={`fixed inset-0 z-50 bg-neutral-950 flex flex-col justify-between lg:hidden transition-all duration-100
          ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none'}`}
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
      >
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

          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center relative focus:outline-none z-50"
            aria-label="Close Menu"
          >
            <span className="w-6 h-[1px] bg-white transform rotate-45 absolute" />
            <span className="w-6 h-[1px] bg-white transform -rotate-45 absolute" />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8 px-6 text-center">
          {navLinks.map((link, idx) => {
            const isCurrent = activeSection === link.id || (link.id === 'services' && activeSection === 'accommodation');
            
            return (
              <a
                key={idx}
                href={link.href}
                onClick={() => handleNavLinkClick(link.id)}
                className={`mobile-anim-link text-xl md:text-2xl uppercase font-light tracking-[0.2em] transition-colors duration-300 block opacity-0 cursor-pointer
                  ${isCurrent ? 'text-[var(--primary-color)]/90 font-medium' : 'text-neutral-400 hover:text-white'}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="w-full p-6 text-center border-t border-white/5 mb-4 mobile-anim-link opacity-0">
          <a href='#accommodation' onClick={() => handleNavLinkClick('accommodation')}>
            <button className="w-full max-w-sm bg-white text-neutral-950 font-medium text-xs uppercase tracking-[0.25em] py-4 shadow-xl transition-all duration-300 active:bg-neutral-200 cursor-pointer">
              Accommodation
          </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;