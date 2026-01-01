import { Link } from 'react-router-dom';

interface CarCardProps {
  id: string;
  name: string;
  subtitle: string;
  dailyPrice: number;
  weeklyPrice: number | null;
  monthlyPrice: number | null;
  image?: string;
  chauffeurAvailable?: boolean;
}

const AED_LOGO = 'https://cdn.mkrentacar.com/wp-content/uploads/2025/03/Untitled_design-removebg-preview.png';

export function CarCard({ id, name, subtitle, dailyPrice, weeklyPrice, monthlyPrice, image, chauffeurAvailable }: CarCardProps) {
  return (
    <Link to={`/car/${id}`} className="block h-full">
      <div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
        <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
          {chauffeurAvailable && (
            <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#D4932A] to-[#B8860B] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
              Chauffeur Available
            </div>
          )}
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="eager"
              fetchpriority="high"
            />
          )}
        </div>

        <div className="p-5 md:p-6 flex-grow flex flex-col">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 group-hover:text-[#D4932A] transition-colors">
            {name} {subtitle}
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Prices are Inclusive of Vat & Deposit Fee
          </p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Daily</p>
              <div className="flex items-center justify-center gap-1">
                <img src={AED_LOGO} alt="AED" className="w-5 h-5 object-contain" loading="eager" />
                <span className="text-white text-lg font-semibold">{dailyPrice.toLocaleString()}</span>
              </div>
            </div>
            <div className="text-center border-x border-neutral-700">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Weekly</p>
              <div className="flex items-center justify-center gap-1">
                {weeklyPrice ? (
                  <>
                    <img src={AED_LOGO} alt="AED" className="w-4 h-4 object-contain" loading="eager" />
                    <span className="text-white text-sm font-medium">{weeklyPrice.toLocaleString()}</span>
                  </>
                ) : (
                  <span className="text-white text-sm font-medium">WhatsApp</span>
                )}
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Monthly</p>
              <div className="flex items-center justify-center gap-1">
                {monthlyPrice ? (
                  <>
                    <img src={AED_LOGO} alt="AED" className="w-4 h-4 object-contain" loading="eager" />
                    <span className="text-white text-sm font-medium">{monthlyPrice.toLocaleString()}</span>
                  </>
                ) : (
                  <span className="text-white text-sm font-medium">WhatsApp</span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-auto">
            <div className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#20bd5a]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </div>

            <div className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white text-gray-900 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gray-100">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call us
            </div>

            <div className="flex items-center justify-center py-2.5 px-3 bg-gradient-to-r from-[#D4932A] to-[#B8860B] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:from-[#E8A830] hover:to-[#D4932A]">
              Book Now
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
