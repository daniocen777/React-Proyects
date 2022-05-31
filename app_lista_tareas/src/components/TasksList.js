import React from "react";
import Task from "./Task";

/* Componete que recibe el arreglo de tareas y la función para actualizar tarea */
const TasksList = ({ tareas, cambiarTareas, showTaskCompleted }) => {
  /* Colocar las funciones en el componente padre */
  const completedToggle = (id) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return {
            ...tarea,
            completada: !tarea.completada,
          };
        }
        return tarea;
      })
    );
  };

  /* Función para actualizar el texto de la tarea */
  const updateTask = (id, texto) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return {
            ...tarea,
            texto: texto,
          };
        }
        return tarea;
      })
    );
  };

  /* Función para eliminar el texto de la tarea */
  const deleteTaskHandler = (id) => {
    cambiarTareas(
      tareas.filter((tarea) => {
        if (tarea.id !== id) {
          return tarea;
        }
        return;
      })
    );
  };

  return (
    <ul>
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if (showTaskCompleted) {
            return (
              <Task
                key={tarea.id}
                tarea={tarea}
                completedToggle={completedToggle}
                updateTask={updateTask}
                deleteTaskHandler={deleteTaskHandler}
              />
            );
          } else if (!tarea.completada) {
            return (
              <Task
                key={tarea.id}
                tarea={tarea}
                completedToggle={completedToggle}
                updateTask={updateTask}
                deleteTaskHandler={deleteTaskHandler}
              />
            );
          }
          return;
        })
      ) : (
        <div className="lista-tareas__mensaje">~ No existen tareas ~</div>
      )}
    </ul>
  );
};

export default TasksList;
