
import React, { useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Blog = () => {
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

  const blogPosts = [
    {
      title: "The Future of AI in Healthcare Management",
      excerpt: "Exploring how artificial intelligence is transforming healthcare operations and improving patient outcomes.",
      category: "Technology",
      date: "May 15, 2023",
      author: "John Smith",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Healthcare M&A Trends in the UK for 2023",
      excerpt: "An analysis of the current market conditions for healthcare acquisitions and what to expect in the coming year.",
      category: "Investment",
      date: "April 22, 2023",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Improving Operational Efficiency in Care Homes",
      excerpt: "Strategies for optimizing operations and reducing costs while maintaining quality care standards.",
      category: "Operations",
      date: "March 10, 2023",
      author: "David Williams",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <span className="px-3 py-1 rounded-full bg-secondary-50 text-secondary-700 text-sm font-medium">
              News & Insights
            </span>
          </div>
          <h2 className="section-title animate-on-scroll">Latest From Our Blog</h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Stay updated with the latest insights on healthcare investment, AI innovation,
            and business growth strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <User size={16} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Button 
            variant="outline" 
            icon={<ArrowRight size={16} />}
          >
            View All Articles
          </Button>
        </div>

        {/* Subscribe Section */}
        <div className="mt-24 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 md:p-12 text-white animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Informed</h3>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for the latest insights on healthcare investment, 
                technology integration, and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-3 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-auto flex-grow"
                />
                <Button 
                  variant="secondary" 
                  className="whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-white/60 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 flex items-center justify-center">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
