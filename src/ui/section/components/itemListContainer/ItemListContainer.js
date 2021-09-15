const ItemListContainer = ({onSum, onSubstract, value, onAdd}) => {

    return ( 
        <>
        <h2 className = "title">
            Productos
        </h2>
        <div className="row">
            <div className="card mt-5 ms-5" style= {{width: "18rem"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7SjAAUzeAh4z0GdOuXvVcLK7ibD_MniK_eRMooCdnw-dcFLtGYYFdtWRmA&usqp=CAc" className="card-img-top" alt="taladro" />
                <div className="card-body">
                    <h5 className="card-title">Taladro Atornillador 20V Stanley</h5>
                    <p className="card-text">Tecnología de excelencia. Su mandril de 13 mm te permitirá manipular fácilmente la herramienta de manera segura y precisa. Además, su velocidad variable 
                                                ofrece una gran experiencia de uso, adaptada a tus necesidades y requerimentos.</p>
                    <a href="#as" className="btn btn-primary" onClick={onAdd}>Agregar al Carrito</a>
                    <div className= "btn-addSub mt-3">
                        <a href="#as" className="btn btn-danger ms-3 me-3" onClick={onSubstract}>-</a>
                        <span>{value}</span>
                        <a href="#as" className="btn btn-danger ms-3" onClick={onSum}>+</a>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default ItemListContainer;