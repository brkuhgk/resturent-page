
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { CookingPot, Flame } from 'lucide-react';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  spicyLevel?: number;
  isVegetarian?: boolean;
  isPopular?: boolean;
  imageUrl?: string;
};

interface MenuItemCardProps {
  item: MenuItem;
  className?: string;
}

export const MenuItemCard = ({ item, className }: MenuItemCardProps) => {
  return (
    <div className={cn("menu-card", className)}>
      {item.imageUrl && (
        <div className="relative">
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="menu-card-image"
          />
          {item.isPopular && (
            <Badge className="absolute top-2 right-2 bg-primary text-white">
              Popular
            </Badge>
          )}
        </div>
      )}
      <div className="menu-card-content">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="text-lg font-medium text-primary">{item.price}</span>
        </div>
        <p className="text-sm text-foreground/70">{item.description}</p>
        <div className="flex items-center gap-2 mt-2">
          {item.isVegetarian && (
            <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
              Vegetarian
            </Badge>
          )}
          {item.spicyLevel && item.spicyLevel > 0 && (
            <div className="flex items-center gap-1">
              <Flame className="w-3 h-3 text-tandoor-600" />
              {Array.from({ length: item.spicyLevel }).map((_, i) => (
                <Flame key={i} className="w-3 h-3 text-tandoor-600" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface MenuSectionProps {
  title: string;
  description?: string;
  items: MenuItem[];
  className?: string;
}

const MenuSection = ({ title, description, items, className }: MenuSectionProps) => {
  return (
    <section className={cn("py-12", className)}>
      <div className="flex items-center gap-2 mb-4">
        <CookingPot className="text-primary h-5 w-5" />
        <h2 className="text-2xl font-display font-bold header-decoration">{title}</h2>
      </div>
      {description && (
        <p className="text-foreground/70 mb-8 max-w-2xl">{description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
