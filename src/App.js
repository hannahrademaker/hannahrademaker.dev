import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import Home from "./Home";
import MouseFollower from "./MouseFollower";
import Nav from "./Nav";

const App = () => {
  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <MouseFollower />
      <Home onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
