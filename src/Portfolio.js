import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "DUET",
      description:
        "A social media application that allows users to find friends based on mutual interest in events",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "GROOVE-E",
      description:
        "An app that generates unique posters of a users favorite songs, using the OpenAI and Spotify APIs",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "SINK && SEED",
      description:
        "An ecommerce plant shop for users to filter, search, select and purchase plants",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "DUET",
      description:
        "A social media application that allows users to find friends based on mutual interest in events",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "GROOVE-E",
      description:
        "An app that generates unique posters of a users favorite songs, using the OpenAI and Spotify APIs",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "SINK && SEED",
      description:
        "An ecommerce plant shop for users to filter, search, select and purchase plants",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="projects">
      <div className="portfolio">
        {/* Projects Section */}
        <div className="projects-section">
          {/* <h2 className="projects-title">Projects</h2> */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project"
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: scrollY > index * 100 ? 1 : 0,
                  y: scrollY > index * 100 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
