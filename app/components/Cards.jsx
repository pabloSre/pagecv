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
          <div className={styles.img}>
          <img src="generadorPerfiles.png" className={styles.imgCard1} alt='random profile' />
          </div>
          <div className={styles.descripcion}>
          <h1 className={styles.titleCard}>Generador de perfiles{/*EN INGLES Random profile */}</h1>
          <p className={styles.textCard}>
            Genera perfiles atravez de una api  
          </p>
          </div>
          </div>
          <div className={styles.ContenedorLink}>
            <div className={styles.Link}>
            <LuExternalLink className={styles.deploy}/>
            <a className={styles.linkDeploy} href="https://stalwart-gnome-b94e4a.netlify.app/">Ir al link </a>
            </div>
          </div>
        


        <div className={styles.card2}>
        <div className={styles.img}>
          <img src="portafolio2tienda.png" className={styles.imgCard2} alt='Tu Shop' />
          {/* buscar una imagen mejor y hacer deploy  */}
          </div>
          <div className={styles.descripcion}>
          <h1 className={styles.titleCard}>Tienda</h1>
            <p className={styles.textCard}>Tienda fictisia para crear compras
          </p>
          </div>
        </div>

        <div className={styles.card3}>
        <div className={styles.img}>
          <img src="workpending3.png" className={styles.imgCard1} alt='work pending' />
          </div>
          <div>
          <h1 className={styles.titleCard}>Work pending</h1>
          <p className={styles.textCard}>
          Agregar, editar y eliminar tareas. 
          </p>
          </div>
        </div>

      </section>
      
      <section className={styles.cardAbajo}>
      <div className={styles.card4}>
        
          <img src="login1.jpg" className={styles.imgCard1} alt='App login' />
          <a href="">
          <h1 className={styles.titleCard}></h1>
          <p className={styles.textCard}>
            Lorem ipsum dolor sit ameae provident dicta numquam. Hic, incidunt.
          </p>
          </a>
        </div>
        <div className={styles.card5}>
          
          <img src="detek2.png" className={styles.imgCard1} alt='Detek' />
          <a href="">
          <h1 className={styles.titleCard}></h1>
          <p className={styles.textCard}>
            Lorem ipsum dolor sit ameae provident dicta numquam. Hic, incidunt.
          </p>
          </a>
        </div>
        <div className={styles.card6}>
          
          <img src="" alt='#' />
          <a href="">
          <h1 className={styles.titleCard}></h1>
          <p className={styles.textCard}>
            Lorem ipsum dolor sit ameae provident dicta numquam. Hic, incidunt.
          </p>
          </a>
        </div>
      </section>
    </section>
    </>
  )
}