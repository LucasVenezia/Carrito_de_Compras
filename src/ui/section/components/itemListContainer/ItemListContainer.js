import { useEffect, useState } from "react";
import List from "./itemList/ItemList";
import "./title-container.css"
import { useParams } from "react-router"; 
import { firestore } from "../../../../firebase/firebase"

const ItemListContainer = () => {
    const [products,setProducts] = useState ([])
    const { id } = useParams();

    useEffect(() => {
        const db = firestore

        const collections = db.collection("products")

        let consult
        if(!id) consult = collections.get()
        if(id === "ferreteria") consult = collections.where("cat", "==", "ferreteria").get()
        if(id === "maquinas") consult = collections.where("cat", "==", "maquinas").get()

        consult
            .then((results) => {
                const data = results.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(data)
            })
            .catch(err => console.log(err))
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