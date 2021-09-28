import { useEffect, useState } from "react";
import List from "./itemList/ItemList";
import "./title-container.css"
import { serverProducts } from "../../../../data/Products";



const ItemListContainer = () => {
    const [products,setProducts] = useState ([])

    useEffect (() => {
        const simulator = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(serverProducts)
            },1000)
        })
        simulator
            .then((resultado) => {
                setProducts(resultado)
            })
    })

    if(products.length > 0){

        return (
            <>
            <div>
                <h2 className = "title-container">
                    Productos
                </h2>
                <hr />   
            </div>
            <List products={products}/>
            </>
        );

    }else{
        return(
            <>
                <div>
                    <h2 className = "title-container">
                        Productos
                    </h2>
                    <hr />   
                </div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-danger" role="status">
                    </div>
                </div>
            </>
        )
    }
        

    
}

export default ItemListContainer;