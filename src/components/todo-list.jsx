import { useState, useEffect } from 'react';
import './todo-list.scss';

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodoIds, setCompletedTodoIds] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);

    const handleStorageChange = () => {
      const updatedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
      setTodos(updatedTodos);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const handleCheckboxChange = (id) => {
    const completedTodoIndex = completedTodoIds.indexOf(id);
    if (completedTodoIndex === -1) {
      setCompletedTodoIds([...completedTodoIds, id]);
    } else {
      setCompletedTodoIds([
        ...completedTodoIds.slice(0, completedTodoIndex),
        ...completedTodoIds.slice(completedTodoIndex + 1),
      ]);
    }
  };

  return (
    <div>
      <ul className="mt-1">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input className="input checkbox" type="checkbox" onChange={() => handleCheckboxChange(todo.id)} />
            <p className={`item ${completedTodoIds.includes(todo.id) ? 'completed' : ''}`}>{todo.text}</p>
            <button type="submit" className="delete btn" onClick={() => handleDelete(todo.id)} onKeyDown={() => handleDelete(todo.id)}>
              <i className="fa-solid fa-trash" aria-hidden="true" />
              <span className="sr-only">Delete todo</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
