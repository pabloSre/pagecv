'use client'

import React from "react";
import styles from './CardVideo.module.css';
import {GrYoutube} from 'react-icons/gr';
import Image from 'next/image';
export function CardVideo() {
  return (
    <>
    <section className={styles.inicioV}>
      <div className={styles.rectanguloV}>
        <div className={styles.video1}>
          <Image src='/videocard.png'  className={styles.imagenV} alt="video youtube" width={210} height={109}/>
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