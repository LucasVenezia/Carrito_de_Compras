import Item from "./item/Item";


const List = ({products}) => {
    return (
        <div className="row">
            {products.map((product,indice) => {
                return <Item product={product}/>
            })}
        </div>

        
    )}



export default List;