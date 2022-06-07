/* UserContext => contexto para centralizar datos que enviarán a != componentes */
import { useState } from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    /* Se podrá acceder al objeto del value en los componentes
    dentro de UserContext (AppRouter) */
    <UserContext.Provider value={{ user, setUser, temporal: 123455 }}>
      {/* Enviando el estado user y su función para actualizarlo */}
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
