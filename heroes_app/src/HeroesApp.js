import { useEffect } from "react";
import { useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";

// Función init
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  // Se debe estar pendiente del "user" en el localStorage
  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
