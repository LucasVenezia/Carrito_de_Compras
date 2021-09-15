const Cart = ({cart}) => {
    return ( 
        <>
        <a className="material-icons nav-link" href="#as">
            add_shopping_cart 
        </a> 
        <span className="nav-link">{cart}</span>
        
        </>);
}

export default Cart;