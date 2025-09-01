import React, { createContext, useContext, useState } from 'react';
import {  ThemeProvider, Button } from '@mui/material';

const ThemeContext = createContext();

function ContextCnt() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
     
          
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      切换主题
    </button> 
  );
}

export default ContextCnt;