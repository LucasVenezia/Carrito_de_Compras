import { NavLink } from "react-router-dom";

const Cart = () => {
    return ( 
        <>
        <NavLink className="material-icons nav-link" to="/carrito">
            add_shopping_cart 
        </NavLink> 
        <span className="nav-link">0</span>
        
        </>);
}

export default Cart;