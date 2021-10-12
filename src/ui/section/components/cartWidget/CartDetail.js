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
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-center">Producto</th>
                            <th scope="col" className="text-center">Precio Unitario</th>
                            <th scope="col" className="text-center">Subtotal</th>
                            <th scope="col" className="text-center"><button type="button" className="btn btn-danger" onClick={() => clear()}>Vaciar Carrito</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {shopCart.map((shopCart)  => {
                        const subTotal = shopCart.price * shopCart.qty; 
                        totalList.push(subTotal);

                        return (
                            <tr key={shopCart.id}>
                                <td className="text-center">{shopCart.qty}</td>
                                <td className="text-center">{shopCart.name}</td>
                                <td className="text-center">$ {shopCart.price},00</td>
                                <td className="text-center">$ {subTotal},00</td>
                                <td className="text-center"><button type="button" className="btn btn-danger" onClick={() => removeItem(shopCart.id)}>Borrar Producto</button></td>
                            </tr>
                        )}
                        )}
                        <tr>
                            <td className="text-center"><Link to="/productos" className="btn btn-warning ms-3">Seguir Comprando</Link></td>
                            <td className="text-center"></td>
                            <td className="text-center"><h4>Total:</h4></td>
                            <td className="text-center"><h4>${totalList.reduce((prev,next) => prev + next)},00</h4></td>
                            <td className="text-center"><Link to="/checkout" className="btn btn-success">Finalizar Compra</Link></td>
                        </tr>
                    </tbody>
                </table>
            {/* <ul>
                
                            
            </ul> */}
            <div className="mt-3 mb-3 col-auto">
                
                
                
            </div>
            
        </div>
        }
        </>) 
}

export default CartDetail;