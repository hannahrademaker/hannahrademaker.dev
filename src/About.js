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
              src="/public/hannahrad.png"
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
              I started my career as a model and then transitioned into real
              estate development. Along the way, I discovered my love for coding
              and graduated from Fullstack Academy's coding bootcamp.
            </p>
            <p>
              Now, I'm using my diverse skillset to make a difference in various
              ways. My portfolio website showcases my coding projects and
              modeling portfolio. Thank you for visiting, and I hope you enjoy
              exploring my work!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
