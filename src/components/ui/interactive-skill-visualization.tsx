import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillData {
  id: string;
  name: string;
  percentage: number;
  color: string;
  category: 'technical' | 'business' | 'leadership';
}

const skillsData: SkillData[] = [
  { id: '1', name: 'AI & Automation', percentage: 90, color: 'from-cyan-400 to-blue-500', category: 'technical' },
  { id: '2', name: 'Business Analysis', percentage: 88, color: 'from-purple-400 to-pink-500', category: 'business' },
  { id: '3', name: 'Innovation Management', percentage: 92, color: 'from-cyan-400 to-purple-500', category: 'leadership' },
  { id: '4', name: 'Strategic Consulting', percentage: 85, color: 'from-blue-400 to-cyan-500', category: 'business' },
  { id: '5', name: 'Human Resource', percentage: 80, color: 'from-purple-500 to-blue-500', category: 'leadership' },
  { id: '6', name: 'Data Analytics', percentage: 85, color: 'from-cyan-500 to-blue-600', category: 'technical' },
  { id: '7', name: 'Industrial Relations', percentage: 95, color: 'from-purple-400 to-cyan-400', category: 'business' },
  { id: '8', name: 'Electric Vehicles', percentage: 65, color: 'from-green-400 to-cyan-500', category: 'technical' }
];

interface InteractiveSkillVisualizationProps {
  className?: string;
}

export const InteractiveSkillVisualization: React.FC<InteractiveSkillVisualizationProps> = ({ className = '' }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleSkillClick = (skillId: string) => {
    setSelectedSkill(selectedSkill === skillId ? null : skillId);
  };

  const getArrowRotation = (percentage: number) => {
    // Convert percentage to degrees (0% = -90deg, 100% = 270deg)
    return (percentage * 3.6) - 90;
  };

  const selectedSkillData = skillsData.find(skill => skill.id === selectedSkill);

  return (
    <div className={`relative w-full max-w-md mx-auto h-96 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-purple-900/80 rounded-2xl border border-cyan-400/30 backdrop-blur-sm overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Title */}
      <div className="absolute top-4 left-4 z-20">
        <h3 className="text-white font-bold text-lg">Interactive Skills</h3>
        <p className="text-gray-400 text-sm">Click circles to see percentages</p>
      </div>

      {/* Central Gauge */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-32 h-32">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-600/50"></div>
          
          {/* Progress Ring */}
          <AnimatePresence>
            {selectedSkillData && (
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0deg, transparent ${(selectedSkillData.percentage * 3.6) - 90}deg, rgba(0, 195, 255, 0.8) ${(selectedSkillData.percentage * 3.6) - 90}deg, rgba(0, 195, 255, 0.8) ${(selectedSkillData.percentage * 3.6) + 90}deg, transparent ${(selectedSkillData.percentage * 3.6) + 90}deg)`,
                  borderRadius: '50%'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

          {/* Animated Arrow */}
          <AnimatePresence>
            {selectedSkillData && (
              <motion.div
                className="absolute top-1/2 left-1/2 origin-bottom"
                style={{
                  width: '2px',
                  height: '50px',
                  marginLeft: '-1px',
                  marginTop: '-50px'
                }}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ 
                  rotate: getArrowRotation(selectedSkillData.percentage),
                  opacity: 1 
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 1.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full"></div>
                {/* Arrow Head */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-cyan-400"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Center Display */}
          <div className="absolute inset-4 rounded-full bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {selectedSkillData ? (
                <motion.div
                  key={selectedSkillData.id}
                  className="text-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {selectedSkillData.percentage}%
                  </div>
                  <div className="text-xs text-white text-center leading-tight">
                    {selectedSkillData.name}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-gray-400 text-sm text-center">
                    Click a skill
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Skill Circles */}
      <div className="relative w-full h-full">
        {skillsData.map((skill, index) => {
          const angle = (index * 45) * (Math.PI / 180); // 45 degrees apart
          const radius = 120;
          const x = 50 + (radius * Math.cos(angle)) / 4; // Percentage positioning
          const y = 50 + (radius * Math.sin(angle)) / 4;
          
          return (
            <motion.div
              key={skill.id}
              className="absolute cursor-pointer z-20"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring"
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSkillClick(skill.id)}
              onHoverStart={() => setHoveredSkill(skill.id)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} blur-lg`}
                animate={{
                  opacity: selectedSkill === skill.id ? 0.8 : hoveredSkill === skill.id ? 0.4 : 0.2,
                  scale: selectedSkill === skill.id ? 1.5 : hoveredSkill === skill.id ? 1.3 : 1
                }}
              />
              
              {/* Main Circle */}
              <motion.div
                className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} p-0.5`}
                animate={{
                  boxShadow: selectedSkill === skill.id 
                    ? '0 0 20px rgba(0, 195, 255, 0.8)' 
                    : hoveredSkill === skill.id 
                    ? '0 0 15px rgba(0, 195, 255, 0.5)'
                    : '0 0 5px rgba(0, 195, 255, 0.2)'
                }}
              >
                <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-white font-bold text-xs">
                    {skill.percentage}%
                  </div>
                </div>
              </motion.div>

              {/* Connection Line to Center */}
              {selectedSkill === skill.id && (
                <motion.div
                  className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
                  style={{
                    width: Math.sqrt(Math.pow((x - 50) * 4, 2) + Math.pow((y - 50) * 4, 2)) + 'px',
                    transform: `translate(-50%, -50%) rotate(${Math.atan2((y - 50) * 4, (x - 50) * 4) * (180 / Math.PI)}deg)`
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Skill Name Tooltip */}
      <AnimatePresence>
        {hoveredSkill && !selectedSkill && (
          <motion.div
            className="absolute bottom-4 left-4 right-4 z-30 bg-black/60 backdrop-blur-sm rounded-lg p-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {(() => {
              const skill = skillsData.find(s => s.id === hoveredSkill);
              return skill ? (
                <div className="text-center">
                  <div className="text-white font-medium text-sm">{skill.name}</div>
                  <div className="text-gray-400 text-xs capitalize">{skill.category}</div>
                </div>
              ) : null;
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};