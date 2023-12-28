import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import StudentTable from './components/StudentTable';

function App() {

  const[id,setid] = useState(1)
  const[studentdatas, setStudentDatas] = useState([]);


  // Function to handle form submission and add new student data to the state array
  function submitDataHandler(data) {
    setStudentDatas((pre) => [...pre ,{ ...data,id}])
    setid(id + 1);
  }

  // Function to handle remove student data 
  const removeHandler = (id) => {
    const newdata = studentdatas.filter((data) => data.id !== id)
    setStudentDatas(newdata);
  }






  return (
    <div className='app-body'>
      <h1>Student Result Form</h1>
      <Form submitDataHandler={submitDataHandler} />
      <StudentTable studentdatas={studentdatas} removeHandler={removeHandler} />
    </div>
  );
}

export default App;
