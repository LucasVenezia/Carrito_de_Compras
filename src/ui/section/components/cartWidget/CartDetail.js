import { useContext, useState } from "react";
import { cartContext } from "../../../layout/component/context/CartContext";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { firestore, TimeStamp } from "../../../../firebase/firebase";
import { useHistory } from "react-router";



const CartDetail = () => {
    const {shopCart, removeItem, clear} = useContext(cartContext);
    const totalList = [0];

    const [orderId, setOrderId] = useState();
    const [orderConfirm, setOrderConfirm] = useState(false);

    const [getForm, setGetForm] = useState(false);
    const handleCancel = () => setGetForm(false);
    const handleGet = () => setGetForm(true);

    const {register, formState: { errors }, handleSubmit} = useForm();   
    
    const history = useHistory()

    let grandTotal =0
    for  (const itemSelected of shopCart){
        if (itemSelected.qty !== 0){
            grandTotal += itemSelected.qty * itemSelected.price 
        }
    }
    
    function createNewOrder (name, phone, email) {
        
        const db = firestore
        const collections = db.collection("orders")

        const newOrder = {
            buyer : {
                name : name,
                phone : phone,
                email : email
            },
            items : shopCart,
            date : TimeStamp.now(),
            total: grandTotal
        }
        const consult = collections.add(newOrder)

        consult
            .then(res => {
                setOrderId(res.id)
            })
            .catch(err =>{
                console.log(err);
            })
        
    }  
    
    return ( 
        <>
        {shopCart.length === 0?
        <div className="container">
            <h2>El Carrito esta vacio </h2>
            <Link to="/productos" className="btn btn-success mt-3">Ir al Catálogo</Link>
            
        </div>
        
        :  <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-center">Producto</th>
                            <th scope="col" className="text-center">Precio Unitario</th>
                            <th scope="col" className="text-center">Subtotal</th>
                            <th scope="col" className="text-center"><button type="button" className="btn btn-danger" onClick={() => clear()}>Vaciar Carrito</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {shopCart.map((shopCart)  => {
                        const subTotal = shopCart.price * shopCart.qty; 
                        totalList.push(subTotal);
                        
                        return (
                            <tr key={shopCart.id}>
                                <td className="text-center">{shopCart.qty}</td>
                                <td className="text-center">{shopCart.name}</td>
                                <td className="text-center">$ {shopCart.price},00</td>
                                <td className="text-center">$ { subTotal },00</td>
                                <td className="text-center"><button type="button" className="btn btn-danger" onClick={() => removeItem(shopCart.id)}>Borrar Producto</button></td>
                            </tr>
                        )}
                        )}
                        <tr>
                            <td className="text-center"><Link to="/productos" className="btn btn-warning ms-3">Seguir Comprando</Link></td>
                            <td className="text-center"></td>
                            <td className="text-center"><h4>Total:</h4></td>
                            <td className="text-center"><h4>${grandTotal},00</h4></td>
                            <td className="text-center"><Button variant="success" id="btnSubmit" onClick={handleGet}>
                    Terminar compra
                </Button></td>
                        </tr>
                    </tbody>
                </table>
                <Modal show={getForm} onHide={handleCancel} >
                    <Modal.Header>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Ingrese sus datos
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modalFormularioCuerpo">    
                        <form className= "col-md-5">
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input 
                                    type="text"     
                                    className="form-control" 
                                    id="inputName"
                                    {...register("name", {required: "*Campo Obligatorio"})}
                                    />
                                {errors.name && <p className="text-danger d-block mb-2">{errors.name.message}</p>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono</label>
                                <input 
                                    type="phone" 
                                    className="form-control" 
                                    id="inputPhone"
                                    {...register("phone", {required: "*Campo Obligatorio"})}
                                    />
                                {errors.phone && <p className="text-danger d-block mb-2">{errors.phone.message}</p>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="inputEmail" 
                                    aria-describedby="emailHelp"
                                    {...register("email", {required: "*Campo Obligatorio"})}/>
                                {errors.email && <p className="text-danger d-block mb-2">{errors.email.message}</p>}
                                <div id="emailHelp" className="form-text">Tu correo no será compartido con nadie</div>
                            </div>
                            
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={handleCancel}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleSubmit((data, e) => {
                            localStorage.setItem('userData', JSON.stringify(data))
                            handleCancel()
                            createNewOrder(data.name, data.phone, data.email)
                            setOrderConfirm(true)
                            })}>Finalizar Compra</Button>            
                    </Modal.Footer>
                </Modal> 
                <Modal id = "confirmedOrder" show = {orderConfirm} onHide = {() => setOrderConfirm(false)}>
                    <Modal.Header closeButton onClick = {() => {
                        clear()
                        history.push("/home")}}>
                        <Modal.Title>
                            Su compra ha sido Confirmada con Exito!!!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        N° de Orden: {orderId}
                        <ul>
                            {shopCart.map((shopCart) => {
                                return (<li key={shopCart.id}>
                                            {shopCart.qty}
                                            {shopCart.name}
                                            ${shopCart.price},00 c/u
                                        </li>)})
                            }
                        </ul>
                        TOTAL: {grandTotal}
                    </Modal.Body>
                    
                </Modal>
            </div>
        }
    </>) 
}

export default CartDetail;