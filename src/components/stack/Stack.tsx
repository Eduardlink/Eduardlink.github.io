import React from 'react'
import "./stack.scss";



const Stack = () => {
    return (
        <div className='miStack'>
            <div className="contenedorStack">
                <div className="titulo">
                    <img src="/stack.svg" alt="" />
                    <h1>Mi stack</h1>
                </div>
                <p>Herramientas con las que tengo experiencia desarrollando.</p>
            </div>
            <div className="stacks">
                <div className="tarjeta">
                    <div className="portadaStack java">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Java</h2>
                        <p>Lenguaje de programación</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack javascript">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Javascript</h2>
                        <p>Lenguaje de programación</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack python">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Python</h2>
                        <p>Lenguaje de programación</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack mysql">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>MySQL</h2>
                        <p>Base de datos</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack sqlite">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>SQLite</h2>
                        <p>Base de datos</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack sqlserver">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>SQL Server</h2>
                        <p>Base de datos</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack angular">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Angular</h2>
                        <p>Framework</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack react">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>React</h2>
                        <p>Framework</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack wordpress">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Wordpress</h2>
                        <p>Sistema de gestión de contenido</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack figma">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Figma</h2>
                        <p>Editor de gráficos vectoriales</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack adobexd">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Adobe xd</h2>
                        <p>Editor de gráficos vectoriales</p>
                    </div>
                </div>
                <div className="tarjeta">
                    <div className="portadaStack illustrator">
                        <img src="" alt="" />
                    </div>
                    <div className="infoStack">
                        <h2>Illustrator</h2>
                        <p>Editor de gráficos vectoriales</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack