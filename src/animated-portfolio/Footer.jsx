import React from "react";
import { FaXTwitter, FaDev, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Social */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-purple-500 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-purple-500 animate-pulse" />
            </div>
            <span className="text-sm">© Cruip.com - All rights reserved.</span>
          </div>
          <div className="flex gap-4 text-purple-400 text-xl mt-4">
            <FaXTwitter className="hover:text-purple-300 cursor-pointer" />
            <FaDev className="hover:text-purple-300 cursor-pointer" />
            <FaGithub className="hover:text-purple-300 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-2">Products</h3>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing & Plans</li>
              <li>Changelog</li>
              <li>Our method</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Diversity & Inclusion</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Financial statements</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>Community</li>
              <li>Terms of service</li>
              <li>Report a vulnerability</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Legals</h3>
            <ul className="space-y-1">
              <li>Refund policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>Brand Kit</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
