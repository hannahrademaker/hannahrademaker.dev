import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const resumeUrl =
    "https://www.dropbox.com/home?preview=HannahRademakerResume.pdf";
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "background.default", color: "text.primary" }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* You can add a logo icon here if needed */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HR
          </Typography>
        </IconButton>
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
            <Box component="li">
              <ScrollLink
                className="hover"
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Contact
              </ScrollLink>
            </Box>
            <Box component="li" sx={{ ml: 2 }}>
              <a
                href="https://www.dropbox.com/home?preview=HannahRademakerResume.pdf"
                className="hover"
                to={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Box>
          </Box>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
