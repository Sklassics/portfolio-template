import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { FiCode, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';

// 3D mesh background
const TechMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <torusKnotGeometry args={[5, 0.4, 128, 32]} />
      <meshStandardMaterial 
        color="#6C63FF" 
        wireframe 
        transparent 
        opacity={0.2} 
      />
    </mesh>
  );
};

// Rotating badge component
const RotatingBadge = ({ text, delay }: { text: string, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="w-32 h-32 rounded-full  bg-gradient-to-r from-primary to-accent flex items-center justify-center p-1"
    >
      <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
        <div className="text-center">
          <div className="text-xs text-gray-400">
            {text.split(' ')[0]}
          </div>
          <div className="font-bold text-white">
            {text.split(' ')[1]}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 3D floating icon
const FloatingIcon = ({ children, delay }: { children: React.ReactNode, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative h-24"
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Float speed={4} rotationIntensity={0.5} floatIntensity={2}>
          <mesh>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial 
              color="#6C63FF"
              transparent
              opacity={0.7}
              wireframe
            />
          </mesh>
        </Float>
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
        {children}
      </div>
    </motion.div>
  );
};

// Timeline item component
const TimelineItem = ({ year, title, description, index }: { 
  year: string, 
  title: string, 
  description: string,
  index: number
}) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}
    >
      <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
          <span className="font-bold">{year}</span>
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
      
      <div className="flex-1"></div>
    </motion.div>
  );
};

// 3D card component
const Card3D = ({ title, description, index }: { 
  title: string, 
  description: string,
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90, z: -100 }}
      whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      viewport={{ once: true }}
      className="card-3d glass rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all"
    >
      <h3 className="text-xl font-bold mb-3 gradient-text">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const timelineItems = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'Sklassics Technologies was founded with a vision to bridge the gap between talent and technology.'
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Launched multiple domains and services including AI Interview Panel and HanumanCar.'
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Expanded operations worldwide with a focus on innovative digital solutions.'
    }
  ];
  
  const values = [
    {
      icon: <FiCode />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology solutions.'
    },
    {
      icon: <FiUsers />,
      title: 'Community',
      description: 'Building a network of talented professionals and businesses.'
    },
    {
      icon: <FiAward />,
      title: 'Excellence',
      description: 'Delivering high-quality services and solutions consistently.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Growth',
      description: 'Enabling accelerated digital growth for our clients and partners.'
    }
  ];

  return (
    <section id="about" className="relative py-20 min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <TechMesh />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Who We Are</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Sklassics, we are passionate technology enablers committed to shaping the future through IT.
          </p>
        </motion.div>
        
        {/* 3D Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card3D 
            title="Our Mission" 
            description="Our mission is to bridge the gap between talent and technology by delivering value-driven solutions. We aim to transform lives and businesses through quality education, digital innovation, and community engagement."
            index={0}
          />
          <Card3D 
            title="Our Vision" 
            description="To be at the forefront of digital innovation, creating a future where technology uplifts everyone and enables sustainable growth across industries and communities."
            index={1}
          />
        </div>
        
        {/* Rotating Badges */}
        <div className="flex justify-center gap-8 mb-20">
          <RotatingBadge text="SINCE 2023" delay={0.2} />
          <RotatingBadge text="OPERATING WORLDWIDE" delay={0.4} />
        </div>
        
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Our Journey</h3>
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Values with 3D Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Our Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <FloatingIcon delay={index * 0.2}>
                  {value.icon}
                </FloatingIcon>
                <h4 className="text-xl font-bold mt-4 mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;