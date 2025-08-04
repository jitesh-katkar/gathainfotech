import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  BookOpen, 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Globe, 
  Zap,
  ArrowRight,
  Play,
  Download,
  Calendar,
  Award,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Course data - in a real app, this would come from an API
  const courses = {
    'spring-boot': {
      id: 'spring-boot',
      title: 'Spring Boot Development',
      subtitle: 'Master Spring Boot and build enterprise applications',
      duration: '6 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: 1200,
      price: '₹25,000',
      originalPrice: '₹35,000',
      discount: '28%',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      instructor: 'Mr. JK',
     // instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      description: 'Learn Spring Boot from scratch and build real-world applications. This comprehensive course covers everything from basic concepts to advanced features like security, testing, and deployment.',
      highlights: [
        'Build RESTful APIs with Spring Boot',
        'Implement database operations with JPA',
        'Add security and authentication',
        'Deploy applications to cloud platforms',
        'Write comprehensive unit tests',
        'Learn microservices architecture'
      ],
      curriculum: [
        {
          week: 1,
          title: 'Spring Boot Fundamentals',
          topics: ['Spring Boot Introduction', 'Auto-configuration', 'Application Properties', 'Spring Boot Starters']
        },
        {
          week: 2,
          title: 'RESTful Web Services',
          topics: ['REST API Design', 'Controller Annotations', 'Request/Response Handling', 'API Documentation']
        },
        {
          week: 3,
          title: 'Database Integration',
          topics: ['Spring Data JPA', 'Entity Relationships', 'Repository Pattern', 'Database Migrations']
        },
        {
          week: 4,
          title: 'Security & Authentication',
          topics: ['Spring Security', 'JWT Authentication', 'Role-based Access', 'OAuth2 Integration']
        },
        {
          week: 5,
          title: 'Testing & Quality',
          topics: ['Unit Testing', 'Integration Testing', 'Test Coverage', 'Code Quality Tools']
        },
        {
          week: 6,
          title: 'Deployment & DevOps',
          topics: ['Docker Containerization', 'Cloud Deployment', 'CI/CD Pipelines', 'Monitoring & Logging']
        }
      ],
      projects: [
        {
          title: 'E-commerce API',
          description: 'Build a complete e-commerce backend with product management, user authentication, and order processing.',
          technologies: ['Spring Boot', 'JPA', 'Spring Security', 'MySQL']
        },
        {
          title: 'Task Management System',
          description: 'Create a project management application with user roles, task assignment, and progress tracking.',
          technologies: ['Spring Boot', 'REST API', 'JWT', 'PostgreSQL']
        }
      ],
      requirements: [
        'Basic Java programming knowledge',
        'Understanding of OOP concepts',
        'Familiarity with web technologies (HTML, CSS, JavaScript)',
        'Basic database concepts'
      ],
      outcomes: [
        'Build scalable Spring Boot applications',
        'Implement secure REST APIs',
        'Work with databases using JPA',
        'Deploy applications to cloud platforms',
        'Write comprehensive tests',
        'Understand microservices architecture'
      ]
    },
    'aws': {
      id: 'aws',
      title: 'AWS Cloud Computing',
      subtitle: 'Master AWS services and cloud architecture',
      duration: '8 weeks',
      level: 'Advanced',
      rating: 4.9,
      students: 980,
      price: '₹35,000',
      originalPrice: '₹45,000',
      discount: '22%',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      instructor: 'Mr. JK',
      //instructorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      description: 'Comprehensive AWS training covering core services, security, and best practices. Learn to design, deploy, and manage applications on AWS cloud infrastructure.',
      highlights: [
        'Master AWS core services (EC2, S3, RDS)',
        'Implement security best practices',
        'Design scalable cloud architectures',
        'Deploy applications using AWS services',
        'Monitor and optimize cloud costs',
        'Prepare for AWS certifications'
      ],
      curriculum: [
        {
          week: 1,
          title: 'AWS Fundamentals',
          topics: ['AWS Global Infrastructure', 'IAM & Security', 'VPC & Networking', 'EC2 Basics']
        },
        {
          week: 2,
          title: 'Compute Services',
          topics: ['EC2 Instance Types', 'Auto Scaling', 'Load Balancing', 'Elastic Beanstalk']
        },
        {
          week: 3,
          title: 'Storage & Database',
          topics: ['S3 Storage', 'EBS Volumes', 'RDS Databases', 'DynamoDB']
        },
        {
          week: 4,
          title: 'Networking & Security',
          topics: ['VPC Configuration', 'Security Groups', 'Route Tables', 'VPN Connections']
        },
        {
          week: 5,
          title: 'Serverless & Containers',
          topics: ['Lambda Functions', 'API Gateway', 'ECS & EKS', 'Docker Basics']
        },
        {
          week: 6,
          title: 'Monitoring & Optimization',
          topics: ['CloudWatch', 'CloudTrail', 'Cost Optimization', 'Performance Tuning']
        },
        {
          week: 7,
          title: 'Advanced Services',
          topics: ['SQS & SNS', 'CloudFormation', 'CodeDeploy', 'AWS CLI']
        },
        {
          week: 8,
          title: 'Architecture & Best Practices',
          topics: ['Well-Architected Framework', 'Security Best Practices', 'Disaster Recovery', 'Migration Strategies']
        }
      ],
      projects: [
        {
          title: 'Cloud Migration Project',
          description: 'Migrate a traditional application to AWS cloud with proper architecture and security.',
          technologies: ['EC2', 'RDS', 'S3', 'CloudFront', 'Route 53']
        },
        {
          title: 'Serverless Application',
          description: 'Build a serverless application using Lambda, API Gateway, and DynamoDB.',
          technologies: ['Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudWatch']
        }
      ],
      requirements: [
        'Basic understanding of cloud computing',
        'Familiarity with networking concepts',
        'Knowledge of Linux command line',
        'Understanding of web technologies'
      ],
      outcomes: [
        'Design and deploy applications on AWS',
        'Implement security best practices',
        'Optimize cloud costs and performance',
        'Prepare for AWS certifications',
        'Build scalable cloud architectures',
        'Monitor and troubleshoot AWS services'
      ]
    },
    'kafka': {
      id: 'kafka',
      title: 'Apache Kafka & Microservices',
      subtitle: 'Build scalable distributed systems with Kafka',
      duration: '4 weeks',
      level: 'Advanced',
      rating: 4.7,
      students: 750,
      price: '₹20,000',
      originalPrice: '₹28,000',
      discount: '29%',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      instructor: 'Mr. JK',
      //instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      description: 'Learn Apache Kafka and microservices architecture to build scalable, event-driven applications. Master distributed systems and real-time data processing.',
      highlights: [
        'Understand Kafka architecture and concepts',
        'Build event-driven microservices',
        'Implement real-time data streaming',
        'Design distributed systems',
        'Monitor and troubleshoot Kafka clusters',
        'Integrate with Spring Boot applications'
      ],
      curriculum: [
        {
          week: 1,
          title: 'Kafka Fundamentals',
          topics: ['Kafka Architecture', 'Topics & Partitions', 'Producers & Consumers', 'Broker Configuration']
        },
        {
          week: 2,
          title: 'Advanced Kafka',
          topics: ['Consumer Groups', 'Replication', 'Kafka Connect', 'Schema Registry']
        },
        {
          week: 3,
          title: 'Microservices Integration',
          topics: ['Event-Driven Architecture', 'Spring Kafka', 'Service Communication', 'Circuit Breakers']
        },
        {
          week: 4,
          title: 'Production & Monitoring',
          topics: ['Kafka Security', 'Performance Tuning', 'Monitoring Tools', 'Troubleshooting']
        }
      ],
      projects: [
        {
          title: 'Event Streaming Platform',
          description: 'Build a real-time event streaming platform for processing user activities and analytics.',
          technologies: ['Kafka', 'Spring Boot', 'Docker', 'Prometheus']
        },
        {
          title: 'Microservices E-commerce',
          description: 'Create a distributed e-commerce system with event-driven communication between services.',
          technologies: ['Kafka', 'Spring Cloud', 'Docker', 'Kubernetes']
        }
      ],
      requirements: [
        'Strong Java programming skills',
        'Understanding of distributed systems',
        'Knowledge of Spring Boot',
        'Basic understanding of networking'
      ],
      outcomes: [
        'Design and implement Kafka clusters',
        'Build event-driven microservices',
        'Handle real-time data processing',
        'Monitor and troubleshoot distributed systems',
        'Integrate Kafka with Spring Boot',
        'Deploy and manage Kafka in production'
      ]
    }
  };

  const course = courses[courseId];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/syllabus" className="btn-primary">
            View All Courses
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: Code },
    { id: 'projects', label: 'Projects', icon: Server },
    { id: 'outcomes', label: 'Outcomes', icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-primary-100 mb-8">{course.subtitle}</p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-primary-200 ml-1">({course.students} students)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{course.level}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Preview
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                {course.discount} OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{course.price}</div>
                <div className="text-lg text-gray-500 line-through">{course.originalPrice}</div>
                <div className="text-sm text-green-600 font-medium mt-1">Save {course.discount}</div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center space-x-4">
                <img 
                  src={course.instructorImage} 
                  alt={course.instructor}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Instructor</h3>
                  <p className="text-gray-600">{course.instructor}</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Next Batch</h3>
                <p className="text-gray-600">Starts in 2 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Description</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">{course.description}</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="card">
                    <h3 className="text-lg font-semibold mb-4">Requirements</h3>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="card">
                    <h3 className="text-lg font-semibold mb-4">Course Features</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Play className="h-5 w-5 text-primary-600 mr-3" />
                        <span className="text-gray-700">50+ hours of video content</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-5 w-5 text-primary-600 mr-3" />
                        <span className="text-gray-700">Downloadable resources</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-5 w-5 text-primary-600 mr-3" />
                        <span className="text-gray-700">Instructor support</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-primary-600 mr-3" />
                        <span className="text-gray-700">Certificate of completion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Curriculum</h2>
                <div className="space-y-6">
                  {course.curriculum.map((week) => (
                    <div key={week.week} className="card">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">Week {week.week}: {week.title}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {week.topics.length} topics
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {week.topics.map((topic, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                            <span className="text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Hands-on Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {course.projects.map((project, index) => (
                    <div key={index} className="card">
                      <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'outcomes' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Learning Outcomes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <TrendingUp className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 card">
                  <h3 className="text-xl font-semibold mb-4">Career Opportunities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Code className="h-8 w-8 text-primary-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Software Developer</h4>
                      <p className="text-gray-600 text-sm">Build applications using the technologies learned</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Server className="h-8 w-8 text-primary-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Backend Developer</h4>
                      <p className="text-gray-600 text-sm">Focus on server-side development and APIs</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cloud className="h-8 w-8 text-primary-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cloud Engineer</h4>
                      <p className="text-gray-600 text-sm">Deploy and manage cloud infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master {course.title}?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join {course.students}+ students who have already enrolled in this course and transformed their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
              Enroll Now - {course.price}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/syllabus" className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails; 