
import React, { useEffect, useRef } from 'react';
import { Search, TrendingUp, Settings, BrainCircuit } from 'lucide-react';
import Button from '../ui/Button';

const Strategy = () => {
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

  const strategies = [
    {
      icon: <Search className="text-primary" size={24} />,
      title: "Identify",
      description: "We identify high-potential healthcare businesses in the domiciliary care, care agency, and specialist healthcare sectors.",
      colorClass: "bg-primary-50 border-primary-100"
    },
    {
      icon: <TrendingUp className="text-secondary" size={24} />,
      title: "Acquire",
      description: "We acquire businesses with strong fundamentals and growth potential that align with our strategic vision.",
      colorClass: "bg-secondary-50 border-secondary-100"
    },
    {
      icon: <Settings className="text-primary" size={24} />,
      title: "Optimize",
      description: "We implement operational improvements and cost efficiencies while maintaining quality care standards.",
      colorClass: "bg-primary-50 border-primary-100"
    },
    {
      icon: <BrainCircuit className="text-secondary" size={24} />,
      title: "Innovate",
      description: "We integrate AI and technology solutions to improve service delivery, reduce costs, and enhance patient outcomes.",
      colorClass: "bg-secondary-50 border-secondary-100"
    }
  ];

  return (
    <section id="strategy" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="px-3 py-1 rounded-full bg-secondary-50 text-secondary-700 text-sm font-medium">
              Our Approach
            </span>
          </div>
          <h2 className="section-title animate-on-scroll">Investment & Acquisition Strategy</h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Our growth-by-acquisition approach focuses on identifying valuable healthcare businesses,
            optimizing operations, and integrating innovative technology solutions.
          </p>
        </div>

        {/* Strategy Process */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <div 
              key={strategy.title} 
              className={`rounded-xl p-6 border ${strategy.colorClass} animate-on-scroll`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-md mb-4">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                <p className="text-muted-foreground">{strategy.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Target Businesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Our Target Businesses</h3>
            <p className="text-muted-foreground mb-6">
              We focus on acquiring healthcare businesses with strong growth potential in these key sectors:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium">Domiciliary Care Providers</h4>
                  <p className="text-sm text-muted-foreground">
                    Care services delivered to people in their own homes, allowing them to maintain independence.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium">Care Agencies</h4>
                  <p className="text-sm text-muted-foreground">
                    Organizations that provide trained healthcare professionals to healthcare facilities or private clients.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium">Specialist Healthcare Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Focused healthcare services catering to specific patient needs or medical conditions.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
              alt="Healthcare technology integration" 
              className="w-full h-auto"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-3">Technology Integration</h3>
              <p className="text-muted-foreground mb-6">
                We leverage AI and innovative technology solutions to optimize operations, reduce costs, 
                and improve patient care across our portfolio companies.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm">
                  AI-driven Efficiency
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary-50 text-secondary-700 text-sm">
                  Data Analytics
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm">
                  Digital Transformation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold mb-4">Looking to Sell Your Healthcare Business?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            If you own a healthcare business and are considering selling, we'd like to hear from you. 
            KYM Holdings offers fair valuations and a smooth acquisition process.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
