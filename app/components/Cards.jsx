'use client'

import React from 'react';
import {LuExternalLink} from 'react-icons/Lu'
import styles from './Cards.module.css';

export function Cards() {

  const proyectos = [
    {
      titulo: 'Generador de perfiles',
      descripcion: 'Genera perfiles consumiendo de una api',
      imagen: 'generadorPerfiles.png',
      url: 'https://stalwart-gnome-b94e4a.netlify.app/'
    },
    {
      titulo: 'Tienda',
      descripcion: 'Tienda ficticia para crear compras, consumiendo una api',
      imagen: 'portafolio2tienda.png',
      url: 'https://stalwart-gnome-b94e4a.netlify.app/'
    },
    {
      titulo: 'Tareas pendientes',
      descripcion: 'Aplicación creada con React. Podés agregar, editar y eliminar tareas. ',
      imagen: 'workpending3.png',
      url: 'https://stalwart-gnome-b94e4a.netlify.app/'
    },
    {
      titulo: 'Login de usuarios',
      descripcion: 'Creada para realizar el login y registro de usuarios',
      imagen: 'login1.jpg',
      url: 'https://stalwart-gnome-b94e4a.netlify.app/'
    },
    {
      titulo: 'Detek',
      descripcion: 'Página web creada para empresa de productos electronicos',
      imagen: 'detek2.png',
      url: 'https://detek.com.ar/'
    },
    
  ]

  return(
    <>
    <section className={styles.sectionCards}>
    <div className={styles.containerCards}>
  {proyectos.map((proyecto, index) => (
    <div key={index} className={styles.card}>
      <figure className={styles.containerImage}>
        <img className={styles.image} src={proyecto.imagen} alt={proyecto.titulo} />
      </figure>

      <div className={styles.description}>
        <h1 className={styles.title}>{proyecto.titulo}</h1>
        <p className={styles.textCard}>{proyecto.descripcion}</p>
      </div>

      <div className={styles.link}>
        <a href={proyecto.url} className={styles.url}>
          <LuExternalLink className={styles.goUrl} />
        </a>
      </div>
    </div>
  ))}
</div>
</section>
</>
)
}