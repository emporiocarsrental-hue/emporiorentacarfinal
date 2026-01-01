import { Users, Zap, Gauge, Filter, Search } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { RollingPrice } from '@/components/ui/rolling-price';
import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { carGalleries } from '@/data/carGalleries';

interface Car {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  pricing: {
    daily: number;
    weekly: number | null;
    monthly: number | null;
  };
  seats: number;
  horsepower: string;
  engine: string;
  chauffeurAvailable: boolean;
  category: string;
  year: number;
}

const allCars: Car[] = [
  {
    id: 'rolls-royce-cullinan',
    name: 'Rolls Royce',
    subtitle: 'Cullinan Grey',
    description: 'The pinnacle of luxury SUV excellence. The Cullinan embodies rarity, excellence, and timeless elegance.',
    pricing: {
      daily: 3500,
      weekly: 21000,
      monthly: 75000
    },
    seats: 5,
    horsepower: '563 HP',
    engine: '6.75L V12 Twin-Turbo',
    chauffeurAvailable: true,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'dodge-charger',
    name: 'Dodge Charger',
    subtitle: 'Hellcat Wide Body Kit 2022',
    description: 'Raw American muscle with modern refinement. The Dodge Charger delivers aggressive power and commanding presence.',
    pricing: {
      daily: 300,
      weekly: 1899,
      monthly: 4888
    },
    seats: 5,
    horsepower: '707 HP',
    engine: '6.2L V8 Supercharged',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2022
  },
  {
    id: 'mercedes-gla35',
    name: 'Mercedes GLA35 AMG',
    subtitle: '2023',
    description: 'Precision-engineered performance meets everyday luxury. Explosive acceleration in a compact SUV form.',
    pricing: {
      daily: 500,
      weekly: 3000,
      monthly: 8000
    },
    seats: 5,
    horsepower: '302 HP',
    engine: '2.0L Turbo',
    chauffeurAvailable: true,
    category: 'Luxury SUV',
    year: 2023
  },
  {
    id: 'jetour-t2',
    name: 'Jetour T2',
    subtitle: 'Defender Kit 2024',
    description: 'Built for adventure with luxury at its core. The Jetour T2 blends off-road capability with premium comfort.',
    pricing: {
      daily: 399,
      weekly: 2500,
      monthly: 6999
    },
    seats: 7,
    horsepower: '290 HP',
    engine: '2.0L Turbo',
    chauffeurAvailable: true,
    category: 'SUV',
    year: 2024
  },
  {
    id: 'hyundai-elantra',
    name: 'Hyundai Elantra',
    subtitle: '2024 New Shape',
    description: 'Premium automotive excellence with sophisticated styling and advanced features.',
    pricing: {
      daily: 150,
      weekly: 1000,
      monthly: 2500
    },
    seats: 5,
    horsepower: '201 HP',
    engine: '1.6L Turbo',
    chauffeurAvailable: false,
    category: 'Sedan',
    year: 2024
  },
  {
    id: 'chevrolet-camaro',
    name: 'Chevrolet Camaro',
    subtitle: 'ZL1 Kit 2023',
    description: 'An icon of speed and attitude. The Camaro offers thrilling performance and sharp handling.',
    pricing: {
      daily: 350,
      weekly: 2000,
      monthly: 5500
    },
    seats: 4,
    horsepower: '650 HP',
    engine: '6.2L V8 Supercharged',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2023
  },
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini',
    subtitle: 'Urus Purple',
    description: 'The world\'s first Super Sport Utility Vehicle. The Urus combines stunning performance with luxury and versatility.',
    pricing: {
      daily: 1800,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '650 HP',
    engine: '4.0L V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'defender-black',
    name: 'Land Rover',
    subtitle: 'Defender Black',
    description: 'The legendary off-roader reimagined. With its iconic silhouette and all-black exterior, this Defender commands attention.',
    pricing: {
      daily: 500,
      weekly: 3000,
      monthly: null
    },
    seats: 5,
    horsepower: '300 HP',
    engine: '3.0L Turbo Diesel',
    chauffeurAvailable: true,
    category: 'SUV',
    year: 2024
  },
  {
    id: 'defender-brown',
    name: 'Land Rover',
    subtitle: 'Defender Brown',
    description: 'The legendary off-roader reimagined. The distinctive brown finish gives this Defender a unique character.',
    pricing: {
      daily: 500,
      weekly: 3000,
      monthly: null
    },
    seats: 5,
    horsepower: '300 HP',
    engine: '3.0L Turbo Diesel',
    chauffeurAvailable: true,
    category: 'SUV',
    year: 2024
  },
  {
    id: 'rolls-royce-phantom',
    name: 'Rolls Royce',
    subtitle: 'Phantom',
    description: 'The pinnacle of automotive luxury. The Phantom embodies unparalleled craftsmanship and whisper-quiet performance.',
    pricing: {
      daily: 3000,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '563 HP',
    engine: '6.75L V12 Twin-Turbo',
    chauffeurAvailable: true,
    category: 'Luxury Sedan',
    year: 2024
  },
  {
    id: 'ferrari-f8-spyder',
    name: 'Ferrari',
    subtitle: 'F8 Spyder',
    description: 'The ultimate convertible supercar combining breathtaking performance with open-air exhilaration.',
    pricing: {
      daily: 2500,
      weekly: null,
      monthly: null
    },
    seats: 2,
    horsepower: '710 HP',
    engine: '3.9L V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024
  },
  {
    id: 'lamborghini-huracan-evo-spyder',
    name: 'Lamborghini',
    subtitle: 'Huracan Evo Spyder',
    description: 'Pure Italian supercar excellence with razor-sharp handling and jaw-dropping performance.',
    pricing: {
      daily: 2500,
      weekly: null,
      monthly: null
    },
    seats: 2,
    horsepower: '631 HP',
    engine: '5.2L V10',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024
  },
  {
    id: 'mercedes-g63-black',
    name: 'Mercedes-AMG',
    subtitle: 'G63 Black',
    description: 'The iconic G-Wagon with unmatched luxury and commanding presence. Bold black finish.',
    pricing: {
      daily: 1400,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '577 HP',
    engine: '4.0L V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'mercedes-g63-white',
    name: 'Mercedes-AMG',
    subtitle: 'G63 White',
    description: 'The iconic G-Wagon with unmatched luxury and commanding presence. Pristine white finish.',
    pricing: {
      daily: 1400,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '577 HP',
    engine: '4.0L V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'mercedes-g63-silver',
    name: 'Mercedes-AMG',
    subtitle: 'G63 Silver',
    description: 'The iconic G-Wagon with unmatched luxury and commanding presence. Sleek silver finish.',
    pricing: {
      daily: 1400,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '577 HP',
    engine: '4.0L V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'mercedes-g63-green',
    name: 'Mercedes-AMG',
    subtitle: 'G63 Green',
    description: 'The iconic G-Wagon with unmatched luxury and commanding presence. Distinctive green finish.',
    pricing: {
      daily: 1400,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '577 HP',
    engine: '4.0L V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'bentley-bentayga',
    name: 'Bentley',
    subtitle: 'Bentayga',
    description: 'Ultimate luxury SUV experience with unparalleled craftsmanship.',
    pricing: {
      daily: 1999,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '542 HP',
    engine: '4.0L V8 Twin-Turbo',
    chauffeurAvailable: true,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'ferrari-purosangue',
    name: 'Ferrari',
    subtitle: 'Purosangue',
    description: 'Ferrari\'s first SUV with pure racing DNA and V12 power.',
    pricing: {
      daily: 8499,
      weekly: null,
      monthly: null
    },
    seats: 4,
    horsepower: '715 HP',
    engine: '6.5L V12',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'ferrari-sf90',
    name: 'Ferrari',
    subtitle: 'SF90 Stradale',
    description: 'Ferrari\'s first plug-in hybrid supercar with extreme performance.',
    pricing: {
      daily: 5499,
      weekly: null,
      monthly: null
    },
    seats: 2,
    horsepower: '986 HP',
    engine: '4.0L V8 Hybrid',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024
  },
  {
    id: 'bentley-continental-gt',
    name: 'Bentley',
    subtitle: 'Continental GT',
    description: 'Grand touring perfection in British luxury with W12 power.',
    pricing: {
      daily: 2499,
      weekly: null,
      monthly: null
    },
    seats: 4,
    horsepower: '626 HP',
    engine: '6.0L W12 Twin-Turbo',
    chauffeurAvailable: true,
    category: 'Luxury Sedan',
    year: 2024
  },
  {
    id: 'audi-rs3',
    name: 'Audi',
    subtitle: 'RS3',
    description: 'Compact performance with Quattro technology and five-cylinder power.',
    pricing: {
      daily: 999,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '401 HP',
    engine: '2.5L Turbo',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024
  },
  {
    id: 'audi-rsq8',
    name: 'Audi',
    subtitle: 'RSQ8',
    description: 'High-performance luxury SUV combining practicality with supercar performance.',
    pricing: {
      daily: 1799,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '591 HP',
    engine: '4.0L V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'porsche-cayenne',
    name: 'Porsche',
    subtitle: 'Cayenne',
    description: 'The sports car among SUVs with authentic Porsche performance.',
    pricing: {
      daily: 1399,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '455 HP',
    engine: '4.0L V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'porsche-911-carrera',
    name: 'Porsche',
    subtitle: '911 Carrera',
    description: 'The iconic sports car legend with decades of engineering excellence.',
    pricing: {
      daily: 1999,
      weekly: null,
      monthly: null
    },
    seats: 4,
    horsepower: '379 HP',
    engine: '3.0L Flat-6 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024
  },
  {
    id: 'bmw-420i',
    name: 'BMW',
    subtitle: '420i Convertible',
    description: 'Open-air luxury and performance with elegant design.',
    pricing: {
      daily: 899,
      weekly: null,
      monthly: null
    },
    seats: 4,
    horsepower: '184 HP',
    engine: '2.0L Turbo',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024
  },
  {
    id: 'bmw-m235',
    name: 'BMW',
    subtitle: 'M235i',
    description: 'Compact performance with M DNA in an agile package.',
    pricing: {
      daily: 499,
      weekly: null,
      monthly: null
    },
    seats: 5,
    horsepower: '306 HP',
    engine: '2.0L Turbo',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024
  },
  {
    id: 'cadillac-escalade',
    name: 'Cadillac',
    subtitle: 'Escalade',
    description: 'American luxury and commanding presence with exceptional space.',
    pricing: {
      daily: 1199,
      weekly: null,
      monthly: null
    },
    seats: 7,
    horsepower: '420 HP',
    engine: '6.2L V8',
    chauffeurAvailable: true,
    category: 'Luxury SUV',
    year: 2024
  },
  {
    id: 'chevrolet-tahoe',
    name: 'Chevrolet',
    subtitle: 'Tahoe',
    description: 'Full-size SUV with modern capability and versatility.',
    pricing: {
      daily: 699,
      weekly: null,
      monthly: null
    },
    seats: 7,
    horsepower: '355 HP',
    engine: '5.3L V8',
    chauffeurAvailable: false,
    category: 'SUV',
    year: 2024
  }
];

export function CollectionPage() {
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const typeParam = searchParams.get('type');
    const brandParam = searchParams.get('brand');

    if (typeParam) {
      const categoryMap: { [key: string]: string } = {
        'luxury': 'Luxury SUV',
        'sports': 'Sports',
        'suv': 'SUV',
        'convertible': 'Sports',
        'economy': 'Sedan'
      };
      setSelectedCategory(categoryMap[typeParam] || 'All');
    } else if (brandParam) {
      setSearchQuery(brandParam.split('-').map((word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '));
    }
  }, [searchParams]);

  const categories = ['All', 'Sports', 'SUV', 'Luxury SUV', 'Luxury Sedan', 'Sedan'];

  const filteredCars = allCars.filter(car => {
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedCars: { [key: string]: Car[] } = {};
  if (selectedCategory === 'All' && !searchQuery) {
    filteredCars.forEach(car => {
      if (!groupedCars[car.category]) {
        groupedCars[car.category] = [];
      }
      groupedCars[car.category].push(car);
    });
  }

  return (
    <div className={`min-h-screen pt-[140px] transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-black via-neutral-950 to-black'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      <div className="relative w-full py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-[#d4af37]/20' : 'bg-[#d4af37]/30'
          }`} />
          <div className={`absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-500/30'
          }`} />
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our{' '}
              <span className="font-light bg-gradient-to-r from-[#d4af37] via-[#f4d97f] to-[#d4af37] bg-clip-text text-transparent">
                Collection
              </span>
            </h1>

            <div className="w-32 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
            }`}>
              Discover our curated selection of luxury and performance vehicles
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                    selectedCategory === category
                      ? theme === 'dark'
                        ? 'bg-[#d4af37] text-black'
                        : 'bg-[#b8941f] text-white'
                      : theme === 'dark'
                        ? 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800'
                        : 'bg-white/50 text-gray-700 hover:bg-white border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-96">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-gray-400'
              }`} />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-full font-light transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-neutral-900/50 text-white placeholder-neutral-500 border border-neutral-800 focus:border-[#d4af37]'
                    : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-[#b8941f]'
                } outline-none`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 pb-20">
        {selectedCategory === 'All' && !searchQuery ? (
          <div className="space-y-16">
            {Object.entries(groupedCars).map(([category, cars]) => (
              <div key={category}>
                <h2 className={`text-3xl md:text-4xl font-light mb-8 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {category} <span className="text-[#D4932A]">Collection</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cars.map((car, index) => (
                    <Link
                      key={car.id}
                      to={`/car/${car.id}`}
                      className="group"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <div
                        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50'
                            : 'bg-white/50 border border-gray-200/50 shadow-lg'
                        } backdrop-blur-sm hover:scale-105 hover:-translate-y-2`}
                        style={{
                          userSelect: 'text',
                          pointerEvents: 'auto'
                        }}
                      >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-[#d4af37]/5 via-transparent to-blue-500/5'
                            : 'bg-gradient-to-br from-[#d4af37]/10 via-transparent to-blue-500/10'
                        }`} />

                        <div className="relative w-full h-64 overflow-hidden">
                          {carGalleries[car.id] && carGalleries[car.id][0] && (
                            <img
                              src={carGalleries[car.id][0]}
                              alt={car.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                          )}
                          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-light bg-[#d4af37] text-black z-10">
                            {car.category}
                          </div>
                        </div>

                        <div className="relative z-10 p-6 flex flex-col gap-4">
                          <div>
                            <h3 className={`text-2xl font-light tracking-wide mb-1 transition-colors duration-300 ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                              {car.name}
                            </h3>
                            <p className={`text-sm font-light mb-3 transition-colors duration-300 ${
                              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                            }`}>
                              {car.subtitle}
                            </p>
                            <p className={`text-sm font-light leading-relaxed transition-colors duration-300 ${
                              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                            }`}>
                              {car.description}
                            </p>
                          </div>

                          <div className={`flex items-center justify-between py-3 border-t border-b transition-colors duration-300 ${
                            theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'
                          }`}>
                            <div className="flex items-center gap-2">
                              <Users className={`w-4 h-4 transition-colors duration-300 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                              }`} />
                              <span className={`text-sm font-light transition-colors duration-300 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-gray-700'
                              }`}>
                                {car.seats} Seats
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Zap className={`w-4 h-4 transition-colors duration-300 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                              }`} />
                              <span className={`text-sm font-light transition-colors duration-300 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-gray-700'
                              }`}>
                                {car.horsepower}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Gauge className={`w-4 h-4 transition-colors duration-300 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                              }`} />
                              <span className={`text-sm font-light transition-colors duration-300 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-gray-700'
                              }`}>
                                {car.engine}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col gap-3">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-light ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>Daily</span>
                                <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{car.pricing.daily} AED</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-light ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>Weekly</span>
                                <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                  {car.pricing.weekly ? `${car.pricing.weekly.toLocaleString()} AED` : 'WhatsApp'}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-light ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>Monthly</span>
                                <span className={`text-lg font-semibold text-[#D4932A]`}>
                                  {car.pricing.monthly ? `${car.pricing.monthly.toLocaleString()} AED` : 'WhatsApp'}
                                </span>
                              </div>
                            </div>
                            <InteractiveHoverButton
                              text="View Details"
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
            <Link
              key={car.id}
              to={`/car/${car.id}`}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div
                className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50'
                    : 'bg-white/50 border border-gray-200/50 shadow-lg'
                } backdrop-blur-sm hover:scale-105 hover:-translate-y-2`}
                style={{
                  userSelect: 'text',
                  pointerEvents: 'auto'
                }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#d4af37]/5 via-transparent to-blue-500/5'
                    : 'bg-gradient-to-br from-[#d4af37]/10 via-transparent to-blue-500/10'
                }`} />

                <div className="relative w-full h-64 overflow-hidden">
                  {carGalleries[car.id] && carGalleries[car.id][0] && (
                    <img
                      src={carGalleries[car.id][0]}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-light bg-[#d4af37] text-black z-10">
                    {car.category}
                  </div>
                </div>

                <div className="relative z-10 p-6 flex flex-col gap-4">
                  <div>
                    <h3 className={`text-2xl font-light tracking-wide mb-1 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {car.name}
                    </h3>
                    <p className={`text-sm font-light mb-3 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                    }`}>
                      {car.subtitle}
                    </p>
                    <p className={`text-sm font-light leading-relaxed transition-colors duration-300 ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                    }`}>
                      {car.description}
                    </p>
                  </div>

                  <div className={`flex items-center justify-between py-3 border-t border-b transition-colors duration-300 ${
                    theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Users className={`w-4 h-4 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                      }`} />
                      <span className={`text-sm font-light transition-colors duration-300 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-gray-700'
                      }`}>
                        {car.seats} Seats
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className={`w-4 h-4 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                      }`} />
                      <span className={`text-sm font-light transition-colors duration-300 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-gray-700'
                      }`}>
                        {car.horsepower}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className={`w-4 h-4 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                      }`} />
                      <span className={`text-sm font-light transition-colors duration-300 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-gray-700'
                      }`}>
                        {car.engine}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-light ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>Daily</span>
                        <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{car.pricing.daily} AED</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-light ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>Weekly</span>
                        <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {car.pricing.weekly ? `${car.pricing.weekly.toLocaleString()} AED` : 'WhatsApp'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-light ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>Monthly</span>
                        <span className={`text-lg font-semibold text-[#D4932A]`}>
                          {car.pricing.monthly ? `${car.pricing.monthly.toLocaleString()} AED` : 'WhatsApp'}
                        </span>
                      </div>
                    </div>
                    <InteractiveHoverButton
                      text="View Details"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          </div>
        )}

        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <p className={`text-xl font-light ${
              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}>
              No vehicles found matching your criteria
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
