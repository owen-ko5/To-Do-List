import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className="custom-checkbox"></span>
        <span className="todo-text">{todo.text}</span>
      </label>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>✖</button>
    </div>
  );
};

export default TodoItem;
