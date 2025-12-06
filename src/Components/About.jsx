import React from "react";
import "./About.css";

function About() {
  console.log("App reloaded");

  return (
    <>
      <section className="about" id="about">
        <div className="about-container">

          <div className="about-left">
            <img
              src={process.env.PUBLIC_URL + "/About.jpg"}
              alt="profile"
              className="about-img"
            />
          </div>

          <div className="about-right">
            <h3 className="about-label">MY INTRODUCTION</h3>
            <h2>About Me</h2>

            <p>
              I'm an aspiring Java full-stack developer with hands-on experience in building responsive web
              applications using JavaScript, React, Java, Spring Boot, and MySQL. I enjoy creating clean,
              efficient interfaces and solving real-world problems through code. Passionate about learning,
              improving, and staying consistent every day.
            </p>

            <div className="about-info">
              <p><strong>Name:</strong> Aswin Santhosh Kumar</p>
              <p><strong>Education:</strong> B.Tech- Electronics & Communication Engineering</p>
              <p><strong>Location:</strong> Idukki, Kerala</p>
              <p><strong>Email:</strong> aswinsanthoshcs5746@gmail.com</p>
              <p><strong>Phone:</strong> +91 9961347446</p>
              <p><strong>LinkedIn:</strong> www.linkedin.com/in/aswinsk27cs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
