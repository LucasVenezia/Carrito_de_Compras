import React, { useState } from "react";

const Count = ({stock,onAdd}) => {

    const [value, setValue] = useState(1);
    
    const handleSum = () => {
        if (value === stock){
            return;
        }
        setValue(value + 1);
    }

    const handleSubstract = () => {
        if(value === 1){
            return;
        }
        setValue(value - 1);
    }
    
    return ( 
        <>
            <a href="#as" className="btn btn-primary" onClick={() => { onAdd(value) }} >Agregar al Carrito</a>
            <div className= "btn-addSub mt-3">
                <a href="#as" className="btn btn-danger ms-3 me-3 mb-3" onClick={handleSubstract}>-</a>
                <span className= "mb-3">{value}</span>
                <a href="#as" className="btn btn-danger ms-3 mb-3" onClick={handleSum}>+</a>
            </div>
            <span className="p-1 mb-1 bg-dark text-white mt-3 ms-5 rounded-pill">stock: {stock}</span>
        </>
    )
}
export default Count;