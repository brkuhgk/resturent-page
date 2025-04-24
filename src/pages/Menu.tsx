import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Leaf, AlertTriangle, UtensilsCrossed, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import Papa from 'papaparse';
import { createFallbackMenuData, groupMenuItems } from '@/lib/menuUtils';

// Define the MenuItem type
type MenuItem = {
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

// Ancient Indian pattern SVGs for decorative elements
const ORNATE_BORDER = `url("data:image/svg+xml,%3Csvg width='40' height='8' viewBox='0 0 40 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h5l5 8h10l5-8h5v2h-5l-5 6h-10l-5-6h-5z' fill='%23C00000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const MANDALA_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 15c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z' fill='%23FF0000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const CORNER_PATTERN = `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v16H0z M16 16h16v16H16z M0 16h8v8H0z M8 8h8v8H8z M24 0h8v8h-8z M32 8h8v8h-8z M40 0h8v8h-8z M0 24h8v8H0z M40 40h8v8h-8z' fill='%23FF0000' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`;

const DECORATIVE_DIVIDER = `url("data:image/svg+xml,%3Csvg width='144' height='16' viewBox='0 0 144 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M72 0L62 5L52 0L42 5L32 0L22 5L12 0L2 5L0 4v4l2 1l10-5l10 5l10-5l10 5l10-5l10 5l10-5l10 5l10-5l10 5l10-5l2 1V4l-2 1L132 0L122 5L112 0L102 5L92 0L82 5z' fill='%23C00000' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`;

// Default images for categories
const defaultImageUrls: { [key: string]: string } = {
  "APPETIZERS": "https://lh3.googleusercontent.com/pw/AP1GczOrxlM7eJz-4r5KxhcmADoag9S8u5cmlYyd9NTB7o6CCQQGjW6IkRaaIP_CQMBe5_20NhoxUqVadkWpQar2XrB77oKw6mN1W82axuDxLXE-dYrRLjZE2q24c18ckLyIr8Cl7XZirrSz2Sj7aq5r8pQ=w225-h144-s-no-gm?authuser=0",
  "TANDOOR": "https://images.unsplash.com/photo-1610057224084-302b443526b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "VEGETARIAN": "https://images.unsplash.com/photo-1626200926749-ccce8b61832c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "CHICKEN": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "LAMB": "https://images.unsplash.com/photo-1611489647653-84f5b4e3c9a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9nYW4lMjBqb3NofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "SEAFOOD": "https://images.unsplash.com/photo-1569058480449-a6329f14a363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "RICE": "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVlcmElMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "BREAD": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFhbnxlbnwwfHwwfHw%3D%3D&auto=format&fit=crop&w=500&q=60",
  "DESSERTS": "https://images.unsplash.com/photo-1594149630198-2a98d83c359e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VsYWIlMjBqYW11bnxlbnwwfHwwfHw%3D%3D&auto=format&fit=crop&w=500&q=60",
  "DRINKS": "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzc2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "THALI": "https://images.unsplash.com/photo-1626057952510-5919e8d372f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhhbGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "BLANK" : "https://lh3.googleusercontent.com/pw/AP1GczOrxlM7eJz-4r5KxhcmADoag9S8u5cmlYyd9NTB7o6CCQQGjW6IkRaaIP_CQMBe5_20NhoxUqVadkWpQar2XrB77oKw6mN1W82axuDxLXE-dYrRLjZE2q24c18ckLyIr8Cl7XZirrSz2Sj7aq5r8pQ=w225-h144-s-no-gm?authuser=0"
};

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [groupedMenu, setGroupedMenu] = useState<{[key: string]: {[key: string]: MenuItem[]}}>({}); 
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to process CSV data
    const processCSVData = async () => {
      try {
        setIsLoading(true);
        
        // Try different methods to load the CSV
        let csvData;
        
        try {
          // Method 1: Try using window.fs.readFile (works in Claude environment)
          if (typeof window.fs !== 'undefined' && typeof window.fs.readFile === 'function') {
            const response = await window.fs.readFile('Updated_Menu.csv', { encoding: 'utf8' });
            csvData = response;
          } 
        } catch (err) {
          console.log("fs.readFile method failed, trying fetch instead");
        }
        
        // Method 2: If first method failed, try using fetch API
        if (!csvData) {
          try {
            const response = await fetch('Updated_Menu.csv');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            csvData = await response.text();
          } catch (fetchErr) {
            console.log("Fetch method failed", fetchErr);
          }
        }

        // Method 3: Use fallback data if all else fails
        if (!csvData) {
          console.log("Using fallback menu data ============");
          const fallbackItems = createFallbackMenuData();
          setMenuItems(fallbackItems);
          
          // Group menu items for display
          const { grouped, categories } = groupMenuItems(fallbackItems);
          setGroupedMenu(grouped);
          setCategories(categories);
          
          // Set initial active category
          if (categories.length > 0) {
            setActiveCategory(categories[0]);
          }
          
          setIsLoading(false);
          return; // Skip the Papa.parse section
        }

        // Parse CSV data
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (results) => {
            if (results.errors.length > 0) {
              setError(`Error parsing CSV: ${results.errors[0].message}`);
              return;
            }
            
            // Transform parsed data to MenuItem format
            const items: MenuItem[] = results.data.map((row: any, index: number) => {
              // Handle vegan, gluten-free, and popular flags
              const isVegan = row['Vegan']?.toString().toLowerCase() === 'yes' || 
                             row['Vegan']?.toString().toLowerCase() === 'true' ||
                             row['Vegetarian']?.toString().toLowerCase() === 'yes' || 
                             row['Vegetarian']?.toString().toLowerCase() === 'true';
              
              const isGlutenFree = row['Gluten Free']?.toString().toLowerCase() === 'yes' || 
                                  row['Gluten Free']?.toString().toLowerCase() === 'true';
              
              const isPopular = row['Popular']?.toString().toLowerCase() === 'yes' || 
                               row['Popular']?.toString().toLowerCase() === 'true';
              
              // Parse allergens from comma-separated list
              const allergens = row['Allergens'] ? 
                row['Allergens'].toString().split(',').map((a: string) => a.trim()).filter(Boolean) : 
                [];
                
                
              // Parse spicy level
              const spicyLevel = typeof row['Spicy Level'] === 'number' ? 
                row['Spicy Level'] : 
                (row['Spicy Level']?.toString() ? parseInt(row['Spicy Level'].toString(), 10) : 0);
              
              // Determine image URL
              let imageUrl = row['Image URL'] || '';
              if (!imageUrl) {
                // Try to get a default image based on category
                const category = row['Category']?.toString().toUpperCase() || '';
                imageUrl = defaultImageUrls[category] || defaultImageUrls['APPETIZERS'] || '';
              }
              
              // Get subcategory or use category as default
              const subcategory = row['Subcategory'] || row['Category'] || 'Specials';
              
              // Get prices (some items might have two price options like "Half/Full")
              const price = row['Price'] || '';
              const price2 = row['Price2'] || undefined;

              // Prepare the MenuItem object
              return {
                category: row['Category'] || 'Uncategorized',
                subcategory,
                name: row['Item Name'] || `Item ${index + 1}`,
                description: row['Description'] || 'A traditional Indian delicacy.',
                price,
                price2,
                isVegan, // Updated from isVegetarian to isVegan
                isGlutenFree,
                allergens,
                isPopular,
                spicyLevel,
                imageUrl
              };
            });
            
            setMenuItems(items);
            
            // Group menu items for display
            const grouped: {[key: string]: {[key: string]: MenuItem[]}} = {};
            const cats: string[] = [];
            
            items.forEach(item => {
              if (!grouped[item.category]) {
                grouped[item.category] = {};
                cats.push(item.category);
              }
              
              if (!grouped[item.category][item.subcategory || 'Specials']) {
                grouped[item.category][item.subcategory || 'Specials'] = [];
              }
              
              grouped[item.category][item.subcategory || 'Specials'].push(item);
            });
            
            setGroupedMenu(grouped);
            setCategories(cats);
            
            // Set initial active category
            if (cats.length > 0) {
              setActiveCategory(cats[0]);
            }
            
            setIsLoading(false);
          },
          error: (error) => {
            setError(`Error parsing CSV: ${error.message}`);
            setIsLoading(false);
          }
        });
        
      } catch (err) {
        console.error('Error reading CSV:', err);
        
        // Fallback to use the menu data from Menu.tsx if file reading fails
        setError(`Error reading menu data. Please try again later.`);
        setIsLoading(false);
      }
    };
    
    processCSVData();
  }, []);

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

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Render loading spinner
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-800 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-200 text-lg">Loading Royal Menu...</p>
        </div>
      </div>
    );
  }

  // Render error message
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center max-w-md p-6 bg-red-900/50 rounded-lg border border-red-700">
          <h2 className="text-xl font-bold text-white mb-4">Error Loading Menu</h2>
          <p className="text-amber-200">{error}</p>
          <p className="mt-4 text-gray-300 text-sm">Please contact our royal staff for assistance.</p>
        </div>
      </div>
    );
  }

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
                Royal Menu
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

          {/* Category Navigation */}
          <div className="flex flex-col gap-8 max-w-7xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: MANDALA_PATTERN }}></div>
              
              <div className="overflow-x-auto pb-2 relative">
                <div className="flex flex-wrap justify-center gap-2 p-4 w-full mx-auto bg-gradient-to-r from-red-800/10 via-red-900/20 to-red-800/10 rounded-lg border border-red-900/30 shadow-inner">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={cn(
                        "px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 font-display whitespace-nowrap",
                        activeCategory === category 
                          ? "bg-gradient-to-br from-red-700 to-red-900 text-amber-200 shadow-md transform -translate-y-1" 
                          : "text-amber-200 hover:text-amber-300 hover:bg-red-900/20"
                      )}
                    >
                      {category}
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
              
              {/* Display menu sections based on active category */}
              {activeCategory && groupedMenu[activeCategory] && (
                <div className="space-y-16">
                  {Object.entries(groupedMenu[activeCategory]).map(([subcategory, items], idx) => (
                    <div key={`${activeCategory}-${idx}`} className="space-y-6">
                      <div className="relative">
                        {/* Decorative divider before heading */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-no-repeat bg-center"
                          style={{ backgroundImage: DECORATIVE_DIVIDER }}
                        ></div>
                        
                        <h2 className="text-2xl font-display font-bold text-center mb-2 text-red-800">{subcategory}</h2>
                        
                        {/* Decorative divider after heading */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-no-repeat bg-center"
                          style={{ backgroundImage: DECORATIVE_DIVIDER }}
                        ></div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {items.map((item, itemIdx) => (
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
                                    <div className="bg-gradient-to-bl from-red-700 to-red-900 text-white transform rotate-45 text-xs font-bold py-1 px-8 shadow-md mt-4 mr-4">
                                        Royal Delicacy
                                    </div>
                                  </div>
                                )}
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent">
                                  <div className="p-2">
                                    <div className="flex gap-1">
                                      {item.isVegan && (
                                        <Badge variant="outline" className="bg-green-50/80 text-green-800 border-green-200">
                                          <Leaf className="w-3 h-3 mr-1" />Vegan
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
                                    <Badge className="ml-2 bg-red-700 text-white">Royal Delicacy</Badge>
                                  )}
                                </h3>
                                <div className="bg-amber-100 border border-amber-300 px-3 py-1 rounded-full text-amber-800">
                                  {/* Reduced font size for prices */}
                                  <span className={item.price2 ? "text-sm font-semibold" : "font-semibold"}>
                                    {item.price}
                                    {item.price2 && <span className="ml-1 text-xs"> / {item.price2}</span>}
                                  </span>
                                </div>
                              </div>
                              
                              <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">{item.description}</p>
                              
                              <div className="flex flex-wrap items-center gap-2 mt-auto">
                                {!item.imageUrl && item.isVegan && (
                                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    <Leaf className="w-3 h-3 mr-1" />Vegan
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
              )}
            </div>

            {/* Allergen Information - Fixed contrast issues */}
            <div className="mt-12 p-6 bg-amber-100 rounded-lg border border-amber-300 shadow-inner relative">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: MANDALA_PATTERN }}></div>
              
              <div className="flex items-start gap-3 relative">
                <div className="bg-amber-200 p-2 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-amber-800" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-amber-900 mb-2">Allergen Declaration</h3>
                  <p className="text-amber-900 text-sm mb-2">
                    Cross-contamination and changes in allergens may occur in any food item; please consult our royal servers for further clarification.
                  </p>
                  <div className="p-3 bg-white/70 rounded-md border border-amber-300 mt-4">
                    <h4 className="font-medium text-amber-900 mb-1">Legend</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <Leaf className="w-3 h-3 mr-1" />Vegan
                        </Badge>
                        <span className="text-amber-950 text-xs">Vegan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200 flex items-center">
                          <Flame className="w-3 h-3" />
                        </Badge>
                        <span className="text-amber-950 text-xs">Spice Level</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                          GF
                        </Badge>
                        <span className="text-amber-950 text-xs">Gluten Free</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border-amber-200">
                          <AlertTriangle className="w-3 h-3" />
                        </Badge>
                        <span className="text-amber-950 text-xs">Allergens</span>
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