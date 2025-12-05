import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      className="project-card"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <div className="project-border"></div>

      <div className="project-content">
        <img src={project.image} alt={project.title} className="project-img" />

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <button className="project-btn">View Details →</button>
      </div>
    </div>
  );
};

export default ProjectCard;
