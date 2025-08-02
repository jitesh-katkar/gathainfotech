import React from 'react';

const RegistrationModal = ({ open, onClose }) => {
  if (!open) return null;

  const courses = [
    { value: '', label: 'Select a Course' },
    { value: 'spring-boot', label: 'Spring Boot Development' },
    { value: 'aws', label: 'AWS Cloud Computing' },
    { value: 'kafka', label: 'Apache Kafka & Microservices' },
    { value: 'react', label: 'React.js Development' },
    { value: 'nodejs', label: 'Node.js Backend Development' },
    { value: 'python', label: 'Python Programming' },
    { value: 'docker', label: 'Docker & Containerization' },
    { value: 'java', label: 'Java Programming' },
    { value: 'javascript', label: 'JavaScript Fundamentals' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close callback request form"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Request Callback</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input type="tel" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Phone Number" required />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Course Interest</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required>
              {courses.map((course) => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Request Callback
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;