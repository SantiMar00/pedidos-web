import React from 'react'
import '../landing/Landing.css'

function Landing() {
    return (
        <div className="container-fluid mainwrapper">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Pedidos Web
                    </a>
                </div>
            </nav>
            <div className="banner-image">
                <div className="banner-text">
                    <h1>Bienvenido a Pedidos Web</h1>
                    <p>Inicia sesión o registrate para continuar</p>
                    <a className="btn btn-secondary login" href="/login">
                        Iniciar Sesión
                    </a>
                    <a className="btn btn-primary register" href="/register">
                        Registrarse
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Landing
