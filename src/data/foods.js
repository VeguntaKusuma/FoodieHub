export const foods = [
  {
    id: 'margherita',
    title: 'Margherita Pizza',
    category: 'Pizza',
    veg: true,
    price: 12.99,
    rating: 4.7,
    description:
      'Classic thin crust topped with fresh basil, mozzarella, and signature tomato sauce.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pepperoni',
    title: 'Pepperoni Heat Pizza',
    category: 'Pizza',
    veg: false,
    price: 15.5,
    rating: 4.6,
    description:
      'Bold pepperoni, melted mozzarella, and a fiery chili drizzle for the perfect kick.',
    image:
      'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'veggie-garden',
    title: 'Veggie Garden Pizza',
    category: 'Pizza',
    veg: true,
    price: 14.25,
    rating: 4.5,
    description:
      'Roasted capsicum, olives, mushrooms, and a rich herb-infused cheese blend.',
    image:
    "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 'chicken-biryani',
    title: 'Chicken Biryani',
    category: 'Biryani',
    veg: false,
    price: 13.99,
    rating: 4.8,
    description:
      'Aromatic basmati layered with tender chicken, saffron notes, and chef-spiced gravy.',
    image:
    'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'paneer-biryani',
    title: 'Paneer Dum Biryani',
    category: 'Biryani',
    veg: true,
    price: 12.75,
    rating: 4.6,
    description:
      'Dum-style biryani with soft paneer cubes, fragrant rice, and slow-cooked spices.',
    image:
    "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 'mutton-biryani',
    title: 'Mutton Biryani',
    category: 'Biryani',
    veg: false,
    price: 17.99,
    rating: 4.7,
    description:
      'Succulent mutton pieces with slow-cooked spices and deeply fragrant basmati.',
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 'gulab-jamun',
    title: 'Gulab Jamun',
    category: 'Desserts',
    veg: true,
    price: 6.5,
    rating: 4.7,
    description: 'Soft, syrup-soaked dumplings with warm cardamom sweetness.',
    image:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 'choco-lava',
    title: 'Choco Lava Cake',
    category: 'Desserts',
    veg: true,
    price: 8.25,
    rating: 4.8,
    description:
      'A rich chocolate center that melts into a smooth, indulgent pour.',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cheesecake',
    title: 'Strawberry Cheesecake',
    category: 'Desserts',
    veg: true,
    price: 9.75,
    rating: 4.6,
    description: 'Creamy cheesecake with a luscious strawberry glaze.',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80',
  },

  {
    id: 'cold-coffee',
    title: 'Cold Coffee',
    category: 'Drinks',
    veg: true,
    price: 5.25,
    rating: 4.5,
    description: 'Chilled coffee with a silky sweetness and a smooth finish.',
    image:
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'mint-lime',
    title: 'Mint Lime Cooler',
    category: 'Drinks',
    veg: true,
    price: 4.75,
    rating: 4.4,
    description: 'Refreshing mint and lime with a bright, crisp taste.',
    image:
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 'saffron-milkshake',
    title: 'Saffron Milkshake',
    category: 'Drinks',
    veg: true,
    price: 6.75,
    rating: 4.6,
    description: 'Creamy milkshake with subtle saffron aroma and vanilla depth.',
    image:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=80',
  },
]

export const foodsById = Object.fromEntries(foods.map((f) => [f.id, f]))