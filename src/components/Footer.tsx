
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// All nav bar tabs and their sublinks
const navLinks = [
  { label: 'Technology Galaxy', href: '/technology' },
  { label: 'Where Synapses Meet Systems', href: '/where-synapses-meet-systems' },
  { label: 'Neural Service Architecture', href: '/neural-service-architecture' },
  { label: 'Solution Architecture', href: '/solution-architecture' },
  { label: 'The Synopsyne Advantage', href: '/why-choose-us' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-gray-400 mb-6 max-w-md">
              Engineering the future through innovative software solutions. 
              We transform complex challenges into elegant, scalable technology.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Mail, href: 'mailto:hello@synopsyne.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-lg glassmorphism flex items-center justify-center text-gray-400 hover:text-neon hover:bg-cyan-500/10 transition-all"
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Custom Development',
                'Cloud Architecture',
                'AI & Machine Learning',
                'Mobile Apps',
                'DevOps & Automation',
                'Consulting'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-neon transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company (now: All nav tabs) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-gray-400 hover:text-neon transition-colors text-sm block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Synopsyne Dynamics. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-sm">
            <a href="#" className="text-gray-400 hover:text-neon transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-neon transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-neon transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Innovation Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center glassmorphism px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
            <span className="text-gray-300 text-xs">Powered by Innovation • Built with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

