'use client'
import React from 'react';
import styles from './Biografia.module.css';
import {SiPlatzi} from 'react-icons/si';
import CardVideo from '../components/CardVideo';
import Image from 'next/image';

export default function Biografia() {
  return (
  <>
<section className={styles.biografia}>

      <div className={styles.inicio}>
      
      <section id='inicio' className={styles.inicio1}>{/* etiqueta em pone cursiva , y strong pone bold */}
      
      <strong className={styles.em1}>Desarrollador Full Stack</strong> con experiencia en <a href='https://developer.mozilla.org/es/docs/Web/JavaScript' className={styles.em1}>Javascript</a> especializado en <a href='https://nodejs.org/en/about' className={styles.em1}>Node.Js</a>.<br />
      
      
      Desde mis primeros días en el universo del desarrollo, me mantengo actualizado con las últimas tendencias en tecnología. Mi capacidad para asimilar rápidamente nuevos conceptos y adaptarme a los cambios en el panorama tecnológico me ha permitido ofrecer soluciones que se adapten a las necesidades para cumplir con los objetivos. <br />
      
      Comence a estudiar en la academia <a className={styles.em1} href="https://platzi.com/">Platzi</a> y me especialicé en la ruta de <a className={styles.em1} href="https://es.react.dev/">React.js</a><br />

      Mi enfoque dedicado y persistencia me ayuda a la resolución de desafíos. Cuando me enfrento a obstáculos en el camino, veo oportunidades de crecimiento y aprendizaje. Cada problema es una posibilidad para explorar nuevas estrategias y enfoques, y esto ha sido fundamental para mi éxito en la creación de aplicaciones fluidas y eficientes que superan mis expectativas. <br />

      No se trata solo de escribir líneas de código para mí, se trata de comprender las necesidades y los objetivos detrás de cada proyecto.
      <br />
      Mi compromiso con la mejora continua se pone en evidencia en la forma en que abordo cada nuevo proyecto. Siempre estoy dispuesto a explorar nuevas herramientas, marcos de trabajo y metodologías, buscando la manera de optimizar el proceso de desarrollo y ofrecer resultados aún más impactantes. 
      <br />
      En mi proyecto más ambicioso hasta la fecha, he decidido presentarme de una manera única y creativa. Inspirado por la estructura de <a href="https://es.wikipedia.org/wiki/Halloween" className={styles.em1}>Wikipedia</a>, he desarrollado una página web clon que no solo funciona como mi portafolio personal, sino que también refleja mi pasión por la programación y la tecnología. A través de esta plataforma, comparto mi experiencia y logros, mis metas futuras y mi visión para contribuir aún más al mundo del desarrollo web.
      <br />
      <br />
      Estoy en constante evolucion en el desarrollo, siento que dejaré una huella duradera en la industria y en la comunidad tecnológica.

      </section>
        
        <div className={styles.cardsBio}>
      <section className={styles.inicio2}>
        <div className={styles.rectangulo}>
          <div className={styles.rec1}>
          <p className={styles.titleRec}>Pablo Re</p>
          </div>
          <Image src='/pablorefullstack2.jpg' alt="fotocv" width={125} height={183} className={styles.imagen1} />
          
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
      <h2 className={styles.extrasTitle} id='extras'>Extras</h2>
      <CardVideo/>
      </div>
      </div>
      

      </section>

  </>
  )
}
