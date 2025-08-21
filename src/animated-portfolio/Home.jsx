



import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Target, Sparkles, TrendingUp, Zap, ArrowRight, ChevronDown } from "lucide-react";
import Footer from '../animated-portfolio/Footer';
import StickyScrollCards from './StickyScollCards';
import AboutUsSection from './AboutUsSection';
import WorkShowcase from "../animated-portfolio/WorkShowcase";
import Profile from './Profile';
import ProjectViewNew from '../animated-portfolio/Project_View';

const InteractiveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ 
          repeat: Infinity, 
          duration: 120,
          ease: "linear" 
        }}
        className="absolute inset-0 flex justify-center items-center z-0"
      >
        <img
          src="https://matthewparrilla.com/static/img/earth_at_night.gif"
          alt="Globe"
          className="w-full max-w-[900px] h-auto object-contain"
          style={{
            opacity: 0.8,
            filter: "brightness(1.3) contrast(1.2) saturate(1.5)"
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40 z-1"></div>
    </div>
  );
};

const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

// const RadialMenu = () => {
//   const radius = 120;
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const handleClick = (href, e) => {
//     e.preventDefault();
//     setIsOpen(false);

//     setTimeout(() => {
//       const id = href.replace("#", "");
//       const el = document.getElementById(id);
//       if (el) {
//         const yOffset = -40;
//         const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//     }, 400);
//   };

//   const menuItems = [
//     { label: "Profile", angle: 0, href: "#profile", icon: "👤" },
//     { label: "Work", angle: 90, href: "#work", icon: "💼" },
//     { label: "Projects", angle: 180, href: "#projects", icon: "🚀" },
//     { label: "About", angle: 270, href: "#about", icon: "ℹ️" },
//   ];

//   return (
//     <div className="fixed top-4 right-4 z-[100] text-white">
//       <motion.div
//         className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-primary-800 flex items-center justify-center"
//         animate={{ rotate: [0, 360] }}
//         transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//       >
//         <motion.button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs sm:text-sm font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
//           whileHover={{ 
//             scale: 1.05, 
//             boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
//           }}
//           whileTap={{ scale: 0.98 }}
//           animate={{ 
//             boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
//           }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <span className="animate-text-shimmer">{isOpen ? "CLOSE" : "MENU"}</span>
//         </motion.button>
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-dark-950/90 backdrop-blur-md z-[40]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               onClick={() => setIsOpen(false)}
//             />

//             <motion.div
//               className="fixed top-8 right-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
//               <div
//                 className="absolute inset-0 rounded-full pointer-events-none"
//                 style={{
//                   border: "1px solid rgba(168, 85, 247, 0.5)",
//                   background:
//                     "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
//                   transform: "scale(1.02102) rotate(50.904deg)",
//                 }}
//               >
//                 <div
//                   className="absolute inset-[15%] rounded-full pointer-events-none"
//                   style={{
//                     border: "1px solid rgba(168, 85, 247, 0.5)",
//                     background:
//                       "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
//                     transform: "scale(1.01705) rotate(52.56deg)",
//                   }}
//                 />
//               </div>
//               <div className="absolute inset-[30%] rounded-full bg-purple-glow opacity-30"></div>

//               {menuItems.map((item) => {
//                 const angleRad = (item.angle * Math.PI) / 180;
//                 const x = radius * Math.cos(angleRad);
//                 const y = radius * Math.sin(angleRad);

//                 return (
//                   <div
//                     key={item.label}
//                     className="absolute z-[60]"
//                     style={{
//                       left: `calc(50% + ${x}px - 40px)`,
//                       top: `calc(50% - ${y}px - 40px)`,
//                     }}
//                   >
//                     <motion.div 
//                       className="relative w-[80px] h-[80px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
//                       onHoverStart={() => setHoveredItem(item.label)}
//                       onHoverEnd={() => setHoveredItem(null)}
//                     >
//                       <motion.a
//                         href={item.href}
//                         className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs sm:text-md backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
//                         whileHover={{ 
//                           scale: 1.1, 
//                           boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                         animate={{ 
//                           boxShadow: hoveredItem === item.label 
//                             ? "0 0 20px rgba(168, 85, 247, 0.8)"
//                             : ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
//                         }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                         onClick={(e) => handleClick(item.href, e)}
//                         tabIndex={isOpen ? 0 : -1}
//                         aria-label={item.label}
//                       >
//                         <span className="text-lg mb-1">{item.icon}</span>
//                         <span className="animate-text-shimmer text-xs">{item.label}</span>
//                       </motion.a>
//                     </motion.div>
//                   </div>
//                 );
//               })}
//               <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.25)_0%,_transparent_70%)] pointer-events-none" />
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
const RadialMenu = () => {
  const radius = 120;
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = (href, e) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -40;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 400);
  };

  const menuItems = [
    { label: "Profile", angle: 0, href: "#profile", icon: "👤" },
    { label: "Work", angle: 90, href: "#work", icon: "💼" },
    { label: "Projects", angle: 180, href: "#projects", icon: "🚀" },
    { label: "About", angle: 270, href: "#about", icon: "ℹ️" },
  ];

  return (
    <div className="fixed top-4 right-[15%] sm:right-4 z-[100] text-white">
      <motion.div
        className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-primary-800 flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-xs sm:text-sm font-bold backdrop-blur-sm flex items-center justify-center text-white interactive-glow"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
          }}
          whileTap={{ scale: 0.98 }}
          animate={{ 
            boxShadow: ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="animate-text-shimmer">{isOpen ? "CLOSE" : "MENU"}</span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-dark-950/90 backdrop-blur-md z-[40]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-8 right-[15%] sm:right-8 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-primary-500 z-[50] shadow-glow-purple-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#a855f7_0deg,_#a855f7_10deg,_transparent_10deg,_transparent_72deg,_#a855f7_72deg,_#a855f7_82deg,_transparent_82deg)] opacity-40 rounded-full animate-spin-slow pointer-events-none" />
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(168, 85, 247, 0.5)",
                  background:
                    "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
                  transform: "scale(1.02102) rotate(50.904deg)",
                }}
              >
                <div
                  className="absolute inset-[15%] rounded-full pointer-events-none"
                  style={{
                    border: "1px solid rgba(168, 85, 247, 0.5)",
                    background:
                      "conic-gradient(from 0deg, rgba(168, 85, 247, 0.4), transparent 60%)",
                    transform: "scale(1.01705) rotate(52.56deg)",
                  }}
                />
              </div>
              <div className="absolute inset-[30%] rounded-full bg-purple-glow opacity-30"></div>

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
                    <motion.div 
                      className="relative w-[80px] h-[80px] rounded-full border border-[#6b21a8]/60 flex items-center justify-center"
                      onHoverStart={() => setHoveredItem(item.label)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <motion.a
                        href={item.href}
                        className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border border-purple-500 text-white font-bold text-xs sm:text-md backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer z-[70] interactive-glow"
                        whileHover={{ 
                          scale: 1.1, 
                          boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        animate={{ 
                          boxShadow: hoveredItem === item.label 
                            ? "0 0 20px rgba(168, 85, 247, 0.8)"
                            : ["0 0 0px rgba(168, 85, 247, 0.3)", "0 0 10px rgba(168, 85, 247, 0.5)", "0 0 0px rgba(168, 85, 247, 0.3)"],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        onClick={(e) => handleClick(item.href, e)}
                        tabIndex={isOpen ? 0 : -1}
                        aria-label={item.label}
                      >
                        <span className="text-lg mb-1">{item.icon}</span>
                        <span className="animate-text-shimmer text-xs">{item.label}</span>
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
const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["ACCELERATING", "DIGITAL", "GROWTH"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white px-4 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-2" // Reduced margin-bottom
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"> {/* Reduced margin-bottom */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Sklassics Technologies
          </motion.span>
          {' '}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-blue-400"
          >
            Private Limited
          </motion.span>
        </h2>
      </motion.div>

      <div className="mb-4 relative"> 
        <motion.h1
          key={currentWord}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-purple-400" // Reduced margin-bottom
        >
          {words[currentWord]}
        </motion.h1>
        
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ delay: 0.5, duration: 1.2 }}
        />
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.span 
          className="text-xs text-gray-400 mb-2 tracking-wider"
        >
          SCROLL DOWN
        </motion.span>
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const DigitalExcellenceSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-dark-950 flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20 text-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Transforming ideas into <span className="text-purple-400">digital excellence</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
          with cutting-edge technology and innovative solutions
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {[
          { label: "Issues Resolve", value: "1000+", icon: Target, color: "purple" },
          { label: "Client Retention Rate", value: "80%", icon: Sparkles, color: "blue" },
          { label: "Workshops Conducted", value: "50+", icon: TrendingUp, color: "teal" },
          { label: "Technologies", value: "25+", icon: Zap, color: "purple" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-6 rounded-2xl bg-dark-800/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/60 transition-all"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)"
            }}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className={`p-4 rounded-full bg-${stat.color}-500/15 border border-${stat.color}-500/40`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <div ref={containerRef} className="relative w-full min-h-screen bg-dark-950 overflow-hidden">
        <InteractiveBackground />
        <ParticleSystem />
        <RadialMenu />
        <HeroSection />
      </div>

      <DigitalExcellenceSection />

      <div id="profile" className="scroll-mt-20">
        <Profile />
      </div>

      <div id="work" className="scroll-mt-20">
        <WorkShowcase />
      </div>

      <div id="projects" className="scroll-mt-80">
        <StickyScrollCards />
      </div>
      <div id="project_view" className="scroll-mt-20">
        <ProjectViewNew/>
      </div>

      <div id="about" className="scroll-mt-20">
        <AboutUsSection />
      </div>

      <Footer />
    </>
  );
};

export default Home;