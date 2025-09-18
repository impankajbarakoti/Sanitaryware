// src/components/SpecialProduct.jsx
import React from "react";
import pro1 from '../assets/pro1.jpg'
import pro2 from '../assets/pro2.jpg'
import pro3 from '../assets/pro3.jpg'
import pro4 from '../assets/pro4.jpg'
import pro5 from '../assets/pro5.jpg'
import pro6 from '../assets/pro6.jpg'
import pro7 from '../assets/pro7.jpg'
import pro8 from '../assets/pro8.jpg'
const images = [
  pro1, // faucet
  pro2, // bathroom
 pro3, // towels
 pro4, // bathtub
  pro5, // dark tiles
  pro6, // sink
  pro7, // soap dispenser
 pro8, // headphones on pipe
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
