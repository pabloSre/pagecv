'use client'
import React from 'react';
import styles from './Contacto.module.css';
import {FaGithubSquare} from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';
import Image from 'next/image';

export default function Contacto() {

  return(
  <>
  <section className={styles.contenedor} id='contacto'>
    <div className={styles.card}>
      <div className={styles.contenedorImage}>
        <Image src="/pablo33.jpeg" alt="imagen card" className={styles.ImageContact} width={100} height={100}/>
      </div>
      <section className={styles.redes}>
        <div className={styles.redesIcon}>
        <p className={styles.ImageText}>Pablo Re Full Stack Developer</p>
          <div className={styles.icons}>
          <a href='https://github.com/pabloSre'>
            <FaGithubSquare className={styles.iconCard1}/>
            </a>
          <a href='https://www.linkedin.com/in/pablo-re/'>
            <AiFillLinkedin className={styles.iconCard2}/>
            </a>
          <a href="mailto:pvdev.web@gmail.com?subject=Contact"> 
            <BiLogoGmail className={styles.iconCard3}/>
            </a>
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