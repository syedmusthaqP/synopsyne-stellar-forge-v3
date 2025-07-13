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
      { id: 'multi-factor-auth', name: 'Multi-Factor Authentication', icon: Shield, description: 'Enhanced security with multiple verification layers' },
      { id: 'data-encryption', name: 'End-to-End Encryption', icon: Shield, description: 'Advanced data protection and secure communications' },
      { id: 'compliance-gdpr', name: 'GDPR Compliance Suite', icon: Shield, description: 'European data protection regulation compliance tools' },
      { id: 'security-audit', name: 'Security Audit & Monitoring', icon: Shield, description: 'Continuous security assessment and threat detection' },
      { id: 'access-control', name: 'Role-Based Access Control', icon: Shield, description: 'Granular permission management and user access control' },
      { id: 'backup-recovery', name: 'Backup & Disaster Recovery', icon: Shield, description: 'Automated backup systems and disaster recovery protocols' },
    ],
    'Integration & APIs': [
      { id: 'api-development', name: 'RESTful API Development', icon: Code, description: 'Scalable and secure API endpoints for integration' },
      { id: 'webhook-integration', name: 'Webhook & Event Processing', icon: Code, description: 'Real-time event-driven integrations and notifications' },
      { id: 'third-party-apis', name: 'Third-Party API Integration', icon: Code, description: 'Seamless connection with external services and platforms' },
      { id: 'graphql-apis', name: 'GraphQL API Gateway', icon: Code, description: 'Efficient data querying and flexible API architecture' },
      { id: 'middleware-solutions', name: 'Custom Middleware Solutions', icon: Code, description: 'Bridge different systems and enable seamless data flow' },
      { id: 'api-documentation', name: 'Interactive API Documentation', icon: Code, description: 'Comprehensive API documentation and testing tools' },
    ],
    'Communication & Collaboration': [
      { id: 'video-conferencing', name: 'Integrated Video Conferencing', icon: MessageSquare, description: 'Built-in video calling and screen sharing capabilities' },
      { id: 'team-messaging', name: 'Real-time Team Messaging', icon: MessageSquare, description: 'Instant messaging and team communication tools' },
      { id: 'file-sharing', name: 'Secure File Sharing Platform', icon: MessageSquare, description: 'Encrypted file sharing and collaborative document editing' },
      { id: 'project-management', name: 'Integrated Project Management', icon: Target, description: 'Task tracking, milestone management, and team coordination' },
      { id: 'notification-system', name: 'Smart Notification System', icon: MessageSquare, description: 'Intelligent alerts and customizable notification preferences' },
      { id: 'collaborative-workspace', name: 'Digital Collaborative Workspace', icon: Users, description: 'Virtual workspace for remote team collaboration' },
    ],
    'Productivity & Workflow': [
      { id: 'workflow-automation', name: 'Workflow Automation Engine', icon: Zap, description: 'Automate complex business processes and approvals' },
      { id: 'document-management', name: 'Document Management System', icon: FileText, description: 'Organize, version control, and manage digital documents' },
      { id: 'task-scheduling', name: 'Advanced Task Scheduling', icon: Calendar, description: 'Intelligent task assignment and deadline management' },
      { id: 'time-tracking', name: 'Time Tracking & Analytics', icon: Clock, description: 'Monitor productivity and analyze time allocation patterns' },
      { id: 'resource-planning', name: 'Resource Planning Tools', icon: Target, description: 'Optimize resource allocation and capacity planning' },
      { id: 'performance-analytics', name: 'Performance Analytics Dashboard', icon: BarChart3, description: 'Track KPIs and measure organizational performance' },
    ],
    'IoT & Emerging Tech': [
      { id: 'iot-sensors', name: 'IoT Sensor Integration', icon: Settings, description: 'Connect and manage IoT devices and sensor networks' },
      { id: 'blockchain-integration', name: 'Blockchain Solutions', icon: Shield, description: 'Secure transactions and decentralized data management' },
      { id: 'ar-vr-experiences', name: 'AR/VR Experiences', icon: Settings, description: 'Immersive augmented and virtual reality applications' },
      { id: 'edge-computing', name: 'Edge Computing Solutions', icon: Cpu, description: 'Process data closer to source for reduced latency' },
      { id: 'quantum-ready', name: 'Quantum-Ready Architecture', icon: Cpu, description: 'Future-proof systems for quantum computing integration' },
      { id: 'robotics', name: 'Robotics Process Automation', icon: Bot, description: 'Automated robotic solutions for various industries' },
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('AI & Machine Learning');
  const [customFeature, setCustomFeature] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState('');

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

  // Enhanced dynamic solution generator with comprehensive analysis
  const generateOutput = () => {
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
        'data_analytics': selectedFeatures.filter(id => ['real-time-analytics', 'data-visualization', 'big-data', 'data-pipeline', 'business-intelligence', 'data-warehouse'].includes(id)),
        'security_compliance': selectedFeatures.filter(id => ['multi-factor-auth', 'data-encryption', 'compliance-gdpr', 'security-audit', 'access-control', 'backup-recovery'].includes(id)),
        'integration_apis': selectedFeatures.filter(id => ['api-development', 'webhook-integration', 'third-party-apis', 'graphql-apis', 'middleware-solutions', 'api-documentation'].includes(id)),
        'communication_collab': selectedFeatures.filter(id => ['video-conferencing', 'team-messaging', 'file-sharing', 'project-management', 'notification-system', 'collaborative-workspace'].includes(id)),
        'productivity_automation': selectedFeatures.filter(id => ['workflow-automation', 'document-management', 'task-scheduling', 'time-tracking', 'resource-planning', 'performance-analytics'].includes(id)),
        'iot_emerging': selectedFeatures.filter(id => ['iot-sensors', 'blockchain-integration', 'ar-vr-experiences', 'edge-computing', 'quantum-ready', 'robotics'].includes(id)),
        'custom': customFeature ? [customFeature] : []
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
      
      if (categories.security_compliance.length >= 2 && (categories.cloud_infra.length > 0 || categories.data_analytics.length > 0)) {
        return "A security-first digital platform that prioritizes data protection, compliance, and risk management while delivering powerful business capabilities. Features multi-layered security architecture, compliance automation, and continuous threat monitoring.";
      }
      
      if (categories.integration_apis.length >= 2 && categories.data_analytics.length > 0) {
        return "A data-centric integration hub that connects disparate systems, enables seamless data flow, and provides comprehensive analytics capabilities. Designed for organizations requiring complex system integration and data unification.";
      }
      
      if (categories.communication_collab.length >= 3) {
        return "A unified communication and collaboration ecosystem that breaks down silos, enhances team productivity, and enables seamless remote work capabilities. Features integrated messaging, video conferencing, and collaborative workspace tools.";
      }
      
      if (categories.ai_ml.length >= 3) {
        return "An advanced AI and machine learning platform that leverages cutting-edge algorithms to deliver intelligent automation, predictive insights, and adaptive learning capabilities across multiple business domains.";
      }
      
      if (categories.cloud_infra.length >= 3) {
        return "A robust cloud-native infrastructure solution designed for scalability, reliability, and performance. Features microservices architecture, auto-scaling capabilities, and enterprise-grade cloud integration.";
      }
      
      if (categories.data_analytics.length >= 3) {
        return "A comprehensive data analytics and business intelligence platform that transforms raw data into actionable insights through advanced visualization, real-time processing, and predictive modeling.";
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
        return "A targeted solution designed to address specific business challenges with precision and efficiency, providing immediate value while establishing a foundation for future growth.";
      }
    };

    // Advanced technical stack generator with intelligent recommendations
    const generateTechnicalStack = () => {
      const categories = classifyFeatures();
      const projectComplexity = selectedFeatures.length;
      const budgetTier = getBudgetTier();

      const stack: any = {
        frontend: budgetTier === 'startup' ? 'React.js, Tailwind CSS' : 'React.js/Next.js, TypeScript, Tailwind CSS',
        backend: 'Node.js/Express, TypeScript',
        database: budgetTier === 'startup' ? 'PostgreSQL' : 'PostgreSQL, Redis Cache',
        cloud: budgetTier === 'startup' ? 'AWS/Vercel' : 'AWS/GCP, Docker, Kubernetes',
        security: 'JWT, OAuth2, SSL/TLS',
        monitoring: budgetTier === 'startup' ? 'Basic Logging' : 'Datadog, Sentry, CloudWatch',
        devops: budgetTier === 'startup' ? 'GitHub Actions' : 'GitHub Actions, Terraform, CI/CD'
      };

      // Add specialized stacks based on features
      if (categories.ai_ml.length > 0) {
        stack.ai_ml = budgetTier === 'startup' 
          ? 'Python, scikit-learn, OpenAI API' 
          : 'Python, TensorFlow/PyTorch, Hugging Face, MLflow, Jupyter';
        
        if (categories.ai_ml.includes('computer-vision')) {
          stack.ai_ml += ', OpenCV, YOLO';
        }
        if (categories.ai_ml.includes('nlp-processing')) {
          stack.ai_ml += ', spaCy, BERT, Transformers';
        }
        if (categories.ai_ml.includes('voice-recognition')) {
          stack.ai_ml += ', Speech-to-Text APIs, WebRTC';
        }
      }

      if (categories.data_analytics.length > 0) {
        stack.data_processing = budgetTier === 'startup' 
          ? 'Pandas, NumPy, Chart.js' 
          : 'Apache Spark, Pandas, D3.js, Plotly, Apache Airflow';
        
        if (categories.data_analytics.includes('big-data')) {
          stack.data_processing += ', Hadoop, Apache Kafka';
        }
        if (categories.data_analytics.includes('real-time-analytics')) {
          stack.data_processing += ', WebSockets, Server-Sent Events';
        }
      }

      if (categories.iot_emerging.length > 0) {
        stack.iot = 'MQTT, WebSocket, Edge Computing';
        
        if (categories.iot_emerging.includes('blockchain-integration')) {
          stack.blockchain = 'Ethereum, Web3.js, Smart Contracts';
        }
        if (categories.iot_emerging.includes('edge-computing')) {
          stack.edge = 'Edge Functions, IoT Core, Raspberry Pi';
        }
      }

      if (categories.cloud_infra.length >= 2) {
        stack.cloud = budgetTier === 'startup' 
          ? 'AWS Lambda, S3, RDS' 
          : 'Multi-Cloud (AWS, Azure), Kubernetes, Terraform, CDN';
        
        if (categories.cloud_infra.includes('serverless')) {
          stack.serverless = 'AWS Lambda, Vercel Functions, Serverless Framework';
        }
        if (categories.cloud_infra.includes('microservices')) {
          stack.microservices = 'Docker, Kubernetes, API Gateway, Service Mesh';
        }
      }

      if (projectComplexity >= 5 && budgetTier !== 'startup') {
        stack.mobile = 'React Native, Expo';
        stack.real_time = 'WebSocket, Socket.io, Server-Sent Events';
        stack.testing = 'Jest, Cypress, Playwright, Postman';
        stack.integration = 'Zapier, Webhooks, REST/GraphQL APIs';
      }

      return stack;
    };

    // Budget tier helper function
    const getBudgetTier = (): 'startup' | 'growth' | 'enterprise' => {
      const budget = formData.budget;
      const currency = formData.budgetCurrency;
      
      if (!budget) return 'growth';
      
      const amount = parseInt(budget.replace(/[^\d]/g, ''));
      
      if (currency === 'USD') {
        if (amount < 50000) return 'startup';
        if (amount < 200000) return 'growth';
        return 'enterprise';
      }
      
      return 'growth';
    };

    // Advanced key components generator with intelligent grouping
    const generateKeyComponents = () => {
      const categories = classifyFeatures();
      const components = [];

      // AI/ML Components
      if (categories.ai_ml.length > 0) {
        if (categories.ai_ml.includes('ai-automation')) {
          components.push('🤖 Intelligent Process Automation Engine');
          components.push('   • Rule-based workflow automation');
          components.push('   • Decision tree optimization');
          components.push('   • Smart task routing and assignment');
        }
        if (categories.ai_ml.includes('machine-learning')) {
          components.push('🧠 Custom ML Model Training Pipeline');
          components.push('   • Data preprocessing and feature engineering');
          components.push('   • Model training and validation framework');
          components.push('   • A/B testing for model performance');
        }
        if (categories.ai_ml.includes('chatbot-ai')) {
          components.push('💬 AI-Powered Conversational Interface');
          components.push('   • Natural language understanding');
          components.push('   • Context-aware response generation');
          components.push('   • Multi-channel support (web, mobile, social)');
        }
        if (categories.ai_ml.includes('predictive-analytics')) {
          components.push('📊 Predictive Analytics Engine');
          components.push('   • Time series forecasting models');
          components.push('   • Anomaly detection algorithms');
          components.push('   • Trend analysis and pattern recognition');
        }
        if (categories.ai_ml.includes('computer-vision')) {
          components.push('👁️ Computer Vision Processing System');
          components.push('   • Image classification and object detection');
          components.push('   • Real-time video analysis');
          components.push('   • OCR and document processing');
        }
        if (categories.ai_ml.includes('nlp-processing')) {
          components.push('📝 Natural Language Processing Suite');
          components.push('   • Sentiment analysis and emotion detection');
          components.push('   • Text summarization and keyword extraction');
          components.push('   • Multi-language support and translation');
        }
        if (categories.ai_ml.includes('voice-recognition')) {
          components.push('🎤 Voice Recognition and Processing');
          components.push('   • Speech-to-text conversion');
          components.push('   • Voice command processing');
          components.push('   • Audio quality enhancement');
        }
      }

      // Cloud Infrastructure Components
      if (categories.cloud_infra.length > 0) {
        if (categories.cloud_infra.includes('cloud-integration')) {
          components.push('☁️ Multi-Cloud Integration Platform');
          components.push('   • Cross-cloud resource management');
          components.push('   • Unified monitoring and logging');
          components.push('   • Cost optimization across providers');
        }
        if (categories.cloud_infra.includes('auto-scaling')) {
          components.push('📈 Auto-Scaling Infrastructure');
          components.push('   • Dynamic resource allocation');
          components.push('   • Load-based scaling triggers');
          components.push('   • Cost-efficient resource management');
        }
        if (categories.cloud_infra.includes('serverless')) {
          components.push('⚡ Serverless Computing Architecture');
          components.push('   • Function-as-a-Service implementation');
          components.push('   • Event-driven processing');
          components.push('   • Zero-infrastructure management');
        }
        if (categories.cloud_infra.includes('microservices')) {
          components.push('🔧 Microservices Architecture');
          components.push('   • Service decomposition and isolation');
          components.push('   • API gateway and service mesh');
          components.push('   • Independent deployment and scaling');
        }
        if (categories.cloud_infra.includes('containerization')) {
          components.push('📦 Container Orchestration Platform');
          components.push('   • Docker containerization');
          components.push('   • Kubernetes cluster management');
          components.push('   • Automated deployment pipelines');
        }
        if (categories.cloud_infra.includes('cdn-optimization')) {
          components.push('🌐 Global CDN and Performance Optimization');
          components.push('   • Edge caching and content delivery');
          components.push('   • Image and asset optimization');
          components.push('   • Geographic performance optimization');
        }
      }

      // Data Analytics Components
      if (categories.data_analytics.length > 0) {
        if (categories.data_analytics.includes('real-time-analytics')) {
          components.push('📊 Real-Time Analytics Dashboard');
          components.push('   • Live data streaming and processing');
          components.push('   • Interactive visualization widgets');
          components.push('   • Customizable KPI monitoring');
        }
        if (categories.data_analytics.includes('data-visualization')) {
          components.push('📈 Advanced Data Visualization Suite');
          components.push('   • Interactive charts and graphs');
          components.push('   • Custom dashboard builder');
          components.push('   • Export and sharing capabilities');
        }
        if (categories.data_analytics.includes('big-data')) {
          components.push('🗃️ Big Data Processing Engine');
          components.push('   • Distributed data processing');
          components.push('   • Batch and stream processing');
          components.push('   • Data lake and warehouse integration');
        }
        if (categories.data_analytics.includes('data-pipeline')) {
          components.push('🔄 Automated Data Pipeline');
          components.push('   • ETL/ELT process automation');
          components.push('   • Data quality validation');
          components.push('   • Error handling and recovery');
        }
        if (categories.data_analytics.includes('business-intelligence')) {
          components.push('💼 Business Intelligence Platform');
          components.push('   • Executive reporting dashboards');
          components.push('   • Drill-down analysis capabilities');
          components.push('   • Automated insight generation');
        }
        if (categories.data_analytics.includes('data-warehouse')) {
          components.push('🏢 Enterprise Data Warehouse');
          components.push('   • Centralized data repository');
          components.push('   • Historical data preservation');
          components.push('   • OLAP cube generation');
        }
      }

      // Security Components
      if (categories.security_compliance.length > 0) {
        if (categories.security_compliance.includes('multi-factor-auth')) {
          components.push('🔐 Multi-Factor Authentication System');
          components.push('   • SMS, email, and app-based verification');
          components.push('   • Biometric authentication support');
          components.push('   • Single sign-on (SSO) integration');
        }
        if (categories.security_compliance.includes('data-encryption')) {
          components.push('🛡️ End-to-End Encryption Framework');
          components.push('   • AES-256 data encryption');
          components.push('   • TLS 1.3 transport security');
          components.push('   • Key management and rotation');
        }
        if (categories.security_compliance.includes('compliance-gdpr')) {
          components.push('📋 GDPR Compliance Management');
          components.push('   • Data privacy controls');
          components.push('   • Consent management system');
          components.push('   • Right to be forgotten implementation');
        }
        if (categories.security_compliance.includes('security-audit')) {
          components.push('🔍 Security Audit and Monitoring');
          components.push('   • Continuous vulnerability scanning');
          components.push('   • Intrusion detection system');
          components.push('   • Security incident response');
        }
        if (categories.security_compliance.includes('access-control')) {
          components.push('👥 Role-Based Access Control');
          components.push('   • Granular permission management');
          components.push('   • Dynamic role assignment');
          components.push('   • Access audit trails');
        }
        if (categories.security_compliance.includes('backup-recovery')) {
          components.push('💾 Backup and Disaster Recovery');
          components.push('   • Automated backup scheduling');
          components.push('   • Point-in-time recovery');
          components.push('   • Multi-region data replication');
        }
      }

      // Add more components for other categories...
      if (categories.integration_apis.length > 0) {
        components.push('🔗 API Integration Hub');
        components.push('   • RESTful and GraphQL API endpoints');
        components.push('   • Third-party service connectors');
        components.push('   • Webhook processing and management');
      }

      if (categories.communication_collab.length > 0) {
        components.push('💬 Unified Communication Platform');
        components.push('   • Real-time messaging and video conferencing');
        components.push('   • File sharing and collaborative editing');
        components.push('   • Project management integration');
      }

      if (categories.productivity_automation.length > 0) {
        components.push('⚡ Workflow Automation Engine');
        components.push('   • Process automation and optimization');
        components.push('   • Task scheduling and resource planning');
        components.push('   • Performance analytics and reporting');
      }

      if (categories.iot_emerging.length > 0) {
        components.push('🌐 IoT and Emerging Tech Integration');
        components.push('   • Sensor data collection and processing');
        components.push('   • Edge computing capabilities');
        components.push('   • Blockchain and AR/VR integration');
      }

      // Custom components
      if (categories.custom.length > 0) {
        components.push('🎯 Custom Feature Implementation');
        components.push(`   • ${customFeature}`);
        components.push('   • Tailored business logic and workflows');
        components.push('   • Integration with existing systems');
      }

      return components.length > 0 ? components : [
        '📋 Requirements Analysis and Consultation',
        '   • Business process mapping',
        '   • Technical architecture planning',
        '   • Solution roadmap development'
      ];
    };

    // Dynamic implementation phases based on features and timeline
    const generateImplementationPhases = () => {
      const categories = classifyFeatures();
      const timelineMap = {
        'rapid-prototype': { weeks: 3, phases: 2 },
        'agile-development': { weeks: 8, phases: 3 },
        'enterprise-deployment': { weeks: 16, phases: 4 },
        'long-term-project': { weeks: 24, phases: 5 },
        'ongoing-partnership': { weeks: 52, phases: 6 }
      };

      const timeline = timelineMap[formData.timeline] || timelineMap['agile-development'];
      const phases = [];
      
      // Phase 1: Discovery & Architecture (Always present)
      let phase1Tasks = [
        "• Comprehensive requirements analysis and stakeholder interviews",
        "• Technical architecture design and system specifications",
        "• UI/UX design and user experience optimization"
      ];
      
      if (categories.ai_ml.length > 0) {
        phase1Tasks.push("• AI model requirements and data strategy planning");
      }
      if (categories.security_compliance.length > 0) {
        phase1Tasks.push("• Security assessment and compliance framework design");
      }
      if (categories.data_analytics.length > 0) {
        phase1Tasks.push("• Data architecture and analytics framework planning");
      }
      if (categories.integration_apis.length > 0) {
        phase1Tasks.push("• API architecture and integration strategy development");
      }

      phases.push({
        phase: 1,
        title: "Discovery & Architecture",
        duration: `${Math.ceil(timeline.weeks * 0.25)} weeks`,
        tasks: phase1Tasks
      });

      // Phase 2: Core Development
      if (timeline.phases >= 2) {
        let phase2Tasks = [
          "• Core platform development and database setup",
          "• User authentication and authorization implementation",
          "• Basic UI components and navigation structure"
        ];

        if (categories.ai_ml.length > 0) {
          phase2Tasks.push("• ML model development and training pipeline setup");
        }
        if (categories.cloud_infra.length > 0) {
          phase2Tasks.push("• Cloud infrastructure setup and containerization");
        }
        if (categories.data_analytics.length > 0) {
          phase2Tasks.push("• Data processing pipeline and basic analytics implementation");
        }

        phases.push({
          phase: 2,
          title: "Core Development",
          duration: `${Math.ceil(timeline.weeks * 0.35)} weeks`,
          tasks: phase2Tasks
        });
      }

      // Phase 3: Feature Integration
      if (timeline.phases >= 3) {
        let phase3Tasks = [
          "• Advanced feature development and integration",
          "• Third-party service integration and API connections",
          "• Performance optimization and security hardening"
        ];

        if (categories.ai_ml.length > 0) {
          phase3Tasks.push("• AI model training, validation, and deployment");
        }
        if (categories.communication_collab.length > 0) {
          phase3Tasks.push("• Communication features and collaboration tools");
        }
        if (categories.productivity_automation.length > 0) {
          phase3Tasks.push("• Workflow automation and productivity enhancement features");
        }

        phases.push({
          phase: 3,
          title: "Feature Integration",
          duration: `${Math.ceil(timeline.weeks * 0.25)} weeks`,
          tasks: phase3Tasks
        });
      }

      // Phase 4: Testing & Optimization
      if (timeline.phases >= 4) {
        phases.push({
          phase: 4,
          title: "Testing & Optimization",
          duration: `${Math.ceil(timeline.weeks * 0.15)} weeks`,
          tasks: [
            "• Comprehensive testing (unit, integration, performance)",
            "• User acceptance testing and feedback integration",
            "• Performance optimization and bug fixes",
            "• Security penetration testing and vulnerability assessment",
            "• Final UI/UX refinements and accessibility improvements"
          ]
        });
      }

      // Phase 5: Deployment & Launch
      if (timeline.phases >= 5) {
        phases.push({
          phase: 5,
          title: "Deployment & Launch",
          duration: `${Math.ceil(timeline.weeks * 0.1)} weeks`,
          tasks: [
            "• Production environment setup and deployment",
            "• Monitoring and logging system configuration",
            "• User training and documentation delivery",
            "• Go-live support and launch coordination",
            "• Post-launch performance monitoring and optimization"
          ]
        });
      }

      // Phase 6: Ongoing Support (for long-term projects)
      if (timeline.phases >= 6) {
        phases.push({
          phase: 6,
          title: "Ongoing Support & Enhancement",
          duration: "Ongoing",
          tasks: [
            "• Continuous monitoring and maintenance",
            "• Feature enhancements and updates",
            "• Performance optimization and scaling",
            "• Security updates and compliance maintenance",
            "• User feedback integration and iterative improvements"
          ]
        });
      }

      return phases;
    };

    // Enhanced dynamic expected outcomes based on feature analysis
    const generateExpectedOutcomes = () => {
      const categories = classifyFeatures();
      const outcomes = [];

      // AI/ML Outcomes
      if (categories.ai_ml.length > 0) {
        if (categories.ai_ml.includes('ai-automation')) {
          outcomes.push("🎯 75-90% reduction in manual processing time");
          outcomes.push("🔄 Automated workflow efficiency gains of 3-5x");
        }
        if (categories.ai_ml.includes('predictive-analytics')) {
          outcomes.push("📈 15-25% improvement in forecasting accuracy");
          outcomes.push("⚡ Real-time insights for faster decision-making");
        }
        if (categories.ai_ml.includes('chatbot-ai')) {
          outcomes.push("💬 24/7 automated customer support availability");
          outcomes.push("📞 60-80% reduction in support ticket volume");
        }
        if (categories.ai_ml.includes('computer-vision')) {
          outcomes.push("👁️ 95%+ accuracy in image/document processing");
          outcomes.push("⚡ 10-20x faster visual data processing");
        }
        if (categories.ai_ml.includes('nlp-processing')) {
          outcomes.push("📝 Automated text analysis and sentiment tracking");
          outcomes.push("🌐 Multi-language support with 95%+ accuracy");
        }
      }

      // Cloud Infrastructure Outcomes
      if (categories.cloud_infra.length > 0) {
        outcomes.push("☁️ 99.9% uptime with auto-scaling capabilities");
        outcomes.push("💰 20-40% reduction in infrastructure costs");
        if (categories.cloud_infra.includes('serverless')) {
          outcomes.push("⚡ Zero-downtime deployments and infinite scalability");
        }
        if (categories.cloud_infra.includes('microservices')) {
          outcomes.push("🔧 Independent service scaling and faster development cycles");
        }
      }

      // Data Analytics Outcomes
      if (categories.data_analytics.length > 0) {
        outcomes.push("📊 Real-time business intelligence and KPI tracking");
        outcomes.push("📈 Data-driven decision making with actionable insights");
        if (categories.data_analytics.includes('big-data')) {
          outcomes.push("🗃️ Processing of petabyte-scale data with sub-second queries");
        }
        if (categories.data_analytics.includes('real-time-analytics')) {
          outcomes.push("⚡ Instant alerts and real-time performance monitoring");
        }
      }

      // Security Outcomes
      if (categories.security_compliance.length > 0) {
        outcomes.push("🛡️ Enterprise-grade security with 99.99% threat protection");
        outcomes.push("📋 Full compliance with industry standards (GDPR, SOC2, ISO27001)");
        if (categories.security_compliance.includes('multi-factor-auth')) {
          outcomes.push("🔐 99.9% reduction in unauthorized access attempts");
        }
      }

      // Integration Outcomes
      if (categories.integration_apis.length > 0) {
        outcomes.push("🔗 Seamless integration with 100+ third-party services");
        outcomes.push("⚡ API response times under 100ms with 99.9% reliability");
      }

      // Communication & Collaboration Outcomes
      if (categories.communication_collab.length > 0) {
        outcomes.push("💬 50-70% improvement in team communication efficiency");
        outcomes.push("🤝 Enhanced remote collaboration with real-time sync");
      }

      // Productivity Outcomes
      if (categories.productivity_automation.length > 0) {
        outcomes.push("⚡ 40-60% increase in overall team productivity");
        outcomes.push("📋 Automated task management and resource optimization");
      }

      // IoT & Emerging Tech Outcomes
      if (categories.iot_emerging.length > 0) {
        outcomes.push("🌐 Connected ecosystem with real-time device monitoring");
        outcomes.push("🔮 Future-proof architecture ready for emerging technologies");
        if (categories.iot_emerging.includes('blockchain-integration')) {
          outcomes.push("⛓️ Immutable transaction history with 100% transparency");
        }
      }

      // Custom Feature Outcomes
      if (categories.custom.length > 0) {
        outcomes.push("🎯 Custom solution perfectly aligned with business requirements");
        outcomes.push("🚀 Competitive advantage through unique feature implementation");
      }

      // General Business Outcomes
      if (selectedFeatures.length >= 5) {
        outcomes.push("💼 Enterprise-scale digital transformation with measurable ROI");
        outcomes.push("📈 20-50% improvement in overall business efficiency");
      } else if (selectedFeatures.length >= 3) {
        outcomes.push("🎯 Targeted solution delivering immediate business value");
        outcomes.push("📊 Clear performance metrics and success indicators");
      } else if (selectedFeatures.length > 0) {
        outcomes.push("🚀 Focused implementation with quick time-to-value");
        outcomes.push("📈 Foundation for future digital expansion");
      } else {
        outcomes.push("📋 Strategic consultation and roadmap for digital transformation");
        outcomes.push("🎯 Clear action plan with prioritized technology initiatives");
      }
      
      return outcomes.slice(0, 6);
    };

    const stack = generateTechnicalStack();
    const keyComponents = generateKeyComponents();
    const expectedOutcomes = generateExpectedOutcomes();
    
    return `
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                           🧠 NEURAL SOLUTION OVERVIEW                                ║
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
Solution ID:           NS-${Date.now().toString().slice(-6)}

🎯 SOLUTION ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${generateSolutionDescription()}

🔧 SELECTED FEATURES & CAPABILITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${selectedFeatureNames.length > 0 ? selectedFeatureNames.map((name, i) => `   ${i + 1}. ${name}`).join('\n') : '🔧 CORE PACKAGE: Consultation and custom requirement analysis'}

💻 TECHNICAL STACK RECOMMENDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend:              ${stack.frontend}
Backend:               ${stack.backend}
Database:              ${stack.database}
Cloud Infrastructure:  ${stack.cloud}
Security:              ${stack.security}
Monitoring:            ${stack.monitoring}
DevOps:               ${stack.devops}${stack.ai_ml ? `\nAI/ML Stack:           ${stack.ai_ml}` : ''}${stack.data_processing ? `\nData Processing:       ${stack.data_processing}` : ''}${stack.blockchain ? `\nBlockchain:            ${stack.blockchain}` : ''}${stack.mobile ? `\nMobile:                ${stack.mobile}` : ''}${stack.real_time ? `\nReal-time:             ${stack.real_time}` : ''}${stack.testing ? `\nTesting:               ${stack.testing}` : ''}${stack.integration ? `\nIntegration:           ${stack.integration}` : ''}

🏗️ KEY SYSTEM COMPONENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${keyComponents.join('\n')}

⏱️ IMPLEMENTATION ROADMAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${generateImplementationPhases().map(phase => 
  `Phase ${phase.phase}: ${phase.title} (${phase.duration})\n${phase.tasks.map(task => `   ${task}`).join('\n')}`
).join('\n\n')}

👥 RECOMMENDED TEAM STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead Developer:        1x Full-stack Engineer (Full-time)${selectedFeatures.some(f => ['ai-automation', 'machine-learning', 'computer-vision', 'nlp-processing'].includes(f)) ? '\nAI/ML Engineer:        1x AI Specialist (Full-time)' : ''}
UI/UX Designer:        1x Designer (Part-time)${selectedFeatures.some(f => ['real-time-analytics', 'data-visualization', 'big-data'].includes(f)) ? '\nData Engineer:         1x Data Specialist (Part-time)' : ''}
QA Engineer:           1x Quality Assurance (Part-time)
DevOps Consultant:     1x Infrastructure Expert (As needed)${selectedFeatures.includes('security-compliance') || selectedFeatures.includes('blockchain-integration') ? '\nSecurity Expert:       1x Cybersecurity Specialist (Part-time)' : ''}

🎯 EXPECTED BUSINESS OUTCOMES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${expectedOutcomes.join('\n')}

🚀 NEXT STEPS & ACTION ITEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Detailed requirements gathering and stakeholder alignment
2. Technical architecture review and infrastructure planning
3. Resource allocation and development team assembly
4. Project timeline finalization and milestone definition
5. Development team assignment and project kickoff

╚══════════════════════════════════════════════════════════════════════════════════════╝

This solution overview is dynamically generated based on your specific feature selection 
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
    
    // Generate output
    const output = generateOutput();
    setGeneratedOutput(output);
    
    // Simulate form submission
    setTimeout(() => {
      const selectedFeatureNames = selectedFeatures
        .map(id => getAllFeatures().find(f => f.id === id)?.name)
        .filter(Boolean);
      
      console.log('Neural Connection Request Submitted:', {
        ...formData,
        selectedFeatures: selectedFeatureNames,
        customFeature
      });

      setSubmitMessage(`🧠 NEURAL CONNECTION ESTABLISHED 🧠

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 CONNECTION DETAILS:
Submitted by:          ${formData.name || 'Valued Client'}
Organization:          ${formData.company || 'Individual/Startup'}
Contact Email:         ${formData.email}
Project Type:          ${formData.projectType === 'other' ? formData.customProjectType : formData.projectType}
Budget Range:          ${formData.budget} ${formData.budgetCurrency}
Timeline:              ${formData.timeline?.replace(/-/g, ' ').toUpperCase()}

📝 PROJECT SCOPE:
${formData.message || 'Standard consultation and requirement analysis'}

🔧 SELECTED PRODUCTIVITY FEATURES:
${selectedFeatureNames.length > 0 ? selectedFeatureNames.map((name, i) => `   ${i + 1}. ${name}`).join('\n') : '   • Consultation and custom requirement analysis'}${customFeature ? `\n   • Custom Feature: ${customFeature}` : ''}

🧠 AI ANALYSIS COMPLETE:
Feature Complexity:    ${selectedFeatures.length >= 5 ? 'Enterprise-Scale' : selectedFeatures.length >= 3 ? 'Advanced Integration' : selectedFeatures.length >= 1 ? 'Focused Solution' : 'Consultation Package'}
Recommended Approach:  ${selectedFeatures.length >= 5 ? 'Multi-phase enterprise deployment' : selectedFeatures.length >= 3 ? 'Agile development with iterative releases' : 'Rapid prototyping and focused development'}
Estimated Timeline:    ${formData.timeline ? formData.timeline.replace(/-/g, ' ').toUpperCase() : 'To be determined based on requirements'}

💡 INNOVATION PREVIEW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Based on your selections, we'll incorporate cutting-edge AI technologies including machine learning algorithms, cloud-native architecture, and advanced automation systems to deliver a solution that exceeds your expectations.

Our neural network has analyzed your requirements and prepared a preliminary solution overview. Expect a detailed proposal with cost analysis, technical specifications, and implementation roadmap.

🔗 Connection Status: ACTIVE | Priority: HIGH | Response Time: < 4 Hours`);
      
      // Clear form data after submission
      // setFormData({
      //   name: '',
      //   email: '',
      //   company: '',
      //   message: '',
      //   projectType: '',
      //   customProjectType: '',
      //   timeline: '',
      //   budget: '',
      //   budgetCurrency: 'USD',
      //   features: []
      // });
      // setSelectedFeatures([]);
      // setCustomFeature('');
      
      setIsSubmitting(false);
      setShowModal(true);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const addCustomFeature = () => {
    if (customFeature.trim()) {
      setSelectedFeatures(prev => [...prev, `custom-${Date.now()}`]);
      setCustomFeature('');
      setShowCustomInput(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="neural-network-bg opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Initiate Neural Connection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with our AI-powered development ecosystem. Select your desired productivity features and let our neural network design the perfect solution architecture for your business transformation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="glassmorphism p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-cyan-400" />
                  Neural Interface Configuration
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-300 mb-2">Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-cyan-300 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                    >
                      <option value="">Select project type</option>
                      <option value="web-application">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="enterprise-software">Enterprise Software</option>
                      <option value="ai-ml-solution">AI/ML Solution</option>
                      <option value="data-analytics">Data Analytics Platform</option>
                      <option value="automation-system">Automation System</option>
                      <option value="integration-platform">Integration Platform</option>
                      <option value="other">Other (specify below)</option>
                    </select>
                  </div>

                  {formData.projectType === 'other' && (
                    <div className="md:col-span-2">
                      <label className="block text-cyan-300 mb-2">Custom Project Type</label>
                      <input
                        type="text"
                        name="customProjectType"
                        value={formData.customProjectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="Describe your custom project type"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-cyan-300 mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="rapid-prototype">Rapid Prototype (2-4 weeks)</option>
                      <option value="agile-development">Agile Development (2-3 months)</option>
                      <option value="enterprise-deployment">Enterprise Deployment (4-6 months)</option>
                      <option value="long-term-project">Long-term Project (6+ months)</option>
                      <option value="ongoing-partnership">Ongoing Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-cyan-300 mb-2">Budget Range</label>
                    <div className="flex space-x-2">
                      <select
                        name="budgetCurrency"
                        value={formData.budgetCurrency}
                        onChange={handleInputChange}
                        className="w-20 px-2 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white text-sm"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CAD">CAD</option>
                        <option value="AUD">AUD</option>
                        <option value="INR">INR</option>
                      </select>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                        <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                        <option value="$500,000+">$500,000+</option>
                        <option value="Open to discussion">Open to discussion</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-cyan-300 mb-2">Project Description</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white resize-vertical"
                    placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                  />
                </div>
              </div>

              {/* Productivity Features Selection */}
              <div className="glassmorphism p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-cyan-400" />
                  Productivity Features Selection
                </h3>
                
                <p className="text-gray-300 mb-6">
                  Select the advanced features you're interested in. Our neural network will analyze your selection and recommend the optimal technical stack and architecture.
                </p>

                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search features across all categories..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                    />
                  </div>
                </div>

                {/* Category Selector */}
                {!searchTerm && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {Object.keys(productivityCategories).map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setSelectedCategory(category)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedCategory === category
                              ? 'bg-cyan-500 text-black'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {getFilteredFeatures().map((feature) => {
                    const Icon = feature.icon;
                    const isSelected = selectedFeatures.includes(feature.id);
                    
                    return (
                      <div
                        key={feature.id}
                        onClick={() => handleFeatureToggle(feature.id)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:scale-105 ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-400 shadow-lg shadow-cyan-500/20'
                            : 'bg-gray-800/50 border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500' : 'bg-gray-700'}`}>
                            <Icon className={`w-5 h-5 ${isSelected ? 'text-black' : 'text-gray-300'}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-medium mb-1 ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                              {feature.name}
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                        
                        {isSelected && (
                          <div className="mt-3 flex items-center text-cyan-400">
                            <div className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center mr-2">
                              <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium">Selected</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Custom Feature Input */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-white">Custom Feature Requirements</h4>
                    <button
                      type="button"
                      onClick={() => setShowCustomInput(!showCustomInput)}
                      className="flex items-center px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-400/50 rounded-lg hover:bg-purple-500/30 transition-all text-sm"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Custom
                    </button>
                  </div>
                  
                  {showCustomInput && (
                    <div className="space-y-4">
                      <textarea
                        value={customFeature}
                        onChange={(e) => setCustomFeature(e.target.value)}
                        placeholder="Describe any custom features or specific requirements not covered above..."
                        rows={3}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none text-white resize-vertical"
                      />
                      <div className="flex space-x-3">
                        <button
                          type="button"
                          onClick={addCustomFeature}
                          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all text-sm"
                        >
                          Add Feature
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowCustomInput(false);
                            setCustomFeature('');
                          }}
                          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {customFeature && !showCustomInput && (
                    <div className="mt-4 p-4 bg-purple-500/20 border border-purple-400/50 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="text-purple-300 font-medium mb-1">Custom Feature</h5>
                          <p className="text-gray-300 text-sm">{customFeature}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setCustomFeature('');
                            setSelectedFeatures(prev => prev.filter(id => !id.startsWith('custom-')));
                          }}
                          className="text-purple-400 hover:text-purple-300 ml-4"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Selected Features Summary */}
                {selectedFeatures.length > 0 && (
                  <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-lg">
                    <h4 className="text-lg font-medium text-cyan-300 mb-3">
                      Selected Features ({selectedFeatures.length})
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFeatures.map((featureId) => {
                        const feature = getAllFeatures().find(f => f.id === featureId);
                        if (!feature && !featureId.startsWith('custom-')) return null;
                        
                        return (
                          <div
                            key={featureId}
                            className="flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                          >
                            <span>{feature?.name || 'Custom Feature'}</span>
                            <button
                              type="button"
                              onClick={() => handleFeatureToggle(featureId)}
                              className="ml-2 text-cyan-400 hover:text-cyan-300"
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 mr-3 border-2 border-white border-t-transparent rounded-full"></div>
                      Establishing Neural Connection...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Initiate Neural Connection
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="glassmorphism max-w-4xl w-full max-h-[90vh] overflow-hidden border border-cyan-500/30 rounded-2xl">
              <div className="p-8 overflow-y-auto max-h-[90vh] custom-scrollbar">
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

                  {/* Output Section */}
                  <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-blue-400" />
                        Generated Solution Overview
                      </h3>
                      <button
                        onClick={() => setShowOutput(!showOutput)}
                        className="flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-400/50 rounded-lg hover:bg-blue-500/30 transition-all text-sm"
                      >
                        {showOutput ? 'Hide' : 'View'} Output
                      </button>
                    </div>
                    
                    {showOutput && (
                      <div className="relative">
                        <pre className="text-blue-300 text-xs whitespace-pre-wrap font-mono leading-relaxed bg-black/30 p-4 rounded-lg border border-blue-400/20 max-h-96 overflow-y-auto custom-scrollbar">
                          {generatedOutput}
                        </pre>
                        <button
                          onClick={() => {
                            const blob = new Blob([generatedOutput], { type: 'text/plain' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `neural-output-${Date.now()}.txt`;
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