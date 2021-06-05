import Navbar from 'components/Navbar/Navbar'
import React from 'react'

//Recibe el children para renderizar la pagina
//Decimos que es un funcional component que react puede renderizar
export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>Esto es el footre</footer>
    </div>
  )
}
