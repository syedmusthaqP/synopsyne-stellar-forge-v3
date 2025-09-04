import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Zap, 
  Star,
  Eye,
  Target,
  TrendingUp,
  Award,
  Network
} from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  content: string;
  category: 'work' | 'education' | 'achievement';
  icon: React.ReactNode;
  relatedIds?: string[];
  status: 'completed' | 'current' | 'future';
  energy: number; // 1-100 for visual emphasis
}

interface EnhancedTimelineProps {
  items: TimelineItem[];
}

export function EnhancedTimeline({ items }: EnhancedTimelineProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'orbital' | 'timeline'>('orbital');
  const [rotation, setRotation] = useState(0);
  const [pulseEffect, setPulseEffect] = useState(false);
  const [activeNodes, setActiveNodes] = useState<string[]>([]);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setExpandedItem(null);
      setActiveNodes([]);
    }
  };

  const toggleItem = (itemId: string) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
      setActiveNodes([]);
    } else {
      setExpandedItem(itemId);
      const item = items.find(i => i.id === itemId);
      if (item?.relatedIds) {
        setActiveNodes([itemId, ...item.relatedIds]);
      } else {
        setActiveNodes([itemId]);
      }
      setPulseEffect(true);
      setTimeout(() => setPulseEffect(false), 600);
    }
  };

  useEffect(() => {
    if (!expandedItem) {
      const interval = setInterval(() => {
        setRotation(prev => prev + 0.5);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [expandedItem]);

  const centerViewOnNode = (itemId: string) => {
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      const targetRotation = -(itemIndex * (360 / items.length));
      setRotation(targetRotation);
    }
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = (index * 360 / total) + rotation;
    const radius = 200;
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    
    // Calculate z-index and opacity based on position
    const normalizedY = (y + radius) / (2 * radius);
    const zIndex = Math.round((1 - normalizedY) * 100);
    const opacity = 0.4 + (normalizedY * 0.6);
    
    return { x, y, zIndex, opacity };
  };

  const getRelatedItems = (itemId: string): string[] => {
    const item = items.find(i => i.id === itemId);
    return item?.relatedIds || [];
  };

  const isRelatedToActive = (itemId: string): boolean => {
    return activeNodes.includes(itemId);
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'current':
        return 'border-primary bg-primary/10 shadow-lg shadow-primary/25';
      case 'completed':
        return 'border-green-500/50 bg-green-500/10';
      case 'future':
        return 'border-purple-500/50 bg-purple-500/10';
      default:
        return 'border-muted bg-muted/50';
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background" onClick={handleContainerClick}>
      {/* Animated background lights */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + (i * 6)}%`,
              top: `${15 + (i * 7)}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Control panel */}
      <div className="absolute top-6 left-6 z-50 flex gap-2">
        <Badge 
          variant={viewMode === 'orbital' ? 'default' : 'secondary'}
          className="cursor-pointer"
          onClick={() => setViewMode('orbital')}
        >
          <Eye className="w-3 h-3 mr-1" />
          Orbital View
        </Badge>
        <Badge 
          variant={viewMode === 'timeline' ? 'default' : 'secondary'}
          className="cursor-pointer"
          onClick={() => setViewMode('timeline')}
        >
          <Calendar className="w-3 h-3 mr-1" />
          Timeline View
        </Badge>
      </div>

      {viewMode === 'orbital' ? (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central element */}
          <motion.div 
            className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center z-40"
            animate={{ 
              rotate: rotation * 2,
              scale: pulseEffect ? [1, 1.3, 1] : 1
            }}
            transition={{ 
              rotate: { duration: 0.1 },
              scale: { duration: 0.6 }
            }}
          >
            <Target className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          {/* Orbital timeline items */}
          {items.map((item, index) => {
            const position = calculateNodePosition(index, items.length);
            const isExpanded = expandedItem === item.id;
            const isRelated = isRelatedToActive(item.id);
            
            return (
              <motion.div
                key={item.id}
                className="absolute"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: position.zIndex,
                }}
                animate={{
                  opacity: isExpanded ? 1 : (isRelated ? 0.9 : position.opacity),
                  scale: isExpanded ? 1.2 : (isRelated ? 1.1 : 1),
                }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                  centerViewOnNode(item.id);
                }}
              >
                {/* Node */}
                <motion.div
                  className={`w-12 h-12 rounded-full cursor-pointer flex items-center justify-center border-2 backdrop-blur-sm ${getStatusStyles(item.status)}`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.div>

                {/* Node label */}
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-xs font-medium text-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded whitespace-nowrap">
                    {item.title}
                  </div>
                </div>

                {/* Energy indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                  animate={{
                    opacity: item.energy / 100,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Infinity }
                  }}
                />

                {/* Connection lines to related nodes */}
                {isExpanded && getRelatedItems(item.id).map(relatedId => {
                  const relatedIndex = items.findIndex(i => i.id === relatedId);
                  if (relatedIndex === -1) return null;
                  
                  const relatedPosition = calculateNodePosition(relatedIndex, items.length);
                  const deltaX = relatedPosition.x - position.x;
                  const deltaY = relatedPosition.y - position.y;
                  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                  const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
                  
                  return (
                    <motion.div
                      key={relatedId}
                      className="absolute top-6 left-6 h-0.5 bg-gradient-to-r from-primary to-transparent origin-left"
                      style={{
                        width: distance,
                        transform: `rotate(${angle}deg)`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  );
                })}
              </motion.div>
            );
          })}

          {/* Expanded card */}
          <AnimatePresence>
            {expandedItem && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="w-80 max-w-sm bg-background/95 backdrop-blur-md border-primary/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {items.find(i => i.id === expandedItem)?.icon}
                        <Badge variant="outline" className={getStatusStyles(items.find(i => i.id === expandedItem)?.status || 'completed')}>
                          {items.find(i => i.id === expandedItem)?.status}
                        </Badge>
                      </div>
                      <Badge variant="secondary">
                        {items.find(i => i.id === expandedItem)?.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {items.find(i => i.id === expandedItem)?.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-4">
                      {items.find(i => i.id === expandedItem)?.content}
                    </CardDescription>
                    
                    {/* Energy level */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Impact Level</span>
                        <span className="font-medium">{items.find(i => i.id === expandedItem)?.energy}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${items.find(i => i.id === expandedItem)?.energy}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>

                    {/* Related nodes */}
                    {getRelatedItems(expandedItem).length > 0 && (
                      <div>
                        <div className="text-xs text-muted-foreground mb-2 flex items-center">
                          <Network className="w-3 h-3 mr-1" />
                          Related Experiences ({getRelatedItems(expandedItem).length})
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {getRelatedItems(expandedItem).map(relatedId => {
                            const relatedItem = items.find(i => i.id === relatedId);
                            return relatedItem ? (
                              <Badge 
                                key={relatedId} 
                                variant="outline" 
                                className="text-xs cursor-pointer"
                                onClick={() => toggleItem(relatedId)}
                              >
                                {relatedItem.title}
                              </Badge>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Traditional timeline view */
        <div className="w-full h-full overflow-y-auto px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Career Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative flex items-start mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${getStatusStyles(item.status)} z-10`}>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-2">
                            {item.icon}
                            {item.title}
                          </CardTitle>
                          <Badge variant="outline">{item.date}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.content}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}