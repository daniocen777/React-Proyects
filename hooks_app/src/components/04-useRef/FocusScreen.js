import { useRef } from "react";

import "../02-useEffect/effects.css";

const FocusScreen = () => {
  /* Hook para hacer la referencia a componente u objetos (input) */
  const inputRef = useRef();

  const handleClick = () => {
    // Seleccionar en el input luego de hacer clic
    inputRef.current.select();
  };

  return (
    <div>
      <h1>FocusScreen</h1>
      <hr />
      <input className="form-control" placeholder="Nombre" ref={inputRef} />

      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
