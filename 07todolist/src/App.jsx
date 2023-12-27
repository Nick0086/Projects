import './App.css';
import TodoHeader from './components/TodoHeader';
import { FaSquarePlus } from "react-icons/fa6";
import TodoList from './components/TodoList';


function App() {
  return (
    <>
      <div className='todo-body'>
        <TodoHeader/>
        <div className='todo-input-body' >
            <form className='todo-form' >
              <input type="text" className='task-input' placeholder="Add a new Task..." name="todo"  />
              <button type='submit' className='add-btn'><FaSquarePlus className='plus-icon' /></button>
            </form>
        </div>
        <TodoList/>
      </div>
    </>
  );
}

export default App;
