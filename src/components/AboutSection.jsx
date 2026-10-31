import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/constants';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleViewServices = () => {
    navigate(ROUTES.SERVICES);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - About Image */}
          <div className="relative order-1">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105">
              <img
                src="/services/24.png"
                alt="Austin Spa Banglore - About Us Image"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-2 space-y-6">
            {/* About Us - Small Text with Primary Color */}
            <div className="flex items-center gap-4 mb-2">
              <span className="w-12 h-[2px] bg-[#4285F4]"></span>
              <p className="text-sm md:text-base font-bold uppercase tracking-widest text-[#2d5a4c]">
                About Us
              </p>
            </div>

            {/* Main Heading - Black Color */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Austin Spa Banglore
            </h2>

            {/* First Paragraph */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Experience pure relaxation at Austin Spa Banglore , your premier destination for rejuvenation and wellness Bearing Whether you're searching for a spa nearby or a luxury massage experience, we are here to help you unwind.
            </p>

            {/* Second Paragraph */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our therapies include traditional Thai Massage, Swedish Massage, Deep Tissue, and our signature Royal Jacuzzi. Enjoy a peaceful, hygienic, and luxurious environment guided by trained professionals.
            </p>

            {/* Tags in Two Columns */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4">
              {/* Column 1 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e8f2ee] flex items-center justify-center flex-shrink-0">
                  <ChevronRight size={16} className="text-[#2d5a4c]" />
                </div>
                <span className="text-sm md:text-base text-gray-800 font-semibold">Certified Therapists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e8f2ee] flex items-center justify-center flex-shrink-0">
                  <ChevronRight size={16} className="text-[#2d5a4c]" />
                </div>
                <span className="text-sm md:text-base text-gray-800 font-semibold">Hygienic Rooms</span>
              </div>

              {/* Column 2 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e8f2ee] flex items-center justify-center flex-shrink-0">
                  <ChevronRight size={16} className="text-[#2d5a4c]" />
                </div>
                <span className="text-sm md:text-base text-gray-800 font-semibold">Luxury Ambience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e8f2ee] flex items-center justify-center flex-shrink-0">
                  <ChevronRight size={16} className="text-[#2d5a4c]" />
                </div>
                <span className="text-sm md:text-base text-gray-800 font-semibold">Couple Rooms</span>
              </div>
            </div>

            {/* View Services Link */}
            <div className="pt-6">
              <button
                onClick={handleViewServices}
                className="text-white bg-[#4285F4] font-semibold text-base md:text-lg px-8 py-3 rounded-full hover:bg-[#1f4236] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block"
              >
                Discover Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
