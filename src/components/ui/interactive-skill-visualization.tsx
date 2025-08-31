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
    <div className={`relative w-full max-w-lg mx-auto h-[500px] bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-purple-900/90 rounded-3xl border border-cyan-400/40 backdrop-blur-md overflow-hidden shadow-2xl ${className}`}>
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

      {/* Central Speedometer Gauge */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-48 h-48">
          {/* Outer decorative ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 shadow-2xl">
            <div className="absolute inset-2 rounded-full border-2 border-gray-600/30"></div>
          </div>
          
          {/* Speed marks */}
          {[...Array(11)].map((_, i) => {
            const angle = (i * 18) - 90; // 0 to 180 degrees
            const isMainMark = i % 2 === 0;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 origin-bottom"
                style={{
                  width: isMainMark ? '3px' : '2px',
                  height: isMainMark ? '20px' : '15px',
                  marginLeft: isMainMark ? '-1.5px' : '-1px',
                  marginTop: '-85px',
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div className={`w-full h-full ${isMainMark ? 'bg-white' : 'bg-gray-400'} rounded-full`}></div>
              </div>
            );
          })}
          
          {/* Percentage numbers */}
          {[0, 25, 50, 75, 100].map((num, i) => {
            const angle = (i * 45) - 90;
            const x = 85 * Math.cos((angle * Math.PI) / 180);
            const y = 85 * Math.sin((angle * Math.PI) / 180);
            return (
              <div
                key={num}
                className="absolute text-white text-sm font-bold"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                {num}
              </div>
            );
          })}
          
          {/* Progress Arc */}
          <AnimatePresence>
            {selectedSkillData && (
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <svg className="w-full h-full transform -rotate-90">
                  <motion.circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${(selectedSkillData.percentage / 100) * 251.33} 251.33`}
                    initial={{ strokeDasharray: "0 251.33" }}
                    animate={{ strokeDasharray: `${(selectedSkillData.percentage / 100) * 251.33} 251.33` }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00c3ff" />
                      <stop offset="50%" stopColor="#c961de" />
                      <stop offset="100%" stopColor="#00c3ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated Arrow/Needle */}
          <AnimatePresence>
            {selectedSkillData && (
              <motion.div
                className="absolute top-1/2 left-1/2 origin-bottom z-20"
                style={{
                  width: '4px',
                  height: '70px',
                  marginLeft: '-2px',
                  marginTop: '-70px',
                }}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ 
                  rotate: ((selectedSkillData.percentage / 100) * 180) - 90,
                  opacity: 1 
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 2,
                  type: "spring",
                  stiffness: 80,
                  damping: 20
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300 rounded-full shadow-lg"></div>
                {/* Needle tip */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-red-500"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-2 border-white/30 shadow-lg z-30"></div>

          {/* Center Display */}
          <div className="absolute inset-6 rounded-full bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center border border-cyan-400/30">
            <AnimatePresence mode="wait">
              {selectedSkillData ? (
                <motion.div
                  key={selectedSkillData.id}
                  className="text-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {selectedSkillData.percentage}%
                  </div>
                  <div className="text-sm text-white text-center leading-tight px-2">
                    {selectedSkillData.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 capitalize">
                    {selectedSkillData.category}
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
                  <div className="text-xs text-gray-500 mt-1">
                    to see gauge
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
          const radius = 160;
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
                className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} p-1 shadow-xl`}
                animate={{
                  boxShadow: selectedSkill === skill.id 
                    ? '0 0 30px rgba(0, 195, 255, 0.9), 0 0 60px rgba(0, 195, 255, 0.4)' 
                    : hoveredSkill === skill.id 
                    ? '0 0 20px rgba(0, 195, 255, 0.6)'
                    : '0 0 8px rgba(0, 195, 255, 0.3)'
                }}
              >
                <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <div className="text-white font-bold text-sm">
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