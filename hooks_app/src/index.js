import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
/* import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook"; */
/* import SimpleForm from "./components/02-useEffect/SimpleForm"; */
/* import FormWithCustomHooks from "./components/02-useEffect/FormWithCustomHook"; */
/* import MultipleCustomHooks from "./components/03-examples/MultipleCustomHooks"; */
/* import FocusScreen from "./components/04-useRef/FocusScreen"; */
/* import RealExampleRef from "./components/04-useRef/RealExampleRef"; */
/* import Memorize from "./components/05-memos/Memorize"; */
/* import CallbackHook from "./components/05-memos/CallbackHook"; */
/* import TodoApp from "./components/06-useReducer/TodoApp"; */
import MainApp from "./components/07-useContext/MainApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CounterWithCustomHook /> */}
    {/* <FormWithCustomHooks /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <RealExampleRef /> */}
    {/* <Memorize /> */}
    {/* <CallbackHook /> */}
    {/* <TodoApp /> */}
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
);
