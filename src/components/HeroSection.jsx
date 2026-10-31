import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  Star,
  ArrowRight,
  Sparkles,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* =========================================================
   HERO SLIDES DATA
========================================================= */

const slides = [
  {
    img: "/HeroImg/hero (1).png",
    eyebrow: "PREMIUM WELLNESS EXPERIENCE",
    title: "Best Spa in Bengaluru",
    subtitle:
      "Experience premium spa therapies designed to relax your body, refresh your mind, and restore your inner balance.",
  },
  {
    img: "/HeroImg/hero (2).png",
    eyebrow: "SPECIAL WELLNESS OFFER",
    title: "Expert Staff Available",
    subtitle:
      "Enjoy exceptional massage therapies and personalized wellness experiences in a calm and luxurious environment.",
  },
  {
    img: "/HeroImg/hero (3).png",
    eyebrow: "LUXURY SPA IN ELECTRONIC CITY",
    title: "Best Spa Services Available",
    subtitle:
      "Discover soothing therapies, professional care, and a peaceful escape from your everyday routine.",
  },
];

/* =========================================================
   HERO SECTION
========================================================= */

const HeroSection = () => {
  /* Desktop slider state */
  const [activeSlide, setActiveSlide] = React.useState(0);

  /* Mobile slider state */
  const [mobileSlide, setMobileSlide] = React.useState(0);

  /* =======================================================
     MOBILE AUTO SLIDER
  ======================================================= */

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMobileSlide((prev) => {
        return (prev + 1) % slides.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     DESKTOP SLICK SETTINGS
  ======================================================= */

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,

    beforeChange: (oldIndex, newIndex) => {
      setActiveSlide(newIndex);
    },

    appendDots: (dots) => (
      <div className="absolute bottom-7 lg:bottom-10 left-0 w-full z-30">
        <ul className="m-0 flex justify-center items-center gap-2">
          {dots}
        </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        className={`
          h-2 rounded-full transition-all duration-500
          ${
            activeSlide === i
              ? "w-8 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              : "w-2 bg-white/50 hover:bg-white/80"
          }
        `}
      />
    ),
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#061525]">

      {/* =====================================================
          MOBILE HERO
          VIDEO + 3 TEXT SLIDES
      ===================================================== */}

      <div className="relative block md:hidden w-full min-h-[650px] overflow-hidden">

        {/* ---------------------------------------------------
            MOBILE BACKGROUND VIDEO
        --------------------------------------------------- */}

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/HeroImg/1.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        {/* ---------------------------------------------------
            VIDEO OVERLAY
        --------------------------------------------------- */}



        {/* Extra dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#061525] via-[#061525]/70 to-transparent" />

        {/* ---------------------------------------------------
            MOBILE CONTENT
        --------------------------------------------------- */}

        <div className="relative z-20 flex items-center min-h-[650px] px-5 sm:px-8">
          <div className="w-full max-w-2xl pt-12">

            {/* =================================================
                MOBILE EYEBROW
            ================================================= */}

            <motion.div
              key={`mobile-eyebrow-${mobileSlide}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">

                <Sparkles className="w-4 h-4 text-sky-300" />

                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.12em] text-white">
                  {slides[mobileSlide].eyebrow}
                </span>

              </div>
            </motion.div>

            {/* =================================================
                MOBILE RATING
            ================================================= */}


            {/* =================================================
                MOBILE TITLE
            ================================================= */}

            <motion.h1
              key={`mobile-title-${mobileSlide}`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                text-3xl
                sm:text-4xl
                font-semibold
                text-white
                leading-[1.08]
                tracking-tight
                max-w-xl
              "
            >
              {slides[mobileSlide].title}
            </motion.h1>

            {/* =================================================
                MOBILE SUBTITLE
            ================================================= */}



            {/* =================================================
                MOBILE BUTTONS
            ================================================= */}

            <motion.div
              key={`mobile-buttons-${mobileSlide}`}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                flex
                flex-row
                items-center
                gap-3
                mt-8
                w-full
              "
            >

              {/* ---------------- CALL BUTTON ---------------- */}

              <a
                href="tel:+918976846040"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-4
                  rounded-full
                  bg-[#1976d2]
                  hover:bg-[#1565c0]
                  text-white
                  font-semibold
                  text-sm
                  whitespace-nowrap
                  shadow-[0_10px_35px_rgba(25,118,210,0.35)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <Phone className="w-5 h-5" />

                <span>
                  Call Now
                </span>

                <ArrowRight
                  className="
                    w-4 h-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* ---------------- WHATSAPP BUTTON ---------------- */}

              <a
                href="https://wa.me/918976846040?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20spa%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-4
                  rounded-full
                  bg-[#25D366]
                  hover:bg-[#20bd5a]
                  text-white
                  font-semibold
                  text-sm
                  whitespace-nowrap
                  shadow-[0_10px_35px_rgba(37,211,102,0.30)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <FaWhatsapp className="w-6 h-6" />

                <span>
                  WhatsApp
                </span>

                <ArrowRight
                  className="
                    w-4 h-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </a>

            </motion.div>

            {/* =================================================
                MOBILE SLIDE INDICATORS
            ================================================= */}


          </div>
        </div>

      </div>

      {/* =====================================================
          DESKTOP / TABLET HERO
          EXISTING IMAGE SLIDER
      ===================================================== */}

      <div className="hidden md:block">

        <Slider {...settings}>

          {slides.map((slide, index) => (

            <div
              key={index}
              className="outline-none"
            >

              <div
                className="
                  relative
                  w-full
                  min-h-[720px]
                  lg:min-h-[760px]
                "
              >

                {/* ---------------------------------------------
                    DESKTOP BACKGROUND IMAGE
                --------------------------------------------- */}

                <img
                  src={slide.img}
                  alt={slide.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-top
                    object-cover
                  "
                  loading={
                    index === 0
                      ? "eager"
                      : "lazy"
                  }
                />

                {/* ---------------------------------------------
                    DESKTOP BOTTOM GRADIENT
                --------------------------------------------- */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-48
                    bg-gradient-to-t
                    from-[#061525]
                    to-transparent
                  "
                />

                {/* ---------------------------------------------
                    DECORATIVE GLOW
                --------------------------------------------- */}

                <div
                  className="
                    absolute
                    top-1/2
                    right-10
                    lg:right-20
                    -translate-y-1/2
                    w-72
                    h-72
                    lg:w-96
                    lg:h-96
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                  "
                />

                {/* ---------------------------------------------
                    DESKTOP CONTENT
                --------------------------------------------- */}

                <div
                  className="
                    relative
                    z-20
                    flex
                    items-center
                    min-h-[720px]
                    lg:min-h-[760px]
                    px-12
                    lg:px-20
                  "
                >

                  <div className="max-w-4xl pt-10">

                    {/* =================================================
                        DESKTOP EYEBROW
                    ================================================= */}

                    <motion.div
                      key={`desktop-eyebrow-${activeSlide}`}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      className="inline-flex items-center gap-2 mb-6"
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-full
                          bg-white/10
                          border
                          border-white/20
                          backdrop-blur-md
                        "
                      >

                        <Sparkles className="w-4 h-4 text-sky-300" />

                        <span
                          className="
                            text-xs
                            lg:text-sm
                            font-semibold
                            tracking-[0.18em]
                            text-white
                          "
                        >
                          {slide.eyebrow}
                        </span>

                      </div>

                    </motion.div>

                    {/* =================================================
                        DESKTOP RATING
                    ================================================= */}

                    <motion.div
                      key={`desktop-rating-${activeSlide}`}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.1,
                      }}
                      className="
                        flex
                        items-center
                        gap-3
                        mb-5
                      "
                    >

                      <div className="flex gap-1">

                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="
                              w-4
                              h-4
                              lg:w-5
                              lg:h-5
                              fill-yellow-400
                              text-yellow-400
                            "
                          />
                        ))}

                      </div>

                      <span className="text-white/85 text-sm lg:text-base">
                        4.9/5 • 500+ Happy Guests
                      </span>

                    </motion.div>

                    {/* =================================================
                        DESKTOP TITLE
                    ================================================= */}

                    <motion.h1
                      key={`desktop-title-${activeSlide}`}
                      initial={{
                        opacity: 0,
                        y: 35,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: "easeOut",
                      }}
                      className="
                        text-4xl
                        lg:text-5xl
                        xl:text-6xl
                        font-semibold
                        text-white
                        leading-[1.05]
                        tracking-tight
                        max-w-4xl
                      "
                    >
                      {slide.title}
                    </motion.h1>

                    {/* =================================================
                        DESKTOP SUBTITLE
                    ================================================= */}

                    <motion.p
                      key={`desktop-subtitle-${activeSlide}`}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.25,
                      }}
                      className="
                        mt-5
                        text-base
                        lg:text-lg
                        leading-relaxed
                        text-white/85
                        max-w-2xl
                      "
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* =================================================
                        DESKTOP BUTTONS
                    ================================================= */}

                    <motion.div
                      key={`desktop-buttons-${activeSlide}`}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.45,
                      }}
                      className="
                        flex
                        flex-row
                        items-center
                        gap-3
                        mt-8
                      "
                    >

                      {/* ---------------- CALL ---------------- */}

                      <a
                        href="tel:+918976846040"
                        className="
                          group
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          px-8
                          py-4
                          rounded-full
                          bg-[#1976d2]
                          hover:bg-[#1565c0]
                          text-white
                          font-semibold
                          text-base
                          whitespace-nowrap
                          shadow-[0_10px_35px_rgba(25,118,210,0.35)]
                          transition-all
                          duration-300
                          hover:scale-105
                        "
                      >

                        <Phone className="w-5 h-5" />

                        <span>
                          Call Now
                        </span>

                        <ArrowRight
                          className="
                            w-4
                            h-4
                            transition-transform
                            group-hover:translate-x-1
                          "
                        />

                      </a>

                      {/* ---------------- WHATSAPP ---------------- */}

                      <a
                        href="https://wa.me/918976846040?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20spa%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          px-8
                          py-4
                          rounded-full
                          bg-[#25D366]
                          hover:bg-[#20bd5a]
                          text-white
                          font-semibold
                          text-base
                          whitespace-nowrap
                          shadow-[0_10px_35px_rgba(37,211,102,0.30)]
                          transition-all
                          duration-300
                          hover:scale-105
                        "
                      >

                        <FaWhatsapp className="w-6 h-6" />

                        <span>
                          WhatsApp
                        </span>

                        <ArrowRight
                          className="
                            w-4
                            h-4
                            transition-transform
                            group-hover:translate-x-1
                          "
                        />

                      </a>

                    </motion.div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </Slider>

      </div>

    </section>
  );
};

export default HeroSection;
