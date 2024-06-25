import React from 'react'
import "./habilidadesBlandas.scss"

export const HabilidadesBlandas = () => {
    return (
        <div className="contenedorHabilidadesBlandas">
            <div className="contenedorTitulo">
                <div className="titulo">
                    <img className='logoSeccion' src="/HabilidadesBlandas.svg" alt="" />
                    <h1 className='textoTitulo'>Habilidades blandas</h1>
                </div>
                <div className="descripcionSeccion">
                    <p>habilidades interpersonales y cualidades que me permiten colaborar efectivamente, resolver problemas y liderar proyectos con éxito.</p>
                </div>
            </div>
            <div className="habilidadesBlandas">
                <div className="tarjetaHabilidad">
                    <p>Trabajo en equipo</p>
                </div>    
                <div className="tarjetaHabilidad">
                    <p>Empatía</p>
                </div>    
                <div className="tarjetaHabilidad">
                    <p>Creatividad</p>
                </div>    
                <div className="tarjetaHabilidad">
                    <p>Escucha activa</p>
                </div>    
                <div className="tarjetaHabilidad">
                    <p>Orientación al cliente</p>
                </div>    
            </div> 
        </div>
    )
}
