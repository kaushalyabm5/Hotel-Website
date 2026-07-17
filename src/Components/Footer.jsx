import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const [footerForm, setFooterForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFooterForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setFooterForm({ name: '', email: '', message: '' });
      alert('Message sent successfully.');
    }, 1000);
  };

  // Structured array mapping the display names to their actual section IDs
  const navigationLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Accommodation', id: 'accommodation' }, // Matches your accommodation ID
    { label: 'Services', id: 'services' },
    { label: 'Guest Reviews', id: 'reviews' },
    { label: 'Gallery', id: 'gallery' }
  ];

  return (
    <footer className="bg-stone-950 text-stone-400 pt-20 pb-8 px-6 md:px-12 lg:px-24 border-t border-stone-900 antialiased selection:bg-white selection:text-stone-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Layout Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-stone-900">
          
          {/* Column 1: Brand Matrix */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-light tracking-widest text-green-500 uppercase font-serif">
              Nilwadula
            </h3>
            <p className="text-xs font-light text-stone-400 leading-relaxed max-w-sm">
              An exclusive lakeside sanctuary where heritage architecture, untouched nature, and intuitive luxury converge.
            </p>
            {/* Direct Contact Stack */}
            <div className="space-y-3 pt-2">
              <a href="tel:+94112345678" className="flex items-center gap-3 text-xs font-light hover:text-white transition-colors duration-300">
                <Phone size={13} className="text-stone-500" />
                <span>+94 11 234 5678</span>
              </a>
              <a href="mailto:info@nilwadula.com" className="flex items-center gap-3 text-xs font-light hover:text-white transition-colors duration-300">
                <Mail size={13} className="text-stone-500" />
                <span>info@nilwadula.com</span>
              </a>
              <div className="flex items-start gap-3 text-xs font-light">
                <MapPin size={13} className="text-stone-500 mt-0.5 flex-shrink-0" />
                <span>Walawe Riverfront, Udawalawe, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-4 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="text-xs font-light hover:text-white transition-colors duration-300 block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Expanded Mini Map */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">
              The Sanctuary Map
            </h4>
            <div className="w-full h-[190px] overflow-hidden rounded-xl border border-stone-900 bg-stone-900 focus-within:ring-1 focus-within:ring-white/20 transition-all">
              <iframe
                title="Nilwadula Location Map"
                src="https://maps.google.com/maps?q=Udawalawe%20National%20Park&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 opacity-60 invert-[0.9] hue-rotate-180 brightness-[0.75] contrast-[1.15]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 4: Quick Inquiry Form */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-bold">
              Quick Inquiry
            </h4>
            <form onSubmit={handleFooterSubmit} className="space-y-2.5">
              <input
                type="text"
                name="name"
                required
                value={footerForm.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full bg-stone-900 text-white border border-stone-800/80 rounded-lg px-3.5 py-2 text-xs font-light placeholder-stone-600 focus:outline-none focus:border-stone-700 focus:ring-1 focus:ring-white/5 transition-all duration-200"
              />
              <input
                type="email"
                name="email"
                required
                value={footerForm.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full bg-stone-900 text-white border border-stone-800/80 rounded-lg px-3.5 py-2 text-xs font-light placeholder-stone-600 focus:outline-none focus:border-stone-700 focus:ring-1 focus:ring-white/5 transition-all duration-200"
              />
              <textarea
                name="message"
                required
                rows={2}
                value={footerForm.message}
                onChange={handleInputChange}
                placeholder="Message details..."
                className="w-full bg-stone-900 text-white border border-stone-800/80 rounded-lg p-3.5 text-xs font-light placeholder-stone-600 focus:outline-none focus:border-stone-700 focus:ring-1 focus:ring-white/5 transition-all duration-200 resize-none leading-relaxed"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-green-500 hover:bg-green-600 text-stone-950 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-lg transition-all duration-300 disabled:bg-stone-800 disabled:text-stone-600 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
                {!sending && <Send size={10} />}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar Matrix */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[11px] font-light text-stone-600">
            &copy; 2026 Nilwadula Resort. All rights reserved.
          </p>
          {/* Terms & Operational Guidelines */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px] font-light text-stone-500">
            <a href="#privacy" className="hover:text-stone-300 transition-colors">Privacy Rules</a>
            <a href="#terms" className="hover:text-stone-300 transition-colors">Terms & Constraints</a>
            
          </div>
        </div>

      </div>
    </footer>
  );
}