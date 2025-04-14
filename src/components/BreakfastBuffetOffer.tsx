import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BadgePercent, UtensilsCrossed, Phone } from 'lucide-react';

const BreakfastBuffetOffer = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-black">
      {/* Ornamental border patterns - top and bottom */}
      <div className="absolute top-0 left-0 w-full h-8 bg-repeat-x" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h5l5 8h10l5-8h5v2h-5l-5 6h-10l-5-6h-5z' fill='%23C00000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 8px'
      }}></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-repeat-x" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 8h5l5-8h10l5 8h5v-2h-5l-5-6h-10l-5 6h-5z' fill='%23C00000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 8px'
      }}></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 15c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z' fill='%23FF0000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Decorative heading with mandala-inspired elements */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-contain bg-no-repeat bg-center" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='25' viewBox='0 0 100 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L40 10L30 0L20 10L10 0L0 10v5l10-10L20 15L30 5L40 15L50 5L60 15L70 5L80 15L90 5L100 15v-5L90 0L80 10L70 0L60 10z' fill='%23C00000' fill-opacity='0.7' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}></div>
              <h2 className="text-center text-2xl md:text-3xl font-display font-bold text-white relative inline-block px-12">
                 Breakfast Buffet
              </h2>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-contain bg-no-repeat bg-center" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='25' viewBox='0 0 100 25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 25L40 15L30 25L20 15L10 25L0 15v-5l10 10L20 10L30 20L40 10L50 20L60 10L70 20L80 10L90 20L100 10v5L90 25L80 15L70 25L60 15z' fill='%23C00000' fill-opacity='0.7' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}></div>
            </div>
            <p className="text-lg text-gray-300 mt-8 max-w-2xl mx-auto">
              Experience the grand tradition of Indian hospitality with our  breakfast feast, featuring delicacies from across the subcontinent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="bg-gradient-to-br from-red-900/80 to-black p-8 rounded-lg border border-red-900/50 shadow-xl relative overflow-hidden">
              {/* Corner ornaments */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-contain bg-no-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v16H0z M16 16h16v16H16z M0 16h8v8H0z M8 8h8v8H8z M24 0h8v8h-8z M32 8h8v8h-8z M40 0h8v8h-8z M0 24h8v8H0z M40 40h8v8h-8z' fill='%23FF0000' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-contain bg-no-repeat transform rotate-90" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v16H0z M16 16h16v16H16z M0 16h8v8H0z M8 8h8v8H8z M24 0h8v8h-8z M32 8h8v8h-8z M40 0h8v8h-8z M0 24h8v8H0z M40 40h8v8h-8z' fill='%23FF0000' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-contain bg-no-repeat transform -rotate-90" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v16H0z M16 16h16v16H16z M0 16h8v8H0z M8 8h8v8H8z M24 0h8v8h-8z M32 8h8v8h-8z M40 0h8v8h-8z M0 24h8v8H0z M40 40h8v8h-8z' fill='%23FF0000' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-contain bg-no-repeat transform rotate-180" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v16H0z M16 16h16v16H16z M0 16h8v8H0z M8 8h8v8H8z M24 0h8v8h-8z M32 8h8v8h-8z M40 0h8v8h-8z M0 24h8v8H0z M40 40h8v8h-8z' fill='%23FF0000' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}></div>
              
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 bg-red-900/50 text-amber-300 px-4 py-2 rounded-full border border-amber-500/30">
                  <UtensilsCrossed className="h-4 w-4" />
                  <span className="text-sm font-medium">Indian Breakfast</span>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="inline-block bg-gradient-to-r from-amber-300 to-amber-500 text-black px-6 py-3 rounded-md transform rotate-2 shadow-lg border border-amber-700 mb-6">
                    <div className="transform -rotate-2">
                      <div className="text-lg font-semibold">UNLIMITED BUFFET</div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold">€12</span>
                        <span className="font-medium text-sm">ONLY</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 bg-red-900/50 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-lg">
                    <BadgePercent className="h-5 w-5" />
                    <span className="font-medium">10% Student Discount</span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-red-900/50 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-lg">
                    <Phone className="h-5 w-5" />
                    <span className="font-small">Delivery: 0121-555-3007</span>
                  </div>
                </div>
                
                {/* <div className="text-center md:text-left mt-8">
                  <Button className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white px-6 py-6 shadow-xl border border-red-500/20 transform transition-transform hover:-translate-y-1">
                    Reserve Your Royal Feast
                  </Button>
                </div> */}
              </div>
            </div>
            
            {/* Image with ornate frame */}
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23C00000' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '20px 20px'
              }}></div>
              
              <div className="relative p-4">
                <div className="absolute inset-0 border-[12px] border-red-900/40 rounded-lg"></div>
                <div className="absolute inset-0 border-[6px] border-amber-500/20 rounded-lg m-3"></div>
                
                <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/RESTAURANT_STYLE_SOUTH_INDIAN_THALI_original.jpg" 
                    alt="Traditional Indian Thali" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-xl font-display font-bold">Traditional  Thali</p>
                      <p className="text-amber-300 opacity-90">A ceremonial feast fit for royalty</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-amber-500/60 rounded-tl-lg -m-2"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-amber-500/60 rounded-tr-lg -m-2"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-amber-500/60 rounded-bl-lg -m-2"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-amber-500/60 rounded-br-lg -m-2"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative footer element */}
          <div className="flex justify-center mt-12">
            <div className="h-8 w-36 bg-contain bg-no-repeat bg-center" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='144' height='32' viewBox='0 0 144 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M72 0L62 10L52 0L42 10L32 0L22 10L12 0L2 10L0 8v8l2 2l10-10l10 10l10-10l10 10l10-10l10 10l10-10l10 10l10-10l10 10l10-10l10 10l10-10l10 10l10-10l2 2V8l-2 2L132 0L122 10L112 0L102 10L92 0L82 10z' fill='%23C00000' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakfastBuffetOffer;