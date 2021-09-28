import Item from "./item/Item";
import { getProductsByCat } from "../../../../../utils/getProductsByCat"


const List = ({products}) => {

        return (
        <div className="row">
            {products.map((product,index) => {
                return <Item key={index} product={product}/> 
            })}
        </div>

        
    )}



export default List;