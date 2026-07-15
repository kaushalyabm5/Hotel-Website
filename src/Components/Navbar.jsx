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
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'luxuryEase', delay: 0.1 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: [0, 0.1, 0.2], 
    };

    const observerCallback = (entries) => {
      if (isClickScrolling.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    spyTargets.forEach((target) => {
      const element = document.getElementById(target.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mobileLinks = menuOverlayRef.current?.querySelectorAll('.mobile-anim-link');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(menuOverlayRef.current,
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.8, ease: 'luxuryEase' }
      );
      if (mobileLinks?.length > 0) {
        gsap.fromTo(mobileLinks, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.06, ease: 'luxuryEase', delay: 0.2 });
      }
    } else {
      document.body.style.overflow = 'unset';
      const tl = gsap.timeline();
      if (mobileLinks?.length > 0) {
        tl.to(mobileLinks, { opacity: 0, y: -20, duration: 0.3, stagger: 0.02, ease: 'power2.in' });
      }
      tl.to(menuOverlayRef.current, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', duration: 0.5, ease: 'power3.inOut' }, '-=0.15');
    }
  }, [isOpen]);

  const handleNavLinkClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    isClickScrolling.current = true;
    setTimeout(() => { isClickScrolling.current = false; }, 800);
  };

  return (
    <>
      <header 
        ref={desktopNavRef}
        className={`fixed left-0 right-0 mx-auto w-full z-40 transition-all duration-500 top-0
          ${scrolled ? 'max-w-[92%] lg:max-w-5xl mt-3' : 'max-w-7xl mt-0'}`}
      >
        <div 
          className={`mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-500
            ${scrolled 
              ? 'h-14 bg-neutral-950/85 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]' 
              : 'h-24 bg-transparent border-b border-white/5'
            }`}
        >
          {/* Elegant Modern Logo */}
          <a href="#home" onClick={() => handleNavLinkClick('home')} className="flex items-center gap-3 group select-none">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute inset-0 border border-[var(--primary-color,rgba(255,255,255,0.8))] rounded-full transition-transform duration-700 group-hover:scale-110" />
              <span className="w-1.5 h-1.5 bg-[var(--primary-color,rgba(255,255,255,0.9))] rounded-full transition-transform duration-500 group-hover:scale-75" />
            </div>
            <span className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-white font-serif transition-colors duration-300 group-hover:text-neutral-300" style={{ fontFamily: "'Cinzel', 'Didot', serif" }}>
              Nilwadula
            </span>
          </a>

          {/* Desktop Links Container */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => {
              const isCurrent = activeSection === link.id || (link.id === 'services' && activeSection === 'accommodation');
              return (
                <a 
                  key={idx} 
                  href={link.href} 
                  onClick={() => handleNavLinkClick(link.id)} 
                  className={`text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 py-2 block
                    ${isCurrent ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <a href='#accommodation' onClick={() => handleNavLinkClick('accommodation')}>
              <button className={`relative group overflow-hidden bg-white text-neutral-950 font-semibold text-[9px] uppercase tracking-[0.2em] rounded-full transition-all duration-500 hover:text-white border border-white hover:border-white/25 ${scrolled ? 'px-5 py-2' : 'px-6 py-3'}`}>
                <span className="absolute inset-0 bg-neutral-900 transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
                <span className="relative flex items-center gap-2">
                  <Calendar className="w-3 h-3 transition-transform duration-300" strokeWidth={2.5} />
                  Accommodation
                </span>
              </button>
            </a>
          </div>

          {/* Minimalist Asymmetric Mobile Toggle */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 group focus:outline-none" aria-label="Open Menu">
            <span className="w-5 h-[1.5px] bg-white transition-all duration-300 group-hover:w-4" />
            <span className="w-3.5 h-[1.5px] bg-white transition-all duration-300 group-hover:w-5" />
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div ref={menuOverlayRef} className={`fixed inset-0 z-50 bg-neutral-950 flex flex-col justify-between lg:hidden transition-all duration-100 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none'}`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}>
        <div className="w-full h-24 px-6 flex items-center justify-between border-b border-white/5">
          <div className="text-white tracking-[0.2em] uppercase text-base font-light">Nilwadula</div>
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center relative focus:outline-none z-50 group">
            <span className="w-5 h-[1.5px] bg-white transform rotate-45 absolute transition-transform duration-300 group-hover:rotate-[135deg]" />
            <span className="w-5 h-[1.5px] bg-white transform -rotate-45 absolute transition-transform duration-300 group-hover:rotate-[-135deg]" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-6 px-6 text-center">
          {navLinks.map((link, idx) => {
            const isCurrent = activeSection === link.id || (link.id === 'services' && activeSection === 'accommodation');
            return (
              <a 
                key={idx} 
                href={link.href} 
                onClick={() => handleNavLinkClick(link.id)} 
                className={`mobile-anim-link text-lg uppercase font-light tracking-[0.3em] transition-colors duration-300 block opacity-0 cursor-pointer py-1
                  ${isCurrent ? 'text-white font-medium' : 'text-neutral-500 hover:text-white'}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
        <div className="w-full p-6 text-center border-t border-white/5 mb-4 mobile-anim-link opacity-0">
          <button onClick={() => handleNavLinkClick('accommodation')} className="w-full max-w-sm bg-white text-neutral-950 font-semibold text-xs uppercase tracking-[0.2em] py-4 rounded-full shadow-2xl">
            Book Accommodation
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;