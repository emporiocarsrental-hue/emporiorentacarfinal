import { Sun, Moon, ArrowUp, Mail, Twitter, Instagram, Facebook, Linkedin, Youtube, Phone, MapPin, Heart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const navigation = {
  services: [
    { name: "Daily Rentals", href: "#daily-rentals" },
    { name: "Weekly Packages", href: "#weekly-packages" },
    { name: "Monthly Leasing", href: "#monthly-leasing" },
  ],
  fleet: [
    { name: "Sports Cars", href: "#sports-cars" },
    { name: "Luxury Sedans", href: "#luxury-sedans" },
    { name: "SUVs", href: "#suvs" },
    { name: "Electric Vehicles", href: "#electric" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "FAQ", href: "#faq" },
    { name: "Terms of Service", href: "#terms" },
  ],
};

const socialLinks = [
  { name: "Email", href: "mailto:emporiocarsrental@gmail.com", icon: Mail },
  { name: "Twitter", href: "https://twitter.com/emporiorac", icon: Twitter },
  { name: "Instagram", href: "https://www.instagram.com/emporiorentacar", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com/emporiorac", icon: Facebook },
  { name: "LinkedIn", href: "https://linkedin.com/company/emporiorac", icon: Linkedin },
  { name: "YouTube", href: "https://youtube.com/@emporiorac", icon: Youtube },
];

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="border-t border-border/20 transition-colors duration-300 relative z-20">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700">
                <span className="text-lg font-bold text-white">ER</span>
              </div>
              <span className="text-xl font-bold">Emporio Rent A Car</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Experience luxury on every journey. Emporio Rent A Car offers premium vehicle rentals with exceptional service, bringing your automotive dreams to life.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+971503008311" className="hover:text-foreground transition-colors">
                    +971 50 300 8311
                  </a>
                  <a href="tel:+971503223525" className="hover:text-foreground transition-colors">
                    +971 50 322 3525
                  </a>
                </div>
              </div>
              <a href="mailto:emporiocarsrental@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>emporiocarsrental@gmail.com</span>
              </a>
              <a
                href="https://share.google/873xNI6F1Jbfw8cRM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-foreground transition-colors cursor-pointer"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Dubai Clock Tower Roundabout, Abu Baker Al Siddique St. Close To Port Saeed</span>
              </a>
              <div className="flex items-center gap-2 mt-2 px-3 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 font-semibold">Available 24/7</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Fleet</h3>
            <ul className="space-y-3">
              {navigation.fleet.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dotted border-border/20 pt-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-30">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl border border-dotted border-border/40 p-2.5 hover:-translate-y-1 transition-transform cursor-pointer relative z-30"
                  aria-label={social.name}
                  style={{ pointerEvents: 'auto' }}
                >
                  <social.icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>

            <div className="flex items-center rounded-full border border-dotted border-border/40 relative z-30" style={{ pointerEvents: 'auto' }}>
              <button
                onClick={() => setTheme("light")}
                className={`rounded-full p-2 mr-3 transition-colors cursor-pointer relative z-30 ${
                  theme === 'light'
                    ? 'bg-foreground text-background'
                    : 'bg-transparent text-foreground hover:bg-muted'
                }`}
                aria-label="Light mode"
                style={{ pointerEvents: 'auto' }}
              >
                <Sun className="h-5 w-5" strokeWidth={1} />
              </button>

              <button
                type="button"
                onClick={handleScrollTop}
                className="hover:text-foreground transition-colors cursor-pointer relative z-30"
                aria-label="Scroll to top"
                style={{ pointerEvents: 'auto' }}
              >
                <ArrowUp className="h-4 w-4" />
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`rounded-full p-2 ml-3 transition-colors cursor-pointer relative z-30 ${
                  theme === 'dark'
                    ? 'bg-foreground text-background'
                    : 'bg-transparent text-foreground hover:bg-muted'
                }`}
                aria-label="Dark mode"
                style={{ pointerEvents: 'auto' }}
              >
                <Moon className="h-5 w-5" strokeWidth={1} />
              </button>
            </div>

            <div className="flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>©</span>
                <span>{new Date().getFullYear()}</span>
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-600 animate-pulse mx-1" fill="currentColor" />
                <span>by</span>
                <a
                  href="https://assistxai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-blue-600 transition-colors"
                >
                  AssistX AI
                </a>
              </div>
              <p className="text-xs">
                All rights reserved. Luxury vehicle rental services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
