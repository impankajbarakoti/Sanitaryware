// src/components/SimpleSteps.jsx
import React from "react";
import { Users, Eye, Truck, Settings } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Consultation",
    desc: "Phasellus fringilla suscipit risus nec eleifend. Pellentesque eu quam sem, ac malesuada leo sem quam pellente.",
  },
  {
    icon: Eye,
    title: "Design",
    desc: "Phasellus fringilla suscipit risus nec eleifend. Pellentesque eu quam sem, ac malesuada leo sem quam pellente.",
  },
  {
    icon: Truck,
    title: "Delivery",
    desc: "Phasellus fringilla suscipit risus nec eleifend. Pellentesque eu quam sem, ac malesuada leo sem quam pellente.",
  },
  {
    icon: Settings,
    title: "Customization",
    desc: "Phasellus fringilla suscipit risus nec eleifend. Pellentesque eu quam sem, ac malesuada leo sem quam pellente.",
  },
];

const SimpleSteps = () => {
  return (
    <section className="max-w-7xl bg-[#f9f9f9] mx-auto px-6 py-16 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase mb-2">
        Simple Steps
      </h2>
      <p className="text-sm tracking-widest text-gray-500 uppercase mb-12">
        Steps for your dream kitchen or bathroom
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <step.icon
              size={56}
              className="text-gray-700 transition-transform duration-300 group-hover:scale-125 group-hover:text-blue-600"
            />
            <h3 className="mt-4 font-semibold text-gray-900 uppercase group-hover:text-blue-600 transition-colors duration-300">
              {step.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimpleSteps;
