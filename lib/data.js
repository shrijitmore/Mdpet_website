// MD PET - Product Data and Company Information

export const companyInfo = {
  name: "MD PET",
  tagline: "Complete PET Bottle Manufacturing Plant Solutions",
  description: "MD PET is a leading manufacturer of Two Stage PET Stretch Blow Moulding Machines. With over 15 years of expertise, we deliver high-quality, reliable machinery solutions, providing solutions from 3-4 years.",
  founded: 2009,
  yearsExperience: 15,
  clientsServed: 100,
  statesServed: 5,
  machinesInstalled: 150,
  email: "dhirajyadav160489@gmail.com",
  phone: "+91 9049806874",
  whatsapp: "+91 9049806874",
  address: {
    street: "Gala No..B/8, Bapu Sitaram Ind. Est. Ni. 1,S. No.45, Dhumal Nagar",
    city: "Waliv, Vasai (E)",
    state: "Maharashtra",
    pincode: "401 208",
    country: "India (Dist. Palghar state 27)"
  },
  socialMedia: {
    linkedin: "https://linkedin.com/company/mdpet",
    facebook: "https://facebook.com/mdpet"
  }
};

export const products = [
  {
    id: "1",
    name: "2L Semi Automatic Machine",
    slug: "2l-semi-automatic-machine",
    category: "Semi Automatic",
    shortDescription: "Efficient bottle forming with manual loading, ideal for small to medium production.",
    description: "The 2L Semi Automatic PET Stretch Blow Moulding Machine is designed for efficient bottle production with manual preform loading. Perfect for small to medium scale operations requiring flexibility and cost-effectiveness.",
    capacity: "800-1000 BPH",
    maxVolume: "2 Liters",
    cavities: 2,
    features: [
      "Manual preform loading",
      "Infrared heating system",
      "PLC controlled operation",
      "Energy efficient design",
      "Easy mould changeover",
      "Low maintenance",
      "Compact footprint",
      "Air recovery system"
    ],
    specifications: {
      "Output Capacity": "800-1000 Bottles/Hour",
      "Max Bottle Volume": "2000ml",
      "Preform Neck Size": "28mm / 38mm",
      "Max Bottle Diameter": "110mm",
      "Max Bottle Height": "335mm",
      "Heating Power": "24 KW",
      "Compressed Air": "25-35 Bar",
      "Machine Weight": "1200 kg",
      "Dimensions": "2500 x 1200 x 2100 mm"
    },
    images: [
      "https://images.pexels.com/photos/29842696/pexels-photo-29842696.jpeg",
      "https://images.pexels.com/photos/34221993/pexels-photo-34221993.jpeg"
    ],
    video: null,
    brochure: "/brochures/2l-semi-automatic.pdf",
    price: "On Request",
    featured: true
  },
  {
    id: "2",
    name: "3 Cavity Automatic Machine",
    slug: "3-cavity-automatic-machine",
    category: "Fully Automatic",
    shortDescription: "High-speed molding machine for consistent, high-quality PET bottle output.",
    description: "The 3 Cavity Fully Automatic PET Stretch Blow Moulding Machine delivers superior production speeds with automatic preform loading, heating, and bottle ejection for seamless operation.",
    capacity: "2800-3000 BPH",
    maxVolume: "2 Liters",
    cavities: 3,
    features: [
      "Fully automatic operation",
      "Auto preform loading",
      "Servo-driven stretching",
      "PLC with HMI touch screen",
      "Air recovery system",
      "Low energy consumption",
      "Quick mould changeover",
      "Auto fault detection"
    ],
    specifications: {
      "Output Capacity": "2800-3000 Bottles/Hour",
      "Max Bottle Volume": "2000ml",
      "Number of Cavities": "3",
      "Preform Neck Size": "28mm / 38mm",
      "Max Bottle Diameter": "110mm",
      "Max Bottle Height": "335mm",
      "Heating Power": "45 KW",
      "Compressed Air": "25-35 Bar",
      "Machine Weight": "3500 kg",
      "Dimensions": "4500 x 1800 x 2200 mm"
    },
    images: [
      "https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg",
      "https://images.pexels.com/photos/11679684/pexels-photo-11679684.jpeg"
    ],
    video: null,
    brochure: "/brochures/3-cavity-automatic.pdf",
    price: "On Request",
    featured: true
  },
  {
    id: "3",
    name: "4 Cavity Automatic Machine",
    slug: "4-cavity-automatic-machine",
    category: "Fully Automatic",
    shortDescription: "Energy-efficient automatic blowing solution for cost-effective bottle production.",
    description: "The 4 Cavity Fully Automatic PET Stretch Blow Moulding Machine offers excellent production efficiency with advanced servo technology for high-volume manufacturing needs.",
    capacity: "4000-4200 BPH",
    maxVolume: "2 Liters",
    cavities: 4,
    features: [
      "4 Servo motor system",
      "High production efficiency",
      "Automatic operation",
      "Advanced PLC control",
      "Energy saving mode",
      "Precision heating zones",
      "Auto defect detection",
      "Remote monitoring capable"
    ],
    specifications: {
      "Output Capacity": "4000-4200 Bottles/Hour",
      "Max Bottle Volume": "2000ml",
      "Number of Cavities": "4",
      "Preform Neck Size": "28mm / 38mm / 45mm",
      "Max Bottle Diameter": "115mm",
      "Max Bottle Height": "340mm",
      "Heating Power": "58 KW",
      "Compressed Air": "25-35 Bar",
      "Machine Weight": "4200 kg",
      "Dimensions": "5200 x 2000 x 2300 mm"
    },
    images: [
      "https://images.pexels.com/photos/29842696/pexels-photo-29842696.jpeg",
      "https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg"
    ],
    video: null,
    brochure: "/brochures/4-cavity-automatic.pdf",
    price: "On Request",
    featured: true
  },
  {
    id: "8",
    name: "3 Cavity ECO Automatic Machine",
    slug: "3-cavity-eco",
    category: "Eco Series",
    shortDescription: "Budget-friendly fully automatic blow molding for cost-effective production.",
    description: "The 3 Cavity ECO Fully Automatic PET Blow Molding Machine is our economy variant designed for businesses seeking reliable performance at an affordable price point. Perfect for startups and medium-scale operations producing bottles from 100ml to 1000ml.",
    capacity: "2200-2400 BPH",
    maxVolume: "1 Liter",
    cavities: 3,
    priceTier: "Budget",
    features: [
      "Fully automatic operation",
      "Pneumatic system",
      "50 Ton toggle clamp",
      "1% rejection ratio",
      "Suitable for 100ml-1000ml bottles",
      "Energy efficient design",
      "Low maintenance cost",
      "Quick ROI"
    ],
    specifications: {
      "Output Capacity": "2200-2400 Bottles/Hour",
      "Bottle Range": "100ml - 1000ml",
      "Number of Cavities": "3",
      "Connected Load": "56 KW",
      "Clamping System": "Pneumatic",
      "Toggle Clamp Force": "50 Ton",
      "Rejection Ratio": "≤1%",
      "Machine Type": "Fully Automatic",
      "Suitable For": "PET Bottles"
    },
    images: [
      "https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg",
      "https://images.pexels.com/photos/11679684/pexels-photo-11679684.jpeg"
    ],
    video: null,
    brochure: "/brochures/3-cavity-eco.pdf",
    price: "Budget Friendly",
    featured: true
  },
  {
    id: "9",
    name: "4 Cavity ECO Automatic Machine",
    slug: "4-cavity-eco",
    category: "Eco Series",
    shortDescription: "High-capacity economy model for maximum output at minimal investment.",
    description: "The 4 Cavity ECO Fully Automatic PET Blow Molding Machine delivers higher production capacity while maintaining our budget-friendly approach. Ideal for businesses looking to scale production without heavy capital investment.",
    capacity: "3200-3400 BPH",
    maxVolume: "1 Liter",
    cavities: 4,
    priceTier: "Budget",
    features: [
      "Fully automatic operation",
      "Pneumatic system",
      "60 Ton toggle clamp",
      "1% rejection ratio",
      "Suitable for 100ml-1000ml bottles",
      "Higher throughput than 3-cavity",
      "Cost-effective scaling",
      "Reliable performance"
    ],
    specifications: {
      "Output Capacity": "3200-3400 Bottles/Hour",
      "Bottle Range": "100ml - 1000ml",
      "Number of Cavities": "4",
      "Total Power Consumption": "66.02 KW",
      "Clamping System": "Pneumatic",
      "Toggle Clamp Force": "60 Ton",
      "Rejection Ratio": "≤1%",
      "Machine Type": "Fully Automatic",
      "Suitable For": "PET Bottles"
    },
    images: [
      "https://images.pexels.com/photos/29842696/pexels-photo-29842696.jpeg",
      "https://images.pexels.com/photos/34221993/pexels-photo-34221993.jpeg"
    ],
    video: null,
    brochure: "/brochures/4-cavity-eco.pdf",
    price: "Budget Friendly",
    featured: true
  },
  {
    id: "4",
    name: "5L Semi Automatic Machine",
    slug: "5l-semi-automatic-machine",
    category: "Semi Automatic",
    shortDescription: "Specialized machine for large volume PET bottles up to 5 liters.",
    description: "The 5L Semi Automatic PET Stretch Blow Moulding Machine is specifically designed for producing large volume bottles up to 5 liters, ideal for water, oil, and chemical packaging.",
    capacity: "500-600 BPH",
    maxVolume: "5 Liters",
    cavities: 1,
    features: [
      "Large bottle capability",
      "Heavy duty construction",
      "Wide neck compatibility",
      "Adjustable heating zones",
      "Robust clamping system",
      "Easy operation",
      "Minimal maintenance",
      "High pressure blow system"
    ],
    specifications: {
      "Output Capacity": "500-600 Bottles/Hour",
      "Max Bottle Volume": "5000ml",
      "Number of Cavities": "1",
      "Preform Neck Size": "38mm / 45mm / 48mm",
      "Max Bottle Diameter": "150mm",
      "Max Bottle Height": "400mm",
      "Heating Power": "18 KW",
      "Compressed Air": "30-40 Bar",
      "Machine Weight": "1500 kg",
      "Dimensions": "2800 x 1400 x 2200 mm"
    },
    images: [
      "https://images.pexels.com/photos/11679684/pexels-photo-11679684.jpeg",
      "https://images.pexels.com/photos/34221993/pexels-photo-34221993.jpeg"
    ],
    video: null,
    brochure: "/brochures/5l-semi-automatic.pdf",
    price: "On Request",
    featured: false
  },
  {
    id: "5",
    name: "6 Cavity All-Electric Servo Machine",
    slug: "6-cavity-all-electric-servo-machine",
    category: "Electra Series",
    shortDescription: "Advanced servo-driven system ensuring precise, fast, and silent bottle forming.",
    description: "The 6 Cavity All-Electric Servo PET Stretch Blow Moulding Machine represents the pinnacle of blow molding technology with full servo control, exceptional energy efficiency, and premium bottle quality.",
    capacity: "9000-10000 BPH",
    maxVolume: "2 Liters",
    cavities: 6,
    features: [
      "Full electric servo drive",
      "Ultra-low energy consumption",
      "Near-silent operation",
      "Precision servo stretching",
      "Industry 4.0 ready",
      "Real-time monitoring",
      "Premium bottle quality",
      "Minimal maintenance"
    ],
    specifications: {
      "Output Capacity": "9000-10000 Bottles/Hour",
      "Max Bottle Volume": "2000ml",
      "Number of Cavities": "6",
      "Preform Neck Size": "28mm / 38mm",
      "Max Bottle Diameter": "105mm",
      "Max Bottle Height": "330mm",
      "Power Consumption": "65 KW",
      "Compressed Air": "25-35 Bar",
      "Machine Weight": "6500 kg",
      "Dimensions": "6500 x 2200 x 2500 mm"
    },
    images: [
      "https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg",
      "https://images.pexels.com/photos/29842696/pexels-photo-29842696.jpeg"
    ],
    video: null,
    brochure: "/brochures/6-cavity-servo.pdf",
    price: "On Request",
    featured: true
  },
  {
    id: "6",
    name: "PET Blow Moulds",
    slug: "pet-blow-moulds",
    category: "Moulds",
    shortDescription: "Custom designed PET blow moulds for all bottle shapes and sizes.",
    description: "High-quality PET blow moulds manufactured with precision CNC machining, suitable for various bottle designs from 200ml to 20L capacity.",
    capacity: "Custom",
    maxVolume: "Up to 20 Liters",
    cavities: "Custom",
    features: [
      "Precision CNC machining",
      "High-grade steel material",
      "Custom bottle designs",
      "Quick changeover design",
      "Durable construction",
      "Optimal cooling channels",
      "Various neck sizes",
      "Long service life"
    ],
    specifications: {
      "Material": "P20 / S136 / NAK80 Steel",
      "Bottle Range": "200ml - 20L",
      "Neck Sizes": "28mm / 38mm / 45mm / 48mm / 120mm",
      "Surface Finish": "Mirror Polish / Texture",
      "Cooling System": "Optimized Channel Design",
      "Production Time": "15-25 Days",
      "Warranty": "1 Year"
    },
    images: [
      "https://images.pexels.com/photos/10376368/pexels-photo-10376368.jpeg",
      "https://images.pexels.com/photos/35871082/pexels-photo-35871082.jpeg"
    ],
    video: null,
    brochure: "/brochures/moulds.pdf",
    price: "On Request",
    featured: false
  },
  {
    id: "7",
    name: "Auxiliary Equipment",
    slug: "auxiliary-equipment",
    category: "Auxiliary",
    shortDescription: "Complete range of supporting equipment for PET bottle production.",
    description: "Comprehensive auxiliary equipment including air compressors, water chillers, air dryers, and conveyors for complete production line setup.",
    capacity: "Various",
    maxVolume: "N/A",
    cavities: "N/A",
    features: [
      "Air compressors (high & low pressure)",
      "Water chillers",
      "Air dryers",
      "Conveyor systems",
      "Preform loaders",
      "Bottle unscrambling",
      "Quality inspection systems",
      "Complete integration"
    ],
    specifications: {
      "Compressor Types": "Reciprocating / Screw",
      "Pressure Range": "8-40 Bar",
      "Chiller Capacity": "5-50 TR",
      "Conveyor Types": "Air / Belt / Chain",
      "Power Options": "Single / Three Phase",
      "Customization": "Available"
    },
    images: [
      "https://images.pexels.com/photos/32399141/pexels-photo-32399141.jpeg",
      "https://images.pexels.com/photos/14804687/pexels-photo-14804687.jpeg"
    ],
    video: null,
    brochure: "/brochures/auxiliary.pdf",
    price: "On Request",
    featured: false
  }
];

export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "semi-automatic", name: "Semi Automatic", count: products.filter(p => p.category === "Semi Automatic").length },
  { id: "fully-automatic", name: "Fully Automatic", count: products.filter(p => p.category === "Fully Automatic").length },
  { id: "eco-series", name: "Eco Series", count: products.filter(p => p.category === "Eco Series").length },
  { id: "electra-series", name: "Electra Series", count: products.filter(p => p.category === "Electra Series").length },
  { id: "moulds", name: "Moulds", count: products.filter(p => p.category === "Moulds").length },
  { id: "auxiliary", name: "Auxiliary Equipment", count: products.filter(p => p.category === "Auxiliary").length }
];

// Model comparison data for Standard vs ECO
export const modelComparison = [
  {
    feature: "Capacity (3-Cavity)",
    standard: "2800-3000 BPH",
    eco: "2200-2400 BPH"
  },
  {
    feature: "Capacity (4-Cavity)",
    standard: "4000-4200 BPH",
    eco: "3200-3400 BPH"
  },
  {
    feature: "Price Tier",
    standard: "Standard",
    eco: "Budget / Economy"
  },
  {
    feature: "Power Usage",
    standard: "45-58 KW",
    eco: "56-66 KW"
  },
  {
    feature: "Clamping System",
    standard: "Servo / Hydraulic",
    eco: "Pneumatic"
  },
  {
    feature: "Recommended For",
    standard: "High-volume production, Premium bottles",
    eco: "Startups, Cost-conscious operations, Small bottles"
  },
  {
    feature: "Bottle Size Range",
    standard: "Up to 2000ml",
    eco: "100ml - 1000ml"
  }
];

export const galleryImages = [
  { id: 1, src: "https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg", title: "Automated Production Line", category: "factory" },
  { id: 2, src: "https://images.pexels.com/photos/10376368/pexels-photo-10376368.jpeg", title: "PET Bottles Production", category: "products" },
  { id: 3, src: "https://images.pexels.com/photos/29842696/pexels-photo-29842696.jpeg", title: "Manufacturing Facility", category: "factory" },
  { id: 4, src: "https://images.pexels.com/photos/11679684/pexels-photo-11679684.jpeg", title: "Conveyor System", category: "machinery" },
  { id: 5, src: "https://images.pexels.com/photos/34221993/pexels-photo-34221993.jpeg", title: "Assembly Line", category: "machinery" },
  { id: 6, src: "https://images.pexels.com/photos/32399141/pexels-photo-32399141.jpeg", title: "Industrial Complex", category: "factory" },
  { id: 7, src: "https://images.pexels.com/photos/14804687/pexels-photo-14804687.jpeg", title: "Engineering Team", category: "team" },
  { id: 8, src: "https://images.pexels.com/photos/35871082/pexels-photo-35871082.jpeg", title: "Finished Products", category: "products" }
];

export const galleryVideos = [];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "AquaPure Beverages",
    role: "Managing Director",
    content: "MD PET machines have transformed our production capacity. The quality and reliability are exceptional. Their after-sales support is outstanding.",
    rating: 5
  },
  {
    id: 2,
    name: "Sunita Sharma",
    company: "FreshPack Industries",
    role: "Production Head",
    content: "We've been using MD PET machines for 5 years now. The energy efficiency and low maintenance have significantly reduced our operating costs.",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammed Ali",
    company: "Gulf Packaging LLC",
    role: "CEO",
    content: "The servo machines from MD PET deliver outstanding precision and consistency. Highly recommend for high-volume production needs.",
    rating: 5
  }
];

export const clients = [
  "Coca-Cola", "PepsiCo", "Nestle", "Bisleri", "Parle Agro",
  "Dabur", "Himalaya", "Tata", "Reliance", "Amul"
];

export const solutionSteps = [
  {
    step: 1,
    title: "Consultation & Planning",
    description: "Our experts analyze your production requirements and design a customized solution.",
    icon: "clipboard-list"
  },
  {
    step: 2,
    title: "Machine Selection",
    description: "We help you select the right machines and auxiliary equipment for your capacity needs.",
    icon: "cog"
  },
  {
    step: 3,
    title: "Installation & Setup",
    description: "Our trained technicians handle complete installation and production line setup.",
    icon: "wrench"
  },
  {
    step: 4,
    title: "Training & Support",
    description: "Comprehensive operator training and ongoing technical support for smooth operations.",
    icon: "users"
  },
  {
    step: 5,
    title: "Production & Optimization",
    description: "We help optimize your production line for maximum efficiency and output.",
    icon: "trending-up"
  }
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === category);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.featured);
};
