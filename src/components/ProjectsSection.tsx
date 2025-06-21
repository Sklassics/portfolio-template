import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Matrix code rain background
const MatrixRain = () => {
  const meshRef = useRef<THREE.Points>(null!);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        // Move particles down
        positions[i + 1] -= 0.01;
        
        // Reset particles that go below the screen
        if (positions[i + 1] < -10) {
          positions[i + 1] = 10;
          positions[i] = (Math.random() - 0.5) * 20;
        }
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  // Create particles
  const particleCount = 500;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;     // x
    positions[i + 1] = (Math.random() - 0.5) * 20; // y
    positions[i + 2] = (Math.random() - 0.5) * 5;  // z
  }
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#43CEA2"
        transparent
        opacity={0.6}
      />
    </points>
  );
};

// Project window component
const ProjectWindow = ({ 
  title, 
  description, 
  image, 
  index 
}: { 
  title: string, 
  description: string, 
  image: string,
  index: number 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        transition: { 
          duration: 0.8, 
          delay: index * 0.2 
        }
      } : {}}
      className="glass rounded-xl overflow-hidden"
    >
      {/* Window Header */}
      <div className="bg-dark/80 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-mono text-gray-400">{title}.exe</div>
        <div className="text-xs font-mono text-green-400">RUNNING</div>
      </div>
      
      {/* Window Content */}
      <div className="p-4">
        <div className="h-48 overflow-hidden mb-4 rounded-md">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-green-400 font-mono">ACTIVE</span>
          </div>
          <button     className="px-4 py-2 rounded-md text-sm font-medium transition-all bg-white/10 text-white hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white"
>
            Launch
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Domain satellite component
const DomainItem = ({ 
  name, 
  domain, 
  description, 
  index 
}: { 
  name: string, 
  domain: string, 
  description: string,
  index: number 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative glass rounded-xl p-6 overflow-hidden"
    >
      {/* Spark effect on hover */}
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-20"></div>
        </motion.div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-primary">2024</span>
        <button className="text-xs px-2 py-1 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          Read
        </button>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-300 text-sm mb-6">{description}</p>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">{domain}</span>
        <a 
          href={`https://${domain}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            isHovered 
              ? 'bg-gradient-to-r from-primary to-accent text-white' 
              : 'bg-white/10 text-white'
          }`}
        >
          Explore
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
  {
    title: "AI Interview Panel",
    description: "NLP and machine learning to evaluate answers, provide insights, and mimic human-like interviews across various domains.",
    image: "/assets/image.png"
  },
  {
    title: "Hanuman Car Rental",
    description: "A full-fledged car booking solution that streamlines both customer and admin experiences.",
    image: "/assets/image1.png"
  },
  {
    title: "Food Delivery App",
    description: "An intuitive food ordering app with real-time tracking, restaurant management, and secure payment integration.",
    image: "/assets/food.png"
  },
  {
    title: "Portfolio Photography",
    description: "A clean and elegant portfolio for photographers to showcase work, manage bookings, and receive client inquiries.",
    image: "/assets/photography.png"
  },
  {
    title: "Power BI Dashboard",
    description: "Interactive business intelligence dashboards built using Power BI to visualize and analyze key metrics.",
    image: "/assets/powerbi.png"
  },
  {
    title: "eCommerce Platform",
    description: "Scalable eCommerce application with product filtering, cart system, secure checkout, and admin panel.",
    image: "/assets/ecommerce.png"
  },
  {
    title: "LMS System",
    description: "A learning management system with student-teacher portals, course progress tracking, and quiz modules.",
    image: "/assets/lms.png"
  },
   {
    title: "Hostel Management System",
    description: "Comprehensive hostel management with room allocation, student records, fee tracking, and visitor management.",
    image: "/assets/lms.png"
}
];

  const domains = [
    {
      name: "IT Training and Placements",
      domain: "sklassics.com",
      description: "Industry-relevant IT training programs with placement support for students and professionals."
    },
    {
      name: "IT Services",
      domain: "sklassicstech.com",
      description: "Custom web, mobile, AI, and cloud solutions for businesses of all sizes everywhere. Empower your business with innovative technology."
    },
    {
      name: "Online and Offline Tutoring",
      domain: "sklassicstutor.com",
      description: "Flexible tutoring for students—live, batch-based, and self-paced learning options."
    },
    {
      name: "AI Interview Mock Applications",
      domain: "sklassics-ai.com",
      description: "Practice interviews with AI-driven feedback and real-world scenarios."
    },
    {
      name: "LMS Application Services",
      domain: "sklassics-lms.com",
      description: "Modern learning management systems for schools, colleges, and corporates."
    },
    {
      name: "Quiz Application Services",
      domain: "sklassics-quiz.com",
      description: "Interactive quiz platforms for education, recruitment, and events."
    },
    {
      name: "Travelling Services",
      domain: "hanumancars.com",
description: "Reliable car rental and travel solutions for individuals and businesses. Enjoy flexible plans and 24/7 customer support."    },
    {
      name: "Loan Application Services",
      domain: "sklassics-loan.com",
      description: "Secure, automated loan application and management platform for customers and admins."
    }
  ];

  return (
    <section id="projects" className="relative py-20 min-h-screen overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <MatrixRain />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-green-400 font-mono">SYSTEMS ONLINE</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Work: Active Systems</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our flagship projects and digital solutions
          </p>
        </motion.div>
        
        {/* Project Windows */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectWindow
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>
        
        {/* Domains Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              <span className="text-white">Sklassics</span>
              <span className="text-primary"> Universe</span>
            </h2>
            <div className="flex items-center">
              <span className="text-primary mr-4">ACTIVE</span>
              <span className="text-sm font-mono">LOC: 2025-06-14</span>
            </div>
          </div>
        </motion.div>
        
        {/* Domain Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <DomainItem
              key={index}
              name={domain.name}
              domain={domain.domain}
              description={domain.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;