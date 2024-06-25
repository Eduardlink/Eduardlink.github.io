"use client";
import React from 'react'
import "./inicio.scss"
import { motion } from 'framer-motion'
import Contador from '../contador/Contador';


const variantesTexto = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
}

/*
<motion.div className="skills">
                <div className="titulo">
                    <h1>Skills</h1>
                </div>
                <div className="slide">
                    <div className="logos">
                        <img src="/html.svg" alt="" />
                        <img src="/css3.svg" alt="" />
                        <img src="/javascript.svg" alt="" />
                        <img src="/angular.svg" alt="" />
                        <img src="/java.svg" alt="" />
                        <img src="/photoshop.svg" alt="" />
                        <img src="/illustrator.svg" alt="" />
                    </div>
                    <div className="logos">
                        <img src="/html.svg" alt="" />
                        <img src="/css3.svg" alt="" />
                        <img src="/javascript.svg" alt="" />
                        <img src="/angular.svg" alt="" />
                        <img src="/java.svg" alt="" />
                    </div>
                </div>
            </motion.div>
*/

const Inicio = () => {
    return (
        <motion.div className='inicio' variants={variantesTexto} initial="initial" animate="animate">
            <motion.div className="sobreMi">
                <div className="portada">
                    <img className='imagenPrincipal' src="/Logo4.png" alt="" />
                </div>
                <div className="informacion">
                    <div className="tituloInicio">
                        <img className='logoSecundario' src="/Logo4.png" alt="" />
                        <div>
                            <h2>👋 Hola soy</h2>
                            <h1>Eduardo Pila</h1>
                        </div>
                    </div>
                    <p>
                        Soy ingeniero en software, apasionado por crear aplicaciones web y móviles que ofrezcan una experiencia 
                        de usuario intuitiva y atractiva. 
                        <br />
                        <br />
                        Además, tengo un gran interés en la creación de contenido multimedia. 
                        Esta pasión me ha permitido desarrollar habilidades complementarias que enriquecen mi trabajo en el diseño y 
                        desarrollo de interfaces. También cuento con experiencia en la reparación y mantenimiento de equipos de cómputo, 
                        permitiéndome abordar problemas técnicos de manera eficiente y efectiva.
                    </p>
                    <div className="botones">
                        <a href="mailto:eduardo_pila@outlook.com" className='btn'>
                            <span className='icon'><img src="/send.svg" alt="Enviar correo" /></span>
                            <span className='text'>Contáctame</span>
                        </a>
                        <a href="https://1drv.ms/b/s!Ao3I80Dm0cywa_EAWVHJ1pLtSMM?e=uS6zMd" target="_blank" className='btn'>
                            <span className='icon'><img src="/doc-paper.svg" alt="Enviar correo" /></span>
                            <span className='text'>Curriculum</span>
                        </a>
                    </div>
                </div>
            </motion.div>
            
            <motion.div className="contadores">
                <Contador number={20} title='Proyectos creados'></Contador>
                <Contador number={7} title='Cursos aprobados'></Contador>
                <Contador number={10} title='Logos diseñados'></Contador>
            </motion.div>
        </motion.div>
    )
}

export default Inicio