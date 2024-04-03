import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/sexto.css";

export const Sexto = () => {
  const respuestasCorrectas = {
    nombre: "rojo",
    apellido: "azul",
    edad: 25
  };
  const maxIntentos = 3; // Número máximo de intentos permitidos
  const [respuestasUsuario, setRespuestasUsuario] = useState({
    nombre: "",
    apellido: "",
    edad: ""
  });
  const [intentosRestantes, setIntentosRestantes] = useState(maxIntentos);

  const verificarRespuestas = () => {
    let correcto = true;
    let resultados = [];

    for (const [clave, valor] of Object.entries(respuestasUsuario)) {
      if (String(valor).toLowerCase() === String(respuestasCorrectas[clave]).toLowerCase()) {
        resultados.push(`¡${clave.charAt(0).toUpperCase() + clave.slice(1)} correcto!`);
      } else {
        correcto = false;
        resultados.push(`Respuesta incorrecta para ${clave}.`);
      }
    }

    if (correcto) {
      return "¡Muy bien! ¡Lo has acertado todo!";
    } else {
      return resultados;
    }
  };

  const manejarCambioRespuesta = (clave, valor) => {
    setRespuestasUsuario(prevState => ({
      ...prevState,
      [clave]: valor
    }));
  };

  const renderizarInputs = () => {
    return (
      <div>
        <p>
          Mi nombre es{" "}
          <input
            type="text"
            value={respuestasUsuario.nombre}
            onChange={(event) => manejarCambioRespuesta('nombre', event.target.value)}
            disabled={intentosRestantes === 0}
          />
        </p>
        <p>
          Mi apellido es{" "}
          <input
            type="text"
            value={respuestasUsuario.apellido}
            onChange={(event) => manejarCambioRespuesta('apellido', event.target.value)}
            disabled={intentosRestantes === 0}
          />
        </p>
        <p>
          Mi edad es{" "}
          <input
            type="number"
            value={respuestasUsuario.edad}
            onChange={(event) => manejarCambioRespuesta('edad', event.target.value)}
            disabled={intentosRestantes === 0}
          />
        </p>
      </div>
    );
  };

  return (
    <div className="clase-6">
      {renderizarInputs()}
      <button onClick={() => {
        const resultado = verificarRespuestas();
        alert(Array.isArray(resultado) ? resultado.join('\n') : resultado);
      }}>
        Verificar respuestas
      </button>
    </div>
  );
};
