import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMousePointer, FaHeart, FaCogs, FaKey, FaClipboard, FaTools, FaBuilding } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

const features = [
  { icon: <FaHeart />, title: 'Filters' },
  { icon: <FaClipboard />, title: 'Management' },
  { icon: <FaCogs />, title: 'Configurable' },
  { icon: <FaTools />, title: 'Building' },
  { icon: <FaKey />, title: 'Authorization' },
];

const Page = () => {
  return (
    <>
    <div className="min-h-screen bg-[#0a0d1c] text-white px-4 py-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Extensibility */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="bg-[#14172b] p-6 rounded-2xl border border-gray-700 relative overflow-hidden">
            <h2 className="text-xl font-semibold mb-2">Extensibility</h2>
            <p className="mb-4 text-sm text-gray-300">Your login box must find the right balance between user convenience, privacy and security.</p>
            <div className="relative h-48">
              <svg className="absolute w-full h-full text-purple-500 opacity-30" viewBox="0 0 400 150">
                <polyline fill="none" stroke="currentColor" strokeWidth="3" points="0,100 50,90 100,110 150,80 200,110 250,70 300,120 350,60 400,100" />
              </svg>
              <div className="absolute left-1/4 top-[35%] text-sm bg-[#1f2337] text-white px-3 py-1 rounded-md border border-red-400 flex items-center gap-2 shadow-lg">
                <span className="text-red-400 text-xs font-semibold">⚡ Alert</span> 
                <span>The login page has mobile issues.</span>
              </div>
              <FaCheckCircle className="absolute left-[20%] top-[65%] text-green-500 text-xl" />
              <div className="absolute left-[50%] top-[55%] text-blue-400 text-xl bg-[#1f2337] p-2 rounded-full border border-blue-500">
                <FaMousePointer />
              </div>
            </div>
          </motion.div>

          {/* Infinite Options */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#14172b] p-6 rounded-2xl border border-gray-700 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold mb-2 text-center">Infinite options</h2>
            <p className="text-sm text-gray-300 text-center mb-6">Quickly apply filters to refine your issues lists and create custom views.</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-[#1f2337] rounded-full p-4 border border-gray-600 shadow-lg">
              <SiGithub className="text-white text-3xl" />
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.2 }}
              className="flex items-start gap-3 p-4 rounded-lg hover:bg-[#1c2035] transition-colors">
              <div className="text-white text-lg mt-1">{feat.icon}</div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{feat.title}</h3>
                <p className="text-xs text-gray-400">Login box must find the right balance for the user convenience, privacy and security.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

      <div className="bg-[#0B1120] text-white px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-purple-400 font-medium mb-2">The <span className="text-purple-500">security</span> first platform</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Spot issues faster</h2>
        <p className="text-gray-400 text-base md:text-lg mb-10">
          All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary,
          making this the first true generator on the Internet.
        </p>
      </div>

      {/* Image section */}
       <div className="relative flex justify-center items-center">
    {/* Purple glow effect behind image */}
    <div className="absolute w-[500px] h-[500px] bg-purple-700 blur-[150px] opacity-30  z-0"></div>

    {/* Foreground image */}
    <img
      src="https://preview.cruip.com/stellar/images/feature-image-04.png"
      alt="Security platform preview"
      className="w-full max-w-5xl rounded-xl shadow-xl relative z-10"
    />
  </div>
</div>
    </>
  );
};

export default Page;