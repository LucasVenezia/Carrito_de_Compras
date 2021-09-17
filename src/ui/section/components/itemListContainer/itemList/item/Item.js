import Count from "./itemCount/ItemCount";


const Item = ({product}) => {
    return (
        <div className="card mt-5 ms-5" style= {{width: "18rem"}}>
            <img src={product.img} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.title} <br />${product.price},00</h5>
                <p className="card-text">{product.description}</p>
                <Count/>
            </div>
        </div>
        
        
    );
};

export default Item;