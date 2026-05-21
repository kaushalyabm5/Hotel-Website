import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0a] text-neutral-400 font-['Poppins',sans-serif] text-xs font-light tracking-wide border-t border-neutral-900 selection:bg-neutral-800 selection:text-white antialiased">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        
        {/* SYMMETRICAL 4-COLUMN DISTRIBUTION MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-neutral-900/60">
          
          {/* PART 1: FAR LEFT - BRAND IDENTITY & DESTINATION ESSENCE */}
          <div className="flex flex-col space-y-4 lg:text-left">
            <div className="flex items-center space-x-2.5 group lg:justify-start">
              {/* Luxury Champagne Vector Accent */}
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className="absolute w-2 h-2 bg-[#c5a880] rounded-full animate-ping opacity-25" />
                <div className="w-2 h-2 bg-[#c5a880] rotate-45 transform transition-transform duration-700 group-hover:rotate-180" />
              </div>
              <span className="text-white font-light text-base tracking-[0.25em] uppercase">
                Nilwadula
              </span>
            </div>
            <p className="text-neutral-500 text-xs font-light max-w-xs leading-relaxed tracking-normal mx-auto lg:mx-0">
              An exclusive lakeside sanctuary where heritage architecture, untouched nature, and intuitive luxury converge.
            </p>
          </div>

          {/* PART 2: CENTER LEFT - THE RESORT EXPERIENCE */}
          <div className="space-y-4 lg:text-center">
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-medium">
              The Resort
            </h4>
            <ul className="space-y-3 font-light text-neutral-500 text-xs">
              <li>
                <a href="#villas" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Luxury Suites & Villas
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Culinary Journeys
                </a>
              </li>
              <li>
                <a href="#wellness" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Wellness & Lakeside Spa
                </a>
              </li>
              <li>
                <a href="#excursions" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Private Experiences
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Estate Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* PART 3: CENTER RIGHT - GUEST CONCIERGE */}
          <div className="space-y-4 lg:text-center">
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-medium">
              Concierge
            </h4>
            <ul className="space-y-3 font-light text-neutral-500 text-xs">
              <li>
                <a href="#reserve" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Make a Reservation
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Exclusive Packages
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Booking Policies
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Travel & Directions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300 block tracking-wide">
                  Inquiries & Desks
                </a>
              </li>
            </ul>
          </div>

          {/* PART 4: FAR RIGHT - PREMIUM CORRESPONDENCE CHANNELS */}
          <div className="space-y-5 lg:text-right flex flex-col items-start lg:items-end">
            <div className="w-full">
              <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-medium mb-4">
                Reservations
              </h4>
              <div className="space-y-2.5 font-light text-neutral-500 text-xs">
                <p className="tracking-wide">
                  Digital Desk:{' '}
                  <a href="mailto:concierge@nilwadularesort.com" className="text-neutral-400 hover:text-[#c5a880] transition-colors duration-300">
                    concierge@nilwadularesort.com
                  </a>
                </p>
                <p className="tracking-wide">
                  Hotline:{' '}
                  <a href="tel:+94112345678" className="text-neutral-400 hover:text-[#c5a880] transition-colors duration-300">
                    +94 11 234 5678
                  </a>
                </p>
              </div>
            </div>

            {/* HIGH-END INTERACTIVE SOCIAL ELEMENT BADGES */}
            <div className="flex items-center gap-2.5 pt-1 lg:justify-end w-full">
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-neutral-400 rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-neutral-400 rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" h="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-neutral-400 rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" h="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* Telegram */}
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-neutral-400 rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                aria-label="Telegram"
              >
                <svg className="w-3.5 h-3.5 transform -translate-x-[0.5px] translate-y-[0.5px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* COMPLIANCE & LEGAL ATTRACTIONS BASEBAR */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 text-[11px] text-neutral-600 font-light">
          <div>
            <p className="tracking-wide">
              &copy; {currentYear} Nilwadula Resort. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#privacy" className="hover:text-neutral-400 transition-colors duration-300">
              Privacy Rules
            </a>
            <a href="#terms" className="hover:text-neutral-400 transition-colors duration-300">
              Terms & Constraints
            </a>
            <a href="#child-policy" className="hover:text-neutral-400 transition-colors duration-300">
              Child Policy
            </a>
            <a href="#cancellation" className="hover:text-neutral-400 transition-colors duration-300">
              Cancellation Rules
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}