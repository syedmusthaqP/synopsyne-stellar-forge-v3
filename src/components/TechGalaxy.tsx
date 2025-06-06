
import React, { useState, useEffect } from 'react';

interface TechNode {
  id: string;
  name: string;
  category: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  angle: number;
  description: string;
  expertise: number;
}

const TechGalaxy = () => {
  const [selectedTech, setSelectedTech] = useState<TechNode | null>(null);
  const [rotation, setRotation] = useState(0);

  const technologies: TechNode[] = [
    // Frontend
    { id: 'react', name: 'React', category: 'Frontend', color: '#61DAFB', size: 60, orbitRadius: 200, orbitSpeed: 1, angle: 0, description: 'Modern UI development with component-based architecture', expertise: 95 },
    { id: 'vue', name: 'Vue.js', category: 'Frontend', color: '#4FC08D', size: 50, orbitRadius: 180, orbitSpeed: 1.2, angle: 60, description: 'Progressive framework for building user interfaces', expertise: 88 },
    { id: 'angular', name: 'Angular', category: 'Frontend', color: '#DD0031', size: 55, orbitRadius: 220, orbitSpeed: 0.8, angle: 120, description: 'Enterprise-grade application framework', expertise: 82 },
    
    // Backend
    { id: 'nodejs', name: 'Node.js', category: 'Backend', color: '#339933', size: 65, orbitRadius: 160, orbitSpeed: 1.5, angle: 180, description: 'Server-side JavaScript runtime', expertise: 92 },
    { id: 'python', name: 'Python', category: 'Backend', color: '#3776AB', size: 58, orbitRadius: 240, orbitSpeed: 0.7, angle: 240, description: 'Versatile programming for AI and web development', expertise: 90 },
    { id: 'java', name: 'Java', category: 'Backend', color: '#ED8B00', size: 52, orbitRadius: 200, orbitSpeed: 1.1, angle: 300, description: 'Enterprise application development', expertise: 85 },
    
    // Cloud
    { id: 'aws', name: 'AWS', category: 'Cloud', color: '#FF9900', size: 70, orbitRadius: 280, orbitSpeed: 0.6, angle: 30, description: 'Comprehensive cloud computing platform', expertise: 88 },
    { id: 'azure', name: 'Azure', category: 'Cloud', color: '#0078D4', size: 62, orbitRadius: 260, orbitSpeed: 0.9, angle: 90, description: 'Microsoft cloud services and solutions', expertise: 80 },
    { id: 'gcp', name: 'Google Cloud', category: 'Cloud', color: '#4285F4', size: 58, orbitRadius: 300, orbitSpeed: 0.5, angle: 150, description: 'Google Cloud Platform services', expertise: 75 },
    
    // AI/ML
    { id: 'tensorflow', name: 'TensorFlow', category: 'AI/ML', color: '#FF6F00', size: 55, orbitRadius: 320, orbitSpeed: 0.4, angle: 210, description: 'Machine learning and neural networks', expertise: 85 },
    { id: 'pytorch', name: 'PyTorch', category: 'AI/ML', color: '#EE4C2C', size: 52, orbitRadius: 290, orbitSpeed: 0.8, angle: 270, description: 'Deep learning research and production', expertise: 78 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: '#61DAFB',
      Backend: '#339933',
      Cloud: '#FF9900',
      'AI/ML': '#FF6F00'
    };
    return colors[category as keyof typeof colors] || '#00D4FF';
  };

  return (
    <section id="technology" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Technology <span className="text-neon">Galaxy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our constellation of cutting-edge technologies. Each planet represents 
            our expertise in transforming complex challenges into elegant solutions.
          </p>
        </div>

        <div className="relative">
          {/* Central Hub */}
          <div className="tech-orbit-container relative w-full h-[800px] mx-auto flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full glassmorphism neon-border animate-pulse-glow flex items-center justify-center">
                <span className="text-neon font-bold text-lg">CORE</span>
              </div>
            </div>

            {/* Technology Nodes */}
            {technologies.map((tech) => {
              const angle = (tech.angle + rotation * tech.orbitSpeed) * (Math.PI / 180);
              const x = Math.cos(angle) * tech.orbitRadius;
              const y = Math.sin(angle) * tech.orbitRadius;

              return (
                <div
                  key={tech.id}
                  className="absolute tech-node"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setSelectedTech(tech)}
                >
                  {/* Orbit trail */}
                  <div 
                    className="absolute rounded-full border border-gray-600/30"
                    style={{
                      width: tech.orbitRadius * 2,
                      height: tech.orbitRadius * 2,
                      left: -tech.orbitRadius + x,
                      top: -tech.orbitRadius + y,
                      transform: `translate(-${x}px, -${y}px)`,
                      pointerEvents: 'none'
                    }}
                  ></div>

                  {/* Technology Node */}
                  <div 
                    className="relative group cursor-pointer"
                    style={{
                      width: tech.size,
                      height: tech.size
                    }}
                  >
                    <div 
                      className="w-full h-full rounded-full glassmorphism border-2 flex items-center justify-center group-hover:animate-pulse-glow transition-all"
                      style={{ 
                        borderColor: tech.color,
                        boxShadow: `0 0 20px ${tech.color}40`
                      }}
                    >
                      <span className="text-white text-xs font-bold text-center">
                        {tech.name}
                      </span>
                    </div>

                    {/* Expertise level indicator */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-1 bg-gray-600 rounded">
                        <div 
                          className="h-full rounded transition-all"
                          style={{ 
                            width: `${tech.expertise}%`,
                            backgroundColor: tech.color
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Hover tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="glassmorphism p-2 rounded text-white text-xs whitespace-nowrap">
                        <div className="font-bold">{tech.name}</div>
                        <div className="text-gray-300">{tech.expertise}% Expertise</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Category Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['Frontend', 'Backend', 'Cloud', 'AI/ML'].map((category) => (
              <div key={category} className="flex items-center glassmorphism px-4 py-2 rounded-lg">
                <div 
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: getCategoryColor(category) }}
                ></div>
                <span className="text-white text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Technology Details */}
        {selectedTech && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glassmorphism max-w-lg w-full p-8 rounded-xl neon-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedTech.name}</h3>
                <button 
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-4">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${selectedTech.color}20`,
                    color: selectedTech.color,
                    border: `1px solid ${selectedTech.color}40`
                  }}
                >
                  {selectedTech.category}
                </span>
              </div>

              <p className="text-gray-300 mb-6">{selectedTech.description}</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Expertise Level</span>
                  <span className="text-white">{selectedTech.expertise}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all"
                    style={{ 
                      width: `${selectedTech.expertise}%`,
                      backgroundColor: selectedTech.color
                    }}
                  ></div>
                </div>
              </div>

              <button 
                className="w-full neon-border px-6 py-3 rounded-lg text-neon hover:bg-cyan-500/10 transition-all"
                onClick={() => setSelectedTech(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechGalaxy;
