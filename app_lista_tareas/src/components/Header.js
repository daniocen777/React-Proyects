import React from "react";
/* FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__titulo">Lista De Tareas</h1>
        <button className="header__boton">
          No mostrar completadas{" "}
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      </header>
    </div>
  );
};

export default Header;
