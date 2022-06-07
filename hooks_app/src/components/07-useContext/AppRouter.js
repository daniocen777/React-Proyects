import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact={true} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </>
  );
};

export default AppRouter;
