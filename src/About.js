import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
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
    <div id="about">
      <div className="about-section">
        <motion.div
          className="about-title"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: scrollY > 50 ? 1 : 0,
            x: scrollY > 50 ? 0 : 100,
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="about-title">ABOUT</h2>
        </motion.div>
        <div className="about-content">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: scrollY > 50 ? 1 : 0,
              x: scrollY > 50 ? 0 : -100,
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/hannahrad.png"
              alt="Hannah Rademaker"
              className="about-image"
            />
          </motion.div>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: scrollY > 50 ? 1 : 0,
              x: scrollY > 50 ? 0 : 100,
            }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Fullstack software developer proficient in Javascript, React, and
              Node.js, with experience building REST APIs using Express and
              PostgreSQL. Bringing a diverse background encompassing real estate
              development, startup internships, and an intensive coding
              bootcamp. Eager to apply my enthusiasm for technology, strong work
              ethic, and technical skills to make a meaningful impact within a
              dynamic software development team.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
