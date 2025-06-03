import { motion } from "framer-motion";
import DynamicTimestamp from "../components/ui/DynamicTimeStamp";

const AccessScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative">
    {/* Outer Glow Effect */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,#111,transparent_70%)] opacity-50"></div>

    {/* Animated UI Container */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[420px] h-96 bg-[#0b0d10] border border-gray-800 rounded-lg shadow-2xl p-6 text-center"
    >
      {/* Header Section */}
      <div className="flex justify-between items-center text-gray-400 text-xs border-b border-gray-700 pb-2">
  <img src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png" alt="Logo" className="h-6 w-auto" />
        <span className="text-gray-500">
          INITIATE <span className="text-gray-300">PHX9000</span>
        </span>
        <span className="absolute top-0 left-0 h-4 w-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 right-0 h-4 w-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 left-0 h-4 w-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 right-0 h-4 w-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 left-0 w-4 h-0.5 bg-purple-500 rounded-sm"></span>
        <span className="absolute top-0 right-0 w-4 h-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 left-0 w-4 h-0.5 bg-indigo-500 rounded-sm"></span>
        <span className="absolute bottom-0 right-0 w-4 h-0.5 bg-purple-500 rounded-sm"></span>
        <div className="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        <div className="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent"></div>


        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="w-3 h-3 bg-red-600 rounded-full shadow-lg"
        ></motion.span>
      </div>

      {/* Animated ENTER Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(0, 162, 255, 0.8)" }}
          className="w-full max-w-[260px] bg-gradient-to-b from-[#15202B] to-[#101820] border border-gray-600 text-blue-400 text-2xl font-bold py-4 rounded-md shadow-xl tracking-wider"
        ><a href="/home">
          E N T E R
                  <p className="text-gray-500 text-sm mt-2 tracking-widest"> CLICK HERE</p></a>

        </motion.button>
      </motion.div>

      {/* Silent Mode */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-gray-500 text-center mt-10 text-sm"
      >
      
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(0, 162, 255, 0.6)" }}
        className="mt-3 flex items-center justify-center mx-auto space-x-2 text-blue-400 hover:text-blue-500 transition tracking-widest"
      >
        <span> Sklassics Technologies Private Limited</span>
      </motion.button>

      {/* Footer Section */}
      <div className="absolute bottom-4 left-4 text-gray-500 text-xs">ACTIVE</div>
      <DynamicTimestamp/>
      </motion.div>
  </div>
  )
}

export default AccessScreen