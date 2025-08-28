import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  primaryColor: string;
  secondaryColor: string;
}

interface HolographicSkillsProps {
  skills: Skill[];
}

export function HolographicSkills({ skills }: HolographicSkillsProps) {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          {/* Skill name */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">{skill.name}</span>
            <span className="text-gray-300 text-sm">{skill.level}%</span>
          </div>
          
          {/* Progress bar container */}
          <div className="relative h-3 bg-[rgba(30,73,118,0.3)] rounded-full overflow-hidden">
            {/* Background glow */}
            <div 
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                background: `linear-gradient(90deg, ${skill.primaryColor}20, ${skill.secondaryColor}20)`
              }}
            />
            
            {/* Animated progress fill */}
            <motion.div
              className="h-full rounded-full relative overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${skill.primaryColor}, ${skill.secondaryColor})`
              }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Holographic shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ width: '30%' }}
                animate={{
                  x: ['-100%', '400%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Glowing edge effect */}
            <motion.div
              className="absolute top-0 bottom-0 w-1 rounded-full blur-sm"
              style={{
                background: skill.primaryColor,
                left: `${skill.level}%`,
                boxShadow: `0 0 10px ${skill.primaryColor}`
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
            />
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-1 -bottom-1 left-0 right-0 pointer-events-none">
            {[...Array(3)].map((_, particleIndex) => (
              <motion.div
                key={particleIndex}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: particleIndex % 2 === 0 ? skill.primaryColor : skill.secondaryColor,
                  left: `${Math.random() * skill.level}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}