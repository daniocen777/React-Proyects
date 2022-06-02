import useForm from "../../hooks/useForm";

import "./effects.css";

const FormWithCustomHooks = () => {
  /* Estado para un formulario. Hooks personalizado para formularios */
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  /* Desestructurando variables */
  const { name, email, password } = formValues;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formValues", formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHooks</h1>
      <hr />
      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
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
      <div className="mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*******"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHooks;
