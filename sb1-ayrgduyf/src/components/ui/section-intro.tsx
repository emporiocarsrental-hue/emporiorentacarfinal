import { useEffect, useRef, useState } from 'react';

interface SectionIntroProps {
  eyebrow: string;
  headline: string;
  highlightWords: string[];
  stat?: string;
  statHighlight?: string;
  theme?: 'dark' | 'light';
}

export function SectionIntro({
  eyebrow,
  headline,
  highlightWords,
  stat,
  statHighlight,
  theme = 'dark'
}: SectionIntroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderHeadlineWithHighlights = () => {
    let result = headline;
    highlightWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      result = result.replace(
        regex,
        `<span class="highlight-accent">${word}</span>`
      );
    });
    return result;
  };

  const renderStatWithHighlight = () => {
    if (!stat || !statHighlight) return stat;
    return stat.replace(
      statHighlight,
      `<span class="highlight-accent">${statHighlight}</span>`
    );
  };

  return (
    <div
      ref={sectionRef}
      className={`w-full py-20 md:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col space-y-6 md:space-y-8">
          <p
            className={`text-xs md:text-sm uppercase tracking-[0.2em] font-light transition-colors duration-300 ${
              theme === 'dark' ? 'text-neutral-500' : 'text-gray-500'
            }`}
          >
            {eyebrow}
          </p>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-tight tracking-wide transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            dangerouslySetInnerHTML={{
              __html: renderHeadlineWithHighlights()
            }}
            style={{
              lineHeight: '1.2'
            }}
          />

          {stat && (
            <p
              className={`text-lg md:text-xl font-light tracking-wide transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              dangerouslySetInnerHTML={{
                __html: renderStatWithHighlight() || ''
              }}
            />
          )}
        </div>
      </div>

      <style>{`
        .highlight-accent {
          color: #d4af37;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
}
