
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import SpecialsSection from '@/components/SpecialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { appetizers, mainCourses, breadsAndRice, desserts } from '@/data/menuItems';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <section id="menu" className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Culinary Offerings</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Our menu features dishes from various regions of India, each prepared with authentic recipes and the freshest ingredients.
              </p>
            </div>
            
            <MenuSection 
              title="Appetizers" 
              description="Start your culinary journey with these delicious starters."
              items={appetizers} 
            />
            
            <MenuSection 
              title="Main Courses" 
              description="Indulge in our hearty and flavorful main dishes."
              items={mainCourses} 
            />
            
            <MenuSection 
              title="Breads & Rice" 
              description="Perfect accompaniments to complement your meal."
              items={breadsAndRice} 
            />
            
            <MenuSection 
              title="Desserts" 
              description="End your meal on a sweet note with these traditional delights."
              items={desserts} 
            />
          </div>
        </section>
        
        <SpecialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
