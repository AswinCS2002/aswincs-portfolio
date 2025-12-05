import React from 'react'
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" class="skills-section">
  <h2 class="section-title">My Skills</h2>

  <div class="skills-grid">
    <div class="skill-card">
      <img src="Logo/html.png" alt="HTML" />
      <h3>HTML</h3>
      <p>85%</p>
    </div>

    <div class="skill-card">
      <img src="Logo/CSS.png" alt="CSS" />
      <h3>CSS</h3>
      <p>78%</p>
    </div>

    <div class="skill-card">
      <img src="Logo/Javascript.png" alt="JavaScript" />
      <h3>JavaScript</h3>
      <p>60%</p>
    </div>

    <div class="skill-card">
      <img src="Logo/Bootstrap.png" alt="Bootstrap" />
      <h3>Bootstrap</h3>
      <p>65%</p>
    </div>

    <div class="skill-card">
      <img src="Logo/React.png" alt="React" />
      <h3>React</h3>
      <p>75%</p>
    </div>

    <div class="skill-card">
      <img src="Logo/Java.png" alt="Java" />
      <h3>Java</h3>
      <p>65%</p>
    </div>

    <div class="skill-card">
      <img src="Logo/Raspberry Pi.png" alt="Raspberry Pi" />
      <h3>Raspberry Pi</h3>
      <p>50%</p>
    </div>

    <div class="skill-card">
      <img src="Logo/OpenCV.png" alt="OpenCV" />
      <h3>OpenCV</h3>
      <p>50%</p>
    </div>

    <div class="skill-card">
      <img src="Logo/MySQL.png" alt="OpenCV" />
      <h3>MySQL</h3>
      <p>80%</p>
    </div>
  </div>
</section>
  )
}

export default Skills