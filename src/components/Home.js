import React from 'react';
import './Home.css';
import heroImage from './hero.png'; // Ajusta la ruta según tu estructura

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src={heroImage} alt="Hero" />
        </div>
        <h1>CARLOS ESTEVE</h1>
        <h2>Desarrollador Web - Full Stack </h2>
        <div className="redes">
          <a href="https://www.instagram.com/carlosesteve23/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://x.com/Charlsef23"><i className="fa-brands fa-x"></i></a>
          <a href="https://tiktok.com/charlsef23"><i className="fa-brands fa-tiktok"></i></a>
          <a href="https://www.linkedin.com/in/carlosestevefernández"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Home;