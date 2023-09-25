'use client'

import { useState } from 'react';
import styles from './homepage.module.css';
import { TfiMenuAlt } from 'react-icons/tfi';
import {IoIosArrowDown} from 'react-icons/Io';
import { Biografia } from '../components/Biografia';
import { Cards } from '../components/Cards';

export function HomePage() {
  
  /* EXPORT DEFAULT HACE QUE NO TENGAS QUE EXPORTARLO AL FINAL DEL PROYECTO */
    //abrir menu hamburguesa
    const [isMenu2Open, setIsMenu2Open] = useState(false);
    /* 
    const [isArrowRotated, setIsArrowRotated] = useState(false);
   VER ARROW ROTATED EN SWITCH Y REPLICAR ACA */
    const [isInputIdiomasOpen, setIsInputIdiomaOpen] = useState(false);
    /*  const [isVerMasOpen, setIsVerMasOpen] = useState(false);
    
    const handleVerMasOpen = () => {
      isVerMasOpen(!setIsVerMasOpen)
    } */
    const toggleMenu2 = () => {
      setIsMenu2Open(!isMenu2Open)
    }

    
    
    const toggleInputIdioma = () => {
      setIsInputIdiomaOpen(!isInputIdiomasOpen)
    }
  return (
    <>
    {/* <div className={styles.paddingHome}> */}
    <section className={styles.nav2}>
      <div className={styles.navleft}>
        
        <div className={`${styles.menu2} ${isMenu2Open ? styles.menu2Blue : ''}`}>
          <TfiMenuAlt 
            className={styles.menuHome}
            onClick={toggleMenu2}
            />
        </div>

      <div className={`${styles.menuHome2} ${isMenu2Open ? styles.menuHome2Open : ''}`}>
        <ul className={`${styles.menuList} ${isMenu2Open  ? styles.menuListActive : ''}`}>
          <li className={styles.listZonas}>
            <a className={styles.zonas}href="#inicio">
              Inicio</a>
            <a className={styles.zonas}href="#proyectos">
              Proyectos</a>
            <a className={styles.zonas}href="#curriculum">
              Curriculum</a>
            <a className={styles.zonas}href="#extras">
              Extras</a>
          </li> 
        </ul>
      </div>
      <h1 className={styles.title}>Pablo Re</h1>
      </div>

      <section className={styles.inputIdiomas}
                onClick={toggleInputIdioma}>
      <label className={styles.idiomas}>
          <img src="https://es.wikipedia.org/w/load.php?modules=skins.vector.icons&image=language&variant=progressive&format=original&skin=vector-2022&version=1vw3w" 
          className={styles.iconLeng}
          alt="idiomas" />
        <p className={styles.cantidadIdiomas}>Cambiar idioma</p>
        <IoIosArrowDown className={styles.arrow}/>
      </label>
        {/* {isInputIdiomasOpen && ( */}
      <ul className={`${styles.listIdiomas} ${isInputIdiomasOpen ? styles.listIdiomaOpen : ''}`}>
        <li className={styles.idiomas2}>Ingles</li>
        </ul>
      </section>

    </section>

    <section className={styles.nav3}>
        <div className={styles.nav3Left}>
        <p className={styles.articulo}>Articulo</p>
        <p className={styles.discusion}>Discusion</p>
        </div>
        {/* AGREGAR articulo + discucsion + rigth herramientas */}

        <div className={styles.nav3Rigth}>
            <p className={styles.herramientas}>Herramientas</p>
            
        </div>
      </section>

      <Biografia id='inicio'/>
      <Cards/>
{/* 
      <section id='etimologia' className={styles.etimologia}>
        texto 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum, ut quasi voluptatum veritatis nisi odit explicabo repudiandae debitis alias, nihil iste maxime? Vero repellat accusantium veniam consequuntur commodi perferendis!
      </section>

      <section id='historia' className={styles.historia}>
        texto 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore quasi facere qui sequi exercitationem commodi similique ea veniam cumque, nihil voluptas. Reiciendis recusandae harum ipsa. Magni dicta iusto sed.
      </section>

      <section id='curriculumVitae' className={styles.extra}>
          texto 4Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque, quisquam sequi ullam esse fugiat repudiandae enim! Aperiam assumenda asperiores voluptatum molestias in cum eligendi quibusdam, fugit ad? Modi, velit?
      </section>

      <section id='referencias' className={styles.referencias}>
        Texto 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laboriosam dolorum facilis perferendis odit architecto delectus? Minus unde aliquid sunt hic ullam fugit velit pariatur recusandae, enim, quia provident corporis!
      </section>

      <section id='extras' className={styles.extras}>
        Texto 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laboriosam dolorum facilis perferendis odit architecto delectus? Minus unde aliquid sunt hic ullam fugit velit pariatur recusandae, enim, quia provident corporis!
      </section> */}

    
    {/* </div> */}
    </>
  )
}