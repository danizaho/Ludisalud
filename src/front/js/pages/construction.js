import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/construction.css"

export const Construction = () =>{
    return(
        <div className="construccion">
            <h2>Ups! La página que estas buscando esta en construcción, pero no te preocupes! Estamos trabajando 
                en ello, así que vuelve pronto para ver:
            </h2>
            <div className="row">
            <div className="post-it col-md-4">
                <p>Nuevo contenido</p>
            </div>
            <div className="post-it col-md-4">
                <p>Nuevas actividades</p>
            </div>
            <div className="post-it col-md-4">
                <p>Nuevas funciones</p>
            </div>
            </div>

        </div>
    )
}