import React from "react";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { useCountAnimationOnView } from "../hooks/useCountAnimation";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    location: "Nagpur, Maharashtra",
    feedback: "The spa session was deeply relaxing and the massage therapy helped release all my stress. The therapists are highly skilled, and the peaceful environment makes it the best spa experience.",
    rating: 5,
    service: "Deep Tissue Massage",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Vikas Patil",
    location: "Nagpur, Maharashtra",
    feedback: "Spa World  has become my favorite wellness destination whenever I need to escape stress. The ambience is soothing, and the professional massage services are top-notch.",
    rating: 5,
    service: "Aromatherapy Session",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Suresh Desai",
    location: "Nagpur, Maharashtra",
    feedback: "I had an incredible wellness experience here. The full body massage was calming and therapeutic, leaving me light and stress-free. Highly recommended!",
    rating: 5,
    service: "Full Body Massage",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Rahul Sharma",
    location: "Nagpur, Maharashtra",
    feedback: "The staff at this spa are professional and friendly. I felt completely relaxed after my session, and it's now my go-to place for stress relief.",
    rating: 5,
    service: "Swedish Massage",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Rajesh Verma",
    location: "Nagpur, Maharashtra",
    feedback: "Outstanding service! The hot stone massage was extremely relaxing and refreshing. Austin Spa Banglore is one of the best luxury spas. Totally worth it!",
    rating: 5,
    service: "Hot Stone Massage",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Nikhil Mehta",
    location: "Nagpur, Maharashtra",
    feedback: "The perfect place to unwind in Nagpur. The body scrub massage left my skin soft, smooth, and glowing. A must-visit spa for anyone looking for wellness and relaxation.",
    rating: 5,
    service: "Body Scrub & Massage",
    date: "3 days ago"
  }
];


const Testimonials = () => {
  // Counting animations for stats
  const { count: happyClients, ref: happyClientsRef } = useCountAnimationOnView(500, 2500);
  const { count: rating, ref: ratingRef } = useCountAnimationOnView(4.9, 2000);
  const { count: satisfaction, ref: satisfactionRef } = useCountAnimationOnView(98, 2200);
  const { count: years, ref: yearsRef } = useCountAnimationOnView(5, 1800);
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 lg:px-12 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-4 sm:mb-6 border border-[#2d5a4c]/30 text-[#2d5a4c] bg-[#e8f2ee]">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">Client Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-4">
            What Our <span className="text-[#2d5a4c]">Happy Clients</span> Say
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Real stories from our valued clients who experienced the luxury and relaxation at Austin Spa Banglore
          </p>
        </div>


        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative group flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-[#4285F4] rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* User Info */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-500 mb-2">{testimonial.location}</p>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Service Badge */}
              <div className="inline-flex items-center text-[#2d5a4c] bg-[#e8f2ee] px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-[#2d5a4c]/20 self-start">
                {testimonial.service}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 flex-grow italic">
                "{testimonial.feedback}"
              </p>

              {/* Date */}
              <div className="text-xs text-gray-400 mt-auto pt-3 border-t border-gray-100">
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20">
          <div
            ref={happyClientsRef}
            className="text-center bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d5a4c] mb-2">
              {happyClients}+
            </div>
            <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">Happy Clients</div>
          </div>
          <div
            ref={ratingRef}
            className="text-center bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d5a4c] mb-2">
              {rating.toFixed(1)}★
            </div>
            <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">Average Rating</div>
          </div>
          <div
            ref={satisfactionRef}
            className="text-center bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d5a4c] mb-2">
              {satisfaction}%
            </div>
            <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">Satisfaction Rate</div>
          </div>
          <div
            ref={yearsRef}
            className="text-center bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d5a4c] mb-2">
              {years}+
            </div>
            <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
