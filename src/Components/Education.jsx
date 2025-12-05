import React from "react";
import "./Education.css";

const educationData = [
  {
    img: "/education/School.webp",
    title: "High School",
    year: "2019",
    description: "School:St.George's High School,Parathode",
    desc:"CGPA:9.6"
  },
  {
    img: "/education/HigherSchool.webp",
    title: "Higher Secondary ",
    year: "2019-21",
    description: "School:SNVHSS NR City",
    department:"Computer Science",
    desc:"CGPA:9.8"
  },
  {
    img: "/education/College.webp",
    title: "Bachelor of Technology",
    year: "2021-25",
    description: "Institution: Mangalam College of EngineeringEttumanoor,Kottayam",
    department:"Department of Electronics & Communication Engineering",
    desc:"CGPA:Still waiting for results",
  }
];

const EducationCarousel = () => {
  return (
    <div className="education-section">
      <h2 className="education-heading">Education</h2>

      <div className="education-grid">
        {educationData.map((item, index) => (
          <div className="edu-card-wrapper" key={index}>
            <div className="edu-border"></div>

            <div className="edu-card">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="edu-year">{item.year}</p>
              <p className="edu-desc">{item.description}</p>
              <p className="edu-department">{item.department}</p>
              <p className="edu-cgpa">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationCarousel;
