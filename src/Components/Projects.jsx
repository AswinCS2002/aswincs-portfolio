import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Port Folio Website",
      description:
        "A curated collection of my development work, featuring full-stack applications, interactive UI components, and engineering projects built using React, Java, Python, and modern web technologies.",
      image: "/Logo/portfolio.webp",
    },
    {
      id: 2,
      title: "Expense Tracker-Front End",
      description:
        "A simple and intuitive tool to record, organize, and track daily expenses with ease. Built to provide clarity and control over personal budgeting.",
      image: "/Logo/expense tracker.webp",
    },
    {
      id: 3,
      title: "Face Recognition Attendance System",
      description:
        "Smart Solutions for Modern Classrooms: Leveraging AI and IoT for Equitable Attendance,Behaviour Monitoring, And Improved teaching",
      image: "/Logo/Prototype.webp",
    },
    {
      id: 4,
      title:"IoT Sensor Based Third Eye: A Sensory Navigation Aid For The Visually Impaired",
      description: "A microcontroller driven smart glass used to navigate for the blind and track the blind person using the neo 6M GPS module",
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
