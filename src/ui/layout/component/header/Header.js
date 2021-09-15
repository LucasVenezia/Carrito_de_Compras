import "./titulo.css";
import Nav from "../navbar/NavBar"

const Header = ({cart}) => {
    return ( 
        <header>    
                <h1 className="title">
                FERRETERIA ALVEAR
                </h1> 
                <Nav cart={cart}/>
            </header>  
    );
}

export default Header;