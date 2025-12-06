import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern personal portfolio showcasing my development journey, featuring full-stack applications, interactive UI components, and engineering projects.",
      image: "/Logo/portfolio.webp",
    },
    {
      id: 2,
      title: "Expense Tracker (Front End)",
      description:
        "A simple and intuitive tool to record, organize, and track daily expenses. Designed for clarity and improved personal budgeting.",
      image: "/Logo/expense tracker.webp",
    },
    {
      id: 3,
      title: "Face Recognition Attendance System",
      description:
        "An AI-powered attendance and behavior monitoring system combining face recognition and drowsiness detection for smarter classrooms.",
      image: "/Logo/Prototype.webp",
    },
    {
      id: 4,
      title:
        "IoT Sensor-Based Third Eye: Navigation Aid for the Visually Impaired",
      description:
        "A microcontroller-driven smart glass that assists visually impaired individuals using ultrasonic sensors and GPS tracking.",
      image: "/Logo/smart glass.webp",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-grid">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
