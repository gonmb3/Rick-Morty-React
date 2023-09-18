import React from "react";
import { Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div className="container">
      <Link to="/" className="navbar-brand fs-3 ubuntu">
        Rick & Morty 
      </Link>

      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
          <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav fs-5">
          <NavLink activeClassName="active" to="/" className="nav-link">
            Inicio
          </NavLink>
          <NavLink to="/episodios" className="nav-link">
            Episodios
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/ubicacion"
          >
            Ubicacion
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
