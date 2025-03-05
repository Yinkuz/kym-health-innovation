
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Phone, Linkedin as LinkedinIcon, Twitter as TwitterIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/8ec757c6-b6f0-4d34-aafb-99602e022561.png" 
                alt="KYM Holdings Logo" 
                className="h-24 w-auto bg-white p-1 rounded" // Doubled height from h-12 to h-24
              />
            </Link>
            <p className="mt-4 text-primary-100 text-sm">
              Transforming healthcare through strategic growth & innovation. We acquire and enhance healthcare businesses across the UK.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-100 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#strategy" className="text-primary-100 hover:text-white transition-colors">Our Strategy</a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-100 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#blog" className="text-primary-100 hover:text-white transition-colors">News & Insights</a>
              </li>
              <li>
                <a href="#contact" className="text-primary-100 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-200 flex-shrink-0 mt-1" />
                <span className="text-primary-100">London, UK</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-200 flex-shrink-0" />
                <span className="text-primary-100">+44 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-200 flex-shrink-0" />
                <span className="text-primary-100">info@kymholdings.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (placeholder for future) */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-primary-100 text-sm mb-4">
              Subscribe to receive the latest news and insights from KYM Holdings.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 bg-primary-800 border border-primary-700 rounded focus:outline-none focus:ring-2 focus:ring-primary-400 text-white"
              />
              <button className="bg-secondary hover:bg-secondary-600 text-white px-4 py-2 rounded transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200 text-sm">
            © {new Date().getFullYear()} KYM Holdings. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-primary-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-200 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-secondary hover:bg-secondary-600 text-white rounded-full shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
