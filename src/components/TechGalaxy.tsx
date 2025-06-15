import React, { useState, useEffect } from 'react';

interface TechNode {
  id: string;
  name: string;
  category: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  angle: number;
  description: string;
  expertise: number;
  projects: string[];
  keyFeatures: string[];
  experienceYears: number;
}

const TechGalaxy = () => {
  const [selectedTech, setSelectedTech] = useState<TechNode | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [rotation, setRotation] = useState(0);

  const technologies: TechNode[] = [
    // Frontend - Frameworks
    { 
      id: 'react', 
      name: 'React', 
      category: 'Frontend', 
      color: '#61DAFB', 
      size: 60, 
      orbitRadius: 200, 
      orbitSpeed: 1, 
      angle: 0, 
      description: 'Modern UI development with component-based architecture for scalable web applications', 
      expertise: 95,
      projects: ['E-commerce Platform', 'Healthcare Dashboard', 'Financial Analytics'],
      keyFeatures: ['Component Architecture', 'Virtual DOM', 'Hooks & Context', 'Performance Optimization'],
      experienceYears: 6
    },
    { 
      id: 'vue', 
      name: 'Vue.js', 
      category: 'Frontend', 
      color: '#4FC08D', 
      size: 50, 
      orbitRadius: 180, 
      orbitSpeed: 1.2, 
      angle: 80, 
      description: 'Progressive framework for building user interfaces with gentle learning curve', 
      expertise: 88,
      projects: ['Content Management System', 'Real-time Chat App'],
      keyFeatures: ['Template Syntax', 'Reactive Data', 'Single File Components', 'Vue Router'],
      experienceYears: 4
    },
    { 
      id: 'angular', 
      name: 'Angular', 
      category: 'Frontend', 
      color: '#DD0031', 
      size: 55, 
      orbitRadius: 220, 
      orbitSpeed: 0.8, 
      angle: 160, 
      description: 'Enterprise-grade application framework with TypeScript integration', 
      expertise: 82,
      projects: ['Enterprise Resource Planning', 'Banking Portal'],
      keyFeatures: ['TypeScript', 'Dependency Injection', 'RxJS', 'Angular CLI'],
      experienceYears: 5
    },
    { 
      id: 'nextjs', 
      name: 'Next.js', 
      category: 'Frontend', 
      color: '#000000', 
      size: 52, 
      orbitRadius: 240, 
      orbitSpeed: 0.9, 
      angle: 240, 
      description: 'Full-stack React framework with server-side rendering and static generation', 
      expertise: 90,
      projects: ['E-commerce Site', 'Blog Platform', 'Corporate Website'],
      keyFeatures: ['SSR/SSG', 'API Routes', 'Image Optimization', 'File-based Routing'],
      experienceYears: 4
    },
    { 
      id: 'svelte', 
      name: 'Svelte', 
      category: 'Frontend', 
      color: '#FF3E00', 
      size: 48, 
      orbitRadius: 200, 
      orbitSpeed: 1.1, 
      angle: 300, 
      description: 'Compile-time optimized framework with no virtual DOM overhead', 
      expertise: 75,
      projects: ['Interactive Dashboard', 'Animation-heavy App'],
      keyFeatures: ['Compile-time Optimization', 'No Virtual DOM', 'Small Bundle Size', 'Reactive Stores'],
      experienceYears: 2
    },
    
    // Frontend - Languages & Core
    { 
      id: 'typescript', 
      name: 'TypeScript', 
      category: 'Frontend', 
      color: '#3178C6', 
      size: 58, 
      orbitRadius: 160, 
      orbitSpeed: 1.3, 
      angle: 40, 
      description: 'Strongly typed JavaScript superset for scalable application development', 
      expertise: 92,
      projects: ['Large Scale Apps', 'Enterprise Solutions', 'Type-safe APIs'],
      keyFeatures: ['Static Typing', 'IntelliSense', 'Compile-time Checking', 'Modern ES Features'],
      experienceYears: 5
    },
    { 
      id: 'javascript', 
      name: 'JavaScript', 
      category: 'Frontend', 
      color: '#F7DF1E', 
      size: 62, 
      orbitRadius: 150, 
      orbitSpeed: 1.4, 
      angle: 120, 
      description: 'Dynamic programming language for interactive web experiences', 
      expertise: 95,
      projects: ['Web Applications', 'Interactive UIs', 'Dynamic Content'],
      keyFeatures: ['ES6+', 'Async/Await', 'DOM Manipulation', 'Event Handling'],
      experienceYears: 8
    },
    { 
      id: 'html5', 
      name: 'HTML5', 
      category: 'Frontend', 
      color: '#E34F26', 
      size: 54, 
      orbitRadius: 140, 
      orbitSpeed: 1.5, 
      angle: 200, 
      description: 'Modern markup language for structuring web content and applications', 
      expertise: 98,
      projects: ['Semantic Web', 'Accessibility-focused Sites', 'PWAs'],
      keyFeatures: ['Semantic Elements', 'Accessibility', 'Media Support', 'Canvas API'],
      experienceYears: 10
    },
    
    // Frontend - Styling
    { 
      id: 'css3', 
      name: 'CSS3', 
      category: 'Frontend', 
      color: '#1572B6', 
      size: 56, 
      orbitRadius: 170, 
      orbitSpeed: 1.2, 
      angle: 280, 
      description: 'Advanced styling language for modern responsive web design', 
      expertise: 90,
      projects: ['Responsive Designs', 'Animation Libraries', 'Modern Layouts'],
      keyFeatures: ['Flexbox', 'Grid', 'Animations', 'Custom Properties'],
      experienceYears: 8
    },
    { 
      id: 'tailwind', 
      name: 'Tailwind CSS', 
      category: 'Frontend', 
      color: '#06B6D4', 
      size: 50, 
      orbitRadius: 190, 
      orbitSpeed: 1.0, 
      angle: 60, 
      description: 'Utility-first CSS framework for rapid UI development', 
      expertise: 88,
      projects: ['Modern Dashboards', 'Landing Pages', 'Component Libraries'],
      keyFeatures: ['Utility Classes', 'Responsive Design', 'Custom Themes', 'JIT Compilation'],
      experienceYears: 3
    },
    { 
      id: 'sass', 
      name: 'Sass/SCSS', 
      category: 'Frontend', 
      color: '#CC6699', 
      size: 48, 
      orbitRadius: 210, 
      orbitSpeed: 0.9, 
      angle: 140, 
      description: 'CSS preprocessor with variables, nesting, and advanced features', 
      expertise: 85,
      projects: ['Large Stylesheets', 'Design Systems', 'Theme Management'],
      keyFeatures: ['Variables', 'Mixins', 'Nesting', 'Functions'],
      experienceYears: 5
    },
    { 
      id: 'bootstrap', 
      name: 'Bootstrap', 
      category: 'Frontend', 
      color: '#7952B3', 
      size: 46, 
      orbitRadius: 230, 
      orbitSpeed: 0.8, 
      angle: 220, 
      description: 'Popular CSS framework for responsive and mobile-first development', 
      expertise: 80,
      projects: ['Rapid Prototypes', 'Admin Dashboards', 'Business Websites'],
      keyFeatures: ['Grid System', 'Components', 'Responsive Utilities', 'JavaScript Plugins'],
      experienceYears: 6
    },
    
    // Frontend - Build Tools & Libraries
    { 
      id: 'webpack', 
      name: 'Webpack', 
      category: 'Frontend', 
      color: '#8DD6F9', 
      size: 44, 
      orbitRadius: 250, 
      orbitSpeed: 0.7, 
      angle: 320, 
      description: 'Module bundler for modern JavaScript applications', 
      expertise: 78,
      projects: ['Build Optimization', 'Code Splitting', 'Asset Management'],
      keyFeatures: ['Module Bundling', 'Code Splitting', 'Loaders', 'Plugins'],
      experienceYears: 4
    },
    { 
      id: 'vite', 
      name: 'Vite', 
      category: 'Frontend', 
      color: '#646CFF', 
      size: 46, 
      orbitRadius: 270, 
      orbitSpeed: 0.6, 
      angle: 20, 
      description: 'Fast build tool with instant HMR for modern web development', 
      expertise: 85,
      projects: ['React Apps', 'Vue Applications', 'Fast Development'],
      keyFeatures: ['Fast HMR', 'ES Modules', 'Optimized Builds', 'Plugin System'],
      experienceYears: 2
    },
    { 
      id: 'jquery', 
      name: 'jQuery', 
      category: 'Frontend', 
      color: '#0769AD', 
      size: 42, 
      orbitRadius: 160, 
      orbitSpeed: 1.1, 
      angle: 100, 
      description: 'Fast and lightweight JavaScript library for DOM manipulation', 
      expertise: 75,
      projects: ['Legacy Systems', 'Quick Prototypes', 'DOM Manipulation'],
      keyFeatures: ['DOM Manipulation', 'AJAX', 'Animations', 'Cross-browser'],
      experienceYears: 7
    },
    { 
      id: 'redux', 
      name: 'Redux', 
      category: 'Frontend', 
      color: '#764ABC', 
      size: 48, 
      orbitRadius: 220, 
      orbitSpeed: 0.9, 
      angle: 180, 
      description: 'Predictable state container for JavaScript applications', 
      expertise: 82,
      projects: ['Complex State Management', 'Large Applications', 'Predictable Updates'],
      keyFeatures: ['Predictable State', 'DevTools', 'Middleware', 'Time Travel'],
      experienceYears: 4
    },
    { 
      id: 'graphql', 
      name: 'GraphQL', 
      category: 'Frontend', 
      color: '#E10098', 
      size: 44, 
      orbitRadius: 240, 
      orbitSpeed: 0.8, 
      angle: 260, 
      description: 'Query language and runtime for APIs with precise data fetching', 
      expertise: 75,
      projects: ['API Integration', 'Data Fetching', 'Type-safe Queries'],
      keyFeatures: ['Single Endpoint', 'Type System', 'Real-time', 'Introspection'],
      experienceYears: 3
    },
    
    // Backend
    { 
      id: 'nodejs', 
      name: 'Node.js', 
      category: 'Backend', 
      color: '#339933', 
      size: 65, 
      orbitRadius: 160, 
      orbitSpeed: 1.5, 
      angle: 120, 
      description: 'Server-side JavaScript runtime for building scalable network applications', 
      expertise: 92,
      projects: ['API Gateway', 'Microservices Architecture', 'Real-time Gaming Platform'],
      keyFeatures: ['Event-driven', 'Non-blocking I/O', 'NPM Ecosystem', 'Express.js'],
      experienceYears: 7
    },
    { 
      id: 'python', 
      name: 'Python', 
      category: 'Backend', 
      color: '#3776AB', 
      size: 58, 
      orbitRadius: 240, 
      orbitSpeed: 0.7, 
      angle: 200, 
      description: 'Versatile programming language for AI, web development, and data science', 
      expertise: 90,
      projects: ['Machine Learning Pipeline', 'Data Analytics Platform', 'Web Scraping Service'],
      keyFeatures: ['Django/Flask', 'Machine Learning', 'Data Science', 'Automation'],
      experienceYears: 8
    },
    { 
      id: 'java', 
      name: 'Java', 
      category: 'Backend', 
      color: '#ED8B00', 
      size: 52, 
      orbitRadius: 200, 
      orbitSpeed: 1.1, 
      angle: 280, 
      description: 'Enterprise application development with robust performance and security', 
      expertise: 85,
      projects: ['Enterprise Banking System', 'Supply Chain Management'],
      keyFeatures: ['Spring Framework', 'JVM Ecosystem', 'Enterprise Security', 'Microservices'],
      experienceYears: 6
    },
    { 
      id: 'csharp', 
      name: 'C#', 
      category: 'Backend', 
      color: '#239120', 
      size: 54, 
      orbitRadius: 220, 
      orbitSpeed: 0.8, 
      angle: 20, 
      description: '.NET ecosystem for building scalable Windows and cross-platform applications', 
      expertise: 80,
      projects: ['Enterprise Software', 'Windows Applications', 'Web APIs'],
      keyFeatures: ['.NET Core', 'Entity Framework', 'ASP.NET', 'LINQ'],
      experienceYears: 5
    },
    { 
      id: 'go', 
      name: 'Go', 
      category: 'Backend', 
      color: '#00ADD8', 
      size: 50, 
      orbitRadius: 180, 
      orbitSpeed: 1.2, 
      angle: 100, 
      description: 'Concurrent programming language for high-performance backend services', 
      expertise: 78,
      projects: ['Microservices', 'CLI Tools', 'Network Services'],
      keyFeatures: ['Concurrency', 'Fast Compilation', 'Static Typing', 'Garbage Collection'],
      experienceYears: 3
    },
    { 
      id: 'rust', 
      name: 'Rust', 
      category: 'Backend', 
      color: '#000000', 
      size: 48, 
      orbitRadius: 260, 
      orbitSpeed: 0.6, 
      angle: 60, 
      description: 'Systems programming language with memory safety and zero-cost abstractions', 
      expertise: 70,
      projects: ['System Tools', 'Performance-critical Services'],
      keyFeatures: ['Memory Safety', 'Zero-cost Abstractions', 'Concurrency', 'Performance'],
      experienceYears: 2
    },
    { 
      id: 'php', 
      name: 'PHP', 
      category: 'Backend', 
      color: '#777BB4', 
      size: 46, 
      orbitRadius: 190, 
      orbitSpeed: 1.0, 
      angle: 180, 
      description: 'Server-side scripting language for web development and APIs', 
      expertise: 75,
      projects: ['WordPress Sites', 'Laravel Applications', 'Legacy Systems'],
      keyFeatures: ['Laravel/Symfony', 'WordPress', 'Server-side Rendering', 'Database Integration'],
      experienceYears: 4
    },
    
    // Cloud & DevOps
    { 
      id: 'aws', 
      name: 'AWS', 
      category: 'Cloud', 
      color: '#FF9900', 
      size: 70, 
      orbitRadius: 280, 
      orbitSpeed: 0.6, 
      angle: 140, 
      description: 'Comprehensive cloud computing platform with 200+ services', 
      expertise: 88,
      projects: ['Serverless Architecture', 'Auto-scaling Infrastructure', 'Multi-region Deployment'],
      keyFeatures: ['EC2/Lambda', 'S3/RDS', 'CloudFormation', 'Cost Optimization'],
      experienceYears: 5
    },
    { 
      id: 'azure', 
      name: 'Azure', 
      category: 'Cloud', 
      color: '#0078D4', 
      size: 62, 
      orbitRadius: 260, 
      orbitSpeed: 0.9, 
      angle: 220, 
      description: 'Microsoft cloud services and solutions for enterprise integration', 
      expertise: 80,
      projects: ['Hybrid Cloud Setup', 'DevOps Pipeline', 'AI/ML Services'],
      keyFeatures: ['App Services', 'Azure Functions', 'DevOps Integration', 'AI Services'],
      experienceYears: 4
    },
    { 
      id: 'gcp', 
      name: 'Google Cloud', 
      category: 'Cloud', 
      color: '#4285F4', 
      size: 58, 
      orbitRadius: 300, 
      orbitSpeed: 0.5, 
      angle: 300, 
      description: 'Google Cloud Platform services with advanced AI and analytics', 
      expertise: 75,
      projects: ['BigQuery Analytics', 'Kubernetes Deployment', 'Vision API Integration'],
      keyFeatures: ['BigQuery', 'Kubernetes Engine', 'AI/ML APIs', 'Global Network'],
      experienceYears: 3
    },
    { 
      id: 'docker', 
      name: 'Docker', 
      category: 'Cloud', 
      color: '#2496ED', 
      size: 55, 
      orbitRadius: 200, 
      orbitSpeed: 1.1, 
      angle: 320, 
      description: 'Containerization platform for consistent deployment across environments', 
      expertise: 85,
      projects: ['Microservices Deployment', 'CI/CD Pipelines', 'Development Environments'],
      keyFeatures: ['Containerization', 'Docker Compose', 'Multi-stage Builds', 'Container Orchestration'],
      experienceYears: 4
    },
    { 
      id: 'kubernetes', 
      name: 'Kubernetes', 
      category: 'Cloud', 
      color: '#326CE5', 
      size: 60, 
      orbitRadius: 320, 
      orbitSpeed: 0.4, 
      angle: 40, 
      description: 'Container orchestration platform for automating deployment and scaling', 
      expertise: 82,
      projects: ['Container Orchestration', 'Auto-scaling Services', 'Multi-cloud Deployment'],
      keyFeatures: ['Pod Management', 'Service Discovery', 'Auto-scaling', 'Rolling Updates'],
      experienceYears: 3
    },
    
    // AI/ML
    { 
      id: 'tensorflow', 
      name: 'TensorFlow', 
      category: 'AI/ML', 
      color: '#FF6F00', 
      size: 55, 
      orbitRadius: 320, 
      orbitSpeed: 0.4, 
      angle: 80, 
      description: 'Machine learning and neural networks for production-ready AI solutions', 
      expertise: 85,
      projects: ['Computer Vision System', 'Predictive Analytics', 'Recommendation Engine'],
      keyFeatures: ['Deep Learning', 'Computer Vision', 'Natural Language', 'Production Deployment'],
      experienceYears: 4
    },
    { 
      id: 'pytorch', 
      name: 'PyTorch', 
      category: 'AI/ML', 
      color: '#EE4C2C', 
      size: 52, 
      orbitRadius: 290, 
      orbitSpeed: 0.8, 
      angle: 160, 
      description: 'Deep learning research and production with dynamic computational graphs', 
      expertise: 78,
      projects: ['Research Prototypes', 'Custom Neural Networks', 'Transfer Learning'],
      keyFeatures: ['Dynamic Graphs', 'Research Friendly', 'GPU Acceleration', 'Model Deployment'],
      experienceYears: 3
    },
    { 
      id: 'pandas', 
      name: 'Pandas', 
      category: 'AI/ML', 
      color: '#150458', 
      size: 48, 
      orbitRadius: 250, 
      orbitSpeed: 0.9, 
      angle: 240, 
      description: 'Data manipulation and analysis library for Python data science workflows', 
      expertise: 90,
      projects: ['Data Analysis Pipeline', 'ETL Processes', 'Business Intelligence'],
      keyFeatures: ['Data Manipulation', 'Time Series', 'Data Cleaning', 'Statistical Analysis'],
      experienceYears: 5
    },
    { 
      id: 'scikit-learn', 
      name: 'Scikit-learn', 
      category: 'AI/ML', 
      color: '#F7931E', 
      size: 50, 
      orbitRadius: 270, 
      orbitSpeed: 0.7, 
      angle: 320, 
      description: 'Machine learning library for classification, regression, and clustering', 
      expertise: 88,
      projects: ['Predictive Models', 'Classification Systems', 'Data Mining'],
      keyFeatures: ['Classification', 'Regression', 'Clustering', 'Dimensionality Reduction'],
      experienceYears: 4
    },
    { 
      id: 'opencv', 
      name: 'OpenCV', 
      category: 'AI/ML', 
      color: '#5C3EE8', 
      size: 46, 
      orbitRadius: 310, 
      orbitSpeed: 0.5, 
      angle: 0, 
      description: 'Computer vision library for image and video processing applications', 
      expertise: 80,
      projects: ['Image Recognition', 'Video Analysis', 'Object Detection'],
      keyFeatures: ['Image Processing', 'Object Detection', 'Feature Extraction', 'Video Analysis'],
      experienceYears: 3
    },

    // Databases
    { 
      id: 'postgresql', 
      name: 'PostgreSQL', 
      category: 'Database', 
      color: '#336791', 
      size: 58, 
      orbitRadius: 340, 
      orbitSpeed: 0.3, 
      angle: 120, 
      description: 'Advanced open-source relational database with powerful features', 
      expertise: 85,
      projects: ['Enterprise Applications', 'Data Warehousing', 'Financial Systems'],
      keyFeatures: ['ACID Compliance', 'JSON Support', 'Full-text Search', 'Extensibility'],
      experienceYears: 5
    },
    { 
      id: 'mongodb', 
      name: 'MongoDB', 
      category: 'Database', 
      color: '#47A248', 
      size: 54, 
      orbitRadius: 190, 
      orbitSpeed: 1.0, 
      angle: 260, 
      description: 'NoSQL document database for flexible and scalable data storage', 
      expertise: 82,
      projects: ['Content Management', 'Real-time Analytics', 'Mobile Backend'],
      keyFeatures: ['Document Storage', 'Horizontal Scaling', 'Flexible Schema', 'Aggregation Pipeline'],
      experienceYears: 4
    },
    { 
      id: 'redis', 
      name: 'Redis', 
      category: 'Database', 
      color: '#DC382D', 
      size: 50, 
      orbitRadius: 230, 
      orbitSpeed: 0.8, 
      angle: 340, 
      description: 'In-memory data structure store for caching and real-time applications', 
      expertise: 80,
      projects: ['Caching Layer', 'Session Management', 'Real-time Features'],
      keyFeatures: ['In-memory Storage', 'Data Structures', 'Pub/Sub', 'Clustering'],
      experienceYears: 4
    },
    { 
      id: 'mysql', 
      name: 'MySQL', 
      category: 'Database', 
      color: '#4479A1', 
      size: 52, 
      orbitRadius: 210, 
      orbitSpeed: 0.9, 
      angle: 20, 
      description: 'Popular open-source relational database management system', 
      expertise: 78,
      projects: ['Web Applications', 'E-commerce Sites', 'Content Management'],
      keyFeatures: ['SQL Compliance', 'Replication', 'Partitioning', 'Full-text Search'],
      experienceYears: 6
    }
  ];

  // Function to calculate distance between two points
  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Enhanced collision avoidance function
  const getAdjustedPosition = (tech: TechNode, allTechs: TechNode[], currentRotation: number) => {
    const angle = (tech.angle + currentRotation * tech.orbitSpeed) * (Math.PI / 180);
    let x = Math.cos(angle) * tech.orbitRadius;
    let y = Math.sin(angle) * tech.orbitRadius;

    // Minimum distance based on node sizes plus buffer
    const basePadding = 30;
    let adjustmentAttempts = 0;
    const maxAttempts = 5;

    while (adjustmentAttempts < maxAttempts) {
      let hasCollision = false;
      
      for (const otherTech of allTechs) {
        if (otherTech.id === tech.id) continue;
        
        const otherAngle = (otherTech.angle + currentRotation * otherTech.orbitSpeed) * (Math.PI / 180);
        const otherX = Math.cos(otherAngle) * otherTech.orbitRadius;
        const otherY = Math.sin(otherAngle) * otherTech.orbitRadius;
        
        const distance = calculateDistance(x, y, otherX, otherY);
        const requiredDistance = (tech.size + otherTech.size) / 2 + basePadding;
        
        if (distance < requiredDistance) {
          hasCollision = true;
          // Push away from collision with more force
          const pushAngle = Math.atan2(y - otherY, x - otherX);
          const pushForce = requiredDistance - distance + 10;
          x += Math.cos(pushAngle) * pushForce * 0.5;
          y += Math.sin(pushAngle) * pushForce * 0.5;
          break;
        }
      }
      
      if (!hasCollision) break;
      adjustmentAttempts++;
    }

    return { x, y };
  };

  // Detect if mobile (simple check)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      Frontend: '#61DAFB',
      Backend: '#339933',
      Cloud: '#FF9900',
      'AI/ML': '#FF6F00',
      Database: '#336791'
    };
    return colors[category as keyof typeof colors] || '#00D4FF';
  };

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  // Update node size and orbit sizing for mobile
  const nodeSizeFactor = isMobile ? 0.7 : 1;
  const orbitHeight = isMobile ? 370 : 800;

  return (
    <section id="technology" className="py-10 md:py-20 relative">
      <div className="container mx-auto px-2 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Our Technology <span className="text-neon">Galaxy</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-xl md:max-w-3xl mx-auto">
            Explore our constellation of cutting-edge technologies. Each planet represents 
            our expertise in transforming complex challenges into elegant solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-2 md:px-6 md:py-3 rounded-lg transition-all text-sm md:text-base ${
              selectedCategory === 'all'
                ? 'neon-border text-neon bg-cyan-500/10'
                : 'glassmorphism text-gray-300 hover:text-white'
            }`}
          >
            All Technologies
          </button>
          {['Frontend', 'Backend', 'Cloud', 'AI/ML', 'Database'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg transition-all text-sm md:text-base ${
                selectedCategory === category
                  ? 'neon-border text-neon bg-cyan-500/10'
                  : 'glassmorphism text-gray-300 hover:text-white'
              }`}
            >
              <div 
                className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                style={{ backgroundColor: getCategoryColor(category) }}
              ></div>
              {category}
            </button>
          ))}
        </div>

        <div className="relative">
          {/* Central Hub with horizontally scrollable container for mobile */}
          <div
            className={`tech-orbit-container relative mx-auto flex items-center justify-center`}
            style={{
              width: isMobile ? '100vw' : '100%',
              minWidth: isMobile ? '370px' : undefined,
              maxWidth: isMobile ? '100vw' : undefined,
              height: `${orbitHeight}px`,
              overflowX: isMobile ? 'auto' : 'visible',
              overflowY: 'visible',
              position: 'relative',
              touchAction: isMobile ? 'pan-x' : undefined,
            }}
          >
            {/* Scrollable wrapper for mobile: absolute positioned tech nodes/fixed size container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-20 h-20 md:w-32 md:h-32 rounded-full glassmorphism neon-border animate-pulse-glow flex items-center justify-center pointer-events-auto"
              >
                <span className="text-neon font-bold text-[1rem] md:text-lg">CORE</span>
              </div>
            </div>
            {/* Technology Nodes */}
            {filteredTechnologies.map((tech) => {
              const position = getAdjustedPosition(tech, filteredTechnologies, rotation);
              return (
                <div
                  key={tech.id}
                  className="absolute tech-node"
                  style={{
                    transform: `translate(${position.x * (isMobile ? 0.6 : 1)}px, ${position.y * (isMobile ? 0.6 : 1)}px)`,
                    transition: 'all 0.3s ease',
                    zIndex: 3,
                  }}
                >
                  {/* Technology Node */}
                  <div
                    className="relative group cursor-pointer"
                    style={{
                      width: tech.size * nodeSizeFactor,
                      height: tech.size * nodeSizeFactor,
                    }}
                    onClick={() => setSelectedTech(tech)}
                  >
                    <div 
                      className="w-full h-full rounded-full glassmorphism border-2 flex items-center justify-center group-hover:animate-pulse-glow transition-all"
                      style={{ 
                        borderColor: tech.color,
                        boxShadow: `0 0 20px ${tech.color}40`
                      }}
                    >
                      <span className="text-white text-[10px] md:text-xs font-bold text-center px-1 md:px-2">
                        {tech.name}
                      </span>
                    </div>
                    {/* Expertise level indicator */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 md:w-8 h-1 bg-gray-600 rounded">
                        <div 
                          className="h-full rounded transition-all"
                          style={{ 
                            width: `${tech.expertise}%`,
                            backgroundColor: tech.color
                          }}
                        ></div>
                      </div>
                    </div>
                    {/* Hover tooltip (fixes showing on click for mobile) */}
                    {isMobile ? (
                      selectedTech?.id === tech.id && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-opacity pointer-events-none z-10">
                          <div className="glassmorphism p-3 rounded text-white text-xs whitespace-nowrap">
                            <div className="font-bold">{tech.name}</div>
                            <div className="text-gray-300">{tech.expertise}% Expertise</div>
                            <div className="text-gray-400">{tech.experienceYears} years experience</div>
                          </div>
                        </div>
                      )
                    ) : (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        <div className="glassmorphism p-3 rounded text-white text-xs whitespace-nowrap">
                          <div className="font-bold">{tech.name}</div>
                          <div className="text-gray-300">{tech.expertise}% Expertise</div>
                          <div className="text-gray-400">{tech.experienceYears} years experience</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Category Legend */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 md:mt-12">
            {['Frontend', 'Backend', 'Cloud', 'AI/ML', 'Database'].map((category) => (
              <div key={category} className="flex items-center glassmorphism px-2 md:px-4 py-1 md:py-2 rounded-lg">
                <div 
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full mr-2"
                  style={{ backgroundColor: getCategoryColor(category) }}
                ></div>
                <span className="text-white text-xs md:text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Technology Details */}
        {selectedTech && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glassmorphism max-w-2xl w-full p-6 md:p-8 rounded-xl neon-border max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-3xl font-bold text-white">{selectedTech.name}</h3>
                <button 
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-6">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${selectedTech.color}20`,
                    color: selectedTech.color,
                    border: `1px solid ${selectedTech.color}40`
                  }}
                >
                  {selectedTech.category}
                </span>
                <span className="ml-3 text-gray-400">{selectedTech.experienceYears} years experience</span>
              </div>

              <p className="text-gray-300 mb-6 text-lg">{selectedTech.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {selectedTech.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedTech.color }}></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Recent Projects</h4>
                  <div className="space-y-2">
                    {selectedTech.projects.map((project, index) => (
                      <div key={index} className="glassmorphism/50 p-2 rounded text-sm text-gray-300">
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Expertise Level</span>
                  <span className="text-white">{selectedTech.expertise}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all"
                    style={{ 
                      width: `${selectedTech.expertise}%`,
                      backgroundColor: selectedTech.color
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  className="flex-1 neon-border px-6 py-3 rounded-lg text-neon hover:bg-cyan-500/10 transition-all"
                  onClick={() => setSelectedTech(null)}
                >
                  Close Details
                </button>
                <button 
                  className="flex-1 glassmorphism px-6 py-3 rounded-lg text-white hover:bg-gray-500/20 transition-all"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechGalaxy;
