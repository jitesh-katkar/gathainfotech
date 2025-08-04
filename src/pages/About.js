import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Lightbulb, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from curriculum design to student support.'
    },
    {
      icon: Heart,
      title: 'Student Success',
      description: 'Your success is our priority. We provide personalized attention and support.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay updated with the latest technologies and industry trends.'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'We maintain the highest standards in our training programs and services.'
    }
  ];

  const team = [
    {
      name: 'Mr.JK',
      role: 'Founder & CEO',
      experience: '12+ years',
      expertise: 'Java, Spring Boot, Microservices',
      //image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Training',
      experience: '12+ years',
      expertise: 'AWS, Cloud Architecture, DevOps',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Amit Patel',
      role: 'Senior Trainer',
      experience: '10+ years',
      expertise: 'Kafka, Event Streaming, Big Data',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Neha Singh',
      role: 'Technical Lead',
      experience: '8+ years',
      expertise: 'React, Node.js, Full Stack Development',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Students Trained' },
    { number: '95%', label: 'Placement Rate' },
    { number: '100+', label: 'Live Projects' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Gatha Infotech</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Leading Java Full Stack Training Institute committed to transforming careers 
            through comprehensive, industry-aligned education and hands-on experience.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower individuals with cutting-edge Java Full Stack development skills, 
                enabling them to build successful careers in the technology industry. We believe 
                in providing practical, industry-relevant training that bridges the gap between 
                academic knowledge and real-world application.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry-Relevant Curriculum</h3>
                    <p className="text-gray-600">Updated regularly to match current industry standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hands-on Experience</h3>
                    <p className="text-gray-600">Real-world projects and practical implementation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Career Support</h3>
                    <p className="text-gray-600">Job placement assistance and career guidance</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="section-title">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the most trusted and preferred training institute for Java Full Stack 
                development, recognized for excellence in education, innovation in teaching 
                methodologies, and commitment to student success.
              </p>
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Expert trainers with industry experience</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Small batch sizes for personalized attention</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Lifetime access to learning resources</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">Regular industry updates and workshops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at Gathainfotech
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-primary-100">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Ready to start your journey with us? Contact our team today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                Pune<br />
                Mahashtra 411010<br />
                India
              </p>
            </div>
            <div className="card text-center">
              <Phone className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">
                +91 81493 81488<br />
                
                Mon - Fri, 9AM - 6PM
              </p>
            </div>
            <div className="card text-center">
              <Mail className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">
                official@gathainfotech.com<br />
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 