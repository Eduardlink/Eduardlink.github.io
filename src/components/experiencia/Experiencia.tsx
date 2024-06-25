import React from 'react'
import "./experiencia.scss";

const Experiencia = () => {
  return (
    <div className="miExperiencia">
      <div className="contenedorTitulo">
        <div className="titulo">
          <img className='logoSeccion' src="/trabajo.svg" alt="" />
          <h1 className='textoTitulo'>Experiencia laboral</h1>
        </div>
        <div className="descripcionSeccion">
          <p>Un resumen de mi trayectoria profesional.</p>
        </div>
      </div>
      <div className="contenedorTarjetasExperiencia">
        <div className="tarjetaExperiencia">
          <div className="iconoTrabajo">
            <img src="/ti.svg" alt="" />
          </div>
          <div className="detalleTrabajo">
            <h2>
              Practicante gestión de TI
            </h2>
            <h3>
              Universidad Técnica de Ambato
            </h3>
            <p>
            Administración y soporteen el área de TI, de la Facultadade Ingeniería en Sistemas Eléctronica e Industrial.
            </p>
          </div>
          <div className="aniosTrabajo">
            <p>Enero 2019 - Marzo 2020</p>
          </div>
        </div>
        <div className="tarjetaExperiencia">
          <div className="iconoTrabajo">
            <img src="/mantenimiento.svg" alt="" />
          </div>
          <div className="detalleTrabajo">
            <h2>
              Mantenimiento equipos de cómputo
            </h2>
            <h3>
              Cyber Fercho
            </h3>
            <p>
              Trabaje realizando mantenimiento a equipos de cómputo, ademas de atención al cliente.
            </p>
          </div>
          <div className="aniosTrabajo">
            <p>2019 - 2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiencia