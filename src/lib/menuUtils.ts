/**
 * Menu utility functions to handle menu data processing
 */

// MenuItem type definition
export type MenuItem = {
  category: string;
  subcategory?: string;
  name: string;
  description: string;
  price: string;
  price2?: string;
  isVegan?: boolean; // Changed from isVegetarian to isVegan
  isGlutenFree?: boolean;
  allergens?: string[];
  isPopular?: boolean;
  spicyLevel?: number;
  imageUrl?: string;
};

/**
 * Creates fallback menu data when CSV loading fails
 */
export function createFallbackMenuData(): MenuItem[] {
  return [
    {
      category: "APPETIZERS",
      subcategory: "Starters",
      name: "Vegetable Samosas",
      description: "Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney.",
      price: "£5.99",
      isVegan: true, // Changed from isVegetarian to isVegan
      isGlutenFree: false,
      allergens: ["Gluten"],
      isPopular: true,
      spicyLevel: 1,
      imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
    },
    {
      category: "APPETIZERS",
      subcategory: "Starters",
      name: "Chicken Pakoras",
      description: "Tender chicken pieces battered in chickpea flour and deep-fried to perfection.",
      price: "£7.99",
      isVegan: false, // Changed from isVegetarian to isVegan
      isGlutenFree: true,
      allergens: ["Eggs"],
      spicyLevel: 2
    },
    {
      category: "VEGETARIAN",
      subcategory: "Main Course",
      name: "Paneer Tikka Masala",
      description: "Grilled cottage cheese in a spiced tomato-based sauce with bell peppers and onions.",
      price: "£14.99",
      isVegan: true, // Changed from isVegetarian to isVegan
      isGlutenFree: true,
      allergens: ["Dairy"],
      spicyLevel: 2,
      imageUrl: "https://images.unsplash.com/photo-1626200926749-ccce8b61832c"
    },
    {
      category: "CHICKEN",
      subcategory: "Main Course", 
      name: "Butter Chicken",
      description: "Tender chicken in a rich, creamy tomato sauce with a blend of aromatic spices.",
      price: "£16.99",
      price2: "£10.99",
      isVegan: false, // Changed from isVegetarian to isVegan
      isGlutenFree: false,
      allergens: ["Dairy"],
      isPopular: true,
      spicyLevel: 2,
      imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" 
    },
    {
      category: "RICE",
      subcategory: "Accompaniments",
      name: "Jeera Rice",
      description: "Basmati rice flavored with cumin seeds and mild spices.",
      price: "£4.99",
      isVegan: true, // Changed from isVegetarian to isVegan
      isGlutenFree: true,
      spicyLevel: 0
    },
    {
      category: "BREAD",
      subcategory: "Accompaniments",
      name: "Garlic Naan",
      description: "Soft leavened bread topped with garlic and butter, baked in a tandoor.",
      price: "£3.49",
      isVegan: false, // Changed from isVegetarian to isVegan
      isGlutenFree: false,
      allergens: ["Gluten", "Dairy"],
      spicyLevel: 0
    },
    {
      category: "DESSERTS",
      subcategory: "Sweet Finishes",
      name: "Gulab Jamun",
      description: "Soft milk solids dumplings soaked in rose-flavored sugar syrup.",
      price: "£5.99",
      isVegan: false, // Changed from isVegetarian to isVegan
      isGlutenFree: false,
      allergens: ["Dairy"],
      spicyLevel: 0,
      imageUrl: "https://images.unsplash.com/photo-1594149630198-2a98d83c359e"
    }
  ];
}

/**
 * Groups menu items by category and subcategory
 */
export function groupMenuItems(items: MenuItem[]): { 
  grouped: {[key: string]: {[key: string]: MenuItem[]}},
  categories: string[] 
} {
  const grouped: {[key: string]: {[key: string]: MenuItem[]}} = {};
  const categories: string[] = [];
  
  items.forEach(item => {
    if (!grouped[item.category]) {
      grouped[item.category] = {};
      categories.push(item.category);
    }
    
    if (!grouped[item.category][item.subcategory || 'Specials']) {
      grouped[item.category][item.subcategory || 'Specials'] = [];
    }
    
    grouped[item.category][item.subcategory || 'Specials'].push(item);
  });
  
  return { grouped, categories };
}