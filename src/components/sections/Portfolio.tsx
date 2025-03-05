
import React, { useEffect, useRef } from 'react';
import { Building, Search } from 'lucide-react';
import Button from '../ui/Button';

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
              Our Portfolio
            </span>
          </div>
          <h2 className="section-title animate-on-scroll">Current & Future Acquisitions</h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            We are actively acquiring businesses in the UK healthcare sector with a focus on 
            domiciliary care providers, care agencies, and specialist healthcare services.
          </p>
        </div>

        {/* Active Acquisition Banner */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 mb-16 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-md">
                <Search className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Active Acquisition Phase</h3>
                <p className="text-muted-foreground">
                  We are currently seeking healthcare businesses to join our portfolio.
                </p>
              </div>
            </div>
            <Button 
              variant="primary" 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discuss Your Business
            </Button>
          </div>
        </div>

        {/* Portfolio Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 animate-on-scroll"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <Building className="text-gray-300" size={48} />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Future Acquisition</h3>
                  <span className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                    {item === 1 ? 'Care Provider' : item === 2 ? 'Care Agency' : 'Specialist Service'}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  This space is reserved for our future healthcare business acquisitions.
                  Our portfolio will showcase successful case studies and achievements.
                </p>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <span className="text-sm text-muted-foreground">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="bg-gray-50 rounded-xl p-8 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6 text-center">Future Case Studies</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            This section will showcase our success stories, operational improvements, 
            and the positive impact of our acquisition and optimization strategy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
