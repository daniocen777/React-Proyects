import React, { useState } from "react";
/* Fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
/* uuid */
import { v4 as uuidv4 } from "uuid";

/* Componente con propiedades que vienen de App.js */
const FormTask = ({ tareas, cambiarTareas }) => {
  /* Estado para el input */
  const [inputTarea, cambiarInputTarea] = useState("");

  const handleInput = (event) => {
    cambiarInputTarea(event.target.value);
  };

  const handleSubmit = (event) => {
    /* No recargar la página al hacer clic */
    event.preventDefault();
    /* Agregando la tarea */
    cambiarTareas([
      ...tareas,
      {
        id: uuidv4(),
        texto: inputTarea,
        completada: false,
      },
    ]);
  };

  return (
    <form className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe la tarea"
        value={inputTarea}
        onChange={(event) => handleInput(event)}
      />
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          icon={faPlus}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default FormTask;
