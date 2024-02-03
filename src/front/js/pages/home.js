import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="inicio">
		<h1>Bienvenid@s a Boardgames4All</h1>
		<p>El juego es algo innato en el ser humano. Desde que nacemos la manera en la que nos aprendemos a relacionar
			es a través de él. Y cuando mejor aprendemos, es de esta manera.</p>
		<p>Y hasta hace muy poco,parecía que, al crecer, dejábamos de hacerlo, trabajando y buscando hobbys
			que nos hicieran "crecer".</p>
			<h5>Por suerte esto cambió</h5>	
			<p>Y es que desde hace unos años y sobretodo con la pandemia, el mundo de los juegos de mesa ha 
			experimentado un crecimiento brutal por parte de gente de todas las edades, siendo la pregunta más
			clásica</p>
			<h3>¿Qué juego me recomiendas</h3>
			<p>Pues quédate aquí y lo sabrás</p>


		</div>
	);
};
