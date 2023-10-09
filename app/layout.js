'use client'
import React from 'react';
import Navigation from './components/navigation';

import '../styles/globals.css';

export default function RootLayout({ children, theme }) {
  return (/*  REVISAR REESTRUCTURACION COMPONENTES 
  Y ROOTLAYOUT */
    <html lang="en">
      <head>
      <title>Wiki Pablo Re</title>
      </head>
      <body data-theme='dark' >
        <Navigation theme={theme} />
        {/* generales componentes */}
        {children}
      </body>
    </html>
  )
}
