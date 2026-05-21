import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  // Review feedback entity schema database loop array
  const reviewsData = [
    {
      customer_name: "Alexander Wright",
      origin_country: "United Kingdom",
      numerical_rating: 5,
      review_body_text: "An absolutely flawless experience. From the minimalist structural design of the suites to the impeccable discretion of the service array, this property redefines modern premium hospitality.",
      customer_avatar_source: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      customer_name: "Elena Rostova",
      origin_country: "Germany",
      numerical_rating: 5,
      review_body_text: "The architectural placement offers unparalleled peace. Waking up to the floor-to-ceiling views while experiencing such highly personalized attention made our annual stay incredibly memorable.",
      customer_avatar_source: "", // Testing optional asset fallback configuration
    },
    {
      customer_name: "Marcus Vance",
      origin_country: "United States",
      numerical_rating: 5,
      review_body_text: "Perfect location layout and striking aesthetics. Every modern home automation amenity worked seamlessly, and the location makes accessing central transit networks remarkably easy.",
      customer_avatar_source: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
      {/* Top Center Main Header and Subheadline */}
      {/* Top Center Section Title */}
      <div className="w-full text-center mb-16 md:mb-20">
          
          <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
           What Our Guests Say
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
            Real experiences from guests who stayed with us.
          </p>

        </div>

      {/* Review Grid Matrix Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {reviewsData.map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-emerald-100 border border-gray-100 p-8 rounded-3xl transition-all duration-300 shadow-md"
          >
            <div>
              {/* Numerical Rating 1-5 Scale Render Loop Constraint */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.numerical_rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Rich or Plain Review Body Text Area Element */}
              <p className="text-sm md:text-base text-gray-600 italic leading-relaxed mb-6">
                "{review.review_body_text}"
              </p>
            </div>

            {/* Customer Information Block Matrix */}
            <div className="flex items-center gap-4 pt-4 border-t border-emerald-300 mt-auto">
              {/* Optional Graphic Asset Pointer Fallback Configuration */}
              {review.customer_avatar_source ? (
                <img
                  src={review.customer_avatar_source}
                  alt={review.customer_name}
                  className="w-12 h-12 rounded-full object-cover shrink-0 bg-gray-100"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm shrink-0 uppercase tracking-wider">
                  {review.customer_name.charAt(0)}
                </div>
              )}

              <div>
                <h4 className="text-sm font-bold text-gray-900 tracking-tight leading-snug">
                  {review.customer_name}
                </h4>
                <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
                  {review.origin_country}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;