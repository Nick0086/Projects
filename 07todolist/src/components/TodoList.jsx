import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";

function TodoList({task,id,deleteTodo}) {

    const[check , setCheck] = useState(false)

    return (
        <>
            <li className='flex'>
                <input  type="checkbox" className='custom-checkbox' onClick={() => setCheck(!check)} />
                <input id='id' type="text" className={`todo-name ${check ? "line" : ''} `} value={task} readOnly />
                <MdDeleteForever className='remove-icon' onClick={(e) => deleteTodo(id)} />
            </li>
        </>
    )
}

export default TodoList