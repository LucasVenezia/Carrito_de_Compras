import ItemListContainer from "../../../section/components/itemListContainer/ItemListContainer";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import React, { useState } from "react";

const App = () => {

    const [value, setValue] = useState(0);
    const [cart, setCart] = useState(0)

    const handleSum = () => {
        setValue(value + 1);
    }

    const handleSubstract = () => {
        if(value === 0){
            return;
        }
        setValue(value - 1);
    }

    const handleAdd = () => {
        setCart(cart + value)
        setValue(0)
    }

    return (
        <>
            <Header cart={cart}/>
            <ItemListContainer onSum={handleSum} onSubstract={handleSubstract} onAdd={handleAdd} value={value}/>
            <Footer/>
        </>
    )
}

export default App;