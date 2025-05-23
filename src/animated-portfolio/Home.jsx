import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import AboutMe from './AboutMe';
// import MacOSPublicationCard from './Game';
import Profile from './Profile';
import RadialMenu from './RadialMenu';
import Projects from './Projects';
import ContactPHX9000 from './Contact';
import DynamicTimestamp from '../components/ui/DynamicTimeStamp';

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
      <div className="relative w-full h-screen bg-black overflow-hidden ">
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

{/* <motion.div
  className="relative top-10"
  animate={{ y: [0, -20, 0] }}
  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
>
  <RocketIcon />
</motion.div> */}
        {/* Top Fixed Radial Menu */}
<div className="absolute top-0  transform -translate-x-1/2 z-50">
  <RadialMenu />
</div>


      {/* Center Titles */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center space-y-1 sm:space-y-4">
      <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-3xl sm:text-7xl md:text-7xl lg:text-9xl font-bold"
  >
    CRAFTING
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
    EXPERIENCES
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
      <div id='projects'>
      <Projects />
      </div>
      <div id='profile'> 
      <Profile />
      </div>
      <div id='about'>
      <AboutMe />
      </div>
      {/* Publications Section */}
      <div className="min-h-screen bg-black text-white font-sans px-6 py-10 relative">
        <div className="pt-14 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 shadow-inner">
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

          {/* Header */}
          <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest mb-3">
            <div>• Publications</div>
            <div>
              INITIATE PHX9000
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-1"></span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-white mb-6 border-purple-800 pb-1 flex items-center gap-2">
            <span>Selected Publications</span>
            <span className="flex-1 h-px bg-purple-800"></span>
          </h2>

          {/* Publication Card */}
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h1 className="text-2xl md:text-3xl font-light text-white mb-3">
              Apple MacOS 10.15.5 Release:
              <span className="font-normal"> MacBook's Surprising Problem</span>
            </h1>

            <p className="text-zinc-400 text-base mb-4">
              Forbes wrote about my blog post in an article about the Apple MacOS 10.15.5 Release.
            </p>

            <div className="flex items-center text-zinc-500 text-sm mb-6">
              <span>Forbes</span>
              <span className="mx-2">•</span>
              <span>06/2020</span>
            </div>

            <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm px-6 py-2 rounded-full border border-zinc-700">
              <BookOpen size={16} />
              Read Article
            </button>
          </div>

          <div className="text-xs text-zinc-600 mt-6">ACTIVE</div>
          <DynamicTimestamp/>
        </div>

       

      </div>

      {/* <MacOSPublicationCard /> */}
      <div id='contact'>
      <ContactPHX9000 />
      </div>
    </>
  );
};

export default Home;
