
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

  // Enhanced dynamic blueprint generator with comprehensive analysis
  const generateBlueprint = () => {
    const selectedFeatureData = selectedFeatures
      .map(id => getAllFeatures().find(f => f.id === id))
      .filter(Boolean);

    const selectedFeatureNames = selectedFeatureData.map(f => f.name);
    const projectScope = formData.projectType === 'other' ? formData.customProjectType : formData.projectType;
    const timelineText = formData.timeline.replace(/-/g, ' ').toUpperCase();
    
    // Advanced feature classification system
    const classifyFeatures = () => {
      const categories = {
        'ai_ml': selectedFeatures.filter(id => ['ai-automation', 'machine-learning', 'chatbot-ai', 'predictive-analytics', 'nlp-processing', 'computer-vision', 'voice-recognition'].includes(id)),
        'cloud_infra': selectedFeatures.filter(id => ['cloud-integration', 'auto-scaling', 'serverless', 'microservices', 'containerization', 'cdn-optimization'].includes(id)),
        'data_analytics': selectedFeatures.filter(id => ['real-time-analytics', 'data-visualization', 'big-data', 'business-intelligence', 'data-pipeline', 'data-warehouse'].includes(id)),
        'security_compliance': selectedFeatures.filter(id => ['security-compliance', 'blockchain-integration', 'encryption', 'identity-management', 'audit-logging', 'vulnerability-scanning'].includes(id)),
        'integration_apis': selectedFeatures.filter(id => ['api-development', 'workflow-integration', 'payment-gateway', 'crm-integration', 'erp-integration', 'social-media'].includes(id)),
        'collaboration': selectedFeatures.filter(id => ['team-collaboration', 'video-conferencing', 'document-sharing', 'project-management', 'knowledge-base', 'communication-hub'].includes(id)),
        'productivity_automation': selectedFeatures.filter(id => ['smart-scheduling', 'time-management', 'performance-tracking', 'automated-testing', 'intelligent-reporting', 'workflow-automation', 'email-automation'].includes(id)),
        'iot_emerging': selectedFeatures.filter(id => ['iot-connectivity', 'augmented-reality', 'edge-computing', 'smart-sensors', 'digital-twin', 'robotics'].includes(id)),
        'custom': selectedFeatures.filter(id => id.startsWith('custom-'))
      };
      
      return categories;
    };

    // Intelligent solution description generator
    const generateSolutionDescription = () => {
      if (selectedFeatures.length === 0) {
        return "A comprehensive consultation to analyze your specific requirements and design a custom digital transformation strategy tailored to your business objectives.";
      }

      const categories = classifyFeatures();
      const customFeatures = categories.custom.length;
      
      // Complex multi-category solutions
      if (categories.ai_ml.length >= 2 && categories.cloud_infra.length >= 2) {
        return `An enterprise-grade AI-powered cloud platform featuring ${categories.ai_ml.length} advanced machine learning components and ${categories.cloud_infra.length} cloud infrastructure modules. This solution combines neural network processing, intelligent automation, and scalable cloud architecture to deliver unprecedented business intelligence and operational efficiency.`;
      }
      
      if (categories.ai_ml.length > 0 && categories.data_analytics.length > 0 && categories.productivity_automation.length > 0) {
        return "An integrated AI-driven business intelligence and automation ecosystem that transforms raw data into actionable insights while automating complex workflows. Features intelligent decision-making algorithms, real-time analytics processing, and adaptive automation systems.";
      }
      
      if (categories.iot_emerging.length > 0 && categories.ai_ml.length > 0) {
        return "A next-generation IoT and AI convergence platform that combines edge computing, smart sensor networks, and machine learning to create intelligent connected systems. Enables real-time data processing, predictive analytics, and autonomous decision-making at the edge.";
      }
      
      if (categories.security_compliance.length >= 2 && (categories.cloud_infra.length > 0 || categories.integration_apis.length > 0)) {
        return "An enterprise security-first architecture featuring zero-trust protocols, compliance automation, and secure integration capabilities. Implements advanced encryption, identity management, and comprehensive audit trails while maintaining scalable performance.";
      }

      // Two-category combinations
      if (categories.ai_ml.length > 0 && categories.productivity_automation.length > 0) {
        return "An intelligent productivity acceleration platform that leverages AI to automate complex business processes, optimize workflows, and enhance team collaboration through smart decision-making algorithms.";
      }
      
      if (categories.data_analytics.length > 0 && categories.integration_apis.length > 0) {
        return "A comprehensive data integration and analytics hub that connects disparate systems, processes real-time data streams, and delivers unified business intelligence across all operational touchpoints.";
      }
      
      if (categories.cloud_infra.length > 0 && categories.collaboration.length > 0) {
        return "A cloud-native collaboration and communication platform featuring microservices architecture, real-time synchronization, and enterprise-grade scalability for distributed teams.";
      }

      // Single category focus
      if (categories.ai_ml.length >= 3) {
        return "A comprehensive artificial intelligence solution featuring multiple ML models, neural network processing, and intelligent automation capabilities designed to transform business operations through advanced cognitive computing.";
      }
      
      if (categories.data_analytics.length >= 3) {
        return "An advanced analytics and business intelligence platform providing real-time data processing, predictive modeling, and comprehensive visualization capabilities for data-driven decision making.";
      }
      
      if (categories.cloud_infra.length >= 2) {
        return "A robust cloud infrastructure solution featuring auto-scaling capabilities, microservices architecture, and multi-region deployment for enterprise-grade reliability and performance.";
      }
      
      if (categories.productivity_automation.length >= 3) {
        return "A comprehensive business process automation suite designed to eliminate manual tasks, optimize workflows, and enhance organizational productivity through intelligent automation.";
      }

      // Custom feature handling
      if (customFeatures > 0) {
        const standardFeatures = selectedFeatures.length - customFeatures;
        return `A bespoke solution combining ${standardFeatures} proven technology components with ${customFeatures} custom-developed features specifically designed for your unique business requirements and operational challenges.`;
      }

      // Default fallback with feature count context
      const featureCount = selectedFeatures.length;
      if (featureCount >= 5) {
        return "A comprehensive enterprise digital transformation platform integrating multiple advanced technologies to create a unified, scalable solution that addresses complex business challenges across multiple domains.";
      } else if (featureCount >= 3) {
        return "A focused technology solution combining complementary features to address specific business needs while maintaining flexibility for future expansion and integration requirements.";
      } else {
        return "A targeted digital solution designed to address specific business requirements with proven technologies and best practices for optimal performance and reliability.";
      }
    };

    // Advanced technical stack generator with intelligent recommendations
    const generateTechnicalStack = () => {
      const categories = classifyFeatures();
      const projectComplexity = selectedFeatures.length;
      const budgetTier = getBudgetTier();
      
      let stack: {
        frontend: string;
        backend: string;
        database: string;
        cloud: string;
        security: string;
        monitoring: string;
        devops: string;
        ai_ml?: string;
        data_processing?: string;
        blockchain?: string;
        mobile?: string;
        real_time?: string;
        testing?: string;
        integration?: string;
      } = {
        frontend: "React.js, TypeScript, Tailwind CSS",
        backend: "Node.js, Express.js, RESTful APIs",
        database: "PostgreSQL with Redis caching",
        cloud: "AWS/Azure multi-region deployment",
        security: "JWT authentication, SSL encryption",
        monitoring: "Real-time analytics and logging",
        devops: "CI/CD pipeline with automated testing"
      };

      // Frontend optimization based on project type and complexity
      if (formData.projectType === 'mobile-app') {
        stack.mobile = "React Native, Expo, Native Base";
        stack.frontend = "React Native, TypeScript, NativeWind";
      } else if (projectComplexity >= 5) {
        stack.frontend = "Next.js, React 18, TypeScript, Tailwind CSS, Framer Motion";
      } else if (categories.collaboration.length > 0) {
        stack.frontend = "React.js, TypeScript, Socket.io Client, Tailwind CSS";
      }

      // Backend architecture based on features and scale
      if (categories.ai_ml.length >= 2 || categories.data_analytics.length >= 2) {
        stack.backend = "Python FastAPI, Node.js Express, GraphQL, Microservices";
      } else if (categories.cloud_infra.includes('serverless')) {
        stack.backend = "Serverless Functions, Node.js, Edge Computing";
      } else if (categories.integration_apis.length >= 3) {
        stack.backend = "Node.js, Express.js, GraphQL, API Gateway, Webhook Hub";
      } else if (projectComplexity >= 6) {
        stack.backend = "Node.js, Express.js, GraphQL, Microservices Architecture";
      }

      // AI/ML stack based on specific features
      if (categories.ai_ml.length > 0) {
        let aiComponents = [];
        
        if (selectedFeatures.includes('machine-learning') || selectedFeatures.includes('predictive-analytics')) {
          aiComponents.push("TensorFlow", "PyTorch", "scikit-learn");
        }
        
        if (selectedFeatures.includes('computer-vision')) {
          aiComponents.push("OpenCV", "YOLO v8", "TensorFlow Vision", "MediaPipe");
        }
        
        if (selectedFeatures.includes('nlp-processing') || selectedFeatures.includes('chatbot-ai')) {
          aiComponents.push("Transformers", "OpenAI GPT-4", "LangChain", "spaCy");
        }
        
        if (selectedFeatures.includes('voice-recognition')) {
          aiComponents.push("Whisper AI", "Speech Recognition", "Text-to-Speech");
        }
        
        if (aiComponents.length === 0) {
          aiComponents = ["TensorFlow", "Hugging Face", "AutoML"];
        }
        
        stack.ai_ml = aiComponents.join(", ");
      }

      // Database optimization based on data requirements
      if (categories.data_analytics.includes('big-data')) {
        stack.database = "MongoDB, Apache Kafka, Elasticsearch, Hadoop HDFS";
        stack.data_processing = "Apache Spark, Apache Flink, Databricks";
      } else if (categories.data_analytics.length >= 2) {
        stack.database = "PostgreSQL, Redis, InfluxDB, Neo4j";
        stack.data_processing = "Apache Airflow, Pandas, NumPy";
      } else if (categories.ai_ml.length > 0) {
        stack.database = "PostgreSQL, Vector DB (Pinecone), Redis, S3";
      } else if (selectedFeatures.includes('real-time-analytics')) {
        stack.database = "PostgreSQL, Redis, Apache Kafka";
        stack.real_time = "WebSocket, Server-Sent Events, Real-time Sync";
      }

      // Cloud infrastructure based on scale and requirements
      if (budgetTier === 'enterprise' || projectComplexity >= 8) {
        stack.cloud = "Multi-Cloud (AWS + Azure), Kubernetes, Terraform, CDN";
      } else if (categories.cloud_infra.includes('auto-scaling')) {
        stack.cloud = "AWS Auto Scaling, Load Balancers, CloudFront CDN";
      } else if (categories.cloud_infra.includes('serverless')) {
        stack.cloud = "AWS Lambda, Vercel, Serverless Framework";
      }

      // Security enhancements based on requirements
      if (categories.security_compliance.length >= 2) {
        stack.security = "Zero Trust Architecture, OAuth2, Multi-Factor Auth, End-to-End Encryption, Vault";
      } else if (categories.security_compliance.length > 0) {
        stack.security = "OAuth2, JWT, SSL/TLS, RBAC, Security Headers";
      } else if (selectedFeatures.includes('payment-gateway')) {
        stack.security = "PCI DSS Compliance, Stripe Security, JWT, SSL";
      }

      // Blockchain integration
      if (categories.security_compliance.includes('blockchain-integration')) {
        stack.blockchain = "Ethereum, Polygon, Web3.js, Solidity, IPFS";
      }

      // Real-time features
      if (categories.collaboration.length >= 2 || selectedFeatures.includes('video-conferencing')) {
        stack.real_time = "WebRTC, Socket.io, Redis Pub/Sub, WebSocket";
      }

      // Testing strategy based on complexity
      if (projectComplexity >= 5) {
        stack.testing = "Jest, Cypress, Playwright, Unit Testing, Integration Testing";
      } else if (selectedFeatures.includes('automated-testing')) {
        stack.testing = "Jest, React Testing Library, Automated E2E Testing";
      }

      // Integration layer
      if (categories.integration_apis.length >= 2) {
        stack.integration = "Zapier, REST APIs, GraphQL, Webhook Management, API Gateway";
      }

      // IoT and emerging tech
      if (categories.iot_emerging.length > 0) {
        let iotComponents = [];
        if (selectedFeatures.includes('iot-connectivity')) {
          iotComponents.push("MQTT", "AWS IoT Core", "Device Management");
        }
        if (selectedFeatures.includes('edge-computing')) {
          iotComponents.push("Edge Computing", "AWS Greengrass", "Edge Analytics");
        }
        if (selectedFeatures.includes('augmented-reality')) {
          iotComponents.push("AR.js", "Three.js", "WebXR");
        }
        if (iotComponents.length > 0) {
          stack.integration = (stack.integration || "") + ", " + iotComponents.join(", ");
        }
      }

      return stack;
    };

    // Budget tier helper function
    const getBudgetTier = (): 'startup' | 'growth' | 'enterprise' => {
      const budget = formData.budget;
      const currency = formData.budgetCurrency;
      
      if (!budget) return 'growth';
      
      if (currency === 'USD') {
        if (budget.includes('250k+') || budget.includes('100k-250k')) return 'enterprise';
        if (budget.includes('50k-100k') || budget.includes('25k-50k')) return 'growth';
        return 'startup';
      } else {
        if (budget.includes('2Cr+') || budget.includes('80L-2Cr')) return 'enterprise';
        if (budget.includes('40L-80L') || budget.includes('20L-40L')) return 'growth';
        return 'startup';
      }
    };

    // Advanced key components generator with intelligent grouping
    const generateKeyComponents = () => {
      const categories = classifyFeatures();
      const components = [];
      
      // AI/ML Components
      if (categories.ai_ml.length > 0) {
        if (selectedFeatures.includes('ai-automation')) {
          components.push("• Intelligent Process Automation Engine with neural decision trees and adaptive workflows");
        }
        if (selectedFeatures.includes('machine-learning')) {
          components.push("• Custom ML Model Pipeline with automated training, validation, and deployment");
        }
        if (selectedFeatures.includes('computer-vision')) {
          components.push("• Computer Vision Processing System with real-time object detection and analysis");
        }
        if (selectedFeatures.includes('nlp-processing')) {
          components.push("• Advanced NLP Engine with sentiment analysis, entity extraction, and language understanding");
        }
        if (selectedFeatures.includes('chatbot-ai')) {
          components.push("• Conversational AI Framework with multi-turn dialogue and context awareness");
        }
        if (selectedFeatures.includes('predictive-analytics')) {
          components.push("• Predictive Analytics Suite with forecasting models and trend analysis");
        }
        if (selectedFeatures.includes('voice-recognition')) {
          components.push("• Voice Processing System with speech-to-text and voice command integration");
        }
      }

      // Cloud & Infrastructure Components  
      if (categories.cloud_infra.length > 0) {
        if (selectedFeatures.includes('cloud-integration')) {
          components.push("• Multi-Cloud Integration Hub with cross-platform synchronization");
        }
        if (selectedFeatures.includes('auto-scaling')) {
          components.push("• Auto-Scaling Infrastructure with intelligent resource allocation");
        }
        if (selectedFeatures.includes('serverless')) {
          components.push("• Serverless Computing Framework with event-driven architecture");
        }
        if (selectedFeatures.includes('microservices')) {
          components.push("• Microservices Architecture with service mesh and API gateway");
        }
        if (selectedFeatures.includes('containerization')) {
          components.push("• Container Orchestration Platform with Kubernetes and Docker management");
        }
        if (selectedFeatures.includes('cdn-optimization')) {
          components.push("• Global CDN Network with edge caching and performance optimization");
        }
      }

      // Data & Analytics Components
      if (categories.data_analytics.length > 0) {
        if (selectedFeatures.includes('real-time-analytics')) {
          components.push("• Real-time Data Streaming Pipeline with live dashboard visualization");
        }
        if (selectedFeatures.includes('big-data')) {
          components.push("• Big Data Processing Engine with distributed computing and data lakes");
        }
        if (selectedFeatures.includes('data-visualization')) {
          components.push("• Interactive Data Visualization Suite with custom chart libraries");
        }
        if (selectedFeatures.includes('business-intelligence')) {
          components.push("• Business Intelligence Platform with automated reporting and KPI tracking");
        }
        if (selectedFeatures.includes('data-pipeline')) {
          components.push("• Automated Data Pipeline with ETL/ELT processing and quality validation");
        }
        if (selectedFeatures.includes('data-warehouse')) {
          components.push("• Enterprise Data Warehouse with dimensional modeling and OLAP cubes");
        }
      }

      // Security & Compliance Components
      if (categories.security_compliance.length > 0) {
        if (selectedFeatures.includes('security-compliance')) {
          components.push("• Comprehensive Security Suite with threat detection and compliance automation");
        }
        if (selectedFeatures.includes('blockchain-integration')) {
          components.push("• Blockchain Integration Layer with smart contracts and decentralized identity");
        }
        if (selectedFeatures.includes('encryption')) {
          components.push("• End-to-End Encryption System with key management and secure communication");
        }
        if (selectedFeatures.includes('identity-management')) {
          components.push("• Identity & Access Management with SSO and role-based permissions");
        }
        if (selectedFeatures.includes('audit-logging')) {
          components.push("• Comprehensive Audit System with activity tracking and compliance reporting");
        }
        if (selectedFeatures.includes('vulnerability-scanning')) {
          components.push("• Automated Security Scanning with vulnerability assessment and remediation");
        }
      }

      // Integration & API Components
      if (categories.integration_apis.length > 0) {
        if (selectedFeatures.includes('api-development')) {
          components.push("• API Gateway and Management Platform with rate limiting and documentation");
        }
        if (selectedFeatures.includes('workflow-integration')) {
          components.push("• Workflow Integration Hub connecting all business tools and systems");
        }
        if (selectedFeatures.includes('payment-gateway')) {
          components.push("• Secure Payment Processing System with multiple gateway support");
        }
        if (selectedFeatures.includes('crm-integration')) {
          components.push("• CRM Integration Module with customer data synchronization");
        }
        if (selectedFeatures.includes('erp-integration')) {
          components.push("• ERP System Connector with real-time business data exchange");
        }
        if (selectedFeatures.includes('social-media')) {
          components.push("• Social Media API Integration with content management and analytics");
        }
      }

      // Collaboration Components
      if (categories.collaboration.length > 0) {
        if (selectedFeatures.includes('team-collaboration')) {
          components.push("• Advanced Collaboration Platform with real-time communication and project tracking");
        }
        if (selectedFeatures.includes('video-conferencing')) {
          components.push("• Video Conferencing Solution with HD streaming and screen sharing");
        }
        if (selectedFeatures.includes('document-sharing')) {
          components.push("• Smart Document Management with version control and collaborative editing");
        }
        if (selectedFeatures.includes('project-management')) {
          components.push("• Project Management Suite with task automation and progress tracking");
        }
        if (selectedFeatures.includes('knowledge-base')) {
          components.push("• Knowledge Management System with AI-powered search and content organization");
        }
        if (selectedFeatures.includes('communication-hub')) {
          components.push("• Unified Communication Hub with multi-channel messaging and notifications");
        }
      }

      // Productivity & Automation Components
      if (categories.productivity_automation.length > 0) {
        if (selectedFeatures.includes('smart-scheduling')) {
          components.push("• AI-Powered Scheduling Engine with calendar optimization and resource management");
        }
        if (selectedFeatures.includes('time-management')) {
          components.push("• Intelligent Time Tracking with productivity analytics and optimization suggestions");
        }
        if (selectedFeatures.includes('performance-tracking')) {
          components.push("• Performance Optimization Dashboard with team productivity metrics");
        }
        if (selectedFeatures.includes('automated-testing')) {
          components.push("• Automated Testing Framework with continuous integration and quality assurance");
        }
        if (selectedFeatures.includes('intelligent-reporting')) {
          components.push("• Intelligent Reporting System with auto-generated insights and trend analysis");
        }
        if (selectedFeatures.includes('workflow-automation')) {
          components.push("• Business Process Automation with intelligent routing and approval workflows");
        }
        if (selectedFeatures.includes('email-automation')) {
          components.push("• Email Marketing Automation with personalization and campaign analytics");
        }
      }

      // IoT & Emerging Tech Components
      if (categories.iot_emerging.length > 0) {
        if (selectedFeatures.includes('iot-connectivity')) {
          components.push("• IoT Device Management Platform with real-time monitoring and control");
        }
        if (selectedFeatures.includes('augmented-reality')) {
          components.push("• AR/VR Integration Framework with immersive user experiences");
        }
        if (selectedFeatures.includes('edge-computing')) {
          components.push("• Edge Computing Infrastructure with local processing and reduced latency");
        }
        if (selectedFeatures.includes('smart-sensors')) {
          components.push("• Smart Sensor Network with environmental monitoring and data collection");
        }
        if (selectedFeatures.includes('digital-twin')) {
          components.push("• Digital Twin Technology with virtual modeling and simulation capabilities");
        }
        if (selectedFeatures.includes('robotics')) {
          components.push("• Robotics Process Automation with intelligent task execution");
        }
      }

      // Custom feature handling
      categories.custom.forEach(customId => {
        components.push(`• Custom Solution Component: Advanced implementation for specialized requirements`);
      });
      
      // Fallback components if none selected
      if (components.length === 0) {
        components.push("• Comprehensive Requirements Analysis and Solution Architecture Design");
        components.push("• Technical Specification Documentation and System Planning");
        components.push("• Custom Development Roadmap with Milestone Planning");
      }
      
      // Add integration layer if multiple categories
      const categoryCount = Object.values(categories).filter(cat => cat.length > 0).length;
      if (categoryCount >= 3) {
        components.push("• Cross-System Integration Layer with unified data flow and communication protocols");
      }
      
      return components.slice(0, 12); // Increased limit for complex solutions
    };

    // Dynamic implementation phases based on features and timeline
    const generateImplementationPhases = () => {
      const categories = classifyFeatures();
      const timelineMap = {
        'rapid-prototype': { weeks: 3, phases: 2 },
        'agile-development': { weeks: 8, phases: 3 },
        'enterprise-solution': { weeks: 16, phases: 4 },
        'comprehensive-platform': { weeks: 24, phases: 5 },
        'digital-transformation': { weeks: 48, phases: 6 },
        'ongoing-partnership': { weeks: 52, phases: 6 }
      };
      
      const timeline = timelineMap[formData.timeline as keyof typeof timelineMap] || { weeks: 12, phases: 4 };
      const complexity = selectedFeatures.length;
      
      let phases = [];
      
      // Phase 1: Discovery & Architecture (Always present)
      let phase1Tasks = [
        "• Comprehensive requirements analysis and stakeholder interviews",
        "• Technical architecture design and system blueprints",
        "• UI/UX design and user experience optimization"
      ];
      
      if (categories.ai_ml.length > 0) {
        phase1Tasks.push("• AI/ML model selection and data requirements analysis");
      }
      if (categories.data_analytics.length > 0) {
        phase1Tasks.push("• Data architecture design and analytics strategy planning");
      }
      if (categories.security_compliance.length > 0) {
        phase1Tasks.push("• Security architecture and compliance framework design");
      }
      if (categories.integration_apis.length > 0) {
        phase1Tasks.push("• API design and integration architecture planning");
      }
      
      phases.push(`Phase 1: Discovery & Architecture    (Week 1-${Math.ceil(timeline.weeks * 0.15)})\n${phase1Tasks.join('\n')}`);
      
      // Phase 2: Foundation Development
      let phase2Tasks = [
        "• Backend API development and database implementation",
        "• Frontend core components and responsive design",
        "• Authentication and user management system"
      ];
      
      if (categories.cloud_infra.length > 0) {
        phase2Tasks.push("• Cloud infrastructure setup and deployment pipeline");
      }
      if (categories.security_compliance.length > 0) {
        phase2Tasks.push("• Security layer implementation and encryption setup");
      }
      
      const phase2Start = Math.ceil(timeline.weeks * 0.15) + 1;
      const phase2End = Math.ceil(timeline.weeks * 0.4);
      phases.push(`Phase 2: Foundation Development     (Week ${phase2Start}-${phase2End})\n${phase2Tasks.join('\n')}`);
      
      // Phase 3: Feature Implementation (if sufficient timeline)
      if (timeline.phases >= 3) {
        let phase3Tasks = [];
        
        if (categories.ai_ml.length > 0) {
          phase3Tasks.push("• AI/ML model development, training, and optimization");
          phase3Tasks.push("• Machine learning pipeline deployment and testing");
        }
        
        if (categories.data_analytics.length > 0) {
          phase3Tasks.push("• Analytics dashboard development and data visualization");
          phase3Tasks.push("• Real-time data processing and reporting systems");
        }
        
        if (categories.integration_apis.length > 0) {
          phase3Tasks.push("• Third-party API integrations and webhook development");
          phase3Tasks.push("• External system connectivity and data synchronization");
        }
        
        if (categories.productivity_automation.length > 0) {
          phase3Tasks.push("• Workflow automation and business process implementation");
          phase3Tasks.push("• Productivity tools integration and optimization");
        }
        
        if (categories.collaboration.length > 0) {
          phase3Tasks.push("• Collaboration features and real-time communication setup");
          phase3Tasks.push("• Team management and project coordination tools");
        }
        
        if (phase3Tasks.length === 0) {
          phase3Tasks = [
            "• Advanced feature development and customization",
            "• Business logic implementation and workflow optimization",
            "• Performance optimization and system scaling"
          ];
        }
        
        const phase3Start = phase2End + 1;
        const phase3End = Math.ceil(timeline.weeks * 0.65);
        phases.push(`Phase 3: Feature Implementation     (Week ${phase3Start}-${phase3End})\n${phase3Tasks.join('\n')}`);
      }
      
      // Phase 4: Advanced Integration (for complex projects)
      if (timeline.phases >= 4) {
        let phase4Tasks = [];
        
        if (categories.iot_emerging.length > 0) {
          phase4Tasks.push("• IoT device integration and edge computing setup");
          phase4Tasks.push("• Emerging technology implementation and testing");
        }
        
        if (categories.ai_ml.length >= 2) {
          phase4Tasks.push("• Advanced AI model fine-tuning and optimization");
          phase4Tasks.push("• Intelligent automation and decision-making systems");
        }
        
        if (categories.security_compliance.includes('blockchain-integration')) {
          phase4Tasks.push("• Blockchain integration and smart contract deployment");
          phase4Tasks.push("• Decentralized system testing and security validation");
        }
        
        if (complexity >= 5) {
          phase4Tasks.push("• Cross-system integration and data flow optimization");
          phase4Tasks.push("• Performance testing and scalability improvements");
        }
        
        if (phase4Tasks.length === 0) {
          phase4Tasks = [
            "• Advanced system optimization and performance tuning",
            "• Integration testing and cross-platform compatibility",
            "• Security hardening and vulnerability assessment"
          ];
        }
        
        const phase4Start = Math.ceil(timeline.weeks * 0.65) + 1;
        const phase4End = Math.ceil(timeline.weeks * 0.85);
        phases.push(`Phase 4: Advanced Integration       (Week ${phase4Start}-${phase4End})\n${phase4Tasks.join('\n')}`);
      }
      
      // Phase 5: Enterprise Features (for large projects)
      if (timeline.phases >= 5) {
        let phase5Tasks = [
          "• Enterprise-grade monitoring and alerting systems",
          "• Advanced analytics and business intelligence dashboards",
          "• Compliance automation and audit trail implementation"
        ];
        
        if (categories.ai_ml.length >= 3) {
          phase5Tasks.push("• AI model ensemble and advanced machine learning features");
        }
        
        if (getBudgetTier() === 'enterprise') {
          phase5Tasks.push("• Multi-tenant architecture and enterprise integrations");
          phase5Tasks.push("• Advanced security protocols and compliance certification");
        }
        
        const phase5Start = Math.ceil(timeline.weeks * 0.85) + 1;
        const phase5End = Math.ceil(timeline.weeks * 0.95);
        phases.push(`Phase 5: Enterprise Features        (Week ${phase5Start}-${phase5End})\n${phase5Tasks.join('\n')}`);
      }
      
      // Final Phase: Testing & Deployment (Always present)
      let finalTasks = [
        "• Comprehensive testing suite and quality assurance",
        "• User acceptance testing and stakeholder feedback",
        "• Production deployment and monitoring setup",
        "• Go-live support and team training",
        "• Documentation delivery and knowledge transfer"
      ];
      
      if (categories.ai_ml.length > 0) {
        finalTasks.push("• AI model validation and performance monitoring setup");
      }
      
      if (complexity >= 5) {
        finalTasks.push("• Performance optimization and load testing validation");
      }
      
      const finalStart = Math.ceil(timeline.weeks * 0.95) + 1;
      const finalPhaseNumber = timeline.phases;
      phases.push(`Phase ${finalPhaseNumber}: Testing & Deployment        (Week ${finalStart}-${timeline.weeks})\n${finalTasks.join('\n')}`);
      
      // Add ongoing support note for long-term projects
      if (formData.timeline === 'ongoing-partnership') {
        phases.push(`\nOngoing: Continuous Support & Evolution\n• Monthly feature updates and system improvements\n• Continuous monitoring and performance optimization\n• Regular security updates and compliance maintenance\n• Strategic technology roadmap planning and implementation`);
      }
      
      return phases.join('\n\n');
    };

    // Enhanced dynamic expected outcomes based on feature analysis
    const generateExpectedOutcomes = () => {
      const categories = classifyFeatures();
      const outcomes = [];
      const complexity = selectedFeatures.length;
      
      // AI/ML specific outcomes
      if (categories.ai_ml.length >= 2) {
        outcomes.push(`• ${85 + categories.ai_ml.length * 5}%+ improvement in decision-making accuracy`);
        outcomes.push("• 90-95% reduction in manual processing time through intelligent automation");
      } else if (categories.ai_ml.length > 0) {
        outcomes.push("• 70-85% reduction in manual tasks through AI automation");
        outcomes.push("• Enhanced decision-making with 90%+ accuracy in pattern recognition");
      }
      
      // Data & Analytics outcomes
      if (categories.data_analytics.length >= 2) {
        outcomes.push("• Real-time business insights with sub-second data processing");
        outcomes.push("• 200-300% improvement in data-driven decision speed");
      } else if (categories.data_analytics.length > 0) {
        outcomes.push("• 150-250% faster access to business-critical insights");
      }
      
      // Productivity & Automation outcomes
      if (categories.productivity_automation.length >= 2) {
        outcomes.push(`• ${200 + complexity * 25}%+ overall productivity improvement`);
        outcomes.push("• 80-90% reduction in repetitive task completion time");
      }
      
      // Cloud & Infrastructure outcomes
      if (categories.cloud_infra.length >= 2) {
        outcomes.push("• 99.9% uptime with auto-scaling infrastructure");
        outcomes.push("• 60-80% reduction in infrastructure management overhead");
      }
      
      // Security outcomes
      if (categories.security_compliance.length > 0) {
        outcomes.push("• Enterprise-grade security with 99.95% threat prevention");
        outcomes.push("• Automated compliance reporting and audit readiness");
      }
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
DevOps:               ${stack.devops}${stack.ai_ml ? `\nAI/ML Stack:           ${stack.ai_ml}` : ''}${stack.data_processing ? `\nData Processing:       ${stack.data_processing}` : ''}${stack.blockchain ? `\nBlockchain:            ${stack.blockchain}` : ''}${stack.mobile ? `\nMobile:                ${stack.mobile}` : ''}${stack.real_time ? `\nReal-time:             ${stack.real_time}` : ''}${stack.testing ? `\nTesting:               ${stack.testing}` : ''}${stack.integration ? `\nIntegration:           ${stack.integration}` : ''}

🔧 KEY COMPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${keyComponents.join('\n')}

📊 IMPLEMENTATION PHASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${generateImplementationPhases()}

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
