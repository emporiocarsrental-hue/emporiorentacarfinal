import { Shield, Clock, Star, Phone, Truck, CreditCard, Sparkles } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  theme: 'light' | 'dark';
}

const features: Feature[] = [
  {
    icon: Shield,
    title: 'Premium Insurance',
    description: 'Comprehensive coverage with zero-deposit options for qualified renters.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service and roadside assistance throughout your journey.'
  },
  {
    icon: Star,
    title: 'Pristine Condition',
    description: 'Every vehicle is meticulously maintained and detailed before delivery.'
  },
  {
    icon: Phone,
    title: 'Instant Booking',
    description: 'Reserve your dream car in minutes with our streamlined booking process.'
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Complimentary delivery and pickup within designated service areas.'
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'Multiple payment options including major credit cards and digital wallets.'
  }
];

export function WhyChooseUs({ theme }: WhyChooseUsProps) {
  return (
    <section className={`relative w-full py-20 md:py-32 overflow-hidden transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-neutral-950 via-black to-neutral-950'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-[#d4af37]/10' : 'bg-[#d4af37]/20'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/20'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors duration-300"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)'
                : 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.08) 100%)',
              borderColor: theme === 'dark' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.3)'
            }}
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className={`text-sm font-light tracking-wider ${
              theme === 'dark' ? 'text-[#d4af37]' : 'text-[#b8941f]'
            }`}>
              EXCELLENCE IN EVERY DETAIL
            </span>
          </div>

          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Why Choose{' '}
            <span className="font-light bg-gradient-to-r from-[#d4af37] via-[#f4d97f] to-[#d4af37] bg-clip-text text-transparent">
              Emporio RAC
            </span>
          </h2>

          <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <p className={`text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
          }`}>
            Experience unparalleled luxury and service with our premium fleet.
            Every journey is crafted to exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div
                  className={`relative h-full rounded-2xl p-8 transition-all duration-500 overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-neutral-800/50'
                      : 'bg-white/50 border border-gray-200/50 shadow-lg'
                  } backdrop-blur-sm hover:scale-105 hover:-translate-y-1`}
                  style={{
                    userSelect: 'text',
                    pointerEvents: 'auto'
                  }}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-[#d4af37]/5 via-transparent to-blue-500/5'
                      : 'bg-gradient-to-br from-[#d4af37]/10 via-transparent to-blue-500/10'
                  }`} />

                  <div className="relative z-10 flex flex-col gap-5">
                    <div className="relative w-fit">
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

                    <div>
                      <h3 className={`text-2xl font-light tracking-wide mb-3 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>

                      <p className={`text-base font-light leading-relaxed transition-colors duration-300 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>

                    <div className={`w-12 h-0.5 rounded-full transition-all duration-500 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-[#d4af37]/50 to-transparent group-hover:w-24 group-hover:from-[#d4af37]'
                        : 'bg-gradient-to-r from-[#b8941f]/50 to-transparent group-hover:w-24 group-hover:from-[#b8941f]'
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
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
    </section>
  );
}
