import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  Code,
  Database,
  Cloud,
  Server,
  Globe,
  Zap
} from 'lucide-react';

const Syllabus = () => {
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const modules = [
    {
      id: 'java-core',
      title: 'Java Core Programming',
      duration: '4 weeks',
      icon: Code,
      description: 'Master the fundamentals of Java programming language',
      topics: [
        'Java Basics and OOP Concepts',
        'Data Types, Variables, and Operators',
        'Control Structures and Loops',
        'Arrays and Collections Framework',
        'Exception Handling and File I/O',
        'Generics and Lambda Expressions',
        'Multithreading and Concurrency',
        'Java 8+ Features (Streams, Optional)'
      ],
      projects: ['Student Management System', 'Bank Account Application']
    },
    {
      id: 'spring-framework',
      title: 'Spring Framework & Spring Boot',
      duration: '6 weeks',
      icon: Server,
      description: 'Learn Spring Framework and build modern applications',
      topics: [
        'Spring Core Concepts (IoC, DI)',
        'Spring MVC Framework',
        'Spring Boot Auto-configuration',
        'RESTful Web Services',
        'Spring Data JPA and Hibernate',
        'Spring Security and Authentication',
        'Spring Cloud and Microservices',
        'Testing with Spring Boot Test'
      ],
      projects: ['E-commerce API', 'Task Management System']
    },
    {
      id: 'database',
      title: 'Database & ORM',
      duration: '3 weeks',
      icon: Database,
      description: 'Master database design and ORM technologies',
      topics: [
        'SQL Fundamentals and Advanced Queries',
        'Database Design and Normalization',
        'MySQL/PostgreSQL Administration',
        'Hibernate ORM Framework',
        'JPA Annotations and Relationships',
        'Database Transactions and ACID',
        'Query Optimization and Performance',
        'NoSQL Databases (MongoDB)'
      ],
      projects: ['Library Management System', 'Inventory Management']
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      duration: '5 weeks',
      icon: Globe,
      description: 'Build modern web interfaces with React',
      topics: [
        'HTML5, CSS3, and JavaScript ES6+',
        'React.js Fundamentals and Hooks',
        'State Management (Redux/Context)',
        'React Router and Navigation',
        'API Integration and Axios',
        'CSS Frameworks (Tailwind CSS)',
        'Responsive Design and PWA',
        'Testing with Jest and React Testing Library'
      ],
      projects: ['E-commerce Frontend', 'Dashboard Application']
    },
    {
      id: 'aws-cloud',
      title: 'AWS Cloud Computing',
      duration: '4 weeks',
      icon: Cloud,
      description: 'Deploy and manage applications on AWS',
      topics: [
        'AWS Fundamentals and IAM',
        'EC2, VPC, and Security Groups',
        'S3 Storage and CloudFront CDN',
        'RDS Database Services',
        'Lambda Functions and Serverless',
        'Elastic Beanstalk and ECS',
        'CloudWatch and Monitoring',
        'AWS CLI and SDK Integration'
      ],
      projects: ['Cloud Migration Project', 'Serverless Application']
    },
    {
      id: 'kafka-microservices',
      title: 'Apache Kafka & Microservices',
      duration: '3 weeks',
      icon: Zap,
      description: 'Build scalable distributed systems',
      topics: [
        'Microservices Architecture Patterns',
        'Apache Kafka Fundamentals',
        'Event-Driven Architecture',
        'Service Discovery and Load Balancing',
        'API Gateway and Circuit Breakers',
        'Distributed Tracing and Monitoring',
        'Containerization with Docker',
        'Kubernetes Orchestration'
      ],
      projects: ['Event Streaming Platform', 'Microservices E-commerce']
    }
  ];

  const courseHighlights = [
    {
      icon: Clock,
      title: 'Duration',
      value: '25 Weeks',
      description: 'Comprehensive program with flexible scheduling'
    },
    {
      icon: Users,
      title: 'Batch Size',
      value: '15 Students',
      description: 'Small batches for personalized attention'
    },
    {
      icon: Award,
      title: 'Certification',
      value: 'Industry Recognized',
      description: 'Get certified upon completion'
    },
    {
      icon: BookOpen,
      title: 'Projects',
      value: '12+ Projects',
      description: 'Real-world project experience'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Java Full Stack Syllabus</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive curriculum designed to transform you into a complete Java Full Stack Developer. 
            Learn from basics to advanced technologies with hands-on projects.
          </p>
        </div>
      </section>
  
      {/* Course Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Course Modules</h2>
            <p className="section-subtitle">
              Structured learning path covering all essential technologies for Java Full Stack Development
            </p>
          </div>
          
          <div className="space-y-6">
            {modules.map((module) => {
              const Icon = module.icon;
              const isExpanded = expandedModules[module.id];
              
              return (
                <div key={module.id} className="card">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{module.title}</h3>
                        <p className="text-gray-600">{module.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {module.duration}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Topics Covered</h4>
                          <ul className="space-y-2">
                            {module.topics.map((topic, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Hands-on Projects</h4>
                          <ul className="space-y-2">
                            {module.projects.map((project, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Course Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <div className="text-2xl font-bold text-primary-600 mb-2">{highlight.value}</div>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What You'll Learn</h2>
            <p className="section-subtitle">
              By the end of this program, you'll have the skills to build complete web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Build RESTful APIs with Spring Boot</li>
                <li>• Implement database operations with JPA</li>
                <li>• Handle authentication and authorization</li>
                <li>• Deploy applications to cloud platforms</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Create responsive web interfaces with React</li>
                <li>• Manage application state effectively</li>
                <li>• Integrate with backend APIs</li>
                <li>• Implement modern UI/UX patterns</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">DevOps & Cloud</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Deploy applications on AWS</li>
                <li>• Implement CI/CD pipelines</li>
                <li>• Monitor and scale applications</li>
                <li>• Use containerization technologies</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Database Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Design and optimize databases</li>
                <li>• Work with SQL and NoSQL databases</li>
                <li>• Implement data access patterns</li>
                <li>• Handle data migrations</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Microservices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Design microservices architecture</li>
                <li>• Implement event-driven systems</li>
                <li>• Use Apache Kafka for messaging</li>
                <li>• Build scalable distributed systems</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Career Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Version control with Git</li>
                <li>• Agile development practices</li>
                <li>• Code review and testing</li>
                <li>• Interview preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join our comprehensive Java Full Stack training program and transform your career in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/course/spring-boot" className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Course Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Syllabus; 