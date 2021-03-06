import "./title.css";
import CartWidget from "../../../section/components/cartWidget/CartWidget";
import LogIn from "../../../section/components/login/LogIn";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const Header = () => {

    const categories = [
        {id:0, href:"/productos", texto:"Productos"},
        {id:1, href:"/productos/ferreteria", texto:"Ferretería"},
        {id:2, href:"/productos/maquinas", texto:"Máquinas"}
    ]


    return ( 
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <h1 className="title">
                            FERRETERIA ALVEAR
                        </h1>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catálogo</NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {categories.map(category =>(
                                        <li key={category.id}>
                                            <NavLink className="dropdown-item" to={category.href}>{category.texto}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/faq">FAQ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/contacto">Contacto</NavLink>
                            </li>    
                        </ul>
                        <LogIn/>
                        <CartWidget/>
                    </div>
                </div>
            </nav>    
        </header>  
    );
}

export default Header;