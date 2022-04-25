import { useState, useEffect } from 'react';
import Todos from "./components/Todos/Todos";
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, [])

  const addTodo = (todo) => {
    const addedTodos = [...todos, todo];
    setTodos(addedTodos);
    localStorage.setItem('todos', JSON.stringify(addedTodos));
  };

  const clearTodos = () => {
    const clearedTodos = [];
    setTodos(clearedTodos)
    localStorage.setItem('todos', JSON.stringify(clearedTodos));
  };

  const deleteTodo = (todo) => {
    const currentTodos = todos.filter(thisTodo => thisTodo != todo);
    setTodos(currentTodos);
    localStorage.setItem('todos', JSON.stringify(currentTodos));
  }

  return (
    <div className="App">
      <div className="container">
        <AddTodo addTodo={addTodo} />
        <Todos deleteTodo={deleteTodo} todos={todos}/>
        <button className='clear-btn' onClick={clearTodos}>Clear Todos</button>
      </div>
    </div>
  );
}

export default App;
