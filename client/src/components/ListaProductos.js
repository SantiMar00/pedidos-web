import React from 'react'
import './../pages/home/Home.css'

function ListaProductos({ product }) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card pepe">
                        <div className="card-body">
                            <h5 className="card-title">{product.nombre}</h5>
                            <p className="card-text">{product.descripcion}</p>
                            <button className="btn btn-primary">
                                Añadir al carro
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaProductos
