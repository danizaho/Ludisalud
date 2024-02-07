import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/cuestionario.css"

export const Formulario = () => {

    return(
        <div className="all-form" >
            <form>
            
                <p>¿Con cuanta gente sueles jugar?</p>
                <select name="respuesta-1">
                    <option selected></option>
                    <option value="1">Yo solo</option>
                    <option value="2">Dos personas</option>
                    <option value="3">Tres personas</option>
                    <option value="4">Cuatro personas</option>
                    <option value="5">Cinco personas</option>
                    <option value="extra">Más de cinco personas</option>
                </select>
                <p>¿Habéis jugado mucho a juegos de mesa?</p>
                <select name="respuesta-2">
                    <option selected></option>
                    <option value="yes-experience">Sí, nos consideramos veteranos</option>
                    <option value="no-experience">No, en general somos bastante novatillos</option>
                    <option value="mix-experience">Hay de todo en nuestro grupo</option>
                </select>
                <p>¿Cuanto tiempo os gusta dedicar a cada partida de manera habitual?</p>
                <select name="respuesta-3">
                    <option selected></option>
                    <option value="time-15">Hasta 15 minutos</option>
                    <option value="time-30">Hasta 30 minutos</option>
                    <option value="time-60">Hasta 1 hora</option>
                    <option value="time-plus">Más tiempo</option>
                </select>
                <p>¿Qué tipo de interacción os gusta?</p>
                <select name="respuesta-4">
                    <option selected></option>
                    <option value="yes-interactive-coop">Sí, entre nosotros de manera cooperativa</option>
                    <option value="yes-lesive-coop">Sí, fastidiandonos todo lo que podamos</option>  
                    <option value="no-interactive">No</option>  
                    

                </select>
          
      

   
  </form>
        </div>
    );
};
