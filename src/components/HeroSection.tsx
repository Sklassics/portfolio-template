import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import dynamic from 'next/dynamic';

// Globe component with data nodes and connection lines
const Globe = ({ mousePosition }: { mousePosition: { x: number, y: number } }) => {
  const globeRef = useRef<THREE.Group>(null!);
  const nodesRef = useRef<THREE.Group>(null!);
  const linesRef = useRef<THREE.Group>(null!);
  
  // Create nodes and connection lines
  useEffect(() => {
    if (!nodesRef.current || !linesRef.current) return;
    
    // Clear previous nodes and lines
    while(nodesRef.current.children.length > 0) {
      nodesRef.current.remove(nodesRef.current.children[0]);
    }
    
    while(linesRef.current.children.length > 0) {
      linesRef.current.remove(linesRef.current.children[0]);
    }
    
    // Create nodes
    const nodeCount = 15;
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: '#43CEA2' });
    const nodeGeometry = new THREE.SphereGeometry(0.03, 16, 16);
    
    const nodePositions = [];
    
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      
      // Random position on sphere
      const phi = Math.acos(-1 + Math.random() * 2);
      const theta = Math.random() * Math.PI * 2;
      
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      
      node.position.set(x, y, z);
      nodePositions.push(new THREE.Vector3(x, y, z));
      nodesRef.current.add(node);
    }
    
    // Create connection lines
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: '#6C63FF',
      transparent: true,
      opacity: 0.5
    });
    
    // Connect some nodes with lines
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        // Only connect some nodes (not all)
        if (Math.random() > 0.85) {
          const points = [nodePositions[i], nodePositions[j]];
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lineGeometry, lineMaterial);
          linesRef.current.add(line);
        }
      }
    }
  }, []);
  
  // Rotate globe based on mouse position
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
      
      // Subtle tilt based on mouse position
      globeRef.current.rotation.x = THREE.MathUtils.lerp(
        globeRef.current.rotation.x,
        mousePosition.y * 0.1,
        0.05
      );
      
      globeRef.current.rotation.y = THREE.MathUtils.lerp(
        globeRef.current.rotation.y,
        mousePosition.x * 0.1 + globeRef.current.rotation.y,
        0.05
      );
    }
  });
  
  return (
    <group ref={globeRef}>
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial 
          color="#6C63FF"
          wireframe
          transparent
          opacity={0.4}
        />
      </Sphere>
      <group ref={nodesRef} />
      <group ref={linesRef} />
    </group>
  );
};

// Particle field for background
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null!);
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });
  
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.3}
      />
    </points>
  );
};

// Typewriter effect for heading
const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [text]);
  
  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

// Clock component with client-side only rendering to avoid hydration errors
const SystemClock = dynamic(() => Promise.resolve(() => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="absolute top-6 right-6 z-20 font-mono text-sm text-white/80">
      {/* <div className="flex items-center">
        <span className="mr-2">System Time:</span>
        <span className="text-accent">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </span>
      </div> */}
      {/* <div className="text-right text-xs text-white/60">LOC: 2025-06-14</div> */}
    </div>
  );
}), { ssr: false });

// Main Hero Section
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBootLog, setShowBootLog] = useState(true);
  const [now, setNow] = useState<number>();
  
  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Hide boot log after 2.5 seconds
    const timer = setTimeout(() => {
      setShowBootLog(false);
    }, 2500);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  // Set current time (client-only)
  useEffect(() => {
    setNow(Date.now());
  }, []);
  
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Boot Log Overlay - Easter Egg */}
      {showBootLog && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center font-mono text-green-500 overflow-hidden">
          <div className="max-w-2xl w-full px-4">
            <div className="mb-2">$ Initializing Sklassics System v2.5.0</div>
            <div className="mb-2">$ Loading core modules...</div>
            <div className="mb-2">$ Establishing global connections...</div>
            <div className="mb-2">$ Activating neural interfaces...</div>
            <div className="mb-2">$ System check: OK</div>
            <div className="animate-pulse">$ Launching interface...</div>
          </div>
        </div>
      )}
      
      {/* 3D Background */}
<div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} intensity={0.8} />
          <Globe mousePosition={mousePosition} />
          <ParticleField />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={false} 
          />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="glass rounded-xl p-8 md:p-12 max-w-5xl mx-auto backdrop-blur-md bg-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              <TypewriterText text="ACCELERATING DIGITAL GROWTH" />
            </h1>
            
            <p className="text-xl text-gray-200 mb-8">
              Igniting innovation, empowering futures.
            </p>
            
<div className="flex flex-wrap gap-4 mb-8">
  <a
    href="#projects"
    className="px-4 py-4 rounded-md text-sm font-medium transition-all bg-white/10 text-white hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white"
  >
    Explore Our Ecosystem
  </a>
  <a
    href="https://sklassics-ai.com"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-4 rounded-md text-sm font-medium transition-all bg-white/10 text-white hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white"
  >
    Launch AI Interview Demo
  </a>
</div>


            <div className="flex items-center space-x-4 text-sm font-mono">
              <span className="text-primary">SKLASSICS INITIATED</span>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-accent">SYSTEM LIVE</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* System Time - Client-side only rendering */}
      <SystemClock />
      
      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
      >
        <div className="px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm flex items-center space-x-2 animate-pulse">
          <span className="text-white/80">SCROLL TO ENTER</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-white/80" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;