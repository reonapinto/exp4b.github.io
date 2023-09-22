import React, { useState} from 'react';
import './App.css';
function App() {
  const [count,setCount] = useState(100);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <div className='App'>
      <header className="App-header">
        <h1>Counter App with buttton</h1>
        <p>Counter Value: {count}</p>
        <button onClick={incrementCounter}>Increment</button>
      </header>
    </div>
  );
}
export default App;
