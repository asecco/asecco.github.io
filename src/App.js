import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;