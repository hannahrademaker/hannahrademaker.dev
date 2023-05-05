import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";
import Resume from "./Resume";
const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "background.default", color: "text.primary" }}
    >
      <Toolbar>
        <img src="../2.png" alt="logo" className="logo" />
        <Box sx={{ flexGrow: 1 }} />
        <nav className="navStyles">
          <Box
            component="ul"
            sx={{ display: "flex", listStyle: "none", p: 0, m: 0 }}
          >
            <Box component="li" sx={{ mr: 2 }}>
              <ScrollLink
                className="hover"
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Home
              </ScrollLink>
            </Box>
            <Box component="li" sx={{ mr: 2 }}>
              <ScrollLink
                className="hover"
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
              >
                About
              </ScrollLink>
            </Box>
            <Box component="li" sx={{ mr: 2 }}>
              <ScrollLink
                className="hover"
                to="skills"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Skills
              </ScrollLink>
            </Box>
            <Box component="li" sx={{ mr: 2 }}>
              <ScrollLink
                className="hover"
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Projects
              </ScrollLink>
            </Box>
            {/* <Box component="li">
              <ScrollLink
                className="hover"
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Contact
              </ScrollLink>
            </Box> */}

            <Box component="li" sx={{ ml: 2 }}>
              <Box
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "#64ffda", textDecoration: "none" },
                }}
              >
                <Resume />
              </Box>
            </Box>
          </Box>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
