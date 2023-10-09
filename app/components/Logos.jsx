'use client'
import React from 'react';
import styles from './Logos.module.css';
import Image from 'next/image';

export function Logos({ theme }) {
  const wikipediaLogoSrc = theme === 'dark' ? '/wikipediadark.svg' : '/wikipedia.svg';
  const enciclopediaLogoSrc = theme === 'dark' ? '/laenciclopediadark.svg' : '/laenciclopedia.svg';
  
  return (
    <div className={styles.containerIcon}>
      <Image src='/wiki.png' alt='mundowiki' className={styles.logo} />

      <div className={styles.textWiki}>
        <Image src={wikipediaLogoSrc} alt='wiki' className={styles.logo2} />
        <Image src={enciclopediaLogoSrc} alt='laenciclopedia' className={styles.logo3} />
      </div>
    </div>
  );
}