import React, { useState } from "react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT SECTION */}
      <div className="left-section">
        <img
          src={process.env.PUBLIC_URL + "/logo-png.png"}
          alt="logo"
          className="logo"
        />
        <h1 className="name">Aswin Santhosh Kumar</h1>
      </div>

      {/* HAMBURGER BUTTON (ONLY ON MOBILE) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* COLLAPSIBLE MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink smooth to="/#hero">
            Home
          </HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink smooth to="/#skills">
            Skills
          </HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink smooth to="/#internship">
            Internship
          </HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
