import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react"; // You can replace this icon or import more from lucide-react
import DynamicTimestamp from "../components/ui/DynamicTimeStamp";

const ServicesSection = () => {
  return (
    <section className="relative bg-[#0f0f24] py-20 px-4 sm:px-8 text-white">

      {/* Gradient Accent Lines */}
      <div className="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent" />
      <div className="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* HanumanCar Rental */}
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest mb-3">
            <div>• Services</div>
            <div>HANUMANCAR</div>
          </div>

          <h2 className="text-xl font-semibold text-white mb-6 border-purple-800 pb-1 flex items-center gap-2">
            <span>HanumanCar Rental</span>
            <span className="flex-1 h-px bg-purple-800"></span>
          </h2>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h1 className="text-2xl font-light mb-3">
              Ride Across Cities with
              <span className="font-normal"> Comfort & Safety</span>
            </h1>
            <p className="text-zinc-400 text-base mb-4">
              Affordable long-drive rentals, driver on demand, and 24x7 support across India.
            </p>

            <div className="flex items-center text-zinc-500 text-sm mb-6">
              <span>Available Now</span>
              <span className="mx-2">•</span>
              <span>Since 2024</span>
            </div>

            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <BookOpen size={16} />
              Explore Cars
            </motion.button>

            <div className="text-xs text-zinc-600 mt-6">ACTIVE</div>
          </div>
        </div>

        {/* Tutors */}
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest mb-3">
            <div>• Services</div>
            <div>TUTORS</div>
          </div>

          <h2 className="text-xl font-semibold text-white mb-6 border-purple-800 pb-1 flex items-center gap-2">
            <span>Top Tutors</span>
            <span className="flex-1 h-px bg-purple-800"></span>
          </h2>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h1 className="text-2xl font-light mb-3">
              Learn from
              <span className="font-normal"> Expert Educators</span>
            </h1>
            <p className="text-zinc-400 text-base mb-4">
              Connect with verified tutors for school, college, and competitive exams.
            </p>

            <div className="flex items-center text-zinc-500 text-sm mb-6">
              <span>All Subjects</span>
              <span className="mx-2">•</span>
              <span>Since 2023</span>
            </div>

            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <BookOpen size={16} />
              Find a Tutor
            </motion.button>

            <div className="text-xs text-zinc-600 mt-6">ACTIVE</div>
          </div>
        </div>

        {/* LMS */}
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest mb-3">
            <div>• Platform</div>
            <div>LMS</div>
          </div>

          <h2 className="text-xl font-semibold text-white mb-6 border-purple-800 pb-1 flex items-center gap-2">
            <span>LMS Platform</span>
            <span className="flex-1 h-px bg-purple-800"></span>
          </h2>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h1 className="text-2xl font-light mb-3">
              Empowering Learning with
              <span className="font-normal"> Digital Courses</span>
            </h1>
            <p className="text-zinc-400 text-base mb-4">
              Seamless online learning experience with batch-wise content, progress tracking, and more.
            </p>

            <div className="flex items-center text-zinc-500 text-sm mb-6">
              <span>Sklassics Academy</span>
              <span className="mx-2">•</span>
              <span>2025</span>
            </div>

            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <BookOpen size={16} />
              Visit LMS
            </motion.button>

            <div className="text-xs text-zinc-600 mt-6">ACTIVE</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
