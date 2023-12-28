import './App.css';
import Form from './components/Form';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className='app-body'>
      <h1>Student Result Form</h1>
      <Form/>
      <StudentTable/>
    </div>
  );
}

export default App;
