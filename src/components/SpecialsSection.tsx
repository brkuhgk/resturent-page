
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const specialDishes = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce with a blend of aromatic spices.",
    price: "$18.99",
    imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Lamb Biryani",
    description: "Fragrant basmati rice cooked with tender lamb, caramelized onions, and exotic spices.",
    price: "$21.99",
    imageUrl: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese in a spiced tomato-based sauce with bell peppers and onions.",
    price: "$16.99",
    imageUrl: "https://images.unsplash.com/photo-1626200926749-ccce8b61832c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  }
];

const SpecialsSection = () => {
  return (
    <section id="special" className="section-padding bg-spice-gradient relative overflow-hidden">
      <div className="spice-pattern"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="text-primary h-6 w-6" />
            <span className="text-primary font-medium">Chef's Selection</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Special Creations</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Experience our chef's signature dishes, crafted with passion and the finest ingredients to delight your taste buds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
              <div className="relative h-48">
                <img 
                  src={dish.imageUrl} 
                  alt={dish.name} 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-white">
                  Chef's Special
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-display font-semibold">{dish.name}</h3>
                  <span className="text-lg font-medium text-primary">{dish.price}</span>
                </div>
                <p className="text-foreground/70 mb-4">{dish.description}</p>
                <Button className="w-full bg-primary/90 hover:bg-primary text-white">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
