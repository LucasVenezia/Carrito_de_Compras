import Count from "./itemCount/ItemCount";
import { Link } from "react-router-dom";



const ItemDetail = ({product}) => {


    return (
        <div className="card mt-5 ms-5 d-flex" style= {{width: "18rem"}}>
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.title} <br />${product.price},00</h5>
                <p className="card-text">{product.description}</p>
                <Count stock={product.stock}/>
                <br/>
                <Link to="/" className="btn btn-success mt-3">Volver</Link>
                
            </div>
        </div>
        
        
    );
};

export default ItemDetail;