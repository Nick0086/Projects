import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import StudentTable from './components/StudentTable';

function App() {

  const [studentData , setStudentData] = useState([]);
  const [editData , setEditData] = useState(null);

  const submitDataHandler = (data) => {
    setStudentData([...studentData,data]);
  }

  const delateHandler = (id) => {
    let newArr = studentData.filter((item,index)=> index !== id );
    setStudentData(newArr);
  }

  const editHandler = (id) => {
    setEditData(null)
    let newArr = studentData.filter((item,index)=> index === id );
    newArr[0].id=id;
    setEditData(...newArr);
  }

  const editDataHandler = (id) => {
    let newArr = studentData;
    newArr[id.id]=id;
    setStudentData(newArr);
    setEditData(null);
  }

  return (
    <div className='app-body'>
      <h1>Student Result Form</h1>
      <Form submitDataHandler={submitDataHandler} editData={editData} editDataHandler={editDataHandler} />
      {
        studentData.length !== 0 && <StudentTable studentData={studentData} delateHandler={delateHandler} editHandler={editHandler} />
      }
    </div>
  );
}

export default App;
