import { Link } from "react-router-dom";

const Item = ({product}) => {
    
    return (
        <div className="card mt-5 ms-5" style= {{width: "18rem"}}>
            <img src={product.img} className="card-img-top img-fluid" style={{height: "40vh"}} alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.title} <br />${product.price},00</h5>
                <Link to={`/producto/detalle/${product.id}`} className="btn btn-danger">Detalles</Link>
            </div>
        </div>
        
        
    );
};

export default Item;