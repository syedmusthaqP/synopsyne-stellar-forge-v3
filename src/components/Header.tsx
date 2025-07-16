
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = {
    technology: {
      label: 'Technology',
      items: [
        { label: 'Technology Galaxy', href: '/technology' },
        { label: 'Where Synapses Meet Systems', href: '/where-synapses-meet-systems' }
      ]
    },
    architecture: {
      label: 'Architecture',
      items: [
        { label: 'Neural Service Architecture', href: '/neural-service-architecture' },
        { label: 'Solution Architecture', href: '/solution-architecture' }
      ]
    },
    advantage: {
      label: 'Advantage',
      items: [
        { label: 'The Synopsyne Advantage', href: '/why-choose-us' }
      ]
    }
  };

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glassmorphism backdrop-blur-lg mobile-header' : 'bg-transparent mobile-header'
    }`}>
      <nav className="container mx-auto px-6 py-4 mobile-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white" onClick={handleLinkClick}>
            <span className="text-neon">Synopsyne</span>
            <span className="ml-1">Dynamics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(navigationItems).map(([key, section]) => (
              <div key={key} className="relative group">
                <button
                  className="flex items-center text-white hover:text-neon transition-colors"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {section.label}
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Menu with Black Transparent Background */}
                <div 
                  className={`absolute top-full left-0 mt-2 w-64 bg-black/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-4 transition-all duration-200 shadow-xl ${
                    activeDropdown === key ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  style={{
                    background: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div className="space-y-2">
                    {section.items.map((item, index) => (
                      <div key={index}>
                        <Link
                          to={item.href}
                          className="block text-white hover:text-neon transition-colors py-2 px-3 rounded hover:bg-cyan-500/10"
                          onClick={handleLinkClick}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Direct Links */}
            <Link 
              to="/testimonials" 
              className="text-white hover:text-neon transition-colors"
              onClick={handleLinkClick}
            >
              Testimonials
            </Link>
            
            {/* Get In Touch Button */}
            <Link 
              to="/contact" 
              className="neon-border px-6 py-2 rounded-lg text-neon hover:bg-cyan-500/10 transition-all"
              onClick={handleLinkClick}
            >
              Get In Touch
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
          <div className="md:hidden mt-4 mobile-nav rounded-lg p-4 border border-cyan-500/20 mobile-card">
            <div className="flex flex-col space-y-4">
              {Object.entries(navigationItems).map(([key, section]) => (
                <div key={key}>
                  <button
                    className="flex items-center justify-between w-full text-left text-white hover:text-neon transition-colors text-base font-medium py-2 px-2 rounded-lg hover:bg-cyan-500/10"
                    onClick={() => handleDropdownToggle(key)}
                  >
                    {section.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === key ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === key && (
                    <div className="mt-2 ml-4 space-y-1">
                      {section.items.map((item, index) => (
                        <div key={index}>
                          <Link
                            to={item.href}
                            className="block text-gray-300 hover:text-neon transition-colors py-2 px-3 rounded-lg hover:bg-cyan-500/5 text-sm"
                            onClick={handleLinkClick}
                          >
                            • {item.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Direct Links */}
              <div className="border-t border-gray-600 pt-4">
                <Link
                  to="/testimonials"
                  className="block text-white hover:text-neon transition-colors text-base font-medium py-2 px-2 rounded-lg hover:bg-cyan-500/10"
                  onClick={handleLinkClick}
                >
                  Testimonials
                </Link>
              </div>
              
              {/* Mobile Get In Touch Button */}
              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="block neon-border px-4 py-3 rounded-lg text-neon hover:bg-cyan-500/10 transition-all text-center font-semibold"
                  onClick={handleLinkClick}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
