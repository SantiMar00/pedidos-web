import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import ListaProductos from '../../components/ListaProductos'
import AuthService from '../../services/auth.service'
import './Home.css'

function Home() {
    let history = useHistory()

    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser())

    const [products, setProducts] = useState([])

    useEffect(() => {
        Axios.get('/products/')
            .then((res) => {
                console.log(res)
                setProducts(res.data.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

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
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={logout}
                    >
                        Log Out
                    </button>
                </div>
            </nav>
            <div className="container-fluid productos">{productList}</div>
            {/* <h1>Bienvenido {currentUser.username}</h1> */}
        </div>
    )
}

export default Home
