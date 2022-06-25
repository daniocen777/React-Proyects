import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form>
        <input
          type="text"
          className="auth__input"
          placeholder="Nombre"
          name="name"
          autoComplete="off"
        />
        <input
          type="text"
          className="auth__input"
          placeholder="Correo"
          name="email"
          autoComplete="off"
        />
        <input
          type="password"
          className="auth__input"
          placeholder="*********"
          name="password"
        />
        <input
          type="password"
          className="auth__input"
          placeholder="Confirmar contraseña"
          name="confirm"
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
