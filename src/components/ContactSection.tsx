import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

// Gradient background animation
const GradientBackground = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });
  
  // Shader for animated gradient
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  
  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    
    void main() {
      vec2 position = vUv * 2.0 - 1.0;
      float d = length(position);
      
      vec3 color1 = vec3(0.42, 0.39, 1.0); // Primary color
      vec3 color2 = vec3(0.26, 0.81, 0.63); // Accent color
      vec3 color3 = vec3(0.9, 0.4, 0.7);    // Pink color
      
      float t1 = sin(time * 0.2) * 0.5 + 0.5;
      float t2 = cos(time * 0.3) * 0.5 + 0.5;
      
      vec3 color = mix(mix(color1, color2, t1), color3, t2 * d);
      
      gl_FragColor = vec4(color, 0.5);
    }
  `;
  
  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 }
        }}
        transparent
      />
    </mesh>
  );
};

// Terminal-inspired form component
const TerminalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending message...');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="glass rounded-xl p-6 backdrop-blur-md">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
        <div className="text-sm font-mono ml-2">mission_console</div>
      </div>
      
      <form onSubmit={handleSubmit} className="font-mono">
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <span className="text-primary mr-2">$</span>
            <label htmlFor="name" className="text-sm">user.name</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-dark/50 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-primary"
            placeholder="Enter your name"
          />
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <span className="text-primary mr-2">$</span>
            <label htmlFor="email" className="text-sm">user.email</label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-dark/50 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-primary"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <span className="text-primary mr-2">$</span>
            <label htmlFor="message" className="text-sm">user.message</label>
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-dark/50 border border-white/10 rounded px-3 py-2 focus:outline-none focus:border-primary resize-none"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-accent text-white py-2 rounded font-medium hover:opacity-90 transition-opacity flex justify-center items-center"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : 'Send Message'}
        </button>
        
        {formStatus && (
          <div className="mt-4 text-center text-sm">
            <span className={formStatus.includes('success') ? 'text-green-400' : 'text-primary'}>
              {formStatus}
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

// Location/time display component
const LocationDisplay = () => {
  const [time, setTime] = useState(new Date());
  
  // Update time every second
  useState(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  });
  
  return (
    <div className="glass rounded-xl p-6 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-mono text-primary">LOCATION STATUS</div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></div>
          <span className="text-xs text-green-400">ACTIVE NODE</span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-xs text-gray-400 mb-1">CURRENT TIME</div>
        <div className="text-xl font-mono">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-xs text-gray-400 mb-1">LOCATION CODE</div>
        <div className="text-xl font-mono">LOC: 2025-06-14</div>
      </div>
      
      <div>
        <div className="text-xs text-gray-400 mb-1">COORDINATES</div>
        <div className="text-xl font-mono">28.7041° N, 77.1025° E</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'info@sklassics.com'
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+91 9392732341'
    },
    {
      icon: <FiMapPin />,
      label: 'Address',
      value: 'H.No - 34 , rajiv Enclave Colony near ECIL , 500062'
    }
  ];
  
  const socialLinks = [
    { icon: <FiTwitter />, url: '#' },
    { icon: <FiLinkedin />, url: '#' },
    { icon: <FiGithub />, url: '#' },
    { icon: <FiInstagram />, url: '#' }
  ];

  return (
    <section id="contact" className="relative py-20 min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <GradientBackground />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Mission Console</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <TerminalForm />
          </motion.div>
          
          {/* Location Display and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <LocationDisplay />
            
            <div className="glass rounded-xl p-6 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                      <div className="text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <div className="text-xs text-gray-400 mb-3">Connect With Us</div>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary/20 transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;