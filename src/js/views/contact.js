import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/contactCard.css";
import { ContactCard } from "../component/contactCard";

export const Contact = ({ contact }) => {
	const { store, actions } = useContext(Context);
 console.log(store.contact)

	return (
		<div className="contenedor_contacto">
			<h4>Mi agenda </h4>
			<link to="/addContact">
			<button className="boton_agregar " onClick={()=>agregarContactos()}>Añadir un nuevo contacto</button>
			</link>
			{
				store.contact.map((contact)=>{
					return (
						<ContactCard key={contact} contact={contact}/>
					)
				})
			}
		</div> 


	)}
		
