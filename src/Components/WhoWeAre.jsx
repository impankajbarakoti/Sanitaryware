// src/components/WhoWeAre.jsx
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold tracking-wide text-gray-800 uppercase mb-2">
          Who We Are
        </h2>
        <p className="text-sm tracking-widest text-gray-500 uppercase mb-6">
          To many clients like government, homes and offices
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          We have the{" "}
          <span className="text-gray-900 font-bold">Right Products</span> to fit
          your needs and <br />
          <span className="text-gray-900 font-bold">Budget Purchase</span> -
          Decorators.
        </h3>

        <p className="text-gray-600 leading-relaxed mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="bg-[#0d1b2a] text-white px-6 py-3 uppercase tracking-wide font-semibold hover:bg-gray-900 transition">
            View Our Services
          </button>
          <button className="bg-[#0d1b2a] text-white px-6 py-3 uppercase tracking-wide font-semibold hover:bg-gray-900 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="https://images.pexels.com/photos/10461514/pexels-photo-10461514.jpeg"
          alt="Who We Are"
          className="rounded-lg shadow-md h-auto w-[700px]"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
