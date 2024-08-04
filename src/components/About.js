import React from 'react';

const About = () => {
  return (
    <section id="about" class="about">
        <div class="contenido-seccion">
            <h2>About</h2>
            <p><span>Hi, I'm Carlos Esteve.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde soluta minima necessitatibus, voluptas consectetur vero officiis quas, explicabo deleniti repellendus aliquid debitis maiores numquam voluptate reprehenderit in delectus dolores.</p>

            <div class="fila">
                <div class="col">
                    <h3>Datos Personales</h3>
                    <ul>
                        <li>
                            <strong>Birthday</strong>
                            09-02-2003
                        </li>
                        <li>
                            <strong>Phone</strong>
                            <a href="tel:+34664686772">+34 664686772</a>
                        </li>
                        <li>
                            <strong>Email</strong>
                            <a href="mailto:charlsef23@icloud.com">charlsef23@icloud.com</a>
                        </li>
                        <li>
                            <strong>Website</strong>
                            www.CarlosEsteve.com
                        </li>
                        <li>
                            <strong>Address</strong>
                            Calle José Abascal 28, Madrid
                        </li>
                        <li>
                            <strong>Cargo</strong>
                            <span>FREELANCE</span>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h3>Intereses</h3>
                    <div class="contenedor-intereses">
                        <div class="interes">
                            <i class="fa-solid fa-gamepad"></i>
                            <span>JUEGOS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-headphones"></i>
                            <span>MUSICA</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-plane"></i>
                            <span>VIAJAR</span>
                        </div>
                        <div class="interes">
                            <i class="fa-brands fa-apple"></i>
                            <span>MAC OS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-person-hiking"></i>
                            <span>DEPORTE</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-book"></i>
                            <span>LIBROS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-car"></i>
                            <span>AUTOS</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-camera"></i>
                            <span>FOTOS</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <button>
                Descargar CV <i class="fa-solid fa-download"></i>
                <span class="overlay"></span>
            </button>
        </div>
    </section>
  );
};

export default About;