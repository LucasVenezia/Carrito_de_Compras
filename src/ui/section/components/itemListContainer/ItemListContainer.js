import { useEffect, useState } from "react";
import List from "./itemList/ItemList";
import "./title-container.css"
import { serverProducts } from "../../../../data/Products";
import { useParams } from "react-router";

const ItemListContainer = () => {
    const [products,setProducts] = useState ([])
    const { id } = useParams();
    
        
    useEffect (() => {
        const simulator = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(serverProducts)
            },1000)
        })
        if(id){
            simulator
            .then(data => {
                setProducts(data.filter(item => item.cat === id))
            })
        }else{
            simulator
            .then((resultado) => {
                setProducts(resultado)
            })
        }
    },[id])
        return(
            <>
            
                {products.length === 0? 
                <div>
                    <div>
                        <h2 className = "title-container"> 
                            Productos
                        </h2>
                        <hr />   
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-danger" role="status"></div>
                    </div>
                </div>
            : <div>
                <div>
                <h2 className = "title-container">
                    Productos
                </h2>
                <hr />   
            </div>
            <List products={products}/>
            </div>
            }
            </>
        )
    
    
}
    export default ItemListContainer;