import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJsSquare } from 'react-icons/fa';

const techs = [
  {
    name: 'React',
    icon: <FaReact className="text-blue-500 text-5xl" />,
    description: 'A JavaScript library for building user interfaces.',
    link: 'https://react.dev/',
    color: 'from-blue-50 to-blue-100'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-600 text-5xl" />,
    description: 'JavaScript runtime built on Chrome\'s V8 engine.',
    link: 'https://nodejs.org/',
    color: 'from-green-50 to-green-100'
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare className="text-yellow-500 text-5xl" />,
    description: 'The programming language of the Web.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    color: 'from-yellow-50 to-yellow-100'
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
  },
  {
    name: 'Docker',
    icon: <FaDocker className="text-blue-600 text-5xl" />,
    description: 'Container platform for building and deploying apps.',
    link: 'https://www.docker.com/',
    color: 'from-cyan-50 to-cyan-100'
  },
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