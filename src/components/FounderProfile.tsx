import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Code, TrendingUp, Download, MessageCircle, Star, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

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
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 h-full">
          {/* Left Content */}
          <motion.div 
            className="lg:w-7/12"
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
            className="lg:w-5/12 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Enhanced Profile Image with light effects */}
            <motion.div 
              className="relative max-w-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Light glow behind image */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-tr from-[#00c3ff]/30 to-[#c961de]/30 rounded-full blur-xl"
                animate={{ 
                  opacity: [0.4, 0.7, 0.4],
                  scale: [0.98, 1.02, 0.98],
                  transition: { duration: 3, repeat: Infinity }
                }}
              />
              
              {/* Image border with light effect */}
              <div className="p-[2px] rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00c3ff] to-[#c961de] opacity-70 rounded-lg"></div>
                
                {/* Image Container with improved effects */}
                <div className="relative z-10 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00c3ff]/30 to-[#c961de]/30 z-20 mix-blend-overlay"></div>
                  
                  {/* Floating light particles over image */}
                  <div className="absolute inset-0 z-30 overflow-hidden">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 5,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Profile image with your photo */}
                  <div className="w-full h-96 relative z-10">
                    <img 
                      src="/lovable-uploads/ba92d56a-fa78-4d89-983a-57acc0023c22.png" 
                      alt="Syed Musthaq - Founder" 
                      className="w-full h-full object-cover object-center rounded-lg"
                    />
                  </div>
                  
                  {/* Enhanced animated overlay gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-[#00c3ff]/30 to-transparent z-30"
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                      transition: { duration: 3, repeat: Infinity }
                    }}
                  />
                  
                  {/* Light streak effect */}
                  <motion.div 
                    className="absolute top-0 w-[200%] h-[200%] rotate-45 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ left: "-200%" }}
                    animate={{ 
                      left: ["100%", "-200%"],
                      transition: { duration: 5, repeat: Infinity, repeatDelay: 2 }
                    }}
                  />
                </div>
              </div>
              
              {/* Enhanced highlight box */}
              <motion.div 
                className="absolute bottom-8 right-4 bg-[rgba(7,25,45,0.8)] backdrop-blur-xl p-4 rounded z-40 border border-[rgba(0,195,255,0.3)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ 
                  boxShadow: "0 0 25px rgba(0, 195, 255, 0.5)",
                  scale: 1.05
                }}
              >
                <div className="rounded text-white font-semibold relative">
                  <div className="absolute top-0 right-0">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        transition: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <Star className="h-4 w-4 text-[#00c3ff]/50" />
                    </motion.div>
                  </div>
                  <p className="text-sm">Vision-driven</p>
                  <p className="text-sm text-[#00c3ff]">Entrepreneur</p>
                </div>
              </motion.div>
              
              {/* Additional floating badges */}
              <motion.div 
                className="absolute -top-2 -left-2 bg-[rgba(7,25,45,0.8)] backdrop-blur-xl p-2 rounded-full z-40 border border-[rgba(0,195,255,0.3)]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ 
                  boxShadow: "0 0 15px rgba(0, 195, 255, 0.5)",
                  scale: 1.1
                }}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      rotate: 360,
                      transition: { duration: 10, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#00c3ff" strokeWidth="1" strokeDasharray="2 2" />
                      <circle cx="12" cy="12" r="5" fill="#00c3ff" fillOpacity="0.5" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
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
    </section>
  );
}