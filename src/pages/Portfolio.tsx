
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Neural Healthcare Platform",
      description: "AI-powered patient management system with predictive analytics",
      tech: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Quantum Finance Dashboard",
      description: "Real-time financial data visualization with neural network insights",
      tech: ["Vue.js", "Python", "D3.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Synapse E-commerce Engine",
      description: "Intelligent product recommendation system with neural learning",
      tech: ["Angular", "Express", "PyTorch", "Redis"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Neural IoT Control Center",
      description: "Smart city infrastructure management with predictive maintenance",
      tech: ["React Native", "FastAPI", "InfluxDB", "Docker"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Cognitive Learning Platform",
      description: "Adaptive educational system with personalized neural pathways",
      tech: ["Next.js", "GraphQL", "Prisma", "AWS"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Blockchain Neural Network",
      description: "Decentralized AI computation platform with smart contracts",
      tech: ["Solidity", "Web3.js", "IPFS", "Ethereum"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Particle background effect */}
      <div className="particle-bg"></div>
      
      {/* Floating elements for depth */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full glassmorphism animate-float opacity-30"></div>
      <div className="fixed top-40 right-20 w-20 h-20 rounded-full glassmorphism animate-float opacity-20" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 rounded-full glassmorphism animate-float opacity-25" style={{animationDelay: '2s'}}></div>
      
      <Header />
      
      {/* Portfolio Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
            <Briefcase className="w-4 h-4 text-neon mr-2" />
            <span className="text-white text-sm">Our Work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Project <span className="text-neon animate-text-glow">Portfolio</span>
            <br />
            Showcase
          </h1>

          <div className="relative mb-12 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
            <div className="relative glassmorphism p-6 rounded-lg">
              <p className="text-lg md:text-xl text-gray-300">
                Discover our portfolio of neural-powered applications that have transformed 
                industries and created meaningful connections across digital ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glassmorphism rounded-xl overflow-hidden hover:neon-border transition-all group animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.link}
                      className="flex items-center text-neon hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
