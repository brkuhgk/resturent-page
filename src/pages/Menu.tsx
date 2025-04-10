import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UtensilsCrossed, ChevronRight, Leaf, AlertTriangle, ImageIcon } from 'lucide-react';
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
            imageUrl: "https://images.unsplash.com/photo-1630383249896-315a1b40adfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFkYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          },
          { 
            name: 'Sambhar Vada', 
            description: 'Medhu vadai soaked in tangy, spiced sambhar for a flavorful, savory treat.',
            price: '£4.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: ['mustard'],
            imageUrl: "https://images.unsplash.com/photo-1610057099451-d4f0fc6896a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtYmhhciUyMHZhZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          },
          { 
            name: 'Curd Vada', 
            description: 'Tender medhu vadai soaked in creamy, seasoned yogurt.',
            price: '£4.50',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy', 'mustard'],
            imageUrl: "https://images.unsplash.com/photo-1589516261368-9a15148b0f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VyZCUyMHZhZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
            imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWRsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          },
          { 
            name: 'Sambhar Idli', 
            description: 'Steamed idlis immersed in hot, tangy sambhar for a rich, comforting bite.',
            price: '£4.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: ['mustard'],
            imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWRsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
            imageUrl: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9zYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          },
          { 
            name: 'Onion Dosa', 
            description: 'Crisp dosa topped with caramelized onions for a sweet-savory twist.',
            price: '£7.75',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: "https://images.unsplash.com/photo-1589301767763-ab02bcf4546e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9zYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          },
          { 
            name: 'Ghee Dosa', 
            description: 'Golden, crispy dosa enriched with fragrant ghee for a luxurious finish.',
            price: '£7.75',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy'],
            imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9zYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
            imageUrl: "https://example.com/cauliflower-chilli.jpg"
          },
          { 
            name: 'Gobi Manchurian', 
            description: 'Cauliflower florets are deep-fried and coated in a sweet-spicy Manchurian sauce.',
            price: '£5.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['soya'],
            imageUrl: "https://example.com/gobi-manchurian.jpg"
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
            imageUrl: "https://example.com/chicken-65.jpg"
          },
          { 
            name: 'Chilli Chicken', 
            description: 'Chicken tossed in a tangy, spicy soy-based sauce with peppers and onions.',
            price: '£5.75',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: [],
            imageUrl: "https://example.com/chilli-chicken.jpg"
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
            imageUrl: "https://example.com/steamed-rice.jpg"
          },
          { 
            name: 'Ghee Rice', 
            description: 'Aromatic basmati rice sautéed with ghee, cumin seeds.',
            price: '£3.25',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy'],
            imageUrl: "https://example.com/ghee-rice.jpg"
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
            imageUrl: "https://example.com/medhu-vada.jpg"
          },
          { 
            name: 'Aloo Bonda', 
            description: 'Snack made of spicy mashed potato balls dipped in gram flour batter and deep-fried until crispy and golden.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: ['mustard'],
            imageUrl: "https://example.com/aloo-bonda.jpg"
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
            imageUrl: "https://example.com/plain-dosa.jpg"
          },
          { 
            name: 'Chapathi', 
            description: 'Soft, thin whole wheat flatbread, lightly roasted on a griddle.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: false,
            allergens: [],
            imageUrl: "https://example.com/chapathi.jpg"
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
            imageUrl: "https://example.com/butter-chicken.jpg"
          },
          { 
            name: 'Paneer Butter Masala', 
            description: 'Paneer cubes simmered in a rich, buttery tomato-based gravy, infused with aromatic spices.',
            price: '£8.99',
            isVegetarian: false,
            isGlutenFree: true,
            allergens: ['dairy', 'nuts'],
            imageUrl: "https://example.com/paneer-butter-masala.jpg"
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
            imageUrl: "https://example.com/breakfast-deal.jpg"
          },
          { 
            name: "Chola's Deal", 
            description: 'Includes Veg soup, Choice of Madras chicken or Madras lamb, Ghee Rice, Paratha (2 pieces), and Gulab jamoon for dessert',
            price: '£19.75',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy'],
            imageUrl: "https://example.com/cholas-deal.jpg"
          },
          { 
            name: "Chola's Special Deal", 
            description: "Choice of Chicken, Veg, Lamb, or Fish curry, Chef's choice of Chicken or Veg Roll, Choice of Rice, Choice of Bread, and Chef's choice of Dessert",
            price: '£23.99',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy', 'nuts'],
            imageUrl: "https://example.com/cholas-special-deal.jpg"
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
            imageUrl: "https://example.com/baby-corn-manchurian.jpg"
          },
          { 
            name: 'Finger Fish', 
            description: 'Crispy, golden-fried fish fingers seasoned with herbs and spices.',
            price: '£5.25',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['fish'],
            imageUrl: "https://example.com/finger-fish.jpg"
          },
          { 
            name: 'Chocolate Dosa', 
            description: 'A thin, crispy dosa spread with melted chocolate for a sweet twist.',
            price: '£5.25',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: "https://example.com/chocolate-dosa.jpg"
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
            imageUrl: "https://example.com/kesari.jpg"
          },
          { 
            name: 'Gulab Jamoon (2 pieces)', 
            description: 'Soft, deep-fried milk-based balls soaked in fragrant sugar syrup.',
            price: '£2.50',
            isVegetarian: false,
            isGlutenFree: false,
            allergens: ['dairy'],
            isPopular: true,
            imageUrl: "https://example.com/gulab-jamoon.jpg"
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
            imageUrl: "https://example.com/sweet-lassi.jpg"
          },
          { 
            name: 'Fresh Orange Juice', 
            description: 'Freshly squeezed juice made from ripe, juicy oranges, served chilled.',
            price: '£3.50',
            isVegetarian: true,
            isGlutenFree: true,
            allergens: [],
            imageUrl: "https://example.com/fresh-orange-juice.jpg"
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
                <Card key={`${activeCategory}-${idx}-${itemIdx}`} className="h-full overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    {item.imageUrl ? (
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <ImageIcon className="w-10 h-10 text-muted-foreground/40" />
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        {item.name}
                        {item.isPopular && (
                          <Badge className="ml-2 bg-primary text-white">Popular</Badge>
                        )}
                      </CardTitle>
                      <span className="font-medium text-lg text-primary">{item.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-3">{item.description}</CardDescription>
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <UtensilsCrossed className="text-primary h-6 w-6" />
              <h1 className="text-3xl md:text-4xl font-display font-bold">Our Menu</h1>
            </div>
            <p className="text-foreground/70 max-w-2xl mx-auto mt-2">
              Explore our authentic Indian cuisine with dishes from various regions, each prepared with fresh ingredients and traditional recipes.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="overflow-x-auto pb-2">
              <div className="flex h-auto p-1 w-full md:w-fit mx-auto bg-muted rounded-md">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleTabChange(category.id)}
                    className={cn(
                      "px-4 py-2 rounded-sm text-sm font-medium transition-colors",
                      activeCategory === category.id 
                        ? "bg-background text-foreground shadow-sm" 
                        : "text-muted-foreground hover:text-foreground"
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
