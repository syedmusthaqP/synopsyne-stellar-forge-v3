import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SkillBubble {
  id: string;
  name: string;
  percentage: number;
  x: number;
  y: number;
  size: number;
  color: string;
  category: 'technical' | 'business' | 'leadership';
}

const skillsData: SkillBubble[] = [
  { id: '1', name: 'AI & Automation', percentage: 90, x: 65, y: 20, size: 120, color: 'from-cyan-400 to-blue-500', category: 'technical' },
  { id: '2', name: 'Business Analysis', percentage: 88, x: 15, y: 35, size: 100, color: 'from-purple-400 to-pink-500', category: 'business' },
  { id: '3', name: 'Innovation Management', percentage: 92, x: 75, y: 65, size: 110, color: 'from-cyan-400 to-purple-500', category: 'leadership' },
  { id: '4', name: 'Strategic Consulting', percentage: 85, x: 40, y: 15, size: 95, color: 'from-blue-400 to-cyan-500', category: 'business' },
  { id: '5', name: 'Human Resource', percentage: 80, x: 20, y: 75, size: 85, color: 'from-purple-500 to-blue-500', category: 'leadership' },
  { id: '6', name: 'Data Analytics', percentage: 85, x: 85, y: 40, size: 90, color: 'from-cyan-500 to-blue-600', category: 'technical' },
  { id: '7', name: 'Industrial Relations', percentage: 95, x: 45, y: 50, size: 125, color: 'from-purple-400 to-cyan-400', category: 'business' },
  { id: '8', name: 'Electric Vehicles', percentage: 65, x: 10, y: 10, size: 70, color: 'from-green-400 to-cyan-500', category: 'technical' },
  { id: '9', name: 'Business Team Lead', percentage: 80, x: 90, y: 15, size: 80, color: 'from-pink-400 to-purple-500', category: 'leadership' },
  { id: '10', name: 'Aerodynamics', percentage: 80, x: 55, y: 85, size: 85, color: 'from-blue-500 to-cyan-400', category: 'technical' }
];

interface InteractiveSkillVisualizationProps {
  className?: string;
}

export const InteractiveSkillVisualization: React.FC<InteractiveSkillVisualizationProps> = ({ className = '' }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'technical' | 'business' | 'leadership'>('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technical': return 'text-cyan-400';
      case 'business': return 'text-purple-400';
      case 'leadership': return 'text-pink-400';
      default: return 'text-white';
    }
  };

  return (
    <div className={`relative w-full h-[600px] bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Category Filter */}
      <div className="absolute top-6 left-6 z-20 flex space-x-2">
        {['all', 'technical', 'business', 'leadership'].map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category as any)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedCategory === category 
                ? 'bg-white/20 text-white' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 z-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            <span className="text-xs text-cyan-400">Technical</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            <span className="text-xs text-purple-400">Business</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
            <span className="text-xs text-pink-400">Leadership</span>
          </div>
        </div>
      </div>

      {/* Skill Bubbles */}
      <div className="relative w-full h-full">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="absolute cursor-pointer"
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`,
              width: `${skill.size}px`,
              height: `${skill.size}px`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            onHoverStart={() => setHoveredSkill(skill.id)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} opacity-20 blur-xl`}
              animate={{
                scale: hoveredSkill === skill.id ? 1.3 : 1,
                opacity: hoveredSkill === skill.id ? 0.4 : 0.2
              }}
            />
            
            {/* Main Bubble */}
            <motion.div
              className={`relative w-full h-full rounded-full bg-gradient-to-r ${skill.color} p-0.5`}
              animate={{
                boxShadow: hoveredSkill === skill.id 
                  ? '0 0 30px rgba(0, 195, 255, 0.5)' 
                  : '0 0 15px rgba(0, 195, 255, 0.2)'
              }}
            >
              <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center p-2">
                {/* Percentage */}
                <motion.div
                  className="text-white font-bold mb-1"
                  style={{ fontSize: `${Math.max(skill.size / 8, 12)}px` }}
                  animate={{
                    scale: hoveredSkill === skill.id ? 1.2 : 1
                  }}
                >
                  {skill.percentage}%
                </motion.div>
                
                {/* Skill Name */}
                <motion.div
                  className="text-white text-center font-medium leading-tight"
                  style={{ 
                    fontSize: `${Math.max(skill.size / 12, 8)}px`,
                    lineHeight: '1.1'
                  }}
                  animate={{
                    opacity: hoveredSkill === skill.id ? 1 : 0.9
                  }}
                >
                  {skill.name}
                </motion.div>
              </div>
            </motion.div>

            {/* Connection Lines (when hovered) */}
            {hoveredSkill === skill.id && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Animated pulse rings */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-white/30"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ 
                      scale: [1, 1.5, 2],
                      opacity: [0.5, 0.2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Skill Details Panel */}
      {hoveredSkill && (
        <motion.div
          className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-md rounded-lg p-4 max-w-xs"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          {(() => {
            const skill = skillsData.find(s => s.id === hoveredSkill);
            if (!skill) return null;
            
            return (
              <>
                <h3 className="text-white font-bold mb-2">{skill.name}</h3>
                <div className="flex items-center mb-2">
                  <div className={`text-2xl font-bold ${getCategoryColor(skill.category)}`}>
                    {skill.percentage}%
                  </div>
                  <div className="ml-2 text-xs text-gray-400 capitalize">
                    {skill.category}
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </>
            );
          })()}
        </motion.div>
      )}
    </div>
  );
};