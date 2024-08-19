import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/contactCard.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="contenedor_card">
			<Contact />
		</div>
	)
}
