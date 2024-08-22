import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contactCard.css";
import { ContactCard } from "../component/contactCard";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    //verificamos el store.contact
    if (!store.contacts || !Array.isArray(store.contacts)) {
        return <div>No contacts available</div>;
    }

    return (
        <div className="contenedor_contacto">
            <h4 className="titulo_contacto">Mi agenda</h4>
            {store.contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} id={contact.id}/>
            ))}
        </div>
    );
};

