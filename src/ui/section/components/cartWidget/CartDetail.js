import { useContext } from "react";
import { cartContext } from "../../../layout/component/context/CartContext";

const CartDetail = () => {

    const {shopCart} = useContext(cartContext)
    const {removeItem} = useContext(cartContext)
    const {clear} = useContext(cartContext)
    console.log(shopCart)

    return ( 
        <div className="container">
            <ul>
                {shopCart.map((shopCart)  => {
                    return <li key={shopCart.id}>
                                Producto: {shopCart.name} 
                                Precio: $ {shopCart.price} 
                                cantidad: {shopCart.qty} 
                                <button type="button" onClick={() => removeItem(shopCart.id)}>Borrar Producto</button>
                            </li>})}
                            
            </ul>
            <button type="button" onClick={() => clear()}>Vaciar Carrito</button>
        </div>
    );
}

export default CartDetail;