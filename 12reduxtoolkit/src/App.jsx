import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { decrement, increment } from './Slice/counterSlice';

function App() {

  const [values,setValues] = useState()
  const counterValue = useSelector((state) => state.counter.value);
  const disPatch = useDispatch();

  return (
   <div>
      <h2>{counterValue}</h2>
      <button onClick={disPatch(increment(values))} >Increment</button>
      <button onClick={disPatch(decrement(values))}>Decrement</button>
      <input type="text" value={values} onChange={(e) => setValues(e.target.value)} />
   </div>
  );
}

export default App;
