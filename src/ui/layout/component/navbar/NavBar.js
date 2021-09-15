import Cart from "../../../section/components/cartWidget/CartWidget";
import LogIn from "../../../section/components/login/LogIn";
import "./navBar.css";

const Nav = ({cart}) => {
    return (
        <nav className="menu">
            <a className="nav-link" href="#as">Home</a>
            <a className="nav-link" href="#as">Productos</a>
            <a className="nav-link" href="#as">Preguntas Frecuentes</a>
            <a className="nav-link" href="#as">Contacto</a>
            <LogIn/>
            <Cart cart={cart}/>
        </nav> 
        

            
    )
}

export default Nav

