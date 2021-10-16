import { createContext, useState } from "react";


export const cartContext = createContext();


const {Provider} = cartContext

const ProviderCartContext = ({children}) => {

    const [shopCart, setShopCart] = useState([])
    const [counter, setCounter] = useState(0)
    
    let counterWidget = 0
        
    const removeItem = (id) => setShopCart(shopCart.filter(product => product.id !== id))

    const isInCart = (itemId) => shopCart.includes(itemId)

    const clear = () => setShopCart([])

    const addItem = (item, quantity) => {

        if (isInCart(item)) {
            shopCart.find((it) => it === item).qty += quantity;
        } else {
            item["qty"] = quantity;
            shopCart.push(item);
        }
        
    counterWidget = counter + quantity
    setCounter(counterWidget)
}

    const contextValue = {
        shopCart,
        addItem,
        clear,
        removeItem
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>

    );
}

export default ProviderCartContext;