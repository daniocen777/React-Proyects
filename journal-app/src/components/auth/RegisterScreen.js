import { Link } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { removeErrorAction, setErrorAction } from "../../actions/uiAction";
import { startRegisterWithEmailPasswordName } from "../../actions/authAction";

const RegisterScreen = () => {
  // Obtener los campos del formulario
  const [values, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = values;

  // para disparar acciones
  const dispatch = useDispatch();
  // Para obtener el campo del msgError del estado de "ui"
  const { msgError } = useSelector((state) => state.ui);

  // Manejar registro
  const handleRegister = (event) => {
    event.preventDefault();
    // validaciones
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorAction("Debe colocar el nombre"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction("Correo  inválido"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setErrorAction(
          "Las contraseñas no coinciden o no tienen al menos 6 caracteres"
        )
      );

      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          className="auth__input"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="text"
          className="auth__input"
          placeholder="Correo"
          name="email"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="password"
          className="auth__input"
          placeholder="*********"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Confirmar contraseña"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Registrarse
        </button>
        <Link className="link" to="/auth/login">
          ¿Ya estás registrado?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
