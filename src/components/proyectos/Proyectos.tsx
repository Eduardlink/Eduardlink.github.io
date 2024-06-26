import React from 'react'
import "./proyectos.scss";


const Proyectos = () => {
    return (
        <div className='proyectos'>
            <div className="contenedorTitulo">
                <div className="titulo">
                    <img src="/CodeFolder.svg" alt="" />
                    <h1>Mi portafolio</h1>
                </div>
                <p>Explora una colección de mis trabajos de diseño más innovadores y visualmente impresionantes.</p>
            </div>
            <div className="contenedorProyectos">
                <div className="tarjetaProyecto">
                    <div className="portadaProyecto">
                        <img src="/GourmetGo.png" alt="" />
                    </div>
                    <div className="textoProyecto">
                        <div className="encabezado">
                            <h2>Gourmet Go</h2>
                            <div className="botones">
                                <a href="https://github.com/PSW-GourtmetGO" target="_blank">
                                    <img src="/github.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="etiquetas">
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/nextjs.svg" alt="" />
                                <p>NextJs</p>
                            </div>
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/tailwind.svg" alt="" />
                                <p>Tailwind</p>
                            </div>
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/node-js.svg" alt="" />
                                <p>NodeJs</p>
                            </div>
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/mysql.svg" alt="" />
                                <p>MySQL</p>
                            </div>
                        </div>
                        <div className="descripcion">
                            <p>Plataforma de gestión de restuarantes en línea, cuyo objetivo es agilizar el proceso de compra y brindar facilidades a pequeños negocios para surgir en el mercado digital.</p>
                        </div>
                    </div>
                </div>
                <div className="tarjetaProyecto">
                    <div className="portadaProyecto">
                        <img src="/MikuySearch.png" alt="" />
                    </div>
                    <div className="textoProyecto">
                        <div className="encabezado">
                            <h2>MikuySearch</h2>
                            <div className="botones">
                                <a href="https://dev-tourist-project.pantheonsite.io/" target="_blank">
                                    <img src="/Link01.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="etiquetas">
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/pantheon.png" alt="" />
                                <p>Pantheon</p>
                            </div>
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/wordpress.svg" alt="" />
                                <p>Wordpress</p>
                            </div>
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/divi.svg" alt="" />
                                <p>Divi</p>
                            </div>
                        </div>
                        <div className="descripcion">
                            <p>Proyecto que busca promover el turismo en la ciudad de Ambato, apoyando a los pequeños negocios. En el proyecto se ofrece un blog donde poder publicar sitios de interes, cuyo objetivo es atraer el turismo e impulsar la economía local.</p>
                        </div>
                    </div>
                </div>
                <div className="tarjetaProyecto">
                    <div className="portadaProyecto">
                        <img src="/VirtualAcademy.jpg" alt="" />
                    </div>
                    <div className="textoProyecto">
                        <div className="encabezado">
                            <h2>Virtual Academy</h2>
                            <div className="botones">
                                <a href="https://github.com/Eduardlink/VirtualAcademy_UnrealEngine" target="_blank">
                                    <img src="/github.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="etiquetas">
                        <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/unreal-engine.png" alt="" />
                                <p>Unreal Engine 5</p>
                            </div>
                        </div>
                        <div className="descripcion">
                            <p>Un mundo virtual dedicado a la enseñanza del idioma inglés. Se recrea una biblioteca que recorre los diferentes tiempos gramaticales, y con cada uno su ambientacion cambia para adaptarse al tiempo gramatical estudiado. Además los usuarios pueden interactuar con diferentes elementos del entorno.</p>
                        </div>
                    </div>
                </div>
                <div className="tarjetaProyecto">
                    <div className="portadaProyecto">
                        <img src="/finansi.jpg" alt="" />
                    </div>
                    <div className="textoProyecto">
                        <div className="encabezado">
                            <h2>Finansi</h2>
                            <div className="botones">
                                <a href="https://github.com/Eduardlink/SistemaPrestamos" target="_blank">
                                    <img src="/github.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="etiquetas">
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/angular.svg" alt="" />
                                <p>Angular</p>
                            </div>
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/typescript.svg" alt="" />
                                <p>Typescript</p>
                            </div>
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/node-js.svg" alt="" />
                                <p>NodeJs</p>
                            </div>
                            <div className="etiquetaPortafolio">
                                <img className='logoEtiqueta' src="/logos/mysql.svg" alt="" />
                                <p>MySQL</p>
                            </div>
                        </div>
                        <div className="descripcion">
                            <p>Es un simulador de prestamos e inversiones. En el se puden registrar entidades bancarias y registrar los valores de intereses a cobrar. El objetivo de la plataforma es unificar en un solo sitio la información de diferentes entidades bancarias.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos