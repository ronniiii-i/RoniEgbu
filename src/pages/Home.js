import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import Card from "../components/ProjectCard";

import projectsData from "../data/projects";

function Home() {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    // Function to shuffle the data array randomly
    const shuffleData = () => {
      const shuffled = [...projectsData];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledData(shuffled);
    };
    shuffleData(); // Call the shuffleData function once on component mount
  }, []);

  return (
    <main>
      <section id="hero">
        <div className="text">
          <h1>Roni’s Portfolio</h1>
          <p>
            Welcome to Roni's corner of the web, where the art of functional
            frontend development takes center stage. Explore a world of digital
            solutions designed for seamless user experiences. Let's dive into
            the world of practical and user-friendly web applications
          </p>
          <a href="#projects" className="button button-primary">
            Explore Projects
          </a>
        </div>
        <div className="img flex column justify-center align-center">
          <img
            src="https://res.cloudinary.com/qaz2dc/image/upload/v1693761903/Portfolio/hero_ejv8zd.webp"
            alt="Hero"
          />
        </div>
      </section>
      <section id="about" className="grid g-af">
        <div className="text">
          <p>Code, music, repeat! That's how I roll. 🎵</p>
          <p>
            I'm all about creating functional web solutions that work like a
            charm. When I'm not coding, you'll find me enjoying some good music
            and keeping the development cycle going (cause that's all I do
            honestly😂).
          </p>
          <p>
            Let's dive into the world of frontend development together, where
            functionality meets fun! 🚀🎵
          </p>
        </div>
        <div className="skills">
          <h3>Frontend Skills</h3>
          <div className="html"></div>
          <div className="css"></div>
          <div className="js"></div>
          <div className="react"></div>
          <div className="sass"></div>
          <div className="git"></div>
        </div>
      </section>
      {/* Portfolio section */}
      <section id="projects">
        <h2>My Projects</h2>
        <p>
          Explore a trio of my creative endeavors, highlighting beautiful
          designs, intricate code, and captivating visuals. Each project
          reflects my skills and dedication.
        </p>
        <div className="portfolio-container grid g-af">
          {shuffledData.slice(0, 3).map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </div>
        <Link to="/projects" className="button button-primary">
          See All
        </Link>
      </section>
      <section id="cta">
        <h3>
          Interested in collaboration? Let's work together to create something
          magical and inspiring
        </h3>
        <div className="flex">
          <Link to="/contact" className="button button-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
