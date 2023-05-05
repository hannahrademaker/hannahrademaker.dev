import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const name = "HANNAH";
const last = "RADEMAKER.";

const Intro = () => {
  const muiTheme = useTheme();

  const nameVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
        ease: "easeOut",
      },
    },
    hover: { color: "#64FFDA" },
  };

  const bioVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 2,
        ease: "easeOut",
      },
    },
  };

  const helloVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="introStyles">
      <Box textAlign="left" py={10}>
        <motion.span
          className="header"
          variants={helloVariants}
          initial="initial"
          animate="animate"
          style={{
            cursor: "default",
            color: muiTheme.palette.text.primary,
            display: "inline-block",
          }}
        >
          HI! I'M
        </motion.span>
        <br />
        {name.split("").map((letter, index) => (
          <motion.span
            className="name"
            key={index}
            variants={nameVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            style={{
              cursor: "default",
              color: muiTheme.palette.text.primary,
              display: "inline-block",
            }}
          >
            {letter}
          </motion.span>
        ))}{" "}
        <br />
        {last.split("").map((letter, index) => (
          <motion.span
            className="name"
            key={index}
            variants={nameVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            style={{
              cursor: "default",
              color: muiTheme.palette.text.primary,
              display: "inline-block",
            }}
          >
            {letter}
          </motion.span>
        ))}{" "}
        <br />
        <motion.span
          className="header"
          variants={bioVariants}
          initial="initial"
          animate="animate"
          style={{
            cursor: "default",
            fontSize: "1.5rem",
            color: muiTheme.palette.text.primary,
            display: "inline-block",
          }}
        >
          I'm a full-stack web developer
        </motion.span>
      </Box>
    </div>
  );
};

export default Intro;
