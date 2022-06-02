import React from "react";
import ReactDOM from "react-dom/client";
/* import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook"; */
/* import SimpleForm from "./components/02-useEffect/SimpleForm"; */
import FormWithCustomHooks from "./components/02-useEffect/FormWithCustomHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CounterWithCustomHook /> */}
    <FormWithCustomHooks />
  </React.StrictMode>
);
