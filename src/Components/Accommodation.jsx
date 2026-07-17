import React from 'react';
// Import required icons from lucide-react
import { 
  Wind, BedDouble, Bath, Wifi, Tv, Coffee, 
  Sparkles, Sparkle, Palmtree, ArrowRight 
} from 'lucide-react';

// Import images from src/assets/hero-img
import img1 from '../assets/rooms-img/1.png';
import img2 from '../assets/rooms-img/2.png';
import img3 from '../assets/rooms-img/3.png';

const Accommodation = () => {
  const rooms = [
    {
      id: 1,
      image: img1,
      type: "Deluxe Double Room",
      view: "River View",
      bedding: "1 King size double bed",
      description: "Perfect for couples seeking a serene escape with soothing views of the flowing river."
    },
    {
      id: 2,
      image: img2,
      type: "Deluxe Triple Room",
      view: "Pool View",
      bedding: "1 Single bed & 1 Double bed",
      description: "Spacious and comfortable, offering direct visual connection to our sparkling pool."
    },
    {
      id: 3,
      image: img3,
      type: "Deluxe Family Room",
      view: "Pool View",
      bedding: "2 Double beds",
      description: "Designed for families to bond and unwind together in absolute comfort."
    }
  ];

  // Features mapped to beautiful modern icons
  const features = [
    { text: "Air Conditioning", icon: Wind },
    { text: "Comfortable Beds", icon: BedDouble },
    { text: "Private Hot Water Bath", icon: Bath },
    { text: "Free High-Speed Wi-Fi", icon: Wifi },
    { text: "Smart TV", icon: Tv },
    { text: "Tea & Coffee Facilities", icon: Coffee },
    { text: "Complimentary Toiletries", icon: Sparkles },
    { text: "Daily Housekeeping", icon: Sparkle },
    { text: "Garden & Nature Views", icon: Palmtree }
  ];

  return (
    <section id='accommodation' className="bg-white text-stone-900 py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Center Section Title */}
        <div className="w-full text-center mb-12 md:mb-20">
          <h3 className="text-3xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
            Our Accommodation
          </h3>
          <p className="text-neutral-500 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Designed for rest and relaxation, our rooms provide a peaceful retreat after a day exploring Udawalawe. Wake up to fresh air, scenic garden views, and the gentle sounds of the nearby river.
          </p>
        </div>

        {/* Room Grid Section - Clean tablet behavior using md:grid-cols-2 -> lg:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24">
          {rooms.map((room) => (
            <div 
              key={room.id} 
              className="group bg-stone-50 overflow-hidden rounded-2xl border border-stone-100/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2"
              style={{
                boxShadow: "0 20px 40px -15px rgba(28, 25, 23, 0.4), 0 0 0 1px rgba(28, 25, 23, 0.02)"
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <img 
                  src={room.image} 
                  alt={room.type} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs uppercase tracking-widest px-3 py-1.5 font-semibold rounded-full shadow-sm">
                  {room.view}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium uppercase tracking-tight text-stone-900 mb-1">
                    {room.type}
                  </h3>
                  <p className="text-xs tracking-wide text-green-600 font-semibold mb-4">
                    {room.bedding}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {room.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-stone-100">
                  <button className="w-full cursor-pointer group flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-600">
                    <span>Book This Room</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Re-designed Bottom Features Section */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 border border-stone-100/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4">
              <div className="inline-flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <span>Included with stay</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900">
                Premium <br className="hidden lg:block" />
                <span className="font-semibold text-green-500">In-Room Amenities</span>
              </h3>
              <p className="text-stone-600 text-sm mt-4 leading-relaxed">
                Thoughtfully curated essentials to ensure your wilderness stay demands zero compromises on comfort.
              </p>
            </div>
            
            {/* Attractive Grid of Cards with Lucide Icons */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-stone-200/60 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-stone-800 text-sm font-medium tracking-wide">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Accommodation;