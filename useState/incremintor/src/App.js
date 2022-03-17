import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const defaultValue = 20;


function App() {
  const [count,setCount] = useState(defaultValue);
  const speedUp = () => {
    setCount(count+defaultValue)
  }
  const slowDown = () => {
    setCount(count-defaultValue)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <span>
          <button onClick={() => slowDown()}>-</button>
          <button onClick={() => speedUp()}>+</button>
        </span>
       
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
      </header>
    </div>
  );
}

export default App;
