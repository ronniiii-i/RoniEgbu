import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdTune } from "react-icons/md";
import { ThreeDots } from "react-loader-spinner";
import projectsData from "../data/projects";
import Card from "../components/ProjectCard";

function Projects() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [select, setSelect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const toggleDropdown = () => {
    setSelect(!select);
  };

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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const filtered = selectedTag
        ? projectsData.filter((project) =>
            project.technologies.includes(selectedTag)
          )
        : projectsData;

      setFilteredProjects(filtered);
    }, 1000);
  }, [selectedTag]);

  function handleSelectTag(tag) {
    setSelectedTag(tag);
  }

  return (
    <main id="project">
      <h1>My Projects</h1>
      <section id="projects">
        <div className="sort flex align-center justify-between">
          <h3 className="flex align-center">Filter
            <MdTune />
          </h3>
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
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName="loader"
            visible={true}
          />
        ) : (
          <div className="portfolio-container flex wrap">
            {filteredProjects.map((project) => (
              <Card
                project={project}
                handleSelectTag={handleSelectTag}
                key={project.id}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Projects;
