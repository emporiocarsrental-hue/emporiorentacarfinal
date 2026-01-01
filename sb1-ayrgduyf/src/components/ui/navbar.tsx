import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Menu, X, ArrowRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

interface DropdownItem {
  label: string;
  href: string;
  image?: string;
  logo?: string;
}

const carTypesDropdown: DropdownItem[] = [
  { label: 'LUXURY CARS', href: '/collection?type=luxury', image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'SPORTS CARS', href: '/collection?type=sports', image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'SUV CARS', href: '/collection?type=suv', image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'ECONOMY CARS', href: '/collection?type=economy', image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'EXOTIC CARS', href: '/collection?type=exotic', image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { label: 'CONVERTIBLE CARS', href: '/collection?type=convertible', image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const carBrandsDropdown: DropdownItem[] = [
  { label: 'Ferrari', href: '/collection?brand=ferrari', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/07/ferrari-1.png' },
  { label: 'Lamborghini', href: '/collection?brand=lamborghini', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/Tp2uven3h7-1.png' },
  { label: 'Bentley', href: '/collection?brand=bentley', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/1unVcJlu27-1.png' },
  { label: 'Rolls Royce', href: '/collection?brand=rolls-royce', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/cdrp0674jG-1.png' },
  { label: 'Porsche', href: '/collection?brand=porsche', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/zlj3UFz79n-1.png' },
  { label: 'Mercedes', href: '/collection?brand=mercedes', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/ZfXrHr4tP6-1.png' },
  { label: 'Land Rover', href: '/collection?brand=land-rover', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/7R5C0rp0y3.png' },
  { label: 'Mclaren', href: '/collection?brand=mclaren', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/mLF937C0hX.png' },
  { label: 'Audi', href: '/collection?brand=audi', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/0cID35vkiB.png' },
  { label: 'BMW', href: '/collection?brand=bmw', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/sxI5jw9d0g.png' },
  { label: 'Cadillac', href: '/collection?brand=cadillac', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/Mcu96Jz47.png' },
  { label: 'Chevrolet', href: '/collection?brand=chevrolet', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/mLF937C0hX.png' },
];

const navItems: NavItem[] = [
  { label: 'ALL CARS', href: '/collection' },
  { label: 'CAR BRANDS', href: '#', dropdown: carBrandsDropdown },
  { label: 'DAILY OFFERS', href: '/collection' },
  { label: 'RENTAL PRICES', href: '/collection' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'BLOG', href: '#' },
  { label: 'CONTACT US', href: '#contact' },
];

const mobileNavItems = [
  { label: 'ALL CARS', href: '/collection' },
  {
    label: 'CARS TYPES',
    href: '#',
    children: [
      { label: 'Sedan', href: '/collection?type=sedan' },
      { label: 'SUV', href: '/collection?type=suv' },
      { label: 'Sports', href: '/collection?type=sports' },
      { label: 'Luxury', href: '/collection?type=luxury' },
      { label: 'Economy', href: '/collection?type=economy' },
    ],
  },
  {
    label: 'CAR BRANDS',
    href: '#',
    children: [
      { label: 'Mercedes', href: '/collection?brand=mercedes' },
      { label: 'BMW', href: '/collection?brand=bmw' },
      { label: 'Audi', href: '/collection?brand=audi' },
      { label: 'Dodge', href: '/collection?brand=dodge' },
      { label: 'Chevrolet', href: '/collection?brand=chevrolet' },
    ],
  },
  { label: 'DAILY OFFERS', href: '/collection' },
  { label: 'RENTAL PRICES', href: '/collection' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'BLOG', href: '#' },
  { label: 'CONTACT US', href: '#contact' },
];

function DropdownPanel({ items, isOpen }: { items: DropdownItem[]; isOpen: boolean }) {
  const hasLogos = items.some(item => item.logo);

  return (
    <div
      className={`absolute left-0 right-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-300 ease-out overflow-hidden ${
        isOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 pointer-events-none'
      }`}
    >
      <div className="max-w-[1000px] mx-auto px-4 lg:px-8 py-4">
        {hasLogos ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-2 p-2 bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {item.logo && (
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.logo}
                      alt={item.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <span className="text-gray-900 text-sm font-medium group-hover:text-[#B8860B] transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-zinc-800"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                  <span className="text-white text-xs font-semibold tracking-wide">{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white z-50 lg:hidden transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-lg font-bold text-gray-900 tracking-wide">Menu</span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-[#D4932A] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="py-4 overflow-y-auto h-full">
          {mobileNavItems.map((item) => (
            <div key={item.label}>
              {'children' in item && item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="w-full flex items-center justify-between px-6 py-4 text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-semibold tracking-wider">{item.label}</span>
                    {expandedItem === item.label ? (
                      <ChevronUp className="w-4 h-4 text-[#D4932A]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedItem === item.label ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="bg-gray-50 py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="block px-10 py-3 text-sm text-gray-600 hover:text-[#D4932A] hover:bg-gray-100 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block px-6 py-4 text-sm font-semibold tracking-wider text-gray-900 hover:bg-gray-50 hover:text-[#D4932A] transition-colors"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function NavBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav ref={navRef} className="w-full bg-white text-gray-900 relative border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <button
            className="lg:hidden text-gray-900 p-2 -ml-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-0 flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-3 text-[13px] font-semibold tracking-wider transition-all duration-300 whitespace-nowrap ${
                    openDropdown === item.label
                      ? 'text-[#D4932A]'
                      : 'text-gray-900 hover:text-[#D4932A]'
                  }`}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {navItems
        .filter((item) => item.dropdown)
        .map((item) => (
          <div
            key={item.label}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <DropdownPanel
              items={item.dropdown!}
              isOpen={openDropdown === item.label}
            />
          </div>
        ))}

      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </nav>
  );
}
