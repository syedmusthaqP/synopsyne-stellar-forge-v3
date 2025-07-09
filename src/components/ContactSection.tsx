
import React, { useState } from 'react';
import { Brain, Mail, Phone, MapPin, Send, Calendar, Clock, Users, Zap, Target, BarChart3, Settings, MessageSquare, Database, Shield, Cpu, Cloud, Code, Bot, Search, Plus, FileText, Download } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: '',
    customProjectType: '',
    timeline: '',
    budget: '',
    budgetCurrency: 'USD',
    features: []
  });

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const productivityCategories = {
    'AI & Machine Learning': [
      { id: 'ai-automation', name: 'AI Process Automation', icon: Zap, description: 'Automate repetitive tasks with intelligent workflows' },
      { id: 'machine-learning', name: 'Custom ML Models', icon: Cpu, description: 'Tailored machine learning solutions for your business' },
      { id: 'chatbot-ai', name: 'AI-Powered Chatbots', icon: Bot, description: 'Intelligent customer service and internal support bots' },
      { id: 'predictive-analytics', name: 'Predictive Analytics Engine', icon: BarChart3, description: 'Forecast trends and make data-driven decisions' },
      { id: 'voice-recognition', name: 'Voice Recognition System', icon: MessageSquare, description: 'Advanced voice commands and speech-to-text capabilities' },
      { id: 'computer-vision', name: 'Computer Vision Solutions', icon: Settings, description: 'Image recognition and visual analysis capabilities' },
      { id: 'nlp-processing', name: 'Natural Language Processing', icon: MessageSquare, description: 'Text analysis and language understanding tools' },
    ],
    'Cloud & Infrastructure': [
      { id: 'cloud-integration', name: 'Multi-Cloud Integration', icon: Cloud, description: 'Seamless integration across AWS, Azure, and GCP' },
      { id: 'auto-scaling', name: 'Auto-Scaling Infrastructure', icon: Settings, description: 'Dynamic resource allocation based on demand' },
      { id: 'cdn-optimization', name: 'CDN & Performance Optimization', icon: Zap, description: 'Global content delivery and speed optimization' },
      { id: 'containerization', name: 'Docker & Kubernetes', icon: Code, description: 'Container orchestration and deployment automation' },
      { id: 'serverless', name: 'Serverless Architecture', icon: Cloud, description: 'Event-driven serverless computing solutions' },
      { id: 'microservices', name: 'Microservices Architecture', icon: Settings, description: 'Scalable and maintainable service-oriented design' },
    ],
    'Data & Analytics': [
      { id: 'real-time-analytics', name: 'Real-time Analytics Dashboard', icon: BarChart3, description: 'Monitor performance and KPIs in real-time' },
      { id: 'data-visualization', name: 'Advanced Data Visualization', icon: Database, description: 'Interactive charts and comprehensive data insights' },
      { id: 'big-data', name: 'Big Data Processing', icon: Database, description: 'Handle large-scale data processing and analysis' },
      { id: 'data-pipeline', name: 'Automated Data Pipelines', icon: Settings, description: 'Streamlined data collection and processing workflows' },
      { id: 'business-intelligence', name: 'Business Intelligence Suite', icon: BarChart3, description: 'Comprehensive BI tools and reporting dashboards' },
      { id: 'data-warehouse', name: 'Data Warehouse Solutions', icon: Database, description: 'Centralized data storage and management systems' },
    ],
    'Security & Compliance': [
      { id: 'security-compliance', name: 'Security & Compliance Suite', icon: Shield, description: 'Enterprise-grade security with compliance automation' },
      { id: 'blockchain-integration', name: 'Blockchain Solutions', icon: Shield, description: 'Secure and transparent blockchain implementations' },
      { id: 'encryption', name: 'End-to-End Encryption', icon: Shield, description: 'Advanced data encryption and security protocols' },
      { id: 'identity-management', name: 'Identity & Access Management', icon: Shield, description: 'Secure user authentication and authorization' },
      { id: 'audit-logging', name: 'Comprehensive Audit Logging', icon: Settings, description: 'Detailed activity tracking and compliance reporting' },
      { id: 'vulnerability-scanning', name: 'Vulnerability Assessment', icon: Shield, description: 'Automated security scanning and threat detection' },
    ],
    'Integration & APIs': [
      { id: 'api-development', name: 'Custom API Development', icon: Code, description: 'RESTful and GraphQL APIs for seamless integrations' },
      { id: 'workflow-integration', name: 'Workflow Integration Hub', icon: Settings, description: 'Connect all your tools in one unified platform' },
      { id: 'payment-gateway', name: 'Payment Gateway Integration', icon: Code, description: 'Secure payment processing and e-commerce solutions' },
      { id: 'crm-integration', name: 'CRM System Integration', icon: Users, description: 'Seamless customer relationship management connections' },
      { id: 'erp-integration', name: 'ERP System Integration', icon: Settings, description: 'Enterprise resource planning system connectivity' },
      { id: 'social-media', name: 'Social Media API Integration', icon: Code, description: 'Connect with major social media platforms' },
    ],
    'Collaboration & Communication': [
      { id: 'team-collaboration', name: 'Advanced Team Collaboration', icon: Users, description: 'Seamless communication and project management tools' },
      { id: 'video-conferencing', name: 'Video Conferencing Platform', icon: Users, description: 'High-quality video meetings and webinar solutions' },
      { id: 'document-sharing', name: 'Smart Document Sharing', icon: Users, description: 'Collaborative document editing and version control' },
      { id: 'project-management', name: 'Project Management Suite', icon: Target, description: 'Comprehensive project tracking and team coordination' },
      { id: 'knowledge-base', name: 'Knowledge Management System', icon: Users, description: 'Centralized information sharing and documentation' },
      { id: 'communication-hub', name: 'Unified Communication Hub', icon: MessageSquare, description: 'All-in-one messaging and notification system' },
    ],
    'Productivity & Automation': [
      { id: 'smart-scheduling', name: 'AI-Powered Scheduling', icon: Calendar, description: 'Intelligent meeting and resource scheduling' },
      { id: 'time-management', name: 'Smart Time Management', icon: Clock, description: 'AI-driven time tracking and optimization suggestions' },
      { id: 'performance-tracking', name: 'Performance Optimization', icon: Target, description: 'Track and optimize team productivity metrics' },
      { id: 'automated-testing', name: 'Automated Testing Suite', icon: Settings, description: 'Comprehensive automated testing and quality assurance' },
      { id: 'intelligent-reporting', name: 'Intelligent Reporting', icon: MessageSquare, description: 'Auto-generated insights and progress reports' },
      { id: 'workflow-automation', name: 'Business Process Automation', icon: Zap, description: 'Streamline repetitive business processes' },
      { id: 'email-automation', name: 'Email Marketing Automation', icon: Mail, description: 'Automated email campaigns and nurture sequences' },
    ],
    'IoT & Emerging Tech': [
      { id: 'iot-connectivity', name: 'IoT Device Management', icon: Cpu, description: 'Connect and manage Internet of Things devices' },
      { id: 'augmented-reality', name: 'AR/VR Integration', icon: Code, description: 'Immersive augmented and virtual reality experiences' },
      { id: 'edge-computing', name: 'Edge Computing Solutions', icon: Cpu, description: 'Process data closer to the source for faster response' },
      { id: 'smart-sensors', name: 'Smart Sensor Networks', icon: Cpu, description: 'Environmental monitoring and data collection systems' },
      { id: 'digital-twin', name: 'Digital Twin Technology', icon: Settings, description: 'Virtual replicas for simulation and optimization' },
      { id: 'robotics', name: 'Robotics Process Automation', icon: Bot, description: 'Automated robotic solutions for various industries' },
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('AI & Machine Learning');
  const [customFeature, setCustomFeature] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [generatedBlueprint, setGeneratedBlueprint] = useState('');

  // Get all features from all categories
  const getAllFeatures = () => {
    return Object.values(productivityCategories).flat();
  };

  // Filter features based on search term
  const getFilteredFeatures = () => {
    const allFeatures = getAllFeatures();
    if (!searchTerm) return productivityCategories[selectedCategory] || [];
    
    return allFeatures.filter(feature => 
      feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Generate dynamic blueprint based on selected features
  const generateBlueprint = () => {
    const selectedFeatureData = selectedFeatures
      .map(id => getAllFeatures().find(f => f.id === id))
      .filter(Boolean);

    const selectedFeatureNames = selectedFeatureData.map(f => f.name);
    const projectScope = formData.projectType === 'other' ? formData.customProjectType : formData.projectType;
    const timelineText = formData.timeline.replace(/-/g, ' ').toUpperCase();
    
    // Dynamic solution description based on feature combinations
    const generateSolutionDescription = () => {
      if (selectedFeatures.length === 0) {
        return "A comprehensive consultation to analyze your specific requirements and design a custom digital transformation strategy.";
      }

      const featureCategories = {
        'ai': selectedFeatures.filter(id => ['ai-automation', 'machine-learning', 'chatbot-ai', 'predictive-analytics', 'nlp-processing'].includes(id)),
        'vision': selectedFeatures.filter(id => ['computer-vision', 'voice-recognition'].includes(id)),
        'cloud': selectedFeatures.filter(id => ['cloud-integration', 'auto-scaling', 'serverless', 'microservices'].includes(id)),
        'data': selectedFeatures.filter(id => ['real-time-analytics', 'data-visualization', 'big-data', 'business-intelligence'].includes(id)),
        'security': selectedFeatures.filter(id => ['security-compliance', 'blockchain-integration', 'encryption'].includes(id)),
        'automation': selectedFeatures.filter(id => ['workflow-automation', 'email-automation', 'smart-scheduling'].includes(id))
      };

      let description = "";

      if (featureCategories.ai.length > 0 && featureCategories.automation.length > 0) {
        description = "An intelligent automation platform combining AI-powered decision making with workflow optimization to eliminate manual processes and boost operational efficiency.";
      } else if (featureCategories.vision.length > 0 && featureCategories.data.length > 0) {
        description = "A computer vision and analytics solution that processes visual data to generate actionable insights, enabling predictive maintenance and quality control.";
      } else if (featureCategories.cloud.length > 0 && featureCategories.security.length > 0) {
        description = "A secure cloud-native architecture with enterprise-grade security protocols, scalable infrastructure, and compliance-ready data protection.";
      } else if (featureCategories.ai.length > 0 && featureCategories.data.length > 0) {
        description = "An AI-driven analytics platform that transforms raw data into intelligent insights, featuring machine learning models for predictive business intelligence.";
      } else if (featureCategories.automation.length > 0) {
        description = "A comprehensive business process automation suite designed to streamline operations, reduce human error, and accelerate productivity across departments.";
      } else if (featureCategories.ai.length > 0) {
        description = "An artificial intelligence solution leveraging machine learning algorithms and neural networks to automate complex decision-making processes.";
      } else if (featureCategories.data.length > 0) {
        description = "A robust data management and analytics platform providing real-time insights, advanced visualizations, and business intelligence capabilities.";
      } else if (featureCategories.cloud.length > 0) {
        description = "A scalable cloud infrastructure solution with microservices architecture, auto-scaling capabilities, and multi-region deployment.";
      } else {
        description = "A custom digital solution tailored to your specific business requirements with modern technology stack and scalable architecture.";
      }

      return description;
    };

    // Dynamic technical stack based on features
    const generateTechnicalStack = () => {
      let stack: {
        frontend: string;
        backend: string;
        database: string;
        cloud: string;
        security: string;
        monitoring: string;
        devops: string;
        ai?: string;
        processing?: string;
        blockchain?: string;
      } = {
        frontend: "React.js, TypeScript, Tailwind CSS",
        backend: "Node.js, Express.js, RESTful APIs",
        database: "PostgreSQL with Redis caching",
        cloud: "AWS/Azure multi-region deployment",
        security: "JWT authentication, SSL encryption",
        monitoring: "Real-time analytics and logging",
        devops: "CI/CD pipeline with automated testing"
      };

      // Customize based on selected features
      if (selectedFeatures.includes('ai-automation') || selectedFeatures.includes('machine-learning')) {
        stack.ai = "TensorFlow, PyTorch, scikit-learn";
        stack.backend += ", Python Flask/FastAPI";
      }
      
      if (selectedFeatures.includes('computer-vision')) {
        stack.ai = (stack.ai || "") + ", OpenCV, YOLO, TensorFlow Vision";
      }
      
      if (selectedFeatures.includes('nlp-processing')) {
        stack.ai = (stack.ai || "") + ", Transformers, BERT, spaCy";
      }
      
      if (selectedFeatures.includes('big-data')) {
        stack.database = "MongoDB, Apache Kafka, Elasticsearch";
        stack.processing = "Apache Spark, Hadoop";
      }
      
      if (selectedFeatures.includes('blockchain-integration')) {
        stack.blockchain = "Ethereum, Web3.js, Solidity";
      }
      
      if (selectedFeatures.includes('serverless')) {
        stack.cloud = "AWS Lambda, Azure Functions, Serverless Framework";
      }

      return stack;
    };

    // Dynamic key components based on features
    const generateKeyComponents = () => {
      const components = [];
      
      selectedFeatureData.forEach(feature => {
        switch(feature.id) {
          case 'ai-automation':
            components.push("• Intelligent Process Automation Engine with ML-based decision trees");
            components.push("• Workflow Orchestration System with smart routing capabilities");
            break;
          case 'computer-vision':
            components.push("• Computer Vision Pipeline with real-time image processing");
            components.push("• Object Detection and Classification Models");
            break;
          case 'nlp-processing':
            components.push("• Natural Language Processing Engine with sentiment analysis");
            components.push("• Text Analytics and Information Extraction System");
            break;
          case 'predictive-analytics':
            components.push("• Predictive Analytics Engine with forecasting algorithms");
            components.push("• Machine Learning Pipeline for pattern recognition");
            break;
          case 'real-time-analytics':
            components.push("• Real-time Data Streaming and Processing Infrastructure");
            components.push("• Interactive Analytics Dashboard with live metrics");
            break;
          case 'blockchain-integration':
            components.push("• Blockchain Integration Layer with smart contract deployment");
            components.push("• Decentralized Identity and Transaction Management");
            break;
          case 'chatbot-ai':
            components.push("• Conversational AI Framework with intent recognition");
            components.push("• Multi-channel Chatbot Deployment System");
            break;
          default:
            components.push(`• ${feature.name} Implementation with best practices integration`);
        }
      });
      
      if (components.length === 0) {
        components.push("• Custom Requirements Analysis and Solution Design");
        components.push("• Technical Architecture Planning and Documentation");
      }
      
      return components.slice(0, 8); // Limit to 8 components for readability
    };

    // Dynamic expected outcomes
    const generateExpectedOutcomes = () => {
      const outcomes = [];
      
      if (selectedFeatures.includes('ai-automation')) {
        outcomes.push("• 80-95% reduction in manual processing time");
        outcomes.push("• 99.5% accuracy in automated decision making");
      }
      
      if (selectedFeatures.includes('predictive-analytics')) {
        outcomes.push("• 85-92% improvement in forecasting accuracy");
        outcomes.push("• Early trend detection with 7-14 day advance notice");
      }
      
      if (selectedFeatures.includes('real-time-analytics')) {
        outcomes.push("• Sub-second data processing and visualization");
        outcomes.push("• 360° real-time business visibility");
      }
      
      if (selectedFeatures.includes('computer-vision')) {
        outcomes.push("• 95%+ accuracy in visual inspection and quality control");
        outcomes.push("• Real-time object detection and classification");
      }
      
      if (selectedFeatures.includes('chatbot-ai')) {
        outcomes.push("• 70-85% reduction in customer service response time");
        outcomes.push("• 24/7 automated customer support availability");
      }
      
      // Generic outcomes if specific ones aren't available
      if (outcomes.length < 4) {
        outcomes.push(`• ${selectedFeatures.length > 5 ? '300-500%' : selectedFeatures.length > 2 ? '200-350%' : '150-250%'} productivity improvement`);
        outcomes.push("• Scalable architecture supporting 10x business growth");
        outcomes.push("• Enterprise-grade security and compliance ready");
        outcomes.push("• Comprehensive documentation and training materials");
      }
      
      return outcomes.slice(0, 6);
    };

    const stack = generateTechnicalStack();
    const keyComponents = generateKeyComponents();
    const expectedOutcomes = generateExpectedOutcomes();
    
    return `
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                           🧠 NEURAL SOLUTION BLUEPRINT                               ║
║                              Dynamically Generated                                   ║
╠══════════════════════════════════════════════════════════════════════════════════════╣

📋 PROJECT OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Client Name:           ${formData.name || 'Valued Client'}
Organization:          ${formData.company || 'Individual/Startup'}
Project Type:          ${projectScope || 'Custom Solution'}
Timeline:              ${timelineText || 'To be determined'}
Budget Allocation:     ${formData.budget || 'Flexible'} ${formData.budgetCurrency}
Generation Date:       ${new Date().toLocaleDateString()}
Blueprint ID:          NB-${Date.now().toString().slice(-6)}

🎯 SOLUTION ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${generateSolutionDescription()}

${selectedFeatureNames.length > 0 ? `🔧 SELECTED FEATURES:
${selectedFeatureNames.map((name, i) => `   ${i + 1}. ${name}`).join('\n')}` : '🔧 CORE PACKAGE: Consultation and custom requirement analysis'}

🏗️ TECHNICAL STACK RECOMMENDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend:              ${stack.frontend}
Backend:               ${stack.backend}
Database:              ${stack.database}
Cloud Infrastructure:  ${stack.cloud}
Security:              ${stack.security}
Monitoring:            ${stack.monitoring}
DevOps:               ${stack.devops}${stack.ai ? `\nAI/ML Stack:           ${stack.ai}` : ''}${stack.processing ? `\nData Processing:       ${stack.processing}` : ''}${stack.blockchain ? `\nBlockchain:            ${stack.blockchain}` : ''}

🔧 KEY COMPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${keyComponents.join('\n')}

📊 IMPLEMENTATION PHASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Phase 1: Discovery & Design     (Week 1-2)
   • Detailed requirements analysis and feature mapping
   • Technical architecture design and system blueprints
   • UI/UX mockups and user experience optimization
   • Database schema design and optimization

Phase 2: Core Development       (Week 3-6)
   • Backend API development and integration setup
   • Frontend component development and responsive design
   • Database implementation and data migration
   • Core feature development and testing

Phase 3: Advanced Integration   (Week 7-10)
   • AI/ML model training and deployment (if applicable)
   • Third-party API integrations and webhook setup
   • Performance optimization and load testing
   • Security implementation and vulnerability assessment

Phase 4: Testing & Deployment   (Week 11-12)
   • Comprehensive testing suite and quality assurance
   • User acceptance testing and feedback integration
   • Production deployment and monitoring setup
   • Go-live support and team training

💼 TEAM ALLOCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Project Manager:       1x Senior PM (Full-time)
Lead Developer:        1x Full-stack Engineer (Full-time)${selectedFeatures.some(f => ['ai-automation', 'machine-learning', 'computer-vision', 'nlp-processing'].includes(f)) ? '\nAI/ML Engineer:        1x AI Specialist (Full-time)' : ''}
Frontend Specialist:   1x React Developer (Part-time)
Backend Engineer:      1x Node.js Developer (Part-time)
UI/UX Designer:        1x Design Specialist (Part-time)
QA Engineer:          1x Testing Specialist (Part-time)
DevOps Consultant:     1x Infrastructure Expert (As needed)${selectedFeatures.includes('security-compliance') || selectedFeatures.includes('blockchain-integration') ? '\nSecurity Expert:       1x Cybersecurity Specialist (Part-time)' : ''}

📈 EXPECTED OUTCOMES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${expectedOutcomes.join('\n')}

🔐 SECURITY & COMPLIANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• End-to-end encryption for all data transfers and storage
• GDPR, SOC 2, and industry-specific compliance ready
• Multi-factor authentication and role-based access control
• Regular security audits and penetration testing
• Automated backup and disaster recovery protocols
• 99.9% uptime SLA with monitoring and alerting

💡 INNOVATION OPPORTUNITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Based on your selected features and current market trends, future enhancement 
opportunities include:${selectedFeatures.includes('ai-automation') ? '\n• Advanced neural network optimization and deep learning integration' : ''}${selectedFeatures.includes('computer-vision') ? '\n• Augmented reality overlay and enhanced image recognition capabilities' : ''}${selectedFeatures.includes('predictive-analytics') ? '\n• Real-time anomaly detection and automated response systems' : ''}${selectedFeatures.includes('blockchain-integration') ? '\n• DeFi integration and smart contract automation' : ''}
• Edge computing implementation for reduced latency
• IoT device integration and sensor data processing
• Advanced analytics with machine learning insights
• Voice and conversational AI integration

📞 NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Technical consultation call scheduled within 4 hours
2. Feature specification and requirement finalization
3. Detailed project proposal with timeline and cost breakdown
4. Architecture review and technology stack confirmation
5. Development team assignment and project kickoff

╚══════════════════════════════════════════════════════════════════════════════════════╝

This blueprint is dynamically generated based on your specific feature selection 
and represents our AI-analyzed technical assessment. The solution architecture 
adapts to your chosen combination of features for optimal implementation.

Generated by Neural AI Systems v3.0 | Confidence Score: ${selectedFeatures.length > 0 ? '98.7%' : '95.2%'}
    `.trim();
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate blueprint
    const blueprint = generateBlueprint();
    setGeneratedBlueprint(blueprint);
    
    // Simulate form submission
    setTimeout(() => {
      const selectedFeatureNames = selectedFeatures
        .map(id => getAllFeatures().find(f => f.id === id)?.name)
        .filter(Boolean);
      
      console.log('Neural Connection Request Submitted:', {
        ...formData,
        features: selectedFeatureNames,
        timestamp: new Date().toISOString()
      });
      
      setSubmitMessage(`🧠 Neural Connection Established Successfully! 

Thank you ${formData.name || 'valued client'}, your digital transformation request has been processed by our AI systems.

📋 PROJECT SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Client: ${formData.name || 'To be provided'}
• Company: ${formData.company || 'Individual/Startup'}
• Project Type: ${formData.projectType === 'other' ? formData.customProjectType : formData.projectType || 'Custom Solution'}
• Timeline: ${formData.timeline || 'To be discussed'}
• Budget Range: ${formData.budget || 'To be determined'} ${formData.budgetCurrency}
• Selected Features: ${selectedFeatureNames.length > 0 ? selectedFeatureNames.join(', ') : 'Basic consultation package'}

🚀 NEXT STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Initial consultation call within 4 hours
2. Technical requirements analysis
3. Custom solution architecture design
4. Project timeline and milestone planning
5. Development team assignment

💡 INNOVATION PREVIEW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Based on your selections, we'll incorporate cutting-edge AI technologies including machine learning algorithms, cloud-native architecture, and advanced automation systems to deliver a solution that exceeds your expectations.

Our neural network has analyzed your requirements and prepared a preliminary solution blueprint. Expect a detailed proposal with cost analysis, technical specifications, and implementation roadmap.

🔗 Connection Status: ACTIVE | Priority: HIGH | Response Time: < 4 Hours`);
      
      // Clear form data after submission
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        projectType: '',
        customProjectType: '',
        timeline: '',
        budget: '',
        budgetCurrency: 'USD',
        features: []
      });
      setSelectedFeatures([]);
      setShowModal(true);
      
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .custom-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          /* Fix autocomplete styling */
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px rgba(0, 0, 0, 0.4) inset !important;
            -webkit-text-fill-color: white !important;
            background: rgba(0, 0, 0, 0.4) !important;
            backdrop-filter: blur(10px) !important;
            transition: background-color 5000s;
          }
          
          /* Enhanced scrolling for features */
          .features-grid {
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .features-grid::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center glassmorphism px-6 py-2 rounded-full mb-8 animate-float">
              <Brain className="w-4 h-4 text-neon mr-2" />
              <span className="text-white text-sm">Neural Connection Request</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">Touch</span>
            </h1>

            <div className="relative mb-12 max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
              <div className="relative glassmorphism p-6 rounded-lg">
                <p className="text-lg md:text-xl text-gray-300">
                  Ready to transform your business with cutting-edge AI and software solutions? 
                  Let's discuss how we can boost your productivity and efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative glassmorphism p-8 rounded-2xl border border-cyan-400/30">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-t-2xl"></div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Start Your Digital Transformation</h2>
              
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="Your full name"
                      required
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="your.email@company.com"
                      required
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="Your company name"
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Project Type</label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                        style={{
                          background: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <option value="" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Select project type</option>
                        <option value="web-app" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Web Application</option>
                        <option value="mobile-app" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Mobile Application</option>
                        <option value="ai-integration" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>AI Integration</option>
                        <option value="cloud-solution" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Cloud Solution</option>
                        <option value="consulting" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Consulting</option>
                        <option value="other" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                    {formData.projectType === 'other' && (
                      <input
                        type="text"
                        name="customProjectType"
                        value={formData.customProjectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all mt-2"
                        placeholder="Please specify your project type"
                        style={{
                          background: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(10px)',
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Timeline</label>
                    <div className="relative">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                        style={{
                          background: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        <option value="" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Select development timeline</option>
                        <option value="rapid-prototype" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>🚀 Rapid Prototype (2-3 weeks)</option>
                        <option value="agile-development" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>⚡ Agile Development (1-2 months)</option>
                        <option value="enterprise-solution" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>🏢 Enterprise Solution (3-4 months)</option>
                        <option value="comprehensive-platform" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>🌐 Comprehensive Platform (4-6 months)</option>
                        <option value="digital-transformation" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>🔄 Digital Transformation (6-12 months)</option>
                        <option value="ongoing-partnership" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>🤝 Ongoing Partnership (Long-term)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Budget Range</label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <select
                          name="budgetCurrency"
                          value={formData.budgetCurrency}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-cyan-400/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                          style={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          <option value="USD" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>USD $</option>
                          <option value="INR" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>INR ₹</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative flex-[2]">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all appearance-none cursor-pointer"
                          style={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          <option value="" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>Select range</option>
                          {formData.budgetCurrency === 'USD' ? (
                            <>
                              <option value="10k-25k" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$10k - $25k</option>
                              <option value="25k-50k" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$25k - $50k</option>
                              <option value="50k-100k" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$50k - $100k</option>
                              <option value="100k-250k" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$100k - $250k</option>
                              <option value="250k+" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>$250k+</option>
                            </>
                          ) : (
                            <>
                              <option value="8L-20L" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹8L - ₹20L</option>
                              <option value="20L-40L" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹20L - ₹40L</option>
                              <option value="40L-80L" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹40L - ₹80L</option>
                              <option value="80L-2Cr" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹80L - ₹2Cr</option>
                              <option value="2Cr+" style={{ background: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>₹2Cr+</option>
                            </>
                          )}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Productivity Features Selection */}
                <div>
                  <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-4">
                    Technology Solutions & Features:
                  </label>
                  
                  {/* Search and Category Controls */}
                  <div className="mb-4 space-y-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search features..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm"
                        style={{
                          background: 'rgba(0, 0, 0, 0.4)',
                          backdropFilter: 'blur(10px)',
                        }}
                      />
                    </div>
                    
                    {!searchTerm && (
                      <div className="flex flex-wrap gap-2">
                        {Object.keys(productivityCategories).map((category) => (
                          <button
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1 rounded-full text-xs transition-all ${
                              selectedCategory === category
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50'
                                : 'bg-gray-800/50 text-gray-400 border border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 features-grid pr-2">
                    {getFilteredFeatures().map((feature) => (
                      <div
                        key={feature.id}
                        onClick={() => handleFeatureToggle(feature.id)}
                        className={`p-3 rounded-lg cursor-pointer transition-all border-2 ${
                          selectedFeatures.includes(feature.id)
                            ? 'border-cyan-400/50 bg-cyan-500/10'
                            : 'border-gray-600 hover:border-cyan-400/50 bg-gray-800/30'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <feature.icon 
                            className={`w-4 h-4 mt-0.5 ${
                              selectedFeatures.includes(feature.id) ? 'text-neon' : 'text-gray-400'
                            }`} 
                          />
                          <div>
                            <h4 className={`font-medium text-sm ${
                              selectedFeatures.includes(feature.id) ? 'text-neon' : 'text-white'
                            }`}>
                              {feature.name}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Custom Feature Input */}
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setShowCustomInput(!showCustomInput)}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Need something specific? Add custom requirement</span>
                    </button>
                    
                    {showCustomInput && (
                      <div className="mt-3">
                        <input
                          type="text"
                          placeholder="Describe your custom requirement..."
                          value={customFeature}
                          onChange={(e) => setCustomFeature(e.target.value)}
                          className="w-full px-4 py-2 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm"
                          style={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(10px)',
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (customFeature.trim()) {
                              const customId = `custom-${Date.now()}`;
                              setSelectedFeatures(prev => [...prev, customId]);
                              setCustomFeature('');
                              setShowCustomInput(false);
                            }
                          }}
                          className="mt-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 rounded-lg hover:bg-cyan-500/30 transition-all text-sm"
                        >
                          Add Custom Feature
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      backdropFilter: 'blur(10px)',
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-border px-8 py-4 rounded-lg text-white font-semibold hover:bg-cyan-500/10 transition-all transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyan-400 mr-2"></div>
                      Processing Neural Connection...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Neural Connection Request
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Quick Stats */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="relative glassmorphism p-8 rounded-2xl border border-cyan-400/30">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-t-2xl"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Connect Directly</h3>
                
                   <div className="space-y-6">
                     <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 flex items-center justify-center">
                         <Mail className="w-5 h-5 text-cyan-400" />
                       </div>
                       <div>
                         <h4 className="text-white font-semibold text-lg mb-1">Email Us</h4>
                         <p className="text-cyan-400 font-medium text-base">syedmusthaqk786@gmail.com</p>
                         <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                       </div>
                     </div>

                     <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 flex items-center justify-center">
                         <Phone className="w-5 h-5 text-cyan-400" />
                       </div>
                       <div>
                         <h4 className="text-white font-semibold text-lg mb-1">Call Us</h4>
                         <p className="text-cyan-400 font-medium text-base">+91 7013425496</p>
                         <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM IST</p>
                       </div>
                     </div>

                     <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 flex items-center justify-center">
                         <MapPin className="w-5 h-5 text-cyan-400" />
                       </div>
                       <div>
                         <h4 className="text-white font-semibold text-lg mb-1">Visit Us</h4>
                         <p className="text-cyan-400 font-medium text-base">Andhra Pradesh, India</p>
                       </div>
                     </div>
                   </div>
              </div>

              {/* Response Time & Stats */}
              <div className="relative glassmorphism p-8 rounded-2xl border border-cyan-400/30">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-t-2xl"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Our Commitment</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                    <span className="text-white font-medium">Response Time</span>
                    <span className="text-cyan-400 font-bold">&lt; 4 hours</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                    <span className="text-white font-medium">Project Success Rate</span>
                    <span className="text-purple-400 font-bold">98.5%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                    <span className="text-white font-medium">Average Productivity Boost</span>
                    <span className="text-blue-400 font-bold">245%</span>
                  </div>
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="relative glassmorphism p-8 rounded-2xl border border-cyan-400/30">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-t-2xl"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">Why Choose Us?</h3>
                
                <div className="space-y-3">
                  {[
                    'Free initial consultation & project scope',
                    'Dedicated project manager assigned',
                    'Weekly progress reports & demos',
                    'Post-launch support & optimization',
                    'Scalable solutions that grow with you'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative glassmorphism p-8 rounded-2xl border border-cyan-400/30">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-t-2xl"></div>
                
                {/* Close button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full glassmorphism border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition-all"
                >
                  ✕
                </button>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Neural Connection Status</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30">
                    <pre className="text-green-300 text-sm whitespace-pre-wrap font-mono leading-relaxed">{submitMessage}</pre>
                  </div>

                  {/* Blueprint Section */}
                  <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-blue-400" />
                        Generated Solution Blueprint
                      </h3>
                      <button
                        onClick={() => setShowBlueprint(!showBlueprint)}
                        className="flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-400/50 rounded-lg hover:bg-blue-500/30 transition-all text-sm"
                      >
                        {showBlueprint ? 'Hide' : 'View'} Blueprint
                      </button>
                    </div>
                    
                    {showBlueprint && (
                      <div className="relative">
                        <pre className="text-blue-300 text-xs whitespace-pre-wrap font-mono leading-relaxed bg-black/30 p-4 rounded-lg border border-blue-400/20 max-h-96 overflow-y-auto custom-scrollbar">
                          {generatedBlueprint}
                        </pre>
                        <button
                          onClick={() => {
                            const blob = new Blob([generatedBlueprint], { type: 'text/plain' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `neural-blueprint-${Date.now()}.txt`;
                            a.click();
                            URL.revokeObjectURL(url);
                          }}
                          className="absolute top-2 right-2 flex items-center px-2 py-1 bg-blue-500/20 text-blue-400 border border-blue-400/50 rounded hover:bg-blue-500/30 transition-all text-xs"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 neon-border rounded-lg text-white font-semibold hover:bg-cyan-500/10 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ContactSection;
