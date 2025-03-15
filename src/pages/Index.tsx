
import React, { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Strategy from '@/components/sections/Strategy';
import Portfolio from '@/components/sections/Portfolio';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Debug from '@/components/Debug';

const Index = () => {
  useEffect(() => {
    console.log('Index page loaded');
    console.log('Current base path:', import.meta.env.BASE_URL);
    console.log('Window location:', window.location.href);
    
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
    <div className="flex flex-col min-h-screen">
      <Debug />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Strategy />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

