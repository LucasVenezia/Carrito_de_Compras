import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../layout/component/context/CartContext";



const Cart = () => {

const  {shopCart} = useContext(cartContext);
console.log(shopCart);

    return ( 
        <>
        <NavLink className="material-icons nav-link d-flex" to="/carrito">
            add_shopping_cart 
        </NavLink> 
        <span className="nav-link d-flex">{shopCart.lenght}</span>
        
        </>);
}

export default Cart;