import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>First Project </h1>
      <h2>{count}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count Increase
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count Decrease
        </button>
      </div>
    </>
  );
}

export default App;
