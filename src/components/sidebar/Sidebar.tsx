// src/components/sidebar/Sidebar.tsx
import React from 'react';
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="perfil">
        <img src="/edu.png" alt="Profile" />
      </div>
      <div className="menu">
        <a href="#inicio" aria-label='Inicio'><img src="/home.svg" alt="Home" /></a>
        <a href="#stack" aria-label='Mi stack'><img src="/stack.svg" alt="Habilidades" /></a>
        <a href="#proyectos" aria-label='Mis proyectos'><img src="/CodeFolder.svg" alt="Portafolio" /></a>
      </div>
      <div className="boton">
        <a href="#inicio"><img src="/arrow-up.svg" alt="Contacto" /></a>
      </div>
    </div>
  );
};

export default Sidebar;
