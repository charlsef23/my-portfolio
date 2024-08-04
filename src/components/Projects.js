import React from 'react';
import './Projects.css'; // Asegúrate de importar el CSS correspondiente

const Projects = ({ darkMode }) => {
  return (
    <section id="portfolio" className={`portfolio ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="contenido-seccion">
        <h2>PORTFOLIO</h2>
        <div className="galeria">
          <div className="proyecto">
            <img src="img/p1.jpg" alt="Proyecto 1" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
          <div className="proyecto">
            <img src="img/p2.jpg" alt="Proyecto 2" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
          <div className="proyecto">
            <img src="img/p3.jpg" alt="Proyecto 3" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
          <div className="proyecto">
            <img src="img/p4.jpg" alt="Proyecto 4" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
          <div className="proyecto">
            <img src="img/p5.jpg" alt="Proyecto 5" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
          <div className="proyecto">
            <img src="img/p6.jpg" alt="Proyecto 6" />
            <div className="overlay">
              <h3>Diseño Creativo</h3>
              <p>Fotografía</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;