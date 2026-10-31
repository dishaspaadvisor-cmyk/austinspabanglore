import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from './Button';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { usePhone } from '../../hooks/usePhone';

/**
 * Reusable ServiceCard component for displaying spa services
 * @param {Object} props - Component props
 * @param {Object} props.service - Service data object
 * @param {number} props.index - Index for animation delay
 * @param {string} props.className - Additional CSS classes
 */
const ServiceCard = ({ service, className = '' }) => {
  const { bookAppointment } = useWhatsApp();
  const { makeCall } = usePhone();

  const handleCall = () => {
    makeCall();
  };

  const handleWhatsApp = () => {
    bookAppointment(service.title);
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden 
        transform transition-all duration-500 ease-in-out 
        hover:shadow-2xl hover:scale-[1.02] cursor-pointer 
        min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] ${className}`}
    >
      {/* Main Card Content */}
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 sm:h-52 lg:h-56 xl:h-60 object-cover"
          loading="lazy"
        />

        {/* Duration Badge */}
        <div className="absolute top-3 right-3 bg-[#465991] backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold text-white shadow-md">
          {service.duration}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 sm:p-5 lg:p-6 flex flex-col justify-between flex-1 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5">
          <Button
            variant="primary"
            size="sm"
            onClick={handleCall}
            className="flex-1"
          >
            <Phone size={14} className="mr-2" />
            Call Now
          </Button>
          <Button
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsApp}
            className="flex-1"
          >
            <FaWhatsapp size={14} className="mr-2" />
            Book Now
          </Button>
        </div>
      </div>

      {/* Hover Overlay Card */}
      <div className="absolute inset-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out overflow-hidden bg-white flex flex-col">
        {/* Image Section */}
        <div className="relative flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-36 sm:h-40 lg:h-44 object-cover"
          />

          {/* 20% Off Badge */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#465991] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg border-2 border-gray-200">
            20% OFF
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50 min-h-0">
          {/* Title */}
          <div className="text-center p-3 sm:p-4 pb-2 sm:pb-3 flex-shrink-0">
            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 leading-tight">
              {service.title}
            </h4>
            <div className="w-10 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-[#465991] mx-auto rounded-full"></div>
          </div>

          {/* Benefits Section */}
          <div className="flex-1 px-3 sm:px-4 pb-2 sm:pb-3 overflow-y-auto min-h-0">
            <div className="space-y-1 sm:space-y-1.5">
              {service.hoverContent?.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#465991] rounded-full flex-shrink-0 mt-1"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="text-center px-3 sm:px-4 pb-2 sm:pb-3 flex-shrink-0">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gray-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full"></div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium">
                Duration: {service.duration}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="p-3 sm:p-4 pt-2 sm:pt-3 flex-shrink-0">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={handleCall}
                className="flex-1"
              >
                <Phone size={14} className="mr-1.5 sm:mr-2" />
                Call Now
              </Button>
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsApp}
                className="flex-1"
              >
                <FaWhatsapp size={14} className="mr-1.5 sm:mr-2" />
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
