import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code2, 
  TrendingUp, 
  Users, 
  Zap, 
  Database, 
  Settings, 
  Target,
  Lightbulb,
  Shield,
  Award,
  Rocket,
  ChevronRight,
  Star
} from 'lucide-react';

interface SkillRating {
  id: string;
  name: string;
  level: number;
  category: 'Technical' | 'Business' | 'Leadership';
  description: string;
  icon: React.ReactNode;
  projects: string;
  experience: string;
  certifications: string[];
  color: string;
  gradient: string;
}

const skillRatings: SkillRating[] = [
  // Technical Skills
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    level: 95,
    category: 'Technical',
    description: 'Advanced implementation of AI solutions, neural networks, and machine learning algorithms',
    icon: <Brain className="w-5 h-5" />,
    projects: '15+ Projects',
    experience: '8 Years',
    certifications: ['TensorFlow Certified', 'AWS ML Specialty', 'Google AI Certified'],
    color: '#00c3ff',
    gradient: 'from-[#00c3ff] to-[#0ea5e9]'
  },
  {
    id: 'automation',
    name: 'Process Automation',
    level: 90,
    category: 'Technical',
    description: 'Intelligent workflow automation and robotic process automation implementation',
    icon: <Settings className="w-5 h-5" />,
    projects: '25+ Implementations',
    experience: '6 Years',
    certifications: ['UiPath Certified', 'Blue Prism Developer', 'Automation Anywhere Master'],
    color: '#10b981',
    gradient: 'from-[#10b981] to-[#059669]'
  },
  {
    id: 'system-design',
    name: 'System Architecture',
    level: 85,
    category: 'Technical',
    description: 'Scalable system design, microservices architecture, and cloud infrastructure',
    icon: <Code2 className="w-5 h-5" />,
    projects: '20+ Systems',
    experience: '10 Years',
    certifications: ['AWS Solutions Architect', 'Azure Architect Expert', 'GCP Professional'],
    color: '#8b5cf6',
    gradient: 'from-[#8b5cf6] to-[#7c3aed]'
  },
  {
    id: 'data-science',
    name: 'Data Analytics',
    level: 80,
    category: 'Technical',
    description: 'Big data processing, predictive analytics, and business intelligence solutions',
    icon: <Database className="w-5 h-5" />,
    projects: '30+ Dashboards',
    experience: '7 Years',
    certifications: ['Tableau Expert', 'Power BI Certified', 'Google Analytics IQ'],
    color: '#06b6d4',
    gradient: 'from-[#06b6d4] to-[#0891b2]'
  },
  {
    id: 'ev-tech',
    name: 'Electric Vehicle Tech',
    level: 85,
    category: 'Technical',
    description: 'EV powertrain design, battery management systems, and sustainable mobility',
    icon: <Zap className="w-5 h-5" />,
    projects: '5+ Prototypes',
    experience: '4 Years',
    certifications: ['SAE EV Certified', 'Tesla Academy Graduate', 'Battery Tech Specialist'],
    color: '#22c55e',
    gradient: 'from-[#22c55e] to-[#16a34a]'
  },
  {
    id: 'aerodynamics',
    name: 'Aerodynamics',
    level: 80,
    category: 'Technical',
    description: 'Computational fluid dynamics, wind tunnel testing, and aerodynamic optimization',
    icon: <Rocket className="w-5 h-5" />,
    projects: '8+ Studies',
    experience: '5 Years',
    certifications: ['ANSYS Fluent Certified', 'CFD Specialist', 'Wind Engineering'],
    color: '#f59e0b',
    gradient: 'from-[#f59e0b] to-[#d97706]'
  },

  // Business Skills
  {
    id: 'strategic-planning',
    name: 'Strategic Planning',
    level: 95,
    category: 'Business',
    description: 'Long-term vision development, market analysis, and strategic roadmap creation',
    icon: <Target className="w-5 h-5" />,
    projects: '50+ Strategies',
    experience: '12 Years',
    certifications: ['McKinsey Strategy', 'BCG Planning Expert', 'Strategic Management Pro'],
    color: '#c961de',
    gradient: 'from-[#c961de] to-[#a855f7]'
  },
  {
    id: 'business-dev',
    name: 'Business Development',
    level: 85,
    category: 'Business',
    description: 'Market expansion, partnership development, and revenue growth strategies',
    icon: <TrendingUp className="w-5 h-5" />,
    projects: '40+ Deals',
    experience: '10 Years',
    certifications: ['Sales Force Certified', 'Business Development Pro', 'Partnership Expert'],
    color: '#ef4444',
    gradient: 'from-[#ef4444] to-[#dc2626]'
  },
  {
    id: 'client-relations',
    name: 'Client Relations',
    level: 90,
    category: 'Business',
    description: 'Customer relationship management, account growth, and satisfaction optimization',
    icon: <Users className="w-5 h-5" />,
    projects: '100+ Clients',
    experience: '8 Years',
    certifications: ['CRM Master', 'Customer Success Pro', 'Relationship Management'],
    color: '#f97316',
    gradient: 'from-[#f97316] to-[#ea580c]'
  },
  {
    id: 'industrial-relations',
    name: 'Industrial Relations',
    level: 85,
    category: 'Business',
    description: 'Labor relations, workplace policies, and industrial compliance management',
    icon: <Shield className="w-5 h-5" />,
    projects: '15+ Policies',
    experience: '12 Years',
    certifications: ['HR Professional', 'Labor Law Certified', 'Industrial Relations Expert'],
    color: '#6366f1',
    gradient: 'from-[#6366f1] to-[#4f46e5]'
  },

  // Leadership Skills
  {
    id: 'team-leadership',
    name: 'Team Leadership',
    level: 90,
    category: 'Leadership',
    description: 'Cross-functional team management, agile leadership, and performance optimization',
    icon: <Users className="w-5 h-5" />,
    projects: '200+ Team Members',
    experience: '15 Years',
    certifications: ['Agile Leadership', 'Scrum Master', 'Leadership Excellence'],
    color: '#f59e0b',
    gradient: 'from-[#f59e0b] to-[#d97706]'
  },
  {
    id: 'human-resource',
    name: 'Human Resource',
    level: 80,
    category: 'Leadership',
    description: 'Talent acquisition, performance management, and organizational development',
    icon: <Award className="w-5 h-5" />,
    projects: '500+ Hires',
    experience: '10 Years',
    certifications: ['SHRM Certified', 'PHR Professional', 'Talent Management Pro'],
    color: '#ec4899',
    gradient: 'from-[#ec4899] to-[#db2777]'
  },
  {
    id: 'innovation-leadership',
    name: 'Innovation Leadership',
    level: 88,
    category: 'Leadership',
    description: 'Innovation culture development, R&D management, and breakthrough initiatives',
    icon: <Lightbulb className="w-5 h-5" />,
    projects: '12+ Innovations',
    experience: '8 Years',
    certifications: ['Innovation Manager', 'Design Thinking Certified', 'R&D Leadership'],
    color: '#eab308',
    gradient: 'from-[#eab308] to-[#ca8a04]'
  }
];

const categories = [
  { name: 'Technical', color: '#00c3ff', count: skillRatings.filter(s => s.category === 'Technical').length },
  { name: 'Business', color: '#c961de', count: skillRatings.filter(s => s.category === 'Business').length },
  { name: 'Leadership', color: '#f59e0b', count: skillRatings.filter(s => s.category === 'Leadership').length }
];

interface ProfessionalSkillRatingsProps {
  className?: string;
}

export function ProfessionalSkillRatings({ className = "" }: ProfessionalSkillRatingsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Technical');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const filteredSkills = skillRatings.filter(skill => skill.category === selectedCategory);
  const categoryData = categories.find(cat => cat.name === selectedCategory);

  return (
    <div className={`w-full space-y-8 ${className}`}>
      {/* Category Tabs */}
      <div className="flex justify-center">
        <div className="flex bg-[rgba(14,36,57,0.6)] backdrop-blur-md rounded-2xl p-2 border border-[#1c3654]">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.name
                  ? 'text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
              style={{
                background: selectedCategory === category.name 
                  ? `linear-gradient(135deg, ${category.color}, ${category.color}dd)` 
                  : 'transparent'
              }}
              onClick={() => setSelectedCategory(category.name)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
              <span className="text-xs bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded-full">
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Category Header */}
      <motion.div
        className="text-center"
        key={selectedCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          {selectedCategory} Skills
        </h3>
        <p className="text-gray-400">
          {selectedCategory === 'Technical' && 'Core technical competencies and engineering expertise'}
          {selectedCategory === 'Business' && 'Strategic business acumen and market development skills'}
          {selectedCategory === 'Leadership' && 'People management and organizational leadership capabilities'}
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        key={selectedCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group"
          >
            <motion.div
              className="relative p-6 rounded-2xl bg-gradient-to-br from-[rgba(14,36,57,0.8)] to-[rgba(7,25,45,0.9)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] overflow-hidden cursor-pointer"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
            >
              {/* Background Gradient Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                initial={false}
              />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-3 rounded-xl backdrop-blur-sm"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                      border: `1px solid ${skill.color}30`,
                      boxShadow: `0 0 20px ${skill.color}20`
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                  </motion.div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <motion.div
                    className="text-3xl font-bold mb-1"
                    style={{ color: skill.color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {skill.level}%
                  </motion.div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(skill.level / 20) 
                            ? 'fill-current' 
                            : 'stroke-current fill-transparent'
                        }`}
                        style={{ color: skill.color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Proficiency Level</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 rounded-lg bg-[rgba(255,255,255,0.05)]">
                  <div className="text-sm font-medium text-white">{skill.projects}</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-[rgba(255,255,255,0.05)]">
                  <div className="text-sm font-medium text-white">{skill.experience}</div>
                  <div className="text-xs text-gray-400">Experience</div>
                </div>
              </div>
              
              {/* Expand Button */}
              <motion.div
                className="flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: expandedSkill === skill.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
                <span className="text-sm ml-1">
                  {expandedSkill === skill.id ? 'Show Less' : 'Show More'}
                </span>
              </motion.div>
              
              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedSkill === skill.id ? 'auto' : 0,
                  opacity: expandedSkill === skill.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-[rgba(255,255,255,0.1)] mt-4">
                  <h5 className="text-white font-medium mb-3">Certifications & Credentials</h5>
                  <div className="space-y-2">
                    {skill.certifications.map((cert, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                        {cert}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Overall Statistics */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {categories.map((category) => {
          const categorySkills = skillRatings.filter(skill => skill.category === category.name);
          const avgLevel = Math.round(
            categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length
          );
          const totalProjects = categorySkills.reduce((acc, skill) => {
            const projectCount = parseInt(skill.projects.replace(/\D/g, ''));
            return acc + projectCount;
          }, 0);
          
          return (
            <motion.div
              key={category.name}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-[rgba(14,36,57,0.6)] to-[rgba(7,25,45,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)]"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCategory(category.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className="text-3xl font-bold mb-2" style={{ color: category.color }}>
                {avgLevel}%
              </div>
              <div className="text-white font-medium mb-1">{category.name}</div>
              <div className="text-sm text-gray-400 mb-2">{category.count} Skills</div>
              <div className="text-xs text-gray-500">{totalProjects}+ Projects</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}