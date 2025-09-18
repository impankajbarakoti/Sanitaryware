import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto  lg:px-14 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          <div className="space-y-4 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-500" />
              <span>661 Lefferts, NY 11203, USA</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-500" />
              <span>hello@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-500" />
              <span>+0012344567</span>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
            Contact
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-300 focus:outline-none py-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border-b border-gray-300 focus:outline-none py-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border-b border-gray-300 focus:outline-none py-2 md:col-span-2"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border-b border-gray-300 focus:outline-none py-2"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            ></textarea>

            <button
              type="submit"
              className="bg-gray-900 text-white uppercase px-6 py-3 tracking-wide hover:bg-gray-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
