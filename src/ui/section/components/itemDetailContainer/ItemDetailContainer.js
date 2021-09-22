import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail/ItemDetail";




const serverdetails = [
    { id: 1, name: "Martillo", title: "Martillo Galponero Madera Acero Forjado Labor", description: "En madera y acero forjado Calidad Profesional 29mm / 16oz", img: "https://http2.mlstatic.com/D_NQ_NP_707712-MLA44774890845_022021-O.jpg", price: 843},
    { id: 2, name: "Lijadora", title: "Lijadora Orbital 110 x 110 mm Dowen Pagio", description: "Modelo: LO110P Potencia: 220 W Velocidad: 13.000 rpm Ancho de lija: 110 mm Largo de lija: 110 mm Aspirador de polvo con bolsa recolectora Sistema rápido y seguro para la sujeción del papel de lija Empuñadura ergonómica", img: "https://www.herramarket.com/pub/media/catalog/product/cache/49eb0bb6f2db0d52dc5b3a6cd60276ae/l/i/lijadora-orbital-110-x-110-mm-dowen-pagio-1.jpg", price: 8249},
    { id: 3, name: "Taladro", title: "Taladro Atornillador 20V Stanley", description: "Tecnología de excelencia. Su mandril de 13 mm te permitirá manipular fácilmente la herramienta de manera segura y precisa. Además, su velocidad variable ofrece una gran experiencia de uso, adaptada a tus necesidades y requerimentos.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7SjAAUzeAh4z0GdOuXvVcLK7ibD_MniK_eRMooCdnw-dcFLtGYYFdtWRmA&usqp=CAc", price: 28900},
]

const ItemDetailContainer = () => {
    const [details,setDetails] = useState ([])

    useEffect (() => {
        const simulatorDetail = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(serverdetails)
            },2000)
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