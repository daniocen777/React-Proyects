import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  /* Referencia al context */
  const { setUser } = useContext(UserContext);
  const user = {
    id: 100,
    name: "Lolas",
    email: "lola@gmail.com",
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(user)}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
