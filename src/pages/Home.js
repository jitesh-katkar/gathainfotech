import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Play,
  Star,
  TrendingUp
} from 'lucide-react';
import TechCards from '../components/TechCards';
import RegistrationModal from '../components/RegistrationModal';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Industry-aligned syllabus covering Java, Spring Boot, AWS, and more'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Learn from certified professionals with 10+ years of experience'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Get certified upon completion with industry-recognized credentials'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose from weekday, weekend, or online training options'
    }
  ];

  const courses = [
    {
      id: 'spring-boot',
      title: 'Spring Boot Development',
      duration: '6 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: 1200,
      price: '₹25,000',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
    },
    {
      id: 'aws',
      title: 'AWS Cloud Computing',
      duration: '8 weeks',
      level: 'Advanced',
      rating: 4.9,
      students: 980,
      price: '₹35,000',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    },
    {
      id: 'kafka',
      title: 'Apache Kafka & Microservices',
      duration: '4 weeks',
      level: 'Advanced',
      rating: 4.7,
      students: 750,
      price: '₹20,000',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Students Trained' },
    { number: '95%', label: 'Placement Rate' },
    { number: '50+', label: 'Corporate Partners' },
    { number: '10+', label: 'Years Experience' }
  ];

  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="min-h-screen">
      <RegistrationModal open={showModal} onClose={() => setShowModal(false)} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Empowering the Next Generation of Tech

                <span className="block text-primary-200">Experts</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Transform your career with our comprehensive Java Full Stack training program. 
                Learn Spring Boot, AWS, Kafka, and modern web technologies from industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
                  Learn More
                  <Play className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Code className="h-16 w-16 text-primary-200 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Industry-aligned curriculum</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Hands-on project experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Job placement assistance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Lifetime access to resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tech Cards Section */}
      <TechCards />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Gatha Infotech?</h2>
            <p className="section-subtitle">
              We provide comprehensive training programs designed to accelerate your career in Java Full Stack Development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Courses</h2>
            <p className="section-subtitle">
              Master the most in-demand technologies with our expert-led training programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-4">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {course.price}
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{course.rating}</span>
                      <span className="ml-1 text-sm text-gray-600">({course.students} students)</span>
                    </div>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
                <Link 
                  to={`/course/${course.id}`}
                  className="btn-primary w-full text-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/syllabus" className="btn-secondary">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of successful developers who have accelerated their careers with our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Get Started Today
            </Link>
            <Link to="/about" className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 