import React from 'react';
import { motion } from 'framer-motion';

const row1Testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Leisure Traveler",
    rating: 5,
    text: "An absolute paradise! The ocean view from our suite was breathtaking, and the infinity pool felt like swimming into the horizon. The staff anticipated our every need.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Business Executive",
    rating: 5,
    text: "Impeccable service and world-class amenities. The high-speed internet and quiet workspace options made my business trip feel like a luxury vacation.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Honeymooner",
    rating: 5,
    text: "We spent our honeymoon here and couldn't have asked for a better experience. The candlelit dinner on the beach arranged by the concierge team was unforgettable.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Frequent Guest",
    rating: 4,
    text: "The culinary experience alone is worth the stay. Three distinct restaurants all serving Michelin-star quality food. Rooms are pristine and incredibly comfortable.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  }
];

const row2Testimonials = [
  {
    id: 5,
    name: "Amara Okafor",
    role: "Family Vacationer",
    rating: 5,
    text: "Traveling with kids is tough, but the kids' club and dedicated family suites made it a breeze. The staff treated our children like absolute royalty.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
  },
  {
    id: 6,
    name: "Liam O'Connor",
    role: "Weekend Getaway",
    rating: 5,
    text: "A perfect 48-hour escape. The architecture perfectly blends modern luxury with local heritage. The rooftop lounge offers the best sunset views in the city.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"
  },
  {
    id: 7,
    name: "Sofia Martinez",
    role: "Wellness Enthusiast",
    rating: 5,
    text: "The hydrotherapy circuit and holistic massage treatments completely rejuvenated me. It's rare to find a hotel gym and wellness retreat of this caliber.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    id: 8,
    name: "Jonathan Wright",
    role: "Solo Explorer",
    rating: 4,
    text: "Centrally located yet feels hidden away in total privacy. The attention to detail—from the custom room scent to the evening turndown service—is masterclass.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-[360px] md:w-[400px] shrink-0 bg-white border border-neutral-300 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-between mx-3 select-none">
      <div>
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4 text-green-500">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'text-gray-200'}`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Review Text */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          "{testimonial.text}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-10 h-10 rounded-full object-cover border border-gray-100"
        />
        <div>
          <h4 className="text-gray-900 font-semibold text-sm">{testimonial.name}</h4>
          <p className="text-neutral-400 font-normal text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  // Speed setting (higher number = slower, calmer scroll)
  const duration = 28;

  return (
    <section className="bg-white pt-30 pb-35 overflow-hidden w-full">
      {/* Top Header Section */}
      {/* Top Center Section Title */}
      <div className="w-full text-center mb-20">
        <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
          Guest Testimonials
        </h3>
        <p className="text-neutral-500 text-xs md:text-sm font-normal max-w-xl mx-auto leading-relaxed">
                    Discover why travelers from around the globe choose our sanctuary for their unforgettable getaways and luxurious escapes.

        </p>
      </div>

      {/* Rows Container */}
      <div className="flex flex-col gap-6 w-full mask-gradient">
        
        {/* Row 1: Right to Left (Moves left) */}
        <div className="flex overflow-hidden w-full">
          <motion.div 
            className="flex"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: duration,
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 0 }, animationPlayState: "paused" }}
            style={{ display: "flex" }}
          >
            {/* Duplicated arrays create a perfectly gapless visual bridge loop */}
            {row1Testimonials.map((item) => (
              <TestimonialCard key={`row1-${item.id}`} testimonial={item} />
            ))}
            {row1Testimonials.map((item) => (
              <TestimonialCard key={`row1-dup-${item.id}`} testimonial={item} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right (Moves right) */}
        <div className="flex overflow-hidden w-full">
          <motion.div 
            className="flex"
            animate={{ x: ["-50%", 0] }}
            transition={{
              ease: "linear",
              duration: duration,
              repeat: Infinity,
            }}
            style={{ display: "flex" }}
          >
            {/* Duplicated arrays create a perfectly gapless visual bridge loop */}
            {row2Testimonials.map((item) => (
              <TestimonialCard key={`row2-${item.id}`} testimonial={item} />
            ))}
            {row2Testimonials.map((item) => (
              <TestimonialCard key={`row2-dup-${item.id}`} testimonial={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}