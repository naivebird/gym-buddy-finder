import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#dc004e', // Pink color
    },
    background: {
      default: '#f0f2f5', // Light gray background
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
