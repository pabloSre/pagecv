'use client'

import React from "react"
import styles from './CardVideo.module.css';

export function CardVideo() {
  return (
    <>
    <section className={styles.inicioV}>
      <div className={styles.rectanguloV}>
        <div className={styles.video1}>
          <img src='/videocard.png'  className={styles.imagenV} alt="video youtube" />
        </div>
      </div>
    </section>
    </>
)}