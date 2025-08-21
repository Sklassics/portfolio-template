import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example project images array (replace with your real images/titles)
const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    title: "Project 1",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    title: "Project 2",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80",
    title: "Project 3",
  },
];

// Updated radial menu items
const menuItems = [
  { label: "HOME", angle: 0, href: "#home" },
  { label: "PROJECTS", angle: 72, href: "#projects" },
  { label: "PROFILE", angle: 144, href: "#profile" },
  { label: "ABOUT", angle: 216, href: "#about" },
  { label: "WORK", angle: 288, href: "#work" },
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
        // Adjust this value if you have a fixed header
        const yOffset = -40; // px
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        window.location.hash = href;
      }
    }, 200);
  };

  return (
    <div className="fixed top-4  right-5 z-[100] text-white">
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
              className="fixed top-8 right-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-[#a855f7] z-[50] pointer-events-none"
              style={{ boxShadow: "0 0 200px 50px rgba(128,0,255,0.2)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-30 rounded-full animate-spin-slow" />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid rgba(139, 92, 246, 0.4)",
                  background:
                    "conic-gradient(from 0deg, rgba(139, 92, 246, 0.3), transparent 60%)",
                  transform: "scale(1.02102) rotate(50.904deg)",
                }}
              >
                <div
                  className="absolute inset-[15%] rounded-full"
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

// Full-screen Carousel component
function FullScreenCarousel() {
  const [current, setCurrent] = React.useState(0);

  // Auto-advance images every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === projectImages.length - 1 ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? projectImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projectImages.length - 1 ? 0 : c + 1));

  return (
    <section
      id="carousel"
      className="relative w-full h-screen flex items-center  border-fuchsia-600 justify-center bg-[#1a1333] overflow-hidden touch-pan-y"
      style={{ overscrollBehaviorX: "none" }}
    >
      <img
        src={projectImages[current].src}
        alt={projectImages[current].title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 z-0"
        style={{ filter: "brightness(0.7)" }}
      />
      <div className="relative z-10 flex pt-60 flex-col items-center justify-center w-full h-full">
        <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-6 bg-black/40 px-8 py-4 rounded-2xl">
          {projectImages[current].title}
        </h3>
        <div className="flex justify-center gap-3 mt-8">
          {projectImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full border-2 border-purple-400 ${
                idx === current ? "bg-purple-400" : "bg-purple-900"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1333] via-transparent to-[#1a1333]/60 pointer-events-none" />
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#5c2d91] text-white relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        </div>

        {/* Radial Menu */}
        <RadialMenu />

        {/* Full Screen Carousel */}
        <FullScreenCarousel />
      </div>
    </>
  );
}