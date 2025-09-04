import logo from './logo.svg';
import './App.css';
import InputForm from './InputForm';
import TodoList from './TodoList';

import ButtonTest from './ButtonTest';
import TestHello from './TestHello'; 
// import Counter from './Counter'; 
// import CounterCos from './CounterCos.jsx'; 
import UseEffect from './UseEffect.jsx'; 
import ContextCnt from './ContextCnt.jsx'; 
import ParentComponent from './ParentComponent.jsx'; 
import Counter1 from './features/counter/Counter1.jsx'

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <InputForm  />
        <TestHello  name='bbbt'/>
        <TodoList  />  
         <ButtonTest /> 
          
          <UseEffect /> 
          <ContextCnt /> 
         
         {/* <CounterCos />  */}
         <ParentComponent /> 
         <Counter1 /> 
         
      </header>
      
    </div>
  );
}

export default App;
