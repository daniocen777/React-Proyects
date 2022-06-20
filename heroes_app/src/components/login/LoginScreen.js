import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

const LoginScreen = () => {
  // Custom hook para la navegación
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // Disparar función para el login
    /* La acción solo necesita el nombre, ya que la acción loggin coloca el 
    parámetro "logged" en true */
    const action = {
      type: types.login,
      payload: {
        name: "danicode",
      },
    };
    dispatch(action);

    // replace: true => Para no regresar al login
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-outline-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
