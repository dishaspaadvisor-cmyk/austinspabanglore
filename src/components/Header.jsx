import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { CONFIG, ROUTES } from '../config/constants';
import { useWhatsApp } from '../hooks/useWhatsApp';
import Button from './ui/Button';

/**
 * Header component with responsive navigation
 * Follows best practices for accessibility and maintainability
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { bookAppointment } = useWhatsApp();

  // Navigation items
  const navigationItems = [
    { path: ROUTES.HOME, label: 'Home' },
    { path: ROUTES.ABOUT, label: 'About Us' },
    { path: ROUTES.SERVICES, label: 'Services' },
    { path: ROUTES.OFFERS, label: 'Offers' },
    { path: ROUTES.CONTACT, label: 'Contact' },
  ];

  const handleBookNow = () => {
    bookAppointment('general appointment');
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className="fixed w-full top-0 z-50 shadow-xl transition-all duration-300"
      role="banner"
    >
      {/* Main navigation bar */}
      <div className="bg-white backdrop-blur-sm">
        <div className="w-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between h-16 md:h-20 max-w-[1920px] mx-auto">
          {/* Logo */}
          <Link
            to={ROUTES.HOME}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#465991] focus:ring-offset-2 rounded-lg"
            aria-label={`${CONFIG.BUSINESS_NAME} - Go to homepage`}
          >
            <img
              src="/Logo/1.png"
              alt={`${CONFIG.BUSINESS_NAME} Logo`}
              className="h-10 sm:h-12 md:h-[60px] w-auto object-contain rounded-xl"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-bold py-2 group transition-all duration-300 ${isActiveRoute(item.path)
                  ? 'text-[#465991]'
                  : 'text-black hover:text-[#465991]'
                  }`}
                aria-current={isActiveRoute(item.path) ? 'page' : undefined}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#465991] transition-all duration-300 ${isActiveRoute(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              onClick={handleBookNow}
              aria-label="Book an appointment via WhatsApp"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-[#465991] transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#465991] focus:ring-offset-2"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <Menu
                size={20}
                className={`sm:w-6 sm:h-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
              />
              <X
                size={20}
                className={`sm:w-6 sm:h-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="bg-white shadow-lg border-t border-gray-200">
          <nav
            className="flex flex-col p-3 sm:p-4 space-y-1.5 sm:space-y-2"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-bold transition-all duration-300 py-1.5 sm:py-2 px-2 rounded-lg text-sm sm:text-base ${isActiveRoute(item.path)
                  ? 'text-[#465991] bg-[#465991]/10'
                  : 'text-black hover:text-[#465991] hover:bg-gray-50'
                  } text-sm sm:text-base`}
                onClick={closeMobileMenu}
                aria-current={isActiveRoute(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  handleBookNow();
                  closeMobileMenu();
                }}
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;