import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        {/* Logo Image */}
        <img
          src="http://hmehdi.com/demos/faucets/images/logo.png"
          alt="Faucets Logo"
          className="mx-auto mb-4 w-32"
        />

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-4 text-xl">
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaEnvelope />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm mb-4">
          <a
            href="mailto:hello@gmail.com"
            className="text-white hover:text-gray-400"
          >
            hello@gmail.com
          </a>
          <span className="mx-2">|</span>
          <span className="text-white">+0012344567</span>
        </div>

        {/* Copyright */}
        <div className="text-xs">
          <p>
            &copy; Faucets 2017. All contents are designed by Faucets. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
