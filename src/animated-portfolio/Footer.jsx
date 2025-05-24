import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-8 py-8 bg-black text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-4">
        {/* Name or Logo */}
        <h1 className="text-lg sm:text-xl tracking-wider font-semibold text-[#a855f7]">
          © 2025 Sklassics
        </h1>

        {/* Description or tagline */}
        <p className="text-sm sm:text-base text-white/60">
          Built with React, TailwindCSS & Framer Motion
        </p>

        {/* Contact or Social */}
        <div className="flex justify-center gap-6 mt-2">
          <a
            href="mailto:your@email.com"
            className="text-white/50 hover:text-[#a855f7] transition duration-300 text-sm"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[#a855f7] transition duration-300 text-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[#a855f7] transition duration-300 text-sm"
          >
            LinkedIn
          </a>
        </div>

        {/* Bottom line */}
        <div className="text-xs text-white/40 mt-4">
          Made with ❤️ by You — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
