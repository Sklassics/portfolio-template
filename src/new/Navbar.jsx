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

// Carousel component
function Carousel() {
  const [current, setCurrent] = React.useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? projectImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projectImages.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full mx-auto mt-12" id="carousel">
      <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl border-0 md:border-4 border-purple-700 bg-[#1a1333] relative w-full">
        <img
          src={projectImages[current].src}
          alt={projectImages[current].title}
          className="w-full h-[18rem] md:h-[28rem] object-cover transition-all duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5c2d91]/90 to-transparent px-4 md:px-8 py-4 md:py-6">
          <h3 className="text-xl md:text-3xl font-bold text-white drop-shadow">{projectImages[current].title}</h3>
        </div>
      </div>
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-purple-700/90 hover:bg-purple-800 text-white rounded-full p-3 md:p-4 shadow-lg transition text-xl md:text-2xl"
        aria-label="Previous"
        style={{ zIndex: 2 }}
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-purple-700/90 hover:bg-purple-800 text-white rounded-full p-3 md:p-4 shadow-lg transition text-xl md:text-2xl"
        aria-label="Next"
        style={{ zIndex: 2 }}
      >
        &#8594;
      </button>
      <div className="flex justify-center gap-3 mt-6">
        {projectImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-purple-400 ${idx === current ? "bg-purple-400" : "bg-purple-900"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
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

        {/* Main Section with Carousel */}
        <main className="z-10 relative flex flex-col items-center justify-center text-center px-0 md:px-20 pt-12 pb-28 w-full">
          <Carousel />
        </main>
      </div>
    </>
  );
}