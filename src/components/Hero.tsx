import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpiceParticles from '@/components/SpiceParticles';


const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Split text into individual words for animation
    if (titleRef.current) {
      const title = titleRef.current;
      const textContent = title.textContent || '';
      const words = textContent.split(' ');
      
      // Clear the title
      title.textContent = '';
      
      // Create word spans
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word + ' ';
        wordSpan.style.display = 'inline-block';
        wordSpan.style.opacity = '0';
        wordSpan.style.transform = 'translateY(40px)';
        wordSpan.style.transition = 'all 0.5s ease';
        wordSpan.style.transitionDelay = `${index * 0.1}s`;
        title.appendChild(wordSpan);
        
        // Trigger animation after a small delay
        setTimeout(() => {
          wordSpan.style.opacity = '1';
          wordSpan.style.transform = 'translateY(0)';
        }, 100);
      });
    }
  }, []);

  return (
    <section id="home" className="relative overflow-hidden min-h-[75vh] flex items-center bg-black">
      {/* Spice particles container */}
      <div id="spice-particles-container" className="absolute inset-0 pointer-events-none"></div>
      <SpiceParticles />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex items-center gap-2 mb-4 animate-fade-in-up">
            <UtensilsCrossed className="text-red-700 h-5 w-5 animate-pulse-slow" />
            <span className="text-red-700 font-medium">Authentic Indian Cuisine</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            <span className="block">Experience the Rich Flavors</span>
            <span className="block">
              of{' '}
              <span className="relative inline-block fire-effect">
                <span className="hero-text-gradient">India</span>
               
              </span>
            </span>
          </h1>
          
          <p className="text-gray-200 mb-8 max-w-xl animate-fade-in opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
            Indulge in a culinary journey through the diverse regions of India with our
            carefully crafted dishes made from traditional recipes and the finest ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
            <Button className="bg-red-700 hover:bg-red-800 text-white px-6 py-6 rounded-md btn-hover-effect relative overflow-hidden" asChild>
              <Link to="/menu">
                View Our Menu
                <ChevronRight className="ml-1 h-4 w-4 animate-bounce-x" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute -right-48 md:-right-24 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-red-500/20 to-red-900/5 animate-spice-spin"></div>
      <div className="absolute -left-24 -bottom-24 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-red-700/15 to-red-500/5 animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;