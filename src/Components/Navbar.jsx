import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img src="/logo-png.png" alt="logo" className="logo" />
        <h1 className="name">Aswin Santhosh Kumar</h1>
      </div>

      <ul className="nav-links">
        <li><HashLink smooth to="/#hero">Home</HashLink></li>
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><HashLink smooth to="/#skills">Skills</HashLink></li>
        <li><HashLink smooth to="/#internship">Internship</HashLink></li>
        <li><HashLink smooth to="/#projects">Projects</HashLink></li>
        <li><HashLink smooth to="/#contact">Contact</HashLink></li>
      </ul>
    </nav>
  );
}
