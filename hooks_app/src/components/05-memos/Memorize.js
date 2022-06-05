import { useState } from "react";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter();
  /* Estado para mostrar algo, esto hace que se dispare, otra vez, todo el estado "counter",
  lo cual no es óptimo. Para eso, se usa "momo" en el componente que se quiere en memoria (Small)*/
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />{" "}
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-4"
        onClick={() => setShow(!show)}
      >
        Show {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
