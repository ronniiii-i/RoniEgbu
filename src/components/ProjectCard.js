import React from "react";

const ProjectCard = ({ project, handleSelectTag }) => {
  return (
    <div className="project-card" key={project.id}>
      <div className="img flex justify-center align-center">
        <img src={project.image} alt={project.title} />
        <div className="button-group flex justify-evenly align-center">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
          {project.sourceUrl === "" ? (
            ""
          ) : (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          )}
        </div>
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies flex align-center">
          {project.technologies.map((technology) => (
            <a
              href="javacript:void(0);"
              key={technology}
              onClick={() => handleSelectTag(technology)}
            >
              {technology}
            </a>
          ))}
        </div>
        <div className="button-group flex align-center">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
          {project.sourceUrl === "" ? (
            ""
          ) : (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
