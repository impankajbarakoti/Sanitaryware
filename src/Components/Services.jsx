// src/components/Services.jsx
import React from "react";
import one from '../assets/one.jpg'
import two from '../assets/two.png'
import three from '../assets/three.png'
const Services = () => {
  const images = [
    one,
    two,
    three,
  ];

  return (
    <section className="max-w-7xl  bg-[#f9f9f9] mx-auto px-6 py-16 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 uppercase">
        We Provide Flooring Services
      </h2>
      <p className="text-sm tracking-widest text-gray-500 uppercase mb-10">
        To many clients like government, homes and offices
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md group"
          >
            <img
              src={img}
              alt={`Service ${index + 1}`}
              className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
