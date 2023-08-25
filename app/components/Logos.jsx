'use client'

import React from 'react';
import styles from './Logos.module.css';

export function Logos() {
return(
<>

<div className={styles.containerIcon} >

        <img src='/wiki.png' alt='mundowiki'  className={styles.logo}/>

        <div className={styles.textWiki}>
        <img src='/wikipedia.svg' alt='wiki' className={styles.logo2}/>
        
        <img src='/laenciclopedia.svg' alt='laenciclopedia' className={styles.logo3}/>
        </div>
      </div>
</>
)
}