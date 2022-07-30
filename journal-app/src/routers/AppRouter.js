import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loginAction } from "../actions/authAction";

import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import JournalScreen from "../components/journal/JournalScreen";
import { auth } from "../firebase/firbaseConfig";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  // Pendiente del cambio de estado en la autenticación
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(loginAction(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

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
