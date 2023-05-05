import React, { useState, useEffect } from "react";
import { Container, Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Intro from "./Intro";
import About from "./About";

const Home = ({ onToggleTheme }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div id="home">
      <Box
        sx={{ backgroundColor: "background.default", color: "text.primary" }}
      >
        <IconButton sx={{ ml: 1 }} onClick={onToggleTheme} color="inherit">
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Container>
          <Intro />
          <About />
          <Portfolio />
          <Skills />
        </Container>
      </Box>
    </div>
  );
};

export default Home;
