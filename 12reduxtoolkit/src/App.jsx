import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { decrement, increment } from './Slice/counterSlice';

function App() {

  const [values,setValues] = useState()
  const counterValue = useSelector((state) => state.counter.value);
  const disPatch = useDispatch();

  return (
    <div className="container">
    <h2 className="counter">{counterValue}</h2>
    <div className="buttons">
      <button className="btn" onClick={() => disPatch(increment(values))}>Increment</button>
      <button className="btn" onClick={() => disPatch(decrement(values))}>Decrement</button>
    </div>
    <label htmlFor="in" className="label">Enter value you want to increment or decrement</label>
    <input id="in" type="number" value={values} onChange={(e) => setValues(e.target.value)} placeholder='Enter Value' className="input" />
 </div>
  );
}

export default App;
