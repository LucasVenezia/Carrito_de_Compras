import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {

    

    return (
        <div className="container">
            <h3>Error 404</h3>
            <img src="/img/enConstruccion.png" alt="EnConstruccion" className="mx-auto d-block"/>
            <Link to="/home" className="btn btn-success ms-3 mx-auto d-block">Regresar</Link>

            
        </div>
    )
}
