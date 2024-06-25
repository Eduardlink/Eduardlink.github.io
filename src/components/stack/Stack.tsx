import React from 'react'
import "./stack.scss";



const Stack = () => {
    return (
        <div className='miStack'>
            <div className="contenedorTitulo">
                <div className="titulo">
                    <img className='logoSeccion' src="/stack.svg" alt="" />
                    <h1 className='textoTitulo'>Tecnologías</h1>
                </div>
                <div className="descripcionSeccion">
                    <p>Herramientas con las que tengo experiencia desarrollando.</p>
                </div>
            </div>
            <div className="stacks">
                <div className="tarjeta">
                    <div className="portadaStack java">
                        <img src="/logos/java.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Java</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack javascript">
                        <img src="/logos/javascript.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Javascript</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack python">
                        <img src="/logos/python.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Python</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack mysql">
                        <img src="/logos/mysql.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>MySQL</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack sqlite">
                        <img src="/logos/sqlite.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>SQLite</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack angular">
                        <img src="/logos/angular.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Angular</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack react">
                        <img src="/logos/react.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>React</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack wordpress">
                        <img src="/logos/wordpress.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Wordpress</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack figma">
                        <img src="/logos/figma.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Figma</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack adobexd">
                        <img src="/logos/adobe-xd.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Adobe xd</h2>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack illustrator">
                        <img src="/logos/adobe-illustrator.svg" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Illustrator</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack