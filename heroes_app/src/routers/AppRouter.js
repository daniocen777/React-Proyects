import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoute from "./DashboardRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login sin el Navbar */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
