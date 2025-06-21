import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDomains, setShowDomains] = useState(false);

  const domains = [
    { name: 'Sklassics', url: 'https://sklassics.com' },
    { name: 'Sklassics Tech', url: 'https://sklassicstech.com' },
    { name: 'Sklassics Tutor', url: 'https://sklassicstutor.com' },
    { name: 'Sklassics AI', url: 'https://sklassics-ai.com' },
    { name: 'Sklassics LMS', url: 'https://sklassics-lms.com' },
    { name: 'Sklassics Quiz', url: 'https://sklassics-quiz.com' },
    { name: 'Hanuman Cars', url: 'https://hanumancars.com' },
    { name: 'Sklassics Loan', url: 'https://sklassics-loan.com' },
    { name: 'Sklassics Realty', url: 'https://vlrws.com' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
          scrolled ? 'bg-dark/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
        <img src="https://sklassics.com/wp-content/uploads/2024/06/Sklassics.png" alt="LMS" className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-light hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            ))}
            <button 
              onClick={() => setShowDomains(!showDomains)}
              className="relative text-light hover:text-primary transition-colors duration-300"
            >
              Network
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-light focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-dark/95 backdrop-blur-md py-4 px-6"
          >
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-light hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setShowDomains(!showDomains);
                  setIsOpen(false);
                }}
                className="text-left text-light hover:text-primary transition-colors duration-300"
              >
                Network
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Domain Network Overlay */}
      {showDomains && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-dark/95 backdrop-blur-md z-40 flex items-center justify-center"
        >
          <div className="container mx-auto px-6 py-12">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold gradient-text">Sklassics Network</h2>
              <button 
                onClick={() => setShowDomains(false)}
                className="text-light hover:text-primary"
              >
                <FiX size={24} />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {domains.map((domain, index) => (
                <motion.a
                  key={index}
                  href={domain.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{domain.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{domain.url}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-primary">2024</span>
                    <span className="text-xs px-3 py-1 bg-primary/20 rounded-full">Explore</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;