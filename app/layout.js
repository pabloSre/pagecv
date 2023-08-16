import { Navigation } from './components/navigation'

import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>Wiki Pablo Re</title>
      </head>
      <body>
        <Navigation/>
        {/* generales componentes */}
        {children}
      </body>
    </html>
  )
}
