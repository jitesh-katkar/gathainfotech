import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJsSquare } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { SiSelenium } from 'react-icons/si';
import { SiSpring } from 'react-icons/si';
import { SiSpringboot } from 'react-icons/si';
import { TbHexagon3D } from 'react-icons/tb';


const techs = [
  {
  name: 'Core Java',
  icon: <FaJava  className="text-red-600 text-5xl" />, // Make sure to import SiJava from 'react-icons/si'
  description: 'Fundamentals of Java including OOP, data types, Collection framework, exception handling, etc',
  link: 'https://docs.oracle.com/javase/tutorial/',
  color: 'from-red-50 to-red-100'
},
{
  name: 'Spring Framework',
  icon: <SiSpring className="text-green-500 text-5xl" />,
  description: 'A powerful Java framework for building enterprise-grade applications.',
  link: 'https://spring.io/projects/spring-framework',
  color: 'from-green-50 to-green-100'
},
{
  name: 'Spring Boot',
  icon: <SiSpringboot className="text-green-600 text-5xl" />,
  description: 'Simplifies Java development with auto-configuration and embedded servers.',
  link: 'https://spring.io/projects/spring-boot',
  color: 'from-lime-50 to-lime-100'
},
{
  name: 'Microservices',
  icon: <TbHexagon3D className="text-purple-600 text-5xl" />,
  description: 'Build scalable, independently deployable services using Java and Spring Boot.',
  link: 'https://microservices.io/',
  color: 'from-purple-50 to-purple-100'
},
{
  name: 'Selenium with Java',
  icon: <SiSelenium className="text-green-600 text-5xl" />,
  description: 'Automate web testing using Selenium WebDriver with Java.',
  link: 'https://www.selenium.dev/documentation/webdriver/',
  color: 'from-green-50 to-green-100'
},

  {
    name: 'Python',
    icon: <FaPython className="text-blue-600 text-5xl" />,
    description: 'A powerful, easy-to-learn programming language.',
    link: 'https://python.org/',
    color: 'from-indigo-50 to-indigo-100'
  },
  {
    name: 'AWS',
    icon: <FaAws className="text-orange-500 text-5xl" />,
    description: 'Amazon Web Services cloud platform.',
    link: 'https://aws.amazon.com/',
    color: 'from-orange-50 to-orange-100'
  }
];

const TechCards = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Technologies We Love</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className={`rounded-xl shadow-lg p-6 bg-gradient-to-br ${tech.color} flex flex-col items-center transition-transform hover:scale-105 border border-gray-200`}
          >
            {tech.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{tech.name}</h3>
            <p className="text-gray-600 text-center mt-2 mb-4">{tech.description}</p>
            <a
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block px-4 py-2 bg-white text-gray-700 font-semibold rounded hover:bg-gray-50 transition-colors border border-gray-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechCards;