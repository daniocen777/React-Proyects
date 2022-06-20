import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoute from "./DashboardRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login sin el Navbar */}
        {/* Ruta pública */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        {/* Ruta privada, solo se mostrarán cuando el usuario esté autenticado*/}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoute />
            </PrivateRoute>
          }
        />

        {/* <Route path="/*" element={<DashboardRoute />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
