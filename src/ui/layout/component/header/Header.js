import "./title.css";
import Nav from "../navbar/NavBar"

const Header = ({cart}) => {
    return ( 
        <header>    
            <Nav cart={cart}/>
        </header>  
    );
}

export default Header;