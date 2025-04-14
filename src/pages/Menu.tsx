import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Leaf, AlertTriangle, UtensilsCrossed, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  allergens?: string[];
  isPopular?: boolean;
  spicyLevel?: number;
  imageUrl?: string;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

// Ancient Indian pattern SVGs for decorative elements
const ORNATE_BORDER = `url("data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h5l5 8h10l5-8h5v2h-5l-5 6h-10l-5-6h-5z' fill='%23C00000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const MANDALA_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 15c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z' fill='%23FF0000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const CORNER_PATTERN = `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v16H0z M16 16h16v16H16z M0 16h8v8H0z M8 8h8v8H8z M24 0h8v8h-8z M32 8h8v8h-8z M40 0h8v8h-8z M0 24h8v8H0z M40 40h8v8h-8z' fill='%23FF0000' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`;

// SVG for decorative divider
const DECORATIVE_DIVIDER = `url("data:image/svg+xml,%3Csvg width='144' height='16' viewBox='0 0 144 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M72 0L62 5L52 0L42 5L32 0L22 5L12 0L2 5L0 4v4l2 1l10-5l10 5l10-5l10 5l10-5l10 5l10-5l10 5l10-5l10 5l10-5l2 1V4l-2 1L132 0L122 5L112 0L102 5L92 0L82 5z' fill='%23C00000' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuData = {
    breakfast: [
      {
        name: ' Starters',
        items: [
          { 
            name: 'Medhu Vada',
            description: 'Crispy, golden lentil doughnuts deep-fried to perfection from spiced urad dal batter, a royal delight from ancient Tamil lands.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            spicyLevel: 1,
            imageUrl: 'https://images.unsplash.com/photo-1630383249896-460eaa774f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Sambhar Vada', 
            description: 'Medhu vadai soaked in tangy, spiced sambhar - a treasured recipe from the kitchens of ancient Chola empire.',
            price: '£4.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: ['mustard'],
            spicyLevel: 2,
            imageUrl: 'https://images.unsplash.com/photo-1625398407796-82650a8c9dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Curd Vada', 
            description: 'Tender medhu vadai soaked in creamy, seasoned yogurt, a dish that has blessed the feasts of nobility since the Vedic age.',
            price: '£4.50',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy', 'mustard'],
            spicyLevel: 1,
            imageUrl: 'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Idli Traditions',
        items: [
          { 
            name: 'Plain Idli', 
            description: 'Soft, fluffy steamed rice cakes made from fermented rice and lentil batter, a staple dating back to the Sangam period of Tamil history.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1589301768775-e0c4c4f6f2b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Sambhar Idli', 
            description: 'Steamed idlis immersed in hot, tangy sambhar - a combination cherished in the royal courts of ancient south India.',
            price: '£4.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: ['mustard'],
            spicyLevel: 2,
            imageUrl: 'https://images.unsplash.com/photo-1626057953575-9a8fbe06f9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: ' Dosa Selection',
        items: [
          { 
            name: 'Plain Dosa', 
            description: 'Thin, crisp fermented rice and lentil crepe, a culinary invention dating back to 1st century AD in southern kingdoms.',
            price: '£7.25',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Onion Dosa', 
            description: 'Crisp dosa topped with caramelized onions, a variation enjoyed by merchant traders along the ancient spice routes.',
            price: '£7.75',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            spicyLevel: 1,
            imageUrl: 'https://images.unsplash.com/photo-1589301764097-b7ce9a984a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Ghee Dosa', 
            description: 'Golden, crispy dosa enriched with fragrant ghee, reminiscent of luxurious feasts prepared for royalty in ancient India.',
            price: '£7.75',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy'],
            spicyLevel: 0,
            isPopular: true,
            imageUrl: 'https://images.unsplash.com/photo-1610057224084-302b443526b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
    lunch: [
      {
        name: 'Vegetarian Starters',
        items: [
          { 
            name: 'Cauliflower Chilli', 
            description: 'Deep-fried cauliflower tossed in a tangy chilli sauce, inspired by the fusion cuisines developed during the Mughal-era trade routes.',
            price: '£4.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['soya'],
            spicyLevel: 3,
            imageUrl: 'https://images.unsplash.com/photo-1600326145402-a79a1dc27c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Gobi Manchurian', 
            description: 'Cauliflower florets are deep-fried and coated in a sweet-spicy Manchurian sauce, reflecting the ancient trade connections with China.',
            price: '£5.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['soya'],
            spicyLevel: 3,
            imageUrl: 'https://images.unsplash.com/photo-1625398407796-82650a8c9dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Non-Vegetarian  Starters',
        items: [
          { 
            name: 'Chicken 65', 
            description: 'A spicy chicken appetizer marinated with aromatic spices and curry leaves, tracing its origins to ancient Tamil Nadu.',
            price: '£4.99',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['soya', 'dairy'],
            spicyLevel: 4,
            isPopular: true,
            imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Chilli Chicken', 
            description: 'Chicken tossed in a tangy, spicy soy-based sauce with peppers and onions, a dish with roots in the culinary exchange of the ancient Silk Road.',
            price: '£5.75',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: [],
            spicyLevel: 3,
            imageUrl: 'https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: ' Rice Selection',
        items: [
          { 
            name: 'Steamed Rice', 
            description: 'Fluffy, plain white rice gently steamed to complement any curry or entrée, the foundation of meals since ancient Vedic times.',
            price: '£2.99',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: [],
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Ghee Rice', 
            description: 'Aromatic basmati rice sautéed with ghee and cumin seeds, a delicacy served in the royal courts of ancient India.',
            price: '£3.25',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy'],
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
    dinner: [
      {
        name: 'Evening Starters',
        items: [
          { 
            name: 'Medhu Vada', 
            description: 'Crispy, golden lentil doughnuts deep-fried to perfection from spiced urad dal batter, a tradition dating back thousands of years.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            spicyLevel: 1,
            imageUrl: 'https://images.unsplash.com/photo-1630383249896-460eaa774f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Aloo Bonda', 
            description: 'Spicy mashed potato balls dipped in gram flour batter and deep-fried, a street food with lineage tracing back to medieval south India.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['mustard'],
            spicyLevel: 2,
            imageUrl: 'https://images.unsplash.com/photo-1601050690117-94f5f7a16c9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Main Course',
        items: [
          { 
            name: 'Plain Dosa', 
            description: 'Thin, crisp fermented rice and lentil crepe, a culinary marvel that has graced Indian tables since the first millennium.',
            price: '£7.25',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Chapathi', 
            description: 'Soft, thin whole wheat flatbread, lightly roasted on a griddle, the daily bread of ancient India mentioned in Vedic texts.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: [],
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Curries',
        items: [
          { 
            name: 'Butter Chicken', 
            description: 'Succulent pieces of chicken cooked in a rich, creamy tomato-based gravy, an evolution of recipes from the royal kitchens of the Mughal Empire.',
            price: '£9.99',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy', 'nuts'],
            isPopular: true,
            spicyLevel: 2,
            imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Paneer Butter Masala', 
            description: 'Paneer cubes simmered in a rich, buttery tomato-based gravy, a vegetarian adaptation of royal Mughal cuisine.',
            price: '£8.99',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy', 'nuts'],
            spicyLevel: 2,
            imageUrl: 'https://images.unsplash.com/photo-1626200926749-ccce8b61832c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
    deals: [
      {
        name: 'Feast Combinations',
        items: [
          { 
            name: ' Breakfast Thali (12:00 - 16:00)', 
            description: 'A complete breakfast platter featuring Medhu vada, Choice of Idli or Upma, and Choice of Dosa - reminiscent of the morning meal of ancient Tamil royalty.',
            price: '£11.95',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: [],
            spicyLevel: 1,
            imageUrl: 'https://images.unsplash.com/photo-1625398407797-2640478a72ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: "Chola's Thali", 
            description: 'Indulge in a feast fit for kings with Veg soup, Choice of Madras chicken or Madras lamb, Ghee Rice, Paratha (2 pieces), and Gulab jamoon for dessert.',
            price: '£19.75',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy'],
            spicyLevel: 2,
            isPopular: true,
            imageUrl: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: "Maharaja's Special Thali", 
            description: "A grand royal feast with Choice of Curry, Chef's choice of Chicken or Veg Roll, Choice of Rice, Choice of Bread, and Chef's choice of Dessert.",
            price: '£23.99',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy', 'nuts'],
            spicyLevel: 2,
            imageUrl: 'https://images.unsplash.com/photo-1585937421513-70a008356136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
    kidsMeal: [
      {
        name: 'Children\'s Selection',
        items: [
          { 
            name: 'Baby Corn Manchurian', 
            description: 'Crispy baby corn tossed in a spicy Indo-Chinese Manchurian sauce, a favorite among young royals of the modern age.',
            price: '£3.75',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['soya'],
            spicyLevel: 2,
            imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Finger Fish', 
            description: 'Crispy, golden-fried fish fingers seasoned with herbs and spices, a child-friendly adaptation of ancient coastal recipes.',
            price: '£5.25',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['fish'],
            spicyLevel: 1,
            imageUrl: 'https://images.unsplash.com/photo-1613482184972-f9c1f357d02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Chocolate Dosa', 
            description: 'A thin, crispy dosa spread with melted chocolate, a modern twist on an ancient classic for young royal palates.',
            price: '£5.25',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            spicyLevel: 0,
            isPopular: true,
            imageUrl: 'https://images.unsplash.com/photo-1640377516319-13ef56bae1fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
    desserts: [
      {
        name: 'Desserts',
        items: [
          { 
            name: 'Kesari (1 piece)', 
            description: 'Exquisite dessert made with semolina, ghee, and sugar, a recipe from the ancient kitchens of South Indian temples.',
            price: '£0.99',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy', 'nuts'],
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1515467837939-6875e4df3b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Gulab Jamoon (2 pieces)', 
            description: 'Soft, deep-fried milk-based balls soaked in fragrant sugar syrup, a dessert with origins in medieval Indian royal kitchens.',
            price: '£2.50',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy'],
            isPopular: true,
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1594149630198-2a98d83c359e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Refreshments',
        items: [
          { 
            name: 'Sweet Lassi', 
            description: 'A refreshing yogurt-based savory drink blended with sugar, enjoyed since ancient times as a cooling beverage in royal courts.',
            price: '£3.25',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy'],
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Fresh Orange Juice', 
            description: 'Freshly squeezed juice made from ripe, juicy oranges, served chilled - a timeless refreshment known since the ancient citrus trade routes.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            spicyLevel: 0,
            imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
  };

  const menuCategories = [
    { id: 'breakfast', label: 'Morning Feast' },
    { id: 'lunch', label: 'Midday Dining' },
    { id: 'dinner', label: 'Evening Feast' },
    { id: 'deals', label: 'Thalis' },
    { id: 'kidsMeal', label: 'Kids Menu' },
    { id: 'desserts', label: 'Sweets & Elixirs' },
  ];

  const handleTabChange = (value: string) => {
    setActiveCategory(value);
  };

  // Function to render spicy level indicators
  const renderSpicyLevel = (level: number) => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} className="w-3 h-3 text-red-600" />
        ))}
      </div>
    );
  };

  const renderMenuSections = () => {
    const sections = menuData[activeCategory as keyof typeof menuData];
    
    return (
      <div className="space-y-16">
        {sections.map((section, idx) => (
          <div key={`${activeCategory}-${idx}`} className="space-y-6">
            <div className="relative">
              {/* Decorative divider before heading */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-no-repeat bg-center"
                style={{ backgroundImage: DECORATIVE_DIVIDER }}
              ></div>
              
              <h2 className="text-2xl font-display font-bold text-center mb-2 text-red-800">{section.name}</h2>
              
              {/* Decorative divider after heading */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-no-repeat bg-center"
                style={{ backgroundImage: DECORATIVE_DIVIDER }}
              ></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {section.items.map((item, itemIdx) => (
                <Card 
                  key={`${activeCategory}-${idx}-${itemIdx}`} 
                  className="h-full overflow-hidden border-red-950/20 bg-gradient-to-br from-amber-50 to-amber-100/40 relative"
                >
                  {/* Corner ornaments */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-no-repeat" style={{ backgroundImage: CORNER_PATTERN }}></div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-no-repeat transform rotate-90" style={{ backgroundImage: CORNER_PATTERN }}></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-no-repeat transform -rotate-90" style={{ backgroundImage: CORNER_PATTERN }}></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-no-repeat transform rotate-180" style={{ backgroundImage: CORNER_PATTERN }}></div>
                  
                  {/* Background mandala pattern */}
                  <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: MANDALA_PATTERN }}></div>
                  
                  {item.imageUrl && (
                    <div className="relative h-48 overflow-hidden border-b border-amber-800/20">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {item.isPopular && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-gradient-to-bl from-red-700 to-red-900 text-white transform rotate-45 text-xs font-bold py-1   px-8 shadow-md mt-4 mr-4">
                              Delicacy
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent">
                        <div className="p-2">
                          <div className="flex gap-1">
                            {item.isVegetarian && (
                              <Badge variant="outline" className="bg-green-50/80 text-green-800 border-green-200">
                                <Leaf className="w-3 h-3 mr-1" />Veg
                              </Badge>
                            )}
                            {item.spicyLevel && item.spicyLevel > 0 && (
                              <Badge variant="outline" className="bg-red-50/80 text-red-800 border-red-200 flex items-center">
                                {renderSpicyLevel(item.spicyLevel)}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6 z-10 relative">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-display font-semibold text-red-900">
                        {item.name}
                        {!item.imageUrl && item.isPopular && (
                          <Badge className="ml-2 bg-red-700 text-white">Delicacy</Badge>
                        )}
                      </h3>
                      <div className="bg-amber-100 border border-amber-300 px-3 py-1 rounded-full text-amber-800 font-semibold">
                        {item.price}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">{item.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-auto">
                      {!item.imageUrl && item.isVegetarian && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <Leaf className="w-3 h-3 mr-1" />Vegetarian
                        </Badge>
                      )}
                      
                      {!item.imageUrl && item.spicyLevel && item.spicyLevel > 0 && (
                        <div className="flex items-center gap-1 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                          <span className="text-xs text-red-700 mr-1">Spice:</span>
                          {renderSpicyLevel(item.spicyLevel)}
                        </div>
                      )}
                      
                      {item.isGlutenFree && (
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                          Gluten Free
                        </Badge>
                      )}
                      
                      {item.allergens && item.allergens.length > 0 && (
                        <Badge variant="outline" className="flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border-amber-200">
                          <AlertTriangle className="w-3 h-3" /> 
                          {item.allergens.join(', ')}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: MANDALA_PATTERN }}></div>
      
      {/* Ornamental top and bottom borders */}
      <div className="fixed top-0 left-0 w-full h-6 bg-repeat-x z-40 pointer-events-none" style={{
        backgroundImage: ORNATE_BORDER,
        backgroundSize: '40px 8px'
      }}></div>
      <div className="fixed bottom-0 left-0 w-full h-6 bg-repeat-x z-40 pointer-events-none transform rotate-180" style={{
        backgroundImage: ORNATE_BORDER,
        backgroundSize: '40px 8px'
      }}></div>
      
      <Navbar />
      <main className="relative pt-6">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              {/* Decorative divider before heading */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-no-repeat bg-center"
                style={{ backgroundImage: DECORATIVE_DIVIDER }}
              ></div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-amber-200 relative inline-block">
                Menu
              </h1>
              
              {/* Decorative divider after heading */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-no-repeat bg-center"
                style={{ backgroundImage: DECORATIVE_DIVIDER }}
              ></div>
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto mt-12 italic">
              Indulge in our ancient culinary treasures, prepared with traditional recipes passed down through generations of royal kitchens.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-7xl mx-auto">
            {/* Ornate menu category selector */}
            <div className="relative">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: MANDALA_PATTERN }}></div>
              
              <div className="overflow-x-auto pb-2 relative">
                <div className="flex h-auto p-2 w-full md:w-fit mx-auto bg-gradient-to-r from-red-800/10 via-red-900/20 to-red-800/10 rounded-lg border border-red-900/30 shadow-inner">
                  {menuCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleTabChange(category.id)}
                      className={cn(
                        "px-4 py-3 mx-1 rounded-md text-sm font-medium transition-all duration-300 font-display",
                        activeCategory === category.id 
                          ? "bg-gradient-to-br from-red-700 to-red-900 text-amber-200 shadow-md transform -translate-y-1" 
                          : "text-red-800 hover:text-red-600 hover:bg-amber-200/20"
                      )}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Menu Content */}
            <div className="bg-black/90 backdrop-blur-sm rounded-xl p-6 border border-red-800 shadow-xl relative">
              {/* Ornamental corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-800/30 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-red-800/30 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-red-800/30 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-800/30 rounded-br-xl"></div>
              
              {renderMenuSections()}
            </div>

            <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-300 shadow-inner relative">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: MANDALA_PATTERN }}></div>
              
              <div className="flex items-start gap-3 relative">
                <div className="bg-amber-100 p-2 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-amber-800 mb-2">Allergen Declaration</h3>
                  <p className="text-amber-700 text-sm mb-2">
                    Cross-contamination and changes in allergens may occur in any food item; please consult our royal servers for further clarification.
                  </p>
                  <div className="p-3 bg-white/50 rounded-md border border-amber-200 mt-4">
                    <h4 className="font-medium text-amber-800 mb-1"> Legend</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <Leaf className="w-3 h-3 mr-1" />Vegan
                        </Badge>
                        <span className="text-xs">Vegetarian</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200 flex items-center">
                          <Flame className="w-3 h-3" />
                        </Badge>
                        <span className="text-xs">Spice Level</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                          GF
                        </Badge>
                        <span className="text-xs">Gluten Free</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border-amber-200">
                          <AlertTriangle className="w-3 h-3" />
                        </Badge>
                        <span className="text-xs">Allergens</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;