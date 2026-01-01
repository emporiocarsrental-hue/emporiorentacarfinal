import { useTheme } from '@/contexts/ThemeContext';
import { FileText, Shield, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

export function TermsPage() {
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    {
      title: '1. Rental Agreement',
      content: [
        'By renting a vehicle from Emporio Rent A Car, you agree to comply with all terms and conditions outlined in this agreement.',
        'The rental period begins at the time specified in your booking confirmation and ends at the agreed return time.',
        'Late returns may incur additional charges at our standard hourly or daily rate.',
        'All rental agreements are subject to vehicle availability and approval by Emporio Rent A Car.'
      ]
    },
    {
      title: '2. Driver Requirements',
      content: [
        'Drivers must be at least 21 years old (25 for luxury and sports vehicles).',
        'A valid driver\'s license held for a minimum of 1 year is required.',
        'International visitors must present an International Driving Permit along with their national license.',
        'Only authorized drivers listed on the rental agreement are permitted to operate the vehicle.'
      ]
    },
    {
      title: '3. Insurance and Liability',
      content: [
        'All rentals include comprehensive insurance coverage as mandated by UAE law.',
        'The renter is responsible for any damage deductible as specified in the rental agreement.',
        'Additional insurance options are available for enhanced coverage.',
        'Insurance does not cover damages caused by negligence, reckless driving, or violation of traffic laws.'
      ]
    },
    {
      title: '4. Vehicle Use',
      content: [
        'Vehicles must be used in accordance with UAE traffic laws and regulations.',
        'Smoking, transporting illegal substances, and unauthorized commercial use are strictly prohibited.',
        'The vehicle may not be used for racing, competitions, or any illegal activities.',
        'Vehicles are provided for use within the UAE. Cross-border travel requires prior authorization.'
      ]
    },
    {
      title: '5. Payment Terms',
      content: [
        'Full payment or a valid credit card authorization is required before vehicle delivery.',
        'A security deposit will be held on your credit card and released upon satisfactory vehicle return.',
        'All prices are in UAE Dirhams (AED) and include applicable taxes unless otherwise stated.',
        'Additional charges may apply for extra services, late returns, traffic fines, or damages.'
      ]
    },
    {
      title: '6. Fuel Policy',
      content: [
        'Vehicles are provided with a full tank of fuel.',
        'Renters must return the vehicle with a full tank or pay for refueling service plus an administrative fee.',
        'Prepaid fuel options are available at the time of rental.',
        'Only the recommended fuel type as specified for each vehicle should be used.'
      ]
    },
    {
      title: '7. Maintenance and Breakdowns',
      content: [
        '24/7 roadside assistance is provided for all mechanical breakdowns.',
        'Renters must not attempt repairs without authorization from Emporio Rent A Car.',
        'Regular maintenance is the responsibility of Emporio Rent A Car during the rental period.',
        'Report any issues or warning lights immediately to avoid liability for damage.'
      ]
    },
    {
      title: '8. Cancellation Policy',
      content: [
        'Free cancellation is available up to 48 hours before the scheduled pickup time.',
        'Cancellations within 48 hours of pickup time may incur a cancellation fee.',
        'No-shows will be charged the full rental amount.',
        'Modifications to existing bookings are subject to availability and may incur additional charges.'
      ]
    },
    {
      title: '9. Traffic Violations and Fines',
      content: [
        'Renters are responsible for all traffic violations and fines incurred during the rental period.',
        'An administrative fee will be charged for processing each traffic fine.',
        'Serious violations may result in immediate termination of the rental agreement.',
        'Rental extensions may be denied if outstanding violations are detected.'
      ]
    },
    {
      title: '10. Accident Procedures',
      content: [
        'In case of an accident, immediately contact the police and Emporio Rent A Car.',
        'Obtain a police report for all accidents, regardless of severity.',
        'Do not admit fault or make any commitments at the accident scene.',
        'Failure to obtain a police report may result in full liability for damages.'
      ]
    },
    {
      title: '11. Personal Data Protection',
      content: [
        'Emporio Rent A Car collects and processes personal data in accordance with UAE data protection laws.',
        'Your information will be used solely for rental services and related communications.',
        'We do not sell or share your personal information with third parties without consent.',
        'You have the right to request access to, correction of, or deletion of your personal data.'
      ]
    },
    {
      title: '12. Limitation of Liability',
      content: [
        'Emporio Rent A Car is not liable for personal belongings left in rental vehicles.',
        'We are not responsible for delays or failures due to circumstances beyond our control.',
        'Our liability is limited to direct damages and excludes indirect or consequential losses.',
        'The maximum liability is limited to the total rental amount paid.'
      ]
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

        <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors duration-300"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.08) 100%)',
                borderColor: theme === 'dark' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(212, 175, 55, 0.3)'
              }}
            >
              <FileText className="w-4 h-4 text-[#d4af37]" />
              <span className={`text-sm font-light tracking-wider ${
                theme === 'dark' ? 'text-[#d4af37]' : 'text-[#b8941f]'
              }`}>
                LEGAL TERMS
              </span>
            </div>

            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6 transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Terms of{' '}
              <span className="font-light bg-gradient-to-r from-[#d4af37] via-[#f4d97f] to-[#d4af37] bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <div className="w-32 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <p className={`text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto transition-colors duration-300 ${
              theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
            }`}>
              Last updated: December 2024
            </p>
          </div>

          <div className={`rounded-2xl p-8 mb-12 ${
            theme === 'dark'
              ? 'bg-blue-500/10 border border-blue-500/20'
              : 'bg-blue-50 border border-blue-200'
          }`}>
            <div className="flex gap-4">
              <AlertCircle className={`w-6 h-6 flex-shrink-0 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <div>
                <h3 className={`text-lg font-light mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Important Notice
                </h3>
                <p className={`font-light leading-relaxed ${
                  theme === 'dark' ? 'text-blue-200' : 'text-blue-900'
                }`}>
                  Please read these terms and conditions carefully before renting any vehicle from Emporio Rent A Car. By confirming your rental, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 mb-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-neutral-900/50 border border-neutral-800/50'
                    : 'bg-white border border-gray-200/50 shadow-lg'
                } backdrop-blur-sm`}
                style={{
                  animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`
                }}
              >
                <h2 className={`text-2xl font-light mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`font-light leading-relaxed pl-6 relative ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
                      }`}
                    >
                      <span className={`absolute left-0 top-2 w-2 h-2 rounded-full ${
                        theme === 'dark' ? 'bg-[#d4af37]' : 'bg-[#b8941f]'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`rounded-2xl p-8 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50'
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg'
          } backdrop-blur-sm`}>
            <div className="flex gap-4 mb-6">
              <Shield className={`w-8 h-8 flex-shrink-0 ${
                theme === 'dark' ? 'text-[#d4af37]' : 'text-[#b8941f]'
              }`} />
              <div>
                <h3 className={`text-2xl font-light mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Contact Information
                </h3>
                <p className={`font-light leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
                }`}>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className={`space-y-2 font-light ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
                }`}>
                  <p>Email: emporiocarsrental@gmail.com</p>
                  <p>Phone: +971 50 300 8311 / +971 50 322 3525</p>
                  <p>Address: Dubai Clock Tower Roundabout, Abu Baker Al Siddique St., Dubai, UAE</p>
                </div>
              </div>
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
