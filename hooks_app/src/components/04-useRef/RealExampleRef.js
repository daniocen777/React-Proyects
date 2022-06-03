import { useState } from "react";
import "../02-useEffect/effects.css";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

const RealExampleRef = () => {
  /* Estado para mostrar u ocultar el MultipleCustomHooks */
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-outline-primary mt-5"
        onClick={() => setShow(!show)}
      >
        Mostrar MultipleCustomHooks{" "}
      </button>
    </div>
  );
};

export default RealExampleRef;
