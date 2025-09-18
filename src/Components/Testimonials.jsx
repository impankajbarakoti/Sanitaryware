// src/components/Testimonials.jsx
import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    author: "John Doe",
    company: "Apps Inc.",
  },
  {
    text: "Great service and amazing products. Highly recommend for anyone looking for quality.",
    author: "Sarah Lee",
    company: "Creative Studio",
  },
  {
    text: "Absolutely wonderful experience! Will definitely come back again.",
    author: "Michael Chen",
    company: "TechSoft",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20 text-center text-white"
      style={{
        backgroundImage:
          "url('http://hmehdi.com/demos/faucets/images/bg/testimonial-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 "></div>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-lg font-bold uppercase tracking-wider">
          Lovely Customer
        </h2>
        <p className="text-xs uppercase tracking-wide text-gray-300 mb-6">
          Satisfied Customer Around The World
        </p>

        {/* Quote Icon */}
        <FaQuoteRight className="mx-auto text-4xl text-gray-300 mb-4" />

        {/* Testimonial Content */}
        <p className="text-lg italic text-gray-200 mb-4">
          "{testimonials[activeIndex].text}"
        </p>
        <p className="font-semibold text-sm">
          - {testimonials[activeIndex].author},{" "}
          <span className="font-normal">
            {testimonials[activeIndex].company}
          </span>
        </p>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-white scale-110" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
