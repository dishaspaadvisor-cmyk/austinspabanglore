import React, { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzXHE9CQAaG2H_-mAInpaR0I3Xsb-OJ_KsDACzmrNyB3Otf8AeUm0XvI3L26QeEvgHN/exec";
const SECRET = "spaenquiriescodesabccdsdhdgfsh";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const submitData = {
      ...formData,
      source: window.location.href,
      secret: SECRET,
    };

    try {
      console.log("Submitting form data:", submitData);

      await fetch(WEBAPP_URL, {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      console.log("Form submitted successfully");
      setSubmitStatus("success");
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="w-full px-4 lg:px-12 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Get in touch to book your perfect spa experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-[#465991] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Bearing No. 37, 2nd Floor, C.K. Nagar Complex, Above Nandini Electricals, Thogur Cross, Neeladri Road, Neeladri Nagar, Electronic City Phase 1, Bengaluru, Karnataka 560100.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-[#465991] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">8976846040 / 8976846041</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaWhatsapp className="text-[#465991] mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">+91 8976846040</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Book Your Appointment
              </h3>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Enquiry sent successfully! Thank you for your interest.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  There was an error submitting your form. Please try again or contact us directly.
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    minLength={3}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    minLength={10}
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
                    placeholder="Tell us about your preferred service and time..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#465991] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#465991] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;