import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-name">© 2025 Aswin Santhosh Kumar</h2>
        <p className="footer-tagline">
          • Crafted with passion • Built for the future
        </p>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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

          <a href="mailto:aswinsanthoshcs5746@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
