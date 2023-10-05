'use cliente'
import React from 'react';
import styles from './Contacto.module.css';
import {FaGithubSquare} from 'react-icons/Fa';
import {AiFillLinkedin} from 'react-icons/Ai';
import {BiLogoGmail} from 'react-icons/Bi';

export function Contacto() {

  return(
  <>
  <section className={styles.contenedor} id='contacto'>
    <div className={styles.card}>
      <div className={styles.contenedorImg}>
        <img src="pablo33.jpeg" alt="imagen card" className={styles.imgContact} />
      </div>
      <section className={styles.redes}>
        <div className={styles.redesIcon}>
        <p className={styles.imgText}>Pablo Re Full Stack Developer</p>
          <div className={styles.icons}>
            <FaGithubSquare className={styles.iconCard1}/>
            <AiFillLinkedin className={styles.iconCard2}/>
            <BiLogoGmail className={styles.iconCard3}/>
          </div>
        </div>
        <p className={styles.textRedes}>
            Trabajemos juntos !
        </p>
      </section>  
    </div>  
  </section>
  </>
  )
}