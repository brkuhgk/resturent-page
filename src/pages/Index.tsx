
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import SpecialsSection from '@/components/SpecialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { appetizers, mainCourses, breadsAndRice, desserts } from '@/data/menuItems';
import BreakfastBuffetOffer from '@/components/BreakfastBuffetOffer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BreakfastBuffetOffer />

        {/* <SpecialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
