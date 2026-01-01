import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const brands = [
  { name: 'Ferrari', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/07/ferrari-1.png' },
  { name: 'Lamborghini', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/Tp2uven3h7-1.png' },
  { name: 'Bentley', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/1unVcJlu27-1.png' },
  { name: 'Rolls Royce', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/cdrp0674jG-1.png' },
  { name: 'Porsche', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/zlj3UFz79n-1.png' },
  { name: 'Mercedes', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/ZfXrHr4tP6-1.png' },
  { name: 'Land Rover', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/7R5C0rp0y3.png' },
  { name: 'Audi', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/0cID35vkiB.png' },
  { name: 'BMW', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/sxI5jw9d0g.png' },
  { name: 'Cadillac', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/Mcu96Jz47.png' },
  { name: 'Chevrolet', logo: 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/mLF937C0hX.png' },
  { name: 'Dodge', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-x_9BgmRitfNhervT3fCnyYPt-Da35bPrKQ&s' },
];

export function BrandCarousel() {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;

        if (scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth / 3;

          if (scrollPosition >= maxScroll) {
            scrollPosition = 0;
          }

          scrollContainer.scrollLeft = scrollPosition;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-8 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-neutral-800 text-white hover:bg-neutral-700'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-md'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="overflow-hidden px-12">
            <div
              ref={scrollRef}
              className="flex items-center gap-6 md:gap-10 overflow-x-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group flex-shrink-0"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${
                    theme === 'dark' ? 'bg-neutral-900' : 'bg-gray-50'
                  }`}>
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <span className={`text-xs font-medium text-center transition-colors duration-300 ${
                    theme === 'dark' ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                  }`}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-neutral-800 text-white hover:bg-neutral-700'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-md'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
