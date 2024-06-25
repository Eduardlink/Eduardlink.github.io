import React from 'react'
import "./hobbies.scss"

export const Hobbies = () => {
  return (
    <div className='contenedorHobbies'>
        <div className="contenedorTitulo">
                <div className="titulo">
                    <img className='logoSeccion' src="/Hobbies.svg" alt="" />
                    <h1 className='textoTitulo'>Hobbies</h1>
                </div>
                <div className="descripcionSeccion">
                    <p>Un vistazo a las actividades y pasatiempos que disfruto en mi tiempo libre.</p>
                </div>
            </div>
            <div className="hobbies">
                <div className="tarjetaHobby">
                    <p>Fotografía</p>
                </div>    
                <div className="tarjetaHobby">
                    <p>Diseño gráfico</p>
                </div>    
                <div className="tarjetaHobby">
                    <p>Seguimiento de avances tecnológicos</p>
                </div>    
                <div className="tarjetaHobby">
                    <p>Interés por el espacio</p>
                </div>    
                <div className="tarjetaHobby">
                    <p>Tecnología en el sector automotriz</p>
                </div>    
            </div> 
    </div>
  )
}
