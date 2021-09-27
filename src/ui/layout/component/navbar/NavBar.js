import Cart from "../../../section/components/cartWidget/CartWidget";
import LogIn from "../../../section/components/login/LogIn";
import "./navBar.css";
import { NavLink } from "react-router-dom";

const Nav = ({cart}) => {
    return (
        <nav className="menu">
            <NavLink className="navbar-brand" to="/home">
                <h1 className="title">
                FERRETERIA ALVEAR
                </h1>
            </NavLink>
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
            <NavLink className="nav-link" to="/faq">Preguntas Frecuentes</NavLink>
            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            <LogIn/>
            <Cart cart={cart}/>
        </nav> 
        

            
    )
}

export default Nav

