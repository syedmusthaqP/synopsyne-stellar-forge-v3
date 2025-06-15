
import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glassmorphism backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-neon">Synopsyne</span>
            <span className="ml-1">Dynamics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-white hover:text-neon transition-colors">Services</Link>
            <Link to="/testimonials" className="text-white hover:text-neon transition-colors">Testimonials</Link>
            <Link to="/technology" className="text-white hover:text-neon transition-colors">Technology</Link>
            <Link to="/portfolio" className="text-white hover:text-neon transition-colors">Portfolio</Link>
            <Link to="/about" className="text-white hover:text-neon transition-colors">About</Link>
            
            {/* Login Button */}
            <Link to="/login" className="flex items-center px-4 py-2 rounded-lg glassmorphism neon-border text-neon hover:bg-cyan-500/10 transition-all">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Link>
            
            <Link to="/contact" className="neon-border px-6 py-2 rounded-lg text-neon hover:bg-cyan-500/10 transition-all">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glassmorphism rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/services" className="text-white hover:text-neon transition-colors">Services</Link>
              <Link to="/testimonials" className="text-white hover:text-neon transition-colors">Testimonials</Link>
              <Link to="/technology" className="text-white hover:text-neon transition-colors">Technology</Link>
              <Link to="/portfolio" className="text-white hover:text-neon transition-colors">Portfolio</Link>
              <Link to="/about" className="text-white hover:text-neon transition-colors">About</Link>
              
              {/* Mobile Login Button */}
              <Link to="/login" className="flex items-center px-4 py-2 rounded-lg glassmorphism neon-border text-neon hover:bg-cyan-500/10 transition-all">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Link>
              
              <Link to="/contact" className="neon-border px-6 py-2 rounded-lg text-neon hover:bg-cyan-500/10 transition-all text-center">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
