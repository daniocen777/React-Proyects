import { useState, useEffect } from "react";

import "./effects.css";
import Message from "./Message";

const SimpleForm = () => {
  /* Estado para un formulario */
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  /* Desestructurando variables */
  const { name, email } = formState;

  /* useEffect => Este se ejecuta una sola vez cuando se renderiza */
  useEffect(() => {
    console.log("Se ejecuta una vez");
  }, []);

  /* Cuando el componente se realiza un cambio de estado de formState */
  useEffect(() => {
    console.log("Change formState");
  }, [formState]);

  /* Manejador del input para el nombre y correo en una función */
  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Correo"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "code" && <Message />}
    </>
  );
};

export default SimpleForm;
