
import { MenuItem } from "@/components/MenuSection";

export const appetizers: MenuItem[] = [
  {
    id: "app1",
    name: "Vegetable Samosas",
    description: "Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney.",
    price: "$6.99",
    category: "appetizers",
    isVegetarian: true,
    spicyLevel: 1,
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "app2",
    name: "Chicken Pakoras",
    description: "Tender chicken pieces battered in chickpea flour and deep-fried to perfection.",
    price: "$8.99",
    category: "appetizers",
    spicyLevel: 2,
    imageUrl: "https://images.unsplash.com/photo-1599749001441-8e85fcb3d9dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFrb3JhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "app3",
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled in a tandoor with bell peppers and onions.",
    price: "$9.99",
    category: "appetizers",
    isVegetarian: true,
    isPopular: true,
    spicyLevel: 2,
    imageUrl: "https://images.unsplash.com/photo-1539136788836-9a24294f869b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  }
];

export const mainCourses: MenuItem[] = [
  {
    id: "main1",
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce with a blend of aromatic spices.",
    price: "$18.99",
    category: "main",
    spicyLevel: 2,
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "main2",
    name: "Lamb Biryani",
    description: "Fragrant basmati rice cooked with tender lamb, caramelized onions, and exotic spices.",
    price: "$21.99",
    category: "main",
    spicyLevel: 3,
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "main3",
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese in a spiced tomato-based sauce with bell peppers and onions.",
    price: "$16.99",
    category: "main",
    isVegetarian: true,
    spicyLevel: 2,
    imageUrl: "https://images.unsplash.com/photo-1626200926749-ccce8b61832c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "main4",
    name: "Chana Masala",
    description: "Chickpeas simmered in a tangy tomato sauce with traditional Indian spices.",
    price: "$14.99",
    category: "main",
    isVegetarian: true,
    spicyLevel: 2,
    imageUrl: "https://images.unsplash.com/photo-1631292784640-5ded5ece8995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhbmElMjBtYXNhbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "main5",
    name: "Rogan Josh",
    description: "Slow-cooked lamb in a rich gravy flavored with aromatic Kashmiri spices.",
    price: "$19.99",
    category: "main",
    spicyLevel: 3,
    imageUrl: "https://images.unsplash.com/photo-1611489647653-84f5b4e3c9a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9nYW4lMjBqb3NofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "main6",
    name: "Malai Kofta",
    description: "Soft potato and paneer dumplings in a rich, creamy sauce with nuts and spices.",
    price: "$17.99",
    category: "main",
    isVegetarian: true,
    spicyLevel: 1,
    imageUrl: "https://images.unsplash.com/photo-1562565652-60c93d67870a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsYWklMjBrb2Z0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  }
];

export const breadsAndRice: MenuItem[] = [
  {
    id: "side1",
    name: "Garlic Naan",
    description: "Soft leavened bread topped with garlic and butter, baked in a tandoor.",
    price: "$3.99",
    category: "sides",
    isVegetarian: true,
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "side2",
    name: "Butter Naan",
    description: "Traditional Indian bread brushed with melted butter.",
    price: "$3.49",
    category: "sides",
    isVegetarian: true,
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwbmFhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "side3",
    name: "Jeera Rice",
    description: "Basmati rice flavored with cumin seeds and mild spices.",
    price: "$4.99",
    category: "sides",
    isVegetarian: true,
    imageUrl: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVlcmElMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
];

export const desserts: MenuItem[] = [
  {
    id: "dessert1",
    name: "Gulab Jamun",
    description: "Soft milk solids dumplings soaked in rose-flavored sugar syrup.",
    price: "$5.99",
    category: "desserts",
    isVegetarian: true,
    imageUrl: "https://images.unsplash.com/photo-1594149630198-2a98d83c359e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VsYWIlMjBqYW11bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "dessert2",
    name: "Kheer",
    description: "Creamy rice pudding with cardamom, saffron, and topped with nuts.",
    price: "$6.49",
    category: "desserts",
    isVegetarian: true,
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-1613292443284-8aa10ce7e8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2hlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "dessert3",
    name: "Rasmalai",
    description: "Soft cottage cheese patties immersed in creamy saffron-infused milk.",
    price: "$7.99",
    category: "desserts",
    isVegetarian: true,
    imageUrl: "https://images.unsplash.com/photo-1589881133594-c6c0b66a3f79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFzbWFsYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  }
];
