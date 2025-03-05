
import React, { useEffect, useRef } from 'react';
import { Users, Eye, Brain } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium">
              About Us
            </span>
          </div>
          <h2 className="section-title animate-on-scroll">Who We Are</h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            KYM Holdings is dedicated to transforming the UK healthcare sector through strategic acquisitions and technological innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="glassmorphism rounded-xl p-8 animate-on-scroll">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              Revolutionizing the UK healthcare industry through smart acquisitions, operational excellence, and AI-driven efficiency.
            </p>
          </div>

          {/* Mission Card */}
          <div className="glassmorphism rounded-xl p-8 animate-on-scroll">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-100 text-secondary-700 mb-6">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To create value for patients, employees, and shareholders by improving healthcare delivery through innovation and strategic business practices.
            </p>
          </div>

          {/* Values Card */}
          <div className="glassmorphism rounded-xl p-8 animate-on-scroll">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Excellence in patient care, integrity in business operations, innovation in healthcare solutions, and respect for our team members and partners.
            </p>
          </div>
        </div>

        {/* Team Section (Placeholder) */}
        <div className="mt-24 animate-on-scroll">
          <h2 className="section-title text-center">Our Leadership Team</h2>
          <p className="section-subtitle mx-auto text-center">
            Experienced healthcare and investment professionals driving our vision forward.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Name Surname</h3>
                <p className="text-sm text-primary-600 mb-3">Chief Executive Officer</p>
                <p className="text-muted-foreground text-sm">
                  Brief professional bio with experience in healthcare investment and management.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Name Surname</h3>
                <p className="text-sm text-primary-600 mb-3">Chief Financial Officer</p>
                <p className="text-muted-foreground text-sm">
                  Brief professional bio with experience in finance and investment strategy.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Name Surname</h3>
                <p className="text-sm text-primary-600 mb-3">Chief Technology Officer</p>
                <p className="text-muted-foreground text-sm">
                  Brief professional bio with experience in healthcare technology and AI integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
