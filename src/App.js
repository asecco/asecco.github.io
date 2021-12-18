import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="paper container container-lg">
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;