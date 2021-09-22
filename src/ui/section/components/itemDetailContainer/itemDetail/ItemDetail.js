


const ItemDetail = ({detail}) => {
    return (
        <div className="card mt-5 ms-5" style= {{width: "18rem"}}>
            <img src={detail.img} className="card-img-top" alt={detail.name} />
            <div className="card-body">
                <h5 className="card-title">{detail.title}</h5>
                <p className="card-text">{detail.description}</p>
                
            </div>
        </div>
        
        
    );
};

export default ItemDetail;