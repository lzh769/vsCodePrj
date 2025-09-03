import React, { createContext, useContext, useState,useReducer } from 'react';
import {  ThemeProvider, Button } from '@mui/material';

const ThemeContext = createContext();

const initialState = { count: 0 };

function ContextCnt() {
  const [theme7, setTheme] = useState('light');
  const themeStyles = {
    light: {
      backgroundColor: '#fff',
      color: '#000',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme7, setTheme }}>
      <div style={{
        padding: '20px',
        ...themeStyles[theme7] // 应用当前主题样式
      }}><ThemedButton /></div>       
    </ThemeContext.Provider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }
// const alertMes = () => { 
//     alert('dd');
//   };


function ThemedButton() {
  const { theme7, setTheme } = useContext(ThemeContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
  <div>
    <button onClick={() => setTheme(theme7 === 'light' ? 'dark' : 'light')}>      
     {/* </button>  <button onClick={ alertMes}>   */}
      切换主题
    </button> 

    <p>当前计数: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>增加</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>减少</button>
  </div>
           
  );
}

export default ContextCnt;