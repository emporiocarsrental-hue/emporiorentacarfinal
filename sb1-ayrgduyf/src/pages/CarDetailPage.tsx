import { useParams, Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect, useRef } from 'react';
import { carGalleries } from '@/data/carGalleries';
import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { FullscreenImageViewer } from '@/components/ui/fullscreen-image-viewer';

interface CarDetail {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
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
  transmission: string;
  fuelType: string;
  acceleration: string;
  topSpeed: string;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  deposit: string;
  mileageLimit: string;
  extraMileage: string;
  payment: string;
  color: string;
  carType: string;
  doors: number;
  drive: string;
  fuel: string;
  luggage: number;
}

const carsData: { [key: string]: CarDetail } = {
  'rolls-royce-cullinan': {
    id: 'rolls-royce-cullinan',
    name: 'Rolls Royce',
    subtitle: 'Cullinan Grey',
    description: 'The pinnacle of luxury SUV excellence.',
    longDescription: 'The Rolls-Royce Cullinan represents the absolute pinnacle of luxury SUV craftsmanship.',
    pricing: { daily: 3500, weekly: null, monthly: null },
    seats: 5,
    horsepower: '563 HP',
    engine: 'V12',
    chauffeurAvailable: true,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '5.0 Seconds',
    topSpeed: '250 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Grey',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'dodge-charger': {
    id: 'dodge-charger',
    name: 'Dodge Charger',
    subtitle: 'Hellcat Wide Body Kit 2022',
    description: 'Raw American muscle with modern refinement.',
    longDescription: 'The Dodge Charger Hellcat Wide Body Kit represents the pinnacle of American muscle car performance.',
    pricing: { daily: 300, weekly: 1899, monthly: 4888 },
    seats: 5,
    horsepower: '707 HP',
    engine: 'V8 Supercharged',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2022,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '3.6 Seconds',
    topSpeed: '280 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'Sports',
    doors: 4,
    drive: 'RWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'jetour-t2': {
    id: 'jetour-t2',
    name: 'Jetour T2',
    subtitle: 'Defender Kit 2024',
    description: 'Built for adventure with luxury at its core.',
    longDescription: 'The Jetour T2 Defender Kit combines rugged capability with refined luxury.',
    pricing: { daily: 399, weekly: 2500, monthly: 6999 },
    seats: 7,
    horsepower: '290 HP',
    engine: '2.0L Turbo',
    chauffeurAvailable: true,
    category: 'SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '7.9 Seconds',
    topSpeed: '200 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 3
  },
  'chevrolet-camaro': {
    id: 'chevrolet-camaro',
    name: 'Chevrolet Camaro',
    subtitle: 'ZL1 Kit 2023',
    description: 'An icon of speed and attitude.',
    longDescription: 'The Chevrolet Camaro ZL1 Kit is a legend reborn with supercharged V8 power.',
    pricing: { daily: 350, weekly: 2000, monthly: 5500 },
    seats: 4,
    horsepower: '650 HP',
    engine: 'V8 Supercharged',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2023,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '3.5 Seconds',
    topSpeed: '295 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Yellow',
    carType: 'Sports',
    doors: 2,
    drive: 'RWD',
    fuel: 'Petrol',
    luggage: 1
  },
  'mercedes-gla35': {
    id: 'mercedes-gla35',
    name: 'Mercedes GLA35 AMG',
    subtitle: '2023',
    description: 'Precision-engineered performance meets everyday luxury.',
    longDescription: 'The Mercedes-AMG GLA 35 represents the perfect fusion of performance and practicality.',
    pricing: { daily: 500, weekly: 3000, monthly: 8000 },
    seats: 5,
    horsepower: '302 HP',
    engine: '2.0L Turbo',
    chauffeurAvailable: true,
    category: 'Luxury SUV',
    year: 2023,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '5.1 Seconds',
    topSpeed: '250 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'White',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'hyundai-elantra': {
    id: 'hyundai-elantra',
    name: 'Hyundai Elantra',
    subtitle: '2024 New Shape',
    description: 'Premium automotive excellence with sophisticated styling.',
    longDescription: 'The Hyundai Elantra 2024 redefines what a sedan can be with striking design and advanced technology.',
    pricing: { daily: 150, weekly: 1000, monthly: 2500 },
    seats: 5,
    horsepower: '201 HP',
    engine: '1.6L Turbo',
    chauffeurAvailable: false,
    category: 'Sedan',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '7.7 Seconds',
    topSpeed: '210 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'White',
    carType: 'Sedan',
    doors: 4,
    drive: 'FWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'lamborghini-urus': {
    id: 'lamborghini-urus',
    name: 'Lamborghini',
    subtitle: 'Urus Purple',
    description: 'The world\'s first Super Sport Utility Vehicle.',
    longDescription: 'The Lamborghini Urus is a groundbreaking Super Sport Utility Vehicle with breathtaking performance.',
    pricing: { daily: 1800, weekly: null, monthly: null },
    seats: 5,
    horsepower: '650 HP',
    engine: 'V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '3.6 Seconds',
    topSpeed: '305 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Purple',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'defender-black': {
    id: 'defender-black',
    name: 'Land Rover',
    subtitle: 'Defender Black',
    description: 'The legendary off-roader reimagined.',
    longDescription: 'The Land Rover Defender Black Edition is a perfect blend of rugged capability and modern luxury.',
    pricing: { daily: 500, weekly: 3000, monthly: null },
    seats: 5,
    horsepower: '300 HP',
    engine: '3.0L Turbo Diesel',
    chauffeurAvailable: true,
    category: 'SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    acceleration: '7.7 Seconds',
    topSpeed: '191 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Diesel',
    luggage: 3
  },
  'defender-brown': {
    id: 'defender-brown',
    name: 'Land Rover',
    subtitle: 'Defender Brown',
    description: 'The legendary off-roader reimagined.',
    longDescription: 'The Land Rover Defender Brown Edition combines legendary off-road heritage with sophisticated styling.',
    pricing: { daily: 500, weekly: 3000, monthly: null },
    seats: 5,
    horsepower: '300 HP',
    engine: '3.0L Turbo Diesel',
    chauffeurAvailable: true,
    category: 'SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    acceleration: '7.7 Seconds',
    topSpeed: '191 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Brown',
    carType: 'SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Diesel',
    luggage: 3
  },
  'rolls-royce-phantom': {
    id: 'rolls-royce-phantom',
    name: 'Rolls Royce',
    subtitle: 'Phantom',
    description: 'The pinnacle of automotive luxury.',
    longDescription: 'The Rolls-Royce Phantom represents the absolute zenith of automotive achievement.',
    pricing: { daily: 3000, weekly: null, monthly: null },
    seats: 5,
    horsepower: '563 HP',
    engine: 'V12 Twin-Turbo',
    chauffeurAvailable: true,
    category: 'Luxury Sedan',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '5.3 Seconds',
    topSpeed: '250 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'Luxury Sedan',
    doors: 4,
    drive: 'RWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'ferrari-f8-spyder': {
    id: 'ferrari-f8-spyder',
    name: 'Ferrari',
    subtitle: 'F8 Spyder',
    description: 'The ultimate convertible supercar.',
    longDescription: 'The Ferrari F8 Spyder represents the pinnacle of open-air performance driving.',
    pricing: { daily: 2500, weekly: null, monthly: null },
    seats: 2,
    horsepower: '710 HP',
    engine: 'V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '2.9 Seconds',
    topSpeed: '340 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Red',
    carType: 'Sports',
    doors: 2,
    drive: 'RWD',
    fuel: 'Petrol',
    luggage: 1
  },
  'lamborghini-huracan-evo-spyder': {
    id: 'lamborghini-huracan-evo-spyder',
    name: 'Lamborghini',
    subtitle: 'Huracan Evo Spyder',
    description: 'Pure Italian supercar excellence.',
    longDescription: 'The Lamborghini Huracan Evo Spyder embodies the perfect fusion of cutting-edge technology and raw emotion.',
    pricing: { daily: 2500, weekly: null, monthly: null },
    seats: 2,
    horsepower: '631 HP',
    engine: 'V10',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '3.1 Seconds',
    topSpeed: '325 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Yellow',
    carType: 'Sports',
    doors: 2,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 1
  },
  'mercedes-g63-black': {
    id: 'mercedes-g63-black',
    name: 'Mercedes-AMG',
    subtitle: 'G63 Black',
    description: 'The iconic G-Wagon with commanding presence.',
    longDescription: 'The Mercedes-AMG G63 in bold black finish represents the perfect blend of luxury and capability.',
    pricing: { daily: 1400, weekly: null, monthly: null },
    seats: 5,
    horsepower: '577 HP',
    engine: 'V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '4.5 Seconds',
    topSpeed: '220 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'mercedes-g63-white': {
    id: 'mercedes-g63-white',
    name: 'Mercedes-AMG',
    subtitle: 'G63 White',
    description: 'The iconic G-Wagon in pristine white.',
    longDescription: 'The Mercedes-AMG G63 in pristine white finish embodies refined power and sophistication.',
    pricing: { daily: 1400, weekly: null, monthly: null },
    seats: 5,
    horsepower: '577 HP',
    engine: 'V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '4.5 Seconds',
    topSpeed: '220 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'White',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'mercedes-g63-silver': {
    id: 'mercedes-g63-silver',
    name: 'Mercedes-AMG',
    subtitle: 'G63 Silver',
    description: 'The iconic G-Wagon in sleek silver.',
    longDescription: 'The Mercedes-AMG G63 in sleek silver finish perfectly balances elegance and aggression.',
    pricing: { daily: 1400, weekly: null, monthly: null },
    seats: 5,
    horsepower: '577 HP',
    engine: 'V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '4.5 Seconds',
    topSpeed: '220 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Silver',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'mercedes-g63-green': {
    id: 'mercedes-g63-green',
    name: 'Mercedes-AMG',
    subtitle: 'G63 Green',
    description: 'The iconic G-Wagon in distinctive green.',
    longDescription: 'The Mercedes-AMG G63 in distinctive green finish offers a unique take on the legendary G-Wagon.',
    pricing: { daily: 1400, weekly: null, monthly: null },
    seats: 5,
    horsepower: '577 HP',
    engine: 'V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '4.5 Seconds',
    topSpeed: '220 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Green',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'bentley-bentayga': {
    id: 'bentley-bentayga',
    name: 'Bentley',
    subtitle: 'Bentayga',
    description: 'Ultimate luxury SUV experience.',
    longDescription: 'The Bentley Bentayga sets the benchmark for luxury SUVs with unparalleled craftsmanship and performance.',
    pricing: { daily: 1999, weekly: null, monthly: null },
    seats: 5,
    horsepower: '542 HP',
    engine: 'V8 Twin-Turbo',
    chauffeurAvailable: true,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '4.5 Seconds',
    topSpeed: '290 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 3
  },
  'ferrari-purosangue': {
    id: 'ferrari-purosangue',
    name: 'Ferrari',
    subtitle: 'Purosangue',
    description: 'Ferrari\'s first SUV with pure racing DNA.',
    longDescription: 'The Ferrari Purosangue redefines luxury SUVs with authentic Ferrari performance and design excellence.',
    pricing: { daily: 8499, weekly: null, monthly: null },
    seats: 4,
    horsepower: '715 HP',
    engine: 'V12',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '3.3 Seconds',
    topSpeed: '310 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Red',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'ferrari-sf90': {
    id: 'ferrari-sf90',
    name: 'Ferrari',
    subtitle: 'SF90 Stradale',
    description: 'Ferrari\'s first plug-in hybrid supercar.',
    longDescription: 'The Ferrari SF90 Stradale represents the pinnacle of Ferrari innovation with hybrid technology and extreme performance.',
    pricing: { daily: 5499, weekly: null, monthly: null },
    seats: 2,
    horsepower: '986 HP',
    engine: 'V8 Hybrid',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    acceleration: '2.5 Seconds',
    topSpeed: '340 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Red',
    carType: 'Sports',
    doors: 2,
    drive: 'AWD',
    fuel: 'Hybrid',
    luggage: 1
  },
  'bentley-continental-gt': {
    id: 'bentley-continental-gt',
    name: 'Bentley',
    subtitle: 'Continental GT',
    description: 'Grand touring perfection in British luxury.',
    longDescription: 'The Bentley Continental GT combines breathtaking performance with refined grand touring comfort.',
    pricing: { daily: 2499, weekly: null, monthly: null },
    seats: 4,
    horsepower: '626 HP',
    engine: 'W12 Twin-Turbo',
    chauffeurAvailable: true,
    category: 'Luxury Coupe',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '3.7 Seconds',
    topSpeed: '333 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'Luxury Coupe',
    doors: 2,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'audi-rs3': {
    id: 'audi-rs3',
    name: 'Audi',
    subtitle: 'RS3',
    description: 'Compact performance with Quattro technology.',
    longDescription: 'The Audi RS3 delivers pure driving excitement with legendary five-cylinder power and advanced Quattro AWD.',
    pricing: { daily: 999, weekly: null, monthly: null },
    seats: 5,
    horsepower: '401 HP',
    engine: '2.5L Turbo',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '3.8 Seconds',
    topSpeed: '290 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Grey',
    carType: 'Sports',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'audi-rsq8': {
    id: 'audi-rsq8',
    name: 'Audi',
    subtitle: 'RSQ8',
    description: 'High-performance luxury SUV.',
    longDescription: 'The Audi RSQ8 combines SUV practicality with supercar performance in a stunning package.',
    pricing: { daily: 1799, weekly: null, monthly: null },
    seats: 5,
    horsepower: '591 HP',
    engine: 'V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '3.8 Seconds',
    topSpeed: '305 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 3
  },
  'porsche-cayenne': {
    id: 'porsche-cayenne',
    name: 'Porsche',
    subtitle: 'Cayenne',
    description: 'The sports car among SUVs.',
    longDescription: 'The Porsche Cayenne delivers authentic sports car performance in a luxurious SUV package.',
    pricing: { daily: 1399, weekly: null, monthly: null },
    seats: 5,
    horsepower: '455 HP',
    engine: 'V8 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '4.1 Seconds',
    topSpeed: '286 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'White',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 3
  },
  'porsche-911-carrera': {
    id: 'porsche-911-carrera',
    name: 'Porsche',
    subtitle: '911 Carrera',
    description: 'The iconic sports car legend.',
    longDescription: 'The Porsche 911 Carrera represents decades of engineering excellence and pure driving passion.',
    pricing: { daily: 1999, weekly: null, monthly: null },
    seats: 4,
    horsepower: '379 HP',
    engine: 'Flat-6 Twin-Turbo',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '4.2 Seconds',
    topSpeed: '293 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Red',
    carType: 'Sports',
    doors: 2,
    drive: 'RWD',
    fuel: 'Petrol',
    luggage: 1
  },
  'bmw-420i': {
    id: 'bmw-420i',
    name: 'BMW',
    subtitle: '420i Convertible',
    description: 'Open-air luxury and performance.',
    longDescription: 'The BMW 420i Convertible combines elegant design with dynamic driving pleasure and open-air freedom.',
    pricing: { daily: 899, weekly: null, monthly: null },
    seats: 4,
    horsepower: '184 HP',
    engine: '2.0L Turbo',
    chauffeurAvailable: false,
    category: 'Convertible',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '7.5 Seconds',
    topSpeed: '235 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Blue',
    carType: 'Convertible',
    doors: 2,
    drive: 'RWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'bmw-m235': {
    id: 'bmw-m235',
    name: 'BMW',
    subtitle: 'M235i',
    description: 'Compact performance with M DNA.',
    longDescription: 'The BMW M235i delivers thrilling M Performance in a compact, agile package with everyday usability.',
    pricing: { daily: 499, weekly: null, monthly: null },
    seats: 5,
    horsepower: '306 HP',
    engine: '2.0L Turbo',
    chauffeurAvailable: false,
    category: 'Sports',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '4.9 Seconds',
    topSpeed: '250 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'White',
    carType: 'Sports',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 2
  },
  'cadillac-escalade': {
    id: 'cadillac-escalade',
    name: 'Cadillac',
    subtitle: 'Escalade',
    description: 'American luxury and commanding presence.',
    longDescription: 'The Cadillac Escalade offers unmatched space, luxury, and technology in an iconic American SUV.',
    pricing: { daily: 1199, weekly: null, monthly: null },
    seats: 7,
    horsepower: '420 HP',
    engine: 'V8',
    chauffeurAvailable: true,
    category: 'Luxury SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '6.1 Seconds',
    topSpeed: '210 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'Luxury SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 4
  },
  'chevrolet-tahoe': {
    id: 'chevrolet-tahoe',
    name: 'Chevrolet',
    subtitle: 'Tahoe',
    description: 'Full-size SUV with modern capability.',
    longDescription: 'The Chevrolet Tahoe delivers exceptional space, versatility, and advanced technology for families and adventures.',
    pricing: { daily: 699, weekly: null, monthly: null },
    seats: 7,
    horsepower: '355 HP',
    engine: 'V8',
    chauffeurAvailable: false,
    category: 'SUV',
    year: 2024,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    acceleration: '6.7 Seconds',
    topSpeed: '200 km/h',
    features: [],
    specifications: [],
    deposit: 'No Deposit',
    mileageLimit: '270 km',
    extraMileage: '25 AED/Km',
    payment: 'Card, Cash, Crypto',
    color: 'Black',
    carType: 'SUV',
    doors: 4,
    drive: 'AWD',
    fuel: 'Petrol',
    luggage: 4
  }
};

Object.keys(carsData).forEach(key => {
  const car = carsData[key];
  if (!car.deposit) car.deposit = 'No Deposit';
  if (!car.mileageLimit) car.mileageLimit = '270 km';
  if (!car.extraMileage) car.extraMileage = '25 AED/Km';
  if (!car.payment) car.payment = 'Card, Cash, Crypto';
  if (!car.color) car.color = 'White';
  if (!car.carType) car.carType = car.category;
  if (!car.doors) car.doors = 4;
  if (!car.drive) car.drive = 'AWD';
  if (!car.fuel) car.fuel = car.fuelType;
  if (!car.luggage) car.luggage = 2;
  if (typeof car.acceleration === 'string' && car.acceleration.includes('in')) {
    car.acceleration = car.acceleration.split('in ')[1].replace('s', ' Seconds');
  }
});

export function CarDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const car = id ? carsData[id] : null;
  const images = id ? carGalleries[id] || [] : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!car) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-black' : 'bg-gray-50'
      }`}>
        <div className="text-center">
          <h1 className={`text-4xl font-light mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Car not found
          </h1>
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-light transition-all duration-300 bg-[#D4932A] text-white hover:bg-[#B8860B]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Link
          to="/collection"
          className={`inline-flex items-center gap-2 mb-6 font-light transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className={`relative rounded-2xl overflow-hidden ${
              theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
            }`}>
              <div className="relative h-[400px] bg-gradient-to-br from-gray-100 to-gray-200">
                {images.length > 0 && (
                  <>
                    <img
                      src={images[currentImageIndex]}
                      alt={`${car.name} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchpriority="high"
                    />
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setShowFullscreen(true)}
                      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg"
                    >
                      <Maximize2 className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-[#D4932A]'
                      : theme === 'dark'
                      ? 'border-neutral-800'
                      : 'border-gray-300'
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="eager" fetchpriority="high" />
                </button>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl p-8 ${
            theme === 'dark' ? 'bg-neutral-900' : 'bg-black'
          }`}>
            <h1 className="text-white text-4xl font-bold mb-6">{car.name} {car.subtitle}</h1>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Deposit:</span>
                <span className="text-[#D4932A] font-medium">{car.deposit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Mileage Limit:</span>
                <span className="text-white">{car.mileageLimit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Extra Mileage:</span>
                <span className="text-white">{car.extraMileage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment:</span>
                <span className="text-white">{car.payment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Color:</span>
                <span className="text-white">{car.color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transmission:</span>
                <span className="text-white">{car.transmission}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Car Type:</span>
                <span className="text-white">{car.carType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Engine:</span>
                <span className="text-white">{car.engine}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Seats:</span>
                <span className="text-white">{car.seats}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Doors:</span>
                <span className="text-white">{car.doors}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">0-100:</span>
                <span className="text-white">{car.acceleration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Drive:</span>
                <span className="text-white">{car.drive}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fuel:</span>
                <span className="text-white">{car.fuel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Luggage:</span>
                <span className="text-white">{car.luggage}</span>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-6 mb-6">
              <p className="text-gray-400 text-xs text-center mb-4">
                Note : Prices are Inclusive of Vat & Deposit Fee
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Daily</p>
                  <p className="text-white text-2xl font-bold">D {car.pricing.daily.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Weekly</p>
                  <p className="text-white text-base">
                    {car.pricing.weekly ? `D ${car.pricing.weekly.toLocaleString()}` : 'Ask Now'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Monthly</p>
                  <p className="text-white text-base">
                    {car.pricing.monthly ? `D ${car.pricing.monthly.toLocaleString()}` : 'Ask Now'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <a
                href={`https://wa.me/971503223525?text=${encodeURIComponent(`Hello, I want to book ${car.name} ${car.subtitle}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] text-white text-sm font-medium rounded transition-all duration-300 hover:bg-[#20bd5a]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>

              <a
                href="tel:+971503008311"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-white text-gray-900 text-sm font-medium rounded transition-all duration-300 hover:bg-gray-100"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call us
              </a>

              <button className="flex items-center justify-center py-3 px-3 bg-gradient-to-r from-[#D4932A] to-[#B8860B] text-white text-sm font-medium rounded transition-all duration-300 hover:from-[#E8A830] hover:to-[#D4932A]">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`rounded-2xl p-6 ${
            theme === 'dark' ? 'bg-neutral-900 border border-neutral-800' : 'bg-black'
          }`}>
            <h2 className="text-white text-xl font-bold mb-6">Documents Required</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-3">For Tourists Visiting the UAE:</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Passport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Home Country Driving License</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>International Driving Permit (IDP)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">For UAE Residents:</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>UAE Driving License</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Emirates ID (UAE Pass may be acceptable)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`rounded-2xl p-6 ${
            theme === 'dark' ? 'bg-neutral-900 border border-neutral-800' : 'bg-black'
          }`}>
            <h2 className="text-white text-xl font-bold mb-6">Rental Terms</h2>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <div>
                  <span className="text-white font-medium">Age:</span>
                  <span className="text-gray-400"> Over 18 Years Old</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <div>
                  <span className="text-white font-medium">Fuel:</span>
                  <span className="text-gray-400"> Car Must be returned same fuel time of delivery</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <div>
                  <span className="text-white font-medium">Salik:</span>
                  <span className="text-gray-400"> Salik Fee will be AED 5</span>
                </div>
              </li>
              <li className="mt-4">
                <p className="text-white font-semibold mb-2">No Deposit</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span className="text-gray-400 text-sm">Customers aged 18-23 years are required to pay a refundable deposit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span className="text-gray-400 text-sm">The deposit will be returned within 10 working days after the car is returned</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={`rounded-2xl p-6 ${
            theme === 'dark' ? 'bg-neutral-900 border border-neutral-800' : 'bg-black'
          }`}>
            <h2 className="text-white text-xl font-bold mb-6">Delivery</h2>

            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <div>
                    <span className="text-white font-medium">Within Dubai:</span>
                    <span className="text-gray-400"> Round Trip (Delivery + Pickup): </span>
                    <span className="text-white">AED 100</span>
                  </div>
                </div>
                <div className="ml-4 mt-1 text-gray-400">
                  One-Way (Delivery or Pickup only): <span className="text-white">AED 50</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <div>
                  <span className="text-white font-medium">AED 200:</span>
                  <span className="text-gray-400"> Al Maktoum Airport, Sharjah Airport, Sharjah City (One-Way)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">•</span>
                <div>
                  <span className="text-white font-medium">AED 700:</span>
                  <span className="text-gray-400"> Ajman, Abu Dhabi Airport, Al Ain, Fujairah, Ras Al Khaimah (One-Way)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {showFullscreen && (
        <FullscreenImageViewer
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setShowFullscreen(false)}
          onNavigate={setCurrentImageIndex}
          carName={`${car.name} ${car.subtitle}`}
        />
      )}
    </div>
  );
}
