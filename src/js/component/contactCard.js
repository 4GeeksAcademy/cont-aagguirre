import React from "react";
import "../../styles/contactCard.css";

export const ContactCard = () => {
    return (
        <div className="contenedor_card row ">
            <div className="contenedor_card_img col-4">
                <img src="https://th.bing.com/th/id/R.096f16af330d69b9014a25f705484d9c?rik=mSWuJKatKpcX8A&riu=http%3a%2f%2fwww.publico.es%2fpsicologia-y-mente%2fwp-content%2fuploads%2f2022%2f03%2fel-poder-de-la-sonrisa-3-1024x684.jpg&ehk=nxA4j7wK%2bKKpqRGhy%2buqT1p214o328e%2bldvL%2fDRKioQ%3d&risl=&pid=ImgRaw&r=0" />
            </div>
            <div className="col-4">
                <h4>Alejandra Aguirre </h4>
                <i className=" fa fa-solid fa-location-dot"> 20206 Ciudad Aljarafe</i>
                <i className=" fa fa-solid fa-phone"> +57 310 85 12 90 </i>
                <i className=" fa fa-regular fa-envelope"> chlinon@gmail.com</i>
            </div>
            <div className="col-3">
                <i className=" fa fa-solid fa-pen-nib"></i>
                <i className=" fa fa-solid fa-trash"></i>

            </div>


        </div>
    )
}
