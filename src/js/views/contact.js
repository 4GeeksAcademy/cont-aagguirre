import React, { useState, useEffect, useContext } from "react";



import { Context } from "../store/appContext";


import "../../styles/contactCard.css";
import { ContactCard } from "../component/contactCard";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	console.log(store)

	return (
		<div className="contenedor_contacto">
			<h4>Mi agenda </h4>

			{
				store.contacts.map((contact) => {
					return (
						<ContactCard key={contact.id} contact={contact} />
					)
				})
			}

			
		</div>


	)
}

