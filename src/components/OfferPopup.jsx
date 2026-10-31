
import React, { useEffect, useState } from "react";
import {
  X,
  Clock3,
  Phone,
  Sparkles,
  Users,
  TrendingUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "918976846040";
const PHONE_NUMBER = "+918976846040";

const OFFER_PRICE = "₹1,999";
const ORIGINAL_PRICE = "₹2,999";

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  const [spotsLeft] = useState(
    () => Math.floor(Math.random() * 6) + 3
  );

  const [peopleBooked] = useState(
    () => Math.floor(Math.random() * 11) + 20
  );

  // Show popup after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  // Countdown
  useEffect(() => {
    if (!isVisible || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsApp = () => {
    const message =
      "Hi, I'm coming from the Austin Spa Bangalore website. I would like to book an appointment and claim the ₹1,999 special offer.";

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setIsVisible(false);
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-3 py-4 backdrop-blur-sm sm:px-5"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close offer"
          className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/75"
        >
          <X size={20} />
        </button>

        {/* =========================================
            TOP IMAGE
        ========================================= */}
        <div className="relative h-[410px] w-full overflow-hidden sm:h-[240px]">
          <img
            src="/services/13.png"
            alt="Austin Spa Bangalore"
            className="h-full w-full object-top object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

          {/* Top Badge */}
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#2d5a4c] shadow-lg">
            <Sparkles size={14} />
            LIMITED TIME OFFER
          </div>

          {/* Spa Name */}
          <div className="absolute bottom-4 left-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/85">
              Welcome to
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-wide text-white sm:text-3xl">
              Austin Spa
            </h2>

            <p className="mt-0.5 text-xs text-white/85">
              Bangalore
            </p>
          </div>
        </div>

        {/* =========================================
            CONTENT
        ========================================= */}
        <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
          {/* Heading */}
          <div className="text-center">
          </div>

          {/* =========================================
              PRICE OFFER
          ========================================= */}
          <div className="mt-5 rounded-xl border border-[#e5d8bd] bg-[#faf7ef] p-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-400 line-through">
                {ORIGINAL_PRICE}
              </span>

              <span className="rounded-full bg-[#2d5a4c] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                Special Price
              </span>
            </div>

            <div className="mt-1">
              <span className="text-4xl font-extrabold text-[#2d5a4c] sm:text-5xl">
                {OFFER_PRICE}
              </span>
            </div>

            <p className="mt-1 text-xs font-medium text-gray-500">
              Limited-time spa offer
            </p>
          </div>

          {/* =========================================
              COUNTDOWN
          ========================================= */}
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[#2d5a4c] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Clock3 size={18} />

              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/70">
                  Offer expires in
                </p>

                <p className="text-sm font-semibold">
                  Book before the timer ends
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-white px-3 py-1.5 font-mono text-lg font-bold tracking-wider text-[#2d5a4c]">
              {formatTime(timeLeft)}
            </div>
          </div>

  

          {/* =========================================
              CTA BUTTONS
          ========================================= */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            {/* Call */}
            <button
              type="button"
              onClick={handleCall}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#3478c5] px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#2863a6] hover:shadow-lg active:scale-[0.98]"
            >
              <Phone size={18} />
              Call Now
            </button>

            {/* WhatsApp */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#249b68] px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#1c7f55] hover:shadow-lg active:scale-[0.98]"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </button>
          </div>

    
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
