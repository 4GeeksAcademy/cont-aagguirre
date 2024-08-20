import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/addContact.css";
import { Contact } from "./contact";

export const AddContact = ({Contact}) => { //en card le pase la key y el valor,  y aqui ds. 
  const { store, actions } = useContext(Context);
  console.log(store.Contact) //

  const [todoContact, setTodoContact]= useState([ //array con un obj vacio. como nos dice la api. 
    {
      name: "",
      phone: "",
      email: "",
     address: ""
    }
  ])
   
  const [inputValor, setInputValor]= useState('')
 
  //handleChange, encargada de capturar el evento onChange
  const handleChange = (e) => { //e sera el evento q se dispara con el input 
    const value = e.target.value; //declaro value q en este caso es el valor del input , y e.target es el evento q disparo el input
    setTodoContact({value:[e.taget.name]}) // una vez tendo definido el valor, actualizo el valor de set..
  };
  
  const handleSubmit = ()=>{
    
  }
 

  return (
    <div className="container">
      <h1>Add a new contact</h1>
      <form onSubmit={}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input 
            type="text"
            className="form-control" 
            placeholder="Full Name"
            
            value={Contact.name}
            onChange={(e)=>setInputValor(e.target.value)}
             />
           
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email"  
            name="email"
            value={Contact.email}
            onChange={(e)=>setInputValor(e.target.value)}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input 
            type="number"
            className="form-control" 
            placeholder="Enter phone"
            name="phone"
            value={Contact.phone}
            onChange={(e)=>setInputValor(e.target.value)}
           />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Addres</label>
          <input  
            type="text" 
            className="form-control" 
            placeholder="Enter address" 
            name="addres"
            value={Contact.addres}
            onChange={(e)=>setInputValor(e.target.value)} 
           />
        </div>

        <button type="submit" className="btn  btn-primary" >Save</button>
      </form>
      <div className="">
        <Link to="/">
          <p>
          Or get back to contacts
          </p>
            
        </Link>
      </div>

    </div>
  );
}
