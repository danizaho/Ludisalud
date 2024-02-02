import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/cuestionario.css"

export const formulario = () => {

    return(
        <div className="all-form" >
            <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    );
};
