'use client'

import React from "react"
import styles from './CardVideo.module.css';
import {GrYoutube} from 'react-icons/gr'
export function CardVideo() {
  return (
    <>
    <section className={styles.inicioV}>
      <div className={styles.rectanguloV}>
        <div className={styles.video1}>
          <img src='/videocard.png'  className={styles.imagenV} alt="video youtube" />
        </div>
        <p  className={styles.textVideo}>
          También produzco música electrónica solamente con mis equipos analógicos. Mira el contenido de youtube.
        </p>
      </div>
      <div className={styles.linkYt}>
          <a className={styles.linkYoutube}href='https://www.youtube.com/watch?v=wc8iFfIsSSU&ab_channel=PabloRec'>Link a  <GrYoutube className={styles.logoYoutube}/></a>
        </div>
    </section>
    </>
)}