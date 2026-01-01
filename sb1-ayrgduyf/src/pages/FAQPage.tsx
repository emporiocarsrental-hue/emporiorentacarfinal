import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What documents do I need to rent a car?',
    answer: 'You will need a valid driver\'s license, passport or Emirates ID, and a credit card in your name. International visitors may need an International Driving Permit depending on their country of origin.',
    category: 'Rental Requirements'
  },
  {
    question: 'What is the minimum age requirement?',
    answer: 'The minimum age to rent a car is 21 years old. However, for luxury and sports cars, the minimum age is 25 years. An additional young driver surcharge may apply for drivers under 25.',
    category: 'Rental Requirements'
  },
  {
    question: 'Is insurance included in the rental price?',
    answer: 'Yes, all our rentals include comprehensive insurance coverage. We offer additional coverage options for enhanced protection, including zero-deposit insurance for qualified renters.',
    category: 'Insurance & Protection'
  },
  {
    question: 'What happens if I damage the car?',
    answer: 'Our insurance covers most damages. You will be responsible for the deductible amount specified in your rental agreement. We recommend purchasing our enhanced coverage for complete peace of mind.',
    category: 'Insurance & Protection'
  },
  {
    question: 'Can I extend my rental period?',
    answer: 'Yes, you can extend your rental period subject to vehicle availability. Please contact us at least 24 hours before your scheduled return date to arrange an extension.',
    category: 'Booking & Payments'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and digital wallets. A valid credit card in the driver\'s name is required for the security deposit.',
    category: 'Booking & Payments'
  },
  {
    question: 'Do you offer delivery and pickup services?',
    answer: 'Yes, we offer complimentary delivery and pickup within designated service areas in Dubai. For locations outside our standard service area, a delivery fee may apply.',
    category: 'Services'
  },
  {
    question: 'Is chauffeur service available?',
    answer: 'Yes, professional chauffeur services are available for select vehicles. Our experienced drivers are licensed, professional, and familiar with all areas of Dubai and the UAE.',
    category: 'Services'
  },
  {
    question: 'What is your fuel policy?',
    answer: 'All vehicles are provided with a full tank of fuel. We operate on a full-to-full policy, meaning you should return the vehicle with a full tank. Alternatively, we offer a prepaid fuel option.',
    category: 'Policies'
  },
  {
    question: 'Can I drive the car outside Dubai?',
    answer: 'Yes, you can drive to other Emirates within the UAE. If you plan to drive to Oman or other GCC countries, please inform us in advance as additional insurance and documentation may be required.',
    category: 'Policies'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Free cancellation is available up to 48 hours before your scheduled pickup time. Cancellations made within 48 hours may incur a cancellation fee. Please refer to your booking confirmation for specific terms.',
    category: 'Policies'
  },
  {
    question: 'Do you provide 24/7 roadside assistance?',
    answer: 'Yes, we provide round-the-clock roadside assistance throughout your rental period. Our support team is available 24/7 to help with any issues including breakdowns, accidents, or emergencies.',
    category: 'Support'
  }
];

export function FAQPage() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

        <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors duration-300"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.08) 100%)',
                borderColor: theme === 'dark' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.3)'
              }}
            >
              <HelpCircle className="w-4 h-4 text-[#d4af37]" />
              <span className={`text-sm font-light tracking-wider ${
                theme === 'dark' ? 'text-[#d4af37]' : 'text-[#b8941f]'
              }`}>
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              How Can We{' '}
              <span className="font-light bg-gradient-to-r from-[#d4af37] via-[#f4d97f] to-[#d4af37] bg-clip-text text-transparent">
                Help?
              </span>
            </h1>

            <div className="w-32 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
            }`}>
              Find answers to common questions about our services
            </p>
          </div>

          <div className="mb-12">
            <div className="relative mb-6">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-gray-400'
              }`} />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-2xl font-light transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-neutral-900/50 text-white placeholder-neutral-500 border border-neutral-800 focus:border-[#d4af37]'
                    : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-[#b8941f]'
                } outline-none`}
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-light tracking-wide transition-all duration-300 ${
                    selectedCategory === category
                      ? theme === 'dark'
                        ? 'bg-[#d4af37] text-black'
                        : 'bg-[#b8941f] text-white'
                      : theme === 'dark'
                        ? 'bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800/50 border border-neutral-800'
                        : 'bg-white/50 text-gray-700 hover:bg-white border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-neutral-900/50 border border-neutral-800/50'
                      : 'bg-white border border-gray-200/50 shadow-sm'
                  } backdrop-blur-sm`}
                  style={{
                    animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full p-6 text-left flex items-center justify-between transition-colors duration-300 ${
                      isOpen
                        ? theme === 'dark'
                          ? 'bg-neutral-900/80'
                          : 'bg-gray-50'
                        : ''
                    }`}
                  >
                    <div className="flex-1 pr-4">
                      <div className={`text-xs font-light tracking-wider mb-2 ${
                        theme === 'dark' ? 'text-[#d4af37]' : 'text-[#b8941f]'
                      }`}>
                        {faq.category}
                      </div>
                      <h3 className={`text-lg md:text-xl font-light transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 transition-all duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      } ${
                        theme === 'dark' ? 'text-[#d4af37]' : 'text-[#b8941f]'
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className={`p-6 pt-0 ${
                      theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'
                    } font-light leading-relaxed`}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-20">
              <p className={`text-xl font-light ${
                theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
              }`}>
                No questions found matching your search
              </p>
            </div>
          )}

          <div className={`mt-16 p-8 rounded-2xl text-center ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50'
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg'
          } backdrop-blur-sm`}>
            <h3 className={`text-2xl font-light mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Still have questions?
            </h3>
            <p className={`mb-6 font-light ${
              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}>
              Our customer support team is available 24/7 to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+971503008311"
                className={`px-8 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#d4af37] text-black hover:bg-[#c9a332]'
                    : 'bg-[#b8941f] text-white hover:bg-[#a68519]'
                }`}
              >
                Call Us: +971 50 300 8311
              </a>
              <a
                href="mailto:emporiocarsrental@gmail.com"
                className={`px-8 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                    : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
