import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Soy el Home, Hacé click en Catálogo para ver los productos...
            </div>
            <img src="/img/ferreteria.jpeg" alt="ferreteria" className="mx-auto d-block img-fluid img-thumbnail"/>
        </div>
    )
}

export default Home
