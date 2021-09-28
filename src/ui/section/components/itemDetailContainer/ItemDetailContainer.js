import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail/ItemDetail";
import { serverProducts } from "../../../../data/Products";

const ItemDetailContainer = () => {
    const [details,setDetails] = useState ([])

    useEffect (() => {
        const simulatorDetail = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(serverProducts)
            },500)
        })
        simulatorDetail
            .then((result) => {
                setDetails(result)
            })
    })

    if(details.length > 0){

        return (
            <>
            <div className="row">
                {details.map((detail,index) => {
                return <ItemDetail key={index} detail={detail}/> 
                })}
            </div>
            </>
        );

    }else{
        return(
            <>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-danger" role="status">
                    </div>
                </div>
            </>
        )
    }
    
}

export default ItemDetailContainer;