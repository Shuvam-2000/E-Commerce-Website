import assets from "../assets/assets";

const Hero = () => {
    return (
      <div className="flex flex-col sm:flex-row border border-gray-300 rounded-md sm:font-mono font-serif"> 
        {/* Hero left side */}
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 py-10 sm:py-0 text-center sm:text-left bg-slate-100">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm md:text-base">Shop Smarter. <span className="text-[#f21c1c]">Live Better.</span></p>
              <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            </div>
            <h1 className="text-3xl sm:py-3 lg-text-4xl leading-relaxed">Our <span className="text-[#f21c1c]">Latest Collections</span></h1>
            <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-[#f21c1c]"></p>
                <p className="font-semibold text-sm md:text-base">Shop Now</p>
                <p className="w-8 md:w-11 h-[2px] bg-[#f21c1c]"></p>
            </div>
          </div>
        </div>
        {/* Hero right side */}
        <img src={assets.hero_img} alt="hero-image" className="w-full sm:w-1/2 object-cover"/>
      </div>
    );
  }
  
  export default Hero;
  