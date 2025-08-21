// import React, { useEffect, useRef, useState } from "react";
// import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
// import { ArrowRight, Users, Briefcase, Target, ChevronRight, Laptop, Smartphone, Cloud, Plane, BookOpen, Lightbulb, Car, Code, Zap, Building, Star, Heart, Shield, Globe, Sparkles } from 'lucide-react';
// import DynamicTimestamp from "../components/ui/DynamicTimeStamp";
// import sklassics_logo from "../assets/sklassics_logo.jpg";
// import { GraduationCap, MonitorSmartphone, BrainCircuit, PlaneTakeoff, Presentation, PenTool, Wrench, Bug, ShoppingCart, BarChart3, LineChart, Database, Settings, Link2, ShieldCheck } from 'lucide-react';

// const AboutCompany = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <div ref={containerRef} className="min-h-screen bg-dark-950 text-white font-sans px-6 py-6 relative overflow-hidden">
//       {/* Enhanced Background Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <motion.div 
//           className="absolute top-40 right-20 w-72 h-72 rounded-full bg-purple-900/20 blur-3xl"
//           animate={{ 
//             scale: [1, 1.2, 1],
//             opacity: [0.2, 0.3, 0.2],
//             x: [0, -30, 0],
//             y: [0, 30, 0],
//           }}
//           transition={{ duration: 9, repeat: Infinity, repeatType: 'reverse' }}
//         />
//         <motion.div 
//           className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"
//           animate={{ 
//             scale: [1, 1.3, 1],
//             opacity: [0.2, 0.4, 0.2],
//             x: [0, 40, 0],
//             y: [0, -40, 0],
//           }}
//           transition={{ duration: 11, repeat: Infinity, repeatType: 'reverse' }}
//         />
//         <motion.div 
//           className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyan-900/15 blur-3xl"
//           animate={{ 
//             scale: [1, 1.1, 1],
//             opacity: [0.1, 0.3, 0.1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       {/* Main content wrapper */}
//       <motion.div 
//         className="pt-8 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-6 border border-dark-700/50 shadow-inner mt-6 dark-card transform transition-all duration-300 hover:shadow-glow-purple"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Enhanced Accent Lines */}
//         <span className="absolute top-0 left-0 h-4 w-0.5 bg-purple-500 rounded-sm" />
//         <span className="absolute top-0 right-0 h-4 w-0.5 bg-indigo-500 rounded-sm" />
//         <span className="absolute bottom-0 left-0 h-4 w-0.5 bg-indigo-500 rounded-sm" />
//         <span className="absolute bottom-0 right-0 h-4 w-0.5 bg-purple-500 rounded-sm" />
//         <span className="absolute top-0 left-0 w-4 h-0.5 bg-purple-500 rounded-sm" />
//         <span className="absolute top-0 right-0 w-4 h-0.5 bg-indigo-500 rounded-sm" />
//         <span className="absolute bottom-0 left-0 w-4 h-0.5 bg-indigo-500 rounded-sm" />
//         <span className="absolute bottom-0 right-0 w-4 h-0.5 bg-purple-500 rounded-sm" />
        
//         {/* Enhanced Gradient Accent Lines */}
//         <div className="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent" />
//         <div className="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent" />

//         {/* Enhanced Top Labels */}
//         <motion.div 
//           className="absolute top-2 left-4 text-xs text-purple-400 tracking-widest font-medium"
//           initial={{ opacity: 0, x: -20 }}
//           animate={isVisible ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.2 }}
//         >
//           SKLASSICS INITIATED
//         </motion.div>
//         <motion.div 
//           className="absolute top-2 right-4 flex items-center gap-2 text-xs text-green-400 tracking-widest font-medium"
//           initial={{ opacity: 0, x: 20 }}
//           animate={isVisible ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.3 }}
//         >
//           SYSTEM LIVE
//           <motion.span 
//             className="h-2 w-2 rounded-full bg-green-500"
//             animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//         </motion.div>

//         {/* Main content */}
//         <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
//           {/* Enhanced Text Content */}
//           <motion.div 
//             className="flex-1 space-y-10"
//             variants={containerVariants}
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//           >
//             {/* ABOUT US Heading */}
//             <motion.div variants={itemVariants} className="mb-2">
//               <motion.h2 
//                 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent tracking-widest flex items-center gap-2 animate-text-shimmer"
//                 whileHover={{ x: 5 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 <Sparkles className="w-6 h-6 text-purple-400" /> ABOUT US
//               </motion.h2>
//               <motion.div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-full mt-2 mb-4 animate-pulse" />
//             </motion.div>

//             {/* WHO WE ARE Card */}
//             <motion.div 
//               className="bg-dark-800/60 backdrop-blur-md p-6 rounded-2xl border border-purple-900/40 shadow-xl mb-4"
//               variants={itemVariants}
//               whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(168,85,247,0.25)' }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <motion.h3 
//                 className="text-lg md:text-xl font-bold text-purple-400 mb-2 flex items-center gap-2"
//                 whileHover={{ x: 5 }}
//               >
//                 <Users className="w-5 h-5" /> WHO WE ARE
//               </motion.h3>
//               <motion.ul className="space-y-3 text-gray-200 text-base md:text-lg">
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}>We’re a team of passionate tech professionals focused on building a better future through smart and modern IT solutions.</motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>We offer IT consulting, website & mobile app development, software maintenance/testing, and AI integration.</motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>We use the latest technology to build strong, flexible solutions for business needs.</motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 }}>We provide IT training and placement support to help people get real-world skills and start their careers.</motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 }}>Whether supporting students or helping startups grow, Sklassics turns ideas into reality and makes technology work for everyone.</motion.li>
//               </motion.ul>
//             </motion.div>

//             {/* OUR SERVICES Card */}
//             <motion.div 
//               className="bg-dark-800/60 backdrop-blur-md p-6 rounded-2xl border border-blue-900/40 shadow-xl mb-4"
//               variants={itemVariants}
//               whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.20)' }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <motion.h3 
//                 className="text-lg md:text-xl font-bold text-blue-400 mb-2 flex items-center gap-2"
//                 whileHover={{ x: 5 }}
//               >
//                 <Briefcase className="w-5 h-5" /> OUR SERVICES
//               </motion.h3>
//               <motion.p className="text-gray-300 mb-4">We provide a comprehensive suite of offerings including:</motion.p>
//               <motion.div 
//                 className="grid grid-cols-1 md:grid-cols-2 gap-3"
//                 initial={{ opacity: 0 }}
//                 animate={isVisible ? { opacity: 1 } : {}}
//                 transition={{ delay: 0.2 }}
//               >
//                 {[
//                   { text: "Professional IT Training & Job Placements", icon: GraduationCap, color: "indigo" },
//                   { text: "Custom Web & Mobile App Development", icon: MonitorSmartphone, color: "blue" },
//                   { text: "AI & Cloud Integration Solutions", icon: BrainCircuit, color: "cyan" },
//                   { text: "Travel Agency IT Solutions & Support", icon: PlaneTakeoff, color: "teal" },
//                   { text: "Workshops, Webinars & Seminar Programs", icon: Presentation, color: "orange" },
//                   { text: "UI/UX Design & Prototyping", icon: PenTool, color: "pink" },
//                   { text: "Application Maintenance & Performance Optimization", icon: Wrench, color: "purple" },
//                   { text: "Software Testing (Manual & Automation)", icon: Bug, color: "red" },
//                   { text: "E-commerce Development & Integration", icon: ShoppingCart, color: "emerald" },
//                   { text: "Digital Marketing & SEO Services", icon: BarChart3, color: "lime" },
//                   { text: "Data Analytics & Business Intelligence", icon: LineChart, color: "amber" },
//                   { text: "Custom ERP & CRM System Development", icon: Database, color: "sky" },
//                   { text: "DevOps & CI/CD Pipeline Setup", icon: Settings, color: "gray" },
//                   { text: "API Development & Third-party Integrations", icon: Link2, color: "violet" },
//                   { text: "Cybersecurity & Compliance Consulting", icon: ShieldCheck, color: "rose" }
//                 ].map((service, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex items-center gap-3 p-3 rounded-lg bg-dark-700/30 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isVisible ? { opacity: 1, x: 0 } : {}}
//                     transition={{ delay: 0.3 + index * 0.07 }}
//                     whileHover={{ 
//                       scale: 1.04, 
//                       backgroundColor: "rgba(168, 85, 247, 0.12)",
//                       borderColor: "rgba(168, 85, 247, 0.5)"
//                     }}
//                   >
//                     <motion.div
//                       className={`p-2 rounded-full bg-${service.color}-500/20 border border-${service.color}-500/30 group-hover:bg-${service.color}-500/30`}
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                       animate={{ scale: [1, 1.05, 1] }}
//                       transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
//                     >
//                       <service.icon className={`w-4 h-4 text-${service.color}-400`} />
//                     </motion.div>
//                     <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
//                       {service.text}
//                     </span>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* OUR MISSION Card */}
//             <motion.div 
//               className="bg-dark-800/60 backdrop-blur-md p-6 rounded-2xl border border-purple-900/40 shadow-xl"
//               variants={itemVariants}
//               whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(168,85,247,0.25)' }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <motion.h3 
//                 className="text-lg md:text-xl font-bold text-purple-400 mb-2 flex items-center gap-2"
//                 whileHover={{ x: 5 }}
//               >
//                 <Target className="w-5 h-5" /> OUR MISSION
//               </motion.h3>
//               <motion.ul className="space-y-3 text-gray-200 text-base md:text-lg">
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 }}>Deliver end-to-end IT services that empower individuals, startups, and businesses to grow through innovation, skill-building, and smart technology.</motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>Simplify digital transformation with high-quality training, reliable job placement, and custom web, mobile, and AI solutions.</motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>Create meaningful digital experiences that solve real-world problems and foster career success.</motion.li>
//                 <motion.li initial={{ opacity: 0, x: -20 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 }}>Enable long-term progress for every client and learner we serve.</motion.li>
//               </motion.ul>
//             </motion.div>
//           </motion.div>

//           {/* Enhanced Company Image or Logo */}
//           <motion.div 
//             className="flex-1 flex justify-center relative"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={isVisible ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <motion.div 
//               className="relative"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <motion.div 
//                 className="rounded-full bg-white p-4 w-64 h-64 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)] backdrop-blur-sm border border-purple-500/30"
//                 animate={{
//                   boxShadow: [
//                     "0 0 30px rgba(168, 85, 247, 0.6)",
//                     "0 0 50px rgba(168, 85, 247, 0.8)",
//                     "0 0 30px rgba(168, 85, 247, 0.6)"
//                   ]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 <motion.img
//                 src={sklassics_logo}
//                 alt="Sklassics Technologies"
//                   className="w-56 h-56 object-contain rounded-full"
//                   whileHover={{ rotate: 5 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                 />
//               </motion.div>
              
//               <motion.div 
//                 className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-purple-500 text-xs px-4 py-2 rounded-full text-white flex items-center gap-2"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 <motion.span 
//                   className="h-2 w-2 rounded-full bg-green-500"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />
//                 SINCE 2023
//               </motion.div>
              
//               {/* Floating Elements */}
//               <motion.div
//                 className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400/80 rounded-full"
//                 animate={{ y: [0, -10, 0], rotate: [0, 360] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               />
//               <motion.div
//                 className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/80 rounded-full"
//                 animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
//                 transition={{ duration: 4, repeat: Infinity, delay: 1 }}
//               />
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Enhanced Footer */}
//         <motion.div 
//           className="mt-12 flex justify-between text-xs text-gray-600 border-t border-gray-800 pt-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 1 }}
//         >
//           <motion.span 
//             className="text-purple-400 font-medium"
//             whileHover={{ x: 5 }}
//           >
//             OPERATING WORLDWIDE
//           </motion.span>
//           <DynamicTimestamp />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default AboutCompany;


{/*import { 
  Users, 
  Cpu, 
  Code, 
  GraduationCap, 
  Lightbulb, 
  Clock, 
  Rocket, 
  Handshake 
} from 'lucide-react'; // or from your specific icon library
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Target, ChevronRight, Laptop, Smartphone, Cloud, Plane, BookOpen, Lightbulb, Car, Code, Zap, Building, Star, Heart, Shield, Globe, Sparkles } from 'lucide-react';
import DynamicTimestamp from "../components/ui/DynamicTimeStamp";
import sklassics_logo from "../assets/sklassics_logo.jpg";
import { GraduationCap, MonitorSmartphone, BrainCircuit, PlaneTakeoff, Presentation, PenTool, Wrench, Bug, ShoppingCart, BarChart3, LineChart, Database, Settings, Link2, ShieldCheck } from 'lucide-react';*/}
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Briefcase,
  Target,
  ChevronRight,
  Laptop,
  Smartphone,
  Cloud,
  Plane,
  BookOpen,
  Lightbulb,
  Car,
  Code,
  Zap,
  Building,
  Star,
  Heart,
  Shield,
  Globe,
  Sparkles,
  Cpu,
  GraduationCap,
  Clock,
  Rocket,
  Handshake,
  MonitorSmartphone,
  BrainCircuit,
  PlaneTakeoff,
  Presentation,
  PenTool,
  Wrench,
  Bug,
  ShoppingCart,
  BarChart3,
  LineChart,
  Database,
  Settings,
  Link2,
  ShieldCheck
} from 'lucide-react';
import DynamicTimestamp from "../components/ui/DynamicTimeStamp";
import sklassics_logo from "../assets/sklassics_logo.jpg";

const AboutCompany = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-dark-950 text-white font-sans px-6 py-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-20 w-72 h-72 rounded-full bg-purple-900/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyan-900/15 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content wrapper */}
      <motion.div 
        className="pt-8 max-w-8xl mx-auto relative rounded-xl bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 p-6 border border-dark-700/50 shadow-inner mt-6 dark-card transform transition-all duration-300 hover:shadow-glow-purple"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Enhanced Accent Lines */}
        <span className="absolute top-0 left-0 h-4 w-0.5 bg-purple-500 rounded-sm" />
        <span className="absolute top-0 right-0 h-4 w-0.5 bg-indigo-500 rounded-sm" />
        <span className="absolute bottom-0 left-0 h-4 w-0.5 bg-indigo-500 rounded-sm" />
        <span className="absolute bottom-0 right-0 h-4 w-0.5 bg-purple-500 rounded-sm" />
        <span className="absolute top-0 left-0 w-4 h-0.5 bg-purple-500 rounded-sm" />
        <span className="absolute top-0 right-0 w-4 h-0.5 bg-indigo-500 rounded-sm" />
        <span className="absolute bottom-0 left-0 w-4 h-0.5 bg-indigo-500 rounded-sm" />
        <span className="absolute bottom-0 right-0 w-4 h-0.5 bg-purple-500 rounded-sm" />
        
        {/* Enhanced Gradient Accent Lines */}
        <div className="absolute top-12 right-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent" />
        <div className="absolute top-12 left-0 w-1 h-20 bg-gradient-to-b from-purple-500/50 to-transparent" />

        {/* Enhanced Top Labels */}
        <motion.div 
          className="absolute top-2 left-4 text-xs text-purple-400 tracking-widest font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          SKLASSICS INITIATED
        </motion.div>
        <motion.div 
          className="absolute top-2 right-4 flex items-center gap-2 text-xs text-green-400 tracking-widest font-medium"
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          SYSTEM LIVE
          <motion.span 
            className="h-2 w-2 rounded-full bg-green-500"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          {/* ABOUT US Heading */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent tracking-widest flex items-center gap-2 animate-text-shimmer"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" /> ABOUT US
            </motion.h2>
            <motion.div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-full mt-2 mb-4 animate-pulse" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - WHO WE ARE */}
            {/* Left Column - WHO WE ARE */}

<motion.div 
  className="bg-dark-800/60 backdrop-blur-md p-6 rounded-2xl border border-blue-900/40 shadow-xl"
  variants={itemVariants}
  whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.20)' }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  <motion.h3 
    className="text-lg md:text-xl font-bold text-blue-400 mb-4 flex items-center gap-2"
    whileHover={{ x: 5 }}
  >
    <Users className="w-5 h-5" /> WHO WE ARE
  </motion.h3>

  <motion.ul 
    className="space-y-3 text-gray-300 text-sm md:text-base"
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1 } : {}}
    transition={{ delay: 0.2 }}
  >
    {[
      {
        text: "We're a team of passionate tech professionals focused on building a better future through smart and modern IT solutions. We offer IT consulting, website & mobile app development, software maintenance/testing, and AI integration.",
        icon: <Users className="w-4 h-4 text-purple-400" />
      },
      {
        text: "We use the latest technology to build strong, flexible solutions for business needs. We follow agile and client-centric approaches to ensure every project meets deadlines without compromising quality.",
        icon: <Code className="w-4 h-4 text-green-400" />
      },
      {
        text: "We provide IT training and placement support to help people get real-world skills and start their careers. Whether supporting students or helping startups grow, Sklassics turns ideas into reality and makes technology work for everyone.",
        icon: <GraduationCap className="w-4 h-4 text-yellow-400" />
      },
      {
        text: "Our team continuously researches emerging technologies to keep solutions future-ready and competitive. We believe in long-term partnerships, offering ongoing support and optimization to help clients adapt and scale effortlessly.",
        icon: <Rocket className="w-4 h-4 text-pink-400" />
      }
    ].map((item, index) => (
      <motion.li
        key={index}
        className="flex items-start gap-3 p-3 rounded-lg bg-dark-700/30 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3 + index * 0.07 }}
        whileHover={{ 
          scale: 1.04, 
          backgroundColor: "rgba(168, 85, 247, 0.12)",
          borderColor: "rgba(168, 85, 247, 0.5)"
        }}
      >
        <motion.div
          className="p-2 rounded-full bg-purple-500/20 border border-purple-500/30 group-hover:bg-purple-500/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
        >
          {item.icon}
        </motion.div>
        <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
      </motion.li>
    ))}
  </motion.ul>
</motion.div>

          

            
            {/* Right Column - OUR SERVICES */}
           <motion.div 
  className="bg-dark-800/60 backdrop-blur-md p-6 rounded-2xl border border-blue-900/40 shadow-xl"
  variants={itemVariants}
  whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.20)' }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  <motion.h3 
    className="text-lg md:text-xl font-bold text-blue-400 mb-4 flex items-center gap-2"
    whileHover={{ x: 5 }}
  >
    <Briefcase className="w-5 h-5" /> OUR SERVICES
  </motion.h3>
  <motion.p className="text-gray-300 mb-4">
    We provide a comprehensive suite of offerings including:
  </motion.p>

  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 gap-3"
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1 } : {}}
    transition={{ delay: 0.2 }}
  >
    {(() => {
      const colorClasses = {
        indigo: "text-indigo-400 bg-indigo-500/20 border-indigo-500/30 group-hover:bg-indigo-500/30",
        blue: "text-blue-400 bg-blue-500/20 border-blue-500/30 group-hover:bg-blue-500/30",
        cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30 group-hover:bg-cyan-500/30",
        teal: "text-teal-400 bg-teal-500/20 border-teal-500/30 group-hover:bg-teal-500/30",
        orange: "text-orange-400 bg-orange-500/20 border-orange-500/30 group-hover:bg-orange-500/30",
        pink: "text-pink-400 bg-pink-500/20 border-pink-500/30 group-hover:bg-pink-500/30",
        purple: "text-purple-400 bg-purple-500/20 border-purple-500/30 group-hover:bg-purple-500/30",
        red: "text-red-400 bg-red-500/20 border-red-500/30 group-hover:bg-red-500/30",
        emerald: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30 group-hover:bg-emerald-500/30",
        lime: "text-lime-400 bg-lime-500/20 border-lime-500/30 group-hover:bg-lime-500/30",
        amber: "text-amber-400 bg-amber-500/20 border-amber-500/30 group-hover:bg-amber-500/30",
        sky: "text-sky-400 bg-sky-500/20 border-sky-500/30 group-hover:bg-sky-500/30",
        gray: "text-gray-400 bg-gray-500/20 border-gray-500/30 group-hover:bg-gray-500/30",
        violet: "text-violet-400 bg-violet-500/20 border-violet-500/30 group-hover:bg-violet-500/30",
        rose: "text-rose-400 bg-rose-500/20 border-rose-500/30 group-hover:bg-rose-500/30"
      };

      const services = [
        { text: "Professional IT Training & Job Placements", icon: GraduationCap, color: "indigo" },
        { text: "Custom Web & Mobile App Development", icon: MonitorSmartphone, color: "blue" },
        { text: "AI & Cloud Integration Solutions", icon: BrainCircuit, color: "cyan" },
        { text: "Travel Agency IT Solutions & Support", icon: PlaneTakeoff, color: "teal" },
        { text: "Workshops, Webinars & Seminar Programs", icon: Presentation, color: "orange" },
        { text: "UI/UX Design & Prototyping", icon: PenTool, color: "pink" },
        { text: "Application Maintenance & Performance Optimization", icon: Wrench, color: "purple" },
        { text: "Software Testing (Manual & Automation)", icon: Bug, color: "red" },
        { text: "E-commerce Development & Integration", icon: ShoppingCart, color: "emerald" },
        { text: "Digital Marketing & SEO Services", icon: BarChart3, color: "lime" },
        { text: "Data Analytics & Business Intelligence", icon: LineChart, color: "amber" },
        { text: "Custom ERP & CRM System Development", icon: Database, color: "sky" },
        { text: "DevOps & CI/CD Pipeline Setup", icon: Settings, color: "gray" },
        { text: "API Development & Third-party Integrations", icon: Link2, color: "violet" },
        { text: "Cybersecurity & Compliance Consulting", icon: ShieldCheck, color: "rose" }
      ];

      return services.map((service, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-3 p-3 rounded-lg bg-dark-700/30 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.07 }}
          whileHover={{ 
            scale: 1.04, 
            backgroundColor: "rgba(168, 85, 247, 0.12)",
            borderColor: "rgba(168, 85, 247, 0.5)"
          }}
        >
          <motion.div
            className={`p-2 rounded-full border ${colorClasses[service.color]}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
          >
            <service.icon className="w-4 h-4" />
          </motion.div>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            {service.text}
          </span>
        </motion.div>
      ));
    })()}
  </motion.div>
</motion.div>


            {/* Bottom Left - OUR INITIATIVES */}
            {/* Bottom Left - OUR INITIATIVES */}
<motion.div 
  className="bg-dark-800/60 backdrop-blur-md p-6 rounded-2xl border border-purple-900/40 shadow-xl"
  variants={itemVariants}
  whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(168,85,247,0.25)' }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  <motion.h3 
    className="text-lg md:text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"
    whileHover={{ x: 5 }}
  >
    <Target className="w-5 h-5" /> OUR INITIATIVES
  </motion.h3>

  <motion.ul 
    className="space-y-3 text-gray-300 text-sm md:text-base"
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1 } : {}}
    transition={{ delay: 0.2 }}
  >
    {[
      {
        text: "Deliver end-to-end IT services that empower individuals, startups, and businesses to grow through innovation, skill-building, and smart technology.",
        icon: <Lightbulb className="w-4 h-4 text-yellow-400" />
      },
      {
        text: "Simplify digital transformation with high-quality training, reliable job placement, and custom web, mobile, and AI solutions.",
        icon: <Cpu className="w-4 h-4 text-blue-400" />
      },
      {
        text: "Create meaningful digital experiences that solve real-world problems and foster career success.",
        icon: <Globe className="w-4 h-4 text-green-400" />
      },
      {
        text: "Enable long-term progress for every client and learner we serve.",
        icon: <Rocket className="w-4 h-4 text-pink-400" />
      }
    ].map((item, index) => (
      <motion.li
        key={index}
        className="flex items-start gap-3 p-3 rounded-lg bg-dark-700/30 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3 + index * 0.07 }}
        whileHover={{ 
          scale: 1.04, 
          backgroundColor: "rgba(168, 85, 247, 0.12)",
          borderColor: "rgba(168, 85, 247, 0.5)"
        }}
      >
        <motion.div
          className="p-2 rounded-full bg-purple-500/20 border border-purple-500/30 group-hover:bg-purple-500/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
        >
          {item.icon}
        </motion.div>
        <span className="text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
      </motion.li>
    ))}
  </motion.ul>
</motion.div>

            
            {/* Bottom Right - Company Image */}
            <motion.div 
              className="flex justify-center items-center relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="rounded-full bg-white p-4 w-64 h-64 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)] backdrop-blur-sm border border-purple-500/30"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(168, 85, 247, 0.6)",
                      "0 0 50px rgba(168, 85, 247, 0.8)",
                      "0 0 30px rgba(168, 85, 247, 0.6)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.img
                    src={sklassics_logo}
                    alt="Sklassics Technologies"
                    className="w-56 h-56 object-contain rounded-full"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-purple-500 text-xs px-4 py-2 rounded-full text-white flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.span 
                    className="h-2 w-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  SINCE 2023
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400/80 rounded-full"
                  animate={{ y: [0, -10, 0], rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/80 rounded-full"
                  animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <motion.div 
          className="mt-12 flex justify-between text-xs text-gray-600 border-t border-gray-800 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.span 
            className="text-purple-400 font-medium"
            whileHover={{ x: 5 }}
          >
            OPERATING WORLDWIDE
          </motion.span>
          <DynamicTimestamp />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutCompany;