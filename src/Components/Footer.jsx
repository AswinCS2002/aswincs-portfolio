import "./Footer.css";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-name">© 2025 Aswin Santhosh Kumar</h2>
        <p className="footer-tagline">
          • Crafted with passion • Built for the future
        </p>

        <div className="footer-links">
          <HashLink smooth to="/#hero">
            Home
          </HashLink>
          <HashLink smooth to="/#about">
            About
          </HashLink>
          <HashLink smooth to="/#skills">
            Skills
          </HashLink>
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/AswinCS2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aswinsk27cs"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:aswinsanthoshcs5746@gmail.com?subject=Portfolio%20Contact">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
