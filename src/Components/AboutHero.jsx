import React from "react";
import titlebg from '../assets/titlebg.jpg' 
const AboutHero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[300px] flex items-center"
      style={{
        backgroundImage:
          `url(${titlebg})`, 
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center w-full text-white">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">ABOUT US</h1>
          <p className="uppercase tracking-widest text-sm">
            List in order by numaric numbers
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-black tracking-wide uppercase">
          Home <span className="mx-1 text-black ">»</span> About Us
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
