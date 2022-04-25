import React from 'react'
import './todo.css';

const Todo = ({ todo, deleteTodo }) => {
  return (
    <>
      <span className='todo'>{todo} <i onClick={() => deleteTodo(todo)} className="fa-solid fa-trash-can"></i></span>
    </>
  )
}

export default Todo