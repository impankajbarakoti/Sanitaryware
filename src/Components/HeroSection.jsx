
import hero from '../assets/hero.jpg'
const HeroSection = () => (
  <section
    className="relative w-full min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${hero})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0 bg-black/70"></div>
    <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 py-24 w-full">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6 tracking-wide">
        Welcome To Faucets
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-200 text-center mb-8 max-w-2xl tracking-widest">
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT
      </p>
      <button className="bg-gray-200 text-black px-8 py-3 rounded shadow hover:bg-white transition text-base sm:text-lg font-medium">
        Get Started
      </button>
    </div>
  </section>
);

export default HeroSection;
