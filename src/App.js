import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { ThemeProvider } from './theme';
import Curriculum from './components/Curriculum';
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return (
    <ThemeProvider darkMode={darkMode}>
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <NavBar toggleDarkMode={toggleDarkMode} />
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Curriculum darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;