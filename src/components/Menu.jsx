import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar bg-primary navbar-expand-md" data-bs-theme="dark">
      <NavLink to={"/"} className="navbar-brand">
        FacturasPOS
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              to={"/products"}
              className="nav-link active"
              aria-current="page"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
