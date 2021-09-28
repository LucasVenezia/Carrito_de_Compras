import Cart from "../../../section/components/cartWidget/CartWidget";
import LogIn from "../../../section/components/login/LogIn";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const Nav = ({cart}) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home">
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
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catálogo</NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <NavLink className="dropdown-item" to="/productos">Productos</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/productos/ferreteria">Ferretería</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/productos/maquinas">Máquinas</NavLink>
                                    </li>
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
                        <Cart cart={cart}/>
                    </div>
                </div>
            </nav>
    )
}

export default Nav

