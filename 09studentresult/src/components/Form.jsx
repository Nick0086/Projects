import React, {useState } from 'react'
import Input from './Input';
import "./Form.css"


function Form({submitDataHandler,editData,editDataHandler}) {

  console.log(editData)

  const [data,setdata] = useState(true)
  const [result,Setresult] = useState({
    no:'',
    firstname:'',
    lastname:'',
    sub1:'',
    sub2:'',
    sub3:'',
    sub4:'',
    sub5:'',
  });

  // apply this condition for prevent infinity re-rendering
  if(editData && data ){
    Setresult(editData);
    setdata(false);
  }

  
  const changeHandler = (event) => {
    const {name,value} = event.target;
    Setresult({...result,[name]:value})
  }

  const submitHandler = (e) => {
    e.preventDefault();

    result.total = parseInt(result.sub1) + parseInt(result.sub2) + parseInt(result.sub3) + parseInt(result.sub4)+ parseInt(result.sub5);
    result.percentage = (result.total/5).toFixed(2);

    if(editData){
      editDataHandler(result);
      setdata(true);
    }else{
      submitDataHandler(result);
    }
  
    Setresult({
      no:'',
      firstname:'',
      lastname:'',
      sub1:'',
      sub2:'',
      sub3:'',
      sub4:'',
      sub5:'',
    })
  }

  // useEffect(() => {
  //   if(editData){
  //     Setresult(editData)
  //   }
  // },[editData])

  return (
    <form className='form-body' onSubmit={submitHandler} >

      <Input
        label="Roll No"
        type="number"
        name="no"
        value={result.no}
        changeHandler={changeHandler}
      />
      <Input
        label="First Name"
        type="text"
        name="firstname"
        value={result.firstname}
        changeHandler={changeHandler}
      />
      <Input
        label="Last Name"
        type="text"
        name="lastname"
        value={result.lastname}
        changeHandler={changeHandler}
      />
      <Input
        label="Marks in AC"
        type="number"
        name="sub1"
        value={result.sub1}
        changeHandler={changeHandler}
      />

      <Input
        label="Marks in Law"
        type="number"
        name="sub2"
        value={result.sub2}
        changeHandler={changeHandler}
      />

      <Input
        label="Marks in Stat"
        type="number"
        name="sub3"
        value={result.sub3}
        changeHandler={changeHandler}
      />

      <Input
        label="Marks in Eco"
        type="number"
        name="sub4"
        value={result.sub4}
        changeHandler={changeHandler}
      />

      <Input
        label="Marks in Audit"
        type="number"
        name="sub5"
        value={result.sub5}
        changeHandler={changeHandler}
      />
      <button type="submit" className='submit-btn' >Submit</button>
    </form>
  )
}

export default Form;