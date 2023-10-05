'use client'
import React from 'react';
import styles from './Biografia.module.css';
import {SiPlatzi} from 'react-icons/Si';
import { CardVideo } from '../components/CardVideo';


export function Biografia() {
  return (
  <>
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

      No se trata solo de escribir líneas de código para mí, se trata de comprender las necesidades y los objetivos detrás de cada proyecto. Mi compromiso con la entrega de soluciones a medida ha dejado un nuevo conocimiento.
      
      Mi compromiso con la mejora continua es evidente en la forma en que abordo cada proyecto. Siempre estoy dispuesto a explorar nuevas herramientas, marcos de trabajo y metodologías, buscando siempre la manera de optimizar el proceso de desarrollo y ofrecer resultados aún más impactantes. 
      
      En mi proyecto más ambicioso hasta la fecha, he decidido presentarme de una manera única y creativa. Inspirado por la estructura de Wikipedia, he desarrollado una página web clon que no solo funciona como mi portafolio personal, sino que también refleja mi pasión por la programación y la tecnología. A través de esta plataforma, comparto no solo mi experiencia y logros, sino también mis metas futuras y mi visión para contribuir aún más al mundo del desarrollo web.
      
      Mi viaje en el mundo del desarrollo web sigue evolucionando, y estoy seguro de que dejaré una huella duradera en la industria y en la comunidad tecnológica en general.
     {/*  </p> */}
      {/* </details> */}
      </section>
        
        <div className={styles.cardsBio}>
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
      <CardVideo/>
      </div>
      </div>
      

      </section>

  </>
  )
}
