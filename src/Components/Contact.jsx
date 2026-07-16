import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    input_full_name: '',
    input_email_address: '',
    input_phone_number: '',
    input_subject_text: '',
    input_message_body: '',
  });

  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

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
        throw new Error('Transmission failed.');
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'An unexpected error occurred. Please try again or reach out directly.',
      });
    }
  };

  const premiumShadow = {
    boxShadow: "0 30px 60px -15px rgba(28, 25, 23, 0.05), 0 0 0 1px rgba(28, 25, 23, 0.03)"
  };

  return (
    <section id="contact" className="bg-white text-stone-900 py-24 px-6 md:px-12 lg:px-24 antialiased selection:bg-stone-900 selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block - Left Aligned with Minimal Accent Accent Line */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-800 block mb-3">
            Connect With Us
          </span>
          <h3 className="text-3xl md:text-[3.5rem] font-light tracking-tight text-stone-950 uppercase font-serif leading-none mb-6">
            Get In Touch
          </h3>
          <p className="text-stone-500 text-sm font-light max-w-xl leading-relaxed">
            Have questions about our luxury estate, custom safari tour planning, or private dining experiences? Send our front-desk concierge a line directly.
          </p>
        </div>

        {/* ASYMMETRIC GRID SYSTEM (4 cols left / 8 cols right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          
          {/* LEFT DIRECTORY PANEL: Flowing stack of crisp details */}
          <div className="lg:col-span-4 space-y-8">
            
            <div className="border-l-2 border-emerald-800 pl-6 space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">The Estate</h4>
              <p className="text-sm font-light text-stone-800 leading-relaxed">
                Nilwadula Resort, <br />
                Walawe Riverfront, Udawalawe, <br />
                Sri Lanka
              </p>
            </div>

            <div className="border-l-2 border-stone-200 pl-6 space-y-2 hover:border-emerald-800 transition-colors duration-300">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Direct Inquiries</h4>
              <a href="tel:+94112345678" className="block text-sm font-medium text-stone-900 hover:text-emerald-800 transition-colors">
                +94 11 234 5678
              </a>
              <a href="mailto:info@nilwadula.com" className="block text-xs font-light text-stone-600 hover:text-emerald-800 transition-colors">
                info@nilwadula.com
              </a>
            </div>

            <div className="border-l-2 border-stone-200 pl-6 space-y-2 hover:border-emerald-800 transition-colors duration-300">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Live Support</h4>
              <a 
                href="https://wa.me/94112345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-emerald-800 transition-colors underline underline-offset-4 decoration-stone-200"
              >
                <span>WhatsApp Concierge</span>
              </a>
              <p className="text-xs font-light text-stone-500 block">Available 24/7 for booking support</p>
            </div>

            {/* Inset Subtle Decorative Card */}
            <div className="p-6 bg-stone-50 border border-stone-200/60 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-stone-200 text-emerald-800 shadow-sm">
                <Clock size={16} strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs font-semibold text-stone-900 block">Always Operational</span>
                <span className="text-[11px] text-stone-500 block font-light">Front desk reception never closes.</span>
              </div>
            </div>

          </div>

          {/* RIGHT DIRECTORY PANEL: Clean, wide form architecture */}
          <div 
            className="lg:col-span-8 bg-stone-50/50 border border-stone-200/70 p-8 md:p-12 rounded-3xl"
            style={premiumShadow}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Two Columns (Name & Email) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="input_full_name" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="input_full_name"
                    name="input_full_name"
                    required
                    value={formData.input_full_name}
                    onChange={handleChange}
                    placeholder="Alexander Mercer"
                    className="w-full bg-white text-stone-900 border border-stone-200 rounded-xl px-4 py-3.5 text-xs font-light placeholder-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-950/5 transition-all duration-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input_email_address" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="input_email_address"
                    name="input_email_address"
                    required
                    value={formData.input_email_address}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full bg-white text-stone-900 border border-stone-200 rounded-xl px-4 py-3.5 text-xs font-light placeholder-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-950/5 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Two Columns (Phone & Subject) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="input_phone_number" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="input_phone_number"
                    name="input_phone_number"
                    required
                    value={formData.input_phone_number}
                    onChange={handleChange}
                    placeholder="+94 77 123 4567"
                    className="w-full bg-white text-stone-900 border border-stone-200 rounded-xl px-4 py-3.5 text-xs font-light placeholder-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-950/5 transition-all duration-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input_subject_text" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    id="input_subject_text"
                    name="input_subject_text"
                    required
                    maxLength={150}
                    value={formData.input_subject_text}
                    onChange={handleChange}
                    placeholder="Booking dates / Special Event query"
                    className="w-full bg-white text-stone-900 border border-stone-200 rounded-xl px-4 py-3.5 text-xs font-light placeholder-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-950/5 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Full Width Textarea */}
              <div className="space-y-1.5">
                <label htmlFor="input_message_body" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
                  Message Details
                </label>
                <textarea
                  id="input_message_body"
                  name="input_message_body"
                  required
                  maxLength={2000}
                  rows={5}
                  value={formData.input_message_body}
                  onChange={handleChange}
                  placeholder="Tell us about your upcoming trip plans, accommodation preferences, or special requests..."
                  className="w-full bg-white text-stone-900 border border-stone-200 rounded-xl p-4 text-xs font-light placeholder-stone-400 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-950/5 transition-all duration-200 resize-none leading-relaxed"
                />
              </div>

              {/* Status Display Messages */}
              {status.error && (
                <div className="p-3 bg-red-50 text-red-700 text-xs border-l-2 border-red-600 rounded-r-xl font-medium tracking-wide animate-fade-in">
                  {status.error}
                </div>
              )}
              
              {status.success && (
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs border-l-2 border-emerald-700 rounded-r-xl font-medium tracking-wide animate-fade-in">
                  Message processed successfully. Our team will contact you shortly.
                </div>
              )}

              {/* Action Button Left Aligned */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full sm:w-auto px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-xl transition-all duration-300 disabled:bg-stone-200 disabled:text-stone-400 flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
                >
                  {status.loading ? (
                    <span>Sending Message...</span>
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

        {/* FULL WIDTH INTEGRATED MAP CONTAINER */}
        <div 
          className="bg-stone-50 border border-stone-200/60 rounded-3xl overflow-hidden p-3"
          style={premiumShadow}
        >
          <div className="w-full h-[340px] rounded-2xl overflow-hidden border border-stone-200/80">
            <iframe
              title="Nilwadula Resort Geo-Location Map Location"
              src="https://maps.google.com/maps?q=Udawalawe%20National%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 brightness-[0.98] grayscale-[20%]" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}