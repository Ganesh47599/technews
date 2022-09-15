import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <NavLink to="/" className="navbar-brand" style={{ color: "white" }}>
            TechNews
          </NavLink>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink
                to="/"
                className="navbar-brand"
                style={{ color: "white" }}
              >
                Home
              </NavLink>

              <NavLink
                to="/news"
                className="navbar-brand"
                style={{ color: "white" }}
              >
                Mobiles
              </NavLink>
              <NavLink
                to="/about"
                className="navbar-brand"
                style={{ color: "white" }}
              >
                about
              </NavLink>
              <NavLink
                to="/contact"
                className="navbar-brand"
                style={{ color: "white" }}
              >
                contact
              </NavLink>
              <NavLink
                to="/inventory"
                className="navbar-brand"
                style={{ color: "white" }}
              >
                inventory
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
