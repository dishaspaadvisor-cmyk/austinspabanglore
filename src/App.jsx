// import React from 'react'
// import SpaWebsite from './components/SpaWebsite';
// import './index.css';
// const App = () => {
//   return (
//     <div> <SpaWebsite /></div>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';  // Your existing Footer
import FloatingContactButtons from './components/FloatingContactButtons';
import OfferPopup from './components/OfferPopup';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import OffersPage from './pages/OffersPage';

const Layout = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="pt-20">  {/* Offset for fixed header */}
      <Outlet />  {/* Renders the current page */}
    </main>
    <Footer />
    <OfferPopup />
    <FloatingContactButtons />
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/offers" element={<OffersPage />} />
            {/* Add 404 if needed: <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;