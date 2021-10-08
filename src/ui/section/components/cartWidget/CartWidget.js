import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../layout/component/context/CartContext";



const CartWidget = () => {
const {shopCart} = useContext(cartContext)

    return ( 
        <>
        <NavLink className="material-icons nav-link d-flex" to="/carrito">
            add_shopping_cart 
        </NavLink> 
        <div className={shopCart.length === 0? "visually-hidden":"d-flex nav-link"}>
            <label><b>{shopCart.reduce((acc,{qty}) => acc + qty, 0)}</b></label>
            
        </div>
        </>
    );
}

export default CartWidget;