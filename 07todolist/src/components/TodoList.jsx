import React from 'react'
import { MdDeleteForever } from "react-icons/md";

function TodoList() {
    return (
        <>
            <li className='flex'>
                <input  type="checkbox" className='custom-checkbox' />
                <input id='id' type="text" className='todo-name' value='hello' readOnly />
                <MdDeleteForever className='remove-icon' />
            </li>
        </>
    )
}

export default TodoList