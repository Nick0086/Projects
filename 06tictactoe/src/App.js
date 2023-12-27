import React, { useEffect, useState } from 'react'
import "./App.css"
function App() {

  const [box, setbox] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState('');
  const [error, setError] = useState('');
  const [winner, setWinner] = useState('');

  function handleui(index) {
    if (turn !== '') {
      setError('')
      // first create copy of box
      const newbox = [...box];
      // change in copy arry
      newbox[index] = turn;
      // store copy arry in main array setboox
      setbox(newbox)

      if (turn === "x") {
        setTurn('o')
      } else {
        setTurn('x')
      }

      wincall();
    } else {
      setError("Please Select Your Sign")
    }
  };

  function wincall() {
    win(0, 1, 2, 'x');
    win(3, 4, 5, 'x');
    win(6, 7, 8, 'x');
    win(0, 4, 8, 'x');
    win(2, 4, 6, 'x');
    win(0, 3, 6, 'x');
    win(1, 4, 7, 'x');
    win(2, 5, 8, 'x');
    win(0, 1, 2, 'o');
    win(3, 4, 5, 'o');
    win(6, 7, 8, 'o');
    win(0, 4, 8, 'o');
    win(2, 4, 6, 'o');
    win(0, 3, 6, 'o');
    win(1, 4, 7, 'o');
    win(2, 5, 8, 'o');
  }


  function win(v1, v2, v3, s) {
    console.log(box[v1] === s && box[v2] === s && box[v3] === s)
    if (box[v1] === s && box[v2] === s && box[v3] === s) {
      setWinner(s)
      setTurn('');
    }
  }

  function reset() {
    setWinner('');
    setbox(['', '', '', '', '', '', '', '', '']);
    setTurn('');
  }

  useEffect(() => {
    wincall()
  }, [box])


  return (
    <div className="game-bord" id="game-bord">
      {/* <!-- ================== Game title ========================= --> */}
      <h1 className="game-title">Tic Tac Toc</h1>

      {/* <!-- =========================== choose button =========================== --> */}

      <div className="choose-btn-box">
        <button className="btn" onClick={(e) => setTurn('x')} disabled={turn !== "" ? true : false}>x</button>
        <button className="btn" onClick={(e) => setTurn('o')} disabled={turn !== "" ? true : false}>o</button>
      </div>

      <div>
        {
          turn !== "" && <p className='display'>current turn of {turn}</p>
        }
        {
          error !== "" && <p className='display'>current turn of {error}</p>
        }
        {
          winner !== "" && <p className='display'>Winner is {winner}</p>
        }
      </div>

      <div class="flex">
        <button className="flex-box bt-none bl-none" onClick={(e) => handleui(0)} disabled={box[0] !== "" || winner !== '' ? true : false} >{box[0]}</button>
        <button className="flex-box bt-none" onClick={(e) => handleui(1)} disabled={box[1] !== "" || winner !== '' ? true : false} >{box[1]}</button>
        <button className="flex-box bt-none br-none" onClick={(e) => handleui(2)} disabled={box[2] !== "" || winner !== '' ? true : false}  >{box[2]}</button>
        <button className="flex-box bl-none" onClick={(e) => handleui(3)} disabled={box[3] !== "" || winner !== '' ? true : false} >{box[3]}</button>
        <button className="flex-box" onClick={(e) => handleui(4)} disabled={box[4] !== "" || winner !== '' ? true : false} >{box[4]}</button>
        <button className="flex-box br-none" onClick={(e) => handleui(5)} disabled={box[5] !== "" || winner !== '' ? true : false} >{box[5]}</button>
        <button className="flex-box bb-none bl-none" onClick={(e) => handleui(6)} disabled={box[6] !== "" || winner !== '' ? true : false} >{box[6]}</button>
        <button className="flex-box bb-none" onClick={(e) => handleui(7)} disabled={box[7] !== "" || winner !== '' ? true : false} >{box[7]}</button>
        <button className="flex-box bb-none br-none" onClick={(e) => handleui(8)} disabled={box[8] !== "" || winner !== '' ? true : false} >{box[8]}</button>
      </div>
      <button className="btn re-btn" id="btn" onClick={() => reset()} >Restart</button>
    </div>
  )
}

export default App