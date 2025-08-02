import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Syllabus from './pages/Syllabus';
import Contact from './pages/Contact';
import CourseDetails from './pages/CourseDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 