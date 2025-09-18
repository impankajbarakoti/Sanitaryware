import React from "react";

const ContactHero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[300px] flex items-center"
      style={{
        backgroundImage:
          "url('http://hmehdi.com/demos/faucets/images/bg/title-bg.jpg')",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center w-full text-white">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="uppercase tracking-widest text-sm">
            List in orderd by numaric numbers
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-black text-sm tracking-wide uppercase">
          Home <span className="mx-1 text-black ">»</span> Conatact us
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
