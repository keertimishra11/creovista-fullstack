import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h2 className="logo">Creovista</h2>
      </div>

      <div className="nav-right">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/clients">Clients</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
