import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Circuit lines animation
const CircuitLines = () => {
  const linesRef = useRef<THREE.Group>(null!);
  
  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  
  // Create circuit pattern
  const createCircuitLine = (startX: number, startY: number, length: number, direction: string) => {
    const points = [];
    let currentX = startX;
    let currentY = startY;
    
    points.push(new THREE.Vector3(currentX, currentY, 0));
    
    // Create a path with random turns
    for (let i = 0; i < length; i++) {
      if (direction === 'horizontal') {
        currentX += (Math.random() * 0.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
        if (Math.random() > 0.7) {
          currentY += (Math.random() * 0.3) * (Math.random() > 0.5 ? 1 : -1);
        }
      } else {
        currentY += (Math.random() * 0.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
        if (Math.random() > 0.7) {
          currentX += (Math.random() * 0.3) * (Math.random() > 0.5 ? 1 : -1);
        }
      }
      
      points.push(new THREE.Vector3(currentX, currentY, 0));
    }
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
      color: Math.random() > 0.5 ? '#6C63FF' : '#43CEA2',
      transparent: true,
      opacity: 0.3
    });
    
    return new THREE.Line(geometry, material);
  };
  
  // Create multiple circuit lines
  const lines = [];
  for (let i = 0; i < 30; i++) {
    const startX = (Math.random() - 0.5) * 10;
    const startY = (Math.random() - 0.5) * 10;
    const length = Math.floor(Math.random() * 5) + 3;
    const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
    
    lines.push(createCircuitLine(startX, startY, length, direction));
  }
  
  return (
    <group ref={linesRef}>
      {lines.map((line, index) => (
        <primitive key={index} object={line} />
      ))}
    </group>
  );
};

// Connection node
const ConnectionNode = () => {
  const nodeRef = useRef<THREE.Mesh>(null!);
  
  useFrame(({ clock }) => {
    if (nodeRef.current) {
      nodeRef.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
      nodeRef.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.1;
    }
  });
  
  return (
    <mesh ref={nodeRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#6C63FF"
        emissive="#43CEA2"
        emissiveIntensity={0.5}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
};

// Holographic card component
const HolographicCard = ({ 
  title, 
  description, 
  buttonText,
  isLeft = true,
  delay = 0
}: { 
  title: string, 
  description: string, 
  buttonText: string,
  isLeft?: boolean,
  delay?: number
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.8, 
          delay 
        }
      } : {}}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(108, 99, 255, 0.2)',
        transition: { duration: 0.2 }
      }}
      className="glass rounded-xl overflow-hidden holographic"
    >
      <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 mb-8">{description}</p>
        
        {/* <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-md text-white font-medium transition-colors">
          {buttonText}
        </button> */}
        
        <div className="mt-4 text-center">
          {/* <span className="text-xs font-mono text-primary">INITIATE {isLeft ? 'APPLY' : 'HIRE'}</span> */}
        </div>
      </div>
    </motion.div>
  );
};

const TalentSection = () => {
  return (
    <section id="talent" className="relative py-20 min-h-screen overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <CircuitLines />
          <ConnectionNode />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Where talent meets opportunity</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with the right talent or find your next opportunity
          </p>
        </motion.div>
        
        {/* Holographic Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <HolographicCard
  title="I want to learn"
  description="Kickstart your journey in finance! Discover internships, training, and real-world projects designed for students like you."
  buttonText="Start Learning"
  isLeft={true}
  delay={0.2}
/>

<HolographicCard
  title="I want to grow"
  description="Unlock your potential with mentorship, workshops, and networking opportunities tailored for ambitious students."
  buttonText="Explore Growth"
  isLeft={false}
  delay={0.4}
/>
        </div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-xs text-gray-400">PLACEMENTS</div>
                <div className="text-2xl font-bold text-primary">500+</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-xs text-gray-400">COMPANIES</div>
                <div className="text-2xl font-bold text-primary">100+</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-xs text-gray-400">SUCCESS RATE</div>
                <div className="text-2xl font-bold text-primary">95%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TalentSection;