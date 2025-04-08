import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const menuItems = [
  { label: "HOME", angle: 0, href: "/home" },
  { label: "CONTACT", angle: 72, href: "/contact" },
  { label: "GAME", angle: 144, href: "/game" },
  { label: "ABOUT", angle: 216, href: "#about" },
  { label: "WORK", angle: 288, href: "#projects" },
];

const RadialMenu = () => {
  const radius = 180;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      {/* Toggle Button */}
      <div className="absolute top-6 right-6 z-50 flex items-center justify-center">
        <motion.div
          className="relative w-[100px] h-[100px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
          animate={{ rotate: [0, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[80px] h-[80px] rounded-full border border-[#a855f7] bg-[#2a0a4f]/70 text-white text-sm font-bold shadow-[0_0_60px_rgba(168,85,247,0.4)] backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-all"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </motion.div>
      </div>

      {/* Radial Menu with Background */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-[#0f0f24]/80 backdrop-blur-sm z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Radial Menu */}
            <motion.div
              className="fixed w-[360px] h-[360px] rounded-full border border-[#a855f7] z-20"
              style={{ boxShadow: "0 0 200px 50px rgba(128,0,255,0.2)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Spinning Conic Gradient */}
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-30 rounded-full animate-spin-slow" />

              {/* Glowing Rings */}
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
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px - 50px)`,
                      top: `calc(50% - ${y}px - 50px)`,
                    }}
                  >
                    <motion.div className="relative w-[100px] h-[100px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center">
                      <a href={item.href}>
                        <motion.div
                          className="w-[80px] h-[80px] rounded-full border border-[#a855f7] bg-[#2a0a4f]/70 text-white font-bold text-md shadow-[0_0_60px_rgba(168,85,247,0.4)] backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-all"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </motion.div>
                      </a>
                    </motion.div>
                  </div>
                );
              })}

              {/* Glow Center */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.25)_0%,_transparent_70%)]" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Avatar Circle Top Left */}
      <div className="absolute top-0 left-6 w-48 h-48 rounded-full flex items-center justify-center z-50">
        <div className="absolute w-20 h-20 rounded-full bg-purple-500 opacity-20 blur-2xl animate-pulse" />
        <div className="absolute w-20 h-20 rounded-full border-[3px] border-dashed border-purple-400 animate-spin-slow" />
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-black relative z-10">
          <img
                src="https://images.pexels.com/photos/30569336/pexels-photo-30569336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RadialMenu;
