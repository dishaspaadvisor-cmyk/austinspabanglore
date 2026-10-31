import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '918976846040';
const PHONE_NUMBER = '+918976846040';
const WHATSAPP_MESSAGE = 'Hello, I would like to book an appointment.';
const MAPS_URL = 'https://maps.google.com/?q=Austin+Spa+In+Electronic+City';

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:right-6">
      {/* Google Maps Location Button */}
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Location on Google Maps"
        className="group flex items-center justify-center rounded-full bg-[#4285F4] p-4 sm:p-5 text-white shadow-xl ring-1 ring-black/10 transition duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#3367D6] focus:outline-none focus:ring-2 focus:ring-[#3367D6]"
      >
        <MapPin className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
      </a>

      {/* Phone Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call us"
        className="group flex items-center justify-center rounded-full bg-[#4285F4] p-4 sm:p-5 text-white shadow-xl ring-1 ring-black/10 transition duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#1f4236] focus:outline-none focus:ring-2 focus:ring-[#1f4236]"
      >
        <Phone className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center justify-center rounded-full bg-[#25D366] p-4 sm:p-5 text-white shadow-xl ring-1 ring-black/10 transition duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl hover:bg-[#1ebd5b] focus:outline-none focus:ring-2 focus:ring-[#128C7E]"
      >
        <FaWhatsapp className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
