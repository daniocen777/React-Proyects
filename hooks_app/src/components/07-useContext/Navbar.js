import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          home
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-link"
              to="/"
              activeclassname="active"
            >
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about" activeclassname="active">
              About
            </NavLink>
            <NavLink className="nav-link" to="/login" activeclassname="active">
              login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
