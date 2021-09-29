import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail/ItemDetail";
import { serverProducts } from "../../../../data/Products";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
        
    useEffect(() => {
    const simulatorDetail = new Promise((resolve) => {
        setTimeout(() => {
        resolve(serverProducts);
        }, 500);
    });

    simulatorDetail.then((products) => {
        const product = products.find((product) => product.id == id);
        setProducts(product);
    });
});

    return (
        <>
        <div className="row">
            <ItemDetail product={products} />{" "}
        </div>{" "}
    </>
    );
};

export default ItemDetailContainer;
