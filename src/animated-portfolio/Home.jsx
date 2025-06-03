import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import AboutMe from './AboutMe';
import Profile from './Profile';
import Projects from './Projects';
import ContactPHX9000 from './Contact';
import DynamicTimestamp from '../components/ui/DynamicTimeStamp';
import WorkShowcase from "../animated-portfolio/WorkShowcase";
import ProjectSections from "../animated-portfolio/ProjectSections";
import Footer from '../animated-portfolio/Footer';

// --- RadialMenu component directly in this file ---
const menuItems = [
  { label: "Profile", angle: 0, href: "#profile" },
  { label: "Work", angle: 90, href: "#work" },
  { label: "Projects", angle: 180, href: "#projects" },
  { label: "About", angle: 270, href: "#about" },
];

const RadialMenu = () => {
  const radius = 120;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href, e) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -40; // adjust if you have a fixed header
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <div className="fixed top-4 right-4 z-[100] text-white">
      {/* Menu button */}
      <motion.div
        className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
        animate={{ rotate: [0, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full border border-[#a855f7] bg-[#2a0a4f]/70 text-xs sm:text-sm font-bold shadow-[0_0_60px_rgba(168,85,247,0.4)] backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-all"
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </motion.div>

      {/* Menu Items and Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-[#0f0f24]/80 backdrop-blur-sm z-[40]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Radial Menu Circle */}
            <motion.div
              className="fixed top-8 right-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-[#a855f7] z-[50]"
              style={{ boxShadow: "0 0 200px 50px rgba(128,0,255,0.2)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-30 rounded-full animate-spin-slow pointer-events-none" />
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(139, 92, 246, 0.4)",
                  background:
                    "conic-gradient(from 0deg, rgba(139, 92, 246, 0.3), transparent 60%)",
                  transform: "scale(1.02102) rotate(50.904deg)",
                }}
              >
                <div
                  className="absolute inset-[15%] rounded-full pointer-events-none"
                  style={{
                    border: "1px solid rgba(139, 92, 246, 0.4)",
                    background:
                      "conic-gradient(from 0deg, rgba(139, 92, 246, 0.3), transparent 60%)",
                    transform: "scale(1.01705) rotate(52.56deg)",
                  }}
                />
              </div>

              {/* Menu Items */}
              {menuItems.map((item) => {
                const angleRad = (item.angle * Math.PI) / 180;
                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

                return (
                  <div
                    key={item.label}
                    className="absolute z-[60]"
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% - ${y}px - 40px)`,
                    }}
                  >
                    <motion.div className="relative w-[80px] h-[80px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center">
                      <motion.a
                        href={item.href}
                        className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full border border-[#a855f7] bg-[#2a0a4f]/70 text-white font-bold text-xs sm:text-md shadow-[0_0_60px_rgba(168,85,247,0.4)] backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-all cursor-pointer z-[70]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={(e) => handleClick(item.href, e)}
                        tabIndex={isOpen ? 0 : -1}
                        aria-label={item.label}
                      >
                        {item.label}
                      </motion.a>
                    </motion.div>
                  </div>
                );
              })}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.25)_0%,_transparent_70%)] pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
// --- End RadialMenu ---

const sectionLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

const Navbar = () => {}


 
const Home = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="home" className="relative w-full min-h-screen bg-black  overflow-hidden ">
        <Navbar />
        {/* Rotating Globe */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute inset-0 flex justify-center items-center z-0"
        >
          <img
            src="https://matthewparrilla.com/static/img/earth_at_night.gif"
            alt="Globe"
            className="w-[900px] h-[900px] object-contain opacity-150"
          />
        </motion.div>

        {/* RadialMenu in the same position */}
        <RadialMenu />

        {/* Center Titles */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center space-y-1 sm:space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-7xl md:text-7xl lg:text-9xl font-bold"
          >
            ACCELARATING
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl sm:text-7xl md:text-7xl lg:text-9xl font-bold"
          >
            DIGITAL
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-3xl sm:text-7xl md:text-7xl lg:text-9xl font-bold text-purple-500"
          >
            GROWTH
          </motion.h1>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-md md:text-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>SCROLL DOWN</span>
        </motion.div>
      </div>
      <div id="profile" className="scroll-mt-20">
        <Profile />
      </div>

      <div id="work" className="scroll-mt-20">
        <WorkShowcase />
      </div>

      <div id="projects" className="scroll-mt-80">
        <ProjectSections />
      </div>

      <div id="about" className="scroll-mt-20">
        <AboutMe />
      </div>
   

      {/* Publications Section */}
      <div className="min-h-screen bg-black text-white font-sans px-6 py-10 relative">
        <div className="pt-14 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 shadow-inner mt-12">
          {/* Accent Lines */}
          <span className="absolute top-0 left-0 h-4 w-0.5 bg-purple-500 rounded-sm" />
          <span className="absolute top-0 right-0 h-4 w-0.5 bg-indigo-500 rounded-sm" />
          <span className="absolute bottom-0 left-0 h-4 w-0.5 bg-indigo-500 rounded-sm" />
          <span className="absolute bottom-0 right-0 h-4 w-0.5 bg-purple-500 rounded-sm" />

          <span className="absolute top-0 left-0 w-4 h-0.5 bg-purple-500 rounded-sm" />
          <span className="absolute top-0 right-0 w-4 h-0.5 bg-indigo-500 rounded-sm" />
          <span className="absolute bottom-0 left-0 w-4 h-0.5 bg-indigo-500 rounded-sm" />
          <span className="absolute bottom-0 right-0 w-4 h-0.5 bg-purple-500 rounded-sm" />

          {/* Gradient Accent Lines (fixed className typo) */}
          <div className="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent" />
          <div className="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent" />
          <div><b>Our Services</b></div>
          <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest mb-3">
            <div>• HanumanCar</div>
            <div>
              INITIATE DRIVE
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1"></span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-white mb-6 border-purple-800 pb-1 flex items-center gap-2">
            <span>Premium Car Rentals</span>
            <span className="flex-1 h-px bg-purple-800"></span>
          </h2>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h1 className="text-2xl md:text-3xl font-light text-white mb-3">
              Ride with Confidence:
              <span className="font-normal"> HanumanCar Rental Services</span>
            </h1>

            <p className="text-zinc-400 text-base mb-4">
              We provide reliable and affordable car rental services across your city, 24/7.
            </p>

            <div className="flex items-center text-zinc-500 text-sm mb-6">
              <span>HanumanCar</span>
              <span className="mx-2">•</span>
              <span>2025</span>
            </div>

            <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm px-6 py-2 rounded-full border border-zinc-700">
              <BookOpen size={16} />
              Book Now
            </button>
          </div>

          <div className="text-xs text-zinc-600 mt-6">ACTIVE</div>
          <DynamicTimestamp />
        </div>

        {/* Tutors Section */}
        <div className="relative mt-12 z-10">
          <span className="absolute top-0 left-0 h-4 w-0.5 bg-purple-500 rounded-sm" />
          <span className="absolute top-0 right-0 h-4 w-0.5 bg-indigo-500 rounded-sm" />
          <span className="absolute bottom-0 left-0 h-4 w-0.5 bg-indigo-500 rounded-sm" />
          <span className="absolute bottom-0 right-0 h-4 w-0.5 bg-purple-500 rounded-sm" />

          <span className="absolute top-0 left-0 w-4 h-0.5 bg-purple-500 rounded-sm" />
          <span className="absolute top-0 right-0 w-4 h-0.5 bg-indigo-500 rounded-sm" />
          <span className="absolute bottom-0 left-0 w-4 h-0.5 bg-indigo-500 rounded-sm" />
          <span className="absolute bottom-0 right-0 w-4 h-0.5 bg-purple-500 rounded-sm" />

          <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest mb-3">
            <div>• Tutors</div>
            <div>
              INITIATE EDU-360
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1"></span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-white mb-6 border-purple-800 pb-1 flex items-center gap-2">
            <span>Expert Tutors</span>
            <span className="flex-1 h-px bg-purple-800"></span>
          </h2>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h1 className="text-2xl md:text-3xl font-light text-white mb-3">
              One-on-One Guidance:
              <span className="font-normal"> Learn with the Best Tutors</span>
            </h1>

            <p className="text-zinc-400 text-base mb-4">
              Personalized learning support for students across all grades and subjects.
            </p>

            <div className="flex items-center text-zinc-500 text-sm mb-6">
              <span>EduTeam</span>
              <span className="mx-2">•</span>
              <span>2025</span>
            </div>

            <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm px-6 py-2 rounded-full border border-zinc-700">
              <BookOpen size={16} />
              Get a Tutor
            </button>
          </div>

          <div className="text-xs text-zinc-600 mt-6">ACTIVE</div>
          <DynamicTimestamp />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;