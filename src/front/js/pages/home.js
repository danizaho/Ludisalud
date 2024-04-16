import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
		<div className="inicio col-md-9">
		<h1>Ludisalud</h1>
		<p>El pilar sobre el que se sostenta la humanidad es la salud. La prueba es que en los últimos 200 años, hemos avanzado más que en miles anteriores.</p>
		<p>Y cuando hablamos de salud, no solo hablamos de la salud física, sino también de la mental. Y...¿ hay algo que cuide más de nuestra salud mental que el juego?</p>
		<p>Además, se ha demostrado repetidas veces, que aprendemos más durante el juego que en una clase donde hay alguien explicando.</p>
		<p>De esa idea nace ludisalud. Así que ahora sí podemos decir que es ludisalud</p>
		<h6>Ludisalud es un proyecto de innovación que combina salud y tecnología. Está dirigido al alumnado de educación primaria con el objectivo de desincronizar el aprendizaje 
			y poder personalizarlo a las necesidades y ritmos de cada estudiante. En esta página web se encuentran explicaciones y juegos para aprender sobre salud a la vez que el 
			alumno se divierte.
		</h6>


		</div>
		</div>
		
	);
};
