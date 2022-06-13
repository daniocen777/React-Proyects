import { Routes, Route } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";

import HeroScreen from "../components/hero/HeroScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

const DashboardRoute = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<MarvelScreen />} exact={true} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />
          <Route path="search" element={<SearchScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoute;
