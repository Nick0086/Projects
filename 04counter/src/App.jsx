import { useState } from 'react';
import './App.css';
function App() {

  const [counter,setCounter] = useState(0);


  return (
    <>
      <button onClick={(e) => setCounter(counter - 1)}>-</button>
      <h1>Counter: {counter}</h1>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
    </>
  );
}

export default App;
