import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila">
                <div className="col">
                    <h3>Technical Skills</h3>
                    <div className="skill">
                        <span>Javascript</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>HTML & CSS</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Photoshop</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Wordpress</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>81%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Drupal</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>55%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3>Professional Skills</h3>
                    <div className="skill">
                        <span>Comunicación</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Trabajo en Equipo</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>100%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Creatividad</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>99%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Dedicación</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Project Management</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>94%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss");
      habilidades[2].classList.add("photoshop");
      habilidades[3].classList.add("wordpress");
      habilidades[4].classList.add("drupal");
      habilidades[5].classList.add("comunicacion");
      habilidades[6].classList.add("trabajo");
      habilidades[7].classList.add("creatividad");
      habilidades[8].classList.add("dedicacion");
      habilidades[9].classList.add("proyect");
  }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
  efectoHabilidades();
}

export default Skills;