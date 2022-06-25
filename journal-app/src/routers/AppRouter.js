import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/Register";
import JournalScreen from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthRouter />}>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="*" element={<RegisterScreen />} />
        </Route>
        <Route path="/journal" element={<JournalScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
