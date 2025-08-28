import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillNode {
  id: string;
  name: string;
  level: number;
  category: 'technical' | 'business' | 'leadership';
  x: number;
  y: number;
  connections: string[];
}

const skillNodes: SkillNode[] = [
  { id: 'ai', name: 'AI Implementation', level: 95, category: 'technical', x: 15, y: 25, connections: ['automation', 'data'] },
  { id: 'automation', name: 'Process Automation', level: 90, category: 'technical', x: 40, y: 15, connections: ['ai', 'strategy'] },
  { id: 'architecture', name: 'System Architecture', level: 85, category: 'technical', x: 70, y: 20, connections: ['data', 'business'] },
  { id: 'data', name: 'Data Analysis', level: 80, category: 'technical', x: 85, y: 35, connections: ['ai', 'architecture'] },
  { id: 'ev', name: 'Electric Vehicles', level: 85, category: 'technical', x: 65, y: 50, connections: ['aerodynamics'] },
  { id: 'aerodynamics', name: 'Aerodynamics', level: 80, category: 'technical', x: 45, y: 65, connections: ['ev'] },
  { id: 'strategy', name: 'Strategic Planning', level: 95, category: 'business', x: 20, y: 75, connections: ['automation', 'leadership'] },
  { id: 'leadership', name: 'Team Leadership', level: 90, category: 'leadership', x: 75, y: 75, connections: ['strategy', 'business'] },
  { id: 'business', name: 'Business Development', level: 85, category: 'business', x: 50, y: 85, connections: ['leadership', 'architecture'] },
  { id: 'hr', name: 'Human Resource', level: 80, category: 'leadership', x: 25, y: 50, connections: ['strategy', 'industrial'] },
  { id: 'industrial', name: 'Industrial Relations', level: 85, category: 'business', x: 10, y: 60, connections: ['hr'] },
];

interface SkillTreeProps {
  className?: string;
}

export function SkillTree({ className = "" }: SkillTreeProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technical': return '#00c3ff';
      case 'business': return '#c961de';
      case 'leadership': return '#4f8efc';
      default: return '#00c3ff';
    }
  };

  const getNodeSize = (level: number) => {
    return Math.max(30, (level / 100) * 50);
  };

  return (
    <div className={`relative w-full h-[500px] bg-[rgba(14,36,57,0.3)] rounded-xl border border-[#1c3654] overflow-hidden ${className}`}>
      <svg width="100%" height="100%" className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connections */}
        {skillNodes.map(node => 
          node.connections.map(connectionId => {
            const connectedNode = skillNodes.find(n => n.id === connectionId);
            if (!connectedNode) return null;
            
            const isActive = hoveredNode === node.id || hoveredNode === connectionId || 
                           selectedNode === node.id || selectedNode === connectionId;
            
            return (
              <motion.line
                key={`${node.id}-${connectionId}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${connectedNode.x}%`}
                y2={`${connectedNode.y}%`}
                stroke={isActive ? getCategoryColor(node.category) : '#1e4976'}
                strokeWidth={isActive ? 2 : 1}
                strokeOpacity={isActive ? 0.8 : 0.3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            );
          })
        )}
        
        {/* Nodes */}
        {skillNodes.map((node, index) => {
          const isHovered = hoveredNode === node.id;
          const isSelected = selectedNode === node.id;
          const isConnected = hoveredNode && node.connections.includes(hoveredNode);
          const size = getNodeSize(node.level);
          
          return (
            <g key={node.id}>
              {/* Node glow effect */}
              {(isHovered || isSelected) && (
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={size / 2 + 10}
                  fill={getCategoryColor(node.category)}
                  fillOpacity={0.2}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Main node */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={size / 2}
                fill={getCategoryColor(node.category)}
                fillOpacity={isHovered || isSelected || isConnected ? 0.8 : 0.6}
                stroke={getCategoryColor(node.category)}
                strokeWidth={2}
                strokeOpacity={isHovered || isSelected ? 1 : 0.7}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
              
              {/* Node label */}
              <motion.text
                x={`${node.x}%`}
                y={`${node.y + 8}%`}
                textAnchor="middle"
                className="fill-white text-xs font-medium pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered || isSelected ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                {node.name}
              </motion.text>
              
              {/* Level indicator */}
              <motion.text
                x={`${node.x}%`}
                y={`${node.y - 2}%`}
                textAnchor="middle"
                className="fill-white text-xs font-bold pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {node.level}%
              </motion.text>
            </g>
          );
        })}
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#00c3ff]"></div>
          <span className="text-gray-300">Technical</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#c961de]"></div>
          <span className="text-gray-300">Business</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#4f8efc]"></div>
          <span className="text-gray-300">Leadership</span>
        </div>
      </div>
      
      {/* Node details panel */}
      {selectedNode && (
        <motion.div
          className="absolute top-4 right-4 bg-[rgba(14,36,57,0.9)] backdrop-blur-md border border-[#1c3654] rounded-lg p-4 max-w-xs"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {(() => {
            const node = skillNodes.find(n => n.id === selectedNode);
            if (!node) return null;
            
            return (
              <div>
                <h4 className="text-white font-semibold mb-2">{node.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getCategoryColor(node.category) }}
                  ></div>
                  <span className="text-gray-300 text-sm capitalize">{node.category}</span>
                </div>
                <div className="text-gray-300 text-sm">
                  Proficiency: <span style={{ color: getCategoryColor(node.category) }}>{node.level}%</span>
                </div>
                <div className="text-gray-400 text-xs mt-2">
                  Connected to: {node.connections.join(', ')}
                </div>
              </div>
            );
          })()}
        </motion.div>
      )}
    </div>
  );
}