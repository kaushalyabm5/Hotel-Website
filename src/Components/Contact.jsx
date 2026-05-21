import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  // Form State Management
  const [formData, setFormData] = useState({
    input_full_name: '',
    input_email_address: '',
    input_phone_number: '',
    input_subject_text: '',
    input_message_body: '',
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submission Handler with Async API Post & Defensive Validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    // Client-side validation fallback checks
    if (!formData.input_full_name || !formData.input_email_address || !formData.input_phone_number || !formData.input_subject_text || !formData.input_message_body) {
      setStatus({ loading: false, success: false, error: 'Please populate all mandatory fields securely.' });
      return;
    }

    try {
      const response = await fetch('https://api.hotelname.com/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          input_full_name: '',
          input_email_address: '',
          input_phone_number: '',
          input_subject_text: '',
          input_message_body: '',
        });
      } else {
        throw new Error('Payload routing failed.');
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'An unexpected transmission error occurred. Please try again or reach out directly.',
      });
    }
  };

  return (
    <div id='contact' className="min-h-screen scroll-mt-10 pt-10 pb-30 bg-[#0a0a0a] text-neutral-200 font-['Poppins',sans-serif] selection:bg-neutral-800 selection:text-white antialiased">
      
      {/* SECTION 5.1: CONTACT HERO */}
      <section className="relative py-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
       
        
      


         {/* Top Center Section Title */}
      <div className="w-full text-center">
          
          <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-100 uppercase mb-4 font-serif">
           Get In Touch
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
            We are here to assist you with reservations and premium inquiries.
          </p>

        </div>
      </section>

      {/* CORE WRAPPER CONTROLLING MAXIMUM SECTION WIDTH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* CORE LAYOUT MATRIX: EQUAL HEIGHT COLUMNS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: SECTION 5.2 (META) & RESORT IMAGE */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10 h-full">
            
            {/* META FIELDS CARD */}
            <div className="bg-[#111111] p-8 md:p-12 border border-white/[0.04] rounded-3xl flex-1 flex flex-col justify-center transition-all duration-300 hover:border-white/[0.08]">
              <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--primary-color)] font-semibold mb-10 border-b border-white/[0.05] pb-5">
                Resort Concierge & Desks
              </h2>
              
              <div className="space-y-8">
                {/* Physical Address */}
                <div className="flex gap-5 items-start group">
                  <div className="p-3.5 bg-white/[0.03] border border-white/[0.05] text-[var(--primary-color)] rounded-xl flex-shrink-0 transition-all duration-300">
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                      Estate Location
                    </h4>
                    <p className="text-sm text-neutral-200 font-light tracking-wide leading-relaxed">
                      Nilwadula Resort, Lakefront Promenade, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Primary Phone */}
                <div className="flex gap-5 items-start group">
                  <div className="p-3.5 bg-white/[0.03] border border-white/[0.05] text-[var(--primary-color)] rounded-xl flex-shrink-0 transition-all duration-300">
                    <Phone size={16} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                      Reservations Hotline
                    </h4>
                    <a 
                      href="tel:+94112345678" 
                      className="block text-sm text-neutral-200 font-light tracking-wide leading-relaxed hover:text-white transition-colors duration-300"
                    >
                      +94 11 234 5678
                    </a>
                  </div>
                </div>

                {/* WhatsApp Live Endpoint */}
                <div className="flex gap-5 items-start group">
                  <div className="p-3.5 bg-white/[0.03] border border-white/[0.05] text-[var(--primary-color)] rounded-xl flex-shrink-0 transition-all duration-300">
                    <MessageSquare size={16} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                      WhatsApp Concierge
                    </h4>
                    <a 
                      href="https://wa.me/94112345678" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-sm text-neutral-200 font-light tracking-wide leading-relaxed hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-neutral-700 hover:decoration-white"
                    >
                      +94 11 234 5678
                    </a>
                  </div>
                </div>

                {/* Email Route */}
                <div className="flex gap-5 items-start group">
                  <div className="p-3.5 bg-white/[0.03] border border-white/[0.05] text-[var(--primary-color)] rounded-xl flex-shrink-0 transition-all duration-300">
                    <Mail size={16} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                      Digital Correspondence
                    </h4>
                    <a 
                      href="mailto:info@hotelname.com" 
                      className="block text-sm text-neutral-200 font-light tracking-wide leading-relaxed hover:text-white transition-colors duration-300"
                    >
                      info@hotelname.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-5 items-start group">
                  <div className="p-3.5 bg-white/[0.03] border border-white/[0.05] text-[var(--primary-color)] rounded-xl flex-shrink-0 transition-all duration-300">
                    <Clock size={16} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                      Operating Window
                    </h4>
                    <p className="text-sm text-neutral-200 font-light tracking-wide leading-relaxed">
                      24/7 (Front Desk & Digital Processing Arrays)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DYNAMIC FILL RESORT IMAGE CARD */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/[0.04] flex-1 min-h-[240px] bg-neutral-900">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Nilwadula Resort Tropical Sunlit View" 
                className="w-full h-full object-cover absolute inset-0 transform transition-transform duration-700 brightness-75 contrast-105 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent flex items-end p-8 z-10">
                <p className="text-neutral-100 text-xs font-medium tracking-[0.2em] uppercase">
                  Experience Paradise & Tranquility
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SECTION 5.3 (INTERACTIVE DATA CAPTURE FORM) */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/[0.04] p-8 md:p-14 rounded-3xl h-full flex flex-col justify-between transition-all duration-300 hover:border-white/[0.08]">
            <div>
              {/* Form Header */}
              <div className="mb-10">
                <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--primary-color)] font-semibold mb-3">
                  Send Secure Inquiry
                </h2>
                <p className="text-xs text-neutral-400 font-light tracking-wide leading-relaxed">
                  Fill out the technical communications dispatch form below. All fields are audited stringently.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="input_full_name" className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                    Full Name <span className="text-white font-light text-[9px] lowercase tracking-normal">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="input_full_name"
                    name="input_full_name"
                    required
                    value={formData.input_full_name}
                    onChange={handleChange}
                    placeholder="e.g., Alexander Mercer"
                    className="w-full bg-white/[0.02] text-white border border-white/[0.08] rounded-xl px-5 py-3.5 text-xs font-light tracking-wide placeholder-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all duration-300"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="input_email_address" className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                    Email Address <span className="text-white font-light text-[9px] lowercase tracking-normal">(required / RFC 5322)</span>
                  </label>
                  <input
                    type="email"
                    id="input_email_address"
                    name="input_email_address"
                    required
                    value={formData.input_email_address}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full bg-white/[0.02] text-white border border-white/[0.08] rounded-xl px-5 py-3.5 text-xs font-light tracking-wide placeholder-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all duration-300"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="input_phone_number" className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                    Phone Number <span className="text-white font-light text-[9px] lowercase tracking-normal">(required / system bounds)</span>
                  </label>
                  <input
                    type="tel"
                    id="input_phone_number"
                    name="input_phone_number"
                    required
                    value={formData.input_phone_number}
                    onChange={handleChange}
                    placeholder="+94 XX XXX XXXX"
                    className="w-full bg-white/[0.02] text-white border border-white/[0.08] rounded-xl px-5 py-3.5 text-xs font-light tracking-wide placeholder-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all duration-300"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="input_subject_text" className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                    Subject <span className="text-white font-light text-[9px] lowercase tracking-normal">(required / max 150 char)</span>
                  </label>
                  <input
                    type="text"
                    id="input_subject_text"
                    name="input_subject_text"
                    required
                    maxLength={150}
                    value={formData.input_subject_text}
                    onChange={handleChange}
                    placeholder="Inquiry regarding private lakeside excursions"
                    className="w-full bg-white/[0.02] text-white border border-white/[0.08] rounded-xl px-5 py-3.5 text-xs font-light tracking-wide placeholder-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all duration-300"
                  />
                </div>

                {/* Message Body */}
                <div className="space-y-2">
                  <label htmlFor="input_message_body" className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary-color)]">
                    Message <span className="text-white font-light text-[9px] lowercase tracking-normal">(required / max 2000 char)</span>
                  </label>
                  <textarea
                    id="input_message_body"
                    name="input_message_body"
                    required
                    maxLength={2000}
                    rows={5}
                    value={formData.input_message_body}
                    onChange={handleChange}
                    placeholder="Specify your transactional request details here..."
                    className="w-full bg-white/[0.02] text-white border border-white/[0.08] rounded-xl p-5 text-xs font-light tracking-wide placeholder-neutral-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all duration-300 resize-none leading-relaxed"
                  />
                </div>

                {/* FEEDBACK STATUS DISPLAYS */}
                {status.error && (
                  <div className="p-4 bg-red-950/40 text-red-400 text-xs border-l border-red-500 rounded-r-xl font-light tracking-wide animate-fade-in">
                    {status.error}
                  </div>
                )}
                
                {status.success && (
                  <div className="p-4 bg-neutral-900 text-neutral-100 text-xs border-l border-white rounded-r-xl font-light tracking-wide animate-fade-in">
                    Transmission complete. Your inquiry payload was processed securely.
                  </div>
                )}

                {/* SUBMISSION ELEMENT UI BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full bg-[var(--primary-color)] text-white py-4.5 text-xs uppercase tracking-[0.25em] font-medium rounded-xl transition-all duration-300 hover:bg-[var(--primary-color)]/80 hover:tracking-[0.28em] disabled:bg-neutral-800 disabled:text-neutral-500 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {status.loading ? (
                      <span>Routing Dispatch...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={11} className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </section>

        {/* SECTION 5.4: GEO-LOCATION MAPPING SECTION (FULL WIDTH) */}
        <section className="bg-[#111111] p-6 border border-white/[0.04] rounded-3xl space-y-4">
          <div className="px-2">
            <h3 className="text-sm font-medium tracking-[0.05em] text-white uppercase">Find Us</h3>
            <p className="text-xs text-neutral-400 font-light tracking-wide mt-1">Locate us easily using Google Maps.</p>
          </div>
          
          <div className="w-full h-80 bg-neutral-950 overflow-hidden rounded-2xl border border-white/[0.05] focus-within:ring-1 focus-within:ring-white/20 transition-all">
            <iframe
              title="Nilwadula Resort Geo-Location Map Location"
              src="https://maps.google.com/maps?q=Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 invert-[0.9] hue-rotate-180 opacity-80" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
}