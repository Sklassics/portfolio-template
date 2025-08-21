import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Target, Lightbulb, Users, Zap, GraduationCap, Globe } from 'lucide-react';

const AboutUsSection = () => {
  // Refs for scroll animations
  const missionRef = useRef(null);
  
  // Check if sections are in view
  const missionInView = useInView(missionRef, { once: false, amount: 0.3 });
  
  // Animation controls
  const missionControls = useAnimation();
  
  // Animate when sections come into view
  useEffect(() => {
    if (missionInView) {
      missionControls.start('visible');
    }
  }, [missionInView, missionControls]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 text-white overflow-hidden">
      {/* Mission Section */}
      <motion.section 
        ref={missionRef}
        initial="hidden"
        animate={missionControls}
        variants={containerVariants}
        className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Mission Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex justify-center items-center gap-2 mb-3">
              <div className="h-1 w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              <span className="text-purple-400 font-medium tracking-wider text-sm uppercase">OUR MISSION</span>
            </div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Bridging </span>
              <span className="text-purple-400 font-extrabold">Talent</span>
              <span className="text-white"> & </span>
              <span className="text-blue-400 font-extrabold">Technology</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Our mission is to bridge the gap between talent and technology by delivering value-driven solutions. 
              We aim to transform lives and businesses through quality education, digital innovation, and community engagement.
            </motion.p>
          </motion.div>

          {/* Mission Details */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Mission Statement Card */}
            <div className="bg-dark-800 p-8 rounded-xl border border-purple-900/30 shadow-lg">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-3 text-purple-400">
                <Target className="text-purple-400" />
                <span>OUR MISSION</span>
              </h4>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Our mission at Sklassics is to deliver end-to-end IT services that empower individuals, startups, and businesses to grow through innovation, skill-building, and smart technology. We aim to simplify digital transformation by offering high-quality training, reliable job placement support, and customized web, mobile, and AI-based solutions.
              </p>
              
              <div className="space-y-4">
                <div className="bg-dark-900/80 p-4 rounded-lg border border-purple-900/30">
                  <h5 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Education
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Quality training programs that prepare students for real-world challenges
                  </p>
                </div>
                
                <div className="bg-dark-900/80 p-4 rounded-lg border border-purple-900/30">
                  <h5 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Innovation
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Cutting-edge digital solutions that drive business transformation
                  </p>
                </div>
                
                <div className="bg-dark-900/80 p-4 rounded-lg border border-purple-900/30">
                  <h5 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Community
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Engagement initiatives that create positive social impact
                  </p>
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="bg-dark-800 p-8 rounded-xl border border-blue-900/30 shadow-lg">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-3 text-blue-400">
                <Lightbulb className="text-blue-400" />
                <span>OUR VISION</span>
              </h4>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Creating a world where technology is accessible to all and empowers everyone to achieve their full potential.
              </p>
              
              {/* Image Placeholder */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-900/80 p-4 rounded-lg border border-blue-900/30">
                <h5 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Collaboration
                </h5>
                <p className="text-gray-400 text-sm">
                  Fostering collaborative environments where diverse talents unite to create innovative solutions
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <button className="bg-transparent border border-purple-500/50 text-purple-300 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:text-white hover:border-purple-400 transition-all duration-300 group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
              <span>Join Our Mission</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              <span className="absolute inset-0 rounded-full shadow-none group-hover:shadow-[0_0_20px_0_rgba(168,85,247,0.4)] transition-shadow duration-700"></span>
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsSection;