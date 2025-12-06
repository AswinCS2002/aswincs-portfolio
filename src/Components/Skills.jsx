import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        
        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + "/Logo/html.png"} alt="HTML" />
          <h3>HTML</h3>
          <p>85%</p>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + "/Logo/CSS.png"} alt="CSS" />
          <h3>CSS</h3>
          <p>78%</p>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + "/Logo/Javascript.png"} alt="JavaScript" />
          <h3>JavaScript</h3>
          <p>60%</p>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + "/Logo/Bootstrap.png"} alt="Bootstrap" />
          <h3>Bootstrap</h3>
          <p>65%</p>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + "/Logo/React.png"} alt="React" />
          <h3>React</h3>
          <p>75%</p>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + "/Logo/Java.png"} alt="Java" />
          <h3>Java</h3>
          <p>65%</p>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + "/Logo/Raspberry Pi.png"} alt="Raspberry Pi" />
          <h3>Raspberry Pi</h3>
          <p>50%</p>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + "/Logo/OpenCV.png"} alt="OpenCV" />
          <h3>OpenCV</h3>
          <p>50%</p>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + "/Logo/MySQL.png"} alt="MySQL" />
          <h3>MySQL</h3>
          <p>80%</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
