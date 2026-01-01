import { Phone, Facebook, Instagram, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export function TopBar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="w-full bg-white text-gray-900 py-4 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-auto h-24 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 200 80" className="h-full w-auto">
              <defs>
                <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4932A" />
                  <stop offset="100%" stopColor="#E8A830" />
                </linearGradient>
              </defs>

              <g transform="translate(100, 18)">
                <path d="M-25 8 Q-15 2 0 0 Q15 2 25 8 Q20 10 15 8 Q5 6 0 5 Q-5 6 -15 8 Q-20 10 -25 8 Z" fill="none" stroke="#1a365d" strokeWidth="1.5"/>
                <ellipse cx="-8" cy="10" rx="5" ry="5" fill="none" stroke="#1a365d" strokeWidth="1.2"/>
                <ellipse cx="10" cy="10" rx="5" ry="5" fill="none" stroke="#1a365d" strokeWidth="1.2"/>
                <path d="M-20 6 Q-10 4 0 3 Q10 4 20 6" fill="none" stroke="#1a365d" strokeWidth="1"/>
              </g>

              <g transform="translate(100, 32)">
                <polygon points="-75,8 -25,8 -20,0 -50,0" fill="url(#wingGradient)"/>
                <polygon points="-80,18 -30,18 -25,10 -60,10" fill="url(#wingGradient)"/>
                <polygon points="-85,28 -35,28 -30,20 -70,20" fill="url(#wingGradient)"/>

                <polygon points="75,8 25,8 20,0 50,0" fill="url(#wingGradient)"/>
                <polygon points="80,18 30,18 25,10 60,10" fill="url(#wingGradient)"/>
                <polygon points="85,28 35,28 30,20 70,20" fill="url(#wingGradient)"/>
              </g>

              <text x="100" y="36" textAnchor="middle" fill="#D4932A" fontSize="7" fontFamily="Arial, sans-serif" fontStyle="italic" fontWeight="500">DUBAI</text>

              <text x="100" y="58" textAnchor="middle" fill="#1a365d" fontSize="22" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3">EMPORIO</text>

              <text x="100" y="72" textAnchor="middle" fill="#D4932A" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="500" letterSpacing="2">RENT A CAR</text>
            </svg>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+971503008311"
            className="flex items-center gap-2.5 px-5 py-2.5 bg-gray-900 border border-gray-800 hover:border-[#D4932A] rounded-full transition-all duration-300 group"
          >
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <Phone className="w-3 h-3 text-gray-900" />
            </div>
            <span className="text-sm font-medium text-white">+971 50 300 8311</span>
          </a>

          <a
            href="tel:+971503223525"
            className="flex items-center gap-2.5 px-5 py-2.5 bg-gray-900 border border-gray-800 hover:border-[#D4932A] rounded-full transition-all duration-300 group"
          >
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <Phone className="w-3 h-3 text-gray-900" />
            </div>
            <span className="text-sm font-medium text-white">+971 50 322 3525</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://www.facebook.com/emporiorentacar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-[#D4932A] transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/emporiorentacar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-[#D4932A] transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@emporiorentacar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-[#D4932A] transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center text-gray-600 hover:text-[#D4932A] transition-all duration-300 hover:scale-110 rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-[#D4932A] transition-all duration-300 hover:scale-105 rounded-lg"
            aria-label="Toggle language"
          >
            {language === 'en' ? (
              <>
                <svg className="w-6 h-6" viewBox="0 0 36 24">
                  <rect width="36" height="24" fill="#012169"/>
                  <path d="M0 0 L36 24 M36 0 L0 24" stroke="#fff" strokeWidth="4"/>
                  <path d="M0 0 L36 24 M36 0 L0 24" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M18 0 V24 M0 12 H36" stroke="#fff" strokeWidth="6"/>
                  <path d="M18 0 V24 M0 12 H36" stroke="#C8102E" strokeWidth="3.5"/>
                </svg>
                <span className="text-sm font-medium hidden sm:inline">English</span>
              </>
            ) : (
              <>
                <svg className="w-6 h-6" viewBox="0 0 36 24">
                  <rect x="0" y="0" width="9" height="24" fill="#FF0000"/>
                  <rect x="9" y="0" width="27" height="8" fill="#00732F"/>
                  <rect x="9" y="8" width="27" height="8" fill="#FFFFFF"/>
                  <rect x="9" y="16" width="27" height="8" fill="#000000"/>
                </svg>
                <span className="text-sm font-medium hidden sm:inline">العربية</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
