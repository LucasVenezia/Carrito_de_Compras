import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail/ItemDetail";
import { useParams } from "react-router";
import { firestore } from "../../../../firebase/firebase";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
        
    useEffect(() => {
        const db = firestore
        const collections = db
            .collection("products")

        collections
            .get()
            .then((results) => {
                const data = results.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(data.find(res => res.id === id))
            })
            .catch(err => console.log(err))
},[id]);

    return (
        <>
        <div className="row">
            <ItemDetail product={products} />{" "}
        </div>{" "}
    </>
    );
};

export default ItemDetailContainer;
