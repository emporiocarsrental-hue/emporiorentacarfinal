import { useTheme } from '@/contexts/ThemeContext';
import { Award, Users, Car, Shield, Clock, Star } from 'lucide-react';
import { useEffect } from 'react';

export function AboutPage() {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stats = [
    { icon: Car, value: '15+', label: 'Premium Vehicles' },
    { icon: Users, value: '1000+', label: 'Happy Customers' },
    { icon: Award, value: '5', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Customer Rating' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'We build lasting relationships through transparent practices and consistent service excellence.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Every vehicle, every service, every interaction reflects our commitment to perfection.'
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: '24/7 support ensuring you\'re never alone on your journey, day or night.'
    }
  ];

  return (
    <div className={`min-h-screen pt-[140px] transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-black via-neutral-950 to-black'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      <div className="relative w-full py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-[#d4af37]/20' : 'bg-[#d4af37]/30'
          }`} />
          <div className={`absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-500/30'
          }`} />
        </div>

        <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              About{' '}
              <span className="font-light bg-gradient-to-r from-[#d4af37] via-[#f4d97f] to-[#d4af37] bg-clip-text text-transparent">
                Emporio RAC
              </span>
            </h1>

            <div className="w-32 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
            }`}>
              Redefining luxury car rental with exceptional service and premium vehicles
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-neutral-900/50 border border-neutral-800/50'
                      : 'bg-white border border-gray-200/50 shadow-lg'
                  } backdrop-blur-sm`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-4 ${
                    theme === 'dark' ? 'text-[#d4af37]' : 'text-[#b8941f]'
                  }`} />
                  <div className={`text-3xl md:text-4xl font-light mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm font-light ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 pb-20">
        <div className={`rounded-3xl p-12 mb-20 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50'
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-xl'
        } backdrop-blur-sm`}>
          <h2 className={`text-4xl md:text-5xl font-light mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Our Story
          </h2>
          <div className={`space-y-6 text-lg font-light leading-relaxed ${
            theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
          }`}>
            <p>
              Founded in the heart of Dubai, Emporio Rent A Car emerged from a simple vision: to transform the car rental experience into something extraordinary. We recognized a gap in the market for a service that combines luxury, reliability, and genuine care for every customer.
            </p>
            <p>
              What began as a modest fleet of premium vehicles has evolved into one of Dubai's most trusted names in luxury car rentals. Our journey has been guided by an unwavering commitment to excellence and a deep understanding of what discerning customers truly desire.
            </p>
            <p>
              Today, we take pride in offering more than just vehicles. We provide experiences, memories, and the freedom to explore Dubai in style. Every car in our fleet is meticulously maintained, every service is delivered with precision, and every customer relationship is built on trust and transparency.
            </p>
            <p>
              As we continue to grow, our mission remains unchanged: to exceed expectations at every turn, making luxury accessible and ensuring that every journey with us becomes a cherished memory.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className={`text-4xl md:text-5xl font-light mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                  }}
                >
                  <div
                    className={`relative h-full rounded-2xl p-8 transition-all duration-500 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50'
                        : 'bg-white border border-gray-200/50 shadow-lg'
                    } backdrop-blur-sm hover:scale-105 hover:-translate-y-1`}
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-[#d4af37]/5 via-transparent to-blue-500/5'
                        : 'bg-gradient-to-br from-[#d4af37]/10 via-transparent to-blue-500/10'
                    }`} />

                    <div className="relative z-10">
                      <div className="relative w-fit mb-6">
                        <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl ${
                          theme === 'dark' ? 'bg-[#d4af37]/20' : 'bg-[#d4af37]/30'
                        }`} />
                        <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-[#d4af37] to-[#b8941f]'
                            : 'bg-gradient-to-br from-[#d4af37] to-[#c9a332]'
                        }`}>
                          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3 className={`text-2xl font-light mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {value.title}
                      </h3>

                      <p className={`font-light leading-relaxed ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                      }`}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`rounded-3xl p-12 text-center ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/20'
            : 'bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/30'
        }`}>
          <h2 className={`text-3xl md:text-4xl font-light mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Experience the Difference
          </h2>
          <p className={`text-lg font-light mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
          }`}>
            Whether you're visiting Dubai for business or pleasure, let us elevate your journey with our premium fleet and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/collection"
              className={`px-8 py-4 rounded-full font-light tracking-wide transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#d4af37] text-black hover:bg-[#c9a332]'
                  : 'bg-[#b8941f] text-white hover:bg-[#a68519]'
              }`}
            >
              View Our Collection
            </a>
            <a
              href="tel:+971503008311"
              className={`px-8 py-4 rounded-full font-light tracking-wide transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                  : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
