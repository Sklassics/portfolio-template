import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { FiCode, FiLayers, FiSmartphone, FiBook, FiCloud, FiHome } from 'react-icons/fi';

// Hexagon grid background
const HexGrid = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  
  // Create hexagon pattern
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const hexSize = 0.5;
  const gridSize = 10;
  
  for (let x = -gridSize; x <= gridSize; x += 1.5) {
    for (let y = -gridSize; y <= gridSize; y += 1.732) {
      const offsetX = (y % 3.464 !== 0) ? 0.75 : 0;
      
      // Hexagon vertices
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        vertices.push(
          x + offsetX + hexSize * Math.cos(angle),
          y + hexSize * Math.sin(angle),
          0
        );
      }
    }
  }
  
  const positions = new Float32Array(vertices);
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  // Create faces
  const indices = [];
  for (let i = 0; i < positions.length / 3 - 6; i += 6) {
    // Add triangles from center to each edge
    for (let j = 0; j < 6; j++) {
      const nextJ = (j + 1) % 6;
      indices.push(i + j, i + nextJ, i + j);
    }
  }
  
  geometry.setIndex(indices);
  
  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <primitive object={geometry} />
      <lineBasicMaterial color="#6C63FF" transparent opacity={0.2} />
    </mesh>
  );
};

// Service card component
const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  domain, 
  index 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  domain: string,
  index: number 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.5, 
          delay: index * 0.1 
        }
      } : {}}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass rounded-xl overflow-hidden"
    >
      <div className={`h-2 bg-gradient-to-r from-primary to-accent transition-all duration-500 ${isHovered ? 'w-full' : 'w-1/3'}`}></div>
      
      <div className="p-6">
        <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-2xl text-primary">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-6">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-">{domain}</span>
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
      </div>
    </motion.div>
  );
};

// Animated hexagon boot sequence
const BootingHexagon = ({ delay, children }: { delay: number, children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-xl"></div>
      <div className="hexagon-shape bg-dark/80 backdrop-blur-sm p-6 flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <FiCode />,
      title: "IT Training & Placements",
      description: "Industry-relevant IT training programs with placement support for students and professionals.",
      domain: "sklassics.com"
    },
    {
      icon: <FiLayers />,
      title: "Web & Mobile Development",
      description: "Custom web and mobile applications built with modern technologies and best practices.",
      domain: "sklassicstech.com"
    },
    {
      icon: <FiCloud />,
      title: "AI & Cloud Solutions",
      description: "Advanced AI and cloud integration services to power your business transformation.",
      domain: "sklassics-ai.com"
    },
    {
      icon: <FiSmartphone />,
      title: "Travel Services",
      description: "Reliable car rental and travel solutions for individuals and businesses.",
      domain: "hanumancars.com"
    },
    {
      icon: <FiBook />,
      title: "LMS & Quiz Applications",
      description: "Modern learning management systems and interactive quiz platforms for education.",
      domain: "sklassics-lms.com"
    },
    {
      icon: <FiHome />,
      title: "Real Estate Solutions",
      description: "Property management and real estate platform solutions for the digital age.",
      domain: "vlrws.com"
    }
  ];

  return (
    <section id="services" className="relative py-20 min-h-screen overflow-hidden">
      {/* Hexagon Grid Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <HexGrid />
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Initiated Systems</h2>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive suite of digital services and solutions
          </p>
        </motion.div>
        
        {/* Booting Hexagons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {['TRAINING', 'DEVELOPMENT', 'AI', 'CLOUD'].map((item, index) => (
            <BootingHexagon key={index} delay={index * 0.2}>
              <div className="text-xs text-primary mb-2 font-mono">SYSTEM.{index + 1}</div>
              <div className="text-lg font-bold">{item}</div>
              <div className="text-xs text-green-400 mt-2 font-mono">ACTIVE</div>
            </BootingHexagon>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              domain={service.domain}
              index={index}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hexagon-shape {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-center: center;
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;