import { useState } from 'react';
import './App.css';

function App() {

  const [counter,setCounter] = useState(0);

  const [name, setName] = useState(["1","2","3"]);
  console.log("name",name)

  return (
    <>
      <button onClick={(e) => setCounter(counter - 1)}>-</button>
      <h1>Counter: {counter}</h1>
      <button onClick={(e) => setCounter(counter + 1)}>+</button>
      
      
    </>
  );
}

export default App;
