import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './style.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Read and do React labs', completed: false },
    { id: 2, text: 'Cool off and game for a few', completed: false },
    { id: 3, text: 'Code for 5 hours undisturbed', completed: false },
    { id: 4, text: 'Go jogging then hit the gym', completed: false }
  ]);

  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodos([newTodo, ...todos]);
    setInput('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>📋 My To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
