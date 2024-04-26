import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar-lateral.css";

export const NavbarLateral = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar-lateral">
          <ul className="nav-lateral-content flex-column">
            <li className="nav-item">
              <Link className="letter-lateral" to={"/construction"}>
                1º
              </Link>
            </li>
            <li className="nav-item">
              <Link className="letter-lateral" to={"/construction"}>
                2º
              </Link>
            </li>
            <li className="nav-item">
              <Link className="letter-lateral" to={"/construction"}>
                3º
              </Link>
            </li>
            <li className="nav-item">
              <Link className="letter-lateral" to={"/construction"}>
                4º
              </Link>
            </li>
            <li className="nav-item">
              <Link className="letter-lateral" to={"/construction"}>
                5º
              </Link>
            </li>
            <li className="nav-item">
              <Link className="letter-lateral" to={"/sexto"}>
                6º
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
