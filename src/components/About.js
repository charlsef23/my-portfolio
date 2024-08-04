import React from 'react';
import './About.css';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`about ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="contenido-seccion">
        <h2>About</h2>
        <p>
          <span>Hi, I'm Carlos Esteve.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde soluta minima necessitatibus, voluptas consectetur vero officiis quas, explicabo deleniti repellendus aliquid debitis maiores numquam voluptate reprehenderit in delectus dolores.
        </p>

        <div className="fila">
          {/* Datos personales */}
          <div className="col">
            <h3>Datos Personales</h3>
            <ul>
              <li><strong>Birthday</strong> 09-02-2003</li>
              <li><strong>Phone</strong> <a href="tel:+34664686772">+34 664686772</a></li>
              <li><strong>Email</strong> <a href="mailto:charlsef23@icloud.com">charlsef23@icloud.com</a></li>
              <li><strong>Website</strong> www.CarlosEsteve.com</li>
              <li><strong>Address</strong> Calle José Abascal 28, Madrid</li>
              <li><strong>Cargo</strong> <span>FREELANCE</span></li>
            </ul>
          </div>

          {/* Intereses */}
          <div className="col">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              <div className="interes">
                <i className="fa-solid fa-gamepad"></i>
                <span>JUEGOS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-headphones"></i>
                <span>MUSICA</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-plane"></i>
                <span>VIAJAR</span>
              </div>
              <div className="interes">
                <i className="fa-brands fa-apple"></i>
                <span>MAC OS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-person-hiking"></i>
                <span>DEPORTE</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-book"></i>
                <span>LIBROS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-car"></i>
                <span>AUTOS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-camera"></i>
                <span>FOTOS</span>
              </div>
            </div>
          </div>
        </div>
        <button>
          Descargar CV <i className="fa-solid fa-download"></i>
          <span className="overlay"></span>
        </button>
      </div>
    </section>
  );
};

export default About;