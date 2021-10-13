import React from 'react'
import { Link } from 'react-router-dom'
//import { useState } from 'react'
import { useForm } from 'react-hook-form'


/* type FormValues = {
    name: string;
    phone: string;
    email: String;
}; */

export const CheckOut = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    return (
        <div className="container">
            <h3>Error 404</h3>
            <img src="/img/enConstruccion.png" alt="EnConstruccion" className="mx-auto d-block"/>
            <Link to="/carrito" className="btn btn-success ms-3 mx-auto d-block">Ir a Carrito</Link>

            <form className= "col-md-5" onSubmit={handleSubmit((data, e) => {
                console.log(data)
                e.target.reset()
            })}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        type="text"     
                        className="form-control" 
                        id="exampleInputName1"
                        {...register("name", {required: "*Campo Obligatorio"})}
                        />
                    {errors.name && <p className="text-danger d-block mb-2">{errors.name.message}</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input 
                        type="phone" 
                        className="form-control" 
                        id="exampleInputPhone1"
                        {...register("phone", {required: "*Campo Obligatorio"})}
                        />
                    {errors.phone && <p className="text-danger d-block mb-2">{errors.phone.message}</p>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        {...register("email", {required: "*Campo Obligatorio"})}
                        />
                    {errors.email && <p className="text-danger d-block mb-2">{errors.email.message}</p>}
                    <div id="emailHelp" className="form-text">Tu correo no será compartido con nadie</div>
                </div>
                <button type="submit" className="btn btn-primary">enviar</button>
            </form>

        </div>
    )
}
