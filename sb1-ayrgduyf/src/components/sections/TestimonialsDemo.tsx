import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';

const testimonials = [
  {
    name: 'Khalid Al-Rashid',
    username: '@khalid_uae',
    body: 'The best luxury car rental in Dubai! Professional service and pristine vehicles.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    country: '🇦🇪 UAE',
  },
  {
    name: 'Sarah Williams',
    username: '@sarah',
    body: 'Amazing experience! The Dodge Charger was in perfect condition.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: '🇬🇧 UK',
  },
  {
    name: 'Ahmed Hassan',
    username: '@ahmed_dxb',
    body: 'Exceptional customer service and seamless booking process!',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: '🇦🇪 UAE',
  },
  {
    name: 'Emily Chen',
    username: '@emily',
    body: 'Rented for a week, absolutely loved the Mercedes GLA35 AMG!',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: '🇨🇦 Canada',
  },
  {
    name: 'Mohammed Al-Mansoori',
    username: '@mohammed',
    body: 'Best rates in Dubai with premium vehicles. Highly recommend!',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: '🇦🇪 UAE',
  },
  {
    name: 'Lucas Dubois',
    username: '@luc',
    body: 'Very professional team and smooth rental experience.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: '🇫🇷 France',
  },
  {
    name: 'Yuki Tanaka',
    username: '@yuki',
    body: 'Impressive fleet and excellent chauffeur service!',
    img: 'https://randomuser.me/api/portraits/men/85.jpg',
    country: '🇯🇵 Japan',
  },
  {
    name: 'Fatima Al-Zahra',
    username: '@fatima',
    body: 'Love the 24/7 support and free delivery service.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: '🇦🇪 UAE',
  },
  {
    name: 'Carlos Martinez',
    username: '@carlos',
    body: 'Perfect for business trips. The Camaro was incredible!',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    country: '🇪🇸 Spain',
  },
];

interface TestimonialCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
  country: string;
  theme: 'light' | 'dark';
}

function TestimonialCard({ img, name, username, body, country, theme }: TestimonialCardProps) {
  return (
    <Card className={`w-50 ${theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-white'}`}>
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className={`text-sm font-medium flex items-center gap-1 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className={`text-xs font-medium ${
              theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
            }`}>{username}</p>
          </div>
        </div>
        <blockquote className={`mt-3 text-sm ${
          theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'
        }`}>{body}</blockquote>
      </CardContent>
    </Card>
  );
}

interface TestimonialsDemoProps {
  theme: 'light' | 'dark';
}

export default function TestimonialsDemo({ theme }: TestimonialsDemoProps) {
  return (
    <section className={`relative w-full py-24 md:py-32 lg:py-40 transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-black via-neutral-950 to-neutral-900'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 transition-colors duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            WHAT OUR <span className="text-[#d4af37]">CLIENTS SAY</span>
          </h2>
          <p className={`text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto transition-colors duration-300 ${
            theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'
          }`}>
            Trusted by thousands of clients across Dubai and the UAE.
          </p>
        </div>

        <div className={`border rounded-lg relative flex h-[32rem] md:h-[36rem] lg:h-[40rem] w-full max-w-[1200px] mx-auto flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px] ${
          theme === 'dark' ? 'border-neutral-800' : 'border-gray-300'
        }`}>
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
            }}
          >
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} theme={theme} />
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} theme={theme} />
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} theme={theme} />
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} theme={theme} />
              ))}
            </Marquee>
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-1/4 ${
              theme === 'dark' ? 'bg-gradient-to-b from-neutral-950' : 'bg-gradient-to-b from-white'
            }`}></div>
            <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-1/4 ${
              theme === 'dark' ? 'bg-gradient-to-t from-neutral-950' : 'bg-gradient-to-t from-white'
            }`}></div>
            <div className={`pointer-events-none absolute inset-y-0 left-0 w-1/4 ${
              theme === 'dark' ? 'bg-gradient-to-r from-neutral-950' : 'bg-gradient-to-r from-white'
            }`}></div>
            <div className={`pointer-events-none absolute inset-y-0 right-0 w-1/4 ${
              theme === 'dark' ? 'bg-gradient-to-l from-neutral-950' : 'bg-gradient-to-l from-white'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
