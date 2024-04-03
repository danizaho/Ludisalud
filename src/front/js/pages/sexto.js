import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/sexto.css";

export const Sexto = () => {
  const respuestaCorrecta = "rojo";
  const maxIntentos = 3; // Número máximo de intentos permitidos
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [intentosRestantes, setIntentosRestantes] = useState(maxIntentos);

  const verificarRespuesta = () => {
    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
      return "¡Respuesta correcta!";
    } else {
      const intentos = intentosRestantes - 1;
      setIntentosRestantes(intentos);
      if (intentos === 0) {
        // Si se acabaron los intentos, desactivar el campo de entrada
        setRespuestaUsuario("");
      }
      return "Respuesta incorrecta. Intentos restantes: " + intentos;
    }
  };

  const manejarCambioRespuesta = (event) => {
    setRespuestaUsuario(event.target.value);
  };

  return (
    <div className="clase-6">
      <p>
        Dime la respuesta{" "}
        <input
          type="text"
          value={respuestaUsuario}
          onChange={manejarCambioRespuesta}
          disabled={intentosRestantes === 0}
        />
      </p>
      <button onClick={() => alert(verificarRespuesta())}>
        Verificar respuesta
      </button>
    </div>
  );
};
