import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useTheme } from "@/contexts/ThemeContext";

export function HeroScrollDemo() {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col overflow-hidden ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-black via-neutral-950 to-neutral-900'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className={`text-4xl font-light ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Experience Dubai's Finest <br />
              <span className="text-4xl md:text-[6rem] font-light mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Luxury Fleet
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Emporio Rent A Car luxury fleet showcase"
          className="mx-auto rounded-2xl object-cover h-full object-center w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
