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
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#curriculum">CURRICULUM</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? (
            <i className="fa-solid fa-sun"></i> // Icono del sol para modo oscuro
          ) : (
            <i className="fa-solid fa-moon"></i> // Icono de la luna para modo claro
          )}
        </button>
      </header>
    </nav>
  );
};

export default NavBar;
