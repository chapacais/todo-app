import React from 'react'
import './todos.css';
import Todo from '../Todo/Todo';

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div className='todos'>
      <h2 className='todos__title'>Todos</h2>
      <ul className='todos__list'>
        {todos.length > 0 ? 
        todos.map(todo => (<li key={todo}><Todo deleteTodo={deleteTodo} todo={todo} /></li>))
        : 'No Todos Added'}
      </ul>
    </div>
  )
}

export default Todos