import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C3E50", // Deep blue-gray
      light: "#34495E",
      dark: "#1A252F",
    },
    secondary: {
      main: "#E74C3C", // Vibrant red
      light: "#FF6B6B",
      dark: "#C0392B",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",
    },
    text: {
      primary: "#2C3E50",
      secondary: "#7F8C8D",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.8rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2.2rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          fontSize: "1rem",
        },
        contained: {
          boxShadow:
            "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
          "&:hover": {
            boxShadow:
              "0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow:
            "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        },
      },
    },
  },
});

export default theme;
