import React from 'react';
import { MapPin, Users, Sparkles } from 'lucide-react';

const WhyChooseSection = () => {
  const benefits = [
    {
      id: 1,
      icon: MapPin,
      title: "Prime Location",
      description: "Conveniently located Bearing No. 37, 2nd Floor, C.K. Nagar Complex, Above Nandini Electricals, Thogur Cross, Neeladri Road, Neeladri Nagar, Electronic City Phase 1, Bengaluru, Karnataka 560100. .",
    },
    {
      id: 2,
      icon: Users,
      title: "Expert Therapists",
      description: "Internationally certified professionals experienced in anatomy and hygiene.",
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Luxury Ambience",
      description: "A peaceful, sanitized environment designed for complete relaxation.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#2d5a4c] mb-2">
            The Austin Experience
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-[#4285F4] mx-auto mt-4 rounded-full opacity-70"></div>
        </div>

        {/* Benefits Grid - Three in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="text-center flex flex-col items-center group p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100"
              >
                {/* Icon with primary color and light green background */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#e8f2ee] flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                  <IconComponent size={32} className="text-[#2d5a4c]" />
                </div>

                {/* Heading - Black color */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
