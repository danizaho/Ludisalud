import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/construction.css"

export const Construction = () =>{
    return(
        <div className="construccion">
            <h2>La página que esta buscando actualmente esta en construccion</h2>
            <div className="post-it">
                <p>Nuevo contenido</p>
            </div>
            <div className="post-it">
                <p>Nuevas actividades</p>
            </div>

        </div>
    )
}