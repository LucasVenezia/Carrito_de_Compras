import { useContext } from "react";
import { cartContext } from "../../../layout/component/context/CartContext";
import { Link } from "react-router-dom";

const CartDetail = () => {
    const {shopCart, removeItem, clear} = useContext(cartContext)
    const totalList = [0]
    
    return ( 
        <>
        {shopCart.length === 0?
        <div className="container">
            <h2>El Carrito esta vacio </h2>
            <Link to="/productos" className="btn btn-success mt-3">Ir al Catálogo</Link>
            
        </div>
        
        :  <div className="container">
            <ul>
                {shopCart.map((shopCart)  => {
                    const subTotal = shopCart.price * shopCart.qty; 
                    totalList.push(subTotal);

                    return (<li key={shopCart.id}>
                                Producto: {shopCart.name} 
                                Precio: $ {shopCart.price},00
                                cantidad: {shopCart.qty} 
                                Subtotal: $ {subTotal},00
                                <button type="button" className="btn btn-danger mt-3" onClick={() => removeItem(shopCart.id)}>Borrar Producto</button>
                            </li>)})}
                            
            </ul>
            <div className="mt-3 mb-3 d-flex">
                <button type="button" className="btn btn-danger ms-3" onClick={() => clear()}>Vaciar Carrito</button>
                <Link to="/productos" className="btn btn-warning ms-3">Seguir Comprando</Link>
                <Link to="/checkout" className="btn btn-success ms-3">Finalizar Compra</Link>
            </div>
            <h3>Total: ${totalList.reduce((prev,next) => prev + next)},00</h3>
        </div>
        }
        </>) 
}

export default CartDetail;