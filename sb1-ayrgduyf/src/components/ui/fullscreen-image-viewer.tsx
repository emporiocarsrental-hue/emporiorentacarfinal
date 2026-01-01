import { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FullscreenImageViewerProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  carName: string;
}

export function FullscreenImageViewer({
  images,
  currentIndex,
  onClose,
  onNavigate,
  carName
}: FullscreenImageViewerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, images.length]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handlePrevious = () => {
    setImageTransition(true);
    setTimeout(() => {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      onNavigate(newIndex);
      setImageTransition(false);
    }, 150);
  };

  const handleNext = () => {
    setImageTransition(true);
    setTimeout(() => {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      onNavigate(newIndex);
      setImageTransition(false);
    }, 150);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Close fullscreen viewer"
      >
        <X className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      <button
        onClick={handlePrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-7 h-7 md:w-10 md:h-10 transition-transform group-hover:-translate-x-1" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Next image"
      >
        <ChevronRight className="w-7 h-7 md:w-10 md:h-10 transition-transform group-hover:translate-x-1" />
      </button>

      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
        <img
          src={images[currentIndex]}
          alt={`${carName} - Image ${currentIndex + 1}`}
          className={`max-w-full max-h-full object-contain transition-all duration-300 ${
            imageTransition ? 'opacity-70 scale-95' : 'opacity-100 scale-100'
          }`}
          style={{
            animation: !imageTransition ? 'zoomTransition 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
          }}
        />
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full">
        <div className="flex gap-2 max-w-xs overflow-x-auto scrollbar-hide">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setImageTransition(true);
                setTimeout(() => {
                  onNavigate(index);
                  setImageTransition(false);
                }, 150);
              }}
              className={`flex-shrink-0 w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#d4af37] w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        <div className="text-white/90 text-xs md:text-sm font-light tracking-wide">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/80 text-sm md:text-base font-light tracking-wide bg-black/30 backdrop-blur-md px-6 py-2 rounded-full">
        {carName}
      </div>
    </div>
  );
}
