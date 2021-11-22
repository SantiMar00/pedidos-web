import { React, useState } from 'react'
import '../login/Login.css'
import { useHistory } from 'react-router-dom'
import AuthService from '../../services/auth.service'

function Login() {
    let history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userError, setUserError] = useState(<br></br>)
    const [passError, setPassError] = useState(<br></br>)

    const login = () => {
        if (!username && password) {
            setUserError('Usuario no puede estar vacío')
            setPassError(<br></br>)
        }
        if (!password && username) {
            setPassError('Contraseña no puede estar vacío')
            setUserError(<br></br>)
        }
        if (!username && !password) {
            setUserError('Usuario no puede estar vacío')
            setPassError('Contraseña no puede estar vacío')
        }
        if (username && password) {
            AuthService.login(username, password)
                .then(() => {
                    history.push('/home')
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
    }

    return (
        <div className="container-fluid mainwrapper">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Pedidos Web
                    </a>
                    <a className="btn btn-primary" href="/register">
                        Registrarse
                    </a>
                </div>
            </nav>
            <div className="container-fluid form">
                <div className="title">
                    <h3>Bienvenido de nuevo!</h3>
                    <p>Inicia sesión</p>
                </div>
                <label htmlFor="user" className="form-label">
                    Usuario
                </label>
                <input
                    type="username"
                    className="form-control username"
                    id="user"
                    placeholder="Usuario"
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                ></input>
                <div>{userError}</div>
                <label htmlFor="pass" className="form-label">
                    Contraseña
                </label>
                <input
                    type="password"
                    className="form-control password"
                    id="pass"
                    placeholder="Contraseña"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                ></input>
                <div>{passError}</div>
                <button
                    type="button"
                    className="btn btn-primary signup"
                    onClick={login}
                >
                    Log In
                </button>
            </div>
        </div>
    )
}

export default Login
