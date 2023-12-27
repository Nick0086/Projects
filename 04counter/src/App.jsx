import { useState } from 'react';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
function App() {

  const [counter,setCounter] = useState(0);


  return (
    <>
      <button onClick={(e) => setCounter(counter - 1)}>-</button>
      <h1>Counter: {counter}</h1>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
      <SpeedInsights/>
      
    </>
  );
}

export default App;
