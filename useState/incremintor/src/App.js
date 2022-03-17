import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const defaultValue = 20;
const incFactor = 5;


function App() {

  const [count,setCount] = useState(defaultValue);

  const speedUp = () => {
    setCount((count > 1) ? count-incFactor : 1)
  }

  const slowDown = () => {
    setCount((count < 40) ? count+incFactor : 40)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <span>
          <button onClick={() => slowDown()}>-</button>
          <button onClick={() => speedUp()}>+</button>
        </span>
       
        <img src={logo} className={"App-logo"} style={{ animation: `App-logo-spin ${count}s linear infinite`}} alt="logo" />
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
