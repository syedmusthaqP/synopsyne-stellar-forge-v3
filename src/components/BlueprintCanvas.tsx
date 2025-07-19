import React, { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Node,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Download, Share2, FileText } from 'lucide-react';
import { toast } from 'sonner';

interface ProjectRequirements {
  projectName: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  features: string[];
  techStack: string[];
  integrations: string[];
  scalability: string;
  team: string;
}

interface BlueprintCanvasProps {
  requirements: ProjectRequirements;
}

const nodeTypes = {};

const BlueprintCanvas: React.FC<BlueprintCanvasProps> = ({ requirements }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const generateBlueprintNodes = useCallback(() => {
    const generatedNodes: Node[] = [];
    const generatedEdges: Edge[] = [];

    // Main project node
    generatedNodes.push({
      id: 'project',
      type: 'default',
      position: { x: 400, y: 50 },
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-lg">{requirements.projectName}</div>
            <div className="text-sm text-muted-foreground">{requirements.projectType}</div>
          </div>
        )
      },
      style: { 
        background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
        color: 'white',
        border: '2px solid hsl(var(--primary))',
        borderRadius: '12px',
        width: 200,
        height: 80
      }
    });

    // Frontend node
    if (requirements.techStack.some(tech => 
      ['React', 'Vue', 'Angular', 'Next.js', 'Frontend'].some(frontend => 
        tech.toLowerCase().includes(frontend.toLowerCase())
      )
    )) {
      generatedNodes.push({
        id: 'frontend',
        type: 'default',
        position: { x: 100, y: 200 },
        data: { 
          label: (
            <div className="text-center">
              <div className="font-semibold">Frontend</div>
              <div className="text-xs">
                {requirements.techStack.filter(tech => 
                  ['React', 'Vue', 'Angular', 'Next.js'].some(frontend => 
                    tech.toLowerCase().includes(frontend.toLowerCase())
                  )
                ).slice(0, 2).join(', ')}
              </div>
            </div>
          )
        },
        style: { 
          background: 'hsl(var(--secondary))',
          color: 'white',
          borderRadius: '8px',
          width: 150
        }
      });

      generatedEdges.push({
        id: 'project-frontend',
        source: 'project',
        target: 'frontend',
        type: 'smoothstep',
        markerEnd: { type: MarkerType.ArrowClosed }
      });
    }

    // Backend node
    if (requirements.techStack.some(tech => 
      ['Node.js', 'Python', 'Java', 'PHP', 'Backend', 'API'].some(backend => 
        tech.toLowerCase().includes(backend.toLowerCase())
      )
    )) {
      generatedNodes.push({
        id: 'backend',
        type: 'default',
        position: { x: 700, y: 200 },
        data: { 
          label: (
            <div className="text-center">
              <div className="font-semibold">Backend</div>
              <div className="text-xs">
                {requirements.techStack.filter(tech => 
                  ['Node.js', 'Python', 'Java', 'PHP'].some(backend => 
                    tech.toLowerCase().includes(backend.toLowerCase())
                  )
                ).slice(0, 2).join(', ')}
              </div>
            </div>
          )
        },
        style: { 
          background: 'hsl(var(--accent))',
          color: 'white',
          borderRadius: '8px',
          width: 150
        }
      });

      generatedEdges.push({
        id: 'project-backend',
        source: 'project',
        target: 'backend',
        type: 'smoothstep',
        markerEnd: { type: MarkerType.ArrowClosed }
      });
    }

    // Database node
    if (requirements.techStack.some(tech => 
      ['PostgreSQL', 'MySQL', 'MongoDB', 'Database'].some(db => 
        tech.toLowerCase().includes(db.toLowerCase())
      )
    )) {
      generatedNodes.push({
        id: 'database',
        type: 'default',
        position: { x: 700, y: 350 },
        data: { 
          label: (
            <div className="text-center">
              <div className="font-semibold">Database</div>
              <div className="text-xs">
                {requirements.techStack.filter(tech => 
                  ['PostgreSQL', 'MySQL', 'MongoDB'].some(db => 
                    tech.toLowerCase().includes(db.toLowerCase())
                  )
                ).slice(0, 1).join(', ')}
              </div>
            </div>
          )
        },
        style: { 
          background: 'hsl(var(--muted))',
          border: '2px solid hsl(var(--border))',
          borderRadius: '8px',
          width: 150
        }
      });

      if (generatedNodes.find(n => n.id === 'backend')) {
        generatedEdges.push({
          id: 'backend-database',
          source: 'backend',
          target: 'database',
          type: 'smoothstep',
          markerEnd: { type: MarkerType.ArrowClosed }
        });
      }
    }

    // Feature nodes
    requirements.features.slice(0, 4).forEach((feature, index) => {
      const positions = [
        { x: 50, y: 350 + index * 80 },
        { x: 250, y: 350 + index * 80 },
        { x: 450, y: 350 + index * 80 },
        { x: 550, y: 350 + index * 80 }
      ];

      generatedNodes.push({
        id: `feature-${index}`,
        type: 'default',
        position: positions[index] || { x: 50 + index * 100, y: 350 },
        data: { 
          label: (
            <div className="text-center text-xs">
              <div className="font-medium">{feature}</div>
            </div>
          )
        },
        style: { 
          background: 'hsl(var(--card))',
          border: '1px solid hsl(var(--border))',
          borderRadius: '6px',
          width: 120,
          height: 60
        }
      });

      // Connect features to appropriate nodes
      const sourceNode = generatedNodes.find(n => n.id === 'frontend') ? 'frontend' : 'project';
      generatedEdges.push({
        id: `feature-${index}-connection`,
        source: sourceNode,
        target: `feature-${index}`,
        type: 'smoothstep',
        style: { stroke: 'hsl(var(--muted-foreground))', strokeDasharray: '5,5' }
      });
    });

    // Integration nodes
    requirements.integrations.slice(0, 3).forEach((integration, index) => {
      generatedNodes.push({
        id: `integration-${index}`,
        type: 'default',
        position: { x: 850 + index * 80, y: 200 + index * 60 },
        data: { 
          label: (
            <div className="text-center text-xs">
              <div className="font-medium">{integration}</div>
            </div>
          )
        },
        style: { 
          background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)))',
          color: 'white',
          borderRadius: '6px',
          width: 100,
          height: 50
        }
      });

      const sourceNode = generatedNodes.find(n => n.id === 'backend') ? 'backend' : 'project';
      generatedEdges.push({
        id: `integration-${index}-connection`,
        source: sourceNode,
        target: `integration-${index}`,
        type: 'smoothstep',
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: 'hsl(var(--secondary))' }
      });
    });

    setNodes(generatedNodes);
    setEdges(generatedEdges);
  }, [requirements, setNodes, setEdges]);

  useEffect(() => {
    generateBlueprintNodes();
  }, [generateBlueprintNodes]);

  const exportBlueprint = () => {
    toast.success('Blueprint export functionality would be implemented here');
  };

  const shareBlueprint = () => {
    toast.success('Blueprint sharing functionality would be implemented here');
  };

  const generateReport = () => {
    toast.success('Detailed report generation would be implemented here');
  };

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Project Summary */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">{requirements.projectName} - Architecture Blueprint</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={exportBlueprint}>
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </Button>
                <Button size="sm" variant="outline" onClick={shareBlueprint}>
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
                <Button size="sm" variant="outline" onClick={generateReport}>
                  <FileText className="w-4 h-4 mr-1" />
                  Report
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-medium text-muted-foreground">Type:</span>
                <div>{requirements.projectType}</div>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Timeline:</span>
                <div>{requirements.timeline || 'Not specified'}</div>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Budget:</span>
                <div>{requirements.budget || 'Not specified'}</div>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Scalability:</span>
                <div>{requirements.scalability || 'Not specified'}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <span className="font-medium text-sm">Features:</span>
              <div className="text-2xl font-bold text-primary">{requirements.features.length}</div>
            </div>
            <div>
              <span className="font-medium text-sm">Technologies:</span>
              <div className="text-2xl font-bold text-secondary">{requirements.techStack.length}</div>
            </div>
            <div>
              <span className="font-medium text-sm">Integrations:</span>
              <div className="text-2xl font-bold text-accent">{requirements.integrations.length}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Flow Diagram */}
      <Card className="h-[600px]">
        <CardHeader className="pb-3">
          <CardTitle>Interactive Architecture Diagram</CardTitle>
        </CardHeader>
        <CardContent className="h-[520px] p-0">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-left"
            className="bg-background"
          >
            <Controls />
            <MiniMap 
              nodeColor="#e2e8f0"
              maskColor="rgba(0, 0, 0, 0.2)"
              className="!bg-card border border-border rounded-lg"
            />
            <Background gap={20} size={1} color="hsl(var(--border))" />
          </ReactFlow>
        </CardContent>
      </Card>

      {/* Technology Stack & Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {requirements.techStack.map((tech, index) => (
                <Badge key={index} variant="default">
                  {tech}
                </Badge>
              ))}
              {requirements.techStack.length === 0 && (
                <p className="text-muted-foreground">No technologies specified</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {requirements.features.map((feature, index) => (
                <Badge key={index} variant="secondary">
                  {feature}
                </Badge>
              ))}
              {requirements.features.length === 0 && (
                <p className="text-muted-foreground">No features specified</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Description */}
      {requirements.description && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Project Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{requirements.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BlueprintCanvas;