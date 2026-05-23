export const products = [
  {
    id: "bali-oak-desk",
    name: "Bali Oak Standing Desk",
    category: "desk",
    price: 79,
    image: "/assets/images/desk-1.png",
    description: "Electric standing desk with memory presets",
    badge: "Most Popular",
  },
  {
    id: "nomad-concrete-desk",
    name: "Nomad Concrete Desk",
    category: "desk",
    price: 59,
    image: "/assets/images/desk-2.png",
    description: "Industrial concrete surface with metal legs",
    badge: "New",
  },
  {
    id: "bamboo-zen-desk",
    name: "Bamboo Zen Desk",
    category: "desk",
    price: 65,
    image: "/assets/images/desk-1.png",
    description: "Eco-friendly bamboo Japanese design",
  },
  {
    id: "mesh-ergonomic-chair",
    name: "Mesh Ergonomic Pro",
    category: "chair",
    price: 49,
    image: "/assets/images/chair-1.png",
    description: "Premium mesh ergonomic chair",
  },
  {
    id: "cloud-boucle-chair",
    name: "Cloud Boucle",
    category: "chair",
    price: 39,
    image: "/assets/images/chair-2.png",
    description: "Cozy boucle fabric armchair",
  },
  {
    id: "monitor",
    name: 'UltraView 34"',
    category: "accessory",
    price: 35,
    image: "/assets/images/monitor-1.png",
    description: "Curved ultrawide monitor",
  },
  {
    id: "lamp",
    name: "Lumi Arc",
    category: "accessory",
    price: 18,
    image: "/assets/images/lamp-1.png",
    description: "Adjustable LED desk lamp",
  },
  {
    id: "plant",
    name: "Monstera",
    category: "accessory",
    price: 15,
    image: "/assets/images/plant-1.png",
    description: "Lush monstera in ceramic pot",
  },
  {
    id: "keyboard",
    name: "KeyCraft",
    category: "accessory",
    price: 18,
    image: "/assets/images/monitor-2.png",
    description: "Mechanical keyboard",
  },
  {
    id: "coffee",
    name: "Brew Barista",
    category: "accessory",
    price: 12,
    image: "/assets/images/plant-2.png",
    description: "Pour-over coffee set",
  },
  {
    id: "decor",
    name: "Design Books",
    category: "accessory",
    price: 25,
    image: "/assets/images/lamp-2.png",
    description: "Curated design book stack",
  },
];

export const sceneImages = {
  "room-day":
    "https://readdy.ai/api/search-image?query=bright%20minimalist%20tropical%20interior%20wall%2C%20warm%20linen%20textured%20wall%20with%20soft%20afternoon%20sunlight%2C%20clean%20wood%20floor%2C%20very%20slightly%20blurred%20background%2C%20no%20furniture%2C%20Scandinavian%20Bali%20aesthetic%2C%20airy%20atmosphere&width=900&height=600&seq=room-day-v2&orientation=landscape",
  "room-night":
    "https://readdy.ai/api/search-image?query=cozy%20modern%20workspace%20room%20at%20evening%20with%20warm%20ambient%20lamp%20lighting%2C%20dark%20window%2C%20light%20beige%20walls%20light%20wooden%20floor%2C%20moody%20warm%20lighting%2C%20no%20furniture%2C%20Scandinavian%20Bali%20aesthetic&width=900&height=600&seq=room-night-v2&orientation=landscape",
  "bali-oak-desk": "/assets/images/desk-1.png",
  "nomad-concrete-desk": "/assets/images/desk-2.png",
  "bamboo-zen-desk": "/assets/images/desk-1.png",
  "mesh-ergonomic-chair": "/assets/images/chair-1.png",
  "cloud-boucle-chair": "/assets/images/chair-2.png",
};

export const scenePositions = {
  desk: {
    bottom: "6%",
    left: "50%",
    width: "60%",
    transform: "translateX(-50%)",
    zIndex: 5,
  },
  chair: {
    bottom: "0%",
    left: "50%",
    width: "26%",
    transform: "translateX(-50%)",
    zIndex: 10,
  },
  deskOverrides: {
    "nomad-concrete-desk": {
      bottom: "0%",
      left: "50%",
      width: "60%",
      transform: "translateX(-50%)",
      zIndex: 5,
    },
    "bamboo-zen-desk": {
      bottom: "-1%",
      left: "50%",
      width: "40%",
      transform: "translateX(-50%)",
      zIndex: 5,
    },
    "bali-oak-desk": {
      bottom: "-1%",
      left: "50%",
      width: "40%",
      transform: "translateX(-50%)",
      zIndex: 5,
    },
  },
  chairOverrides: {
    "cloud-boucle-chair": {
      bottom: "2%",
      left: "50%",
      width: "22%",
      transform: "translateX(-50%)",
      zIndex: 10,
    },
    "mesh-ergonomic-chair": {
      bottom: "0%",
      left: "50%",
      width: "20%",
      transform: "translateX(-50%)",
      zIndex: 10,
    },
  },
  monitor: {
    bottom: "23%",
    left: "50%",
    width: "18%",
    transform: "translateX(-50%)",
    zIndex: 6,
  },
  keyboard: {
    bottom: "22%",
    left: "50%",
    width: "15%",
    transform: "translateX(-50%)",
    zIndex: 7,
  },
  lamp: { bottom: "26%", left: "18%", width: "10%", zIndex: 6 },
  plant: { bottom: "22%", right: "28%", width: "8%", zIndex: 6 },
  coffee: { bottom: "22%", right: "28%", width: "6%", zIndex: 7 },
  decor: { bottom: "24%", left: "30%", width: "6%", zIndex: 7 },
};

export const accessoryIcons = {
  monitor: "ri-tv-line",
  lamp: "ri-lightbulb-line",
  plant: "ri-plant-line",
  keyboard: "ri-keyboard-line",
  coffee: "ri-cup-line",
  decor: "ri-sparkling-line",
};

export const presets = [
  {
    id: "developer",
    name: "Developer Setup",
    description:
      "Dual monitors, mechanical keyboard, perfect for deep coding sessions",
    deskId: "bali-oak-desk",
    chairId: "mesh-ergonomic-chair",
    accessories: ["monitor", "keyboard", "lamp"],
  },
  {
    id: "minimalist",
    name: "Minimalist Setup",
    description: "Clean lines, no clutter, maximum focus and calm energy",
    deskId: "bamboo-zen-desk",
    chairId: "cloud-boucle-chair",
    accessories: ["plant", "decor"],
  },
  {
    id: "cozy-creator",
    name: "Cozy Creator",
    description:
      "Warm, tropical, lush — designed for creatives who need inspiration",
    deskId: "bamboo-zen-desk",
    chairId: "cloud-boucle-chair",
    accessories: ["monitor", "plant", "coffee", "lamp", "decor"],
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

export function calculateTotalPrice(deskId, chairId, accessories) {
  let total = 0;
  const desk = getProductById(deskId);
  const chair = getProductById(chairId);
  if (desk) total += desk.price;
  if (chair) total += chair.price;
  accessories.forEach((id) => {
    const acc = getProductById(id);
    if (acc) total += acc.price;
  });
  return total;
}

export function getPresetItemsCount(preset) {
  return 2 + preset.accessories.length;
}

export function getPresetTotal(preset) {
  return calculateTotalPrice(preset.deskId, preset.chairId, preset.accessories);
}
