import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/addContact.css";
import { Contact } from "./contact";

export const AddContact = () => { //en card le pase la key y el valor,  y aqui ds. 
  const { store, actions } = useContext(Context);
  

  const [contact, setContact]= useState([ //array con un obj vacio. como nos dice la api. 
    {
      name: "",
      phone: "",
      email: "",
     address: ""
    }
  ])
   
  
 
  //handleChange, encargada de capturar el evento onChange
  const handleChange = (e) => { //e sera el evento q se dispara con el input 
  setTodoContact({ // lo utilizo para para actualizar el estado todocon..
    ...contact, //desustruro el estado
    [e.target.name]:e.target.value // actualiza la propiedad del input, en este caso lo llamamos name y e.target.value es el nuevo valor q el usuario introduce en el input
  })
  
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarContactos(contact);
  };
 

  return (
    <div className="container">
      <h1>Add a new contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input 
            type="text"
            className="form-control" 
            placeholder="Full Name"
            name="name"
            value={contact.name}
            onChange={()=> handleChange}
             />
           
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email"  
            name="email"
            value={contact.email}
            onChange={()=>handleChange}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input 
            type="number"
            className="form-control" 
            placeholder="Enter phone"
            name="phone"
            value={contact.phone}
            onChange={()=>handleChange}
           />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Addres</label>
          <input  
            type="text" 
            className="form-control" 
            placeholder="Enter address" 
            name="addres"
            value={contact.addres}
            onChange={()=>handleChange} 
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
