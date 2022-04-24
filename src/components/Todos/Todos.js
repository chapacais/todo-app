import React from 'react'
import './todos.css';

const Todos = ({ todos }) => {
  return (
    <div className='todos'>
      <h2 className='todos__title'>Todos</h2>
      <ul className='todos__list'>
        {todos.length > 0 ? 
        todos.map(todo => (<li key={todo}>{todo}</li>))
        : 'No Todos Added'}
      </ul>
    </div>
  )
}

export default Todos