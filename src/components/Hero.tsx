
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-[75vh] flex items-center">
      <div className="spice-pattern"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex items-center gap-2 mb-4">
            <UtensilsCrossed className="text-red-700 h-5 w-5" />
            <span className="text-red-700 font-medium">Authentic Indian Cuisine</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Experience the Rich Flavors of 
            <span className="hero-text-gradient"> India</span>
          </h1>
          
          <p className="text-gray-700 mb-8 max-w-xl">
            Indulge in a culinary journey through the diverse regions of India with our
            carefully crafted dishes made from traditional recipes and the finest ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-red-700 hover:bg-red-800 text-white px-6 py-6 rounded-md" asChild>
              <Link to="/menu">
                View Our Menu
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-red-700 text-red-700 hover:bg-red-50 px-6 py-6 rounded-md">
              Book a Table
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl">
            <Highlight number="15+" label="Years of Excellence" />
            <Highlight number="100+" label="Authentic Dishes" />
            <Highlight number="12" label="Regional Cuisines" />
            <Highlight number="1000+" label="Happy Customers" />
          </div>
        </div>
      </div>
      <div className="absolute -right-48 md:-right-24 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-500/10 animate-spice-spin"></div>
      <div className="absolute -left-24 -bottom-24 w-[300px] h-[300px] rounded-full bg-red-700/10"></div>
    </section>
  );
};

const Highlight = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="text-center p-4">
      <p className="text-2xl md:text-3xl font-display font-bold text-red-700">{number}</p>
      <p className="text-sm md:text-base text-gray-700">{label}</p>
    </div>
  );
};

export default Hero;
