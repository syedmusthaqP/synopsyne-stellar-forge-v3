import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Code, TrendingUp, Download, MessageCircle, Star, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { ModernSkillShowcase } from '@/components/ui/modern-skill-showcase';
import { ProfessionalSkillRatings } from '@/components/ui/professional-skill-ratings';
import { GradientText } from '@/components/ui/gradient-text';

// Skills section with interactive skill tree visualization
function SkillsSection() {
  const [activeView, setActiveView] = useState<'tree' | 'list'>('tree');
  
  return (
    <section id="skills" className="py-20 bg-[#0a1929] relative overflow-hidden">
      {/* Animated Background Gradient with Tech Circuit Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#051527] to-[#0e2439] z-0">
        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#00c3ff" />
                <circle cx="0" cy="0" r="1" fill="#c961de" />
                <circle cx="0" cy="100" r="1" fill="#00c3ff" />
                <circle cx="100" cy="0" r="1" fill="#c961de" />
                <circle cx="100" cy="100" r="1" fill="#00c3ff" />
                <path d="M0,50 L100,50" stroke="#1e4976" strokeWidth="0.5" />
                <path d="M50,0 L50,100" stroke="#1e4976" strokeWidth="0.5" />
                <path d="M25,0 L25,100" stroke="#1e4976" strokeWidth="0.3" strokeDasharray="4 4" />
                <path d="M75,0 L75,100" stroke="#1e4976" strokeWidth="0.3" strokeDasharray="4 4" />
                <path d="M0,25 L100,25" stroke="#1e4976" strokeWidth="0.3" strokeDasharray="4 4" />
                <path d="M0,75 L100,75" stroke="#1e4976" strokeWidth="0.3" strokeDasharray="4 4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            
            {/* Animated floating nodes and connections */}
            <g className="animated-circuits">
              <motion.circle 
                cx="20%" 
                cy="30%" 
                r="3" 
                fill="#00c3ff" 
                initial={{ opacity: 0.2 }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.3, 1] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              <motion.circle 
                cx="80%" 
                cy="70%" 
                r="3" 
                fill="#c961de" 
                initial={{ opacity: 0.2 }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.3, 1] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
              <motion.circle 
                cx="65%" 
                cy="25%" 
                r="2" 
                fill="#00c3ff" 
                initial={{ opacity: 0.2 }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.3, 1] 
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2 
                }}
              />
              
              {/* Animated pulse between nodes */}
              <motion.path 
                d="M20%,30% L65%,25%" 
                stroke="#00c3ff" 
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              <motion.path 
                d="M65%,25% L80%,70%" 
                stroke="#c961de" 
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2
                }}
              />
            </g>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <span className="text-[#00c3ff] mr-2">•</span>
            <GradientText>Technical Expertise</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            An interactive visualization of my skills and how they interconnect across technical
            and business domains.
          </p>
          
          {/* View Toggle */}
          <div className="flex items-center justify-center mt-6 mb-4 space-x-4">
            <button
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeView === 'tree'
                  ? 'bg-gradient-to-r from-[#00c3ff] to-[#c961de] text-white'
                  : 'bg-[rgba(14,36,57,0.6)] text-gray-300 hover:bg-[rgba(14,36,57,0.8)]'
              }`}
              onClick={() => setActiveView('tree')}
            >
              Modern Skill Showcase
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeView === 'list'
                  ? 'bg-gradient-to-r from-[#00c3ff] to-[#c961de] text-white'
                  : 'bg-[rgba(14,36,57,0.6)] text-gray-300 hover:bg-[rgba(14,36,57,0.8)]'
              }`}
              onClick={() => setActiveView('list')}
            >
              Skill Ratings
            </button>
          </div>
        </motion.div>
        
        {/* Modern Skill Showcase */}
        {activeView === 'tree' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ModernSkillShowcase className="mb-10" />
            
            <p className="text-center text-gray-400 mt-8 text-sm">
              <span className="text-[#00c3ff]">Click</span> on category filters to explore specific skill areas.
              <br/>
              Each card represents a core competency with real-world achievements and proficiency levels.
            </p>
          </motion.div>
        )}
        
        {/* Professional Skill Ratings */}
        {activeView === 'list' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ProfessionalSkillRatings />
            
            <div className="text-center mt-8 p-6 rounded-xl bg-gradient-to-r from-[rgba(0,195,255,0.1)] to-[rgba(201,97,222,0.1)] border border-[rgba(0,195,255,0.2)]">
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-[#00c3ff] font-semibold">Click on skill cards</span> to view detailed certifications and achievements
              </p>
              <p className="text-gray-400 text-xs">
                Proficiency levels are based on real-world project experience and industry certifications
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function FounderProfile() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  
  // State for animated underline
  const [underlineWidth, setUnderlineWidth] = useState(0);
  
  // For animated subtitle
  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          'Human Resource',
          'Strategic Management',
          'Industrial Relations',
          'Electric Vehicles',
          'Aerodynamics'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
    
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);
  
  // For name underline animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setUnderlineWidth(100);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Circuit animation for background
  const circuitVariants = {
    animate: {
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  // Animation variants for hello text
  const helloVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Animation variants for buttons
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(0, 195, 255, 0.7)",
      transition: { duration: 0.3 }
    }
  };
  
  // Animation for header box
  const headerBoxVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const headerBoxGlowVariants = {
    animate: {
      boxShadow: [
        "0 0 5px rgba(0, 195, 255, 0.3)",
        "0 0 20px rgba(0, 195, 255, 0.7)",
        "0 0 5px rgba(0, 195, 255, 0.3)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  return (
    <section id="about" className="min-h-screen relative overflow-hidden pt-24 pb-12 bg-gradient-to-b from-[#052037] to-[#0a1929]">
      {/* Background light effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhZDEiIGN4PSIyMCUiIGN5PSIyMCUiIHI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0icmdiYSgwLCAxOTUsIDI1NSwgMC4xKSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9InJnYmEoMCwgMTk1LCAyNTUsIDApIiAvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwNzE1MjUiIC8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkMSkiIC8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-6 h-full relative z-10">
        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-120px)]">
          {/* Left Content - Text Content */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header Highlight Box with enhanced glow */}
            <motion.div 
              className="p-[2px] rounded-lg mb-6 relative overflow-hidden"
              variants={headerBoxVariants}
              initial="initial"
              animate="animate"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00c3ff] to-[#c961de] opacity-70 rounded-lg"></div>
              <motion.div 
                className="relative p-5 bg-[rgba(7,25,45,0.7)] rounded-lg backdrop-blur-md z-10 border border-[rgba(255,255,255,0.15)]"
                variants={headerBoxGlowVariants}
                animate="animate"
              >
                <p className="text-[#8acdff] text-sm">
                  <span className="text-[#00c3ff] font-bold">Architect of Innovation</span> | <span className="text-[#8acdff]">AI Trailblazer</span> | Vision-Driven Entrepreneur
                </p>
                <p className="text-[#8acdff] text-sm mt-1">Engineering Tomorrow's World</p>
                
                {/* Added decorative elements */}
                <div className="absolute -bottom-1 -right-1 w-16 h-16">
                  <motion.svg 
                    width="100%" 
                    height="100%" 
                    viewBox="0 0 50 50" 
                    animate={{ 
                      rotate: [0, 360],
                      transition: { duration: 15, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <path d="M5,5 L45,5 L45,45 L5,45 Z" fill="none" stroke="#00c3ff" strokeWidth="0.5" strokeOpacity="0.5" />
                    <circle cx="25" cy="25" r="3" fill="#00c3ff" fillOpacity="0.7" />
                  </motion.svg>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Code-like Intro with Animation */}
            <motion.div 
              className="mb-3 font-mono text-[#64748b]"
              variants={helloVariants}
              initial="initial"
              animate="animate"
            >
              &lt;/&gt; <span className="text-[#0ea5e9]">Hello, I'm</span>
            </motion.div>
            
            {/* Name with enhanced effects */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00c3ff]/30 to-[#c961de]/30 blur-lg opacity-50"></div>
              <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-bold mb-2 mt-0">
                <span className="text-white drop-shadow-[0_0_10px_rgba(0,195,255,0.3)]">Syed</span> 
                <span className="bg-gradient-to-r from-[#00c3ff] via-[#4f8efc] to-[#c961de] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,195,255,0.3)]">Musthaq</span>
              </h1>
              
              {/* Animated underline for name with enhanced glow */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-[#00c3ff] to-[#c961de] mt-1 relative"
                initial={{ width: "0%" }}
                animate={{ width: `${underlineWidth}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ boxShadow: "0 0 10px rgba(0, 195, 255, 0.7)" }}
              />
            </div>
            
            {/* Expert in: section with animated typing and light box */}
            <motion.div 
              className="mt-6 flex items-center h-10 text-lg text-gray-300 mb-6 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00c3ff]/10 to-[#c961de]/10 blur-md"></div>
              <span className="mr-2 text-white relative">Expert in:</span>
              <span className="text-[#00c3ff] font-semibold relative" ref={typedRef}></span>
            </motion.div>
            
            {/* Description with vertical line - enhanced with light effects */}
            <motion.div 
              className="relative border-l-2 border-[#1e4976] pl-4 mb-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-[#00c3ff]/50 blur-sm"></div>
              <p className="text-[#94a3b8] mb-3 relative">
                Transforming businesses <span className="text-[#8acdff] relative inline-block">
                  through strategic innovation and technology
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-[#00c3ff]/50"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </span> integration. Specialized in <span className="text-[#8acdff] relative inline-block">
                  operational excellence
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-[#00c3ff]/50"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                  />
                </span> and sustainable business development.
              </p>
            </motion.div>
            
            {/* Stat Pills with enhanced light effects */}
            <div className="flex flex-wrap gap-4 mt-6 mb-8">
              <motion.div 
                className="bg-[rgba(10,30,50,0.5)] border border-[#1e4976]/60 backdrop-blur-lg px-5 py-3 rounded-lg flex items-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 195, 255, 0.5)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00c3ff]/5 to-transparent"></div>
                <FileText className="h-5 w-5 text-[#00c3ff] mr-2 relative z-10" />
                <span className="text-white text-sm relative z-10">10+ Years Experience</span>
                
                {/* Light streak animation */}
                <motion.div 
                  className="absolute -right-20 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-[#00c3ff]/20 to-transparent transform skew-x-12"
                  animate={{
                    right: ['100%', '-20%'],
                    transition: { duration: 2, repeat: Infinity, repeatDelay: 3 }
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="bg-[rgba(10,30,50,0.5)] border border-[#1e4976]/60 backdrop-blur-lg px-5 py-3 rounded-lg flex items-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 195, 255, 0.5)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00c3ff]/5 to-transparent"></div>
                <Code className="h-5 w-5 text-[#00c3ff] mr-2 relative z-10" />
                <span className="text-white text-sm relative z-10">AI Implementation</span>
                
                <motion.div 
                  className="absolute -right-20 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-[#00c3ff]/20 to-transparent transform skew-x-12"
                  animate={{
                    right: ['100%', '-20%'],
                    transition: { duration: 2, repeat: Infinity, repeatDelay: 4 }
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="bg-[rgba(10,30,50,0.5)] border border-[#1e4976]/60 backdrop-blur-lg px-5 py-3 rounded-lg flex items-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 195, 255, 0.5)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00c3ff]/5 to-transparent"></div>
                <TrendingUp className="h-5 w-5 text-[#00c3ff] mr-2 relative z-10" />
                <span className="text-white text-sm relative z-10">Business Growth</span>
                
                <motion.div 
                  className="absolute -right-20 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-[#00c3ff]/20 to-transparent transform skew-x-12"
                  animate={{
                    right: ['100%', '-20%'],
                    transition: { duration: 2, repeat: Infinity, repeatDelay: 5 }
                  }}
                />
              </motion.div>
            </div>
            
            {/* Action Buttons with enhanced glow effects */}
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.div 
                variants={buttonVariants} 
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button 
                  className="px-6 py-6 bg-gradient-to-r from-[#00c3ff] to-[#c961de] rounded-md text-white flex items-center 
                             relative overflow-hidden font-medium hover:opacity-90 transition-opacity border-0
                             shadow-[0_0_15px_rgba(0,195,255,0.4)]"
                  onClick={() => scrollToSection('contact')}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                  
                  {/* Enhanced animated light effect */}
                  <motion.div 
                    className="absolute top-0 -right-20 w-20 h-full transform rotate-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ 
                      right: ["120%", "-20%"],
                      transition: { duration: 1.5, repeat: Infinity, repeatDelay: 3 }
                    }}
                  />
                </Button>
              </motion.div>
              
              {/* Vision to Impact button - NEW */}
              <motion.div 
                variants={buttonVariants} 
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                <a href="/vision">
                  <Button 
                    className="px-6 py-6 bg-gradient-to-r from-[#4f8efc] to-[#00c3ff] rounded-md text-white flex items-center 
                              relative overflow-hidden font-medium hover:opacity-90 transition-opacity border-0
                              shadow-[0_0_15px_rgba(0,195,255,0.4)]"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Vision to Impact
                    
                    {/* Animated light effect */}
                    <motion.div 
                      className="absolute top-0 -right-20 w-20 h-full transform rotate-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{ 
                        right: ["120%", "-20%"],
                        transition: { duration: 1.5, repeat: Infinity, repeatDelay: 3.5 }
                      }}
                    />
                  </Button>
                </a>
              </motion.div>
              
              <motion.div 
                variants={buttonVariants} 
                whileHover="hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Button 
                  variant="outline"
                  className="px-6 py-6 bg-transparent border border-[#00c3ff] text-[#00c3ff] rounded-md
                            font-medium hover:bg-[#00c3ff]/10 transition-colors flex items-center
                            shadow-[0_0_15px_rgba(0,195,255,0.2)]"
                  onClick={() => scrollToSection('contact')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Let's Connect
                </Button>
              </motion.div>
            </div>
            
            {/* Explore More with enhanced animation */}
            <div className="mt-16 flex justify-center items-center text-[#00c3ff] text-sm relative">
              <motion.div
                className="absolute -inset-2 rounded-full bg-[#00c3ff]/10 blur-md"
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.9, 1.1, 0.9],
                  transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                }}
              />
              <span className="relative">Explore More</span>
              <motion.div
                className="mt-2 flex justify-center relative"
                animate={{ 
                  y: [0, 8, 0],
                  transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Content - Profile Image with enhanced effects */}
          <motion.div 
            className="lg:w-1/2 w-full flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
              {/* Main Profile Image Container with Ultra-Attractive Frame */}
              <div className="relative w-full max-w-md">
                {/* Quantum Energy Frame System */}
                <motion.div 
                  className="relative p-2 rounded-[2rem] overflow-visible"
                  animate={{
                    boxShadow: [
                      "0 0 100px rgba(0, 195, 255, 0.8), 0 0 200px rgba(201, 97, 222, 0.6), inset 0 0 60px rgba(255, 255, 255, 0.15)",
                      "0 0 140px rgba(0, 195, 255, 1), 0 0 280px rgba(201, 97, 222, 0.8), inset 0 0 80px rgba(255, 255, 255, 0.25)",
                      "0 0 100px rgba(0, 195, 255, 0.8), 0 0 200px rgba(201, 97, 222, 0.6), inset 0 0 60px rgba(255, 255, 255, 0.15)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {/* Quantum Energy Rings */}
                  <div className="absolute inset-0 rounded-[2rem]">
                    {/* Outer quantum field */}
                    <motion.div 
                      className="absolute -inset-8 rounded-[2rem] bg-gradient-conic from-[#00c3ff] via-[#4f8efc] via-[#8a4bff] via-[#c961de] via-[#ff6b9d] to-[#00c3ff] opacity-40 blur-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Middle energy ring */}
                    <motion.div 
                      className="absolute -inset-6 rounded-[2rem] bg-gradient-conic from-[#c961de] via-[#8a4bff] via-[#4f8efc] to-[#00c3ff] opacity-60 blur-md"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Inner plasma ring */}
                    <motion.div 
                      className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-[#00c3ff] via-[#ffffff] to-[#c961de] opacity-30"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.05, 1] 
                      }}
                      transition={{ 
                        rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity }
                      }}
                    />
                    
                    {/* Ultra-premium metallic frame */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#00c3ff] via-[#4f8efc] via-[#8a4bff] via-[#c961de] to-[#ff6b9d] p-[3px]">
                      <div className="absolute inset-[3px] rounded-[2rem] bg-gradient-to-tl from-[#c961de] via-[#8a4bff] via-[#4f8efc] to-[#00c3ff] opacity-90"></div>
                    </div>
                    
                    {/* Crystal-like inner border */}
                    <motion.div 
                      className="absolute inset-3 rounded-[2rem] border-[2px] border-white/50 backdrop-blur-sm"
                      animate={{ 
                        opacity: [0.3, 0.9, 0.3],
                        borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.9)", "rgba(255,255,255,0.3)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  {/* Quantum Glassmorphic Container */}
                  <div className="relative bg-gradient-to-br from-[rgba(7,25,45,0.95)] via-[rgba(15,35,55,0.98)] to-[rgba(10,30,50,0.95)] backdrop-blur-3xl rounded-[2rem] p-10 border-[3px] border-[rgba(255,255,255,0.4)] shadow-[0_0_60px_rgba(0,195,255,0.3),inset_0_0_60px_rgba(255,255,255,0.1)]">
                    
                    {/* Quantum Particles Inside Frame */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
                      {/* Floating energy particles */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full opacity-60"
                          style={{
                            width: i % 4 === 0 ? '6px' : i % 4 === 1 ? '4px' : i % 4 === 2 ? '8px' : '3px',
                            height: i % 4 === 0 ? '6px' : i % 4 === 1 ? '4px' : i % 4 === 2 ? '8px' : '3px',
                            background: i % 4 === 0 ? 'linear-gradient(45deg, #00c3ff, #ffffff)' : 
                                       i % 4 === 1 ? 'linear-gradient(45deg, #c961de, #ffffff)' : 
                                       i % 4 === 2 ? 'linear-gradient(45deg, #4f8efc, #ffffff)' :
                                       'linear-gradient(45deg, #8a4bff, #ffffff)',
                            left: `${10 + (i * 7)}%`,
                            top: `${8 + (i * 6)}%`,
                            boxShadow: '0 0 20px currentColor'
                          }}
                          animate={{
                            y: [-20, 20, -20],
                            x: [-15, 15, -15],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.5, 1.5, 0.5],
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 5 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.15
                          }}
                        />
                      ))}
                      
                      {/* Energy streaks */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={`streak-${i}`}
                          className="absolute w-1 h-16 opacity-40"
                          style={{
                            background: i % 3 === 0 ? 'linear-gradient(to bottom, transparent, #00c3ff, transparent)' :
                                       i % 3 === 1 ? 'linear-gradient(to bottom, transparent, #c961de, transparent)' :
                                       'linear-gradient(to bottom, transparent, #4f8efc, transparent)',
                            left: `${20 + (i * 12)}%`,
                            top: `${5 + (i * 8)}%`,
                            filter: 'blur(1px)'
                          }}
                          animate={{
                            scaleY: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                            rotate: [0, 180]
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.4
                          }}
                        />
                      ))}
                    </div>
                  
                  {/* Profile Image with Enhanced Styling */}
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/lovable-uploads/bff3b4a9-c2a4-4c4c-bfcf-d76c402bda7f.png"
                      alt="Syed Musthaq - Professional Portrait"
                      className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                      loading="eager"
                    />
                    
                    {/* Professional overlay with enhanced styling */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-transparent p-6 rounded-b-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <div className="text-white">
                        <motion.p 
                          className="text-sm font-medium text-[#8acdff] mb-1"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Vision-driven
                        </motion.p>
                        <p className="text-lg font-bold bg-gradient-to-r from-[#00c3ff] to-[#c961de] bg-clip-text text-transparent">
                          Entrepreneur
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Floating particles around the image */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          background: i % 2 === 0 ? '#00c3ff' : '#c961de',
                          left: `${10 + i * 15}%`,
                          top: `${20 + i * 10}%`
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced animated circuits and grid overlays */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="0" stroke="#1e4976" strokeWidth="0.3" />
                <line x1="0" y1="25" x2="100" y2="25" stroke="#1e4976" strokeWidth="0.2" strokeDasharray="5,5" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#1e4976" strokeWidth="0.3" />
                <line x1="0" y1="75" x2="100" y2="75" stroke="#1e4976" strokeWidth="0.2" strokeDasharray="5,5" />
                <line x1="0" y1="0" x2="0" y2="100" stroke="#1e4976" strokeWidth="0.3" />
                <line x1="25" y1="0" x2="25" y2="100" stroke="#1e4976" strokeWidth="0.2" strokeDasharray="5,5" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="#1e4976" strokeWidth="0.3" />
                <line x1="75" y1="0" x2="75" y2="100" stroke="#1e4976" strokeWidth="0.2" strokeDasharray="5,5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </motion.div>
      </div>
      
      {/* Enhanced Animated AI circuit-style background elements */}
      <motion.div 
        className="absolute -top-20 -left-20 w-96 h-96 rotate-45 opacity-40"
        variants={circuitVariants}
        animate="animate"
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c3ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c961de" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path d="M10,50 L50,10 L100,10 L150,50 L190,90 L190,140 L150,180 L100,190 L50,180 L10,140 Z" fill="none" stroke="url(#line-gradient1)" strokeWidth="0.5" />
          <path d="M30,30 L50,50 L90,50 L120,80 L150,60 L170,80 L170,120 L150,140 L120,120 L90,150 L50,150 L30,130 Z" fill="none" stroke="#c961de" strokeWidth="0.5" strokeOpacity="0.6" />
          <circle cx="50" cy="50" r="5" fill="#00c3ff" fillOpacity="0.7" />
          <circle cx="150" cy="60" r="5" fill="#c961de" fillOpacity="0.7" />
          <circle cx="90" cy="150" r="5" fill="#00c3ff" fillOpacity="0.7" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 -rotate-12 opacity-30"
        variants={circuitVariants}
        animate="animate"
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c3ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c961de" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M20,20 L180,20 M20,20 L20,180 M180,20 L180,180 M20,180 L180,180" stroke="url(#line-gradient2)" strokeWidth="0.5" filter="url(#glow)" />
          <path d="M50,50 L150,50 M50,50 L50,150 M150,50 L150,150 M50,150 L150,150" stroke="#c961de" strokeWidth="0.5" strokeOpacity="0.6" />
          <circle cx="50" cy="50" r="3" fill="#00c3ff" fillOpacity="0.8" filter="url(#glow)" />
          <circle cx="150" cy="50" r="3" fill="#c961de" fillOpacity="0.8" filter="url(#glow)" />
          <circle cx="50" cy="150" r="3" fill="#c961de" fillOpacity="0.8" filter="url(#glow)" />
          <circle cx="150" cy="150" r="3" fill="#00c3ff" fillOpacity="0.8" filter="url(#glow)" />
        </svg>
      </motion.div>
      
      {/* Enhanced Background particles - floating dots with glow */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 2 === 0 ? '#00c3ff' : '#c961de',
              boxShadow: i % 2 === 0 ? '0 0 5px #00c3ff' : '0 0 5px #c961de',
              opacity: 0.6
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Background gradient elements */}
      <motion.div 
        className="absolute top-20 left-10 w-60 h-60 bg-[#00c3ff]/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#c961de]/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Additional light sources */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,195,255,0.15) 0%, rgba(0,195,255,0) 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,97,222,0.15) 0%, rgba(201,97,222,0) 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Enhanced glowing nodes */}
      <motion.div
        className="absolute top-[30%] right-[20%] w-3 h-3 rounded-full bg-[#00c3ff]/80"
        animate={{
          boxShadow: [
            "0 0 5px rgba(0, 195, 255, 0.5)",
            "0 0 20px rgba(0, 195, 255, 0.8)",
            "0 0 5px rgba(0, 195, 255, 0.5)"
          ],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute top-[60%] left-[25%] w-2 h-2 rounded-full bg-[#c961de]/80"
        animate={{
          boxShadow: [
            "0 0 5px rgba(201, 97, 222, 0.5)",
            "0 0 20px rgba(201, 97, 222, 0.8)",
            "0 0 5px rgba(201, 97, 222, 0.5)"
          ],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Skills Section */}
      <SkillsSection />
    </section>
  );
}