import React from 'react';
import { createTheme, ThemeProvider, Button } from '@mui/material';
import { deepmerge } from '@mui/utils';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    fontFamily: 'Arial, sans-serif',
    fontSize: 14,
  },
  spacing: 8,
});

const theme2 = createTheme({
  palette: {
    primary1: {
      main: '#21f341ff',
    },
    secondary1: {
      main: '#000cf5ff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 24,
  },
  spacing: 8,
});



const theme3 = createTheme(deepmerge(theme, theme2));

const ButtonTest = () => {
  return (
    <ThemeProvider theme={theme3}>
      <Button variant="contained" color="secondary1">
        Click me!
      </Button>
    </ThemeProvider>
  );
};

export default ButtonTest;