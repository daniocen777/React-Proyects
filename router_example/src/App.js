import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import AcercaDe from "./components/AcercaDe";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>Blog Personal</h1>
          <Link to="/">Inicio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/acerca-de">Acerca De</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
