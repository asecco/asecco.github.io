import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="paper container container-lg">
      <Navbar />
      <br></br>
      <br></br>
      <About />
    </div>
  );
}

export default App;