import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" class="home">
    <div class="contenido-banner">
        <div class="contenedor-img">
            <img src="img/hero.png" alt=""></img>
        </div>
        <h1>CARLOS ESTEVE</h1>
        <h2>Ingeniero de Software - Experto UI/UX</h2>
        <div class="redes">
            <a href="https://www.instagram.com/carlosesteve23/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/Charlsef23"><i class="fa-brands fa-x"></i></a>
            <a href="https://tiktok.com/charlsef23"><i class="fa-brands fa-tiktok"></i></a>
            <a href="www.linkedin.com/in/carlosestevefernández"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
    </div>
</section>
  );
};

export default Home;