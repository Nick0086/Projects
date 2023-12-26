import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [disValue, setDisValue] = useState(0);
  const [fvalue, setFValue] = useState(0);
  const [oprater, setOprater] = useState('');

  const handleClick = (e) => {
    if (disValue == 0) {
      setDisValue(e);
    } else {
      setDisValue(disValue + e);
    }
  }

  const add = (e) => {
    setFValue(disValue);
    setOprater(e);
    setDisValue('')
  };

  const get = () => {
    if (oprater == '+') {
      setDisValue(parseFloat(disValue) + parseFloat(fvalue))
    } else if (oprater == '-') {
      setDisValue(parseFloat(disValue) - parseFloat(fvalue))
    } else if (oprater == "*") {
      setDisValue(parseFloat(disValue) * parseFloat(fvalue))
    } else {
      setDisValue(parseFloat(disValue) / parseFloat(fvalue))
    }
  };

  const dels = ()=>{
    let str= disValue.toString();
    setDisValue(str.slice(0,-1));
  }

  const per = ()=> {
    setDisValue(parseFloat(disValue)/100)
  }

  const del = () => {
    setDisValue(0);
    setOprater('');
    setFValue('');
  }




  // useEffect(()=> {

  // },[disValue,handleClick])

  return (
    <>
      <div className='calculatorbody' >
        <input type='text' name="diaplay" value={disValue} className='display' readOnly></input>
        <div className='calculatorbutton'>
          <button onClick={() => del()} className='btn-deg btn-c' >C</button>
          <button onClick={() => dels()} className='btn-deg btn-c'>DEL</button>
          <button onClick={() => per('%')} className='btn-deg btn-c' >%</button>
          <button onClick={() => add('/')} className='btn-deg btn-c' >/</button>
          <button onClick={() => handleClick('7')} className='btn-deg' >7</button>
          <button onClick={() => handleClick('8')} className='btn-deg' >8</button>
          <button onClick={() => handleClick('9')} className='btn-deg' >9</button>
          <button onClick={() => add('*')} className='btn-deg btn-c'>*</button>
          <button onClick={() => handleClick('4')} className='btn-deg' >4</button>
          <button onClick={() => handleClick('5')} className='btn-deg' >5</button>
          <button onClick={() => handleClick('6')} className='btn-deg' >6</button>
          <button onClick={() => add('-')} className='btn-deg btn-c'>-</button>
          <button onClick={() => handleClick('1')} className='btn-deg' >1</button>
          <button onClick={() => handleClick('2')} className='btn-deg' >2</button>
          <button onClick={() => handleClick('3')} className='btn-deg' >3</button>
          <button onClick={() => add('+')} className='btn-deg btn-c'>+</button>
          <button onClick={() => handleClick('0')} className='btn-deg' >0</button>
          <button onClick={() => handleClick('.')} className='btn-deg' >.</button>
          <button onClick={() => get('=')} className='btn-deg w-50 btn-t'>=</button>

        </div>
      </div>

    </>
  );
}

export default App;
