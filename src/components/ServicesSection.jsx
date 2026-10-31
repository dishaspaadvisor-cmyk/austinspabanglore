
import React from "react";
import { Sparkles, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { CONFIG } from "../config/constants";
import { FaWhatsapp } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: "/services/4.png",
      title: "Thai Massage",
      description:
        "Experience authentic Thai-inspired therapy designed to release tension, restore flexibility, and bring balance to body and mind.",
    },
    {
      id: 2,
      image: "/services/7.png",
      title: "Swedish Massage",
      description:
        "Relax your muscles with smooth, flowing strokes that improve circulation and promote deep relaxation.",
    },
    {
      id: 4,
      image: "/services/8.png",
      title: "Aroma Oil Massage",
      description:
        "Immerse yourself in soothing essential oils that calm the senses and rejuvenate your body and spirit.",
    },
    {
      id: 5,
      image: "/services/9.png",
      title: "Royal Jacuzzi",
      description:
        "Unwind in a luxurious private Jacuzzi experience designed to soothe tired muscles and enhance relaxation.",
    },
    {
      id: 6,
      image: "/services/10.png",
      title: "Deep Tissue Massage",
      description:
        "Relieve muscle stiffness and everyday tension with a focused deep tissue massage tailored to your comfort.",
    },
    {
      id: 7,
      image: "/services/11.png",
      title: "Shahi Milk Bath",
      description:
        "Enjoy a luxurious milk bath experience created to nourish the skin while helping your body completely unwind.",
    },
    {
      id: 8,
      image: "/services/16.png",
      title: "Full Body Massage",
      description:
        "Rejuvenate your body and mind with a relaxing full-body massage designed for complete wellness.",
    },
    {
      id: 9,
      image: "/services/19.png",
      title: "Female to Male",
      description:
        "Relax and refresh with a professional massage experience focused on comfort, relaxation, and stress relief.",
    },
    {
      id: 10,
      image: "/services/22.png",
      title: "Hot Oil Massage",
      description:
        "Rejuvenate tired muscles and promote relaxation with the comforting warmth of therapeutic oil massage.",
    },
  ];

  /* =========================================
     WHATSAPP - SERVICE
  ========================================= */
  const handleBookNow = (serviceTitle) => {
    const prefix =
      "Hi, I'm coming from your Austin Spa Banglore website. ";

    const message = `Hello, I am interested in booking a ${serviceTitle}. Can you provide more details?`;

    const text = `${prefix}${message}`;

    window.open(
      `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  /* =========================================
     CALL - SERVICE
  ========================================= */
  const handleCallNow = () => {
    window.location.href = `tel:${CONFIG.PHONE_NUMBER}`;
  };

  /* =========================================
     WHATSAPP - GENERAL SESSION
  ========================================= */
  const handleBookSession = () => {
    const prefix =
      "Hi, I'm coming from your Austin Spa Banglore website. ";

    const message =
      "Hello, I would like to book a session. Please provide more details about availability and pricing.";

    const text = `${prefix}${message}`;

    window.open(
      `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#f5f1e9] py-16 md:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      {/* =========================================
          DECORATIVE BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#4285F4]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#c5a46d]/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#c5a46d]" />

            <Sparkles
              size={15}
              strokeWidth={1.8}
              className="text-[#b08b4f]"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2d5a4c]">
              Wellness Menu
            </span>

            <Sparkles
              size={15}
              strokeWidth={1.8}
              className="text-[#b08b4f]"
            />

            <span className="h-px w-8 bg-[#c5a46d]" />
          </div>

          <h2
            id="services-heading"
            className="text-3xl font-serif font-semibold tracking-tight text-[#17231e] sm:text-4xl md:text-5xl lg:text-[3.4rem]"
          >
            Our Signature
            <span className="block text-[#2d5a4c]">
              Therapies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#66716c] sm:text-base">
            Discover a curated collection of relaxing spa therapies,
            therapeutic massages, and luxury wellness experiences designed to
            help you slow down, recharge, and feel your best.
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-14 bg-[#c5a46d]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c5a46d]" />
            <span className="h-px w-14 bg-[#c5a46d]" />
          </div>
        </div>

        {/* =========================================
            SERVICES GRID
        ========================================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[1.5rem] border border-[#ded8ca] bg-white shadow-[0_8px_30px_rgba(35,55,47,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c5a46d]/60 hover:shadow-[0_20px_45px_rgba(35,55,47,0.15)]"
            >
              {/* =========================================
                  SERVICE IMAGE
              ========================================= */}

              <div className="relative h-90 w-full overflow-hidden sm:h-64">
                <img
                  src={service.image}
                  alt={`${service.title} at Austin Spa Bangalore`}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14251f]/75 via-transparent to-transparent opacity-80" />

                {/* Number Badge */}
                <div className="absolute left-5 top-5 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 px-3 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Image Label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-2 h-px w-10 bg-[#d6b878] transition-all duration-500 group-hover:w-16" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#ead49e]">
                    Luxury Wellness
                  </p>
                </div>
              </div>

              {/* =========================================
                  SERVICE CONTENT
              ========================================= */}

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="text-xl font-serif font-semibold text-[#1b2822] transition-colors duration-300 group-hover:text-[#2d5a4c] md:text-[1.4rem]">
                  {service.title}
                </h3>

                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[#68736e]">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-gradient-to-r from-[#c5a46d]/50 via-[#dedbd2] to-transparent" />

                {/* =========================================
                    CALL + WHATSAPP BUTTONS
                ========================================= */}

                <div className="grid grid-cols-2 gap-3">
                  {/* CALL BUTTON */}
                  <button
                    type="button"
                    onClick={handleCallNow}
                    className="group/call flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#2d5a4c] bg-[#4285F4] px-3 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#21463a] hover:shadow-[0_8px_20px_rgba(45,90,76,0.25)] active:translate-y-0"
                    aria-label={`Call now for ${service.title}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/call:bg-white/20">
                      <Phone
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover/call:rotate-12"
                      />
                    </span>

                    <span>Call Now</span>
                  </button>

                  {/* WHATSAPP BUTTON */}
                  <button
                    type="button"
                    onClick={() => handleBookNow(service.title)}
                    className="group/whatsapp flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#249b68] bg-[#249b68] px-3 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1c7f55] hover:shadow-[0_8px_20px_rgba(36,155,104,0.25)] active:translate-y-0"
                    aria-label={`WhatsApp for ${service.title}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/whatsapp:bg-white/20">
                      <FaWhatsapp
                        size={17}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover/whatsapp:scale-110"
                      />
                    </span>

                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <div className="mt-14 text-center md:mt-16">
          <div className="mx-auto mb-6 max-w-xl">
            <p className="text-sm leading-6 text-[#6c756f]">
              Looking for a different treatment? Explore our complete wellness
              menu and find the experience that suits you.
            </p>
          </div>

          <button
            type="button"
            onClick={handleBookSession}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#4285F4] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(45,90,76,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#21463a] hover:shadow-[0_15px_30px_rgba(45,90,76,0.28)] sm:px-10 sm:py-4 sm:text-base"
          >
            <span>Explore All Therapies</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              <ChevronRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

