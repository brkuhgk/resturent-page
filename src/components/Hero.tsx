
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, UtensilsCrossed, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-black/70 -z-10"></div>
      <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=80')" 
      }}></div>
      <div className="spice-pattern opacity-30"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="flex items-center gap-2 mb-4">
            <img src="/lovable-uploads/618a83cc-83ab-42b5-a27c-9a13220d50b1.png" alt="Chola Highlands Logo" className="h-14" />
            <span className="text-primary font-medium">Authentic Indian Cuisine</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Experience the Rich Flavors of 
            <span className="text-primary"> Chola Highlands</span>
          </h1>
          
          <p className="text-lg text-white/90 mb-8 max-w-xl">
            Indulge in a culinary journey through the diverse regions of India with our
            carefully crafted dishes made from traditional recipes and the finest ingredients.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <TestimonialPill icon={<Star className="h-4 w-4 text-yellow-400" />} text="Award-winning authentic cuisine" />
            <TestimonialPill icon={<Clock className="h-4 w-4 text-primary" />} text="Open 7 days a week" />
            <TestimonialPill icon={<UtensilsCrossed className="h-4 w-4 text-primary" />} text="Traditional recipes" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-md" asChild>
              <Link to="/menu">
                View Our Menu
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-6 rounded-md bg-black/30 border-2">
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
      <div className="absolute -right-48 md:-right-24 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-curry-500/10 animate-spice-spin"></div>
      <div className="absolute -left-24 -bottom-24 w-[300px] h-[300px] rounded-full bg-tandoor-500/10"></div>
    </section>
  );
};

const TestimonialPill = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-black/30 rounded-full border border-white/10">
      {icon}
      <span className="text-sm text-white font-medium">{text}</span>
    </div>
  );
};

const Highlight = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="text-center p-4 bg-black/30 rounded-lg border border-white/10">
      <p className="text-2xl md:text-3xl font-display font-bold text-primary">{number}</p>
      <p className="text-sm md:text-base text-white/80">{label}</p>
    </div>
  );
};

export default Hero;
