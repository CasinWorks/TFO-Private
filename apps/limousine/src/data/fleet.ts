export interface GroundVehicle {
  id: string;
  name: string;
  category: 'Luxury SUV' | 'Premium 4x4';
  passengers: number;
  luggage: number;
  image: string;
  hourlyRateUSD: number;
  transferRateKEF_USD: number;
  features: string[];
  specs: {
    drivetrain: string;
    interior: string;
    wifi: boolean;
    refreshments: string;
  };
  tag?: string;
  description: string;
}

/** Current operational luxury fleet — two vehicles only */
export const GROUND_FLEET: GroundVehicle[] = [
  {
    id: 'volvo-xc90',
    name: 'Volvo XC90',
    category: 'Luxury SUV',
    passengers: 6,
    luggage: 5,
    image: '/fleet/volvo-xc90.jpg',
    hourlyRateUSD: 185,
    transferRateKEF_USD: 380,
    tag: 'Flagship Chauffeur',
    description:
      'Refined Scandinavian luxury for VIP transfers and private touring. Spacious seven-seat architecture configured for up to six passengers with premium comfort and all-weather confidence.',
    features: [
      'Up to 6 passengers',
      'Heated leather seating',
      'Panoramic roof',
      'High-speed Wi-Fi',
      'Whisper-quiet cabin',
    ],
    specs: {
      drivetrain: 'All-Wheel Drive',
      interior: 'Nappa leather executive trim',
      wifi: true,
      refreshments: 'Icelandic spring water & amenities',
    },
  },
  {
    id: 'toyota-land-cruiser-150-vx',
    name: 'Toyota Land Cruiser 150 VX',
    category: 'Premium 4x4',
    passengers: 4,
    luggage: 4,
    image: '/fleet/land-cruiser-150-vx.jpg',
    hourlyRateUSD: 210,
    transferRateKEF_USD: 420,
    tag: 'Iceland All-Terrain',
    description:
      'The trusted VX specification for Iceland’s demanding roads — lava fields, highland approaches, and winter conditions — with executive comfort for up to four passengers.',
    features: [
      'Up to 4 passengers',
      'VX luxury specification',
      'Full-time 4WD capability',
      'High ground clearance',
      'Climate-controlled cabin',
    ],
    specs: {
      drivetrain: 'Full-time 4WD',
      interior: 'VX leather & wood trim',
      wifi: true,
      refreshments: 'Icelandic spring water & amenities',
    },
  },
];

export const ICELAND_TOURS = [
  {
    id: 'golden-circle-luxury',
    title: 'The Golden Circle Private Signature',
    durationHours: 8,
    basePriceUSD: 1150,
    distanceKm: 280,
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    description:
      'Þingvellir, Geysir and Gullfoss as a private VIP circuit — tailored timings, no coach crowds, expert local chauffeur.',
    highlights: [
      'UNESCO Þingvellir National Park',
      'Strokkur geothermal geyser',
      'Private viewing at Gullfoss',
    ],
  },
  {
    id: 'south-coast',
    title: 'South Coast Waterfalls & Black Sand',
    durationHours: 10,
    basePriceUSD: 1450,
    distanceKm: 380,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    description:
      'Seljalandsfoss, Skógafoss and Reynisfjara in absolute private comfort along Iceland’s dramatic southern shoreline.',
    highlights: [
      'Walk behind Seljalandsfoss',
      'Skógafoss cascade',
      'Reynisfjara black sand beach',
    ],
  },
  {
    id: 'blue-lagoon',
    title: 'Reykjanes & Blue Lagoon VIP',
    durationHours: 6,
    basePriceUSD: 850,
    distanceKm: 140,
    image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
    description:
      'Geothermal peninsula touring with door-to-door escort to Blue Lagoon — ideal after private jet or international arrival.',
    highlights: [
      'Reykjanes geothermal vistas',
      'Bridge Between Continents',
      'VIP Blue Lagoon coordination',
    ],
  },
  {
    id: 'northern-lights',
    title: 'Private Aurora Borealis Hunt',
    durationHours: 5,
    basePriceUSD: 950,
    distanceKm: 180,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80',
    description:
      'Real-time cloud and solar tracking with your private chauffeur — dark-sky glens, warm amenities, discretionary pacing.',
    highlights: [
      'Live aurora forecasting',
      'Hot cocoa & wool blankets',
      'Remote dark-sky locations',
    ],
  },
];
