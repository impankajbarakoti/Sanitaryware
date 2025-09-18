import React from "react";

const Map = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase">
          Our Location
        </h2>

        <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9388296973117!2d-73.9489372845921!3d40.66342097933516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25baaa556e255%3A0x501716f2679c14d7!2s661%20Lefferts%20Ave%2C%20Brooklyn%2C%20NY%2011203%2C%20USA!5e0!3m2!1sen!2s!4v1637168983465!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
