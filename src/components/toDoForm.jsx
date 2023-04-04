import React, { useState } from 'react';

const ToDoForm = () => {
  const [todo, setTodo] = useState('');

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    const newTodo = { id: Date.now(), text: todo };
    const updatedTodos = [...existingTodos, newTodo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodo('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4" id="submit">
        <div className="search-bar">
          <label htmlFor="todo" className="form-label">
            <input name="item" value={todo} id="todo" type="text" className="form-control" onChange={handleChange} required />
          </label>
          <button className="btn" type="submit">
            <i className="fa-solid fa-lg fa-circle-plus ps-1 pe-1 plus" />
          </button>
        </div>
      </form>
    </>
  );
};

export default ToDoForm;
