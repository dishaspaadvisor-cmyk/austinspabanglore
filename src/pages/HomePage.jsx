import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ExpertHandsSection from '../components/ExpertHandsSection';
import ContactSection from '../components/ContactSection'
import Offers from '../components/Offers';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ExpertHandsSection />
    <Offers></Offers>
    <Testimonials></Testimonials>
    <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;