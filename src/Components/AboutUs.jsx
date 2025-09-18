import React from "react";
import about from '../assets/about.png'
const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto lg:px-10  px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
            About Our Company
          </h2>
          <p className="text-gray-500 mb-6 uppercase tracking-wide text-sm">
            Lorem Ipsum is simply dummy text of the printing
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            We have the{" "}
            <span className="font-bold text-black">right products</span> to fit
            your needs and{" "}
            <span className="font-bold text-black">budget purchase</span> -
            Decorators.
          </h3>

          <p className="text-gray-600 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-600 mb-6">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>

          <button className="bg-gray-900 text-white px-6 py-3 uppercase tracking-wide hover:bg-gray-700 transition">
            View Our Services
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center">
          <img
            src={about}
            alt="About Us"
            className="w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
