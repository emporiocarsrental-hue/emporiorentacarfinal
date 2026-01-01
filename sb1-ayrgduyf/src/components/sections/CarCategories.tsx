import { ChevronRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Hatchback',
    image: 'https://www.ghostrentals.com:5014/public/cartype/rent-a-mini-car-from-ghost-rentals-dubai-20250927111108.webp',
    slug: 'hatchback'
  },
  {
    name: 'Convertible',
    image: 'https://www.ghostrentals.com:5014/public/cartype/rent-covertible-cars-from-ghost-rentals-in-dubai-20250927111214.webp',
    slug: 'convertible'
  },
  {
    name: 'Sedan',
    image: 'https://www.ghostrentals.com:5014/public/cartype/sedan-cars-on-rent-from-ghost-rentals-dubai-20250927111506.webp',
    slug: 'sedan'
  },
  {
    name: 'Coupe',
    image: 'https://www.ghostrentals.com:5014/public/cartype/coupe-cars-rentals-from-ghost-rentals-dubai-20250927111658.webp',
    slug: 'coupe'
  },
  {
    name: 'SUV',
    image: 'https://www.ghostrentals.com:5014/public/cartype/rent-suv-cars-from-ghost-rentals-dubai-20250927111401.webp',
    slug: 'suv'
  },
  {
    name: 'Van',
    image: 'https://www.ghostrentals.com:5014/public/cartype/rent-v-class-by-ghost-rentals-in-dubai-20250927111558.webp',
    slug: 'van'
  }
];

export function CarCategories() {
  const { theme } = useTheme();

  return (
    <section className={`py-16 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-light mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Explore Our Luxury Car Rentals in Dubai - Choose Your Car Type
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/collection?category=${category.slug}`}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-3/4 mx-auto aspect-[4/3] mb-3 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className={`text-base md:text-lg font-semibold transition-colors ${
                theme === 'dark'
                  ? 'text-white group-hover:text-[#D4932A]'
                  : 'text-gray-900 group-hover:text-[#B8860B]'
              }`}>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
