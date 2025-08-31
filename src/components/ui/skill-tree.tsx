import React from 'react';
import { InteractiveSkillVisualization } from './interactive-skill-visualization';

interface SkillTreeProps {
  className?: string;
}

export const SkillTree: React.FC<SkillTreeProps> = ({ className = '' }) => {
  return <InteractiveSkillVisualization className={className} />;
};