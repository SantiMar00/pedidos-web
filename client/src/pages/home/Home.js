import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ListaProductos from '../../components/ListaProductos'
import AuthService from '../../services/auth.service'
import './Home.css'
//import ListaProductos from '../../components/ListaProductos'

function Home() {
    let history = useHistory()

    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser())

    const products = [
        {
            id: 1,
            nombre: 'Monitor',
            descripcion: 'Esto es un monitor',
            precio: '$10.000',
        },
        {
            id: 2,
            nombre: 'Teclado',
            descripcion: 'Esto es un teclado',
            precio: '$8.000',
        },
        {
            id: 3,
            nombre: 'Mouse',
            descripcion: 'Esto es un Mouse',
            precio: '$6.000',
        },
        {
            id: 4,
            nombre: 'Parlante',
            descripcion: 'Esto es un Parlante',
            precio: '$10.000',
        },
        {
            id: 5,
            nombre: 'Mousepad',
            descripcion: 'Esto es un mousepad',
            precio: '$1.000',
        },
    ]

    const productList = products.map((product) => (
        <ListaProductos key={product.id} product={product} />
    ))

    const logout = () => {
        AuthService.logout()
        setCurrentUser()
        history.push('/')
    }

    return (
        <div className="container-fluid mainwrapper">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Pedidos Web
                    </a>
                </div>
            </nav>
            <div className="container-fluid productos">{productList}</div>
            <h1>Bienvenido {currentUser.username}</h1>
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={logout}
                >
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default Home
