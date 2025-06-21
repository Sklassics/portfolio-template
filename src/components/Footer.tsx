import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const domains = [
    'sklassics.com',
    'sklassicstech.com',
    'sklassicsacademy.com',
    'sklassics-lms.com',
    'sklassics-ai.com',
    'sklassicstutor.com',
    'sklassics-quiz.com',
    'hanumancars.com',
    'vlrws.com'
  ];

  const services = [
    'IT Training & Placement',
    'Web Development',
    'Mobile Apps',
    'AI Solutions',
    'Cloud Services'
  ];

  return (
    <footer className="relative bg-dark/80 backdrop-blur-md py-12">
      <div className="container mx-auto px-6">
        {/* Mini Globe */}
        {/* <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">S</span>
            </div>
          </div>
        </div> */}
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sklassics Technologies</h3>
            <p className="text-gray-400 mb-4">
              Creating innovative digital experiences that transform businesses and engage users.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiTwitter />, href: '#' },
                { icon: <FiLinkedin />, href: '#' },
                { icon: <FiGithub />, href: '#' },
                { icon: <FiInstagram />, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary/20 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-bold mb-3 text-gray-300">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-400 hover:text-primary transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3 text-gray-300">Navigation</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Domains */}
          <div>
            <h4 className="text-sm font-bold mb-3 text-gray-300">Our Domains</h4>
            <div className="grid grid-cols-2 gap-2">
              {domains.slice(0, 6).map((domain, index) => (
                <a 
                  key={index}
                  href={`https://${domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-primary transition-colors truncate"
                >
                  {domain}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sklassics Technologies
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 text-xs hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-xs hover:text-primary transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-400 text-xs">
              Web Design by Sklassics
            </span>
          </div>
        </div>
      </div>
      
      {/* Orbiting Dots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animation: `orbit ${5 + Math.random() * 10}s linear infinite`
            }}
          ></div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;