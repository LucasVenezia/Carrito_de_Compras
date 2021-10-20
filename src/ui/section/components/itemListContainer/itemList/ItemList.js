import Item from "./item/Item";

const List = ({products}) => {

        return (
            <div className="row">
                {products.map((product,index) => {
                    return <Item key={index} product={product}/> 
                })}
            </div>
    )}

export default List;