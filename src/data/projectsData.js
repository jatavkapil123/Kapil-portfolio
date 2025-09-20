export const projectsData = [
  {
    id: 1,
    slug: "three-tier-blogging-aws",
    image: "project1.png",
    title: "Wanderlust: End-to-End MERN Stack Deployment on AWS EKS using DevSecOps + GitOps",
    description: "A real-world MERN travel blog application deployed with complete CI/CD pipeline using DevSecOps and GitOps practices. Features Jenkins, Kubernetes, ArgoCD, and comprehensive monitoring on AWS EKS.",
    duration: "15 April 2025 - 10 July 2025",
    techStack: "GitHub (Code), Docker (Containerization), Jenkins (CI), OWASP (Dependency Check), SonarQube (Quality), Trivy (Filesystem Scan), ArgoCD (CD), Redis (Caching), AWS EKS (Kubernetes), Helm (Monitoring using Grafana and Prometheus), Terraform, Ansible, Node.js, React, MongoDB",
    overview: "Wanderlust is a MERN stack travel blog website deployed using enterprise-grade DevSecOps practices. This project demonstrates how tech companies deploy applications with complete CI/CD automation, security scanning, and GitOps workflows on AWS EKS.",
    detailedDescription: `
      Wanderlust is a simple MERN travel blog website that allows users to explore, share, and manage travel stories. But instead of stopping at coding, this project focuses on production deployment with modern CI/CD setup.

      🚀 **Complete DevSecOps Pipeline Flow:**
      1️⃣ Developer pushes code → GitHub
      2️⃣ Jenkins CI Pipeline → Builds Docker image, runs tests, scans code & dependencies
      3️⃣ Trivy & OWASP → Scan for vulnerabilities
      4️⃣ SonarQube → Static code analysis & quality gates
      5️⃣ Docker Hub → Pushes built image
      6️⃣ ArgoCD CD Pipeline → Syncs GitOps repo with Kubernetes cluster
      7️⃣ AWS EKS → Deploys containers using Helm charts
      8️⃣ Prometheus + Grafana → Monitors workloads

      This project is perfect for DevOps/Cloud enthusiasts, developers wanting to master Jenkins, Kubernetes, ArgoCD, and AWS, and anyone upskilling in DevSecOps practices.

      **Infrastructure Setup:**
      - Master Node (Jenkins + eksctl + Docker): t2.large instance
      - Worker Node (Jenkins Agent + Docker): t2.large instance
      - AWS EKS cluster with managed node groups
      - Complete monitoring stack with Prometheus & Grafana
    `,
    architecture: {
      frontend: "React + Tailwind CSS travel blog interface deployed on EKS",
      backend: "Express.js REST API with MongoDB integration on Kubernetes",
      database: "MongoDB for travel stories and Redis for caching",
      infrastructure: "AWS EKS cluster (v1.30) with managed node groups in us-west-1",
      cicd: "Jenkins CI pipeline with ArgoCD GitOps deployment",
      monitoring: "Prometheus + Grafana stack with custom dashboards"
    },
    keyFeatures: [
      "Complete MERN stack travel blog application",
      "Jenkins CI pipeline with automated testing and builds",
      "DevSecOps integration (OWASP, SonarQube, Trivy scanning)",
      "GitOps deployment with ArgoCD auto-sync",
      "AWS EKS cluster orchestration with Helm charts",
      "Comprehensive monitoring (Prometheus + Grafana)",
      "Redis caching for performance optimization",
      "Email notifications for pipeline status",
      "Auto-healing deployments with drift detection",
      "Production-ready security and quality gates"
    ],
    responsibilities: [
      "Developed complete MERN stack travel blog application with React frontend and Express backend",
      "Set up AWS EKS cluster (v1.30) using eksctl with managed node groups in us-west-1 region",
      "Configured Jenkins master-worker architecture on t2.large EC2 instances with Docker integration",
      "Built comprehensive CI pipeline: Code → Build → Test → Security Scan → Docker Push",
      "Integrated DevSecOps tools: OWASP dependency check, SonarQube quality gates, Trivy vulnerability scanning",
      "Implemented GitOps workflow with ArgoCD for automated Kubernetes deployments and drift detection",
      "Deployed application stack using Kubernetes manifests: Frontend, Backend, MongoDB, Redis",
      "Set up monitoring infrastructure with Helm: Prometheus for metrics, Grafana for visualization",
      "Configured email notifications for CI/CD pipeline status and automated cluster cleanup procedures",
      "Created production-ready deployment with auto-scaling, health checks, and zero-downtime updates"
    ],
    challenges: [
      {
        challenge: "Integrating multiple DevSecOps tools in CI/CD pipeline",
        solution: "Created sequential Jenkins pipeline stages with proper error handling and quality gates for OWASP, SonarQube, and Trivy scans"
      },
      {
        challenge: "Managing Kubernetes deployments across multiple services (Frontend, Backend, MongoDB, Redis)",
        solution: "Implemented GitOps with ArgoCD for declarative deployments, auto-sync, and self-healing capabilities"
      },
      {
        challenge: "Setting up comprehensive monitoring for MERN stack on Kubernetes",
        solution: "Deployed Prometheus + Grafana using Helm charts with custom dashboards for application and cluster metrics"
      },
      {
        challenge: "Ensuring production-ready security and performance",
        solution: "Integrated Redis caching, implemented proper resource limits, and configured automated vulnerability scanning at every stage"
      }
    ],
    technologies: ["GitHub", "Docker", "Jenkins", "OWASP", "SonarQube", "Trivy", "ArgoCD", "Redis", "AWS EKS", "Helm", "Prometheus", "Grafana", "Terraform", "Ansible", "Node.js", "React", "MongoDB", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "https://github.com/jatavkapil123",
    blogUrl: "https://medium.com/@kapiljatav4991/wanderlust-your-ultimate-travel-blog-with-mern-devsecops-fa6bd65e8c42",
    featured: true,
    category: "DevOps",
    metrics: {
      pipelineAutomation: "100% automated CI/CD from code to production",
      securityScanning: "Multi-layer security: OWASP + SonarQube + Trivy",
      deploymentStrategy: "GitOps with auto-sync and self-healing",
      monitoring: "Real-time metrics with Prometheus + Grafana dashboards",
      infrastructure: "Production-ready EKS cluster with managed scaling",
      performance: "Redis caching + optimized container orchestration"
    }
  },
  {
    id: 2,
    slug: "azure-devops-aks-pipeline",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop",
    title: "CI/CD Pipeline Deployment with Azure DevOps & AKS",
    description: "Designed and deployed a containerized, multi-service voting application using Azure DevOps CI/CD pipelines and Azure Kubernetes Service (AKS) for scalable orchestration.",
    duration: "Ongoing Project",
    techStack: "Azure DevOps, AKS, Docker, ACR, Python, .NET, Node.js, Redis, PostgreSQL, YAML, Helm",
    overview: "A comprehensive Azure-based DevOps solution demonstrating enterprise-grade CI/CD practices with containerized microservices architecture. This project showcases the power of Azure DevOps for managing complex multi-service applications.",
    detailedDescription: `
      This project implements a complete DevOps workflow using Microsoft Azure services to deploy a distributed voting application. The application consists of multiple microservices written in different technologies, demonstrating polyglot development practices.

      The solution leverages Azure Kubernetes Service (AKS) for container orchestration, Azure Container Registry (ACR) for image management, and Azure DevOps for comprehensive CI/CD pipeline management. The architecture supports horizontal scaling and high availability.

      Key aspects include automated testing, security scanning, infrastructure provisioning, and deployment automation across multiple environments with approval gates and rollback capabilities.
    `,
    architecture: {
      frontend: "Python Flask web application for voting interface",
      worker: ".NET Core worker service for vote processing",
      result: "Node.js application for displaying results",
      storage: "Redis for temporary data and PostgreSQL for persistent storage"
    },
    keyFeatures: [
      "Multi-service containerized application",
      "Azure DevOps CI/CD pipelines",
      "Azure Kubernetes Service (AKS) orchestration",
      "Azure Container Registry integration",
      "Helm charts for deployment management",
      "Automated testing and quality gates",
      "Multi-environment deployment strategy",
      "Infrastructure as Code with ARM templates"
    ],
    responsibilities: [
      "Implemented CI pipelines in Azure DevOps to build, test, and containerize services (Python frontend, .NET worker, Node.js result UI).",
      "Used Docker for containerization and pushed images to Azure Container Registry (ACR).",
      "Provisioned scalable AKS with VM Scale Sets; deployed apps using YAML and Helm.",
      "Automated end-to-end deployment with Azure DevOps CD pipeline, achieving continuous delivery to production on AKS.",
      "Configured Azure Monitor and Application Insights for comprehensive observability.",
      "Implemented automated testing strategies including unit, integration, and end-to-end tests.",
      "Set up branch policies and pull request workflows for code quality assurance."
    ],
    challenges: [
      {
        challenge: "Managing dependencies between microservices",
        solution: "Implemented service mesh with proper health checks and dependency management"
      },
      {
        challenge: "Coordinating deployments across multiple services",
        solution: "Used Helm charts with dependency management and staged deployment approach"
      },
      {
        challenge: "Ensuring consistent environments across dev/staging/prod",
        solution: "Implemented Infrastructure as Code with ARM templates and environment-specific configurations"
      }
    ],
    technologies: ["Azure DevOps", "AKS", "Docker", "ACR", "Python", ".NET", "Node.js", "Redis", "PostgreSQL", "YAML", "Helm", "VM Scale Sets", "CI/CD", "ARM Templates"],
    liveUrl: "#",
    githubUrl: "https://github.com/jatavkapil123",
    featured: true,
    category: "Cloud",
    metrics: {
      buildTime: "Reduced build time by 60%",
      deploymentFrequency: "Daily deployments achieved",
      leadTime: "Feature to production in <2 hours",
      reliability: "99.5% deployment success rate"
    }
  },
  {
    id: 3,
    slug: "azure-chatbot-ai",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    title: "Azure Chatbot with AI Services",
    description: "Intelligent chatbot built using Azure AI services with natural language processing capabilities and seamless user interaction.",
    duration: "3 months",
    techStack: "Azure AI, Bot Framework, Node.js, NLP, Cognitive Services",
    overview: "An intelligent conversational AI solution leveraging Azure's cognitive services to provide natural language understanding and automated customer support capabilities.",
    detailedDescription: `
      This project demonstrates the implementation of a sophisticated chatbot using Microsoft Azure's AI and cognitive services. The bot is designed to handle customer inquiries, provide automated support, and integrate with existing business systems.

      The solution incorporates natural language processing, sentiment analysis, and machine learning capabilities to provide contextual and intelligent responses. The bot can handle multiple conversation flows and maintain context across interactions.

      Integration with Azure Bot Framework enables deployment across multiple channels including web, Microsoft Teams, and mobile applications.
    `,
    architecture: {
      core: "Azure Bot Framework for conversation management",
      ai: "Azure Cognitive Services for NLP and understanding",
      backend: "Node.js application for business logic",
      storage: "Azure Cosmos DB for conversation history"
    },
    keyFeatures: [
      "Natural language understanding with LUIS",
      "Multi-channel deployment capability",
      "Sentiment analysis and emotion detection",
      "Integration with business systems via APIs",
      "Conversation flow management",
      "Analytics and reporting dashboard",
      "Multilingual support",
      "Continuous learning and improvement"
    ],
    responsibilities: [
      "Designed conversation flows and user experience patterns",
      "Implemented natural language processing using Azure LUIS",
      "Integrated with Azure Cognitive Services for enhanced AI capabilities",
      "Developed custom middleware for business logic integration",
      "Set up analytics and monitoring for bot performance",
      "Implemented security and compliance measures for data protection"
    ],
    challenges: [
      {
        challenge: "Understanding user intent with high accuracy",
        solution: "Implemented comprehensive training data sets and continuous model improvement"
      },
      {
        challenge: "Maintaining conversation context across interactions",
        solution: "Designed state management system with Azure Cosmos DB for persistence"
      }
    ],
    technologies: ["Azure AI", "Bot Framework", "Node.js", "NLP", "LUIS", "Cognitive Services", "Cosmos DB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "AI/ML",
    metrics: {
      accuracy: "95% intent recognition accuracy",
      responseTime: "Average response time <500ms",
      satisfaction: "4.5/5 user satisfaction score",
      automation: "80% of queries handled automatically"
    }
  },
  {
    id: 4,
    slug: "react-vite-portfolio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    title: "React + Vite Portfolio Site",
    description: "Modern portfolio website built with React and Vite, featuring responsive design, dark/light mode, and smooth animations.",
    duration: "2 months",
    techStack: "React, Vite, CSS3, JavaScript, Responsive Design",
    overview: "A modern, responsive portfolio website showcasing advanced frontend development skills with React and Vite, featuring dynamic theming and smooth user interactions.",
    detailedDescription: `
      This portfolio website represents a modern approach to personal branding and professional presentation. Built with React and Vite for optimal performance, the site features a clean, professional design with advanced interactive elements.

      The implementation focuses on user experience with smooth animations, responsive design principles, and accessibility compliance. The site includes dynamic content management and optimized performance metrics.

      Advanced features include theme switching, cursor following effects, and optimized loading strategies for enhanced user engagement.
    `,
    architecture: {
      frontend: "React 18 with modern hooks and context",
      bundler: "Vite for fast development and optimized builds",
      styling: "CSS3 with custom properties and animations",
      deployment: "Optimized static site deployment"
    },
    keyFeatures: [
      "Modern React 18 implementation",
      "Vite for lightning-fast development",
      "Dark/Light theme switching",
      "Responsive design for all devices",
      "Smooth scroll animations",
      "Interactive cursor effects",
      "Optimized performance metrics",
      "SEO-friendly structure"
    ],
    responsibilities: [
      "Designed and implemented modern UI/UX patterns",
      "Developed responsive layouts for all screen sizes",
      "Implemented theme switching with CSS custom properties",
      "Created smooth animations and micro-interactions",
      "Optimized performance and loading times",
      "Ensured accessibility compliance and best practices"
    ],
    challenges: [
      {
        challenge: "Achieving smooth animations across different devices",
        solution: "Implemented CSS transforms and optimized animation performance with will-change properties"
      },
      {
        challenge: "Managing theme consistency across components",
        solution: "Used CSS custom properties with React context for centralized theme management"
      }
    ],
    technologies: ["React", "Vite", "CSS3", "JavaScript", "Responsive Design", "Performance Optimization"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
    metrics: {
      performance: "95+ Lighthouse performance score",
      loadTime: "First contentful paint <1.5s",
      accessibility: "100% accessibility compliance",
      responsiveness: "Perfect responsive design across all devices"
    }
  }
];

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};