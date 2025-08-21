import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, BookOpen } from "lucide-react";
import DynamicTimestamp from "../components/ui/DynamicTimeStamp";

const ContactPHX9000 = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white font-mono px-6 py-10 relative">
      {/* Terminal-like top bar */}

      {/* Main content wrapper with detailed edge accents */}
      <div className="pt-14 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-black via-zinc-900 to-black p-6 border border-zinc-800 shadow-inner">
        {/* Thin accent lines on corners */}
        <span className="absolute top-0 left-0 h-4 w-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 right-0 h-4 w-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 left-0 h-4 w-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 right-0 h-4 w-0.5 bg-purple-500 rounded-sm"></span>

        <span className="absolute top-0 left-0 w-4 h-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 right-0 w-4 h-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 left-0 w-4 h-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 right-0 w-4 h-0.5 bg-purple-500 rounded-sm"></span>
        <div class="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        <div class="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>


        {/* Header */}
        <div className="absolute top-4 left-4 text-xs tracking-widest text-purple-400">
          * CONTACT
        </div>
        <div className="absolute top-4 right-4 text-xs tracking-widest text-gray-400">
          INITIATE PHX9000
        </div>

        {/* Speech Bubble */}
        <div className="relative z-10 text-lg md:text-xl font-bold mb-6 max-w-xl text-left border-l-4 border-purple-500 pl-4">
          Talk to PHX 9000 to get my contact details.
        </div>

        {/* Eye Interface */}
        <div className="relative z-0 mb-8 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-black border-8 border-gray-900 flex items-center justify-center shadow-[0_0_60px_rgba(255,0,0,0.4)]">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-radial from-red-600 via-red-800 to-black flex items-center justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-500 animate-pulse" />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full border border-gray-700 opacity-30" style={{ boxShadow: '0 0 100px rgba(255,0,0,0.2)' }} />
        </div>

        <p className="text-sm md:text-base text-gray-300 mb-4 text-center">
          Select your preferred communication channel:
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <IconButton icon={<Github size={20} />} label="GitHub" />
          <IconButton icon={<Twitter size={20} />} label="Twitter" />
          <IconButton icon={<Linkedin size={20} />} label="LinkedIn" />
          <IconButton icon={<BookOpen size={20} />} label="Medium" />
          <IconButton icon={<Mail size={20} />} label="Email" />
        </div>

        {/* Footer */}
        <div className="absolute bottom-4 left-4 text-xs text-gray-400">ACTIVE</div>
        <DynamicTimestamp/>
        </div>
    </div>
  );
};

const IconButton = ({ icon, label }) => (
  <motion.button 
    className="flex flex-col items-center justify-center p-3 rounded-md bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-blue-900/40 border border-purple-700/50 transition duration-300"
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)",
      background: "linear-gradient(to bottom right, rgba(168, 85, 247, 0.4), rgba(79, 70, 229, 0.4), rgba(59, 130, 246, 0.4))"
    }}
    whileTap={{ scale: 0.98 }}
  >
    {icon}
    <span className="mt-1 text-xs text-gray-300">{label}</span>
  </motion.button>
);

export default ContactPHX9000;
