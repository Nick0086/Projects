import React from 'react'
import "./Form.css"

function Form() {
  return (
    <>
      <form className='form-body' >
        <div className='input-group'>
          <label htmlFor="firstName" className='form-label' >First Name:</label>
          <input type="text" name="Name" id="firstName" className='form-input' required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="ac" className='form-label' >Marks in AC:</label>
          <input type="number" name="Name" id="ac" className='form-input' required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="law" className='form-label' >Marks in Law:</label>
          <input type="number" name="Name" id="law" className='form-input' required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="stat" className='form-label' >Marks in Stat:</label>
          <input type="number" name="Name" id="stat" className='form-input' required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="eco" className='form-label' >Marks in Eco:</label>
          <input type="number" name="Name" id="eco" className='form-input' required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="audit" className='form-label' >Marks in Audit:</label>
          <input type="number" name="Name" id="audit" className='form-input' required></input>
        </div>
        <button type="submit" className='submit-btn' >Submit</button>
      </form>
    </>
  )
}

export default Form;