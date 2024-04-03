import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/navbar-lateral.css"

export const NavbarLateral = () => {
	return (
    <div className="container-fluid">
    <div className="row">
    <nav className="  navbar-lateral">
     
      

 <ul className="nav-lateral-content flex-column">
  <li className="nav-item">
  <Link className="letter-lateral" to ={"construction"}>Primero</Link>
  </li>
  <li className="nav-item">
    <Link className="letter-lateral" to ={"construction"}>Segundo</Link>
  </li>
  <li className="nav-item">
  <Link className="letter-lateral" to ={"construction"}>Tercero</Link>
  </li>
  <li className="nav-item">
  <Link className="letter-lateral" to ={"construction"}>Cuarto</Link>
  </li>
  <li className="nav-item">
  <Link className="letter-lateral" to ={"construction"}>Quinto</Link>
  </li>
  <li className="nav-item">
  <Link className="letter-lateral" to ={"sexto"}>Sexto</Link>
  </li>
  
</ul>
</nav>
</div>
</div>


	);
};
