import './App.css';
import TodoHeader from './components/TodoHeader';
import { FaSquarePlus } from "react-icons/fa6";
import TodoList from './components/TodoList';
import { useState ,useId} from 'react';

function App() {

  const [todos , setTodos] = useState([]);
  const [task , setTask] = useState('');
  const [id , setid] = useState(0)
  

  const todoHandler = (e) => {
    e.preventDefault(); 
    setTodos( (prev) => [...prev , {task,id}]);
    console.log(todos)
    setTask('');
    setid(id + 1);
  }

  const deleteTodo = (eId) =>{
    const arry = todos.filter((todo) => todo.id !== eId );
    setTodos(arry);
  }


  return (
    <>
      <div className='todo-body'>
        <TodoHeader/>
        <div className='todo-input-body' >
            <form className='todo-form' onSubmit={todoHandler} >
              <input type="text" className='task-input' placeholder="Add a new Task..." name="todo" value={task} onChange={(e) => setTask(e.target.value)} />
              <button type='submit' className='add-btn'><FaSquarePlus className='plus-icon' /></button>
            </form>
        </div>
        {
          todos.length !== 0 &&
          todos.map((todo) => {
            return <TodoList key={todo.id} {...todo} deleteTodo={deleteTodo}/>
          })
        }
      </div>
    </>
  );
}

export default App;
