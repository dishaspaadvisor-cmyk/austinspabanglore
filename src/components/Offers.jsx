import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const offersData = [
  {
    id: 1,
    image: "/OffersImg/1.png",
    phone: "tel:+918976846040",
    whatsapp: "https://wa.me/918976846040?text=hi i got your number from your website i want to know more about your services ",
  },
  {
    id: 2,
    image: "/OffersImg/2.png",
    phone: "tel:+918976846040",
    whatsapp: "https://wa.me/918976846040?text=Hi i got your number from your website i want to know more about your services",
  },
  {
    id: 3,
    image: "/OffersImg/3.png",
    phone: "tel:+918976846040",
    whatsapp: "https://wa.me/918976846040?text=Hi i want to know more about services ",
  },
];

const Offers = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#162922] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white blur-[100px]"></div>
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-12 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#a8c7b8] mb-2">
            Special Deals
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Exclusive Offers
          </h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offersData.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 md:hover:-translate-y-1 hover:shadow-2xl flex flex-col w-full"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden bg-white">
                <img
                  src={offer.image}
                  alt={offer.alt || "Spa Offer"}
                  className="w-full h-auto block transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <p className="text-white text-base md:text-lg font-bold tracking-wide shadow-black drop-shadow-md">
                    Limited Time Offer
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 bg-white border-t border-gray-100">
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={offer.phone}
                    className="flex-1 flex justify-center items-center gap-2 bg-[#4285F4] text-white px-4 py-3 rounded-xl shadow-md hover:bg-[#1f4236] hover:shadow-lg transition-all font-semibold"
                  >
                    <Phone size={18} /> Call
                  </a>
                  <a
                    href={offer.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl shadow-md hover:bg-[#1ebd5b] hover:shadow-lg transition-all font-semibold"
                  >
                    <FaWhatsapp size={20} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
