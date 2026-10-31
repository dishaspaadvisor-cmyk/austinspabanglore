import React from 'react';

const ExpertHandsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-[#e8f2ee]">

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center rounded-2xl p-6 sm:p-8 md:p-10 bg-white shadow-xl border border-white/50">
          {/* Heading */}
          <div className="flex justify-center mb-2">
            <span className="w-12 h-[2px] bg-[#4285F4]"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6">
            Expert Hands You Can Trust
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
            Our therapists are trained not just in massage techniques, but also in anatomy, safety, and hygiene protocols to ensure every guest feels secure and cared for.
          </p>

          {/* Quote */}
          <div className="mb-6 sm:mb-8 bg-gray-50 py-4 px-6 rounded-xl border-l-4 border-[#2d5a4c]">
            <p className="text-base sm:text-lg md:text-xl font-medium italic text-[#2d5a4c] leading-relaxed">
              "Every touch is guided by technique, empathy, and respect."
            </p>
          </div>

          {/* Meet Our Experts Button */}
          <button className="bg-[#4285F4] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-[0_4px_14px_0_rgba(45,90,76,0.39)] hover:shadow-[0_6px_20px_rgba(45,90,76,0.23)] hover:bg-[#1f4236] transition-all duration-300 transform hover:-translate-y-0.5">
            Meet Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertHandsSection;
