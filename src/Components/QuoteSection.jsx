// src/components/QuoteSection.jsx
import React from "react";

const QuoteSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-16 px-6"
      style={{
        backgroundImage:
          "url('http://hmehdi.com/demos/faucets/images/bg/quote-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <div>
          <p className="text-sm text-gray-200 uppercase tracking-widest mb-2">
            Are you impressed with our product?
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-white uppercase">
            Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer
            hendrerit
          </h2>
        </div>

        <div>
          <button className="bg-white text-gray-900 px-6 py-3 font-semibold uppercase tracking-wider shadow hover:bg-gray-200 transition">
            Get a Quote Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
