import React, { useState, useEffect, useRef } from 'react'
import "./Form.css"
import Input from './Input';

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

  const changeHandler = (event) => {
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

        <Input
          label="First Name"
          type="text"
          name="name"
          value={marks.name}
          changeHandler={changeHandler}
        />
        <Input
          label="Marks in AC"
          type="number"
          name="sub1"
          value={marks.sub1}
          changeHandler={changeHandler}
        />
        
        <Input
          label="Marks in Law"
          type="number"
          name="sub2"
          value={marks.sub2}
          changeHandler={changeHandler}
        />
        
        <Input
          label="Marks in Stat"
          type="number"
          name="sub3"
          value={marks.sub3}
          changeHandler={changeHandler}
        />
        
        <Input
          label="Marks in Eco"
          type="number"
          name="sub4"
          value={marks.sub4}
          changeHandler={changeHandler}
        />
        
        <Input
          label="Marks in Audit"
          type="number"
          name="sub5"
          value={marks.sub5}
          changeHandler={changeHandler}
        />
        <button type="submit" className='submit-btn' >Submit</button>
      </form>
    </>
  )
}

export default Form;