import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  text: {
    primary: "#0B192E",
    secondary: "#57DCE2",
  },
  typography: {
    fontfamily: "Source Code Pro",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64FFDA",
    },
    background: {
      default: "#0B192E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#64FFDA",
    },
  },
  typography: {
    fontfamily: "Source Code Pro",
  },
});

export { lightTheme, darkTheme };
