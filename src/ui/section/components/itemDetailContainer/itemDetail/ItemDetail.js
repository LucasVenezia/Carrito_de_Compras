import Count from "./itemCount/ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({detail}) => {

    return (
        <div className="card mt-5 ms-5" style= {{width: "18rem"}}>
            <img src={detail.img} className="card-img-top" alt={detail.name} />
            <div className="card-body">
                <h5 className="card-title">{detail.title} <br />${detail.price},00</h5>
                <p className="card-text">{detail.description}</p>
                <Count/>
                <Link to="/producto" className="btn btn-success mt-3">Volver</Link>
                
            </div>
        </div>
        
        
    );
};

export default ItemDetail;