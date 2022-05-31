import React, { useState } from "react";
/* Fontawesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faTimes,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

/* Componente que recibe la tarea y la función para cambiar de estado de tarea a completada */
const Task = ({ tarea, completedToggle, updateTask, deleteTaskHandler }) => {
  /* Estado para el saber si se va a editar */
  const [editTask, editTaskHandler] = useState(false);
  /* Estado para el input */
  const [newTask, newTaskHandler] = useState(tarea.texto);
  /* Manejar el submit */
  const submitHandler = (e) => {
    e.preventDefault(); // No actualizar la página
    updateTask(tarea.id, newTask); // Actualiar tarea (proceso en componente "Tasks.js")
    editTaskHandler(false);
  };
  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => completedToggle(tarea.id)}
      />
      <div className="lista-tareas__texto">
        {editTask ? (
          <form className="formulario-editar-tarea" onSubmit={submitHandler}>
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={newTask}
              onChange={(e) => newTaskHandler(e.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono-accion"
          onClick={() => editTaskHandler(!editTask)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono-accion"
          onClick={() => deleteTaskHandler(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Task;
