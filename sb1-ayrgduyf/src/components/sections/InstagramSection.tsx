import { Instagram } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function InstagramSection() {
  const { theme } = useTheme();

  const reels = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DRjvUO4k6R6/embed",
      link: "https://www.instagram.com/reel/DRjvUO4k6R6/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DLC-moITPWd/embed",
      link: "https://www.instagram.com/reel/DLC-moITPWd/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DPMdfbIk6JJ/embed",
      link: "https://www.instagram.com/reel/DPMdfbIk6JJ/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
    }
  ];

  return (
    <section className={`relative w-full py-20 md:py-28 transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-black via-neutral-950 to-neutral-900'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className={`w-8 h-8 transition-colors duration-300 ${
              theme === 'dark' ? 'text-[#d4af37]' : 'text-[#b8941f]'
            }`} />
            <h2 className={`text-4xl md:text-5xl font-light tracking-wide transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Follow Us on <span className={theme === 'dark' ? 'text-[#d4af37]' : 'text-[#b8941f]'}>Instagram</span>
            </h2>
          </div>
          <p className={`text-lg font-light transition-colors duration-300 ${
            theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
          }`}>
            Check out our latest luxury vehicles and exclusive experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-neutral-900 shadow-2xl'
                  : 'bg-white shadow-lg hover:shadow-2xl'
              }`}
              style={{
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src={reel.url}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={`Instagram Reel ${reel.id}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/emporio_rac"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-[#d4af37] text-black hover:bg-[#c9a332]'
                : 'bg-[#b8941f] text-white hover:bg-[#a68519]'
            }`}
          >
            <Instagram className="w-5 h-5" />
            Follow @emporio_rac
          </a>
        </div>
      </div>
    </section>
  );
}
