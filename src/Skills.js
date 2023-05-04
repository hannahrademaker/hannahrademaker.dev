import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Redux",
    "Node.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "Express",
    "MongoDB",
    "Framer Motion",
    "Bootstrap",
    "postgreSQL",
    "Git",
    "GitHub",
    "Heroku",
    "Netlify",
    "Python",
    "Ruby on Rails",
    "Python",
  ];

  const chipVariants = {
    hover: { scale: 1.5 },
    tap: { scale: 0.9 },
  };

  return (
    <Box py={10} id="skills">
      <Box py={10}>
        <Typography variant="h4" textAlign="center" mb={5}>
          Skills & Technologies
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={chipVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ margin: "0.5rem" }}
            >
              <Chip label={skill} />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
