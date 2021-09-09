import Cart from "./CartWidget";
import "./styles/navBar.css";

const Nav = () => {
    return (
            <nav className="menu">
                <a className="nav-enlace" href="#">Home</a>
                <a className="nav-enlace" href="#">Productos</a>
                <a className="nav-enlace" href="#">Preguntas Frecuentes</a>
                <a className="nav-enlace" href="#">Contacto</a>
                <Cart/>
            </nav> 
    )
}

export default Nav

