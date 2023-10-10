'use client'
import React from 'react';
import styles from './Logos.module.css';
import Image from 'next/image';

export default function Logos({ theme }) {
  const wikipediaLogoSrc = theme === 'dark' ? '/wikipediadark.svg' : '/wikipedia.svg';
  const enciclopediaLogoSrc = theme === 'dark' ? '/laenciclopediadark.svg' : '/laenciclopedia.svg';
  
  return (
    <div className={styles.containerIcon}>
      <Image src='/wiki.png' alt='mundowiki' className={styles.logo} width={50} height={45} />

      <div className={styles.textWiki}>
        <Image src={wikipediaLogoSrc} alt='wiki' className={styles.logo2} width={120}  height={18}/>
        <Image src={enciclopediaLogoSrc} alt='laenciclopedia' className={styles.logo3} width={100} height={17} />
      </div>
    </div>
  );
}