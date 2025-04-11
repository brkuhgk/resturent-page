
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UtensilsCrossed, Leaf, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  allergens?: string[];
  isPopular?: boolean;
  imageUrl?: string;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuData = {
    breakfast: [
      {
        name: 'Starters',
        items: [
          { 
            name: 'Medhu Vada', 
            description: 'Crispy, golden lentil doughnuts deep-fried to perfection from spiced urad dal batter.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1630383249896-460eaa774f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Sambhar Vada', 
            description: 'Medhu vadai soaked in tangy, spiced sambhar for a flavorful, savory treat.',
            price: '£4.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: ['mustard'],
            imageUrl: 'https://images.unsplash.com/photo-1625398407796-82650a8c9dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Curd Vada', 
            description: 'Tender medhu vadai soaked in creamy, seasoned yogurt.',
            price: '£4.50',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy', 'mustard'],
            imageUrl: 'https://images.unsplash.com/photo-1589301773859-bb024d3ad558?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Idli',
        items: [
          { 
            name: 'Plain Idli', 
            description: 'Soft, fluffy steamed rice cakes made from fermented rice and lentil batter.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1589301768775-e0c4c4f6f2b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Sambhar Idli', 
            description: 'Steamed idlis immersed in hot, tangy sambhar for a rich, comforting bite.',
            price: '£4.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: ['mustard'],
            imageUrl: 'https://images.unsplash.com/photo-1626057953575-9a8fbe06f9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Dosa',
        items: [
          { 
            name: 'Plain Dosa', 
            description: 'Thin, crisp fermented rice and lentil crepe, a South Indian classic.',
            price: '£7.25',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Onion Dosa', 
            description: 'Crisp dosa topped with caramelized onions for a sweet-savory twist.',
            price: '£7.75',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1589301764097-b7ce9a984a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Ghee Dosa', 
            description: 'Golden, crispy dosa enriched with fragrant ghee for a luxurious finish.',
            price: '£7.75',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy'],
            imageUrl: 'https://images.unsplash.com/photo-1610057224084-302b443526b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
    lunch: [
      {
        name: 'Veg Starters',
        items: [
          { 
            name: 'Cauliflower Chilli', 
            description: 'Deep-fried cauliflower tossed in a tangy chilli sauce.',
            price: '£4.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['soya'],
            imageUrl: 'https://images.unsplash.com/photo-1600326145402-a79a1dc27c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Gobi Manchurian', 
            description: 'Cauliflower florets are deep-fried and coated in a sweet-spicy Manchurian sauce.',
            price: '£5.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['soya'],
            imageUrl: 'https://images.unsplash.com/photo-1625398407796-82650a8c9dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Non-Veg Starters',
        items: [
          { 
            name: 'Chicken 65', 
            description: 'A spicy chicken appetizer marinated with aromatic spices and curry leaves.',
            price: '£4.99',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['soya', 'dairy'],
            imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Chilli Chicken', 
            description: 'Chicken tossed in a tangy, spicy soy-based sauce with peppers and onions.',
            price: '£5.75',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Rice',
        items: [
          { 
            name: 'Steamed Rice', 
            description: 'Fluffy, plain white rice gently steamed to complement any curry or entrée.',
            price: '£2.99',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Ghee Rice', 
            description: 'Aromatic basmati rice sautéed with ghee, cumin seeds.',
            price: '£3.25',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy'],
            imageUrl: 'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
    dinner: [
      {
        name: 'Snacks',
        items: [
          { 
            name: 'Medhu Vada', 
            description: 'Crispy, golden lentil doughnuts deep-fried to perfection from spiced urad dal batter.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1630383249896-460eaa774f84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Aloo Bonda', 
            description: 'Snack made of spicy mashed potato balls dipped in gram flour batter and deep-fried until crispy and golden.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['mustard'],
            imageUrl: 'https://images.unsplash.com/photo-1601050690117-94f5f7a16c9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Main Course',
        items: [
          { 
            name: 'Plain Dosa', 
            description: 'Thin, crisp fermented rice and lentil crepe, a South Indian classic.',
            price: '£7.25',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Chapathi', 
            description: 'Soft, thin whole wheat flatbread, lightly roasted on a griddle.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Curries',
        items: [
          { 
            name: 'Butter Chicken', 
            description: 'Succulent pieces of chicken cooked in a rich, creamy tomato-based gravy, infused with aromatic spices and a touch of butter.',
            price: '£9.99',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy', 'nuts'],
            isPopular: true,
            imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Paneer Butter Masala', 
            description: 'Paneer cubes simmered in a rich, buttery tomato-based gravy, infused with aromatic spices.',
            price: '£8.99',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy', 'nuts'],
            imageUrl: 'https://images.unsplash.com/photo-1626200926749-ccce8b61832c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
    deals: [
      {
        name: 'Special Deals',
        items: [
          { 
            name: 'Breakfast Deal (12:00 - 16:00)', 
            description: 'Includes Medhu vada, Choice of Idli or Upma, and Choice of Dosa',
            price: '£11.95',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1625398407797-2640478a72ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: "Chola's Deal", 
            description: 'Includes Veg soup, Choice of Madras chicken or Madras lamb, Ghee Rice, Paratha (2 pieces), and Gulab jamoon for dessert',
            price: '£19.75',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy'],
            imageUrl: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: "Chola's Special Deal", 
            description: "Choice of Chicken, Veg, Lamb, or Fish curry, Chef's choice of Chicken or Veg Roll, Choice of Rice, Choice of Bread, and Chef's choice of Dessert",
            price: '£23.99',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy', 'nuts'],
            imageUrl: 'https://images.unsplash.com/photo-1585937421513-70a008356136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
    kidsMeal: [
      {
        name: 'Kids Menu',
        items: [
          { 
            name: 'Baby Corn Manchurian', 
            description: 'Crispy baby corn tossed in a spicy Indo-Chinese Manchurian sauce.',
            price: '£3.75',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['soya'],
            imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Finger Fish', 
            description: 'Crispy, golden-fried fish fingers seasoned with herbs and spices.',
            price: '£5.25',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['fish'],
            imageUrl: 'https://images.unsplash.com/photo-1613482184972-f9c1f357d02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Chocolate Dosa', 
            description: 'A thin, crispy dosa spread with melted chocolate for a sweet twist.',
            price: '£5.25',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
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
            description: 'Dessert made with semolina, ghee, sugar.',
            price: '£0.99',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy', 'nuts'],
            imageUrl: 'https://images.unsplash.com/photo-1515467837939-6875e4df3b8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Gulab Jamoon (2 pieces)', 
            description: 'Soft, deep-fried milk-based balls soaked in fragrant sugar syrup.',
            price: '£2.50',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy'],
            isPopular: true,
            imageUrl: 'https://images.unsplash.com/photo-1594149630198-2a98d83c359e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      },
      {
        name: 'Drinks',
        items: [
          { 
            name: 'Sweet Lassi', 
            description: 'A refreshing yogurt-based savory drink blended with Sugar.',
            price: '£3.25',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy'],
            imageUrl: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
          { 
            name: 'Fresh Orange Juice', 
            description: 'Freshly squeezed juice made from ripe, juicy oranges, served chilled.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
          },
        ]
      }
    ],
  };

  const menuCategories = [
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' },
    { id: 'deals', label: 'Deals' },
    { id: 'kidsMeal', label: 'Kids Meal' },
    { id: 'desserts', label: 'Desserts & Drinks' },
  ];

  const handleTabChange = (value: string) => {
    setActiveCategory(value);
  };

  const renderMenuSections = () => {
    const sections = menuData[activeCategory as keyof typeof menuData];
    
    return (
      <div className="space-y-10">
        {sections.map((section, idx) => (
          <div key={`${activeCategory}-${idx}`} className="space-y-4">
            <h2 className="text-2xl font-display font-semibold border-b pb-2">{section.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item, itemIdx) => (
                <Card key={`${activeCategory}-${idx}-${itemIdx}`} className="h-full overflow-hidden border-red-950/20">
                  {item.imageUrl && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {item.isPopular && (
                        <Badge className="absolute top-2 right-2 bg-red-700 text-white">
                          Popular
                        </Badge>
                      )}
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        {item.name}
                        {!item.imageUrl && item.isPopular && (
                          <Badge className="ml-2 bg-red-700 text-white">Popular</Badge>
                        )}
                      </CardTitle>
                      <span className="font-medium text-lg text-red-700">{item.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-3 text-gray-700">{item.description}</CardDescription>
                    <div className="flex items-center flex-wrap gap-2">
                      {item.isVegetarian && (
                        <Badge variant="outline" className="flex items-center gap-1 text-xs bg-green-50 text-green-700 border-green-200">
                          <Leaf className="w-3 h-3" /> Veg
                        </Badge>
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <UtensilsCrossed className="text-red-700 h-6 w-6" />
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Our Menu</h1>
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto mt-2">
              Explore our authentic Indian cuisine with dishes from various regions, each prepared with fresh ingredients and traditional recipes.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="overflow-x-auto pb-2">
              <div className="flex h-auto p-1 w-full md:w-fit mx-auto bg-gray-200 rounded-md">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleTabChange(category.id)}
                    className={cn(
                      "px-4 py-2 rounded-sm text-sm font-medium transition-colors",
                      activeCategory === category.id 
                        ? "bg-red-700 text-white shadow-sm" 
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {renderMenuSections()}

            <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800">Allergen Information</h3>
                  <p className="text-amber-700 text-sm mt-1">
                    Cross-contamination and changes in allergens may occur in any food item; please consult the staff for further clarification.
                  </p>
                  <p className="text-amber-700 text-sm mt-2">
                    <span className="font-semibold">Abbreviation:</span> V - Vegan, N-V - Non Vegan, GF - Gluten free, N-GF - Not Gluten free
                  </p>
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
