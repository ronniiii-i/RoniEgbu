import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import projectsData from "../data/projects";
import Card from "../components/ProjectCard";

function Projects() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [select, setSelect] = useState(false);

  const toggleDropdown = () => {
    setSelect(!select)
  }

  const getAllTechnologies = (data) => {
    const allTechnologies = [];

    // Iterate through the project data
    data.forEach((project) => {
      project.technologies.forEach((tech) => {
        // Add each technology to the allTechnologies array
        if (!allTechnologies.includes(tech)) {
          allTechnologies.push(tech);
        }
      });
    });

    return allTechnologies;
  };
  const technologies = getAllTechnologies(projectsData);


  function handleSelectTag(tag) {
    setSelectedTag(tag);
    console.log(tag, "hi");
  }

  const filteredProjects = selectedTag
    ? projectsData.filter((project) =>
        project.technologies.includes(selectedTag)
      )
    : projectsData;

  return (
    <main id="project">
      <h1>My Projects</h1>
      <section id="projects">
        <div className="sort flex align-center justify-between">
          <h3>SORT</h3>
          <div className="custom-select" onClick={() => toggleDropdown()}>
            <div className="selected flex align-center justify-between">
              <p>{selectedTag == null ? "None" : selectedTag}</p>
              <FaChevronDown />
            </div>
            <ul className={`tags ${select ? "open" : ""}`}>
              <li onClick={() => handleSelectTag(null)}>None</li>
              {technologies.map((tech, index) => (
                <li key={index} onClick={() => handleSelectTag(tech)}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="portfolio-container flex wrap">
          {filteredProjects.map((project) => (
            <Card
              project={project}
              handleSelectTag={handleSelectTag}
              key={project.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
