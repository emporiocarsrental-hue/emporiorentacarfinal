import { useEffect, useRef, useState } from 'react';

interface RollingPriceProps {
  price: number;
  currency?: string;
  suffix?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

export function RollingPrice({
  price,
  currency = 'AED',
  suffix = '/day',
  className = '',
  theme = 'dark'
}: RollingPriceProps) {
  const [displayPrice, setDisplayPrice] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animatePrice();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  const animatePrice = () => {
    const maxPrice = price * 1.35;
    const phase1Duration = 3000;
    const phase2Duration = 1500;
    const phase3Duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;

      if (elapsed < phase1Duration) {
        const progress = elapsed / phase1Duration;
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayPrice(Math.round(maxPrice * easeProgress));
        requestAnimationFrame(animate);
      } else if (elapsed < phase1Duration + phase2Duration) {
        setDisplayPrice(Math.round(maxPrice));
        requestAnimationFrame(animate);
      } else if (elapsed < phase1Duration + phase2Duration + phase3Duration) {
        const phase3Elapsed = elapsed - phase1Duration - phase2Duration;
        const progress = phase3Elapsed / phase3Duration;
        const easeProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        const currentPrice = maxPrice - (maxPrice - price) * easeProgress;
        setDisplayPrice(Math.round(currentPrice));
        requestAnimationFrame(animate);
      } else {
        setDisplayPrice(price);
      }
    };

    animate();
  };

  const formatPrice = (value: number) => {
    return value.toLocaleString('en-US');
  };

  return (
    <div ref={elementRef} className={className}>
      <span className={`transition-all duration-300 ${
        displayPrice > price
          ? 'text-red-500'
          : theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {currency} {formatPrice(displayPrice)}
      </span>
      <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>{suffix}</span>
    </div>
  );
}
