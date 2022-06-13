import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  // Custom hook para la navegación
  const navigate = useNavigate();

  const handleLogin = () => {
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
