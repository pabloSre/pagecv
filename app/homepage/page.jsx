'use client'

import { useState } from 'react';
import styles from './homepage.module.css';
import { TfiMenuAlt } from 'react-icons/tfi';
import {IoIosArrowDown} from 'react-icons/Io';
import {SiPlatzi} from 'react-icons/Si';

export function HomePage() {
  
  /* EXPORT DEFAULT HACE QUE NO TENGAS QUE EXPORTARLO AL FINAL DEL PROYECTO */
    //abrir menu hamburguesa
    const [isMenu2Open, setIsMenu2Open] = useState(false);
    /*  const [isVerMasOpen, setIsVerMasOpen] = useState(false);

    const handleVerMasOpen = () => {
      isVerMasOpen(!setIsVerMasOpen)
    } */
    const toggleMenu2 = () => {
      setIsMenu2Open(!isMenu2Open)
    }

    
    const [isInputIdiomasOpen, setIsInputIdiomaOpen] = useState(false)
    const toggleInputIdioma = () => {
      setIsInputIdiomaOpen(!isInputIdiomasOpen)
    }
  return (
    <>
    {/* <div className={styles.paddingHome}> */}
    <section className={styles.nav2}>
      <div className={styles.navleft}>
        
      <div className={`${styles.menu2} ${isMenu2Open ? styles.menu2Blue : ''}`}>
        <TfiMenuAlt 
          className={styles.menuHome}
          onClick={toggleMenu2}
          />
      </div>
          {isMenu2Open && (
            <section className={styles.menuHome2}>
              <ul className={styles.menuList}>
                <a className={styles.zonas}href="#inicio">
                  Inicio</a>
                <a className={styles.zonas}href="#etimologia">
                  Etimologia</a>
                <a className={styles.zonas}href="#historia">
                  Historia</a>
                <a className={styles.zonas}href="#curriculum">
                  Curriculum</a>
                <a className={styles.zonas}href="#extras">
                  Extras</a>
                <a className={styles.zonas}href="#Referencias">
                  Referencias</a>
              </ul>
            </section>
          )}
      <h1 className={styles.title}>Pablo Re</h1>
      </div>

      <section 
        className={styles.inputIdiomas}
        onClick={toggleInputIdioma}
        >
      <label className={styles.idiomas}>
        
          <img src="https://es.wikipedia.org/w/load.php?modules=skins.vector.icons&image=language&variant=progressive&format=original&skin=vector-2022&version=1vw3w" 
          className={styles.iconLeng}
          alt="idiomas" />
        
        <p className={styles.cantidadIdiomas}>
        Cambiar idioma
        </p>

        <IoIosArrowDown className={styles.arrow}/>
      </label>

      
        {isInputIdiomasOpen && (
      <ul className={`${styles.listIdiomas} ${isInputIdiomasOpen ? styles.listIdiomaOpen : ''}`}>
        <li className={styles.idiomas2}>Ingles</li></ul>
      )}
      </section>

    </section>

    <section className={styles.nav3}>
        <div className={styles.nav3Left}>
        <p className={styles.articulo}>Articulo</p>
        <p className={styles.discusion}>Discusion</p>
        </div>
        {/* AGREGAR articulo + discucsion + rigth herramientas */}

        <div className={styles.nav3Rigth}>
            <p className={styles.herramientas}>Herramientas</p>
            
        </div>
      </section>

      <section className={styles.biografia}>
{/* aggregar linea que diga *contenido* pero que no lleve a ningun lugar  */}
      <div className={styles.inicio}>
      
      <section id='inicio' className={styles.inicio1}>
      
      Desarrollador Full Stack con experiencia en Javascript especializado en Node.Js. 

      Desde mis primeros días en el universo del desarrollo, he demostrado una gran curiosidad y  pasión por mantenerme a la vanguardia de las últimas tendencias en tecnología. Mi capacidad para asimilar rápidamente nuevos conceptos y adaptarme a los cambios en el panorama tecnológico me ha permitido ofrecer soluciones que se adapten a las necesidades para cumplir con los objetivos.

      {/* <details className={styles.verMas}>
        <summary onClick={handleVerMasOpen}>
          Ver mas...
        </summary> */}
       {/*  <p className={styles.inicio3}> */}
      Sin lugar a dudas, una de las características que me define es mi enfoque dedicado y mi persistencia incansable en la resolución de desafíos. Cuando me enfrento a obstáculos en el camino, veo oportunidades de crecimiento y aprendizaje. Cada problema se convierte en una posibilidad para explorar nuevas estrategias y enfoques, y esto ha sido fundamental para mi éxito en la creación de aplicaciones fluidas y eficientes que superan mis expectativas.


      No se trata solo de escribir líneas de código para mí; se trata de comprender las necesidades y los objetivos detrás de cada proyecto. Mi compromiso con la entrega de soluciones a medida ha dejado un nuevo conocimiento.
      
      
      Mi compromiso con la mejora continua es evidente en la forma en que abordo cada proyecto. Siempre estoy dispuesto a explorar nuevas herramientas, marcos de trabajo y metodologías, buscando siempre la manera de optimizar el proceso de desarrollo y ofrecer resultados aún más impactantes. 
      
      
      En mi proyecto más ambicioso hasta la fecha, he decidido presentarme de una manera única y creativa. Inspirado por la estructura de Wikipedia, he desarrollado una página web clon que no solo funciona como mi portafolio personal, sino que también refleja mi pasión por la programación y la tecnología. A través de esta plataforma, comparto no solo mi experiencia y logros, sino también mis metas futuras y mi visión para contribuir aún más al mundo del desarrollo web.
      
      
      Mi viaje en el mundo del desarrollo web sigue evolucionando, y estoy seguro de que dejaré una huella duradera en la industria y en la comunidad tecnológica en general.
     {/*  </p> */}
      {/* </details> */}
      </section>

      <section className={styles.inicio2}>
        <div className={styles.rectangulo}>
          <div className={styles.rec1}>
          <p className={styles.titleRec}>Pablo Re</p>
          </div>
          <img src='/pablorefullstack2.jpg' alt="fotocv" className={styles.imagen1} />
          
          <div className={styles.info}>
              
              <p className={styles.infoPersonal}>Informacion personal</p>
              <section className={styles.personal}>
                <ul className={styles.fila1}>
                  <li className={styles.subTitle}>Nombre</li>
                  <li className={styles.subTitle}>Nacimiento</li>
                  <li className={styles.subTitle}>Nacionalidad</li>
                </ul>
                
                <ul className={styles.fila2}>
                  <li className={styles.subTitle2}>Pablo Sebastián Re</li>
                  <li className={styles.subTitle2}>3 septiembre 1996</li>
                  <li className={styles.subTitle2}>Argentina</li>
                </ul>
                {/* 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br/> espacios sueltos y reglon en blanco */}
              </section>
              

              <p className={styles.infoEducacion}>Educación</p>
              <section className={styles.educacion}>
                <ul className={styles.fila1}>
                  <li className={styles.subTitle}>Academia</li>
                  <li className={styles.subTitle}>Certificado en</li>
                </ul>
                <ul className={styles.fila2}>
                  <li className={styles.subTitle2}>Platzi&nbsp;&nbsp;&nbsp;<SiPlatzi className={styles.logoPlatzi}/></li>
                  <li className={styles.subTitle2}>Full Stack Developer con JavaScript</li>
                </ul>
              </section>

              

          </div>
        </div>
        
      </section>
      </div>


      <section id='etimologia' className={styles.etimologia}>
        texto 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum, ut quasi voluptatum veritatis nisi odit explicabo repudiandae debitis alias, nihil iste maxime? Vero repellat accusantium veniam consequuntur commodi perferendis!
      </section>

      <section id='historia' className={styles.historia}>
        texto 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore quasi facere qui sequi exercitationem commodi similique ea veniam cumque, nihil voluptas. Reiciendis recusandae harum ipsa. Magni dicta iusto sed.
      </section>

      <section id='curriculumVitae' className={styles.extra}>
          texto 4Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque, quisquam sequi ullam esse fugiat repudiandae enim! Aperiam assumenda asperiores voluptatum molestias in cum eligendi quibusdam, fugit ad? Modi, velit?
      </section>

      <section id='referencias' className={styles.referencias}>
        Texto 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laboriosam dolorum facilis perferendis odit architecto delectus? Minus unde aliquid sunt hic ullam fugit velit pariatur recusandae, enim, quia provident corporis!
      </section>

      <section id='extras' className={styles.extras}>
        Texto 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laboriosam dolorum facilis perferendis odit architecto delectus? Minus unde aliquid sunt hic ullam fugit velit pariatur recusandae, enim, quia provident corporis!
      </section>

    </section>
    {/* </div> */}
    </>
  )
}