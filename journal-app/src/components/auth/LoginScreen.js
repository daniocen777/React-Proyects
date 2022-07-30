import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import { useDispatch, useSelector } from "react-redux";
import {
  startLoginEmailPassword,
  startGoogleLogin,
} from "../../actions/authAction";

const LoginScreen = () => {
  // Hook para dispar acciones para redux
  const dispatch = useDispatch();
  // hook para loading
  const { loading, msgError } = useSelector((state) => state.ui);
  // Hook para formularios
  const [values, handleInputChange] = useForm({
    email: "test1@mail.com",
    password: "123456",
  });

  const { email, password } = values;

  const handleLogin = (event) => {
    event.preventDefault();
    // dispatch(loginAction(12345, "Dani"));
    // Llamar a la función
    dispatch(startLoginEmailPassword(email, password));
  };

  // Login con google
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          className="auth__input"
          placeholder="Correo"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="auth__input"
          placeholder="*********"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login con redes sociales</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Crear una cuenta
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
