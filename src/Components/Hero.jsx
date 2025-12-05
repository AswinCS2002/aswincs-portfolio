import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Aswin Santhosh Kumar</span>
          <br></br>I build responsive and modern website
        </h1>
        <h2>• Java Full Stack Developer • Electronics Engineer </h2>
        <h2>• Tech Enthusiast • Front End Developer</h2>
        <p>
          A passionate developer with hands-on experience in web development and
          a strong foundation in engineering. I create clean, modern web
          experiences and love solving real-world problems with technology.
        </p>

        <button
          className="hero-btn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Me
        </button>

        <a
          href="/AswinResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          Resume
        </a>
      </div>

      <div className="hero-right">
        <img src="/Profile.jpg" alt="Aswin Profile" className="hero-img" />
      </div>
    </section>
  );
}
