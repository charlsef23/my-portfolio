import React from 'react';
import './NavBar.css';

const NavBar = ({ toggleDarkMode }) => {
  return (
       <nav>
           <div class="contenedor-header">
        <header>
          <div class="logo">
            <a href="#Home">Carlos</a>
          </div>
            <nav id="nav">
                <ul>
                    <li><a href="#home" onclick="seleccionar()">HOME</a></li>
                    <li><a href="#about" onclick="seleccionar()">ABOUT</a></li>
                    <li><a href="#skills" onclick="seleccionar()">SKILLS</a></li>
                    <li><a href="#curriculum" onclick="seleccionar()">CURRICULUM</a></li>
                    <li><a href="#portfolio" onclick="seleccionar()">PORTFOLIO</a></li>
                    <li><a href="#contacto" onclick="seleccionar()">CONTACTO</a></li>
                </ul>
            </nav>
            
            <div class="nav-responsive" onclick="mostrarOcultarMenu()">
                <i class="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>
    </nav>
  );
};

export default NavBar;