
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulating image loading completion
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80"
          alt="KYM Holdings - Healthcare Innovation"
          className="object-cover w-full h-full"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Content */}
      <div 
        className={`relative z-20 section-container text-white transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl">
          <div 
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-white/90">Strategic Healthcare Investment</span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Transforming Healthcare Through 
            <span className="text-secondary-300"> Strategic Growth</span> & 
            <span className="text-primary-300"> Innovation</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            KYM Holdings acquires and enhances healthcare businesses, integrating AI-driven 
            efficiencies to improve care and cut costs.
          </p>
          
          <div 
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <Button 
              variant="secondary" 
              size="lg"
              icon={<ArrowRight size={20} />}
              onClick={() => {
                const element = document.getElementById('strategy');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More About Our Strategy
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 focus:ring-white"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-0.5 h-12 bg-gradient-to-b from-white/5 to-white/60"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
