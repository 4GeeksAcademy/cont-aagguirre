import React, { useContext } from "react";
import "../../styles/contactCard.css";
import { Context } from "../store/appContext";
import { Contact } from "../views/contact";

export const ContactCard = (contact) => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="contenedor_card row ">
            <div className="contenedor_card_img col-4">
                <img src="https://th.bing.com/th/id/R.096f16af330d69b9014a25f705484d9c?rik=mSWuJKatKpcX8A&riu=http%3a%2f%2fwww.publico.es%2fpsicologia-y-mente%2fwp-content%2fuploads%2f2022%2f03%2fel-poder-de-la-sonrisa-3-1024x684.jpg&ehk=nxA4j7wK%2bKKpqRGhy%2buqT1p214o328e%2bldvL%2fDRKioQ%3d&risl=&pid=ImgRaw&r=0" />
            </div>
            <div className="col-4 datos_contactos">
                <h4> {contact.name}</h4>
                <br/>
                <i className=" fa fa-solid fa-location-dot"> {contact.address}</i>
                <br/>
                <i className=" fa fa-solid fa-phone">  {contact.phone}</i>
                <br/>
                <i className=" fa fa-regular fa-envelope">{contact.email} </i>
            </div>
            <div className="col-1 contactos_opciones">
                <i className=" fa fa-solid fa-pen-nib"></i>
                <i className=" fa fa-solid fa-trash"></i>

            </div>


        </div>
    )
}
