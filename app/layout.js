import { Navigation } from './components/navigation'

import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (/*  REVISAR REESTRUCTURACION COMPONENTES 
  Y ROOTLAYOUT */
    <html lang="en">
      <head>
      <title>Wiki Pablo Re</title>
      </head>
      <body data-theme='dark' >
        <Navigation/>
        {/* generales componentes */}
        {children}
      </body>
    </html>
  )
}
