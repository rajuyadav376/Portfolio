import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Project from './components/Project';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
      
    </>
  );
}

export default App;
