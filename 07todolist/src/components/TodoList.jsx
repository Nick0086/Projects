import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit, FaSave } from "react-icons/fa";

function TodoList({ task, id, deleteTodo, newTask }) {

    const [check, setCheck] = useState(false);
    const [edit, setEdit] = useState(false);
    const [newvalue, setNewvalue] = useState(task)

    const editHandler = () => {
        if (!edit) {
            setEdit(!edit)
        } else {
            newTask(newvalue , id);
            setEdit(!edit)
        }
    }

    return (
        <>
            <li className='flex'>
                <input type="checkbox" className='custom-checkbox' onClick={() => setCheck(!check)} />
                <input id='id' type="text" className={`todo-name ${check ? "line" : ''} ${edit ? "task-input" : ''} `} value={newvalue} readOnly={!edit} onChange={(e) => setNewvalue(e.target.value)} />
                <div className='remove-icon' onClick={editHandler} >
                    {
                        !edit ? <FaEdit /> : <FaSave/>
                    }
                </div>
                <MdDeleteForever className='remove-icon edit' onClick={(e) => deleteTodo(id)} />
            </li>
        </>
    )
}

export default TodoList