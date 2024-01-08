import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import StudentTable from './components/StudentTable';

function App() {

  const[id,setid] = useState(1)
  const[studentdatas, setStudentDatas] = useState([]);
  const[editdata , setEditdata] = useState()


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

  const geteditdata = (id) => {
    const editdata= studentdatas.filter((item)=> item.id === id )
    setEditdata(editdata);
  }

  const dataeditHandler = (id) => {
    const newdata = studentdatas.map((data) => data.id === id.id ? id : data)
    setStudentDatas(newdata)
  }


  return (
    <div className='app-body'>
      <h1>Student Result Form</h1>
      <Form submitDataHandler={submitDataHandler} editdata={editdata} dataeditHandler={dataeditHandler}  />
      {
        studentdatas.length !== 0 && <StudentTable studentdatas={studentdatas} removeHandler={removeHandler} geteditdata={geteditdata} />
      }
    </div>
  );
}

export default App;
