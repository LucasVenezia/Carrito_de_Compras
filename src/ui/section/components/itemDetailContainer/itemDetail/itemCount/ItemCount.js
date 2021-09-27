import React, { useState } from "react";

const Count = () => {

    const [value, setValue] = useState(0);
   
    const handleSum = () => {
        setValue(value + 1);
    }

    const handleSubstract = () => {
        if(value === 0){
            return;
        }
        setValue(value - 1);
    }
    const cart = () => {
        if (value === 0) {
            alert("No se agrego nada al carrito")
        }
        else if (value === 1){
            alert("Se agrego:" + value + "articulo al carrito")
            }
        else if (value > 1){
            alert("Se agregaron:" + value + "articulos al carrito")
        }
        setValue(0)
    }

    return ( 
        <>
            <a href="#as" className="btn btn-primary" onClick={cart} >Agregar al Carrito</a>
            <div className= "btn-addSub mt-3">
                <a href="#as" className="btn btn-danger ms-3 me-3" onClick={handleSubstract}>-</a>
                <span>{value}</span>
                <a href="#as" className="btn btn-danger ms-3" onClick={handleSum}>+</a>
            </div>
        
        </>
    )
}
export default Count;