import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/contactCard.css";
import { ContactCard } from "../component/contactCard";

export const Contact = () => {
	const { store, actions } = useContext(Context);


	return (
		<>
		{store.Contact.map((Contact)=>{
			return (
				<ContactCard  key={Contact.id} Contact={Contact}/>
			)
		})}





		</>
	)
}
