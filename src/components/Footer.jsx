// import React from "react";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube, FaPinterestP } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#11231c] text-white w-full border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Footer Content */}
      <div className="relative w-full px-4 md:px-8 lg:px-12 py-10 mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-5">
          <div className="bg-white p-3 rounded-2xl shadow-xl inline-block">
            <img
              src="/Logo/1.png"
              alt="Austin Spa Logo"
              className="w-40 sm:w-48 h-auto object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover relaxation and rejuvenation at Austin Spa. Your wellness is our priority.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-5 text-white tracking-wide uppercase">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#4285F4] transition-colors">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <a
                href="tel:8976846040"
                className="mt-1 text-sm text-gray-300 hover:text-white transition-colors"
              >
                +91 89768 46040
              </a>
            </li>
            <li className="flex items-start space-x-3 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#4285F4] transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <a
                href="mailto:austinspa.banglore@gmail.com"
                className="mt-1 text-sm text-gray-300 hover:text-white transition-colors break-all"
              >
                austinspa.banglore@gmail.com
              </a>
            </li>
            <li className="flex items-start space-x-3 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#4285F4] transition-colors flex-shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="mt-1 text-sm text-gray-300 leading-relaxed">
                Bearing No. 37, 2nd Floor, C.K. Nagar Complex, Electronic City, Bengaluru 560100.
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-5 text-white tracking-wide uppercase">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="text-sm text-gray-400 hover:text-[#a8c7b8] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#a8c7b8] transition-colors"></span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Map */}
        <div className="flex flex-col h-full">
          <h3 className="text-lg font-bold mb-5 text-white tracking-wide uppercase">Locate Us</h3>
          <div className="w-full h-full min-h-[200px] rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9944770488687!2d77.6415269750743!3d12.843632987460078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ba6be726f7f%3A0xb057883c1266e390!2sAustin%20Spa%20In%20Electronic%20City!5e0!3m2!1sen!2sin!4v1787472832977!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '200px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      {/* SEO Keywords Section */}
      <div className="relative w-full px-4 md:px-8 lg:px-12 pb-8 mx-auto max-w-7xl">
        <div className="border-t border-gray-700 pt-8">
          <h3 className="text-sm font-semibold mb-3 text-gray-300 uppercase tracking-wider">Popular Services in Electronic City</h3>
          <p className="text-xs text-gray-400 leading-relaxed text-justify">
            Best Spa in Electronic City • Thai Massage in Electronic City • Swedish Massage Near Me • Deep Tissue Massage in Electronic City • Aroma Oil Massage Bangalore • Royal Jacuzzi Spa Electronic City • Shahi Milk Bath in Electronic City • Full Body Massage Electronic City • Female to Male Spa in Electronic City • Hot Oil Massage Bangalore • Luxury Spa in Electronic City • Couple Spa in Electronic City
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative text-center border-t border-white-700 py-4 text-white-400 text-sm">
        © {new Date().getFullYear()}   Austin Spa Banglore . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
