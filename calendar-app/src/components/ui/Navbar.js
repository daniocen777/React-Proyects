import React from "react";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <span className="navbar-brand">Danicode</span>
        <button className="btn btn-outline-danger mr-5">
          <i className="fas fa-sign-out-alt"></i>
          <span> Salir</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
