 
import { createTheme, ThemeProvider, Button } from '@mui/material';
import { deepmerge } from '@mui/utils';  
import React, { useState } from 'react';

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
   const [count2, setCount] = useState(0); // 使用 useState

  const increment = () => {
    setCount(count2 + 1);
  };
  const decrement = () => {
    setCount(count2 - 1);
  };

  return (
    <ThemeProvider theme={theme3}> 
      <Button variant="contained" color="secondary1">
        Click me!
      </Button>
        <div>
        <p>22當前計數: {count2}</p>
        <button onClick={increment}>增加</button>
        <button onClick={decrement}>decrease</button>
       </div>
    </ThemeProvider>
  );
};

export default ButtonTest;