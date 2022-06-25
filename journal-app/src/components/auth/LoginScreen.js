import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form>
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
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login con redes sociales</p>
          <div className="google-btn">
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
