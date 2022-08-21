import React from "react";
import ReactDOM from "react-dom/client";
import CalendarApp from "./CalendarApp";
/* Paquetes */
// router-dom =>  
// calendar: https://github.com/jquense/react-big-calendar
// ==>  npm i react-big-calendar
// momment
// ==> npm install moment

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalendarApp />
  </React.StrictMode>
);
