
import React, { useState, useEffect } from 'react';
import { Brain, Code, FileText, User, Clock, Zap } from 'lucide-react';

interface ProcessNode {
  id: number;
  title: string;
  phase: string;
  description: string;
  icon: React.ElementType;
  position: { x: number; y: number };
  connections: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

const NeuralDevelopmentProcess = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [neuralPulse, setNeuralPulse] = useState(0);

  const processNodes: ProcessNode[] = [
    {
      id: 1,
      title: "Discovery",
      phase: "Phase 01",
      description: "Understanding your vision and requirements through comprehensive analysis and stakeholder collaboration.",
      icon: Brain,
      position: { x: 20, y: 50 },
      connections: [2, 6],
      status: "completed",
      energy: 100,
    },
    {
      id: 2,
      title: "Design",
      phase: "Phase 02", 
      description: "Creating intuitive user experiences with cutting-edge design principles and neural interface concepts.",
      icon: FileText,
      position: { x: 35, y: 25 },
      connections: [1, 3, 7],
      status: "completed",
      energy: 90,
    },
    {
      id: 3,
      title: "Development",
      phase: "Phase 03",
      description: "Building with cutting-edge technologies using neural development methodologies and cognitive architecture.",
      icon: Code,
      position: { x: 65, y: 25 },
      connections: [2, 4, 8],
      status: "in-progress",
      energy: 75,
    },
    {
      id: 4,
      title: "Testing",
      phase: "Phase 04",
      description: "Ensuring quality and performance through comprehensive testing protocols and neural validation systems.",
      icon: User,
      position: { x: 80, y: 50 },
      connections: [3, 5, 9],
      status: "pending",
      energy: 60,
    },
    {
      id: 5,
      title: "Deployment",
      phase: "Phase 05",
      description: "Launching your solution to the world with seamless deployment and continuous neural monitoring.",
      icon: Clock,
      position: { x: 50, y: 75 },
      connections: [4, 10],
      status: "pending",
      energy: 40,
    },
    // Meaningful connecting nodes for each phase
    {
      id: 6,
      title: "Stakeholder Analysis",
      phase: "Discovery Node",
      description: "Identifying key stakeholders and understanding their requirements through neural interviews.",
      icon: User,
      position: { x: 8, y: 35 },
      connections: [1, 7],
      status: "completed",
      energy: 95,
    },
    {
      id: 7,
      title: "Market Research",
      phase: "Discovery Node",
      description: "Competitive analysis and market validation using AI-powered insights.",
      icon: Brain,
      position: { x: 12, y: 65 },
      connections: [1, 6],
      status: "completed",
      energy: 90,
    },
    {
      id: 8,
      title: "Wireframe Creation",
      phase: "Design Node",
      description: "Creating interactive wireframes and user journey maps with neural feedback loops.",
      icon: FileText,
      position: { x: 22, y: 8 },
      connections: [2, 9],
      status: "completed",
      energy: 85,
    },
    {
      id: 9,
      title: "Prototype Testing",
      phase: "Design Node",
      description: "User testing of prototypes with real-time neural behavior analysis.",
      icon: User,
      position: { x: 48, y: 12 },
      connections: [2, 8, 10],
      status: "completed",
      energy: 80,
    },
    {
      id: 10,
      title: "Code Architecture",
      phase: "Development Node",
      description: "Designing scalable architecture with microservices and neural processing capabilities.",
      icon: Code,
      position: { x: 78, y: 8 },
      connections: [3, 9, 11],
      status: "in-progress",
      energy: 75,
    },
    {
      id: 11,
      title: "API Integration",
      phase: "Development Node",
      description: "Building robust APIs with neural sync capabilities and real-time data processing.",
      icon: Zap,
      position: { x: 88, y: 35 },
      connections: [3, 10, 12],
      status: "in-progress",
      energy: 70,
    },
    {
      id: 12,
      title: "Performance Testing",
      phase: "Testing Node",
      description: "Comprehensive performance testing including load testing and neural response validation.",
      icon: Brain,
      position: { x: 92, y: 65 },
      connections: [4, 11, 13],
      status: "pending",
      energy: 60,
    },
    {
      id: 13,
      title: "Security Audit",
      phase: "Testing Node",
      description: "Advanced security testing with neural threat detection and vulnerability assessment.",
      icon: User,
      position: { x: 68, y: 92 },
      connections: [4, 12, 14],
      status: "pending",
      energy: 55,
    },
    {
      id: 14,
      title: "CI/CD Pipeline",
      phase: "Deployment Node",
      description: "Automated deployment pipeline with neural monitoring and rollback capabilities.",
      icon: Clock,
      position: { x: 38, y: 88 },
      connections: [5, 13, 15],
      status: "pending",
      energy: 45,
    },
    {
      id: 15,
      title: "Monitoring Setup",
      phase: "Deployment Node",
      description: "Real-time monitoring with neural analytics and predictive maintenance systems.",
      icon: Zap,
      position: { x: 25, y: 75 },
      connections: [5, 14],
      status: "pending",
      energy: 40,
    },
  ];

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setNeuralPulse(prev => (prev + 1) % processNodes.length);
    }, 1500);

    return () => clearInterval(pulseInterval);
  }, []);

  const handleNodeClick = (nodeId: number) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
    
    if (activeNode !== nodeId) {
      const node = processNodes.find(n => n.id === nodeId);
      if (node) {
        const newPulseEffect: Record<number, boolean> = {};
        node.connections.forEach(connId => {
          newPulseEffect[connId] = true;
        });
        setPulseEffect(newPulseEffect);
        
        setTimeout(() => setPulseEffect({}), 2000);
      }
    } else {
      setPulseEffect({});
    }
  };

  const getStatusColor = (status: ProcessNode["status"], nodeId: number) => {
    // Special colors for phases 4 and 5
    if (nodeId === 4) {
      return "from-purple-400 to-violet-500";
    }
    if (nodeId === 5) {
      return "from-orange-400 to-red-500";
    }
    
    switch (status) {
      case "completed":
        return "from-green-400 to-emerald-500";
      case "in-progress":
        return "from-cyan-400 to-blue-500";
      case "pending":
        return "from-gray-400 to-gray-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const getInfoPanelPosition = (nodeId: number, position: { x: number; y: number }) => {
    // Adjust positioning for deployment phase (node 5) to ensure visibility
    if (nodeId === 5) {
      return {
        top: '-280px', // Move panel above the node instead of below
        left: '50%',
        transform: 'translateX(-50%)'
      };
    }
    
    // For other nodes, position below
    return {
      top: '28px',
      left: '50%',
      transform: 'translateX(-50%)'
    };
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-neural-pulse"></div>
      
      {/* Floating gradient lights */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Neural connections SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0, 212, 255)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.8" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {processNodes.map(node => 
          node.connections.map(connId => {
            const targetNode = processNodes.find(n => n.id === connId);
            if (!targetNode) return null;
            
            const isActive = activeNode === node.id || activeNode === connId;
            const isPulsing = pulseEffect[node.id] || pulseEffect[connId];
            
            return (
              <line
                key={`${node.id}-${connId}`}
                x1={`${node.position.x}%`}
                y1={`${node.position.y}%`}
                x2={`${targetNode.position.x}%`}
                y2={`${targetNode.position.y}%`}
                stroke={isActive || isPulsing ? "url(#connectionGradient)" : "rgba(0, 212, 255, 0.3)"}
                strokeWidth={isActive || isPulsing ? "3" : "2"}
                filter={isActive || isPulsing ? "url(#glow)" : "none"}
                className={`transition-all duration-500 ${
                  isPulsing ? 'animate-synaptic-fire' : ''
                }`}
              />
            );
          })
        )}

        {/* Pulsing energy particles */}
        {processNodes.map((node, index) => (
          <circle
            key={`energy-${node.id}`}
            cx={`${node.position.x}%`}
            cy={`${node.position.y}%`}
            r="4"
            fill="rgb(0, 212, 255)"
            className={`transition-all duration-300 ${
              neuralPulse === index ? 'animate-ping' : 'opacity-60'
            }`}
          />
        ))}
      </svg>

      {/* Process nodes */}
      {processNodes.map((node) => (
        <div
          key={node.id}
          className="absolute cursor-pointer transition-all duration-500 group"
          style={{
            left: `${node.position.x}%`,
            top: `${node.position.y}%`,
            transform: 'translate(-50%, -50%)',
            zIndex: activeNode === node.id ? 50 : 10,
          }}
          onClick={() => handleNodeClick(node.id)}
        >
          {/* Node aura */}
          <div className={`absolute inset-0 w-32 h-32 bg-gradient-to-br ${getStatusColor(node.status, node.id)} rounded-full blur-xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 ${
            activeNode === node.id ? 'scale-150 opacity-60' : 'scale-100 opacity-20'
          }`}></div>

          {/* Energy sparks */}
          {activeNode === node.id && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`,
                    animationDelay: `${i * 0.3}s`
                  }}
                ></div>
              ))}
            </div>
          )}

          {/* Main node */}
          <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${getStatusColor(node.status, node.id)} flex items-center justify-center transition-all duration-500 ${
            activeNode === node.id ? 'scale-125 shadow-2xl' : 'group-hover:scale-110'
          }`}>
            <node.icon className="w-8 h-8 text-white" />
            
            {/* Energy ring */}
            <div className={`absolute inset-0 rounded-full border-2 border-cyan-400 transition-all duration-500 ${
              activeNode === node.id ? 'animate-pulse scale-125' : 'opacity-0'
            }`}></div>
          </div>

          {/* Node label */}
          <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 text-center transition-all duration-300 ${
            activeNode === node.id ? 'scale-110' : ''
          }`}>
            <div className="text-xs text-cyan-400 font-mono">{node.phase}</div>
            <div className="text-sm font-bold text-white mt-1">{node.title}</div>
          </div>

          {/* Expanded info panel with improved positioning */}
          {activeNode === node.id && (
            <div 
              className="absolute w-64 glassmorphism p-4 rounded-xl neon-border animate-fade-in z-50"
              style={getInfoPanelPosition(node.id, node.position)}
            >
              <p className="text-xs text-gray-300 mb-3">{node.description}</p>
              
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="flex items-center text-cyan-400">
                  <Zap className="w-3 h-3 mr-1" />
                  Energy Level
                </span>
                <span className="font-mono text-white">{node.energy}%</span>
              </div>
              
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getStatusColor(node.status, node.id)} transition-all duration-1000`}
                  style={{ width: `${node.energy}%` }}
                ></div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-cyan-500/30">
                <div className="flex items-center text-xs text-cyan-400">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                  Neural pathways: {node.connections.length} connections active
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Central title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
        <h3 className="text-2xl font-bold text-white">
          Neural Development <span className="text-neon">Process</span>
        </h3>
        <p className="text-sm text-gray-300 mt-2">Click nodes to explore neural connections</p>
      </div>
    </div>
  );
};

export default NeuralDevelopmentProcess;
