import React, { useState, useEffect, useContext, useSyncExternalStore } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/addContact.css";

export const EditContact = (contact) => { //en card le pase la key y el valor,  y aqui ds. 
  const navegador = useNavigate();
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("")



  useEffect(() => {
    if (store.contact && store.contact.id) {
      setName(store.contact.name)
    };

    if (store.contact && store.contact.id) {
      setPhone(store.contact.phone)
    };

    if (store.contact && store.contact.id) {
      setAddress(store.contact.address)
    };

    if (store.contact && store.contact.id) {
      setEmail(store.contact.email)
    }


  }, [])

  const parametros = useParams();
  const [todoContact, setTodoContact] = useState({

    name: "",
    phone: "",
    email: "",
    address: ""

  })
  //const [input, setInput] = useState("")

  //handleChange, encargada de capturar el evento onChange
  const handleChangeName = (e) => { //e sera el evento q se dispara con el input 

    setName(e.target.value)

  }


  //handleChange, encargada de capturar el evento onChange
  const handleChangeEmail = (e) => { //e sera el evento q se dispara con el input 

    setEmail(e.target.value)

  }


  //handleChange, encargada de capturar el evento onChange
  const handleChangePhone = (e) => { //e sera el evento q se dispara con el input 

    setPhone(e.target.value)

  }


  //handleChange, encargada de capturar el evento onChange
  const handleChangeAddress = (e) => { //e sera el evento q se dispara con el input 

    setAddress(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    actions.actualizarContacto(name, phone, email, address, store.contact.id);
    setTodoContact({
      name: "",
      phone: "",
      email: "",
      address: ""
    });
    navegador("/");

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
            placeholder="full name"
            name="name"
            value={name}
            onChange={handleChangeName}
            id="inputVaciar"
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter phone"
            name="phone"
            value={phone}
            onChange={handleChangePhone}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Addres</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter address"
            name="address"
            value={address}
            onChange={handleChangeAddress}
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
