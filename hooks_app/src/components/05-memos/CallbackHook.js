/* CallbackHook => 2 casos: Al mandar una función al camponente hijo (ShowIncrement)
El otro caso es cuando se envía un useCallback en un useEffect */
import { useState, useCallback } from "react";
import "../02-useEffect/effects.css";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  /* mandar esta función al componente hijo (ShowIncrement) */

  /* Usar useCallback para enviar una función memorizada */
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>Callback Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
