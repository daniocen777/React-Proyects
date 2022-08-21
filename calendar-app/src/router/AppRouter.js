import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import CalendarScreen from "../components/calendar/CalendarScreen";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginScreen />} />
        <Route path="/calendar" element={<CalendarScreen />} />
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
