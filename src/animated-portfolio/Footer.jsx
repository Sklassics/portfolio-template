




import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Target, 
  TrendingUp,
  Code,
  BookOpen,
  Car,
  Building,
  Users,
  Star,
  Heart
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('.footer-section');
    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    { 
      name: "HanumanCar - Premium Car Rentals", 
      description: "Ride with Confidence: HanumanCar Rental Services",
      subtitle: "We provide reliable and affordable car rental services across your city, 24/7.",
      icon: Car, 
      color: "purple",
      status: "ACTIVE",
      year: "2025",
      action: "Book Now",
      domain: "HanumanCar",
      website: "hanumancars.com",
      features: ["24/7 Service", "Premium Vehicles", "City-wide Coverage"]
    },
    { 
      name: "Expert Tutors - One-on-One Guidance", 
      description: "Learn with the Best Tutors",
      subtitle: "Personalized learning support for students across all grades and subjects.",
      icon: Users, 
      color: "blue",
      status: "ACTIVE",
      year: "2025",
      action: "Get a Tutor",
      domain: "EduTeam",
      website: "sklassicstutor.com",
      features: ["Personalized Learning", "All Subjects", "Expert Tutors"]
    },
    { 
      name: "IT Training & Placement Programs", 
      description: "Industry-relevant training with placement support",
      subtitle: "Professional IT training programs for students and professionals.",
      icon: Target, 
      color: "cyan",
      status: "ACTIVE",
      year: "2025",
      action: "Apply Now",
      domain: "Sklassics",
      website: "sklassics.com",
      features: ["Job Ready", "Industry Experts", "Placement Support"]
    },
    { 
      name: "Professional IT Services", 
      description: "Custom web, mobile, AI, and cloud solutions",
      subtitle: "Tailored digital solutions for businesses of all sizes.",
      icon: Code, 
      color: "teal",
      status: "ACTIVE",
      year: "2025",
      action: "Explore",
      domain: "SklassicsTech",
      website: "sklassicstech.com",
      features: ["Web Development", "Mobile Apps", "AI Solutions"]
    },
    { 
      name: "AI & Cloud Integration Solutions", 
      description: "Cutting-edge AI and cloud services",
      subtitle: "Transform your business operations with advanced technology.",
      icon: Zap, 
      color: "pink",
      status: "ACTIVE",
      year: "2025",
      action: "Learn More",
      domain: "SklassicsAI",
      website: "sklassics-ai.com",
      features: ["AI Integration", "Cloud Services", "Advanced Tech"]
    },
    { 
      name: "LMS Application Services", 
      description: "Modern learning management systems",
      subtitle: "Comprehensive LMS solutions for schools, colleges, and corporates.",
      icon: BookOpen, 
      color: "yellow",
      status: "ACTIVE",
      year: "2025",
      action: "Explore LMS",
      domain: "SklassicsLMS",
      website: "sklassics-lms.com",
      features: ["Learning Management", "Corporate Training", "Educational Solutions"]
    },
  ];

  const domains = [
    { name: "sklassics.com", icon: Globe, color: "yellow" },
    { name: "sklassicstech.com", icon: Code, color: "blue" },
    { name: "sklassicsacademy.com", icon: BookOpen, color: "purple" },
    { name: "sklassics-lms.com", icon: Target, color: "cyan" },
    { name: "sklassics-ai.com", icon: Zap, color: "pink" },
    { name: "sklassicstutor.com", icon: Users, color: "green" },
    { name: "sklassics-quiz.com", icon: Star, color: "yellow" },
    { name: "hanumancars.com", icon: Car, color: "blue" },
    { name: "vlrws.com", icon: Building, color: "purple" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 9392732341", color: "green" },
    { icon: Mail, text: "info@sklassics.com", color: "blue" },
    { icon: MapPin, text: "Hyderabad, India", color: "red" },
  ];

  return (
    <footer className="footer-section relative bg-dark-950 text-white px-6 py-20 font-poppins overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
        style={{ y }}
      />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 z-10 w-[200px] h-[200px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-[150px] h-[150px] mt-5 mr-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-xl" />
      </motion.div>

      <motion.div 
        className="absolute bottom-0 left-0 z-10 w-[150px] h-[150px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      >
        <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-xl" />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Enhanced Heading Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            animate={{
              textShadow: [
                "0 0 10px rgba(168, 85, 247, 0.3)",
                "0 0 20px rgba(168, 85, 247, 0.6)",
                "0 0 10px rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Where{" "}
            <span className="gradient-text-enhanced">talent</span>{" "}
            meets{" "}
            <span className="gradient-text-enhanced">opportunity</span>
            <motion.span 
              className="inline-block ml-4 w-4 h-4 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Empowering businesses and individuals with cutting-edge technology solutions and innovative digital experiences.
          </motion.p>
        </motion.div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
        {/* Services Section */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <motion.h4 
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="gradient-text-enhanced">OUR SERVICES</span>
            </motion.h4>
            
            <div className="grid gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-dark-800/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-glow-purple"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 5,
                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                  }}
                >
                  <motion.div 
                    className={`p-2 rounded-full bg-${service.color}-500/20 border border-${service.color}-500/30`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className={`w-5 h-5 text-${service.color}-400`} />
                  </motion.div>
                  <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                    {service.name}
                  </span>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 3 }}
                  >
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

        {/* Domains Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <motion.h4 
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="gradient-text-enhanced">OUR DOMAINS</span>
            </motion.h4>
            
            <div className="grid gap-4">
              {domains.map((domain, index) => (
                <motion.div
                  key={domain.name}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-dark-800/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-glow-purple"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <motion.div 
                    className={`p-2 rounded-full bg-${domain.color}-500/20 border border-${domain.color}-500/30`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <domain.icon className={`w-5 h-5 text-${domain.color}-400`} />
                  </motion.div>
                  <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                    {domain.name}
                  </span>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 3 }}
                  >
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact & CTA Section */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-6"
          >
            <motion.h4 
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="w-6 h-6 text-pink-400" />
              <span className="gradient-text-enhanced">GET IN TOUCH</span>
            </motion.h4>

        {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-dark-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: -5,
                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                  }}
                >
                  <motion.div 
                    className={`p-2 rounded-full bg-${contact.color}-500/20 border border-${contact.color}-500/30`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <contact.icon className={`w-5 h-5 text-${contact.color}-400`} />
                  </motion.div>
                  <span className="text-gray-200 font-medium">{contact.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Cards */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  I want to apply
                </h3>
                <p className="text-gray-400 text-sm mb-4">Find your next technology role</p>
                <motion.div
                  className="flex items-center gap-2 text-purple-400"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium">Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>

              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
                  I want to hire
                </h3>
                <p className="text-gray-400 text-sm mb-4">Find your perfect technology partner</p>
                <motion.div
                  className="flex items-center gap-2 text-blue-400"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-medium">Hire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>

        {/* Enhanced Footer Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <motion.div 
              className="flex flex-wrap gap-6 text-sm text-gray-400"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <span className="hover:text-white transition-colors cursor-pointer">© 2025 Sklassics Technologies</span>
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-glow-purple"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 2.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
              }}
            >
          +91 9392732341
            </motion.div>
            
            <motion.div 
              className="text-xs text-gray-500"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              Web Design by Sklassics
            </motion.div>
        </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;