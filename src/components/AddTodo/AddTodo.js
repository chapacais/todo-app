import React from 'react'
import './addtodo.css';
import { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [name, setName] = useState('');

  const submitTodo = (e) => {
    e.preventDefault();

    addTodo(name);

    setName('');
  }

  return (
    <form onSubmit={submitTodo}>
      <input 
      type="text" 
      placeholder='Clean my room' 
      required
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <input type="submit" value="Add Todo" />
    </form>
  )
}

export default AddTodo