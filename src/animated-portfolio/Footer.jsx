import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0D17] text-white px-6 py-16 font-poppins">
      {/* Decorative Big Dots Top Right */}
      <div className="absolute top-0 right-0 z-10 w-[180px] h-[180px] pointer-events-none flex flex-col items-end justify-start">
        <div className="w-[120px] h-[120px] mt-5 mr-0 rounded-full bg-[#e866ff] opacity-85"></div>
      </div>

      {/* Heading Section with fade-in animation */}
      <div
        className="text-3xl sm:text-4xl font-bold leading-tight z-20 relative opacity-0 animate-fadeIn"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        Where talent meets <br />
        <span className="inline-block relative">
          opportunity
          <span className="absolute -top-2 -right-4 w-3 h-3 bg-yellow-400 rounded-full"></span>
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-12 animate-fadeInUp">
        {/* Services Section */}
        <section>
          <h4 className="text-violet-400 pl-50 text-lg font-bold mb-6 tracking-wide">
            OUR SERVICES
          </h4>
          <ul className="text-slate-200 text-lg font-semibold space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-violet-400 rounded-full inline-block"></span>
              IT Training & Placement Programs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-violet-400 rounded-full inline-block"></span>
              Professional IT Services
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-violet-400 rounded-full inline-block"></span>
              Travel Application Services
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-violet-400 rounded-full inline-block"></span>
              Real Estate Platform Solutions
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-violet-400 rounded-full inline-block"></span>
              Online & offline Tutoring
            </li>
          </ul>
        </section>

        {/* Domains Section */}
        <section className="animate-fadeInUp animation-delay-300">
          <h4 className="text-violet-400 text-lg pl-35 font-bold mb-6 tracking-wide">
            OUR DOMAINS
          </h4>
          <ul className="text-slate-200 text-lg font-semibold space-y-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              sklassics.com
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              sklassicstech.com
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              sklassicsacademy.com
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              sklassics-lms.com
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              sklassics-ai.com
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              sklassicstutor.com
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              sklassics-quiz.com
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              hanumancars.com
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
              vlrws.com
            </li>
          </ul>
        </section>

        {/* Contact Info */}

        {/* CTA Cards + Icon */}
        <div className="flex flex-col gap-6 ">
          {/* <div className="border border-white rounded-2xl p-6 hover:transform hover:scale-[1.03] hover:-translate-x-3 hover:translate-y-3 hover:shadow-[0_0_0_0_#ffe066] transition-all ">
            <h3 className="mb-2 text-lg font-semibold">I want to apply</h3>
            <p className="text-slate-400 text-sm">Find your next finance role</p>
          </div>
          <div className="border border-white rounded-2xl p-6 hover:transform hover:scale-[1.03] hover:-translate-x-3 hover:translate-y-3 hover:shadow-[0_0_0_0_#ffe066] transition-all">
            <h3 className="mb-2 text-lg font-semibold">I want to hire</h3>
            <p className="text-slate-400 text-sm">Find your perfect candidate</p>
          </div> */}

          {/* Optional Elementor-style icon wrapper */}
          <div className="flex items-center justify-center w-full">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              {/* Insert SVG icon here */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row gap-4 justify-between text-sm text-slate-400">
        <div className="flex flex-wrap gap-4">
          <span>© 2025 Sklassics Technologies</span>
          <span>Privacy Policy</span>
        </div>
        <div className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-semibold">
          +91 9392732341
        </div>
        <div className="text-xs">Web Design by Sklassics</div>
      </div>

      {/* Fixed Phone Button */}
      {/* <div className="fixed bottom-8 right-8 z-[9999] bg-white text-black px-7 py-3 rounded-full text-[1.15rem] font-bold shadow-lg cursor-pointer hover:bg-slate-200 transition-colors">
        +91 900000000
      </div> */}
    </footer>
  );
};

export default Footer;
