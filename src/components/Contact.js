import React from 'react';
import './Contact.css';
import map from './ubicacion.png';

const Contact = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        <div className="fila">
          <div className="col">
            <input type="text" placeholder="Tú Nombre" />
            <input type="number" placeholder="Número telefónico" />
            <input type="email" placeholder="Dirección de correo" />
            <input type="text" placeholder="Tema" />
            <textarea cols="30" rows="10" placeholder="Mensaje"></textarea>
            <button>
              Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
              <span className="overlay"></span>
            </button>
          </div>
          <div className="col">
            <img src={map} alt="Map" /> 
            <div className="info">
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  Calle José Abascal 28, Madrid
                </li>
                <li>
                  <i className="fa-solid fa-mobile-screen"></i>
                  <a href="tel:+34664686772">+34 664686772</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:charlsef23@icloud.com">charlsef23@icloud.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;