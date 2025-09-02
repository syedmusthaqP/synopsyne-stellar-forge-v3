import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Code, 
  TrendingUp, 
  Users, 
  Zap, 
  Database, 
  Settings, 
  Target,
  Lightbulb,
  Shield,
  Award,
  Rocket
} from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  category: 'AI & Innovation' | 'Technical Excellence' | 'Business Leadership' | 'Strategic Vision';
  level: number;
  description: string;
  icon: React.ReactNode;
  achievements: string[];
  color: string;
  gradient: string;
}

const skills: Skill[] = [
  {
    id: 'ai-implementation',
    name: 'AI Implementation',
    category: 'AI & Innovation',
    level: 95,
    description: 'Leading AI transformation initiatives and implementing cutting-edge solutions',
    icon: <Brain className="w-6 h-6" />,
    achievements: ['10+ AI Projects', 'Machine Learning Expert', 'Neural Networks'],
    color: '#00c3ff',
    gradient: 'from-[#00c3ff] to-[#0ea5e9]'
  },
  {
    id: 'strategic-planning',
    name: 'Strategic Planning',
    category: 'Strategic Vision',
    level: 95,
    description: 'Developing comprehensive business strategies and long-term vision',
    icon: <Target className="w-6 h-6" />,
    achievements: ['Fortune 500 Consulting', '15+ Year Experience', 'Market Expansion'],
    color: '#c961de',
    gradient: 'from-[#c961de] to-[#a855f7]'
  },
  {
    id: 'process-automation',
    name: 'Process Automation',
    category: 'Technical Excellence',
    level: 90,
    description: 'Streamlining operations through intelligent automation solutions',
    icon: <Settings className="w-6 h-6" />,
    achievements: ['80% Efficiency Gains', 'RPA Implementation', 'Workflow Optimization'],
    color: '#10b981',
    gradient: 'from-[#10b981] to-[#059669]'
  },
  {
    id: 'team-leadership',
    name: 'Team Leadership',
    category: 'Business Leadership',
    level: 90,
    description: 'Building and leading high-performance teams across diverse projects',
    icon: <Users className="w-6 h-6" />,
    achievements: ['100+ Team Members', 'Global Teams', 'Cultural Transformation'],
    color: '#f59e0b',
    gradient: 'from-[#f59e0b] to-[#d97706]'
  },
  {
    id: 'system-architecture',
    name: 'System Architecture',
    category: 'Technical Excellence',
    level: 85,
    description: 'Designing scalable and robust system architectures',
    icon: <Code className="w-6 h-6" />,
    achievements: ['Cloud Solutions', 'Microservices', 'Scalable Systems'],
    color: '#8b5cf6',
    gradient: 'from-[#8b5cf6] to-[#7c3aed]'
  },
  {
    id: 'business-development',
    name: 'Business Development',
    category: 'Business Leadership',
    level: 85,
    description: 'Driving growth through strategic partnerships and market expansion',
    icon: <TrendingUp className="w-6 h-6" />,
    achievements: ['200% Revenue Growth', 'Strategic Partnerships', 'Market Leadership'],
    color: '#ef4444',
    gradient: 'from-[#ef4444] to-[#dc2626]'
  },
  {
    id: 'data-analysis',
    name: 'Data Analytics',
    category: 'Technical Excellence',
    level: 80,
    description: 'Extracting insights from complex datasets for informed decision making',
    icon: <Database className="w-6 h-6" />,
    achievements: ['Big Data Processing', 'Predictive Analytics', 'Business Intelligence'],
    color: '#06b6d4',
    gradient: 'from-[#06b6d4] to-[#0891b2]'
  },
  {
    id: 'innovation-management',
    name: 'Innovation Management',
    category: 'AI & Innovation',
    level: 88,
    description: 'Fostering innovation culture and managing breakthrough initiatives',
    icon: <Lightbulb className="w-6 h-6" />,
    achievements: ['Patent Applications', 'R&D Leadership', 'Innovation Labs'],
    color: '#eab308',
    gradient: 'from-[#eab308] to-[#ca8a04]'
  },
  {
    id: 'electric-vehicles',
    name: 'Electric Vehicles',
    category: 'Technical Excellence',
    level: 85,
    description: 'Expertise in EV technology, battery systems, and sustainable mobility',
    icon: <Zap className="w-6 h-6" />,
    achievements: ['EV Prototypes', 'Battery Tech', 'Sustainable Design'],
    color: '#22c55e',
    gradient: 'from-[#22c55e] to-[#16a34a]'
  },
  {
    id: 'risk-management',
    name: 'Risk Management',
    category: 'Strategic Vision',
    level: 82,
    description: 'Identifying and mitigating business risks across all operations',
    icon: <Shield className="w-6 h-6" />,
    achievements: ['Risk Frameworks', 'Compliance Systems', 'Crisis Management'],
    color: '#f97316',
    gradient: 'from-[#f97316] to-[#ea580c]'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    category: 'Strategic Vision',
    level: 90,
    description: 'Leading comprehensive digital transformation initiatives',
    icon: <Rocket className="w-6 h-6" />,
    achievements: ['Digital Strategy', 'Technology Adoption', 'Change Management'],
    color: '#ec4899',
    gradient: 'from-[#ec4899] to-[#db2777]'
  },
  {
    id: 'quality-excellence',
    name: 'Quality Excellence',
    category: 'Business Leadership',
    level: 87,
    description: 'Implementing quality management systems and continuous improvement',
    icon: <Award className="w-6 h-6" />,
    achievements: ['ISO Certifications', 'Six Sigma', 'Quality Systems'],
    color: '#6366f1',
    gradient: 'from-[#6366f1] to-[#4f46e5]'
  }
];

const categories = [
  { name: 'AI & Innovation', color: '#00c3ff', icon: <Brain className="w-5 h-5" /> },
  { name: 'Technical Excellence', color: '#10b981', icon: <Code className="w-5 h-5" /> },
  { name: 'Business Leadership', color: '#f59e0b', icon: <Users className="w-5 h-5" /> },
  { name: 'Strategic Vision', color: '#c961de', icon: <Target className="w-5 h-5" /> }
];

interface ModernSkillShowcaseProps {
  className?: string;
}

export function ModernSkillShowcase({ className = "" }: ModernSkillShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <motion.button
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
            !selectedCategory 
              ? 'bg-gradient-to-r from-[#00c3ff] to-[#c961de] text-white shadow-lg' 
              : 'bg-[rgba(14,36,57,0.6)] text-gray-300 hover:bg-[rgba(14,36,57,0.8)] border border-[#1c3654]'
          }`}
          onClick={() => setSelectedCategory(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Award className="w-5 h-5" />
          All Skills
        </motion.button>
        
        {categories.map((category) => (
          <motion.button
            key={category.name}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === category.name
                ? 'text-white shadow-lg'
                : 'bg-[rgba(14,36,57,0.6)] text-gray-300 hover:bg-[rgba(14,36,57,0.8)] border border-[#1c3654]'
            }`}
            style={{
              background: selectedCategory === category.name 
                ? `linear-gradient(135deg, ${category.color}, ${category.color}dd)` 
                : undefined
            }}
            onClick={() => setSelectedCategory(
              selectedCategory === category.name ? null : category.name
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.icon}
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        layout
      >
        <AnimatePresence mode="wait">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Card */}
              <motion.div
                className="relative p-6 rounded-2xl bg-gradient-to-br from-[rgba(14,36,57,0.8)] to-[rgba(7,25,45,0.9)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] overflow-hidden cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />
                
                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, transparent, ${skill.color}20)`,
                    opacity: hoveredSkill === skill.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)] backdrop-blur-sm"
                      style={{ 
                        boxShadow: `0 0 20px ${skill.color}40`
                      }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    </motion.div>
                    
                    <div className="text-right">
                      <motion.div
                        className="text-2xl font-bold text-white mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {skill.level}%
                      </motion.div>
                      <div className="text-xs text-gray-400">Proficiency</div>
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  
                  {/* Category Badge */}
                  <motion.div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                      border: `1px solid ${skill.color}40`
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.category}
                  </motion.div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {skill.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-2 mb-4 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                  
                  {/* Achievements */}
                  <div className="space-y-1">
                    {skill.achievements.slice(0, 2).map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center text-xs text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.7 + i * 0.1 }}
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full mr-2" 
                          style={{ backgroundColor: skill.color }}
                        />
                        {achievement}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: skill.color,
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Statistics Summary */}
      <motion.div
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {categories.map((category, index) => {
          const categorySkills = skills.filter(skill => skill.category === category.name);
          const avgLevel = Math.round(
            categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length
          );
          
          return (
            <motion.div
              key={category.name}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-[rgba(14,36,57,0.6)] to-[rgba(7,25,45,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)]"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${category.color}20` }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div style={{ color: category.color }}>
                  {category.icon}
                </div>
              </motion.div>
              <div className="text-2xl font-bold text-white mb-1">{avgLevel}%</div>
              <div className="text-xs text-gray-400 mb-1">Average</div>
              <div className="text-sm text-gray-300">{categorySkills.length} Skills</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}