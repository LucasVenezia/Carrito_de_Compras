import { useContext } from "react";
import { cartContext } from "../../../../layout/component/context/CartContext";
import Count from "./itemCount/ItemCount";
import { Link } from "react-router-dom";



const ItemDetail = ({product}) => {

    const {addItem} = useContext(cartContext)

    const onAdd = (qty) => {
        //console.log(qty);
        //console.log(product);
        addItem(product,qty)

    }


    return (
        <div className="card mt-5 ms-5 d-flex" style= {{width: "18rem"}}>
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.title} <br />${product.price},00</h5>
                <p className="card-text">{product.description}</p>
                <Count stock={product.stock} onAdd={onAdd}/>
                <br/>
                <Link to="/" className="btn btn-success mt-3">Volver</Link>
                <Link to="/carrito" className="btn btn-success ms-3 mt-3">Comprar</Link>
            </div>
        </div>
        
        
    );
};

export default ItemDetail;