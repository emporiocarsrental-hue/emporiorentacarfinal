import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoopingTypewriter } from '@/components/ui/looping-typewriter';
import { useTheme } from '@/contexts/ThemeContext';
import { SplineSceneBasic } from '@/components/sections/SplineSceneSection';
import { CarCard } from '@/components/ui/car-card';
import TestimonialsDemo from '@/components/sections/TestimonialsDemo';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { InstagramSection } from '@/components/sections/InstagramSection';
import { BrandCarousel } from '@/components/sections/BrandCarousel';
import { CarCategories } from '@/components/sections/CarCategories';

interface Model {
  id: string;
  name: string;
  displayName: string;
  subtitle: string;
  description: string;
  image?: string;
}

interface Car {
  id: string;
  name: string;
  subtitle: string;
  dailyPrice: number;
  weeklyPrice?: number | null;
  monthlyPrice?: number | null;
  image?: string;
  chauffeurAvailable?: boolean;
}

const heroModels: Model[] = [
  {
    id: 'g63-green',
    name: 'Mercedes G63 Green',
    displayName: 'MERCEDES G63 GREEN',
    subtitle: 'Ultimate Luxury SUV',
    description: 'Uncompromising power meets legendary luxury. The G63 delivers exceptional off-road capability with refined elegance, making every journey a statement of prestige.',
    image: '/images/G63 Green/screenshot_2026-01-01_at_1.43.51_am.png'
  },
  {
    id: 'jetour-t2',
    name: 'Jetour T2',
    displayName: 'JETOUR T2',
    subtitle: 'Luxury Off-Road SUV',
    description: 'Built for adventure with luxury at its core. The Jetour T2 blends off-road capability with premium comfort, making every journey feel effortless.',
    image: '/images/jetour.png'
  },
  {
    id: 'chevrolet-camaro',
    name: 'Chevrolet Camaro',
    displayName: 'CHEVROLET CAMARO',
    subtitle: 'American Muscle',
    description: 'An icon of speed and attitude. The Camaro offers thrilling performance, sharp handling, and a driving experience that turns every road into a statement.',
    image: '/images/camaro.png'
  },
  {
    id: 'ferrari-sf90',
    name: 'Ferrari SF90',
    displayName: 'FERRARI SF90 STRADALE',
    subtitle: 'Hybrid Supercar',
    description: 'The pinnacle of Ferrari performance and innovation. With 1000 HP from its hybrid powertrain, the SF90 Stradale redefines what a supercar can be.',
    image: '/images/Ferrari SF90/screenshot_2026-01-01_at_12.39.47_pm.png'
  }
];

const luxuryCars: Car[] = [
  {
    id: 'rolls-royce-cullinan',
    name: 'Rolls Royce',
    subtitle: 'Cullinan Grey',
    dailyPrice: 3500,
    weeklyPrice: 21000,
    monthlyPrice: 75000,
    image: '/images/RR Cullinan/screenshot_2026-01-01_at_1.50.19_am.png',
    chauffeurAvailable: true
  },
  {
    id: 'ferrari-purosangue',
    name: 'Ferrari',
    subtitle: 'Purosangue',
    dailyPrice: 8499,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Ferrari Purosangue/screenshot_2026-01-01_at_12.36.57_pm.png',
    chauffeurAvailable: false
  },
  {
    id: 'bentley-bentayga',
    name: 'Bentley',
    subtitle: 'Bentayga',
    dailyPrice: 1999,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Bentley Bentayga /screenshot_2026-01-01_at_12.33.44_pm.png',
    chauffeurAvailable: true
  },
  {
    id: 'rolls-royce-phantom',
    name: 'Rolls Royce',
    subtitle: 'Phantom',
    dailyPrice: 3000,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/RR Phantom/screenshot_2025-12-31_at_6.55.40_pm.png',
    chauffeurAvailable: true
  },
  {
    id: 'bentley-continental-gt',
    name: 'Bentley',
    subtitle: 'Continental GT',
    dailyPrice: 2499,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Bentley CGT/screenshot_2026-01-01_at_12.44.50_pm.png',
    chauffeurAvailable: true
  }
];

const sportsCars: Car[] = [
  {
    id: 'ferrari-sf90',
    name: 'Ferrari',
    subtitle: 'SF90 Stradale',
    dailyPrice: 5499,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Ferrari SF90/screenshot_2026-01-01_at_12.39.47_pm.png'
  },
  {
    id: 'porsche-911-carrera',
    name: 'Porsche',
    subtitle: '911 Carrera',
    dailyPrice: 1999,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Porsche 911C/screenshot_2026-01-01_at_12.54.12_pm.png'
  },
  {
    id: 'audi-rs3',
    name: 'Audi',
    subtitle: 'RS3',
    dailyPrice: 999,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Audi RS3/screenshot_2026-01-01_at_12.46.16_pm.png'
  },
  {
    id: 'bmw-m235',
    name: 'BMW',
    subtitle: 'M235i',
    dailyPrice: 499,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/BMW M235/screenshot_2026-01-01_at_12.59.47_pm.png'
  },
  {
    id: 'dodge-charger',
    name: 'Dodge Charger',
    subtitle: 'R/T Scat Pack 2024',
    dailyPrice: 800,
    weeklyPrice: 4800,
    monthlyPrice: 16000,
    image: '/images/Dodge/ddg1.jpg'
  }
];

const convertibleCars: Car[] = [
  {
    id: 'ferrari-f8-spyder',
    name: 'Ferrari',
    subtitle: 'F8 Spyder',
    dailyPrice: 2500,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Ferrari F8 Spyder/whatsapp_image_2025-12-29_at_07.19.02.jpeg'
  },
  {
    id: 'lamborghini-huracan-evo-spyder',
    name: 'Lamborghini',
    subtitle: 'Huracan Evo Spyder',
    dailyPrice: 2500,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Lamborghini Hurrican Evo Spyder /whatsapp_image_2025-12-29_at_07.19.19.jpeg'
  },
  {
    id: 'bmw-420i',
    name: 'BMW',
    subtitle: '420i Convertible',
    dailyPrice: 899,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/BMW 420i/screenshot_2026-01-01_at_12.58.33_pm.png'
  }
];

const suvCars: Car[] = [
  {
    id: 'audi-rsq8',
    name: 'Audi',
    subtitle: 'RSQ8',
    dailyPrice: 1799,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Audi RSq8/screenshot_2026-01-01_at_12.49.08_pm.png'
  },
  {
    id: 'porsche-cayenne',
    name: 'Porsche',
    subtitle: 'Cayenne',
    dailyPrice: 1399,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Porsche cayenne/screenshot_2026-01-01_at_12.51.54_pm.png'
  },
  {
    id: 'cadillac-escalade',
    name: 'Cadillac',
    subtitle: 'Escalade',
    dailyPrice: 1199,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Cadillac Escalade/screenshot_2026-01-01_at_1.02.42_pm.png',
    chauffeurAvailable: true
  },
  {
    id: 'chevrolet-tahoe',
    name: 'Chevrolet',
    subtitle: 'Tahoe',
    dailyPrice: 699,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/Chevrolet Tahoe/screenshot_2026-01-01_at_1.06.57_pm.png'
  },
  {
    id: 'mercedes-g63-black',
    name: 'Mercedes-AMG',
    subtitle: 'G63 Black',
    dailyPrice: 1400,
    weeklyPrice: null,
    monthlyPrice: null,
    image: '/images/G63 Black /screenshot_2026-01-01_at_1.35.24_am.png'
  }
];

const economyCars: Car[] = [
  {
    id: 'hyundai-elantra',
    name: 'Hyundai Elantra',
    subtitle: 'Limited Edition 2024',
    dailyPrice: 350,
    weeklyPrice: 2100,
    monthlyPrice: 7000,
    image: '/images/Hyundai /hynd1.jpg'
  },
  {
    id: 'mercedes-gla35',
    name: 'Mercedes GLA35 AMG',
    subtitle: 'Performance Edition 2024',
    dailyPrice: 1200,
    weeklyPrice: 7200,
    monthlyPrice: 24000,
    image: '/images/Mercedes/merc1.jpg'
  }
];

export function HomePage() {
  const [activeHeroModel, setActiveHeroModel] = useState<Model>(heroModels[0]);
  const { theme } = useTheme();

  const typewriterPhrases = [
    "Luxury car rentals, redefined",
    "Performance. Comfort. Prestige.",
    "Drive what defines you"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroModel((current) => {
        const currentIndex = heroModels.findIndex(m => m.id === current.id);
        const nextIndex = (currentIndex + 1) % heroModels.length;
        return heroModels[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[140px]">
      <section className={`relative h-[calc(100vh-140px)] w-full transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-neutral-900 via-black to-neutral-950'
          : 'bg-gradient-to-br from-gray-100 via-white to-gray-200'
      }`}>
        {activeHeroModel.image && (
          <div className="absolute inset-0 z-10">
            <img
              key={activeHeroModel.id}
              src={activeHeroModel.image}
              alt={activeHeroModel.name}
              className="w-full h-full object-cover animate-[fadeIn_0.8s_ease-in-out]"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        <div className="hidden md:flex absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 z-30">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/30" />
            <div className="flex flex-col space-y-10 pl-8">
              {heroModels.map((model) => {
                const isActive = model.id === activeHeroModel.id;
                return (
                  <button
                    key={model.id}
                    onClick={() => setActiveHeroModel(model)}
                    className="group relative text-left transition-all duration-300"
                  >
                    {isActive && (
                      <div className="absolute -left-8 top-3 w-4 h-4 rounded-full border-2 bg-white border-white" />
                    )}
                    {!isActive && (
                      <div className="absolute -left-8 top-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/60" />
                    )}
                    <div className="flex flex-col space-y-1">
                      <span className={`font-semibold tracking-wide transition-all duration-300 ${
                        isActive
                          ? 'text-white text-xl'
                          : 'text-white/60 text-base group-hover:text-white/80'
                      }`}>
                        {model.name}
                      </span>
                      <span className={`text-xs font-light tracking-wider transition-all duration-300 ${
                        isActive
                          ? 'text-white/70 opacity-80'
                          : 'text-white/40 opacity-60 group-hover:opacity-80'
                      }`}>
                        {model.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col space-y-4">
          {heroModels.map((model) => {
            const isActive = model.id === activeHeroModel.id;
            return (
              <button
                key={model.id}
                onClick={() => setActiveHeroModel(model)}
                className={`transition-all duration-300 ${
                  isActive ? 'text-white text-base' : 'text-white/60 text-sm hover:text-white/80'
                }`}
              >
                <span className="font-light tracking-wider">{model.name}</span>
              </button>
            );
          })}
        </div>

        <div className="absolute left-8 right-8 md:left-64 lg:left-80 md:right-16 top-1/3 md:top-1/2 md:-translate-y-1/2 max-w-4xl z-30">
          <div className="flex flex-col space-y-6">
            <LoopingTypewriter
              phrases={typewriterPhrases}
              className="text-2xl md:text-4xl lg:text-5xl font-extralight tracking-wide min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem] text-white"
              cursorClassName="bg-[#d4af37] h-8 md:h-12 lg:h-16"
            />

            <p className="text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-2xl text-white/90">
              {activeHeroModel.description}
            </p>

            <h1 className="text-xs md:text-sm uppercase tracking-[0.3em] font-light text-white/70">
              {activeHeroModel.displayName}
            </h1>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <CarCategories />

      <section className={`relative w-full py-16 md:py-24 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-black'
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-20">
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl md:text-4xl font-light ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Luxury <span className="text-[#D4932A]">Cars</span>
              </h2>
              <Link
                to="/collection?type=luxury"
                className={`text-sm flex items-center gap-2 transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-[#D4932A]'
                    : 'text-gray-600 hover:text-[#B8860B]'
                }`}
              >
                View More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
              {luxuryCars.slice(0, 3).map((car) => (
                <CarCard
                  key={car.id}
                  id={car.id}
                  name={car.name}
                  subtitle={car.subtitle}
                  dailyPrice={car.dailyPrice}
                  weeklyPrice={car.weeklyPrice}
                  monthlyPrice={car.monthlyPrice}
                  image={car.image}
                  chauffeurAvailable={car.chauffeurAvailable}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl md:text-4xl font-light ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Sports <span className="text-[#D4932A]">Cars</span>
              </h2>
              <Link
                to="/collection?type=sports"
                className={`text-sm flex items-center gap-2 transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-[#D4932A]'
                    : 'text-gray-600 hover:text-[#B8860B]'
                }`}
              >
                View More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
              {sportsCars.slice(0, 3).map((car) => (
                <CarCard
                  key={car.id}
                  id={car.id}
                  name={car.name}
                  subtitle={car.subtitle}
                  dailyPrice={car.dailyPrice}
                  weeklyPrice={car.weeklyPrice}
                  monthlyPrice={car.monthlyPrice}
                  image={car.image}
                  chauffeurAvailable={car.chauffeurAvailable}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl md:text-4xl font-light ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Convertible <span className="text-[#D4932A]">Cars</span>
              </h2>
              <Link
                to="/collection?type=convertible"
                className={`text-sm flex items-center gap-2 transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-[#D4932A]'
                    : 'text-gray-600 hover:text-[#B8860B]'
                }`}
              >
                View More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
              {convertibleCars.slice(0, 3).map((car) => (
                <CarCard
                  key={car.id}
                  id={car.id}
                  name={car.name}
                  subtitle={car.subtitle}
                  dailyPrice={car.dailyPrice}
                  weeklyPrice={car.weeklyPrice}
                  monthlyPrice={car.monthlyPrice}
                  image={car.image}
                  chauffeurAvailable={car.chauffeurAvailable}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl md:text-4xl font-light ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                SUV <span className="text-[#D4932A]">Cars</span>
              </h2>
              <Link
                to="/collection?type=suv"
                className={`text-sm flex items-center gap-2 transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-[#D4932A]'
                    : 'text-gray-600 hover:text-[#B8860B]'
                }`}
              >
                View More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {suvCars.slice(0, 3).map((car) => (
                <CarCard
                  key={car.id}
                  id={car.id}
                  name={car.name}
                  subtitle={car.subtitle}
                  dailyPrice={car.dailyPrice}
                  weeklyPrice={car.weeklyPrice}
                  monthlyPrice={car.monthlyPrice}
                  image={car.image}
                  chauffeurAvailable={car.chauffeurAvailable}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl md:text-4xl font-light ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Economy <span className="text-[#D4932A]">Cars</span>
              </h2>
              <Link
                to="/collection?type=economy"
                className={`text-sm flex items-center gap-2 transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-[#D4932A]'
                    : 'text-gray-600 hover:text-[#B8860B]'
                }`}
              >
                View More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {economyCars.slice(0, 3).map((car) => (
                <CarCard
                  key={car.id}
                  id={car.id}
                  name={car.name}
                  subtitle={car.subtitle}
                  dailyPrice={car.dailyPrice}
                  weeklyPrice={car.weeklyPrice}
                  monthlyPrice={car.monthlyPrice}
                  image={car.image}
                  chauffeurAvailable={car.chauffeurAvailable}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`relative w-full py-20 md:py-28 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-neutral-900 via-black to-neutral-950'
          : 'bg-gradient-to-br from-gray-100 via-white to-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <SplineSceneBasic />
        </div>
      </section>

      <WhyChooseUs theme={theme} />

      <TestimonialsDemo theme={theme} />

      <InstagramSection />
    </div>
  );
}
