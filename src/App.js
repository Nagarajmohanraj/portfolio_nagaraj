import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Certificate from './Components/Certificate';
import Contact from './Components/Contact';
import './App.css'; 
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificate">
        <Certificate />
      </section>  
      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </div>
  );
};

export default App;