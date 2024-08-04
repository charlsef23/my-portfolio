import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
    <a href="#inicio" class="arriba">
        <a href='#home'><i class="fa-solid fa-angles-up"></i></a>
    </a>
    <div className="redes">
          <a href="https://www.instagram.com/carlosesteve23/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://x.com/Charlsef23"><i className="fa-brands fa-x"></i></a>
          <a href="https://tiktok.com/charlsef23"><i className="fa-brands fa-tiktok"></i></a>
          <a href="https://www.linkedin.com/in/carlosestevefernández"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
</footer>
  );
};

export default Footer;