
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

  const isHomePage = location.pathname === '/';

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
            {isHomePage ? (
              <a href="#technology" className="text-white hover:text-neon transition-colors">Technology</a>
            ) : (
              <Link to="/#technology" className="text-white hover:text-neon transition-colors">Technology</Link>
            )}
            <a href="#portfolio" className="text-white hover:text-neon transition-colors">Portfolio</a>
            <a href="#about" className="text-white hover:text-neon transition-colors">About</a>
            {isHomePage ? (
              <a href="#contact" className="neon-border px-6 py-2 rounded-lg text-neon hover:bg-cyan-500/10 transition-all">
                Contact Us
              </a>
            ) : (
              <Link to="/#contact" className="neon-border px-6 py-2 rounded-lg text-neon hover:bg-cyan-500/10 transition-all">
                Contact Us
              </Link>
            )}
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
              {isHomePage ? (
                <a href="#technology" className="text-white hover:text-neon transition-colors">Technology</a>
              ) : (
                <Link to="/#technology" className="text-white hover:text-neon transition-colors">Technology</Link>
              )}
              <a href="#portfolio" className="text-white hover:text-neon transition-colors">Portfolio</a>
              <a href="#about" className="text-white hover:text-neon transition-colors">About</a>
              {isHomePage ? (
                <a href="#contact" className="neon-border px-6 py-2 rounded-lg text-neon hover:bg-cyan-500/10 transition-all text-center">
                  Contact Us
                </a>
              ) : (
                <Link to="/#contact" className="neon-border px-6 py-2 rounded-lg text-neon hover:bg-cyan-500/10 transition-all text-center">
                  Contact Us
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
