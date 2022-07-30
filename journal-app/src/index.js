import React from "react";
import ReactDOM from "react-dom/client";
import { JournalApp } from "./JournalApp";
import "./styles/styles.scss";
/* Instalar - redux, firebase (versión 9) */
// ==> npm install @reduxjs/toolkit react-redux redux
// ==> npm i firebase
// Middleware para als tareas síncronas (pero con toolkit ya no es necesario)
// ==> npm i redux-thunk
// Para las validaciones
// ==> npm i validator

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>
);
