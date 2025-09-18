// src/components/SpecialProduct.jsx
import React from "react";

const images = [
  "http://hmehdi.com/demos/faucets/images/product/1.jpg", // faucet
  "http://hmehdi.com/demos/faucets/images/product/2.jpg", // bathroom
  "http://hmehdi.com/demos/faucets/images/product/3.jpg", // towels
  "http://hmehdi.com/demos/faucets/images/product/4.jpg", // bathtub
  "http://hmehdi.com/demos/faucets/images/product/5.jpg", // dark tiles
  "http://hmehdi.com/demos/faucets/images/product/6.jpg", // sink
  "http://hmehdi.com/demos/faucets/images/product/7.jpg", // soap dispenser
  "http://hmehdi.com/demos/faucets/images/product/8.jpg", // headphones on pipe
];

const SpecialProduct = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase mb-2">
        Special Product
      </h2>
      <p className="text-sm tracking-widest text-gray-500 uppercase mb-6">
        Lorem ipsum dolor sit amet, luctus posuere
      </p>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-md shadow-md group"
          >
            <img
              src={img}
              alt={`Special Product ${index + 1}`}
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialProduct;
