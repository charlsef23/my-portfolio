import React from 'react';
import './NavBar.css';

const NavBar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <div className="logo">
          <a href="#home">Carlos</a>
        </div>
        <nav id="nav">
          <ul>
            <li><a href="#home">INICIO</a></li>
            <li><a href="#about">SOBRE MI</a></li>
            <li><a href="#projects">PROYECTOS</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#curriculum">CURRICULUM</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? (
              <i className="fa-solid fa-sun"></i>
                ) : (
              <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </header>
    </nav>
  );
};

export default NavBar;
