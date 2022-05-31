import React, { useState, useEffect } from "react";

import "./App.css";
import FormTask from "./components/FormTask";
import Header from "./components/Header";
import TasksList from "./components/TasksList";

const App = () => {
  /* Estado para las tareas */
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  /* Estado para mostrar tareas completadas */
  const [showTaskCompleted, changeTaskCompleted] = useState(false);
  /* Creando estado useEffect para usar LocalStorage. Se ejecutará la primera vez y
  cuando las tareas cambien (modifiquen*/
  useEffect(() => {
    console.log("Las tareas cambiaron", tareas);
    /* Sólo se guardan texto. Entonces se guarará el arreglo como cadena  */
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div className="contenedor">
      {/* Componente Header */}
      <Header
        showTaskCompleted={showTaskCompleted}
        changeTaskCompleted={changeTaskCompleted}
      />
      {/* Componente Formulario con propiedades:
      tareas => Enviando el arreglo
      cambiarTareas => Enviando la función para agregar nueva tarea
       */}
      <FormTask tareas={tareas} cambiarTareas={cambiarTareas} />
      {/* Componente Lista de tareas */}
      <TasksList
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        showTaskCompleted={showTaskCompleted}
      />
    </div>
  );
};

export default App;
