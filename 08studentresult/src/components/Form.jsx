import React, { useState, useId, useEffect } from 'react'
import "./Form.css"

function Form({ submitDataHandler, editdata, dataeditHandler }) {


  let [marks, setMarks] = useState({
    name: "",
    sub1: "",
    sub2: "",
    sub3: "",
    sub4: "",
    sub5: "",
    max: "",
    min: "",
    total: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setMarks((prev) => ({ ...prev, [name]: value }))
  }

  const createResult = () => {
    let total = 0;
    let pass = 0;
    let max = marks.sub1;
    let min = marks.sub1;

    for (let i = 1; i <= 5; i++) {
      total += parseInt(marks[`sub${i}`]);
      if (marks[`sub${i}`] >= 40) {
        pass++;
      }
    }

    if (pass === 5) {
      marks["result"] = "Pass";
      marks.percentage = parseFloat(total / 5);
    } else if (pass >= 3 && pass < 5) {
      marks["result"] = "ATKT";
      marks.percentage = "***"
    } else {
      marks["result"] = "Fail";
      marks.percentage = "***"
    }

    for (let i = 1; i <= 5; i++) {
      if (max <= marks[`sub${i}`]) {
        max = marks[`sub${i}`]
      }

      if (min >= marks[`sub${i}`]) {
        min = marks[`sub${i}`]
      }
    }

    marks.total = total;
    marks.max = max;
    marks.min = min;

  }


  const submitHabdler = (e) => {
    e.preventDefault();

    createResult();
    if (editdata) {
      dataeditHandler(marks)
    } else {
      submitDataHandler(marks)
    }

    setMarks((prev) => ({
      ...prev,
      name: "",
      sub1: "",
      sub2: "",
      sub3: "",
      sub4: "",
      sub5: "",
      max: "",
      min: "",
    }))
  }

  useEffect(() => {
    if (editdata) {
      setMarks(...editdata);
    }
  }, [editdata])

  return (
    <>
      <form className='form-body' onSubmit={submitHabdler} >
        <div className='input-group'>
          <label htmlFor="firstName" className='form-label' >First Name:</label>
          <input type="text" name="name" id="firstName" className='form-input' onChange={changeHandler} value={marks.name} required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="ac" className='form-label' >Marks in AC:</label>
          <input type="number" name='sub1' id="ac" className='form-input' onChange={changeHandler} value={marks.sub1} required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="law" className='form-label' >Marks in Law:</label>
          <input type="number" name="sub2" id="law" className='form-input' onChange={changeHandler} value={marks.sub2} required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="stat" className='form-label' >Marks in Stat:</label>
          <input type="number" name="sub3" id="stat" className='form-input' onChange={changeHandler} value={marks.sub3} required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="eco" className='form-label' >Marks in Eco:</label>
          <input type="number" name="sub4" id="eco" className='form-input' onChange={changeHandler} value={marks.sub4} required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="audit" className='form-label' >Marks in Audit:</label>
          <input type="number" name="sub5" id="audit" className='form-input' onChange={changeHandler} value={marks.sub5} required></input>
        </div>
        <button type="submit" className='submit-btn' >Submit</button>
      </form>
    </>
  )
}

export default Form;