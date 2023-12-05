import React from 'react';
import Image from 'next/image'; 
import profile from "../public/images/profilepic.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[2px] border-indigo-400 p-2 object-cover"
          src={profile}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white-400 shadow-lg shadow-grey-700">Saham Ahmed</h1>
        

        <h3 className="text-2xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide transition duration-1000 ease-in-out hover:text-yellow-500 hover:bg-gradient-to-r hover:from-yellow-300 hover:via-green-300 hover:to-blue-300 cursor-pointer">
  Full Stack Developer
</h3>

        <p className="text-base tracking-wide text-center md:text-left">
        
Starting from modest origins and reaching the pinnacle of success, my journey exemplifies resilience, strategic acumen, and an enduring faith in the transformative potential of entrepreneurship. I embrace challenges as stepping stones for learning, personal development, and motivating others. Outside the corporate realm, my commitment to philanthropy drives me to utilize resources for tackling urgent global problems and uplifting communities.
        </p>
      </div>
    </div>
  );
};
export default Banner;