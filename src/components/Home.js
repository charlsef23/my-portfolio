import React from 'react';
import heroImg from './assets/img/hero.png'; // Asegúrate de que la ruta sea correcta

const Home = () => {
  return (
    <div className="contenido-banner">
      <div className="contenedor-img">
        <img src={heroImg} alt="Carlos Esteve" />
      </div>
      <h1>CARLOS ESTEVE</h1>
      <h2>Ingeniero de Software - Experto UI/UX</h2>
    </div>
  );
};

export default Home;