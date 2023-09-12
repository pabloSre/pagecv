'use client'

import React from 'react';
import {LuExternalLink} from 'react-icons/Lu'
import styles from './Cards.module.css';

export function Cards() {
  return(
    <>
    <section className={styles.contenedorCards}>
      <section className={styles.cardArriba}>
        <div className={styles.card1}>
          <h1 className={styles.titleCard}>random profile</h1>
          <img src="portafolio2tienda.png" className={styles.imgCard1} alt='random profile' />
          <a href="">
          <LuExternalLink className={styles.deploy}/>
          </a>
        </div>
        <div className={styles.card2}>
          <h1 className={styles.titleCard}></h1>
          <img src="portafolio2tienda.png" className={styles.imgCard1} alt='Tu Shop' />
          <a href="">
          <LuExternalLink className={styles.deploy}/>
          </a>
        </div>
        <div className={styles.card3}>
          <h1 className={styles.titleCard}></h1>
          <img src="portafolio2tienda.png" className={styles.imgCard1} alt='work pending' />
          <a href="">
          <LuExternalLink className={styles.deploy}/>
          </a>
        </div>
      </section>
      <section className={styles.cardAbajo}>
      <div className={styles.card4}>
        <h1 className={styles.titleCard}></h1>
          <img src="" alt='App login' />
          <a href="">
          <LuExternalLink className={styles.deploy}/>
          </a>
        </div>
        <div className={styles.card5}>
          <h1 className={styles.titleCard}></h1>
          <img src="" alt='Detek' />
          <a href="">
          <LuExternalLink className={styles.deploy}/>
          </a>
        </div>
        <div className={styles.card6}>
          <h1 className={styles.titleCard}></h1>
          <img src="" alt='#' />
          <a href="">
          <LuExternalLink className={styles.deploy}/>
          </a>
        </div>
      </section>
    </section>
    </>
  )
}