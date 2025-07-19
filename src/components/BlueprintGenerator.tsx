import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { toast } from 'sonner';
import BlueprintCanvas from './BlueprintCanvas';

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

const BlueprintGenerator = () => {
  const [requirements, setRequirements] = useState<ProjectRequirements>({
    projectName: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    features: [],
    techStack: [],
    integrations: [],
    scalability: '',
    team: ''
  });

  const [showBlueprint, setShowBlueprint] = useState(false);
  const [currentFeature, setCurrentFeature] = useState('');
  const [currentTech, setCurrentTech] = useState('');
  const [currentIntegration, setCurrentIntegration] = useState('');

  const projectTypes = [
    'Web Application', 'Mobile App', 'E-commerce Platform', 
    'CRM System', 'Dashboard/Analytics', 'API/Backend Service',
    'Full Stack Application', 'Progressive Web App'
  ];

  const budgetRanges = [
    '$5K - $15K', '$15K - $30K', '$30K - $50K', 
    '$50K - $100K', '$100K - $200K', '$200K+'
  ];

  const timelineOptions = [
    '2-4 weeks', '1-2 months', '2-3 months', 
    '3-6 months', '6-12 months', '12+ months'
  ];

  const scalabilityOptions = [
    'MVP/Prototype', 'Small Scale (100-1K users)', 
    'Medium Scale (1K-10K users)', 'Large Scale (10K-100K users)', 
    'Enterprise Scale (100K+ users)'
  ];

  const teamSizes = [
    '1-2 developers', '3-5 developers', '5-10 developers', 
    '10+ developers', 'Full development team with specialists'
  ];

  const addFeature = () => {
    if (currentFeature.trim()) {
      setRequirements(prev => ({
        ...prev,
        features: [...prev.features, currentFeature.trim()]
      }));
      setCurrentFeature('');
    }
  };

  const addTech = () => {
    if (currentTech.trim()) {
      setRequirements(prev => ({
        ...prev,
        techStack: [...prev.techStack, currentTech.trim()]
      }));
      setCurrentTech('');
    }
  };

  const addIntegration = () => {
    if (currentIntegration.trim()) {
      setRequirements(prev => ({
        ...prev,
        integrations: [...prev.integrations, currentIntegration.trim()]
      }));
      setCurrentIntegration('');
    }
  };

  const removeItem = (array: string[], index: number, key: keyof ProjectRequirements) => {
    setRequirements(prev => ({
      ...prev,
      [key]: array.filter((_, i) => i !== index)
    }));
  };

  const generateBlueprint = () => {
    if (!requirements.projectName || !requirements.projectType || !requirements.description) {
      toast.error('Please fill in the required fields');
      return;
    }

    setShowBlueprint(true);
    toast.success('Blueprint generated successfully!');
  };

  const resetForm = () => {
    setRequirements({
      projectName: '',
      projectType: '',
      description: '',
      budget: '',
      timeline: '',
      features: [],
      techStack: [],
      integrations: [],
      scalability: '',
      team: ''
    });
    setShowBlueprint(false);
  };

  if (showBlueprint) {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Project Blueprint</h1>
            <p className="text-muted-foreground">Interactive project architecture for {requirements.projectName}</p>
          </div>
          <div className="space-x-2">
            <Button variant="outline" onClick={() => setShowBlueprint(false)}>
              Edit Requirements
            </Button>
            <Button variant="outline" onClick={resetForm}>
              New Project
            </Button>
          </div>
        </div>
        <BlueprintCanvas requirements={requirements} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Project Blueprint Generator</h1>
        <p className="text-lg text-muted-foreground">
          Transform your ideas into a detailed technical blueprint with interactive visualizations
        </p>
      </div>

      <Card className="glassmorphism border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Project Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="scope">Scope</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectName">Project Name *</Label>
                  <Input
                    id="projectName"
                    value={requirements.projectName}
                    onChange={(e) => setRequirements(prev => ({ ...prev, projectName: e.target.value }))}
                    placeholder="Enter your project name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    value={requirements.projectType}
                    onValueChange={(value) => setRequirements(prev => ({ ...prev, projectType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  value={requirements.description}
                  onChange={(e) => setRequirements(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your project goals, target audience, and main objectives"
                  rows={4}
                />
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="space-y-4">
                <Label>Project Features</Label>
                <div className="flex gap-2">
                  <Input
                    value={currentFeature}
                    onChange={(e) => setCurrentFeature(e.target.value)}
                    placeholder="Add a feature (e.g., User Authentication, Payment Gateway)"
                    onKeyPress={(e) => e.key === 'Enter' && addFeature()}
                  />
                  <Button onClick={addFeature}>Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {requirements.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="cursor-pointer" onClick={() => removeItem(requirements.features, index, 'features')}>
                      {feature} ×
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Third-party Integrations</Label>
                <div className="flex gap-2">
                  <Input
                    value={currentIntegration}
                    onChange={(e) => setCurrentIntegration(e.target.value)}
                    placeholder="Add integration (e.g., Stripe, Google Analytics, SendGrid)"
                    onKeyPress={(e) => e.key === 'Enter' && addIntegration()}
                  />
                  <Button onClick={addIntegration}>Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {requirements.integrations.map((integration, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer" onClick={() => removeItem(requirements.integrations, index, 'integrations')}>
                      {integration} ×
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="technical" className="space-y-6">
              <div className="space-y-4">
                <Label>Preferred Technology Stack</Label>
                <div className="flex gap-2">
                  <Input
                    value={currentTech}
                    onChange={(e) => setCurrentTech(e.target.value)}
                    placeholder="Add technology (e.g., React, Node.js, PostgreSQL)"
                    onKeyPress={(e) => e.key === 'Enter' && addTech()}
                  />
                  <Button onClick={addTech}>Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {requirements.techStack.map((tech, index) => (
                    <Badge key={index} variant="default" className="cursor-pointer" onClick={() => removeItem(requirements.techStack, index, 'techStack')}>
                      {tech} ×
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="scalability">Scalability Requirements</Label>
                <Select
                  value={requirements.scalability}
                  onValueChange={(value) => setRequirements(prev => ({ ...prev, scalability: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select scalability needs" />
                  </SelectTrigger>
                  <SelectContent>
                    {scalabilityOptions.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="scope" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select
                    value={requirements.budget}
                    onValueChange={(value) => setRequirements(prev => ({ ...prev, budget: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map(range => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select
                    value={requirements.timeline}
                    onValueChange={(value) => setRequirements(prev => ({ ...prev, timeline: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map(timeline => (
                        <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="team">Team Size</Label>
                <Select
                  value={requirements.team}
                  onValueChange={(value) => setRequirements(prev => ({ ...prev, team: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamSizes.map(size => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between pt-6 border-t">
            <Button variant="outline" onClick={resetForm}>
              Reset Form
            </Button>
            <Button onClick={generateBlueprint} className="bg-gradient-to-r from-primary to-secondary text-white">
              Generate Blueprint
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlueprintGenerator;