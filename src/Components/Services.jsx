import React from 'react';
import { 
  Waves, 
  Utensils, 
  Compass, 
  Trees, 
  ParkingCircle, 
  Wifi, 
  Sofa, 
  PlaneTakeoff, 
  Shirt, 
  ConciergeBell, 
  Car, 
  Map 
} from 'lucide-react';

export default function Services() {
  // Section 4.2: On-Site Structural Hotel Facilities with high-end luxury images
  const facilities = [
    { 
      id: 'swimming_pool', 
      name: 'Swimming Pool', 
      desc: 'A serene visualization asset overlooking natural views.',
      icon: Waves,
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 'lakeside_dining', 
      name: 'Lakeside Restaurant & Dining Terrace', 
      desc: 'Premium dining terrace integrated with lakefront panoramas.',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 'lakefront_garden', 
      name: 'Lakefront Garden & Outdoor Promenade', 
      desc: 'Stunning tracked pathways through landscaped grounds.',
      icon: Trees,
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 'parking_space', 
      name: 'Secure Parking Space', 
      desc: 'Configured on-site parking flags with status monitoring.',
      icon: ParkingCircle,
      image: 'https://i1-c.pinimg.com/1200x/25/57/7c/25577c13d0590ae7715b7ee0bf64f973.jpg'
    },
    { 
      id: 'wifi_system', 
      name: 'Free Wi-Fi System', 
      desc: 'High-speed internet connectivity across all structural sectors.',
      icon: Wifi,
      image: 'https://i.pinimg.com/736x/6e/d1/78/6ed17815295b4cfae7252272e01a6ef1.jpg'
    },
    { 
      id: 'lounge_area', 
      name: 'Lounge Area Parameters', 
      desc: 'Thoughtfully detailed internal spaces for relaxation.',
      icon: Sofa,
      image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Section 4.3: Additional Value-Added Services Module with luxury service images
  const services = [
    { 
      id: 'airport_pickup', 
      name: 'Airport Pickup & Scheduling', 
      desc: 'Coordinate tracking and precision arrival scheduling hooks.',
      icon: PlaneTakeoff,
      image: 'https://i.pinimg.com/736x/9f/07/c3/9f07c3bd73ace25e98c3b1ef1ae87b9f.jpg'
    },
    { 
      id: 'laundry_service', 
      name: 'Laundry Service Operations', 
      desc: 'Functional operational parameters for complete garment care.',
      icon: Shirt,
      image: 'https://i1-c.pinimg.com/1200x/33/3a/60/333a6009e79964ef5c625db241ce3460.jpg'
    },
    { 
      id: 'room_service', 
      name: 'Room Service Delivery', 
      desc: 'On-demand delivery system tracking modules direct to your room.',
      icon: ConciergeBell,
      image: 'https://i1-c.pinimg.com/1200x/f0/ae/ae/f0aeae408e82adaef92b2403c2f50cda.jpg'
    },
    { 
      id: 'safari_transport', 
      name: 'Safari Transport Logistics', 
      desc: 'Planning widgets for custom wildlife excursions and transport.',
      icon: Compass,
      image: 'https://i1-c.pinimg.com/736x/98/ff/6e/98ff6e7050e9afba852ff0fe928aec05.jpg'
    },
    { 
      id: 'vehicle_rental', 
      name: 'Vehicle Rental Deployment', 
      desc: 'Integrated mapping options for flexible independent transport.',
      icon: Car,
      image: 'https://i1-c.pinimg.com/1200x/df/bf/cf/dfbfcf5a0cdbd716f3a0f51e5a1a103c.jpg'
    },
    { 
      id: 'tour_arrangements', 
      name: 'Tour Arrangement Components', 
      desc: 'Operational components for curated regional travel structures.',
      icon: Map,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id='services' className="bg-zinc-50 text-zinc-900 py-24 px-6 md:px-12 lg:px-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================= */}
        {/* SECTION 4.1: FACILITIES HERO                               */}
        {/* ========================================================= */}
        




         <div className="w-full text-center mb-16 md:mb-20">
          
          <h3 className="text-2xl md:text-[3rem] font-light tracking-wide text-neutral-900 uppercase mb-4 font-serif">
           Facilities & Services
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
             Everything you need for a comfortable and enjoyable stay.
          </p>

        </div>

        {/* ========================================================= */}
        {/* SECTION 4.2: ON-SITE STRUCTURAL HOTEL FACILITIES          */}
        {/* ========================================================= */}
        <div className="mb-40">
        


            <div className="w-full text-center mb-8 md:mb-10">
          
          <h3 className="text-xl md:text-[2rem] font-light tracking-wide text-neutral-900 uppercase mb-1 font-serif">
           Our Facilities
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
            Designed to enhance your experience.
          </p>

        </div>

          {/* Premium UI Layout Cards Grid with Rounded Corners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <div 
                  key={facility.id} 
                  className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-md  transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image Container with Custom Rounding */}
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                    <img 
                      src={facility.image} 
                      alt={facility.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Floating Floating Circular Icon Badge */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-emerald-500 backdrop-blur-sm shadow-md flex items-center justify-center">
                      <Icon className="w-5 h-5 text-neutral-100 stroke-[2]" />
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 4.3: ADDITIONAL VALUE-ADDED SERVICES MODULE       */}
        {/* ========================================================= */}
        <div>
          
            



         

            <div className="w-full text-center mb-8 md:mb-10">
          
          <h3 className="text-xl md:text-[2rem] font-light tracking-wide text-neutral-900 uppercase mb-1 font-serif">
           Additional Services
          </h3>
          <p className="text-neutral-500 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
           Convenient services to make your stay easier.
          </p>

        </div>

          {/* Premium UI Layout Cards Grid with Rounded Corners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-md transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image Container with Custom Rounding */}
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Floating Floating Circular Icon Badge */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-emerald-500 backdrop-blur-sm shadow-md flex items-center justify-center">
                      <Icon className="w-5 h-5 text-neutral-100 stroke-[2]" />
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}